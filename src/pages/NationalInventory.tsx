import React from 'react';

export default function NationalInventory() {
  return (
    <main className="p-4 md:p-8 min-h-screen bg-surface">
      {/* Header Section */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
        <div>
          <span className="text-primary font-bold tracking-widest text-[10px] uppercase mb-2 block">Sentinel Live Feed</span>
          <h1 className="text-3xl font-black font-headline text-on-surface tracking-tight">National Inventory Dashboard</h1>
        </div>
        <div className="flex gap-4">
          <button className="flex items-center gap-2 px-6 py-3 bg-surface-container-high hover:bg-surface-dim transition-colors rounded-lg text-sm font-bold text-on-surface">
            <span className="material-symbols-outlined text-lg">download</span>
            EXPORT REPORT
          </button>
          <button className="flex items-center gap-2 px-8 py-3 bg-gradient-to-br from-primary to-primary-container text-white rounded-lg text-sm font-bold shadow-lg shadow-primary/20 hover:opacity-90 transition-opacity">
            <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
            EMERGENCY DISPATCH
          </button>
        </div>
      </header>

      {/* Top Stats (Asymmetric Bento) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 mb-7">
        {/* Major Category 1 */}
        <div className="bg-surface-container-low p-6 rounded-xl flex flex-col justify-between border border-outline-variant/10">
          <div className="flex justify-between items-start">
            <div className="p-3 bg-primary/10 rounded-lg">
              <span className="material-symbols-outlined text-primary">lunch_dining</span>
            </div>
            <span className="text-[10px] font-bold text-primary px-2 py-0.5 bg-primary/10 rounded uppercase">Optimal</span>
          </div>
          <div className="mt-8">
            <p className="text-on-surface-variant text-xs font-bold uppercase tracking-wider">Essential Food Units</p>
            <h3 className="text-3xl font-black font-headline mt-1">1.2M <span className="text-sm font-medium text-on-surface-variant">Tons</span></h3>
            <div className="w-full bg-surface-container-highest h-1.5 mt-4 rounded-full overflow-hidden">
              <div className="bg-primary h-full w-[85%]"></div>
            </div>
          </div>
        </div>

        {/* Major Category 2 */}
        <div className="bg-surface-container-low p-6 rounded-xl flex flex-col justify-between border border-outline-variant/10">
          <div className="flex justify-between items-start">
            <div className="p-3 bg-secondary/10 rounded-lg">
              <span className="material-symbols-outlined text-secondary">water_drop</span>
            </div>
            <span className="text-[10px] font-bold text-secondary px-2 py-0.5 bg-secondary/10 rounded uppercase">Stable</span>
          </div>
          <div className="mt-8">
            <p className="text-on-surface-variant text-xs font-bold uppercase tracking-wider">Potable Water Reserve</p>
            <h3 className="text-3xl font-black font-headline mt-1">840K <span className="text-sm font-medium text-on-surface-variant">Ltrs</span></h3>
            <div className="w-full bg-surface-container-highest h-1.5 mt-4 rounded-full overflow-hidden">
              <div className="bg-secondary h-full w-[62%]"></div>
            </div>
          </div>
        </div>

        {/* Major Category 3 */}
        <div className="bg-surface-container-low p-6 rounded-xl flex flex-col justify-between border border-outline-variant/10">
          <div className="flex justify-between items-start">
            <div className="p-3 bg-tertiary/10 rounded-lg">
              <span className="material-symbols-outlined text-tertiary">medical_services</span>
            </div>
            <span className="text-[10px] font-bold text-tertiary px-2 py-0.5 bg-tertiary/10 rounded uppercase">Critical</span>
          </div>
          <div className="mt-8">
            <p className="text-on-surface-variant text-xs font-bold uppercase tracking-wider">Trauma Medical Kits</p>
            <h3 className="text-3xl font-black font-headline mt-1">12.4K <span className="text-sm font-medium text-on-surface-variant">Units</span></h3>
            <div className="w-full bg-surface-container-highest h-1.5 mt-4 rounded-full overflow-hidden">
              <div className="bg-tertiary h-full w-[18%]"></div>
            </div>
          </div>
        </div>

        {/* Major Category 4 */}
        <div className="bg-surface-container-low p-6 rounded-xl flex flex-col justify-between border border-outline-variant/10">
          <div className="flex justify-between items-start">
            <div className="p-3 bg-amber-500/10 rounded-lg">
              <span className="material-symbols-outlined text-amber-600">clean_hands</span>
            </div>
            <span className="text-[10px] font-bold text-amber-600 px-2 py-0.5 bg-amber-500/10 rounded uppercase">Low</span>
          </div>
          <div className="mt-8">
            <p className="text-on-surface-variant text-xs font-bold uppercase tracking-wider">Hygiene Bundles</p>
            <h3 className="text-3xl font-black font-headline mt-1">45.1K <span className="text-sm font-medium text-on-surface-variant">Units</span></h3>
            <div className="w-full bg-surface-container-highest h-1.5 mt-4 rounded-full overflow-hidden">
              <div className="bg-amber-500 h-full w-[35%]"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Heat Map & Regional Status */}
      <div className="grid grid-cols-12 gap-7">
        {/* Nationwide Heat Map Panel */}
        <div className="col-span-12 lg:col-span-8 bg-surface-container-lowest rounded-xl overflow-hidden relative min-h-[500px] shadow-sm border border-outline-variant/10">
          <div className="absolute inset-0 z-0">
            <img 
              className="w-full h-full object-cover opacity-40" 
              alt="Satellite view"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7itACBhAAsVdWUhMMvsXV3Sme-tVl23HMsuJwiAE3JoCtW9aNl0ImuMuG3FZoO0fY5NIN487d5UV5OV9x3ZWusNm8HnAQsBoUJI9JWYTBd1q_74ce0v9DfrkcnxflIcoU84Bt7BMpMqjFai-ARCMmNauYeuSOU3D2aAJqzoZlqed6nWrjiixn9r_5ncOmT0GkGK3ghP7tOKaXC61ND1gILvYjDEmNJ2NODWgbJWL4t9sA92s__YAbTQY1XUnuzfPsSWqtkWXHXoIt" 
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent"></div>
          
          {/* Map Overlay Elements */}
          <div className="absolute top-6 left-6 z-10 bg-surface/80 backdrop-blur-md p-4 rounded-lg border border-white/40">
            <h4 className="text-xs font-black tracking-widest text-primary uppercase mb-3">Live Heat Map View</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-primary"></div>
                <span className="text-[10px] font-bold text-on-surface">OPTIMAL (&gt;80%)</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-secondary"></div>
                <span className="text-[10px] font-bold text-on-surface">STABLE (50-80%)</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                <span className="text-[10px] font-bold text-on-surface">LOW (20-50%)</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-tertiary"></div>
                <span className="text-[10px] font-bold text-on-surface">CRITICAL (&lt;20%)</span>
              </div>
            </div>
          </div>

          {/* Floating Map Controls */}
          <div className="absolute bottom-6 right-6 z-10 flex flex-col gap-2">
            <button className="w-10 h-10 bg-surface/80 backdrop-blur-md flex items-center justify-center rounded-lg hover:bg-white transition-colors border border-white/40">
              <span className="material-symbols-outlined text-on-surface-variant">add</span>
            </button>
            <button className="w-10 h-10 bg-surface/80 backdrop-blur-md flex items-center justify-center rounded-lg hover:bg-white transition-colors border border-white/40">
              <span className="material-symbols-outlined text-on-surface-variant">remove</span>
            </button>
            <button className="w-10 h-10 bg-surface/80 backdrop-blur-md flex items-center justify-center rounded-lg hover:bg-white transition-colors mt-2 border border-white/40">
              <span className="material-symbols-outlined text-on-surface-variant">my_location</span>
            </button>
          </div>

          {/* Map Legend/Title */}
          <div className="absolute bottom-6 left-6 z-10">
            <h2 className="text-6xl font-black font-headline text-on-surface tracking-tighter opacity-10 pointer-events-none">SENTINEL MAP</h2>
            <p className="text-sm font-medium text-on-surface-variant flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
              Real-time supply density active
            </p>
          </div>
        </div>

        {/* Regional Hub Status Table */}
        <div className="col-span-12 lg:col-span-4 flex flex-col gap-7">
          <div className="bg-surface-container-low p-6 rounded-xl flex-1 border border-outline-variant/10">
            <div className="flex justify-between items-center mb-6">
              <h4 className="text-sm font-black font-headline uppercase tracking-widest text-on-surface">Regional Hubs</h4>
              <span className="material-symbols-outlined text-on-surface-variant text-lg">more_horiz</span>
            </div>
            <div className="space-y-4">
              {/* DHAKA */}
              <div className="flex items-center justify-between p-3 rounded-lg hover:bg-surface-container-high transition-colors cursor-pointer group">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded bg-primary flex items-center justify-center text-white text-xs font-black">DK</div>
                  <div>
                    <p className="text-sm font-bold text-on-surface">Dhaka Central</p>
                    <p className="text-[10px] text-on-surface-variant font-medium">Main Strategic Reserve</p>
                  </div>
                </div>
                <span className="text-[10px] font-bold text-primary px-2 py-0.5 bg-primary/10 rounded uppercase">Optimal</span>
              </div>
              {/* CHITTAGONG */}
              <div className="flex items-center justify-between p-3 rounded-lg hover:bg-surface-container-high transition-colors cursor-pointer group">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded bg-secondary flex items-center justify-center text-white text-xs font-black">CT</div>
                  <div>
                    <p className="text-sm font-bold text-on-surface">Chittagong Port</p>
                    <p className="text-[10px] text-on-surface-variant font-medium">Maritime Supply Hub</p>
                  </div>
                </div>
                <span className="text-[10px] font-bold text-secondary px-2 py-0.5 bg-secondary/10 rounded uppercase">Stable</span>
              </div>
              {/* SYLHET */}
              <div className="flex items-center justify-between p-3 rounded-lg hover:bg-surface-container-high transition-colors cursor-pointer group">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded bg-amber-500 flex items-center justify-center text-white text-xs font-black">SY</div>
                  <div>
                    <p className="text-sm font-bold text-on-surface">Sylhet North</p>
                    <p className="text-[10px] text-on-surface-variant font-medium">High Flood Risk Zone</p>
                  </div>
                </div>
                <span className="text-[10px] font-bold text-amber-600 px-2 py-0.5 bg-amber-500/10 rounded uppercase">Low</span>
              </div>
              {/* RANGPUR */}
              <div className="flex items-center justify-between p-3 rounded-lg hover:bg-surface-container-high transition-colors cursor-pointer group">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded bg-tertiary flex items-center justify-center text-white text-xs font-black">RG</div>
                  <div>
                    <p className="text-sm font-bold text-on-surface">Rangpur Sector</p>
                    <p className="text-[10px] text-on-surface-variant font-medium">Border Logistics Site</p>
                  </div>
                </div>
                <span className="text-[10px] font-bold text-tertiary px-2 py-0.5 bg-tertiary/10 rounded uppercase">Critical</span>
              </div>
            </div>
            <button className="w-full mt-6 py-3 border-2 border-dashed border-outline-variant rounded-lg text-[10px] font-black tracking-widest text-on-surface-variant uppercase hover:border-primary hover:text-primary transition-all">
              View All 14 Hubs
            </button>
          </div>
        </div>
      </div>

      {/* Live Supply Chain Shipments */}
      <section className="mt-7">
        <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/10">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h4 className="text-sm font-black font-headline uppercase tracking-widest text-on-surface">Live Supply Chain Shipments</h4>
              <p className="text-xs text-on-surface-variant mt-1">Active distribution vectors across national highways</p>
            </div>
            <div className="flex gap-2">
              <button className="p-2 bg-surface-container-high rounded-lg text-on-surface hover:bg-surface-dim transition-colors">
                <span className="material-symbols-outlined text-lg">filter_list</span>
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-outline-variant/20">
                  <th className="pb-4 text-[10px] font-black uppercase tracking-widest text-on-surface-variant">Asset ID</th>
                  <th className="pb-4 text-[10px] font-black uppercase tracking-widest text-on-surface-variant">Contents</th>
                  <th className="pb-4 text-[10px] font-black uppercase tracking-widest text-on-surface-variant">Origin / Destination</th>
                  <th className="pb-4 text-[10px] font-black uppercase tracking-widest text-on-surface-variant">ETA / Status</th>
                  <th className="pb-4 text-[10px] font-black uppercase tracking-widest text-on-surface-variant">Transit Type</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/10">
                <tr className="group hover:bg-surface-container-high/50 transition-colors">
                  <td className="py-5 font-headline font-bold text-sm">#TX-9042</td>
                  <td className="py-5">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>medical_services</span>
                      <span className="text-sm text-on-surface">5,000 Med-Kits</span>
                    </div>
                  </td>
                  <td className="py-5">
                    <div className="text-xs">
                      <p className="font-bold text-on-surface">Dhaka Hub</p>
                      <p className="text-on-surface-variant">→ Rangpur Sector</p>
                    </div>
                  </td>
                  <td className="py-5">
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-bold text-primary">04:20 HRS</span>
                      <span className="text-[9px] font-black bg-primary/10 text-primary px-2 py-0.5 rounded-full uppercase tracking-tighter">On Schedule</span>
                    </div>
                  </td>
                  <td className="py-5">
                    <span className="material-symbols-outlined text-on-surface-variant">local_shipping</span>
                  </td>
                </tr>
                <tr className="group hover:bg-surface-container-high/50 transition-colors">
                  <td className="py-5 font-headline font-bold text-sm">#TX-8115</td>
                  <td className="py-5">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-secondary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>water_drop</span>
                      <span className="text-sm text-on-surface">12k Ltr Purified</span>
                    </div>
                  </td>
                  <td className="py-5">
                    <div className="text-xs">
                      <p className="font-bold text-on-surface">Sylhet Central</p>
                      <p className="text-on-surface-variant">→ Sunamganj Site B</p>
                    </div>
                  </td>
                  <td className="py-5">
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-bold text-amber-600">01:45 HRS</span>
                      <span className="text-[9px] font-black bg-amber-500/10 text-amber-600 px-2 py-0.5 rounded-full uppercase tracking-tighter">Weather Delay</span>
                    </div>
                  </td>
                  <td className="py-5">
                    <span className="material-symbols-outlined text-on-surface-variant">directions_boat</span>
                  </td>
                </tr>
                <tr className="group hover:bg-surface-container-high/50 transition-colors">
                  <td className="py-5 font-headline font-bold text-sm">#TX-7702</td>
                  <td className="py-5">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>lunch_dining</span>
                      <span className="text-sm text-on-surface">2.5k Rations</span>
                    </div>
                  </td>
                  <td className="py-5">
                    <div className="text-xs">
                      <p className="font-bold text-on-surface">Chittagong Hub</p>
                      <p className="text-on-surface-variant">→ Cox's Bazar</p>
                    </div>
                  </td>
                  <td className="py-5">
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-bold text-primary">ARRIVED</span>
                      <span className="text-[9px] font-black bg-slate-200 text-slate-600 px-2 py-0.5 rounded-full uppercase tracking-tighter">Completed</span>
                    </div>
                  </td>
                  <td className="py-5">
                    <span className="material-symbols-outlined text-on-surface-variant">local_shipping</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
}
