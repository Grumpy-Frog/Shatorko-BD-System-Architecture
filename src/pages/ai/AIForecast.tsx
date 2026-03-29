import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const regions = ['Dhaka', 'Chattogram', 'Sylhet', 'Khulna', 'Barishal', 'Rajshahi', 'Rangpur', 'Mymensingh'];
const disasters = ['Flood', 'Cyclone', 'Heavy Rainfall', 'Landslide'];
const horizons = ['Next 6 hours', '12 hours', '24 hours', '3 days'];

const generateMockData = () => {
  return Array.from({ length: 7 }, (_, i) => ({
    time: `T+${i}`,
    risk: Math.floor(Math.random() * 60) + 20,
  }));
};

export default function AIForecast() {
  const [region, setRegion] = useState('Chattogram');
  const [disaster, setDisaster] = useState('Cyclone');
  const [horizon, setHorizon] = useState('24 hours');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<any>(null);

  const runForecast = () => {
    setIsAnalyzing(true);
    setResult(null);
    
    // Simulate AI processing time
    setTimeout(() => {
      const baseRisk = 
        (disaster === 'Cyclone' && ['Chattogram', 'Khulna', 'Barishal'].includes(region)) ? 80 :
        (disaster === 'Flood' && ['Sylhet', 'Rangpur'].includes(region)) ? 75 :
        (disaster === 'Landslide' && ['Chattogram', 'Sylhet'].includes(region)) ? 70 : 30;
      
      const randomVariance = Math.floor(Math.random() * 20) - 10;
      const finalScore = Math.min(100, Math.max(0, baseRisk + randomVariance));
      
      let riskLevel = 'Low';
      let color = 'text-emerald-500';
      let bgColor = 'bg-emerald-500/10';
      let borderColor = 'border-emerald-500/20';
      
      if (finalScore >= 80) {
        riskLevel = 'Critical';
        color = 'text-rose-500';
        bgColor = 'bg-rose-500/10';
        borderColor = 'border-rose-500/20';
      } else if (finalScore >= 60) {
        riskLevel = 'High';
        color = 'text-orange-500';
        bgColor = 'bg-orange-500/10';
        borderColor = 'border-orange-500/20';
      } else if (finalScore >= 40) {
        riskLevel = 'Medium';
        color = 'text-amber-500';
        bgColor = 'bg-amber-500/10';
        borderColor = 'border-amber-500/20';
      }

      const explanations = {
        'Cyclone': `High sea surface temperature + low pressure system detected in Bay of Bengal → ${riskLevel.toLowerCase()} cyclone risk for ${region}.`,
        'Flood': `Upstream heavy rainfall + rising river water levels detected → ${riskLevel.toLowerCase()} flood risk for ${region}.`,
        'Heavy Rainfall': `Dense cumulonimbus cloud formation + high humidity detected → ${riskLevel.toLowerCase()} rainfall risk for ${region}.`,
        'Landslide': `Soil moisture saturation > 85% + steep terrain detected → ${riskLevel.toLowerCase()} landslide risk for ${region}.`,
      };

      setResult({
        score: finalScore,
        level: riskLevel,
        color,
        bgColor,
        borderColor,
        explanation: explanations[disaster as keyof typeof explanations],
        impactTime: `Expected within ${horizon.replace('Next ', '')}`,
        chartData: generateMockData()
      });
      setIsAnalyzing(false);
    }, 2000);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <span className="material-symbols-outlined text-indigo-500">memory</span>
            AI-Based Disaster Forecast
          </h2>
          <p className="text-slate-500 dark:text-slate-400">Simulated AI prediction using historical and environmental data.</p>
        </div>
        <div className="px-3 py-1 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 rounded-full text-xs font-bold border border-indigo-500/20 flex items-center gap-1">
          <span className="material-symbols-outlined text-[14px]">auto_awesome</span>
          AI Module
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Controls */}
        <div className="lg:col-span-1 bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 space-y-5">
          <h3 className="font-semibold text-slate-900 dark:text-white flex items-center gap-2 mb-4">
            <span className="material-symbols-outlined text-slate-400">tune</span>
            Forecast Parameters
          </h3>
          
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Region</label>
            <select 
              value={region} 
              onChange={(e) => setRegion(e.target.value)}
              className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-2.5 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none"
            >
              {regions.map(r => <option key={r} value={r}>{r}</option>)}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Disaster Type</label>
            <select 
              value={disaster} 
              onChange={(e) => setDisaster(e.target.value)}
              className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-2.5 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none"
            >
              {disasters.map(d => <option key={d} value={d}>{d}</option>)}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Time Horizon</label>
            <select 
              value={horizon} 
              onChange={(e) => setHorizon(e.target.value)}
              className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-2.5 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none"
            >
              {horizons.map(h => <option key={h} value={h}>{h}</option>)}
            </select>
          </div>

          <button 
            onClick={runForecast}
            disabled={isAnalyzing}
            className="w-full mt-4 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white font-semibold py-3 rounded-xl transition-colors flex items-center justify-center gap-2 shadow-md shadow-indigo-500/20"
          >
            {isAnalyzing ? (
              <>
                <span className="material-symbols-outlined animate-spin">sync</span>
                Analyzing Data...
              </>
            ) : (
              <>
                <span className="material-symbols-outlined">analytics</span>
                Run AI Forecast
              </>
            )}
          </button>
        </div>

        {/* Results */}
        <div className="lg:col-span-2 bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 relative overflow-hidden min-h-[400px]">
          <AnimatePresence mode="wait">
            {isAnalyzing ? (
              <motion.div 
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 flex flex-col items-center justify-center bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm z-10"
              >
                <div className="relative w-24 h-24 mb-4">
                  <div className="absolute inset-0 border-4 border-indigo-200 dark:border-indigo-900 rounded-full"></div>
                  <div className="absolute inset-0 border-4 border-indigo-600 rounded-full border-t-transparent animate-spin"></div>
                  <span className="absolute inset-0 flex items-center justify-center material-symbols-outlined text-indigo-600 text-3xl">memory</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">AI Processing</h3>
                <p className="text-slate-500 text-sm mt-1">Analyzing satellite imagery & sensor data...</p>
              </motion.div>
            ) : result ? (
              <motion.div 
                key="result"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="h-full flex flex-col"
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-bold text-lg text-slate-900 dark:text-white flex items-center gap-2">
                    <span className="material-symbols-outlined text-indigo-500">insights</span>
                    Simulated AI Output
                  </h3>
                  <span className="text-xs text-slate-400">Confidence: {(Math.random() * 10 + 85).toFixed(1)}%</span>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className={`p-5 rounded-2xl border ${result.bgColor} ${result.borderColor}`}>
                    <p className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-1">Risk Level</p>
                    <div className="flex items-end gap-3">
                      <span className={`text-4xl font-black ${result.color}`}>{result.level}</span>
                      <span className={`text-lg font-bold mb-1 ${result.color}`}>{result.score}%</span>
                    </div>
                  </div>
                  <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/50">
                    <p className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-1">Impact Time</p>
                    <div className="flex items-center gap-2 text-slate-900 dark:text-white">
                      <span className="material-symbols-outlined text-slate-400">schedule</span>
                      <span className="text-xl font-bold">{result.impactTime}</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 mb-6">
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-2">AI Explanation</p>
                  <p className="text-slate-800 dark:text-slate-200 font-medium">{result.explanation}</p>
                </div>

                <div className="flex-1 min-h-[200px]">
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-4">Risk Trend Prediction</p>
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={result.chartData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                      <defs>
                        <linearGradient id="colorRisk" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor={result.score >= 80 ? '#f43f5e' : result.score >= 60 ? '#f97316' : '#10b981'} stopOpacity={0.3}/>
                          <stop offset="95%" stopColor={result.score >= 80 ? '#f43f5e' : result.score >= 60 ? '#f97316' : '#10b981'} stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#334155" opacity={0.2} />
                      <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
                      <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
                      <Tooltip 
                        contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', borderRadius: '8px', color: '#fff' }}
                        itemStyle={{ color: '#fff' }}
                      />
                      <Area 
                        type="monotone" 
                        dataKey="risk" 
                        stroke={result.score >= 80 ? '#f43f5e' : result.score >= 60 ? '#f97316' : '#10b981'} 
                        strokeWidth={3}
                        fillOpacity={1} 
                        fill="url(#colorRisk)" 
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </motion.div>
            ) : (
              <motion.div 
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="h-full flex flex-col items-center justify-center text-slate-400 dark:text-slate-600"
              >
                <span className="material-symbols-outlined text-6xl mb-4 opacity-50">query_stats</span>
                <p>Select parameters and run forecast to see AI predictions.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
