import React from 'react';

export default function Impact() {
  return (
    <main className="p-4 md:p-8 min-h-[calc(100vh-64px)] bg-surface">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-8">
          <div className="space-y-2">
            <span className="text-[0.75rem] font-bold tracking-[0.05em] uppercase text-error">Critical Assessment</span>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-on-surface font-headline">Impact Control</h1>
            <p className="text-on-surface-variant max-w-2xl">Real-time damage assessment, casualty tracking, and immediate response coordination for ongoing crisis events.</p>
          </div>
          <div className="flex gap-3">
            <button className="px-6 py-2.5 bg-surface-container-high text-on-surface font-semibold rounded-md hover:bg-surface-container-highest transition-all flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">filter_list</span>
              Filter Event
            </button>
            <button className="px-6 py-2.5 bg-error text-on-error font-semibold rounded-md shadow-lg shadow-error/20 hover:opacity-90 transition-all flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">add_alert</span>
              Declare Emergency
            </button>
          </div>
        </div>

        {/* Active Event Banner */}
        <div className="bg-error-container text-on-error-container p-6 rounded-xl mb-8 border border-error/20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-error text-on-error rounded-full flex items-center justify-center animate-pulse">
              <span className="material-symbols-outlined text-3xl">cyclone</span>
            </div>
            <div>
              <h2 className="text-2xl font-bold">Cyclone Remal (Category 3)</h2>
              <p className="text-sm opacity-90 font-medium">Landfall: 4 hours ago | Current Status: Active Assessment</p>
            </div>
          </div>
          <div className="flex gap-4 text-center">
            <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg">
              <p className="text-[0.65rem] uppercase font-bold tracking-wider opacity-80">Affected Districts</p>
              <p className="text-3xl font-black">14</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg">
              <p className="text-[0.65rem] uppercase font-bold tracking-wider opacity-80">Est. Population</p>
              <p className="text-3xl font-black">2.4M</p>
            </div>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column: Metrics & Reports */}
          <div className="lg:col-span-2 space-y-6">
            {/* Key Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="bg-surface-container-low p-5 rounded-xl border-l-4 border-error">
                <p className="text-[0.65rem] font-bold uppercase tracking-wider text-outline mb-1">Casualties (Est.)</p>
                <div className="flex items-end gap-2">
                  <p className="text-3xl font-black text-on-surface">12</p>
                  <p className="text-xs text-error font-bold mb-1 flex items-center"><span className="material-symbols-outlined text-[10px]">arrow_upward</span> 3</p>
                </div>
              </div>
              <div className="bg-surface-container-low p-5 rounded-xl border-l-4 border-tertiary">
                <p className="text-[0.65rem] font-bold uppercase tracking-wider text-outline mb-1">Injured</p>
                <div className="flex items-end gap-2">
                  <p className="text-3xl font-black text-on-surface">450+</p>
                </div>
              </div>
              <div className="bg-surface-container-low p-5 rounded-xl border-l-4 border-secondary">
                <p className="text-[0.65rem] font-bold uppercase tracking-wider text-outline mb-1">Displaced</p>
                <div className="flex items-end gap-2">
                  <p className="text-3xl font-black text-on-surface">125K</p>
                </div>
              </div>
              <div className="bg-surface-container-low p-5 rounded-xl border-l-4 border-primary">
                <p className="text-[0.65rem] font-bold uppercase tracking-wider text-outline mb-1">Rescued</p>
                <div className="flex items-end gap-2">
                  <p className="text-3xl font-black text-on-surface">3,200</p>
                </div>
              </div>
            </div>

            {/* Damage Assessment Map/Chart Placeholder */}
            <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-outline-variant/20 h-96 flex flex-col">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary">analytics</span>
                  Infrastructure Damage Spread
                </h3>
                <div className="flex gap-2">
                  <button className="px-3 py-1 bg-surface-container text-xs font-bold rounded">Map View</button>
                  <button className="px-3 py-1 bg-primary text-on-primary text-xs font-bold rounded">Chart View</button>
                </div>
              </div>
              <div className="flex-1 bg-surface-container-highest/30 rounded-lg border border-dashed border-outline-variant flex items-center justify-center relative overflow-hidden">
                {/* Simulated Chart Bars */}
                <div className="absolute bottom-0 left-10 w-16 bg-error/80 rounded-t-md" style={{ height: '70%' }}></div>
                <div className="absolute bottom-0 left-32 w-16 bg-error/60 rounded-t-md" style={{ height: '45%' }}></div>
                <div className="absolute bottom-0 left-54 w-16 bg-tertiary/80 rounded-t-md" style={{ height: '85%' }}></div>
                <div className="absolute bottom-0 left-76 w-16 bg-secondary/80 rounded-t-md" style={{ height: '30%' }}></div>
                <div className="absolute bottom-0 right-32 w-16 bg-error/90 rounded-t-md" style={{ height: '90%' }}></div>
                <div className="absolute bottom-0 right-10 w-16 bg-primary/80 rounded-t-md" style={{ height: '20%' }}></div>
                
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <p className="text-on-surface-variant font-medium bg-surface/80 px-4 py-2 rounded-full backdrop-blur-sm">Interactive Damage Visualization</p>
                </div>
              </div>
            </div>

            {/* Field Reports Feed */}
            <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-outline-variant/20">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">feed</span>
                  Live Field Reports
                </h3>
                <button className="text-xs font-bold text-primary uppercase tracking-widest">View All</button>
              </div>
              <div className="space-y-4">
                {/* Report Item */}
                <div className="p-4 bg-surface-container-low rounded-lg border-l-2 border-error flex gap-4">
                  <div className="mt-1">
                    <span className="material-symbols-outlined text-error">warning</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-bold bg-error-container text-on-error-container px-2 py-0.5 rounded">Critical</span>
                      <span className="text-xs text-on-surface-variant font-mono">10 mins ago</span>
                      <span className="text-xs text-on-surface-variant">• Khulna Sadar</span>
                    </div>
                    <p className="text-sm font-semibold text-on-surface">Embankment breach reported at point K-45.</p>
                    <p className="text-xs text-on-surface-variant mt-1">Immediate evacuation of adjacent villages required. Water level rising rapidly.</p>
                  </div>
                </div>
                {/* Report Item */}
                <div className="p-4 bg-surface-container-low rounded-lg border-l-2 border-tertiary flex gap-4">
                  <div className="mt-1">
                    <span className="material-symbols-outlined text-tertiary">power_off</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-bold bg-tertiary-container text-on-tertiary-container px-2 py-0.5 rounded">High</span>
                      <span className="text-xs text-on-surface-variant font-mono">25 mins ago</span>
                      <span className="text-xs text-on-surface-variant">• Satkhira</span>
                    </div>
                    <p className="text-sm font-semibold text-on-surface">Total grid failure in Shyamnagar Upazila.</p>
                    <p className="text-xs text-on-surface-variant mt-1">Backup generators at 3 main shelters are operational. Fuel supply estimated for 48 hours.</p>
                  </div>
                </div>
                {/* Report Item */}
                <div className="p-4 bg-surface-container-low rounded-lg border-l-2 border-secondary flex gap-4">
                  <div className="mt-1">
                    <span className="material-symbols-outlined text-secondary">local_shipping</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-bold bg-secondary-container text-on-secondary-container px-2 py-0.5 rounded">Medium</span>
                      <span className="text-xs text-on-surface-variant font-mono">1 hour ago</span>
                      <span className="text-xs text-on-surface-variant">• Bagerhat</span>
                    </div>
                    <p className="text-sm font-semibold text-on-surface">Relief convoy delayed due to fallen trees on N7.</p>
                    <p className="text-xs text-on-surface-variant mt-1">Engineering corps dispatched for road clearance. Expected delay: 3 hours.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Actions & Status */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <div className="bg-surface-container-low rounded-xl p-6">
              <h3 className="text-sm font-bold uppercase tracking-wider text-outline mb-4">Command Actions</h3>
              <div className="space-y-3">
                <button className="w-full py-3 px-4 bg-error text-on-error font-bold rounded-lg flex items-center justify-between hover:bg-error/90 transition-colors">
                  <span className="flex items-center gap-2"><span className="material-symbols-outlined">campaign</span> Broadcast Evacuation</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
                <button className="w-full py-3 px-4 bg-primary text-on-primary font-bold rounded-lg flex items-center justify-between hover:bg-primary/90 transition-colors">
                  <span className="flex items-center gap-2"><span className="material-symbols-outlined">medical_services</span> Dispatch Medical Team</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
                <button className="w-full py-3 px-4 bg-surface-container-high text-on-surface font-bold rounded-lg flex items-center justify-between hover:bg-surface-container-highest transition-colors">
                  <span className="flex items-center gap-2"><span className="material-symbols-outlined">support_agent</span> Request Military Aid</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>
            </div>

            {/* Sector Status */}
            <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-outline-variant/20">
              <h3 className="text-sm font-bold uppercase tracking-wider text-outline mb-4">Sector Status</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-semibold flex items-center gap-1"><span className="material-symbols-outlined text-[14px] text-error">cell_tower</span> Communications</span>
                    <span className="text-error font-bold">45% Down</span>
                  </div>
                  <div className="w-full bg-surface-container-highest rounded-full h-2">
                    <div className="bg-error h-2 rounded-full" style={{ width: '55%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-semibold flex items-center gap-1"><span className="material-symbols-outlined text-[14px] text-tertiary">power</span> Power Grid</span>
                    <span className="text-tertiary font-bold">60% Down</span>
                  </div>
                  <div className="w-full bg-surface-container-highest rounded-full h-2">
                    <div className="bg-tertiary h-2 rounded-full" style={{ width: '40%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-semibold flex items-center gap-1"><span className="material-symbols-outlined text-[14px] text-secondary">add_road</span> Transport Routes</span>
                    <span className="text-secondary font-bold">30% Blocked</span>
                  </div>
                  <div className="w-full bg-surface-container-highest rounded-full h-2">
                    <div className="bg-secondary h-2 rounded-full" style={{ width: '70%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-semibold flex items-center gap-1"><span className="material-symbols-outlined text-[14px] text-primary">local_hospital</span> Healthcare Facilities</span>
                    <span className="text-primary font-bold">85% Operational</span>
                  </div>
                  <div className="w-full bg-surface-container-highest rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Needs Assessment */}
            <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-outline-variant/20">
              <h3 className="text-sm font-bold uppercase tracking-wider text-outline mb-4">Critical Shortages</h3>
              <ul className="space-y-3">
                <li className="flex items-center justify-between">
                  <span className="text-sm font-medium flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-error"></div> Clean Water</span>
                  <span className="text-xs font-bold bg-error-container text-on-error-container px-2 py-0.5 rounded">Severe</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-sm font-medium flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-error"></div> Medical Supplies (Trauma)</span>
                  <span className="text-xs font-bold bg-error-container text-on-error-container px-2 py-0.5 rounded">Severe</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-sm font-medium flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-tertiary"></div> Dry Food</span>
                  <span className="text-xs font-bold bg-tertiary-container text-on-tertiary-container px-2 py-0.5 rounded">Moderate</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-sm font-medium flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-secondary"></div> Tents / Tarps</span>
                  <span className="text-xs font-bold bg-secondary-container text-on-secondary-container px-2 py-0.5 rounded">Low</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
