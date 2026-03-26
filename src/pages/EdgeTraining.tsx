import React from 'react';

export default function EdgeTraining() {
  return (
    <div className="p-4 md:p-8">
      {/* Header Stats */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
        <div>
          <h2 className="text-3xl font-black font-headline text-primary tracking-tight">Training Data &amp; Deployment</h2>
          <p className="text-on-surface-variant font-medium mt-1">Monitoring 1,240 Edge-AI nodes across 8 regional sectors.</p>
        </div>
        <div className="flex flex-wrap gap-4">
          <div className="bg-surface-container-low px-6 py-3 rounded-xl border-l-4 border-primary shadow-sm">
            <p className="text-[10px] uppercase tracking-widest font-bold text-on-surface-variant">Active Rollouts</p>
            <p className="text-2xl font-black text-primary">03</p>
          </div>
          <div className="bg-surface-container-low px-6 py-3 rounded-xl border-l-4 border-secondary shadow-sm">
            <p className="text-[10px] uppercase tracking-widest font-bold text-on-surface-variant">Sync Health</p>
            <p className="text-2xl font-black text-secondary">98.4%</p>
          </div>
        </div>
      </div>

      {/* Dashboard Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
        {/* Central Visualization: Map */}
        <div className="xl:col-span-8 space-y-8">
          <section className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm overflow-hidden relative min-h-[500px] flex flex-col">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-headline font-extrabold text-primary flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">hub</span> National LoRaWAN Grid Status
              </h3>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-primary-fixed text-on-primary-fixed text-[10px] font-bold rounded uppercase tracking-tighter hidden sm:inline-block">Live Feed</span>
                <span className="px-3 py-1 bg-surface-container-highest text-on-surface-variant text-[10px] font-bold rounded uppercase tracking-tighter">Dhaka Central</span>
              </div>
            </div>
            {/* Map Placeholder */}
            <div className="flex-1 bg-slate-100 dark:bg-slate-800 rounded-xl relative overflow-hidden group min-h-[400px]">
              <img 
                alt="Grid Map" 
                className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 transition-all duration-700 absolute inset-0" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvpL-pcyb_yV54YYJufsPaVlKA-EMk2gTJoaamW13oWybSX8b3CIjmcDagp2mVqd0-YJfJ7z8NTYD96unixDzPiSA4ZXxkEX0LZwkKmelLCuWwowhJ_z3enfCn94yTZK7j1qmSA-zRaQHTGR80nNwfxIvio4j27mCDcSlGhVj6B1QB7w3rYltgHaScEdgExjBCYdobvynUlnAlFzJeR2WwWNJtSJu4JN-zyCBvGrFVF64yeyZs70lmbHzx0avWe6_9_MaRfVXkk2Vl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent"></div>
              
              {/* Floating Map Overlays */}
              <div className="absolute top-4 right-4 backdrop-blur-md bg-white/80 dark:bg-black/50 p-4 rounded-xl shadow-2xl border border-white/20 w-48">
                <p className="text-[10px] font-black text-primary uppercase mb-2">Regional Saturation</p>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs"><span>Sylhet</span><span className="font-bold">82%</span></div>
                  <div className="w-full h-1 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden"><div className="h-full bg-primary w-[82%]"></div></div>
                  <div className="flex justify-between text-xs"><span>Chittagong</span><span className="font-bold">45%</span></div>
                  <div className="w-full h-1 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden"><div className="h-full bg-secondary w-[45%]"></div></div>
                </div>
              </div>
              
              {/* Interactive Map Marker Mock */}
              <div className="absolute top-1/2 left-1/3 group/marker">
                <div className="w-4 h-4 bg-primary rounded-full animate-ping absolute"></div>
                <div className="w-4 h-4 bg-primary rounded-full relative border-2 border-white"></div>
                <div className="hidden group-hover/marker:block absolute top-6 left-0 bg-surface p-2 rounded shadow-xl text-[10px] font-bold w-32 z-10 text-on-surface">
                  NODE_ID: BD-SYL-092<br/>
                  STATUS: UPDATING...<br/>
                  SIGNAL: -88dBm
                </div>
              </div>
            </div>
          </section>

          {/* Node Version Inventory (Searchable Grid) */}
          <section className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm overflow-hidden">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
              <h3 className="font-headline font-extrabold text-primary">Node Inventory</h3>
              <div className="flex gap-3 w-full sm:w-auto">
                <button className="flex-1 sm:flex-none px-4 py-2 bg-surface-container-high rounded-lg text-xs font-bold hover:bg-surface-container-highest transition-colors text-on-surface">Export CSV</button>
                <button className="flex-1 sm:flex-none px-4 py-2 bg-primary text-white rounded-lg text-xs font-bold shadow-md shadow-primary/20 active:scale-95 transition-all">Bulk Update</button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm whitespace-nowrap">
                <thead className="border-b border-outline-variant/30">
                  <tr className="text-on-surface-variant font-bold text-[11px] uppercase tracking-widest">
                    <th className="py-4 px-2">Node Identifier</th>
                    <th className="py-4 px-2">Version</th>
                    <th className="py-4 px-2">Revision</th>
                    <th className="py-4 px-2">Last Heartbeat</th>
                    <th className="py-4 px-2 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant/10">
                  <tr className="hover:bg-primary/5 transition-colors group">
                    <td className="py-4 px-2 font-bold font-headline text-primary">BD-DHK-0021</td>
                    <td className="py-4 px-2"><span className="bg-primary-fixed px-2 py-0.5 rounded text-[10px] font-bold text-on-primary-fixed">v2.4.1</span></td>
                    <td className="py-4 px-2 text-on-surface-variant">Rev.C</td>
                    <td className="py-4 px-2 text-xs font-medium text-on-surface">2 mins ago</td>
                    <td className="py-4 px-2 text-right">
                      <button className="text-primary hover:bg-primary/10 p-1.5 rounded-full transition-colors"><span className="material-symbols-outlined text-sm">more_vert</span></button>
                    </td>
                  </tr>
                  <tr className="hover:bg-primary/5 transition-colors">
                    <td className="py-4 px-2 font-bold font-headline text-primary">BD-SYL-0912</td>
                    <td className="py-4 px-2"><span className="bg-surface-container-highest px-2 py-0.5 rounded text-[10px] font-bold text-on-surface-variant">v2.3.9</span></td>
                    <td className="py-4 px-2 text-on-surface-variant">Rev.A</td>
                    <td className="py-4 px-2 text-xs font-medium text-on-surface">5 hours ago</td>
                    <td className="py-4 px-2 text-right">
                      <button className="text-primary hover:bg-primary/10 p-1.5 rounded-full transition-colors"><span className="material-symbols-outlined text-sm">more_vert</span></button>
                    </td>
                  </tr>
                  <tr className="hover:bg-primary/5 transition-colors">
                    <td className="py-4 px-2 font-bold font-headline text-primary">BD-CTG-4431</td>
                    <td className="py-4 px-2"><span className="bg-primary-fixed px-2 py-0.5 rounded text-[10px] font-bold text-on-primary-fixed">v2.4.1</span></td>
                    <td className="py-4 px-2 text-on-surface-variant">Rev.B</td>
                    <td className="py-4 px-2 text-xs font-medium text-on-surface">Just now</td>
                    <td className="py-4 px-2 text-right">
                      <button className="text-primary hover:bg-primary/10 p-1.5 rounded-full transition-colors"><span className="material-symbols-outlined text-sm">more_vert</span></button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>

        {/* Sidebar Modules: Active Updates & Repos */}
        <div className="xl:col-span-4 space-y-8">
          {/* Active Update Sessions */}
          <section className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm">
            <h3 className="font-headline font-extrabold text-primary mb-6 flex items-center justify-between">
              Active Rollouts
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
            </h3>
            <div className="space-y-6">
              <div className="p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl border border-emerald-100 dark:border-emerald-800/30">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <p className="text-sm font-bold text-emerald-900 dark:text-emerald-300">v2.4.1 - Sylhet Dialect Pack</p>
                    <p className="text-[10px] text-emerald-700 dark:text-emerald-400/70 font-medium">Target: 142 Nodes</p>
                  </div>
                  <span className="text-xs font-black text-emerald-600 dark:text-emerald-400">88%</span>
                </div>
                <div className="w-full h-2 bg-emerald-200 dark:bg-emerald-900/50 rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-[88%]"></div>
                </div>
                <div className="flex justify-between mt-3">
                  <p className="text-[10px] text-emerald-800/60 dark:text-emerald-400/50 font-medium">ETA: 12 Minutes</p>
                  <button className="text-[10px] font-bold text-primary uppercase hover:underline">Details</button>
                </div>
              </div>
              
              <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-700/50">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <p className="text-sm font-bold text-slate-900 dark:text-slate-200">v2.4.0 - Grid Security Patch</p>
                    <p className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">Target: 1,240 Nodes</p>
                  </div>
                  <span className="text-xs font-black text-slate-600 dark:text-slate-300">99%</span>
                </div>
                <div className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                  <div className="h-full bg-secondary w-[99%]"></div>
                </div>
                <div className="flex justify-between mt-3">
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">Completing Final Validation</p>
                  <button className="text-[10px] font-bold text-secondary uppercase hover:underline">Log</button>
                </div>
              </div>
            </div>
          </section>

          {/* Deployment Scheduler */}
          <section className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm">
            <h3 className="font-headline font-extrabold text-primary mb-6">Upcoming Windows</h3>
            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-fixed text-on-primary-fixed rounded-lg flex flex-col items-center justify-center font-bold">
                  <span className="text-[10px]">OCT</span>
                  <span className="text-lg leading-none">24</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-on-surface">Regional Reboot: Barishal</p>
                  <p className="text-xs text-on-surface-variant">02:00 - 04:00 AM (Low Bandwidth)</p>
                  <div className="mt-2 flex gap-2">
                    <button className="text-[10px] font-bold text-primary px-2 py-1 bg-primary-fixed/30 rounded">Edit</button>
                    <button className="text-[10px] font-bold text-on-surface-variant px-2 py-1 hover:bg-surface-container transition-colors rounded">Cancel</button>
                  </div>
                </div>
              </div>
              <div className="flex gap-4 items-start pt-4 border-t border-outline-variant/20">
                <div className="flex-shrink-0 w-12 h-12 bg-surface-container-highest text-on-surface-variant rounded-lg flex flex-col items-center justify-center font-bold">
                  <span className="text-[10px]">OCT</span>
                  <span className="text-lg leading-none">26</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-on-surface">Firmware v2.4.2 Propagation</p>
                  <p className="text-xs text-on-surface-variant">All Sectors (Staged Deployment)</p>
                </div>
              </div>
            </div>
            <button className="w-full mt-6 py-2 bg-surface-container-high text-on-surface-variant font-bold text-xs rounded-lg hover:bg-surface-container-highest transition-all uppercase tracking-widest">
              New Schedule +
            </button>
          </section>

          {/* Error Logs */}
          <section className="bg-error-container/20 p-6 rounded-2xl border border-error/10">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-headline font-extrabold text-error uppercase text-xs tracking-widest">Critical Error Logs</h3>
              <span className="px-2 py-0.5 bg-error text-on-error text-[10px] font-black rounded">12</span>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center text-xs p-2 hover:bg-surface-container-highest/50 rounded transition-colors group">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm text-error">warning</span>
                  <span className="font-medium text-on-surface">BD-KHU-221: Checksum Mismatch</span>
                </div>
                <button className="text-primary font-bold opacity-0 group-hover:opacity-100 transition-opacity">Retry</button>
              </div>
              <div className="flex justify-between items-center text-xs p-2 hover:bg-surface-container-highest/50 rounded transition-colors group">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm text-error">wifi_off</span>
                  <span className="font-medium text-on-surface">BD-RAJ-109: Handshake Timeout</span>
                </div>
                <button className="text-primary font-bold opacity-0 group-hover:opacity-100 transition-opacity">Retry</button>
              </div>
            </div>
            <button className="w-full mt-4 text-[10px] font-black text-error uppercase tracking-tighter text-center hover:underline">View All Failures</button>
          </section>
        </div>
      </div>

      {/* Contextual FAB for Web (Deploy) */}
      <button className="fixed bottom-8 right-8 hidden lg:flex items-center gap-3 px-6 py-4 bg-primary text-white rounded-full shadow-2xl shadow-primary/40 hover:scale-105 active:scale-95 transition-all z-40 group">
        <span className="material-symbols-outlined group-hover:rotate-180 transition-transform duration-500">sync</span>
        <span className="font-headline font-bold uppercase text-sm tracking-widest">New Deployment</span>
      </button>
    </div>
  );
}
