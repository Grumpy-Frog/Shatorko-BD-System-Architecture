import React from 'react';

export default function Audit() {
  return (
    <main className="pt-16 min-h-screen">
      <div className="max-w-[1400px] mx-auto p-8 space-y-8">
        {/* Hero Dashboard Header */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-xs font-bold tracking-[0.1em] text-primary uppercase">Active Monitoring Pulse</span>
          </div>
          <h1 className="text-4xl font-extrabold tracking-tighter text-on-surface leading-none font-headline">Security Audit Terminal</h1>
          <p className="text-on-surface-variant font-medium max-w-2xl">Real-time health telemetry across the Shatorko Sentinel cluster. Monitoring 48 nodes across 3 geographic zones.</p>
        </div>

        {/* Bento Grid Metrics */}
        <div className="grid grid-cols-12 gap-7">
          {/* Server Cluster Health (Large Focus) */}
          <div className="col-span-12 lg:col-span-8 bg-surface-container-low rounded-lg p-7 relative overflow-hidden group">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-xl font-extrabold tracking-tight font-headline">Server Cluster Performance</h2>
                <p className="text-xs text-on-surface-variant/70 font-label uppercase tracking-widest mt-1">Global Node Distribution</p>
              </div>
              <div className="bg-primary-container text-on-primary-container px-3 py-1 rounded text-[0.65rem] font-bold uppercase tracking-widest">
                Optimal Performance
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 relative z-10">
              <div className="space-y-1">
                <span className="text-xs text-on-surface-variant font-medium">CPU Load</span>
                <div className="text-3xl font-extrabold tracking-tighter">14.2%</div>
                <div className="w-full bg-surface-container-highest h-1 rounded-full overflow-hidden">
                  <div className="bg-primary h-full w-[14%]"></div>
                </div>
              </div>
              <div className="space-y-1">
                <span className="text-xs text-on-surface-variant font-medium">Memory Usage</span>
                <div className="text-3xl font-extrabold tracking-tighter">5.8<span className="text-lg">GB</span></div>
                <div className="w-full bg-surface-container-highest h-1 rounded-full overflow-hidden">
                  <div className="bg-primary h-full w-[42%]"></div>
                </div>
              </div>
              <div className="space-y-1">
                <span className="text-xs text-on-surface-variant font-medium">Network I/O</span>
                <div className="text-3xl font-extrabold tracking-tighter">842<span className="text-lg">Mb/s</span></div>
                <div className="w-full bg-surface-container-highest h-1 rounded-full overflow-hidden">
                  <div className="bg-secondary h-full w-[65%]"></div>
                </div>
              </div>
              <div className="space-y-1">
                <span className="text-xs text-on-surface-variant font-medium">Active Nodes</span>
                <div className="text-3xl font-extrabold tracking-tighter">48/48</div>
                <div className="w-full bg-surface-container-highest h-1 rounded-full overflow-hidden">
                  <div className="bg-emerald-500 h-full w-full"></div>
                </div>
              </div>
            </div>
            {/* Visual Data Feed Simulation */}
            <div className="mt-10 h-48 bg-surface-container rounded-lg border border-outline-variant/10 flex items-end p-4 gap-1">
              <div className="flex-1 bg-emerald-500/20 h-[40%] rounded-t-sm"></div>
              <div className="flex-1 bg-emerald-500/20 h-[45%] rounded-t-sm"></div>
              <div className="flex-1 bg-emerald-500/20 h-[42%] rounded-t-sm"></div>
              <div className="flex-1 bg-emerald-500/30 h-[55%] rounded-t-sm"></div>
              <div className="flex-1 bg-emerald-500/40 h-[70%] rounded-t-sm"></div>
              <div className="flex-1 bg-emerald-500/20 h-[30%] rounded-t-sm"></div>
              <div className="flex-1 bg-emerald-500/10 h-[20%] rounded-t-sm"></div>
              <div className="flex-1 bg-emerald-500/20 h-[35%] rounded-t-sm"></div>
              <div className="flex-1 bg-emerald-500/30 h-[50%] rounded-t-sm"></div>
              <div className="flex-1 bg-emerald-500/50 h-[85%] rounded-t-sm"></div>
              <div className="flex-1 bg-emerald-500/30 h-[60%] rounded-t-sm"></div>
              <div className="flex-1 bg-emerald-500/20 h-[40%] rounded-t-sm"></div>
              <div className="flex-1 bg-emerald-500/10 h-[25%] rounded-t-sm"></div>
              <div className="flex-1 bg-emerald-500/20 h-[38%] rounded-t-sm"></div>
              <div className="flex-1 bg-emerald-500/40 h-[75%] rounded-t-sm"></div>
              <div className="flex-1 bg-emerald-500/60 h-[90%] rounded-t-sm"></div>
            </div>
          </div>

          {/* Threat Level (High Emphasis) */}
          <div className="col-span-12 lg:col-span-4 bg-tertiary-container text-white rounded-lg p-7 flex flex-col justify-between shadow-xl shadow-tertiary/20">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="material-symbols-outlined fill-current">shield_with_heart</span>
                <span className="text-xs font-bold tracking-[0.2em] uppercase">Security Status</span>
              </div>
              <h2 className="text-5xl font-extrabold tracking-tighter mb-2 font-headline">SECURE</h2>
              <p className="text-white/70 text-sm font-medium">No unauthorized intrusions detected in the last 72 hours. Last breach attempt blocked at Dhaka Data Center (Node-04).</p>
            </div>
            <div className="mt-8 p-4 bg-white/10 rounded border border-white/20">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-bold uppercase tracking-widest">Active Firewall</span>
                <span className="text-xs font-medium">99.9% Efficiency</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="h-1.5 w-3 bg-white rounded-full"></div>
                <div className="h-1.5 w-3 bg-white rounded-full"></div>
                <div className="h-1.5 w-3 bg-white rounded-full"></div>
                <div className="h-1.5 w-3 bg-white/30 rounded-full"></div>
                <div className="h-1.5 w-3 bg-white/30 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Audit Trail (Asymmetric List) */}
          <div className="col-span-12 lg:col-span-5 bg-surface-container rounded-lg p-7 overflow-hidden">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-xl font-extrabold tracking-tight font-headline">Audit Trail</h3>
              <button className="text-xs font-bold text-primary flex items-center gap-1 hover:underline">
                Export Log <span className="material-symbols-outlined text-sm">download</span>
              </button>
            </div>
            <div className="space-y-6">
              <div className="flex gap-4 relative">
                <div className="flex flex-col items-center">
                  <div className="h-3 w-3 rounded-full bg-emerald-500 mt-1.5 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
                  <div className="w-px flex-1 bg-outline-variant/30 mt-2"></div>
                </div>
                <div className="pb-2">
                  <p className="text-sm font-bold text-on-surface leading-tight">Database Sync Completed</p>
                  <p className="text-xs text-on-surface-variant/80 mt-1">Infrastructure replication across Zone-B confirmed by Admin: Karim.</p>
                  <span className="text-[0.65rem] font-bold text-outline uppercase tracking-wider mt-2 block">12:42:01 UTC</span>
                </div>
              </div>
              <div className="flex gap-4 relative">
                <div className="flex flex-col items-center">
                  <div className="h-3 w-3 rounded-full bg-secondary mt-1.5"></div>
                  <div className="w-px flex-1 bg-outline-variant/30 mt-2"></div>
                </div>
                <div className="pb-2">
                  <p className="text-sm font-bold text-on-surface leading-tight">Firmware Patch Rolled</p>
                  <p className="text-xs text-on-surface-variant/80 mt-1">Node-12 received security definition update v4.2.1-stable.</p>
                  <span className="text-[0.65rem] font-bold text-outline uppercase tracking-wider mt-2 block">11:15:33 UTC</span>
                </div>
              </div>
              <div className="flex gap-4 relative">
                <div className="flex flex-col items-center">
                  <div className="h-3 w-3 rounded-full bg-orange-500 mt-1.5"></div>
                  <div className="w-px flex-1 bg-outline-variant/30 mt-2"></div>
                </div>
                <div className="pb-2">
                  <p className="text-sm font-bold text-on-surface leading-tight">Privileged Login Attempt</p>
                  <p className="text-xs text-on-surface-variant/80 mt-1">Suspicious authentication attempt from unknown IP (103.44.2.xx) blocked.</p>
                  <span className="text-[0.65rem] font-bold text-outline uppercase tracking-wider mt-2 block">09:55:12 UTC</span>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="h-3 w-3 rounded-full bg-emerald-500 mt-1.5"></div>
                </div>
                <div className="">
                  <p className="text-sm font-bold text-on-surface leading-tight">System Initialization</p>
                  <p className="text-xs text-on-surface-variant/80 mt-1">Sentinel core services restarted after maintenance window.</p>
                  <span className="text-[0.65rem] font-bold text-outline uppercase tracking-wider mt-2 block">08:00:00 UTC</span>
                </div>
              </div>
            </div>
          </div>

          {/* Database Sync Status & Network Visual */}
          <div className="col-span-12 lg:col-span-7 grid grid-cols-2 gap-7">
            {/* Database Card */}
            <div className="col-span-2 md:col-span-1 bg-surface-container-high rounded-lg p-7 border-l-4 border-secondary flex flex-col justify-between">
              <div>
                <span className="material-symbols-outlined text-secondary text-3xl mb-4">database</span>
                <h3 className="text-lg font-extrabold tracking-tight font-headline">Database Integrity</h3>
                <p className="text-xs text-on-surface-variant mt-2">Global sync across all 3 redundant data centers.</p>
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-end mb-1">
                  <span className="text-3xl font-black text-secondary">100%</span>
                  <span className="text-[0.65rem] font-bold tracking-widest text-on-surface-variant uppercase">Synced</span>
                </div>
                <div className="h-2 w-full bg-surface-container rounded-full overflow-hidden">
                  <div className="h-full bg-secondary w-full"></div>
                </div>
              </div>
            </div>

            {/* Network Intrusion (Graphic focus) */}
            <div className="col-span-2 md:col-span-1 bg-surface-container-highest rounded-lg p-7 relative overflow-hidden flex flex-col justify-between">
              <div className="relative z-10">
                <h3 className="text-lg font-extrabold tracking-tight font-headline">Traffic Vectors</h3>
                <p className="text-xs text-on-surface-variant mt-1">Last 60 Minutes</p>
              </div>
              <div className="h-32 flex items-center justify-center">
                {/* SVG Radar/Graph simulation */}
                <svg className="w-24 h-24" viewBox="0 0 100 100">
                  <circle className="text-on-surface-variant/20" cx="50" cy="50" fill="none" r="45" stroke="currentColor" strokeWidth="0.5"></circle>
                  <circle className="text-on-surface-variant/20" cx="50" cy="50" fill="none" r="30" stroke="currentColor" strokeWidth="0.5"></circle>
                  <circle className="text-on-surface-variant/20" cx="50" cy="50" fill="none" r="15" stroke="currentColor" strokeWidth="0.5"></circle>
                  <line className="text-on-surface-variant/20" stroke="currentColor" strokeWidth="0.5" x1="50" x2="50" y1="5" y2="95"></line>
                  <line className="text-on-surface-variant/20" stroke="currentColor" strokeWidth="0.5" x1="5" x2="95" y1="50" y2="50"></line>
                  <path d="M50 50 L70 30 L80 60 L40 80 Z" fill="rgba(0, 80, 58, 0.2)" stroke="#00503a" strokeWidth="1"></path>
                </svg>
              </div>
              <div className="flex justify-between text-[0.65rem] font-bold tracking-widest text-on-surface-variant uppercase relative z-10">
                <span>Ingress</span>
                <span>Egress</span>
              </div>
            </div>

            {/* Location Visualizer (Full width of the 7-col span) */}
            <div className="col-span-2 bg-white rounded-lg p-1 relative h-64 overflow-hidden border border-outline-variant/10">
              <img alt="Infrastructure Map" className="w-full h-full object-cover rounded-md opacity-40 mix-blend-multiply" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyCsFJ5Ec9jP0O28F3DhzvokHmBwN_kKkIkt3GjozW15dPS1XqvEUgv57KzW38CW6-0mwPOgkAeGHNc6pFTRtQcjIqwz-HEOXzkkwNHMsJmeuE7nlo-OLTBRYo2Td7CqdZKgZ3Wx3o3KTMzxujQE2nMD4D2HQMiVR835zn07mPu8ISdowlJoDgzjndA3SOJ6qG1k16ewQOpRyYkoMNxDb3Hn9pS0WJAJXb0_i9K_ItsH9BUQ3llQ9ygyetKi8eLZgBRQZJNZ6jQ45V"/>
              <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
              <div className="absolute top-6 left-6">
                <div className="bg-primary text-white px-3 py-1 rounded text-[0.65rem] font-bold uppercase tracking-widest">
                  Zone-Alpha: Active
                </div>
              </div>
              <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                <div>
                  <h4 className="font-black text-on-surface tracking-tighter font-headline">Dhaka Central Hub</h4>
                  <p className="text-xs text-on-surface-variant font-medium">Lat: 23.8103° N, Long: 90.4125° E</p>
                </div>
                <div className="flex gap-2">
                  <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
                  <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
                  <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contextual Status Footer Overlay */}
      <div className="fixed bottom-6 right-6 z-50 hidden md:block">
        <div className="bg-white/90 backdrop-blur-lg px-5 py-3 rounded-full shadow-2xl border border-outline-variant/20 flex items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-lg">verified_user</span>
            <span className="text-xs font-bold text-on-surface">Encryption: AES-256</span>
          </div>
          <div className="h-4 w-px bg-outline-variant/30"></div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-secondary text-lg">router</span>
            <span className="text-xs font-bold text-on-surface">Uptime: 99.998%</span>
          </div>
        </div>
      </div>
    </main>
  );
}
