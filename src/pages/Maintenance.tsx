import React from 'react';

export default function Maintenance() {
  return (
    <main className="p-4 md:p-8 min-h-[calc(100vh-64px)] bg-surface">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-8">
          <div className="space-y-2">
            <span className="text-[0.75rem] font-bold tracking-[0.05em] uppercase text-tertiary">Hardware Operations</span>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-on-surface font-headline">Field Service Command</h1>
            <p className="text-on-surface-variant max-w-2xl">Dispatch technicians, track repair tickets, and monitor the maintenance status of early warning hardware.</p>
          </div>
          <div className="flex gap-3">
            <button className="px-6 py-2.5 bg-surface-container-high text-on-surface font-semibold rounded-md hover:bg-surface-container-highest transition-all flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">inventory_2</span>
              Parts Inventory
            </button>
            <button className="px-6 py-2.5 bg-tertiary text-on-tertiary font-semibold rounded-md shadow-lg shadow-tertiary/20 hover:opacity-90 transition-all flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">build</span>
              New Work Order
            </button>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-surface-container-low p-5 rounded-xl border-l-4 border-error">
            <p className="text-[0.65rem] font-bold uppercase tracking-wider text-outline mb-1">Critical Failures</p>
            <p className="text-3xl font-black text-error">8</p>
          </div>
          <div className="bg-surface-container-low p-5 rounded-xl border-l-4 border-tertiary">
            <p className="text-[0.65rem] font-bold uppercase tracking-wider text-outline mb-1">Active Work Orders</p>
            <p className="text-3xl font-black text-on-surface">34</p>
          </div>
          <div className="bg-surface-container-low p-5 rounded-xl border-l-4 border-secondary">
            <p className="text-[0.65rem] font-bold uppercase tracking-wider text-outline mb-1">Technicians Deployed</p>
            <p className="text-3xl font-black text-on-surface">12</p>
          </div>
          <div className="bg-surface-container-low p-5 rounded-xl border-l-4 border-primary">
            <p className="text-[0.65rem] font-bold uppercase tracking-wider text-outline mb-1">Repaired (7 Days)</p>
            <p className="text-3xl font-black text-on-surface">45</p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column: Work Orders */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-outline-variant/20">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold flex items-center gap-2">
                  <span className="material-symbols-outlined text-tertiary">handyman</span>
                  Active Work Orders
                </h3>
                <div className="flex gap-2">
                  <button className="px-3 py-1 bg-surface-container text-xs font-bold rounded">All</button>
                  <button className="px-3 py-1 bg-tertiary text-on-tertiary text-xs font-bold rounded">Critical</button>
                </div>
              </div>

              <div className="space-y-4">
                {/* Work Order Item */}
                <div className="p-4 bg-surface-container-low rounded-lg border-l-4 border-error flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-bold bg-error-container text-on-error-container px-2 py-0.5 rounded">Critical</span>
                      <span className="text-xs text-on-surface-variant font-mono">WO-9942</span>
                    </div>
                    <p className="text-sm font-bold text-on-surface">Relay Node Offline - Satkhira Coast</p>
                    <p className="text-xs text-on-surface-variant mt-1">Suspected solar panel damage. Node unresponsive for 12 hours.</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className="text-[0.65rem] font-bold uppercase tracking-wider text-outline">Assigned Tech</p>
                      <p className="text-sm font-semibold">Rahim U. (T-04)</p>
                    </div>
                    <button className="p-2 bg-surface-container-highest rounded-full hover:bg-tertiary hover:text-on-tertiary transition-colors">
                      <span className="material-symbols-outlined text-sm">chevron_right</span>
                    </button>
                  </div>
                </div>

                {/* Work Order Item */}
                <div className="p-4 bg-surface-container-low rounded-lg border-l-4 border-tertiary flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-bold bg-tertiary-container text-on-tertiary-container px-2 py-0.5 rounded">High</span>
                      <span className="text-xs text-on-surface-variant font-mono">WO-9941</span>
                    </div>
                    <p className="text-sm font-bold text-on-surface">Siren Array Malfunction - Khulna City</p>
                    <p className="text-xs text-on-surface-variant mt-1">Speaker unit 3 failing diagnostic test. Requires physical inspection.</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className="text-[0.65rem] font-bold uppercase tracking-wider text-outline">Assigned Tech</p>
                      <p className="text-sm font-semibold text-error">Unassigned</p>
                    </div>
                    <button className="px-3 py-1.5 bg-tertiary text-on-tertiary text-xs font-bold rounded hover:bg-tertiary/90 transition-colors">
                      Dispatch
                    </button>
                  </div>
                </div>

                {/* Work Order Item */}
                <div className="p-4 bg-surface-container-low rounded-lg border-l-4 border-secondary flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-bold bg-secondary-container text-on-secondary-container px-2 py-0.5 rounded">Medium</span>
                      <span className="text-xs text-on-surface-variant font-mono">WO-9940</span>
                    </div>
                    <p className="text-sm font-bold text-on-surface">Battery Replacement - Bagerhat Hub</p>
                    <p className="text-xs text-on-surface-variant mt-1">Routine maintenance. Battery capacity below 60% threshold.</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className="text-[0.65rem] font-bold uppercase tracking-wider text-outline">Assigned Tech</p>
                      <p className="text-sm font-semibold">Kamal H. (T-12)</p>
                    </div>
                    <button className="p-2 bg-surface-container-highest rounded-full hover:bg-tertiary hover:text-on-tertiary transition-colors">
                      <span className="material-symbols-outlined text-sm">chevron_right</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Tech Status & Inventory */}
          <div className="space-y-6">
            {/* Technician Status */}
            <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-outline-variant/20">
              <h3 className="text-sm font-bold uppercase tracking-wider text-outline mb-4">Technician Status</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-surface-container-low rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-surface-container-highest rounded-full flex items-center justify-center">
                      <span className="material-symbols-outlined text-sm text-on-surface-variant">person</span>
                    </div>
                    <div>
                      <p className="text-sm font-bold">Rahim U.</p>
                      <p className="text-[0.65rem] text-on-surface-variant">Khulna Sector</p>
                    </div>
                  </div>
                  <span className="px-2 py-1 bg-error-container text-on-error-container text-[0.6rem] font-black rounded uppercase">En Route</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-surface-container-low rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-surface-container-highest rounded-full flex items-center justify-center">
                      <span className="material-symbols-outlined text-sm text-on-surface-variant">person</span>
                    </div>
                    <div>
                      <p className="text-sm font-bold">Kamal H.</p>
                      <p className="text-[0.65rem] text-on-surface-variant">Bagerhat Sector</p>
                    </div>
                  </div>
                  <span className="px-2 py-1 bg-tertiary-container text-on-tertiary-container text-[0.6rem] font-black rounded uppercase">Working</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-surface-container-low rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-surface-container-highest rounded-full flex items-center justify-center">
                      <span className="material-symbols-outlined text-sm text-on-surface-variant">person</span>
                    </div>
                    <div>
                      <p className="text-sm font-bold">Selim R.</p>
                      <p className="text-[0.65rem] text-on-surface-variant">Satkhira Sector</p>
                    </div>
                  </div>
                  <span className="px-2 py-1 bg-surface-container-highest text-on-surface-variant text-[0.6rem] font-black rounded uppercase">Available</span>
                </div>
              </div>
            </div>

            {/* Critical Parts Inventory */}
            <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-outline-variant/20">
              <h3 className="text-sm font-bold uppercase tracking-wider text-outline mb-4">Critical Parts Stock</h3>
              <ul className="space-y-3">
                <li className="flex items-center justify-between">
                  <span className="text-sm font-medium">12V Solar Batteries</span>
                  <span className="text-xs font-bold text-error">Low (4)</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-sm font-medium">LoRa Gateway Antennas</span>
                  <span className="text-xs font-bold text-on-surface">OK (15)</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-sm font-medium">Siren Horn Units</span>
                  <span className="text-xs font-bold text-on-surface">OK (22)</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-sm font-medium">Control Board (Rev B)</span>
                  <span className="text-xs font-bold text-tertiary">Warning (8)</span>
                </li>
              </ul>
              <button className="w-full mt-4 py-2 border border-outline-variant/30 text-xs font-bold uppercase tracking-widest rounded hover:bg-surface-container-high transition-colors">Request Restock</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
