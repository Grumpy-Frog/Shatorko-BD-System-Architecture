import React from 'react';

export default function Directory() {
  return (
    <main className="pt-8 pb-24 md:pb-12 px-6">
      {/* Editorial Header Section */}
      <header className="max-w-7xl mx-auto mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-secondary font-bold tracking-widest text-xs uppercase mb-2 block">National Infrastructure</span>
            <h1 className="text-4xl md:text-5xl font-headline font-black tracking-tighter text-on-surface leading-tight">
              Responder <br className="hidden md:block"/> Directory.
            </h1>
          </div>
          <div className="flex flex-col items-end gap-3">
            <p className="text-on-surface-variant max-w-xs text-right text-sm font-medium">
              Real-time access to national disaster authorities, medical desks, and local relay points across 8 divisions.
            </p>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-primary">System Online: Live Update</span>
            </div>
          </div>
        </div>
      </header>

      {/* Search & Filter Bar (Bento style) */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-4 mb-8">
        <div className="md:col-span-6 bg-surface-container-low p-4 rounded-xl flex items-center gap-4">
          <span className="material-symbols-outlined text-outline">search</span>
          <input className="bg-transparent border-none focus:ring-0 w-full font-medium text-on-surface outline-none" placeholder="Search by name, organization or keyword..." type="text"/>
        </div>
        <div className="md:col-span-3 bg-surface-container-low p-4 rounded-xl flex items-center justify-between group cursor-pointer hover:bg-surface-container-high transition-colors">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase font-bold text-outline tracking-widest">Division</span>
            <span className="font-bold text-primary">Dhaka (All Areas)</span>
          </div>
          <span className="material-symbols-outlined group-hover:translate-y-0.5 transition-transform">expand_more</span>
        </div>
        <div className="md:col-span-3 bg-surface-container-low p-4 rounded-xl flex items-center justify-between group cursor-pointer hover:bg-surface-container-high transition-colors">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase font-bold text-outline tracking-widest">Category</span>
            <span className="font-bold text-primary">All Responders</span>
          </div>
          <span className="material-symbols-outlined group-hover:translate-y-0.5 transition-transform">filter_list</span>
        </div>
      </section>

      {/* Emergency Directory Bento Grid */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Featured: National Authority */}
        <div className="lg:col-span-2 bg-primary rounded-xl p-8 text-white relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-700">
            <span className="material-symbols-outlined text-[120px]">account_balance</span>
          </div>
          <div className="relative z-10 flex flex-col h-full">
            <div className="flex justify-between items-start mb-12">
              <div>
                <span className="bg-white/20 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">Primary Authority</span>
                <h3 className="text-3xl font-black mt-4 font-headline tracking-tight leading-none">Dept. of Disaster Management (DDM)</h3>
                <p className="text-white/80 mt-2 font-medium">National Coordination Center, Dhaka HQ</p>
              </div>
              <button className="bg-white text-primary p-3 rounded-lg shadow-xl hover:scale-105 transition-transform">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              </button>
            </div>
            <div className="mt-auto grid grid-cols-2 gap-4">
              <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm border border-white/10">
                <span className="block text-[10px] uppercase opacity-60 font-bold mb-1">Direct Hotline</span>
                <span className="text-xl font-black">1090</span>
              </div>
              <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm border border-white/10">
                <span className="block text-[10px] uppercase opacity-60 font-bold mb-1">Response Time</span>
                <span className="text-xl font-black">&lt; 5 MINS</span>
              </div>
            </div>
          </div>
        </div>

        {/* Regional CPP Unit */}
        <div className="bg-surface-container-low rounded-xl p-6 flex flex-col border border-outline-variant/15 hover:border-primary/30 transition-colors">
          <div className="flex justify-between items-start mb-6">
            <div className="h-12 w-12 bg-secondary/10 text-secondary rounded-lg flex items-center justify-center">
              <span className="material-symbols-outlined text-3xl">waves</span>
            </div>
            <button className="text-outline hover:text-primary transition-colors">
              <span className="material-symbols-outlined">bookmark_add</span>
            </button>
          </div>
          <h4 className="text-xl font-bold text-on-surface mb-1">Sylhet CPP Regional Unit</h4>
          <p className="text-sm text-on-surface-variant mb-6">Cyclone &amp; Flood Preparedness Program</p>
          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-3 text-sm font-medium">
              <span className="material-symbols-outlined text-outline">phone</span>
              <span>+880 1711-XXXXXX</span>
            </div>
            <div className="flex items-center gap-3 text-sm font-medium">
              <span className="material-symbols-outlined text-outline">location_on</span>
              <span>Kazitula, Sylhet City</span>
            </div>
          </div>
          <button className="mt-auto w-full py-3 bg-secondary text-white rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-secondary-container transition-colors">
            <span className="material-symbols-outlined">call</span>
            QUICK DIAL
          </button>
        </div>

        {/* Hospital Desk */}
        <div className="bg-surface-container-low rounded-xl p-6 flex flex-col border border-outline-variant/15">
          <div className="flex justify-between items-start mb-6">
            <div className="h-12 w-12 bg-tertiary/10 text-tertiary rounded-lg flex items-center justify-center">
              <span className="material-symbols-outlined text-3xl">emergency</span>
            </div>
            <button className="text-outline hover:text-primary transition-colors">
              <span className="material-symbols-outlined">bookmark_add</span>
            </button>
          </div>
          <h4 className="text-xl font-bold text-on-surface mb-1">BSMMU Emergency Desk</h4>
          <p className="text-sm text-on-surface-variant mb-6">24/7 Trauma &amp; Disaster Response</p>
          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-3 text-sm font-medium">
              <span className="material-symbols-outlined text-outline">phone</span>
              <span>02-9661051</span>
            </div>
            <div className="flex items-center gap-3 text-sm font-medium">
              <span className="material-symbols-outlined text-outline">local_hospital</span>
              <span>Shahbagh, Dhaka</span>
            </div>
          </div>
          <button className="mt-auto w-full py-3 bg-tertiary text-white rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-tertiary-container transition-colors">
            <span className="material-symbols-outlined">call</span>
            QUICK DIAL
          </button>
        </div>

        {/* Religious Relay Point */}
        <div className="bg-surface-container-low rounded-xl p-6 flex flex-col border border-outline-variant/15">
          <div className="flex justify-between items-start mb-6">
            <div className="h-12 w-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center">
              <span className="material-symbols-outlined text-3xl">mosque</span>
            </div>
            <button className="text-outline hover:text-primary transition-colors">
              <span className="material-symbols-outlined">bookmark_add</span>
            </button>
          </div>
          <h4 className="text-xl font-bold text-on-surface mb-1">Baitul Mukarram Relay</h4>
          <p className="text-sm text-on-surface-variant mb-6">Emergency Information Relay Hub</p>
          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-3 text-sm font-medium">
              <span className="material-symbols-outlined text-outline">phone</span>
              <span>+880 2-22338XXXX</span>
            </div>
            <div className="flex items-center gap-3 text-sm font-medium">
              <span className="material-symbols-outlined text-outline">campaign</span>
              <span>Loudspeaker Broadcast Ready</span>
            </div>
          </div>
          <button className="mt-auto w-full py-3 border-2 border-primary text-primary rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-primary hover:text-white transition-all">
            <span className="material-symbols-outlined">info</span>
            STATION STATUS
          </button>
        </div>

        {/* Map View Preview */}
        <div className="lg:col-span-1 bg-surface-container-low rounded-xl overflow-hidden flex flex-col border border-outline-variant/15 h-full min-h-[400px]">
          <div className="p-6">
            <h4 className="text-xl font-bold text-on-surface">Nearby Responders</h4>
            <p className="text-sm text-on-surface-variant">Visualizing 12 units in your vicinity</p>
          </div>
          <div className="flex-grow relative bg-slate-200">
            <img className="w-full h-full object-cover grayscale opacity-50" alt="clean simplified map interface showing urban grid and several highlight markers representing emergency responder locations" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbSRvTVR1ciIIvK-yBghZhGLOUKXvTkVMOsMf97CtxB96Sr3vyJoKkSJHUBw3dMrIZGQHyzQ5ghTXAhjNtnb6KmxADi7z8VtDHQku5eghu0MB4N7o3nNB7ffeDteGzH12Iu305pE6JftS86KEwdOGEEHZ9YJVhWvY8hlhYTBUMaXV1In2-e7HWIT1eE6FjWVOq-8KekEEprPhlPosO2TkACXRfGz5eojBUFLAOWTpcUBTtgD8UMWcfPD4A8PAen522APGBnQlacLPc"/>
            <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="h-6 w-6 bg-tertiary rounded-full border-4 border-white animate-ping"></div>
              <div className="h-4 w-4 bg-tertiary rounded-full absolute top-1 left-1 border-2 border-white"></div>
            </div>
            <div className="absolute bottom-4 left-4 right-4 bg-white/80 backdrop-blur-md p-3 rounded-lg flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-error"></span>
                <span className="text-xs font-bold uppercase tracking-tight">Active Warning Area</span>
              </div>
              <span className="material-symbols-outlined text-sm">open_in_new</span>
            </div>
          </div>
        </div>
      </section>

      {/* Information/Guidelines Section */}
      <section className="max-w-7xl mx-auto mt-16 p-8 bg-surface-container-highest rounded-2xl flex flex-col md:flex-row items-center gap-8">
        <div className="w-full md:w-1/3">
          <img alt="emergency preparation" className="rounded-xl w-full h-48 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBHLTGB7-YbyxPWTQtdCxh2hxaDJDY5bdlQ7Cwsd2-x-2i76dHTCqnvS_YfaRj2cBeJMKrIeM2ySjTjrIYc9TfelEz5wQGb8_W7RznC0Z-w9lE6uc0pNTvsqk4DUFkaCyYtQSVjOpNol9KF3f6TnhoNw4UhAZO_3svJNKYf0_f76UOYCsU3NGBm1IdlZhEn7j7Nu8aHBOJIgDk1jIIO637memeYvZdraD1gOkN0SihNHy3ryZbu2BtK4fqoHKQj_Bde2j1XVAV-FTV"/>
        </div>
        <div className="flex-grow">
          <h2 className="text-2xl font-black font-headline mb-4 tracking-tight">How to use the Relay Network?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <div className="h-8 w-8 rounded-full bg-primary text-white flex items-center justify-center font-bold flex-shrink-0">1</div>
              <p className="text-sm text-on-surface-variant"><strong className="text-on-surface">Identify</strong> your current Division and the nearest landmark (Mosque/Temple/School).</p>
            </div>
            <div className="flex gap-4">
              <div className="h-8 w-8 rounded-full bg-primary text-white flex items-center justify-center font-bold flex-shrink-0">2</div>
              <p className="text-sm text-on-surface-variant"><strong className="text-on-surface">Communicate</strong> via the designated Hotline numbers if digital networks are slow.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
