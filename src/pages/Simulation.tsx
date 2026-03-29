import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';

// --- Types ---
type NodeStatus = 'idle' | 'receiving' | 'active' | 'acknowledged' | 'failed';
type RelayType = 'Mosque' | 'Temple' | 'Hospital' | 'Shelter' | 'Union Parishad';
type Region = 'Nationwide' | 'Coastal Region' | 'Chattogram' | 'Sylhet' | 'Khulna' | 'Barishal' | 'Dhaka' | 'Rajshahi' | 'Rangpur' | 'Mymensingh';
type DisasterType = 'Flood' | 'Cyclone' | 'Heavy Rainfall' | 'Landslide' | 'Storm Surge';
type Severity = 'Low' | 'Medium' | 'High' | 'Critical';
type SimSpeed = 'Slow' | 'Normal' | 'Fast';

interface SimNode {
  id: string;
  x: number; // 0-100
  y: number; // 0-100
  region: Region;
  status: NodeStatus;
  type: RelayType;
  district: string;
  coverageRadius: number;
  delay: number;
  lastAlert?: string;
}

interface LogEntry {
  id: string;
  time: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
}

// --- Mock Data Generation ---
const generateNodes = (): SimNode[] => {
  const regions: Region[] = ['Chattogram', 'Sylhet', 'Khulna', 'Barishal', 'Dhaka', 'Rajshahi', 'Rangpur', 'Mymensingh'];
  const types: RelayType[] = ['Mosque', 'Temple', 'Hospital', 'Shelter', 'Union Parishad'];
  const nodes: SimNode[] = [];

  // Approximate coordinates for Bangladesh divisions
  const regionCenters: Record<string, { x: number, y: number }> = {
    'Dhaka': { x: 50, y: 45 },
    'Chattogram': { x: 80, y: 70 },
    'Sylhet': { x: 75, y: 25 },
    'Khulna': { x: 35, y: 70 },
    'Barishal': { x: 55, y: 75 },
    'Rajshahi': { x: 25, y: 35 },
    'Rangpur': { x: 30, y: 15 },
    'Mymensingh': { x: 55, y: 25 },
  };

  for (let i = 0; i < 120; i++) {
    const region = regions[Math.floor(Math.random() * regions.length)];
    const center = regionCenters[region];
    
    // Spread nodes around centers
    const x = center.x + (Math.random() - 0.5) * 20;
    const y = center.y + (Math.random() - 0.5) * 20;
    
    const finalX = Math.max(5, Math.min(95, x));
    const finalY = Math.max(5, Math.min(95, y));

    // Calculate distance from center (50, 50) for radial delay
    const dx = finalX - 50;
    const dy = finalY - 50;
    const distance = Math.sqrt(dx * dx + dy * dy);

    nodes.push({
      id: `NODE-${i.toString().padStart(3, '0')}`,
      x: finalX,
      y: finalY,
      region,
      status: 'idle',
      type: types[Math.floor(Math.random() * types.length)],
      district: `${region} District ${Math.floor(Math.random() * 5) + 1}`,
      coverageRadius: 25,
      delay: distance * 150 + Math.random() * 500, // Radial spread delay
    });
  }
  return nodes;
};

// --- Components ---

const StatusChip = ({ status }: { status: string }) => {
  const colors: Record<string, string> = {
    'idle': 'bg-slate-100 text-slate-600',
    'receiving': 'bg-amber-100 text-amber-600 animate-pulse',
    'active': 'bg-emerald-100 text-emerald-600',
    'acknowledged': 'bg-purple-100 text-purple-600',
    'failed': 'bg-rose-100 text-rose-600',
  };
  return (
    <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${colors[status] || 'bg-slate-100'}`}>
      {status}
    </span>
  );
};

export default function Simulation() {
  const [nodes, setNodes] = useState<SimNode[]>([]);
  const [simStatus, setSimStatus] = useState<'idle' | 'running' | 'paused' | 'finished'>('idle');
  const [disaster, setDisaster] = useState<DisasterType>('Cyclone');
  const [severity, setSeverity] = useState<Severity>('High');
  const [regionFilter, setRegionFilter] = useState<Region | 'Nationwide' | 'Coastal Region'>('Nationwide');
  const [speed, setSpeed] = useState<SimSpeed>('Normal');
  const [showCoverage, setShowCoverage] = useState(true);
  const [showLinks, setShowLinks] = useState(true);
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [selectedNode, setSelectedNode] = useState<SimNode | null>(null);
  
  const timerRefs = useRef<NodeJS.Timeout[]>([]);

  useEffect(() => {
    setNodes(generateNodes());
  }, []);

  const addLog = (message: string, type: LogEntry['type'] = 'info') => {
    setLogs(prev => [{
      id: Math.random().toString(36).substr(2, 9),
      time: new Date().toLocaleTimeString([], { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' }),
      message,
      type
    }, ...prev].slice(0, 50));
  };

  const resetSimulation = () => {
    timerRefs.current.forEach(clearTimeout);
    timerRefs.current = [];
    setNodes(prev => prev.map(n => ({ ...n, status: 'idle' })));
    setSimStatus('idle');
    setLogs([]);
    addLog('Simulation reset. Ready.');
  };

  const startSimulation = () => {
    if (simStatus === 'running') return;
    
    setSimStatus('running');
    addLog(`Alert initiated: ${disaster} (${severity})`, 'warning');
    addLog('LoRaWAN Gateway activated. Broadcasting packets...', 'info');

    const speedMultiplier = speed === 'Slow' ? 2.5 : speed === 'Fast' ? 0.5 : 1.2;
    const severityMultiplier = severity === 'Critical' ? 0.4 : 1;
    const effectiveMultiplier = speedMultiplier * severityMultiplier;

    nodes.forEach((node, idx) => {
      // ... existing region logic ...
      const isCoastal = ['Chattogram', 'Khulna', 'Barishal'].includes(node.region);
      const isTarget = 
        regionFilter === 'Nationwide' || 
        (regionFilter === 'Coastal Region' && isCoastal) ||
        node.region === regionFilter;

      if (!isTarget) return;

      // Stage 1: Receiving
      const t1 = setTimeout(() => {
        setNodes(prev => prev.map(n => n.id === node.id ? { ...n, status: 'receiving' } : n));
      }, node.delay * effectiveMultiplier);

      // Stage 2: Active
      const t2 = setTimeout(() => {
        const failed = Math.random() < (severity === 'Critical' ? 0.03 : 0.1);
        setNodes(prev => prev.map(n => n.id === node.id ? { ...n, status: failed ? 'failed' : 'active' } : n));
        if (failed) addLog(`${node.id} failed to respond`, 'error');
      }, (node.delay + 800 + Math.random() * 500) * effectiveMultiplier);

      // Stage 3: Acknowledged
      const t3 = setTimeout(() => {
        setNodes(prev => prev.map(n => n.id === node.id && n.status === 'active' ? { ...n, status: 'acknowledged' } : n));
      }, (node.delay + 2000 + Math.random() * 1000) * effectiveMultiplier);

      timerRefs.current.push(t1, t2, t3);
    });

    // Final check for completion
    const maxDelay = Math.max(...nodes.map(n => n.delay)) * effectiveMultiplier + 4000;
    const tFinal = setTimeout(() => {
      setSimStatus('finished');
      addLog('Simulation cycle completed.', 'success');
    }, maxDelay);
    timerRefs.current.push(tFinal);
  };

  const stats = useMemo(() => {
    const total = nodes.length;
    const active = nodes.filter(n => n.status !== 'idle').length;
    const reached = nodes.filter(n => ['active', 'acknowledged'].includes(n.status)).length;
    const acknowledged = nodes.filter(n => n.status === 'acknowledged').length;
    const failed = nodes.filter(n => n.status === 'failed').length;
    const coverage = total > 0 ? Math.round((reached / total) * 100) : 0;
    
    return { total, active, reached, acknowledged, failed, coverage };
  }, [nodes]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col font-sans text-slate-900 dark:text-slate-100">
      {/* --- Header --- */}
      <header className="h-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-6 flex items-center justify-between sticky top-0 z-30">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center text-white">
            <span className="material-symbols-outlined">sensors</span>
          </div>
          <div>
            <h1 className="text-lg font-black tracking-tight leading-none">Shatorko BD – LoRaWAN Alert Simulation</h1>
            <p className="text-xs text-slate-500 font-medium">Bangladesh Last-Mile Early Warning Prototype</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2 ${simStatus === 'running' ? 'bg-amber-100 text-amber-600' : 'bg-slate-100 text-slate-500'}`}>
            <div className={`w-1.5 h-1.5 rounded-full ${simStatus === 'running' ? 'bg-amber-600 animate-ping' : 'bg-slate-400'}`}></div>
            {simStatus === 'idle' ? 'Ready' : simStatus === 'running' ? 'Simulating' : simStatus === 'paused' ? 'Paused' : 'Finished'}
          </div>
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        {/* --- Left Control Panel --- */}
        <aside className="w-72 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 overflow-y-auto p-6 space-y-8">
          <section>
            <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-4">Disaster Configuration</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold mb-1.5 opacity-70">Disaster Type</label>
                <select 
                  value={disaster}
                  onChange={(e) => setDisaster(e.target.value as DisasterType)}
                  className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
                >
                  <option>Flood</option>
                  <option>Cyclone</option>
                  <option>Heavy Rainfall</option>
                  <option>Landslide</option>
                  <option>Storm Surge</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold mb-1.5 opacity-70">Severity Level</label>
                <div className="grid grid-cols-2 gap-2">
                  {['Low', 'Medium', 'High', 'Critical'].map(s => (
                    <button
                      key={s}
                      onClick={() => setSeverity(s as Severity)}
                      className={`px-2 py-1.5 rounded-md text-[10px] font-bold uppercase transition-all ${severity === s ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-500/20' : 'bg-slate-100 dark:bg-slate-800 text-slate-500 hover:bg-slate-200'}`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold mb-1.5 opacity-70">Target Region</label>
                <select 
                  value={regionFilter}
                  onChange={(e) => setRegionFilter(e.target.value as any)}
                  className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
                >
                  <option>Nationwide</option>
                  <option>Coastal Region</option>
                  <option>Dhaka</option>
                  <option>Chattogram</option>
                  <option>Sylhet</option>
                  <option>Khulna</option>
                  <option>Barishal</option>
                  <option>Rajshahi</option>
                  <option>Rangpur</option>
                  <option>Mymensingh</option>
                </select>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-4">Simulation Controls</h3>
            <div className="space-y-3">
              <button 
                onClick={startSimulation}
                disabled={simStatus === 'running'}
                className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white font-bold py-3 rounded-xl shadow-xl shadow-emerald-500/20 flex items-center justify-center gap-2 transition-all active:scale-95"
              >
                <span className="material-symbols-outlined text-sm">play_arrow</span>
                Start Simulation
              </button>
              <div className="grid grid-cols-2 gap-2">
                <button 
                  onClick={() => setSimStatus('paused')}
                  className="bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-600 dark:text-slate-300 font-bold py-2 rounded-lg text-xs flex items-center justify-center gap-1"
                >
                  <span className="material-symbols-outlined text-xs">pause</span>
                  Pause
                </button>
                <button 
                  onClick={resetSimulation}
                  className="bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-600 dark:text-slate-300 font-bold py-2 rounded-lg text-xs flex items-center justify-center gap-1"
                >
                  <span className="material-symbols-outlined text-xs">refresh</span>
                  Reset
                </button>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-4">Display Options</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold opacity-70">Simulation Speed</span>
                <div className="flex bg-slate-100 dark:bg-slate-800 rounded-lg p-0.5">
                  {['Slow', 'Normal', 'Fast'].map(s => (
                    <button
                      key={s}
                      onClick={() => setSpeed(s as SimSpeed)}
                      className={`px-2 py-1 rounded-md text-[8px] font-black uppercase transition-all ${speed === s ? 'bg-white dark:bg-slate-700 shadow-sm text-emerald-600' : 'text-slate-400'}`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
              <Toggle label="Show Coverage Circles" active={showCoverage} onToggle={setShowCoverage} />
              <Toggle label="Show Active Links" active={showLinks} onToggle={setShowLinks} />
            </div>
          </section>

          <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
            <div className="bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded-xl border border-emerald-100 dark:border-emerald-900/30">
              <p className="text-[10px] font-black text-emerald-700 dark:text-emerald-400 uppercase tracking-widest mb-2">Legend</p>
              <div className="space-y-2">
                <LegendItem color="bg-slate-300" label="Idle / Offline" />
                <LegendItem color="bg-amber-400" label="Receiving Packet" />
                <LegendItem color="bg-emerald-500" label="Active Alert" />
                <LegendItem color="bg-purple-500" label="Acknowledged" />
                <LegendItem color="bg-rose-500" label="Failed / No Signal" />
              </div>
            </div>
          </div>
        </aside>

        {/* --- Main Center Area (Map) --- */}
        <main className="flex-1 relative bg-slate-50 dark:bg-slate-950 overflow-hidden flex items-center justify-center p-8">
          {/* Map Container */}
          <div className="relative w-full h-full max-w-2xl aspect-[2/3] bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden">
            {/* Detailed Bangladesh SVG Outline */}
            <svg viewBox="0 0 400 600" className="absolute inset-0 w-full h-full p-8 opacity-10 dark:opacity-20 pointer-events-none">
              <path 
                d="M130,20 L170,10 L200,30 L250,50 L290,60 L330,120 L360,150 L340,190 L300,200 L320,250 L360,350 L380,450 L370,550 L340,580 L320,520 L300,480 L270,500 L240,530 L210,500 L180,520 L150,490 L120,510 L90,450 L60,380 L40,300 L70,250 L50,180 L80,120 L110,80 Z" 
                fill="currentColor" 
                className="text-slate-400"
              />
              {/* Coastal Islands */}
              <circle cx="240" cy="560" r="5" fill="currentColor" className="text-slate-400" />
              <circle cx="270" cy="540" r="4" fill="currentColor" className="text-slate-400" />
              <circle cx="200" cy="550" r="6" fill="currentColor" className="text-slate-400" />
            </svg>

            {/* Active Links Overlay */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-15">
              <AnimatePresence>
                {showLinks && simStatus === 'running' && nodes.map(node => (
                  node.status !== 'idle' && (
                    <motion.line
                      key={`link-${node.id}`}
                      x1="50%" y1="50%"
                      x2={`${node.x}%`} y2={`${node.y}%`}
                      stroke="rgba(16, 185, 129, 0.3)"
                      strokeWidth="1.5"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                    />
                  )
                ))}
              </AnimatePresence>
            </svg>

            {/* Central Source (Gateway) */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
              <div className="w-6 h-6 bg-emerald-600 rounded-full flex items-center justify-center text-white shadow-xl shadow-emerald-500/50 border-4 border-white dark:border-slate-900">
                <span className="material-symbols-outlined text-xs">hub</span>
              </div>
              {simStatus === 'running' && (
                <motion.div 
                  initial={{ scale: 0, opacity: 0.5 }}
                  animate={{ scale: 10, opacity: 0 }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 bg-emerald-500 rounded-full"
                />
              )}
            </div>

            {/* Nodes Overlay */}
            <div className="absolute inset-0 p-8">
              {nodes.map((node) => (
                <NodePoint 
                  key={node.id} 
                  node={node} 
                  showCoverage={showCoverage}
                  showLinks={showLinks && simStatus === 'running' && node.status !== 'idle'}
                  onClick={() => setSelectedNode(node)}
                />
              ))}
            </div>

            {/* Watermark / Info */}
            <div className="absolute bottom-6 left-6 text-[10px] font-black uppercase tracking-widest text-slate-300 dark:text-slate-700">
              Shatorko BD Simulation Engine v1.0
            </div>
          </div>

          {/* Node Detail Card (Overlay) */}
          <AnimatePresence>
            {selectedNode && (
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="absolute right-8 top-8 w-64 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 p-5 z-40"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="font-black text-sm">{selectedNode.id}</h4>
                    <p className="text-[10px] text-slate-500 font-bold uppercase">{selectedNode.district}</p>
                  </div>
                  <button onClick={() => setSelectedNode(null)} className="text-slate-400 hover:text-slate-600">
                    <span className="material-symbols-outlined text-lg">close</span>
                  </button>
                </div>
                <div className="space-y-3">
                  <DetailRow label="Status" value={<StatusChip status={selectedNode.status} />} />
                  <DetailRow label="Relay Type" value={selectedNode.type} />
                  <DetailRow label="Region" value={selectedNode.region} />
                  <DetailRow label="Coverage" value={`${selectedNode.coverageRadius} km`} />
                  <DetailRow label="Last Alert" value={selectedNode.status === 'idle' ? 'None' : 'Just now'} />
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
                  <button className="w-full py-2 bg-slate-50 dark:bg-slate-800 rounded-lg text-[10px] font-black uppercase tracking-widest hover:bg-slate-100 transition-colors">
                    View Node Logs
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </main>

        {/* --- Right Side Status Panel --- */}
        <aside className="w-80 bg-white dark:bg-slate-900 border-l border-slate-200 dark:border-slate-800 flex flex-col">
          <div className="p-6 border-b border-slate-100 dark:border-slate-800">
            <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-6">Real-time Statistics</h3>
            <div className="grid grid-cols-2 gap-4">
              <StatCard label="Total Nodes" value={stats.total} />
              <StatCard label="Active" value={stats.active} color="text-amber-500" />
              <StatCard label="Reached" value={stats.reached} color="text-emerald-500" />
              <StatCard label="Failed" value={stats.failed} color="text-rose-500" />
            </div>
            <div className="mt-6">
              <div className="flex justify-between items-end mb-2">
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Population Coverage</span>
                <span className="text-2xl font-black text-emerald-600">{stats.coverage}%</span>
              </div>
              <div className="h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${stats.coverage}%` }}
                  className="h-full bg-emerald-500"
                />
              </div>
            </div>
          </div>

          <div className="flex-1 overflow-hidden flex flex-col">
            <div className="px-6 py-4 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
              <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-400">Simulation Log</h3>
              <button onClick={() => setLogs([])} className="text-[8px] font-black uppercase text-slate-400 hover:text-slate-600">Clear</button>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              <AnimatePresence initial={false}>
                {logs.map((log) => (
                  <motion.div 
                    key={log.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex gap-3 items-start"
                  >
                    <span className="text-[8px] font-mono text-slate-400 mt-0.5">{log.time}</span>
                    <p className={`text-[10px] font-medium leading-tight ${
                      log.type === 'error' ? 'text-rose-500' : 
                      log.type === 'warning' ? 'text-amber-600' : 
                      log.type === 'success' ? 'text-emerald-600' : 
                      'text-slate-600 dark:text-slate-400'
                    }`}>
                      {log.message}
                    </p>
                  </motion.div>
                ))}
              </AnimatePresence>
              {logs.length === 0 && (
                <div className="h-full flex flex-col items-center justify-center text-slate-300 dark:text-slate-700 py-12">
                  <span className="material-symbols-outlined text-4xl mb-2">history</span>
                  <p className="text-[10px] font-bold uppercase tracking-widest">No logs yet</p>
                </div>
              )}
            </div>
          </div>

          {simStatus === 'finished' && (
            <div className="p-6 bg-emerald-600 text-white">
              <h4 className="font-black uppercase tracking-tighter text-lg mb-1">Simulation Success</h4>
              <p className="text-[10px] opacity-80 mb-4 font-medium">Alert successfully disseminated to {stats.reached} nodes across {regionFilter}.</p>
              <button 
                onClick={resetSimulation}
                className="w-full py-2 bg-white/20 hover:bg-white/30 rounded-lg text-[10px] font-black uppercase tracking-widest transition-colors"
              >
                Replay Simulation
              </button>
            </div>
          )}
        </aside>
      </div>
    </div>
  );
}

// --- Sub-components ---

const NodePoint = ({ node, showCoverage, showLinks, onClick }: { node: SimNode, showCoverage: boolean, showLinks: boolean, onClick: () => void }) => {
  const colors: Record<NodeStatus, string> = {
    'idle': 'bg-slate-300 dark:bg-slate-700',
    'receiving': 'bg-amber-400 shadow-[0_0_15px_rgba(251,191,36,0.6)]',
    'active': 'bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.6)]',
    'acknowledged': 'bg-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.6)]',
    'failed': 'bg-rose-500 shadow-[0_0_15px_rgba(244,63,94,0.6)]',
  };

  return (
    <div 
      className="absolute cursor-pointer group"
      style={{ left: `${node.x}%`, top: `${node.y}%` }}
      onClick={onClick}
    >
      {/* Coverage Circle */}
      <AnimatePresence>
        {showCoverage && (
          <motion.div 
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.05 }}
            className={`absolute -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full border border-current ${node.status === 'idle' ? 'text-slate-400' : 'text-emerald-500'}`}
          />
        )}
      </AnimatePresence>

      {/* Node Dot */}
      <motion.div 
        animate={node.status === 'receiving' ? { scale: [1, 1.5, 1] } : { scale: 1 }}
        transition={{ repeat: Infinity, duration: 1 }}
        className={`w-2 h-2 rounded-full relative z-10 transition-colors duration-500 ${colors[node.status]}`}
      >
        {node.status === 'active' && (
          <div className="absolute inset-0 bg-emerald-400 rounded-full animate-ping opacity-75"></div>
        )}
      </motion.div>

      {/* Tooltip on Hover */}
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-slate-900 text-white text-[8px] font-bold rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-50">
        {node.id}
      </div>
    </div>
  );
};

const Toggle = ({ label, active, onToggle }: { label: string, active: boolean, onToggle: (v: boolean) => void }) => (
  <div className="flex items-center justify-between">
    <span className="text-xs font-bold opacity-70">{label}</span>
    <button 
      onClick={() => onToggle(!active)}
      className={`w-8 h-4 rounded-full relative transition-colors ${active ? 'bg-emerald-500' : 'bg-slate-200 dark:bg-slate-800'}`}
    >
      <div className={`absolute top-0.5 w-3 h-3 rounded-full bg-white transition-all ${active ? 'left-4.5' : 'left-0.5'}`} />
    </button>
  </div>
);

const LegendItem = ({ color, label }: { color: string, label: string }) => (
  <div className="flex items-center gap-2">
    <div className={`w-2 h-2 rounded-full ${color}`}></div>
    <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400">{label}</span>
  </div>
);

const StatCard = ({ label, value, color = 'text-slate-900 dark:text-white' }: { label: string, value: number | string, color?: string }) => (
  <div className="bg-slate-50 dark:bg-slate-800/50 p-3 rounded-xl border border-slate-100 dark:border-slate-800">
    <p className="text-[8px] font-black uppercase tracking-widest text-slate-400 mb-1">{label}</p>
    <p className={`text-xl font-black ${color}`}>{value}</p>
  </div>
);

const DetailRow = ({ label, value }: { label: string, value: React.ReactNode }) => (
  <div className="flex justify-between items-center">
    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{label}</span>
    <span className="text-[10px] font-bold">{value}</span>
  </div>
);
