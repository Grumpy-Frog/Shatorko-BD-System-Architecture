import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { LineChart, Line, ResponsiveContainer } from 'recharts';

const generateMockTrend = (base: number, variance: number) => {
  return Array.from({ length: 10 }, (_, i) => ({
    val: Math.max(0, Math.min(100, base + (Math.random() * variance * 2 - variance) - i * (base > 50 ? 2 : -1))),
  }));
};

const initialNodes = [
  { id: 'LORA-001', location: 'Dhaka Central', battery: 98, signal: -45, status: 'Healthy', trend: generateMockTrend(95, 5) },
  { id: 'LORA-042', location: 'Chattogram Port', battery: 42, signal: -85, status: 'Weak Signal', trend: generateMockTrend(45, 10) },
  { id: 'LORA-087', location: 'Sylhet Haor', battery: 15, signal: -95, status: 'At Risk', trend: generateMockTrend(20, 15) },
  { id: 'LORA-112', location: 'Khulna Coast', battery: 88, signal: -50, status: 'Healthy', trend: generateMockTrend(85, 5) },
  { id: 'LORA-055', location: 'Barishal Sadar', battery: 0, signal: -120, status: 'Offline', trend: generateMockTrend(0, 0) },
  { id: 'LORA-099', location: 'Rajshahi Uni', battery: 65, signal: -70, status: 'Healthy', trend: generateMockTrend(70, 8) },
];

export default function AINetworkHealth() {
  const [nodes, setNodes] = useState(initialNodes);
  const [isPredicting, setIsPredicting] = useState(false);
  const [predictions, setPredictions] = useState<Record<string, string>>({});

  const runPrediction = () => {
    setIsPredicting(true);
    setPredictions({});
    
    setTimeout(() => {
      const newPredictions: Record<string, string> = {};
      
      nodes.forEach(node => {
        if (node.status === 'Offline') {
          newPredictions[node.id] = 'Hardware failure detected. Requires manual intervention.';
        } else if (node.battery < 20) {
          newPredictions[node.id] = `Battery critical. Estimated failure in ${Math.floor(node.battery / 2)} hours.`;
        } else if (node.signal < -80) {
          newPredictions[node.id] = 'Signal degradation detected. Likely weather interference.';
        } else {
          newPredictions[node.id] = 'Stable operation predicted for next 48 hours.';
        }
      });

      setPredictions(newPredictions);
      setIsPredicting(false);
    }, 1500);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Healthy': return 'text-emerald-500 bg-emerald-500/10 border-emerald-500/20';
      case 'Weak Signal': return 'text-amber-500 bg-amber-500/10 border-amber-500/20';
      case 'At Risk': return 'text-rose-500 bg-rose-500/10 border-rose-500/20';
      case 'Offline': return 'text-slate-500 bg-slate-500/10 border-slate-500/20';
      default: return 'text-slate-500 bg-slate-500/10 border-slate-500/20';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <span className="material-symbols-outlined text-emerald-500">router</span>
            AI LoRa Network Health Monitor
          </h2>
          <p className="text-slate-500 dark:text-slate-400">Predictive maintenance and failure detection for LoRaWAN nodes.</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="px-3 py-1 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-full text-xs font-bold border border-emerald-500/20 flex items-center gap-1">
            <span className="material-symbols-outlined text-[14px]">auto_awesome</span>
            AI Module
          </div>
          <button
            onClick={runPrediction}
            disabled={isPredicting}
            className="bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-900 disabled:opacity-50 px-4 py-2 rounded-xl font-bold text-sm transition-colors flex items-center gap-2 shadow-sm"
          >
            {isPredicting ? (
              <><span className="material-symbols-outlined animate-spin text-[18px]">sync</span> Analyzing...</>
            ) : (
              <><span className="material-symbols-outlined text-[18px]">online_prediction</span> Predict Failures</>
            )}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {nodes.map(node => (
          <motion.div 
            key={node.id}
            layout
            className={`bg-white dark:bg-slate-900 p-5 rounded-2xl shadow-sm border transition-colors ${
              predictions[node.id] && (node.battery < 20 || node.signal < -80)
                ? 'border-rose-500/50 ring-1 ring-rose-500/20' 
                : 'border-slate-200 dark:border-slate-800'
            }`}
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span className="material-symbols-outlined text-slate-400 text-[18px]">cell_tower</span>
                  {node.id}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">{node.location}</p>
              </div>
              <span className={`px-2.5 py-1 rounded-full text-[10px] font-black uppercase border ${getStatusColor(node.status)}`}>
                {node.status}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="bg-slate-50 dark:bg-slate-950 p-3 rounded-xl border border-slate-100 dark:border-slate-800">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">battery_charging_full</span>
                  Battery
                </p>
                <p className={`text-lg font-black ${node.battery < 20 ? 'text-rose-500' : 'text-slate-700 dark:text-slate-300'}`}>
                  {node.battery}%
                </p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-950 p-3 rounded-xl border border-slate-100 dark:border-slate-800">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">signal_cellular_alt</span>
                  Signal
                </p>
                <p className={`text-lg font-black ${node.signal < -80 ? 'text-amber-500' : 'text-slate-700 dark:text-slate-300'}`}>
                  {node.signal} dBm
                </p>
              </div>
            </div>

            <div className="h-12 mb-4 opacity-50">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={node.trend}>
                  <Line 
                    type="monotone" 
                    dataKey="val" 
                    stroke={node.status === 'Healthy' ? '#10b981' : node.status === 'Offline' ? '#64748b' : '#f43f5e'} 
                    strokeWidth={2} 
                    dot={false} 
                    isAnimationActive={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <AnimatePresence>
              {predictions[node.id] && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className={`pt-3 border-t text-xs font-medium flex items-start gap-2 ${
                    node.battery < 20 || node.signal < -80 || node.status === 'Offline'
                      ? 'border-rose-100 dark:border-rose-900/30 text-rose-600 dark:text-rose-400'
                      : 'border-slate-100 dark:border-slate-800 text-emerald-600 dark:text-emerald-400'
                  }`}
                >
                  <span className="material-symbols-outlined text-[16px] shrink-0 mt-0.5">
                    {node.battery < 20 || node.signal < -80 || node.status === 'Offline' ? 'warning' : 'check_circle'}
                  </span>
                  <p>AI Predicted: {predictions[node.id]}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
