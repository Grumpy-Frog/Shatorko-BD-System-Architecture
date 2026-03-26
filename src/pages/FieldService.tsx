import React from 'react';

export default function FieldService() {
  return (
    <main className="p-4 md:p-8 min-h-screen bg-surface">
      {/* Header Section */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
        <div>
          <span className="text-primary font-bold tracking-widest text-[10px] uppercase mb-2 block">Maintenance & Support</span>
          <h1 className="text-3xl font-black font-headline text-on-surface tracking-tight">Field Service Ticketing</h1>
        </div>
        <div className="flex gap-4">
          <button className="flex items-center gap-2 px-6 py-3 bg-surface-container-high hover:bg-surface-dim transition-colors rounded-lg text-sm font-bold text-on-surface">
            <span className="material-symbols-outlined text-lg">history</span>
            TICKET HISTORY
          </button>
          <button className="flex items-center gap-2 px-8 py-3 bg-gradient-to-br from-primary to-primary-container text-white rounded-lg text-sm font-bold shadow-lg shadow-primary/20 hover:opacity-90 transition-opacity">
            <span className="material-symbols-outlined text-lg">add</span>
            NEW SERVICE TICKET
          </button>
        </div>
      </header>

      {/* Ticket Status Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 mb-7">
        {/* Total Active */}
        <div className="bg-surface-container-low p-6 rounded-xl flex flex-col justify-between border border-outline-variant/10">
          <div className="flex justify-between items-start">
            <div className="p-3 bg-primary/10 rounded-lg">
              <span className="material-symbols-outlined text-primary">confirmation_number</span>
            </div>
            <span className="text-[10px] font-bold text-primary px-2 py-0.5 bg-primary/10 rounded uppercase">Active</span>
          </div>
          <div className="mt-8">
            <p className="text-on-surface-variant text-xs font-bold uppercase tracking-wider">Total Active Tickets</p>
            <h3 className="text-3xl font-black font-headline mt-1">142</h3>
            <p className="text-[10px] text-on-surface-variant mt-2 flex items-center gap-1">
              <span className="text-primary font-bold">+12%</span> from last week
            </p>
          </div>
        </div>

        {/* High Priority */}
        <div className="bg-surface-container-low p-6 rounded-xl flex flex-col justify-between border border-outline-variant/10">
          <div className="flex justify-between items-start">
            <div className="p-3 bg-tertiary/10 rounded-lg">
              <span className="material-symbols-outlined text-tertiary">priority_high</span>
            </div>
            <span className="text-[10px] font-bold text-tertiary px-2 py-0.5 bg-tertiary/10 rounded uppercase">Critical</span>
          </div>
          <div className="mt-8">
            <p className="text-on-surface-variant text-xs font-bold uppercase tracking-wider">High Priority Tasks</p>
            <h3 className="text-3xl font-black font-headline mt-1">28</h3>
            <p className="text-[10px] text-on-surface-variant mt-2 flex items-center gap-1">
              <span className="text-tertiary font-bold">8 URGENT</span> response required
            </p>
          </div>
        </div>

        {/* In Progress */}
        <div className="bg-surface-container-low p-6 rounded-xl flex flex-col justify-between border border-outline-variant/10">
          <div className="flex justify-between items-start">
            <div className="p-3 bg-secondary/10 rounded-lg">
              <span className="material-symbols-outlined text-secondary">engineering</span>
            </div>
            <span className="text-[10px] font-bold text-secondary px-2 py-0.5 bg-secondary/10 rounded uppercase">In Field</span>
          </div>
          <div className="mt-8">
            <p className="text-on-surface-variant text-xs font-bold uppercase tracking-wider">Technicians Deployed</p>
            <h3 className="text-3xl font-black font-headline mt-1">54</h3>
            <p className="text-[10px] text-on-surface-variant mt-2 flex items-center gap-1">
              Across <span className="text-secondary font-bold">12 Regions</span>
            </p>
          </div>
        </div>

        {/* Resolved Today */}
        <div className="bg-surface-container-low p-6 rounded-xl flex flex-col justify-between border border-outline-variant/10">
          <div className="flex justify-between items-start">
            <div className="p-3 bg-primary-container/10 rounded-lg">
              <span className="material-symbols-outlined text-primary-container">check_circle</span>
            </div>
            <span className="text-[10px] font-bold text-primary-container px-2 py-0.5 bg-primary-container/10 rounded uppercase">Resolved</span>
          </div>
          <div className="mt-8">
            <p className="text-on-surface-variant text-xs font-bold uppercase tracking-wider">Resolved Today</p>
            <h3 className="text-3xl font-black font-headline mt-1">19</h3>
            <p className="text-[10px] text-on-surface-variant mt-2 flex items-center gap-1">
              Avg resolution: <span className="text-primary-container font-bold">4.2 hrs</span>
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-12 gap-7">
        {/* Active Tickets List */}
        <div className="col-span-12 lg:col-span-8 bg-surface-container-low rounded-xl p-6 border border-outline-variant/10">
          <div className="flex justify-between items-center mb-6">
            <h4 className="text-sm font-black font-headline uppercase tracking-widest text-on-surface">Active Service Tickets</h4>
            <div className="flex gap-2">
              <button className="px-3 py-1.5 bg-surface-container-high rounded-md text-[10px] font-bold text-on-surface hover:bg-surface-dim transition-colors">ALL</button>
              <button className="px-3 py-1.5 bg-primary/10 rounded-md text-[10px] font-bold text-primary">CRITICAL</button>
              <button className="px-3 py-1.5 bg-surface-container-high rounded-md text-[10px] font-bold text-on-surface hover:bg-surface-dim transition-colors">PENDING</button>
            </div>
          </div>
          
          <div className="space-y-4">
            {/* Ticket Item 1 */}
            <div className="bg-surface-container-lowest p-5 rounded-lg border border-outline-variant/10 hover:border-primary/30 transition-all cursor-pointer group shadow-sm">
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-black bg-tertiary/10 text-tertiary px-2 py-0.5 rounded uppercase">#TK-8021</span>
                  <span className="text-[10px] font-black bg-surface-container-highest text-on-surface-variant px-2 py-0.5 rounded uppercase">HARDWARE</span>
                </div>
                <span className="text-[10px] text-on-surface-variant font-medium">24m ago</span>
              </div>
              <h5 className="text-lg font-bold text-on-surface mb-2 group-hover:text-primary transition-colors">LoRa Gateway G-09 Power Failure</h5>
              <p className="text-sm text-on-surface-variant mb-4 line-clamp-2">Gateway G-09 in Chittagong Sector 4 reported total power loss. Solar backup failed to engage. Immediate technician dispatch required.</p>
              <div className="flex justify-between items-center pt-4 border-t border-outline-variant/10">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-surface-container-highest flex items-center justify-center text-[10px] font-bold">RH</div>
                  <span className="text-xs font-bold text-on-surface">Rafi Hassan</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1 text-on-surface-variant">
                    <span className="material-symbols-outlined text-sm">location_on</span>
                    <span className="text-[10px] font-bold uppercase">Chittagong</span>
                  </div>
                  <button className="px-4 py-1.5 bg-primary text-white text-[10px] font-black uppercase tracking-widest rounded hover:bg-primary-container transition-colors">ASSIGN</button>
                </div>
              </div>
            </div>

            {/* Ticket Item 2 */}
            <div className="bg-surface-container-lowest p-5 rounded-lg border border-outline-variant/10 hover:border-primary/30 transition-all cursor-pointer group shadow-sm">
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-black bg-secondary/10 text-secondary px-2 py-0.5 rounded uppercase">#TK-7994</span>
                  <span className="text-[10px] font-black bg-surface-container-highest text-on-surface-variant px-2 py-0.5 rounded uppercase">NETWORK</span>
                </div>
                <span className="text-[10px] text-on-surface-variant font-medium">1h 12m ago</span>
              </div>
              <h5 className="text-lg font-bold text-on-surface mb-2 group-hover:text-primary transition-colors">Relay Point R-42 Signal Degradation</h5>
              <p className="text-sm text-on-surface-variant mb-4 line-clamp-2">Signal strength dropped below -120dBm. Possible physical obstruction or antenna misalignment detected after heavy winds.</p>
              <div className="flex justify-between items-center pt-4 border-t border-outline-variant/10">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center text-[10px] font-bold text-secondary">AK</div>
                  <span className="text-xs font-bold text-on-surface">Asif Khan</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1 text-on-surface-variant">
                    <span className="material-symbols-outlined text-sm">location_on</span>
                    <span className="text-[10px] font-bold uppercase">Sylhet North</span>
                  </div>
                  <button className="px-4 py-1.5 bg-surface-container-highest text-on-surface text-[10px] font-black uppercase tracking-widest rounded hover:bg-surface-dim transition-colors">IN PROGRESS</button>
                </div>
              </div>
            </div>

            {/* Ticket Item 3 */}
            <div className="bg-surface-container-lowest p-5 rounded-lg border border-outline-variant/10 hover:border-primary/30 transition-all cursor-pointer group shadow-sm">
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-black bg-primary/10 text-primary px-2 py-0.5 rounded uppercase">#TK-7982</span>
                  <span className="text-[10px] font-black bg-surface-container-highest text-on-surface-variant px-2 py-0.5 rounded uppercase">SENSOR</span>
                </div>
                <span className="text-[10px] text-on-surface-variant font-medium">3h 45m ago</span>
              </div>
              <h5 className="text-lg font-bold text-on-surface mb-2 group-hover:text-primary transition-colors">Water Level Sensor S-112 Calibration</h5>
              <p className="text-sm text-on-surface-variant mb-4 line-clamp-2">Inconsistent readings reported from S-112. Remote diagnostic suggests recalibration needed. Routine maintenance task.</p>
              <div className="flex justify-between items-center pt-4 border-t border-outline-variant/10">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-[10px] font-bold text-primary">MS</div>
                  <span className="text-xs font-bold text-on-surface">Mila Sultana</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1 text-on-surface-variant">
                    <span className="material-symbols-outlined text-sm">location_on</span>
                    <span className="text-[10px] font-bold uppercase">Barisal Hub</span>
                  </div>
                  <button className="px-4 py-1.5 bg-surface-container-highest text-on-surface text-[10px] font-black uppercase tracking-widest rounded hover:bg-surface-dim transition-colors">PENDING</button>
                </div>
              </div>
            </div>
          </div>
          
          <button className="w-full mt-6 py-4 bg-surface-container-high rounded-lg text-xs font-black tracking-widest text-on-surface uppercase hover:bg-surface-dim transition-all">
            LOAD MORE TICKETS
          </button>
        </div>

        {/* Right Panel: Technician Map & Stats */}
        <div className="col-span-12 lg:col-span-4 flex flex-col gap-7">
          {/* Technician Map View */}
          <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/10">
            <h4 className="text-sm font-black font-headline uppercase tracking-widest text-on-surface mb-4">Field Deployment Map</h4>
            <div className="aspect-square bg-surface-container-highest rounded-lg relative overflow-hidden border border-outline-variant/10">
              <img 
                className="w-full h-full object-cover opacity-50 grayscale" 
                alt="Map"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7itACBhAAsVdWUhMMvsXV3Sme-tVl23HMsuJwiAE3JoCtW9aNl0ImuMuG3FZoO0fY5NIN487d5UV5OV9x3ZWusNm8HnAQsBoUJI9JWYTBd1q_74ce0v9DfrkcnxflIcoU84Bt7BMpMqjFai-ARCMmNauYeuSOU3D2aAJqzoZlqed6nWrjiixn9r_5ncOmT0GkGK3ghP7tOKaXC61ND1gILvYjDEmNJ2NODWgbJWL4t9sA92s__YAbTQY1XUnuzfPsSWqtkWXHXoIt" 
              />
              {/* Technician Markers */}
              <div className="absolute top-1/4 left-1/3 w-3 h-3 bg-primary rounded-full border-2 border-white animate-ping"></div>
              <div className="absolute top-1/4 left-1/3 w-3 h-3 bg-primary rounded-full border-2 border-white"></div>
              
              <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-secondary rounded-full border-2 border-white animate-ping"></div>
              <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-secondary rounded-full border-2 border-white"></div>
              
              <div className="absolute top-1/2 right-1/2 w-3 h-3 bg-tertiary rounded-full border-2 border-white animate-ping"></div>
              <div className="absolute top-1/2 right-1/2 w-3 h-3 bg-tertiary rounded-full border-2 border-white"></div>
            </div>
            <div className="mt-4 flex justify-between items-center">
              <span className="text-[10px] font-bold text-on-surface-variant uppercase">Technicians Online</span>
              <span className="text-sm font-black text-primary">54 / 60</span>
            </div>
          </div>

          {/* Regional Performance */}
          <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/10 flex-1">
            <h4 className="text-sm font-black font-headline uppercase tracking-widest text-on-surface mb-6">Regional Performance</h4>
            <div className="space-y-5">
              <div>
                <div className="flex justify-between items-end mb-2">
                  <span className="text-xs font-bold text-on-surface">Dhaka Central</span>
                  <span className="text-xs font-bold text-primary">98%</span>
                </div>
                <div className="h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-[98%]"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-end mb-2">
                  <span className="text-xs font-bold text-on-surface">Chittagong Port</span>
                  <span className="text-xs font-bold text-secondary">82%</span>
                </div>
                <div className="h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
                  <div className="h-full bg-secondary w-[82%]"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-end mb-2">
                  <span className="text-xs font-bold text-on-surface">Sylhet North</span>
                  <span className="text-xs font-bold text-amber-500">64%</span>
                </div>
                <div className="h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
                  <div className="h-full bg-amber-500 w-[64%]"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-end mb-2">
                  <span className="text-xs font-bold text-on-surface">Barisal Hub</span>
                  <span className="text-xs font-bold text-tertiary">45%</span>
                </div>
                <div className="h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
                  <div className="h-full bg-tertiary w-[45%]"></div>
                </div>
              </div>
            </div>
            <button className="w-full mt-8 py-3 bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest rounded-lg hover:bg-primary/20 transition-colors">
              VIEW DETAILED ANALYTICS
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
