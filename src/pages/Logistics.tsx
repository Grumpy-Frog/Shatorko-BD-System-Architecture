import React from 'react';

export default function Logistics() {
  return (
    <main className="p-4 md:p-8 min-h-[calc(100vh-64px)] overflow-x-hidden bg-surface">
      {/* Header Section */}
      <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <span className="text-primary font-bold tracking-widest text-xs uppercase mb-2 block">Resilience Infrastructure</span>
          <h2 className="text-3xl font-black font-headline tracking-tighter text-on-background">Logistics & Supply Chain Hub</h2>
        </div>
        <div className="flex gap-3">
          <div className="bg-surface-container-low px-4 py-2 rounded flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
            <span className="text-xs font-bold font-label uppercase text-on-surface-variant">System Status: Optimal</span>
          </div>
          <div className="bg-secondary-container/10 px-4 py-2 rounded flex items-center gap-2">
            <span className="material-symbols-outlined text-secondary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>calendar_today</span>
            <span className="text-xs font-bold font-label text-on-surface-variant">Oct 24, 2024</span>
          </div>
        </div>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Supply Fleet Overview (Large Left) */}
        <section className="md:col-span-8 bg-surface-container-low rounded-xl overflow-hidden flex flex-col">
          <div className="p-6 flex justify-between items-center">
            <div>
              <h3 className="font-headline font-bold text-lg">Supply Fleet Overview</h3>
              <p className="text-sm text-on-surface-variant">Real-time GPS tracking of regional aid movement</p>
            </div>
            <div className="flex gap-2">
              <span className="bg-primary-fixed text-on-primary-fixed px-3 py-1 rounded-full text-[10px] font-black tracking-widest uppercase">12 Active Trucks</span>
              <span className="bg-secondary-fixed text-on-secondary-fixed px-3 py-1 rounded-full text-[10px] font-black tracking-widest uppercase">4 Rescue Boats</span>
            </div>
          </div>
          <div className="relative h-[400px] bg-surface-container-high group">
            <img alt="Logistics Map" className="w-full h-full object-cover opacity-60 mix-blend-multiply" data-alt="Simplified abstract satellite map view of river delta region with digital route overlays in emerald and blue" data-location="Dhaka" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCw7InDc4gdwXXDqjjfMrPVUyBooRpZiHUjlCOH0I3K-PmXxDiUcH7yDtmDC3tPFpF6WQdGOx0CZwO5InnELgXq4KpkE32OyNUgrjz_ks8BS8JOFgYRI_OtwjyWnk5AVFCqLAfTVGWiTGZcdLHN4ycsyvoYb89l6bst4kCfQgTUBUMAjlaFZzBOGE5n19cZPTHEMG8t92-JRocsq7Ua81REwAPFCgX1inqH8AK8Y_8tBF0_twcGdV0_KX4i14PGE7FurLj_77Y2bSou" />
            {/* Floating Map Marker Overlays */}
            <div className="absolute top-1/4 left-1/3 glass-panel p-2 rounded shadow-xl flex items-center gap-3 border border-white/20">
              <div className="bg-primary-container text-white p-2 rounded">
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>local_shipping</span>
              </div>
              <div className="pr-2">
                <p className="text-[10px] font-black uppercase text-primary">Fleet #402</p>
                <p className="text-xs font-bold">En Route: Sylhet</p>
              </div>
            </div>
            <div className="absolute bottom-1/3 right-1/4 glass-panel p-2 rounded shadow-xl flex items-center gap-3 border border-white/20">
              <div className="bg-secondary text-white p-2 rounded">
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>directions_boat</span>
              </div>
              <div className="pr-2">
                <p className="text-[10px] font-black uppercase text-secondary">Vessel B-12</p>
                <p className="text-xs font-bold">Mooring: Sunamganj</p>
              </div>
            </div>
            <div className="absolute inset-0 pointer-events-none border-[12px] border-surface-container-low opacity-40"></div>
          </div>
        </section>

        {/* Logistics Incident Feed (Right Narrow) */}
        <section className="md:col-span-4 bg-surface-container-low rounded-xl p-6 flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-headline font-bold text-lg">Live Log</h3>
            <span className="material-symbols-outlined text-on-surface-variant cursor-pointer">more_horiz</span>
          </div>
          <div className="space-y-6 overflow-y-auto max-h-[440px] pr-2 custom-scrollbar">
            <div className="flex gap-4 border-l-2 border-emerald-500 pl-4 py-1">
              <div className="text-[10px] font-bold text-on-surface-variant font-label min-w-[40px]">14:20</div>
              <div>
                <p className="text-sm font-bold">Fuel delivery confirmed</p>
                <p className="text-xs text-on-surface-variant">Sunamganj Shelter Hub</p>
              </div>
            </div>
            <div className="flex gap-4 border-l-2 border-tertiary pl-4 py-1">
              <div className="text-[10px] font-bold text-on-surface-variant font-label min-w-[40px]">13:45</div>
              <div>
                <p className="text-sm font-bold text-tertiary">Shipment #402 delayed</p>
                <p className="text-xs text-on-surface-variant">Road flooding on N2 highway</p>
              </div>
            </div>
            <div className="flex gap-4 border-l-2 border-slate-300 pl-4 py-1">
              <div className="text-[10px] font-bold text-on-surface-variant font-label min-w-[40px]">12:10</div>
              <div>
                <p className="text-sm font-bold">New allocation: Medical Kits</p>
                <p className="text-xs text-on-surface-variant">Processing at Dhaka Hub</p>
              </div>
            </div>
            <div className="flex gap-4 border-l-2 border-emerald-500 pl-4 py-1">
              <div className="text-[10px] font-bold text-on-surface-variant font-label min-w-[40px]">11:30</div>
              <div>
                <p className="text-sm font-bold">Fleet #399 arriving</p>
                <p className="text-xs text-on-surface-variant">School B Relief Center</p>
              </div>
            </div>
            <div className="flex gap-4 border-l-2 border-slate-300 pl-4 py-1">
              <div className="text-[10px] font-bold text-on-surface-variant font-label min-w-[40px]">09:15</div>
              <div>
                <p className="text-sm font-bold">Inventory Sync Complete</p>
                <p className="text-xs text-on-surface-variant">All 42 nodes online</p>
              </div>
            </div>
          </div>
        </section>

        {/* Inventory Status Matrix (Wide Bottom) */}
        <section className="md:col-span-12 bg-surface-container-lowest rounded-xl p-8 shadow-sm">
          <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-8">
            <div>
              <h3 className="font-headline font-bold text-xl">Inventory Status Matrix</h3>
              <p className="text-sm text-on-surface-variant">Active monitoring across high-risk community shelters</p>
            </div>
            <div className="flex gap-2">
              <div className="flex items-center gap-2 px-3 py-1 bg-surface-container rounded">
                <span className="w-3 h-3 bg-emerald-500 rounded-sm"></span>
                <span className="text-[10px] font-bold uppercase">Optimal</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1 bg-surface-container rounded">
                <span className="w-3 h-3 bg-amber-500 rounded-sm"></span>
                <span className="text-[10px] font-bold uppercase">Low</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1 bg-surface-container rounded">
                <span className="w-3 h-3 bg-red-500 rounded-sm"></span>
                <span className="text-[10px] font-bold uppercase">Critical</span>
              </div>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-separate border-spacing-y-3">
              <thead>
                <tr className="text-on-surface-variant font-label uppercase text-[10px] tracking-widest">
                  <th className="pb-4 px-4">Shelter / Node</th>
                  <th className="pb-4 px-4 text-center">Dry Food</th>
                  <th className="pb-4 px-4 text-center">Clean Water</th>
                  <th className="pb-4 px-4 text-center">Medical Kits</th>
                  <th className="pb-4 px-4 text-center">Fuel</th>
                  <th className="pb-4 px-4 text-right">Last Sync</th>
                </tr>
              </thead>
              <tbody className="space-y-4">
                <tr className="bg-surface-container-low group hover:bg-surface-container transition-colors">
                  <td className="py-4 px-4 rounded-l-lg border-l-4 border-emerald-500">
                    <p className="font-bold text-sm">Central Mosque A</p>
                    <p className="text-[10px] text-on-surface-variant">Sadr, Sylhet</p>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <div className="h-2 w-full max-w-[80px] bg-slate-200 rounded-full mx-auto overflow-hidden">
                      <div className="h-full bg-emerald-500 w-[85%]"></div>
                    </div>
                    <span className="text-[10px] font-bold mt-1 inline-block">85%</span>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <div className="h-2 w-full max-w-[80px] bg-slate-200 rounded-full mx-auto overflow-hidden">
                      <div className="h-full bg-emerald-500 w-[92%]"></div>
                    </div>
                    <span className="text-[10px] font-bold mt-1 inline-block">92%</span>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <div className="h-2 w-full max-w-[80px] bg-slate-200 rounded-full mx-auto overflow-hidden">
                      <div className="h-full bg-amber-500 w-[45%]"></div>
                    </div>
                    <span className="text-[10px] font-bold mt-1 inline-block text-amber-600">45%</span>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <div className="h-2 w-full max-w-[80px] bg-slate-200 rounded-full mx-auto overflow-hidden">
                      <div className="h-full bg-emerald-500 w-[70%]"></div>
                    </div>
                    <span className="text-[10px] font-bold mt-1 inline-block">70%</span>
                  </td>
                  <td className="py-4 px-4 text-right text-[10px] font-medium text-on-surface-variant rounded-r-lg">2 mins ago</td>
                </tr>
                <tr className="bg-surface-container-low group hover:bg-surface-container transition-colors">
                  <td className="py-4 px-4 rounded-l-lg border-l-4 border-amber-500">
                    <p className="font-bold text-sm">Govt Primary School B</p>
                    <p className="text-[10px] text-on-surface-variant">Beanibazar</p>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <div className="h-2 w-full max-w-[80px] bg-slate-200 rounded-full mx-auto overflow-hidden">
                      <div className="h-full bg-emerald-500 w-[65%]"></div>
                    </div>
                    <span className="text-[10px] font-bold mt-1 inline-block">65%</span>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <div className="h-2 w-full max-w-[80px] bg-slate-200 rounded-full mx-auto overflow-hidden">
                      <div className="h-full bg-red-500 w-[12%]"></div>
                    </div>
                    <span className="text-[10px] font-bold mt-1 inline-block text-red-600">12%</span>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <div className="h-2 w-full max-w-[80px] bg-slate-200 rounded-full mx-auto overflow-hidden">
                      <div className="h-full bg-emerald-500 w-[80%]"></div>
                    </div>
                    <span className="text-[10px] font-bold mt-1 inline-block">80%</span>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <div className="h-2 w-full max-w-[80px] bg-slate-200 rounded-full mx-auto overflow-hidden">
                      <div className="h-full bg-amber-500 w-[30%]"></div>
                    </div>
                    <span className="text-[10px] font-bold mt-1 inline-block text-amber-600">30%</span>
                  </td>
                  <td className="py-4 px-4 text-right text-[10px] font-medium text-on-surface-variant rounded-r-lg">15 mins ago</td>
                </tr>
                <tr className="bg-surface-container-low group hover:bg-surface-container transition-colors">
                  <td className="py-4 px-4 rounded-l-lg border-l-4 border-red-500">
                    <p className="font-bold text-sm">Sunamganj General Hospital C</p>
                    <p className="text-[10px] text-on-surface-variant">Core Hub</p>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <div className="h-2 w-full max-w-[80px] bg-slate-200 rounded-full mx-auto overflow-hidden">
                      <div className="h-full bg-red-500 w-[8%]"></div>
                    </div>
                    <span className="text-[10px] font-bold mt-1 inline-block text-red-600">8%</span>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <div className="h-2 w-full max-w-[80px] bg-slate-200 rounded-full mx-auto overflow-hidden">
                      <div className="h-full bg-red-500 w-[15%]"></div>
                    </div>
                    <span className="text-[10px] font-bold mt-1 inline-block text-red-600">15%</span>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <div className="h-2 w-full max-w-[80px] bg-slate-200 rounded-full mx-auto overflow-hidden">
                      <div className="h-full bg-red-500 w-[20%]"></div>
                    </div>
                    <span className="text-[10px] font-bold mt-1 inline-block text-red-600">20%</span>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <div className="h-2 w-full max-w-[80px] bg-slate-200 rounded-full mx-auto overflow-hidden">
                      <div className="h-full bg-red-500 w-[5%]"></div>
                    </div>
                    <span className="text-[10px] font-bold mt-1 inline-block text-red-600">5%</span>
                  </td>
                  <td className="py-4 px-4 text-right text-[10px] font-medium text-on-surface-variant rounded-r-lg">Just now</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Integrity & Forecast (Bottom Row) */}
        <section className="md:col-span-6 bg-surface-container-low rounded-xl p-6">
          <div className="flex items-center gap-3 mb-6">
            <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>route</span>
            <h3 className="font-headline font-bold text-lg">Last-Mile Integrity</h3>
          </div>
          <div className="space-y-4">
            <div className="relative pl-10 pb-6 border-l border-dashed border-primary/30">
              <div className="absolute left-[-6px] top-0 w-3 h-3 rounded-full bg-primary shadow-sm"></div>
              <p className="text-xs font-black text-primary uppercase">Regional Hub: Dhaka Central</p>
              <div className="mt-2 bg-surface p-3 rounded text-xs flex justify-between">
                <span>Primary Dispatch: Active</span>
                <span className="font-bold">120 Tons/Day</span>
              </div>
            </div>
            <div className="relative pl-10 pb-6 border-l border-dashed border-primary/30">
              <div className="absolute left-[-6px] top-0 w-3 h-3 rounded-full bg-primary-container shadow-sm"></div>
              <p className="text-xs font-black text-primary-container uppercase">Relay Node: Sylhet Logistics Base</p>
              <div className="mt-2 flex gap-2">
                <div className="bg-surface p-2 rounded text-[10px] flex-1 border-t-2 border-emerald-500">
                  <span className="block font-bold">Relay A (Trucks)</span>
                  <span>Operational</span>
                </div>
                <div className="bg-surface p-2 rounded text-[10px] flex-1 border-t-2 border-secondary">
                  <span className="block font-bold">Relay B (Barges)</span>
                  <span>High Tide Restricted</span>
                </div>
              </div>
            </div>
            <div className="relative pl-10">
              <div className="absolute left-[-6px] top-0 w-3 h-3 rounded-full bg-secondary shadow-sm"></div>
              <p className="text-xs font-black text-secondary uppercase">Community Shelter Nodes (Final)</p>
              <div className="flex items-center gap-4 mt-3">
                <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center">
                  <span className="material-symbols-outlined text-emerald-700 text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>home</span>
                </div>
                <div className="flex-grow h-1 bg-slate-200 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 w-[95%]"></div>
                </div>
                <span className="text-[10px] font-black">95% Connectivity</span>
              </div>
            </div>
          </div>
        </section>

        <section className="md:col-span-6 bg-surface-container-low rounded-xl p-6">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>query_stats</span>
              <h3 className="font-headline font-bold text-lg">Predictive Demand Forecast</h3>
            </div>
            <select className="text-[10px] font-bold bg-surface border-0 rounded py-1 px-3 focus:ring-0">
              <option>MONSOON FLOOD (EST)</option>
              <option>CYCLONE SIYAL (SIM)</option>
            </select>
          </div>
          <div className="h-48 flex items-end justify-between gap-4 mt-8">
            <div className="flex-1 flex flex-col items-center gap-2 group">
              <div className="w-full bg-slate-200 rounded-t h-[40%] group-hover:bg-slate-300 transition-all"></div>
              <span className="text-[10px] font-bold text-on-surface-variant font-label uppercase">Current</span>
            </div>
            <div className="flex-1 flex flex-col items-center gap-2 group">
              <div className="w-full bg-primary/20 rounded-t h-[65%] group-hover:bg-primary/30 transition-all relative">
                <div className="absolute top-[-25px] left-0 right-0 text-center text-[10px] font-black text-primary">+25%</div>
              </div>
              <span className="text-[10px] font-bold text-on-surface-variant font-label uppercase">24h Peak</span>
            </div>
            <div className="flex-1 flex flex-col items-center gap-2 group">
              <div className="w-full bg-primary-container rounded-t h-[90%] group-hover:bg-primary transition-all relative shadow-lg shadow-primary/10">
                <div className="absolute top-[-25px] left-0 right-0 text-center text-[10px] font-black text-primary-container">+50%</div>
              </div>
              <span className="text-[10px] font-bold text-on-surface-variant font-label uppercase">72h Peak</span>
            </div>
            <div className="flex-1 flex flex-col items-center gap-2 group">
              <div className="w-full bg-secondary/20 rounded-t h-[55%] group-hover:bg-secondary/30 transition-all"></div>
              <span className="text-[10px] font-bold text-on-surface-variant font-label uppercase">Recovery</span>
            </div>
          </div>
          <div className="mt-6 p-4 bg-tertiary-container/10 rounded flex items-start gap-4 border-l-4 border-tertiary">
            <span className="material-symbols-outlined text-tertiary text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>priority_high</span>
            <div>
              <p className="text-[10px] font-black text-tertiary uppercase tracking-wider">Early Warning Insight</p>
              <p className="text-xs font-medium leading-relaxed mt-1">Surge in 'Clean Water' demand expected in 48 hours due to upstream discharge in Sylhet basin. Accelerate tanker dispatches.</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
