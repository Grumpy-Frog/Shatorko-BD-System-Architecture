import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const regions = [
  { id: 'dhaka', name: 'Dhaka', x: 50, y: 45, pop: '22M' },
  { id: 'chattogram', name: 'Chattogram', x: 80, y: 70, pop: '8.5M' },
  { id: 'sylhet', name: 'Sylhet', x: 75, y: 25, pop: '3.5M' },
  { id: 'khulna', name: 'Khulna', x: 35, y: 70, pop: '3.2M' },
  { id: 'barishal', name: 'Barishal', x: 55, y: 75, pop: '2.8M' },
  { id: 'rajshahi', name: 'Rajshahi', x: 25, y: 35, pop: '2.5M' },
  { id: 'rangpur', name: 'Rangpur', x: 30, y: 15, pop: '3.1M' },
  { id: 'mymensingh', name: 'Mymensingh', x: 55, y: 25, pop: '2.9M' },
];

export default function AIRiskDetection() {
  const [activeLayer, setActiveLayer] = useState('Flood');
  const [selectedRegion, setSelectedRegion] = useState<any>(null);

  const getRiskData = (regionId: string, layer: string) => {
    // Simulated AI logic based on geography
    let riskScore = 0;
    
    if (layer === 'Flood') {
      if (['sylhet', 'rangpur', 'mymensingh'].includes(regionId)) riskScore = 85;
      else if (['dhaka', 'rajshahi'].includes(regionId)) riskScore = 50;
      else riskScore = 20;
    } else if (layer === 'Cyclone') {
      if (['chattogram', 'khulna', 'barishal'].includes(regionId)) riskScore = 90;
      else if (['dhaka'].includes(regionId)) riskScore = 40;
      else riskScore = 15;
    } else if (layer === 'Landslide') {
      if (['chattogram', 'sylhet'].includes(regionId)) riskScore = 80;
      else riskScore = 10;
    }

    // Add some random variation to simulate real-time AI
    riskScore += Math.floor(Math.random() * 10) - 5;
    riskScore = Math.max(0, Math.min(100, riskScore));

    let level = 'Safe';
    let color = 'bg-emerald-500';
    let action = 'Normal monitoring.';

    if (riskScore >= 75) {
      level = 'Danger';
      color = 'bg-rose-500';
      action = 'Immediate evacuation recommended. Activate shelters.';
    } else if (riskScore >= 40) {
      level = 'Warning';
      color = 'bg-amber-500';
      action = 'Prepare for potential impact. Issue early warnings.';
    }

    return { score: riskScore, level, color, action };
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <span className="material-symbols-outlined text-rose-500">radar</span>
            AI Risk Area Detection
          </h2>
          <p className="text-slate-500 dark:text-slate-400">Identify high-risk zones using simulated AI analysis.</p>
        </div>
        <div className="flex flex-col items-end">
          <div className="px-3 py-1 bg-rose-500/10 text-rose-600 dark:text-rose-400 rounded-full text-xs font-bold border border-rose-500/20 flex items-center gap-1 mb-1">
            <span className="material-symbols-outlined text-[14px]">auto_awesome</span>
            AI Module
          </div>
          <span className="text-xs text-slate-400">Confidence: {(Math.random() * 5 + 90).toFixed(1)}%</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Map Area */}
        <div className="lg:col-span-2 bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 relative h-[500px] overflow-hidden flex items-center justify-center">
          
          {/* Layer Toggles */}
          <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
            {['Flood', 'Cyclone', 'Landslide'].map(layer => (
              <button
                key={layer}
                onClick={() => { setActiveLayer(layer); setSelectedRegion(null); }}
                className={`px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2 transition-all shadow-sm ${
                  activeLayer === layer 
                    ? 'bg-slate-800 text-white dark:bg-white dark:text-slate-900' 
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700 dark:hover:bg-slate-700'
                }`}
              >
                <span className="material-symbols-outlined text-[18px]">
                  {layer === 'Flood' ? 'water' : layer === 'Cyclone' ? 'cyclone' : 'landslide'}
                </span>
                {layer} Zones
              </button>
            ))}
          </div>

          {/* Map */}
          <div className="relative w-full max-w-md aspect-[2/3]">
            {/* SVG Outline */}
            <svg viewBox="0 0 400 600" className="absolute inset-0 w-full h-full p-8 opacity-20 dark:opacity-30 pointer-events-none">
              <path 
                d="M130,20 L170,10 L200,30 L250,50 L290,60 L330,120 L360,150 L340,190 L300,200 L320,250 L360,350 L380,450 L370,550 L340,580 L320,520 L300,480 L270,500 L240,530 L210,500 L180,520 L150,490 L120,510 L90,450 L60,380 L40,300 L70,250 L50,180 L80,120 L110,80 Z" 
                fill="currentColor" 
                className="text-slate-400"
              />
            </svg>

            {/* Heatmap Regions */}
            {regions.map(region => {
              const risk = getRiskData(region.id, activeLayer);
              const isSelected = selectedRegion?.id === region.id;
              
              return (
                <motion.div
                  key={region.id}
                  className="absolute cursor-pointer group"
                  style={{ left: `${region.x}%`, top: `${region.y}%`, transform: 'translate(-50%, -50%)' }}
                  onClick={() => setSelectedRegion({ ...region, ...risk })}
                  whileHover={{ scale: 1.1 }}
                >
                  {/* Heatmap Glow */}
                  <div className={`absolute inset-0 rounded-full blur-xl opacity-40 transition-colors duration-500 ${risk.color}`} style={{ width: '80px', height: '80px', transform: 'translate(-50%, -50%)' }} />
                  
                  {/* Interactive Point */}
                  <div className={`relative w-6 h-6 rounded-full border-2 border-white dark:border-slate-900 shadow-md flex items-center justify-center transition-colors duration-500 ${risk.color} ${isSelected ? 'ring-4 ring-white/50 dark:ring-slate-900/50 scale-125' : ''}`}>
                    {risk.level === 'Danger' && <span className="absolute inset-0 rounded-full animate-ping opacity-50 bg-rose-500" />}
                  </div>
                  
                  {/* Label */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 text-xs font-bold text-slate-700 dark:text-slate-300 bg-white/80 dark:bg-slate-900/80 px-2 py-0.5 rounded backdrop-blur-sm shadow-sm pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                    {region.name}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Legend */}
          <div className="absolute bottom-4 right-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm p-3 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 text-xs font-medium text-slate-600 dark:text-slate-400 flex flex-col gap-2">
            <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-rose-500" /> Danger (&gt;75%)</div>
            <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-amber-500" /> Warning (40-75%)</div>
            <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-emerald-500" /> Safe (&lt;40%)</div>
          </div>
        </div>

        {/* Details Panel */}
        <div className="lg:col-span-1 bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800">
          <h3 className="font-semibold text-slate-900 dark:text-white flex items-center gap-2 mb-6 pb-4 border-b border-slate-100 dark:border-slate-800">
            <span className="material-symbols-outlined text-slate-400">info</span>
            Area Analysis
          </h3>

          <AnimatePresence mode="wait">
            {selectedRegion ? (
              <motion.div
                key={selectedRegion.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div>
                  <h4 className="text-2xl font-black text-slate-900 dark:text-white mb-1">{selectedRegion.name}</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400 flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px]">groups</span>
                    Est. Population: {selectedRegion.pop}
                  </p>
                </div>

                <div className={`p-4 rounded-xl border ${
                  selectedRegion.level === 'Danger' ? 'bg-rose-50 border-rose-200 dark:bg-rose-500/10 dark:border-rose-500/20' :
                  selectedRegion.level === 'Warning' ? 'bg-amber-50 border-amber-200 dark:bg-amber-500/10 dark:border-amber-500/20' :
                  'bg-emerald-50 border-emerald-200 dark:bg-emerald-500/10 dark:border-emerald-500/20'
                }`}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-bold text-slate-700 dark:text-slate-300">AI Risk Assessment</span>
                    <span className={`text-xs font-black px-2 py-1 rounded uppercase ${
                      selectedRegion.level === 'Danger' ? 'bg-rose-500 text-white' :
                      selectedRegion.level === 'Warning' ? 'bg-amber-500 text-white' :
                      'bg-emerald-500 text-white'
                    }`}>
                      {selectedRegion.level}
                    </span>
                  </div>
                  <div className="flex items-end gap-2">
                    <span className={`text-4xl font-black ${
                      selectedRegion.level === 'Danger' ? 'text-rose-600 dark:text-rose-400' :
                      selectedRegion.level === 'Warning' ? 'text-amber-600 dark:text-amber-400' :
                      'text-emerald-600 dark:text-emerald-400'
                    }`}>{selectedRegion.score}%</span>
                    <span className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">probability</span>
                  </div>
                </div>

                <div>
                  <h5 className="text-sm font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                    <span className="material-symbols-outlined text-slate-400 text-[18px]">lightbulb</span>
                    AI Suggested Action
                  </h5>
                  <p className="text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800 text-sm leading-relaxed">
                    {selectedRegion.action}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-400">
                  <span>Last Updated: Just now</span>
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">sync</span>
                    Live AI Feed
                  </span>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="h-48 flex flex-col items-center justify-center text-slate-400 dark:text-slate-600 text-center"
              >
                <span className="material-symbols-outlined text-4xl mb-3 opacity-50">touch_app</span>
                <p className="text-sm">Click on any region on the map to view detailed AI risk analysis.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
