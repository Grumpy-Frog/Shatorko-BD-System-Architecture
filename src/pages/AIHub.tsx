import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import AIForecast from './ai/AIForecast';
import AIRiskDetection from './ai/AIRiskDetection';
import AINetworkHealth from './ai/AINetworkHealth';

export default function AIHub() {
  const [activeTab, setActiveTab] = useState('forecast');

  const tabs = [
    { id: 'forecast', label: 'Disaster Forecast', icon: 'memory' },
    { id: 'risk', label: 'Risk Area Detection', icon: 'radar' },
    { id: 'network', label: 'LoRa Health Monitor', icon: 'router' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-20 pb-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-bold text-sm border border-indigo-100 dark:border-indigo-500/20"
          >
            <span className="material-symbols-outlined text-[18px]">auto_awesome</span>
            Shatorko BD AI Engine
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Intelligent Early Warning
          </h1>
          <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
            Simulated AI modules demonstrating predictive forecasting, risk zone identification, and network health monitoring.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex justify-center">
          <div className="inline-flex bg-white dark:bg-slate-900 p-1.5 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-6 py-3 rounded-xl text-sm font-bold flex items-center gap-2 transition-colors ${
                  activeTab === tab.id 
                    ? 'text-indigo-600 dark:text-indigo-400' 
                    : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
                }`}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="active-tab"
                    className="absolute inset-0 bg-indigo-50 dark:bg-indigo-500/10 rounded-xl"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
                <span className="material-symbols-outlined relative z-10 text-[20px]">{tab.icon}</span>
                <span className="relative z-10">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="mt-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              {activeTab === 'forecast' && <AIForecast />}
              {activeTab === 'risk' && <AIRiskDetection />}
              {activeTab === 'network' && <AINetworkHealth />}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}
