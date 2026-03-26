import React from 'react';

export default function Infrastructure() {
  return (
    <div className="flex-1 relative overflow-hidden flex flex-col bg-[#0a0c0c] text-slate-200 h-[calc(100vh-64px)] font-body">
      {/* Performance Strip */}
      <div className="grid grid-cols-4 gap-0 border-b border-white/5 bg-slate-950/50 backdrop-blur-md shrink-0">
        <div className="p-4 border-r border-white/5 flex flex-col justify-center">
          <span className="text-[10px] text-slate-500 font-bold tracking-widest uppercase">Network PSR</span>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-headline font-black text-emerald-400">98.2%</span>
            <span className="text-[10px] text-emerald-500/70 font-bold">↑ 0.4%</span>
          </div>
        </div>
        <div className="p-4 border-r border-white/5 flex flex-col justify-center">
          <span className="text-[10px] text-slate-500 font-bold tracking-widest uppercase">Gateways Active</span>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-headline font-black text-white">42 / 44</span>
            <span className="text-[10px] text-tertiary font-bold">● 2 Offline</span>
          </div>
        </div>
        <div className="p-4 border-r border-white/5 flex flex-col justify-center">
          <span className="text-[10px] text-slate-500 font-bold tracking-widest uppercase">Avg Latency</span>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-headline font-black text-secondary">142ms</span>
            <span className="text-[10px] text-emerald-500/70 font-bold">Stable</span>
          </div>
        </div>
        <div className="p-4 flex flex-col justify-center">
          <span className="text-[10px] text-slate-500 font-bold tracking-widest uppercase">Throughput</span>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-headline font-black text-white">840 Kbps</span>
            <span className="text-[10px] text-slate-500">Uplink</span>
          </div>
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="flex-1 p-6 grid grid-cols-12 grid-rows-6 gap-6 overflow-hidden">
        {/* Interactive Mesh Map (Asymmetric Hero) */}
        <div className="col-span-12 lg:col-span-8 row-span-4 relative rounded-xl overflow-hidden bg-slate-900 border border-white/5 shadow-2xl">
          <div className="absolute inset-0 bg-cover bg-center" data-alt="Satellite night view of Bangladesh delta region with glowing network hub points and connecting mesh lines in emerald and amber" data-location="Bangladesh" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDy5ZwHaFK1SSMQgmYSrajEshmXR3jMLfs7MdilMz-0S2ROZoPaEJq04dwd45zzuiUBX5hasdn29H4N3zvoiQeyyKa_pumWV12_KjpYdyJ-YiinARCF6hENWWzfNQp9gVF5I6_fxEpz7C3ZiTPZGdT-CdEcVnHfPKNwOuICaovngmc7sXEzJovkGhwFKttYHA3rizP8np267oWSS9UBqtiIPViLDMJeBhRbAc_H_R6a7f3pvvgvcaqO5cbk1kTKdoy0WV91R86W9KzU')" }}></div>
          <div className="absolute inset-0 bg-[#0a0c0c]/60 mix-blend-multiply"></div>
          
          {/* Map HUD */}
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            <div className="p-3 rounded-lg border border-white/10 bg-[#1b1c1c]/80 backdrop-blur-md">
              <h3 className="text-[10px] font-bold text-emerald-400 tracking-tighter uppercase mb-2">Topology Legend</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]"></div>
                  <span className="text-[10px] font-medium">Gateway (Online)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-amber-500 shadow-[0_0_8px_#f59e0b]"></div>
                  <span className="text-[10px] font-medium">Warning Threshold</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-tertiary shadow-[0_0_8px_#ef4444]"></div>
                  <span className="text-[10px] font-medium">Node Offline</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Map Controls */}
          <div className="absolute bottom-4 right-4 flex flex-col gap-2">
            <button className="bg-[#1b1c1c]/80 backdrop-blur-md w-10 h-10 rounded border border-white/10 flex items-center justify-center hover:bg-emerald-900/40 transition-colors">
              <span className="material-symbols-outlined text-sm">add</span>
            </button>
            <button className="bg-[#1b1c1c]/80 backdrop-blur-md w-10 h-10 rounded border border-white/10 flex items-center justify-center hover:bg-emerald-900/40 transition-colors">
              <span className="material-symbols-outlined text-sm">remove</span>
            </button>
            <button className="bg-primary text-white w-10 h-10 rounded border border-white/10 flex items-center justify-center hover:bg-emerald-700 transition-colors mt-2 shadow-lg">
              <span className="material-symbols-outlined text-sm">my_location</span>
            </button>
          </div>
          
          {/* Dynamic Floating Data Points (Visual interest) */}
          <div className="absolute top-1/4 left-1/3 group cursor-pointer">
            <div className="w-4 h-4 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_12px_#10b981]"></div>
            <div className="hidden group-hover:block absolute top-6 left-0 bg-[#1b1c1c]/80 backdrop-blur-md p-2 rounded text-[9px] whitespace-nowrap z-10 border border-emerald-500/50">
              GW-DHAKA-01 | PSR 99.1%
            </div>
          </div>
        </div>

        {/* Real-time Event Log (Right Column) */}
        <div className="col-span-12 lg:col-span-4 row-span-3 flex flex-col rounded-xl overflow-hidden bg-slate-950/80 border border-white/5">
          <div className="px-4 py-3 border-b border-white/5 flex justify-between items-center">
            <h3 className="text-xs font-headline font-bold uppercase tracking-widest text-slate-400">System Event Log</h3>
            <span className="text-[10px] bg-primary/20 text-emerald-400 px-2 py-0.5 rounded">LIVE</span>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
            <div className="flex gap-3">
              <span className="text-[9px] font-mono text-slate-600 mt-1">14:22:01</span>
              <div className="flex-1">
                <p className="text-[11px] text-emerald-400 font-bold">Gateway BS-01 Restored</p>
                <p className="text-[10px] text-slate-500">Node connectivity resuming in Zone C.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-[9px] font-mono text-slate-600 mt-1">14:18:45</span>
              <div className="flex-1">
                <p className="text-[11px] text-amber-400 font-bold">Node 402 Battery Warning</p>
                <p className="text-[10px] text-slate-500">Charge level 12%. Scheduled service recommended.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-[9px] font-mono text-slate-600 mt-1">14:05:12</span>
              <div className="flex-1">
                <p className="text-[11px] text-white font-bold">Firmware Update Successful - Zone A</p>
                <p className="text-[10px] text-slate-500">124 nodes upgraded to v2.4.1.</p>
              </div>
            </div>
            <div className="flex gap-3 opacity-60">
              <span className="text-[9px] font-mono text-slate-600 mt-1">13:50:33</span>
              <div className="flex-1">
                <p className="text-[11px] text-tertiary font-bold">Gateway CT-09 Connection Timeout</p>
                <p className="text-[10px] text-slate-500">Attempting auto-reboot via Control Plane.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Spectral Analysis Widget (Right Column Bottom) */}
        <div className="col-span-12 lg:col-span-4 row-span-3 rounded-xl overflow-hidden bg-slate-950/80 border border-white/5 p-4 flex flex-col">
          <h3 className="text-xs font-headline font-bold uppercase tracking-widest text-slate-400 mb-4">Spectral SF Distribution</h3>
          <div className="flex-1 flex items-end justify-between gap-2 px-2">
            <div className="flex flex-col items-center gap-2 group w-full">
              <div className="w-full bg-emerald-500 h-12 rounded-t-sm group-hover:bg-emerald-400 transition-colors"></div>
              <span className="text-[9px] font-bold text-slate-500">SF7</span>
            </div>
            <div className="flex flex-col items-center gap-2 group w-full">
              <div className="w-full bg-emerald-600 h-24 rounded-t-sm group-hover:bg-emerald-400 transition-colors"></div>
              <span className="text-[9px] font-bold text-slate-500">SF8</span>
            </div>
            <div className="flex flex-col items-center gap-2 group w-full">
              <div className="w-full bg-emerald-700 h-32 rounded-t-sm group-hover:bg-emerald-400 transition-colors"></div>
              <span className="text-[9px] font-bold text-slate-500">SF9</span>
            </div>
            <div className="flex flex-col items-center gap-2 group w-full">
              <div className="w-full bg-emerald-800 h-16 rounded-t-sm group-hover:bg-emerald-400 transition-colors"></div>
              <span className="text-[9px] font-bold text-slate-500">SF10</span>
            </div>
            <div className="flex flex-col items-center gap-2 group w-full">
              <div className="w-full bg-amber-600 h-8 rounded-t-sm group-hover:bg-amber-400 transition-colors"></div>
              <span className="text-[9px] font-bold text-slate-500">SF11</span>
            </div>
            <div className="flex flex-col items-center gap-2 group w-full">
              <div className="w-full bg-tertiary h-4 rounded-t-sm"></div>
              <span className="text-[9px] font-bold text-slate-500">SF12</span>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-white/5">
            <div className="flex justify-between text-[10px]">
              <span className="text-slate-500">Optimal Airtime Usage</span>
              <span className="text-emerald-400 font-bold">88%</span>
            </div>
            <div className="w-full bg-white/5 h-1.5 rounded-full mt-2 overflow-hidden">
              <div className="bg-emerald-500 h-full w-[88%]"></div>
            </div>
          </div>
        </div>

        {/* Node Registry (Bottom Full Width) */}
        <div className="col-span-12 row-span-2 rounded-xl overflow-hidden bg-slate-950/80 border border-white/5 flex flex-col">
          <div className="px-6 py-3 border-b border-white/5 flex justify-between items-center bg-slate-900/50">
            <h3 className="text-xs font-headline font-bold uppercase tracking-widest text-slate-400">Critical Node Registry</h3>
            <div className="flex gap-4">
              <button className="text-[10px] text-emerald-400 font-bold hover:underline flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">download</span> GENERATE NETWORK REPORT
              </button>
              <button className="text-[10px] text-secondary font-bold hover:underline flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">wifi_tethering</span> BROADCAST PING
              </button>
            </div>
          </div>
          <div className="flex-1 overflow-y-auto custom-scrollbar">
            <table className="w-full text-[11px] text-left border-collapse">
              <thead className="sticky top-0 bg-slate-950/90 backdrop-blur-sm border-b border-white/5 z-10">
                <tr className="text-slate-500 uppercase tracking-tighter">
                  <th className="px-6 py-3 font-semibold">Node Name</th>
                  <th className="px-4 py-3 font-semibold">Status</th>
                  <th className="px-4 py-3 font-semibold">RSSI</th>
                  <th className="px-4 py-3 font-semibold">SNR</th>
                  <th className="px-4 py-3 font-semibold">Battery</th>
                  <th className="px-4 py-3 font-semibold">Firmware</th>
                  <th className="px-6 py-3 font-semibold text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                <tr className="hover:bg-white/5 transition-colors group">
                  <td className="px-6 py-3 font-bold text-slate-200">Dhanmondi Mosque Node</td>
                  <td className="px-4 py-3">
                    <span className="inline-flex items-center gap-1.5 text-emerald-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Healthy
                    </span>
                  </td>
                  <td className="px-4 py-3 font-mono text-slate-400">-102 dBm</td>
                  <td className="px-4 py-3 font-mono text-slate-400">8.4 dB</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <span className="text-emerald-400 font-bold">94%</span>
                      <div className="w-8 h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <div className="bg-emerald-500 h-full w-[94%]"></div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-slate-500">v2.4.1</td>
                  <td className="px-6 py-3 text-right">
                    <button className="text-slate-500 hover:text-white transition-colors"><span className="material-symbols-outlined text-base">more_vert</span></button>
                  </td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors group">
                  <td className="px-6 py-3 font-bold text-slate-200">Chattogram Med School</td>
                  <td className="px-4 py-3">
                    <span className="inline-flex items-center gap-1.5 text-tertiary">
                      <span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span> Critical
                    </span>
                  </td>
                  <td className="px-4 py-3 font-mono text-slate-400">-118 dBm</td>
                  <td className="px-4 py-3 font-mono text-slate-400">-4.2 dB</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <span className="text-tertiary font-bold">12%</span>
                      <div className="w-8 h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <div className="bg-tertiary h-full w-[12%]"></div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-slate-500">v2.4.1</td>
                  <td className="px-6 py-3 text-right">
                    <button className="text-slate-500 hover:text-white transition-colors"><span className="material-symbols-outlined text-base">more_vert</span></button>
                  </td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors group">
                  <td className="px-6 py-3 font-bold text-slate-200">Sylhet Tea Garden Relay</td>
                  <td className="px-4 py-3">
                    <span className="inline-flex items-center gap-1.5 text-amber-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span> Warning
                    </span>
                  </td>
                  <td className="px-4 py-3 font-mono text-slate-400">-112 dBm</td>
                  <td className="px-4 py-3 font-mono text-slate-400">2.1 dB</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <span className="text-amber-400 font-bold">48%</span>
                      <div className="w-8 h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <div className="bg-amber-400 h-full w-[48%]"></div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-slate-500">v2.3.8</td>
                  <td className="px-6 py-3 text-right">
                    <button className="text-slate-500 hover:text-white transition-colors"><span className="material-symbols-outlined text-base">more_vert</span></button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
