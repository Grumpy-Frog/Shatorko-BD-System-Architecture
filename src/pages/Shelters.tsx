import React from 'react';

export default function Shelters() {
  return (
    <main className="bg-surface-container-low flex flex-col md:flex-row min-h-[calc(100vh-64px)]">
      <div className="flex-1 p-8 space-y-8">
        {/* Dashboard Stats Grid */}
        <section className="grid grid-cols-1 md:grid-cols-4 gap-7 mb-8">
          <div className="bg-surface-container-lowest p-6 rounded-lg shadow-sm border-l-4 border-primary">
            <p className="text-xs font-bold text-outline uppercase tracking-wider mb-1">Total Shelters Online</p>
            <div className="flex items-end justify-between">
              <h3 className="text-3xl font-headline font-extrabold text-primary tracking-tighter">1,284</h3>
              <span className="text-xs font-bold text-primary bg-primary-fixed px-2 py-1 rounded">98.2% UP</span>
            </div>
          </div>
          <div className="bg-surface-container-lowest p-6 rounded-lg shadow-sm border-l-4 border-secondary">
            <p className="text-xs font-bold text-outline uppercase tracking-wider mb-1">Current Occupancy %</p>
            <div className="flex items-end justify-between">
              <h3 className="text-3xl font-headline font-extrabold text-secondary tracking-tighter">64.5%</h3>
              <div className="w-24 bg-surface-container rounded-full h-1.5 mb-2">
                <div className="bg-secondary h-1.5 rounded-full" style={{ width: '64%' }}></div>
              </div>
            </div>
          </div>
          <div className="bg-surface-container-lowest p-6 rounded-lg shadow-sm border-l-4 border-primary-container">
            <p className="text-xs font-bold text-outline uppercase tracking-wider mb-1">Total Resource Health</p>
            <div className="flex items-end justify-between">
              <h3 className="text-3xl font-headline font-extrabold text-primary-container tracking-tighter">OPTIMAL</h3>
              <span className="material-symbols-outlined text-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
            </div>
          </div>
          <div className="bg-surface-container-lowest p-6 rounded-lg shadow-sm border-l-4 border-tertiary">
            <p className="text-xs font-bold text-outline uppercase tracking-wider mb-1">Active Evacuation Routes</p>
            <div className="flex items-end justify-between">
              <h3 className="text-3xl font-headline font-extrabold text-tertiary tracking-tighter">14</h3>
              <span className="text-xs font-bold text-tertiary bg-tertiary-fixed px-2 py-1 rounded">3 BLOCKED</span>
            </div>
          </div>
        </section>

        {/* Map & Routing Panel Layer */}
        <div className="grid grid-cols-12 gap-7 mb-8 h-[600px]">
          {/* Interactive Shelter Map */}
          <div className="col-span-12 lg:col-span-8 relative rounded-lg overflow-hidden shadow-2xl bg-surface-container">
            <img className="w-full h-full object-cover grayscale opacity-40 mix-blend-multiply" data-alt="detailed top-down satellite view of a river delta region with digital map overlays showing evacuation nodes and highlighted disaster risk zones" data-location="Dhaka, Bangladesh" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsPy-l6lN6npz-vVn6MrlxCb4spocd9_DG_mF2oV34VPfqfJC9SToOcqzt6PRUC1fSunIu6xXjmsEXzppZ7kNsIyS-2lBrW9qZ6hYH8e7_3iWmXn5ux03Ol58XVaE6YOmU272zDkO5v8iUZpo_phgfRCSBH_YXWS1NIdxZ1XhUfbZGR_MW97YiNQtNaD8PSsG4ebaFbcy58TK-86FP5qZnZ9wiLlm08sZvpfJJO7NoXV2rZK8GBl-33dLcxIcrKkRL2SuafrffCp0m" />
            
            {/* Map UI Elements */}
            <div className="absolute inset-0 p-6 pointer-events-none flex flex-col justify-between">
              <div className="flex justify-between items-start pointer-events-auto">
                <div className="glass-panel p-4 rounded-lg shadow-lg">
                  <h4 className="font-headline font-bold text-primary mb-2 flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm">filter_alt</span>
                    ACTIVE LAYERS
                  </h4>
                  <div className="flex gap-2">
                    <span className="bg-secondary/10 text-secondary text-[10px] font-bold px-2 py-1 rounded border border-secondary/20">FLOOD SURGE</span>
                    <span className="bg-primary/10 text-primary text-[10px] font-bold px-2 py-1 rounded border border-primary/20">SHELTER NODES</span>
                    <span className="bg-tertiary/10 text-tertiary text-[10px] font-bold px-2 py-1 rounded border border-tertiary/20">BLOCKED ROADS</span>
                  </div>
                </div>
                <div className="flex flex-col gap-2 pointer-events-auto">
                  <button className="bg-surface-container-lowest p-2 rounded shadow hover:bg-surface transition-colors">
                    <span className="material-symbols-outlined">add</span>
                  </button>
                  <button className="bg-surface-container-lowest p-2 rounded shadow hover:bg-surface transition-colors">
                    <span className="material-symbols-outlined">remove</span>
                  </button>
                  <button className="bg-surface-container-lowest p-2 rounded shadow hover:bg-surface transition-colors">
                    <span className="material-symbols-outlined">my_location</span>
                  </button>
                </div>
              </div>
              <div className="flex justify-center pointer-events-auto">
                <div className="glass-panel px-6 py-3 rounded-full shadow-xl flex items-center gap-8 border border-white/20">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Low Occupancy</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Near Capacity</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-600"></div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Full / Critical</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Simulated Map Markers */}
            <div className="absolute top-1/4 left-1/3 pointer-events-auto group cursor-pointer">
              <div className="relative">
                <div className="absolute -inset-2 bg-amber-500/20 rounded-full animate-ping"></div>
                <div className="w-6 h-6 bg-amber-500 rounded-full border-2 border-white flex items-center justify-center shadow-lg">
                  <span className="material-symbols-outlined text-white text-[14px]">school</span>
                </div>
                <div className="absolute top-8 left-1/2 -translate-x-1/2 whitespace-nowrap glass-panel px-3 py-1 rounded text-[10px] font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                  Hatiya Model School (82%)
                </div>
              </div>
            </div>
          </div>

          {/* Dynamic Routing Panel */}
          <div className="col-span-12 lg:col-span-4 bg-surface-container-low rounded-lg p-6 overflow-hidden flex flex-col shadow-inner">
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-headline text-lg font-bold tracking-tight text-primary">Dynamic Routing</h2>
              <span className="bg-primary-fixed text-on-primary-fixed text-[10px] font-extrabold px-2 py-1 rounded">AI OPTIMIZED</span>
            </div>
            <div className="space-y-4 overflow-y-auto custom-scrollbar flex-1 pr-2">
              {/* Route Item */}
              <div className="bg-surface-container-lowest p-4 rounded-lg shadow-sm border-l-4 border-emerald-500">
                <div className="flex justify-between mb-2">
                  <p className="text-xs font-bold uppercase text-slate-400">Route R-104</p>
                  <span className="text-[10px] font-bold text-emerald-600 flex items-center gap-1">
                    <span className="material-symbols-outlined text-[12px]">check_circle</span> OPEN
                  </span>
                </div>
                <p className="text-sm font-bold text-on-surface mb-1">Noakhali - Sonapur Hwy</p>
                <p className="text-[11px] text-on-surface-variant mb-3">Clearance: High | Expected Transit: 22m</p>
                <div className="flex justify-between items-center">
                  <div className="flex -space-x-2">
                    <div className="w-6 h-6 rounded-full bg-slate-200 border-2 border-surface-container-lowest flex items-center justify-center text-[10px]">🚗</div>
                    <div className="w-6 h-6 rounded-full bg-slate-200 border-2 border-surface-container-lowest flex items-center justify-center text-[10px]">🚒</div>
                  </div>
                  <button className="text-primary text-[11px] font-bold hover:underline">Details</button>
                </div>
              </div>

              {/* Blocked Route */}
              <div className="bg-surface-container-lowest p-4 rounded-lg shadow-sm border-l-4 border-tertiary">
                <div className="flex justify-between mb-2">
                  <p className="text-xs font-bold uppercase text-slate-400">Route A-02</p>
                  <span className="text-[10px] font-bold text-tertiary flex items-center gap-1">
                    <span className="material-symbols-outlined text-[12px]">block</span> BLOCKED
                  </span>
                </div>
                <p className="text-sm font-bold text-on-surface mb-1">Sandwip Coastal Path</p>
                <p className="text-[11px] text-on-surface-variant mb-3">Reason: 1.4m Water Inundation</p>
                <div className="bg-tertiary-fixed p-2 rounded mb-3">
                  <p className="text-[10px] font-bold text-on-tertiary-fixed-variant flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm">alt_route</span>
                    SUGGESTED: Divert to Bypass B-01
                  </p>
                </div>
                <button className="w-full py-2 bg-primary text-white text-[11px] font-bold rounded hover:bg-primary-container transition-colors uppercase tracking-widest">
                  Reroute Traffic
                </button>
              </div>

              {/* Alternate Route */}
              <div className="bg-surface-container-lowest p-4 rounded-lg shadow-sm border-l-4 border-secondary">
                <div className="flex justify-between mb-2">
                  <p className="text-xs font-bold uppercase text-slate-400">Route B-01 (Bypass)</p>
                  <span className="text-[10px] font-bold text-secondary flex items-center gap-1">
                    <span className="material-symbols-outlined text-[12px]">info</span> SLOW TRAFFIC
                  </span>
                </div>
                <p className="text-sm font-bold text-on-surface mb-1">Subarnachar Interior Link</p>
                <p className="text-[11px] text-on-surface-variant mb-3">Volume: High | Expected Transit: 54m</p>
                <div className="flex justify-end">
                  <button className="text-secondary text-[11px] font-bold hover:underline">Monitor Flow</button>
                </div>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-outline-variant/30 grid grid-cols-2 gap-3">
              <button className="flex flex-col items-center justify-center p-3 bg-surface-container-high rounded-lg hover:bg-surface-variant transition-colors group">
                <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform mb-1">refresh</span>
                <span className="text-[10px] font-bold uppercase text-on-surface-variant">Update Nodes</span>
              </button>
              <button className="flex flex-col items-center justify-center p-3 bg-surface-container-high rounded-lg hover:bg-surface-variant transition-colors group">
                <span className="material-symbols-outlined text-tertiary group-hover:scale-110 transition-transform mb-1">emergency_home</span>
                <span className="text-[10px] font-bold uppercase text-on-surface-variant">Manual Override</span>
              </button>
            </div>
          </div>
        </div>

        {/* Shelter Directory Table Section */}
        <section className="bg-surface-container-lowest rounded-lg shadow-sm p-7">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-7">
            <div>
              <h2 className="font-headline text-xl font-extrabold text-primary tracking-tight">Shelter Directory</h2>
              <p className="text-sm text-on-surface-variant">Real-time capacity and resource monitoring for 14 active sectors.</p>
            </div>
            <div className="flex gap-3 w-full md:w-auto">
              <div className="relative flex-1 md:w-64">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-lg">search</span>
                <input className="w-full pl-10 pr-4 py-2 bg-surface-container-low border-none rounded-lg text-sm focus:ring-2 focus:ring-primary/40 focus:bg-surface transition-all" placeholder="Search by name or ID..." type="text" />
              </div>
              <button className="flex items-center gap-2 px-4 py-2 bg-primary-fixed text-on-primary-fixed font-bold text-sm rounded-lg hover:bg-primary-fixed-dim transition-colors">
                <span className="material-symbols-outlined text-lg">download</span>
                Export Report
              </button>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full border-separate border-spacing-y-3">
              <thead>
                <tr className="text-left text-[11px] font-bold text-outline uppercase tracking-[0.1em]">
                  <th className="px-4 pb-2">Shelter Name & ID</th>
                  <th className="px-4 pb-2">Type</th>
                  <th className="px-4 pb-2">Occupancy Status</th>
                  <th className="px-4 pb-2">Resource Status</th>
                  <th className="px-4 pb-2">Connectivity</th>
                  <th className="px-4 pb-2 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {/* Table Row 1 */}
                <tr className="group hover:bg-surface-container-low transition-colors">
                  <td className="bg-surface-container-low px-4 py-4 rounded-l-lg border-l-4 border-primary">
                    <p className="font-bold text-on-surface">Sona Gazi Cyclone Shelter</p>
                    <p className="text-[10px] text-outline font-medium tracking-wider">ID: SG-290-A</p>
                  </td>
                  <td className="bg-surface-container-low px-4 py-4">
                    <span className="bg-surface-variant text-on-surface-variant text-[10px] font-bold px-2 py-1 rounded">DEDICATED</span>
                  </td>
                  <td className="bg-surface-container-low px-4 py-4">
                    <div className="w-32">
                      <div className="flex justify-between text-[10px] font-bold mb-1">
                        <span className="text-emerald-600">340 / 800</span>
                        <span className="text-outline">42%</span>
                      </div>
                      <div className="w-full bg-surface-variant h-1.5 rounded-full">
                        <div className="bg-emerald-500 h-1.5 rounded-full" style={{ width: '42%' }}></div>
                      </div>
                    </div>
                  </td>
                  <td className="bg-surface-container-low px-4 py-4">
                    <div className="flex gap-2">
                      <span className="material-symbols-outlined text-emerald-600 text-lg" style={{ fontVariationSettings: "'FILL' 1" }} title="Food">restaurant</span>
                      <span className="material-symbols-outlined text-emerald-600 text-lg" style={{ fontVariationSettings: "'FILL' 1" }} title="Water">water_drop</span>
                      <span className="material-symbols-outlined text-emerald-600 text-lg" style={{ fontVariationSettings: "'FILL' 1" }} title="Medical">medical_services</span>
                    </div>
                  </td>
                  <td className="bg-surface-container-low px-4 py-4">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                      <span className="text-[11px] font-bold text-on-surface-variant">Live (2s)</span>
                    </div>
                  </td>
                  <td className="bg-surface-container-low px-4 py-4 rounded-r-lg text-right">
                    <button className="p-2 text-primary hover:bg-primary/10 rounded transition-colors">
                      <span className="material-symbols-outlined">edit_square</span>
                    </button>
                  </td>
                </tr>
                {/* Table Row 2 */}
                <tr className="group hover:bg-surface-container-low transition-colors">
                  <td className="bg-surface-container-low px-4 py-4 rounded-l-lg border-l-4 border-amber-500">
                    <p className="font-bold text-on-surface">Char Jabbar Primary School</p>
                    <p className="text-[10px] text-outline font-medium tracking-wider">ID: CJ-012-P</p>
                  </td>
                  <td className="bg-surface-container-low px-4 py-4">
                    <span className="bg-surface-variant text-on-surface-variant text-[10px] font-bold px-2 py-1 rounded">SCHOOL</span>
                  </td>
                  <td className="bg-surface-container-low px-4 py-4">
                    <div className="w-32">
                      <div className="flex justify-between text-[10px] font-bold mb-1">
                        <span className="text-amber-600">445 / 500</span>
                        <span className="text-outline">89%</span>
                      </div>
                      <div className="w-full bg-surface-variant h-1.5 rounded-full">
                        <div className="bg-amber-500 h-1.5 rounded-full" style={{ width: '89%' }}></div>
                      </div>
                    </div>
                  </td>
                  <td className="bg-surface-container-low px-4 py-4">
                    <div className="flex gap-2">
                      <span className="material-symbols-outlined text-emerald-600 text-lg" style={{ fontVariationSettings: "'FILL' 1" }} title="Food">restaurant</span>
                      <span className="material-symbols-outlined text-amber-500 text-lg" style={{ fontVariationSettings: "'FILL' 1" }} title="Water">water_drop</span>
                      <span className="material-symbols-outlined text-emerald-600 text-lg" style={{ fontVariationSettings: "'FILL' 1" }} title="Medical">medical_services</span>
                    </div>
                  </td>
                  <td className="bg-surface-container-low px-4 py-4">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                      <span className="text-[11px] font-bold text-on-surface-variant">Live (5s)</span>
                    </div>
                  </td>
                  <td className="bg-surface-container-low px-4 py-4 rounded-r-lg text-right">
                    <button className="p-2 text-primary hover:bg-primary/10 rounded transition-colors">
                      <span className="material-symbols-outlined">edit_square</span>
                    </button>
                  </td>
                </tr>
                {/* Table Row 3 */}
                <tr className="group hover:bg-surface-container-low transition-colors">
                  <td className="bg-surface-container-low px-4 py-4 rounded-l-lg border-l-4 border-rose-600">
                    <p className="font-bold text-on-surface">Jame Masjid Shelter Hub</p>
                    <p className="text-[10px] text-outline font-medium tracking-wider">ID: JM-55-H</p>
                  </td>
                  <td className="bg-surface-container-low px-4 py-4">
                    <span className="bg-surface-variant text-on-surface-variant text-[10px] font-bold px-2 py-1 rounded">MOSQUE</span>
                  </td>
                  <td className="bg-surface-container-low px-4 py-4">
                    <div className="w-32">
                      <div className="flex justify-between text-[10px] font-bold mb-1">
                        <span className="text-rose-600">302 / 300</span>
                        <span className="text-rose-700 font-extrabold">100%+</span>
                      </div>
                      <div className="w-full bg-surface-variant h-1.5 rounded-full overflow-hidden">
                        <div className="bg-rose-600 h-1.5 rounded-full" style={{ width: '100%' }}></div>
                      </div>
                    </div>
                  </td>
                  <td className="bg-surface-container-low px-4 py-4">
                    <div className="flex gap-2">
                      <span className="material-symbols-outlined text-tertiary text-lg" style={{ fontVariationSettings: "'FILL' 1" }} title="Food">restaurant</span>
                      <span className="material-symbols-outlined text-tertiary text-lg" style={{ fontVariationSettings: "'FILL' 1" }} title="Water">water_drop</span>
                      <span className="material-symbols-outlined text-amber-500 text-lg" style={{ fontVariationSettings: "'FILL' 1" }} title="Medical">medical_services</span>
                    </div>
                  </td>
                  <td className="bg-surface-container-low px-4 py-4">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-rose-600"></div>
                      <span className="text-[11px] font-bold text-rose-600">Delayed (2m)</span>
                    </div>
                  </td>
                  <td className="bg-surface-container-low px-4 py-4 rounded-r-lg text-right">
                    <button className="p-2 text-primary hover:bg-primary/10 rounded transition-colors">
                      <span className="material-symbols-outlined">edit_square</span>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="mt-6 pt-6 border-t border-outline-variant/30 flex justify-center">
            <nav className="flex gap-2">
              <button className="p-2 rounded hover:bg-surface-container transition-colors"><span className="material-symbols-outlined">chevron_left</span></button>
              <button className="px-4 py-2 bg-primary text-white font-bold text-sm rounded">1</button>
              <button className="px-4 py-2 hover:bg-surface-container text-on-surface-variant font-bold text-sm rounded transition-colors">2</button>
              <button className="px-4 py-2 hover:bg-surface-container text-on-surface-variant font-bold text-sm rounded transition-colors">3</button>
              <button className="p-2 rounded hover:bg-surface-container transition-colors"><span className="material-symbols-outlined">chevron_right</span></button>
            </nav>
          </div>
        </section>
      </div>
    </main>
  );
}
