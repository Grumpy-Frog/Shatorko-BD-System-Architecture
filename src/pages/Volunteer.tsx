import React from 'react';

export default function Volunteer() {
  return (
    <main className="p-4 md:p-8 min-h-[calc(100vh-64px)] bg-surface">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-8">
          <div className="space-y-2">
            <span className="text-[0.75rem] font-bold tracking-[0.05em] uppercase text-primary">Community Action</span>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-on-surface font-headline">Volunteer Responder</h1>
            <p className="text-on-surface-variant max-w-2xl">Coordinate local volunteer networks, assign tasks, and track field operations during crisis events.</p>
          </div>
          <div className="flex gap-3">
            <button className="px-6 py-2.5 bg-surface-container-high text-on-surface font-semibold rounded-md hover:bg-surface-container-highest transition-all flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">group_add</span>
              Recruit
            </button>
            <button className="px-6 py-2.5 bg-primary text-on-primary font-semibold rounded-md shadow-lg shadow-primary/20 hover:opacity-90 transition-all flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">assignment_ind</span>
              Assign Task
            </button>
          </div>
        </div>

        {/* Summary Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-surface-container-low p-5 rounded-xl border-l-4 border-primary">
            <p className="text-[0.65rem] font-bold uppercase tracking-wider text-outline mb-1">Active Volunteers</p>
            <p className="text-3xl font-black text-on-surface">1,204</p>
          </div>
          <div className="bg-surface-container-low p-5 rounded-xl border-l-4 border-secondary">
            <p className="text-[0.65rem] font-bold uppercase tracking-wider text-outline mb-1">On Field Now</p>
            <p className="text-3xl font-black text-on-surface">345</p>
          </div>
          <div className="bg-surface-container-low p-5 rounded-xl border-l-4 border-tertiary">
            <p className="text-[0.65rem] font-bold uppercase tracking-wider text-outline mb-1">Tasks Completed</p>
            <p className="text-3xl font-black text-on-surface">8,920</p>
          </div>
          <div className="bg-surface-container-low p-5 rounded-xl border-l-4 border-error">
            <p className="text-[0.65rem] font-bold uppercase tracking-wider text-outline mb-1">Urgent Requests</p>
            <p className="text-3xl font-black text-error">12</p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column: Task Board */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-outline-variant/20">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">assignment</span>
                  Active Task Board
                </h3>
                <div className="flex gap-2">
                  <button className="px-3 py-1 bg-surface-container text-xs font-bold rounded">All</button>
                  <button className="px-3 py-1 bg-primary text-on-primary text-xs font-bold rounded">Urgent</button>
                  <button className="px-3 py-1 bg-surface-container text-xs font-bold rounded">Pending</button>
                </div>
              </div>

              <div className="space-y-4">
                {/* Task Item */}
                <div className="p-4 bg-surface-container-low rounded-lg border-l-4 border-error flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-bold bg-error-container text-on-error-container px-2 py-0.5 rounded">Urgent</span>
                      <span className="text-xs text-on-surface-variant font-mono">ID: TSK-409</span>
                    </div>
                    <p className="text-sm font-bold text-on-surface">Evacuation Assistance - Ward 4</p>
                    <p className="text-xs text-on-surface-variant mt-1">Assist elderly residents in moving to Shelter S-12.</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className="text-[0.65rem] font-bold uppercase tracking-wider text-outline">Assigned To</p>
                      <p className="text-sm font-semibold">Team Alpha (4)</p>
                    </div>
                    <button className="p-2 bg-surface-container-highest rounded-full hover:bg-primary hover:text-on-primary transition-colors">
                      <span className="material-symbols-outlined text-sm">chevron_right</span>
                    </button>
                  </div>
                </div>

                {/* Task Item */}
                <div className="p-4 bg-surface-container-low rounded-lg border-l-4 border-tertiary flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-bold bg-tertiary-container text-on-tertiary-container px-2 py-0.5 rounded">High</span>
                      <span className="text-xs text-on-surface-variant font-mono">ID: TSK-408</span>
                    </div>
                    <p className="text-sm font-bold text-on-surface">Relief Distribution - Point B</p>
                    <p className="text-xs text-on-surface-variant mt-1">Distribute dry food and water packets to 50 families.</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className="text-[0.65rem] font-bold uppercase tracking-wider text-outline">Assigned To</p>
                      <p className="text-sm font-semibold">Team Bravo (6)</p>
                    </div>
                    <button className="p-2 bg-surface-container-highest rounded-full hover:bg-primary hover:text-on-primary transition-colors">
                      <span className="material-symbols-outlined text-sm">chevron_right</span>
                    </button>
                  </div>
                </div>

                {/* Task Item */}
                <div className="p-4 bg-surface-container-low rounded-lg border-l-4 border-secondary flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-bold bg-secondary-container text-on-secondary-container px-2 py-0.5 rounded">Medium</span>
                      <span className="text-xs text-on-surface-variant font-mono">ID: TSK-407</span>
                    </div>
                    <p className="text-sm font-bold text-on-surface">First Aid Support - Clinic 2</p>
                    <p className="text-xs text-on-surface-variant mt-1">Provide basic first aid and triage support.</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className="text-[0.65rem] font-bold uppercase tracking-wider text-outline">Assigned To</p>
                      <p className="text-sm font-semibold text-error">Unassigned</p>
                    </div>
                    <button className="px-3 py-1.5 bg-primary text-on-primary text-xs font-bold rounded hover:bg-primary/90 transition-colors">
                      Assign
                    </button>
                  </div>
                </div>
              </div>
              <div className="mt-4 flex justify-center">
                <button className="text-xs font-bold text-on-surface-variant uppercase tracking-widest hover:text-primary transition-colors">View All Tasks</button>
              </div>
            </div>
          </div>

          {/* Right Column: Teams & Stats */}
          <div className="space-y-6">
            {/* Top Volunteer Teams */}
            <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-outline-variant/20">
              <h3 className="text-sm font-bold uppercase tracking-wider text-outline mb-4">Active Teams</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-surface-container-low rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary-container text-on-primary-container rounded-full flex items-center justify-center font-bold">A</div>
                    <div>
                      <p className="text-sm font-bold">Team Alpha</p>
                      <p className="text-xs text-on-surface-variant">4 Members • Khulna</p>
                    </div>
                  </div>
                  <span className="px-2 py-1 bg-primary-fixed text-on-primary-fixed-variant text-[0.6rem] font-black rounded uppercase">On Task</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-surface-container-low rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-secondary-container text-on-secondary-container rounded-full flex items-center justify-center font-bold">B</div>
                    <div>
                      <p className="text-sm font-bold">Team Bravo</p>
                      <p className="text-xs text-on-surface-variant">6 Members • Satkhira</p>
                    </div>
                  </div>
                  <span className="px-2 py-1 bg-primary-fixed text-on-primary-fixed-variant text-[0.6rem] font-black rounded uppercase">On Task</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-surface-container-low rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-tertiary-container text-on-tertiary-container rounded-full flex items-center justify-center font-bold">C</div>
                    <div>
                      <p className="text-sm font-bold">Team Charlie</p>
                      <p className="text-xs text-on-surface-variant">3 Members • Bagerhat</p>
                    </div>
                  </div>
                  <span className="px-2 py-1 bg-surface-container-highest text-on-surface-variant text-[0.6rem] font-black rounded uppercase">Standby</span>
                </div>
              </div>
              <button className="w-full mt-4 py-2 border border-outline-variant/30 text-xs font-bold uppercase tracking-widest rounded hover:bg-surface-container-high transition-colors">Manage Teams</button>
            </div>

            {/* Skill Distribution */}
            <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-outline-variant/20">
              <h3 className="text-sm font-bold uppercase tracking-wider text-outline mb-4">Skill Distribution</h3>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="font-semibold">First Aid / Medical</span>
                    <span>15%</span>
                  </div>
                  <div className="w-full bg-surface-container-highest rounded-full h-1.5">
                    <div className="bg-error h-1.5 rounded-full" style={{ width: '15%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="font-semibold">Search & Rescue</span>
                    <span>25%</span>
                  </div>
                  <div className="w-full bg-surface-container-highest rounded-full h-1.5">
                    <div className="bg-tertiary h-1.5 rounded-full" style={{ width: '25%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="font-semibold">Logistics & Distribution</span>
                    <span>40%</span>
                  </div>
                  <div className="w-full bg-surface-container-highest rounded-full h-1.5">
                    <div className="bg-primary h-1.5 rounded-full" style={{ width: '40%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="font-semibold">Communications</span>
                    <span>20%</span>
                  </div>
                  <div className="w-full bg-surface-container-highest rounded-full h-1.5">
                    <div className="bg-secondary h-1.5 rounded-full" style={{ width: '20%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
