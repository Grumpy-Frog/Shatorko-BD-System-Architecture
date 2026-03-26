import React from 'react';

export default function Reports() {
  return (
    <main className="p-4 md:p-6 min-h-[calc(100vh-64px)] bg-surface">
      {/* Header Section */}
      <div className="flex justify-between items-end mb-10">
        <div>
          <span className="text-label-md font-bold text-primary uppercase tracking-widest">Strategic Intelligence</span>
          <h1 className="text-4xl font-black font-headline tracking-tighter text-on-background mt-1 uppercase">National Readiness Report</h1>
          <p className="text-on-surface-variant max-w-2xl mt-2">Comprehensive preparedness evaluation of Bangladesh's critical disaster response infrastructure and personnel capabilities.</p>
        </div>
        <div className="flex gap-4">
          <div className="bg-surface-container px-4 py-2 rounded-lg text-right">
            <span className="block text-[10px] uppercase font-bold text-outline">Last Assessment</span>
            <span className="text-sm font-bold text-on-surface">Oct 24, 2023 · 08:45 AM</span>
          </div>
          <button className="bg-primary text-white px-6 py-2 rounded-md font-bold flex items-center gap-2 shadow-lg shadow-primary/20 hover:scale-95 transition-all">
            <span className="material-symbols-outlined">download</span>
            EXPORT PDF
          </button>
        </div>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-12 gap-7">
        {/* National Readiness Index (The Central Dial) */}
        <div className="col-span-12 lg:col-span-4 bg-surface-container-low p-8 flex flex-col items-center justify-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none"></div>
          <h3 className="font-headline font-bold text-on-surface-variant mb-8 uppercase tracking-widest text-xs">National Readiness Index</h3>
          <div className="relative w-64 h-64 flex items-center justify-center">
            {/* SVG Dial */}
            <svg className="w-full h-full transform -rotate-90">
              <circle className="text-surface-container-high" cx="128" cy="128" fill="transparent" r="110" stroke="currentColor" strokeWidth="12"></circle>
              <circle className="text-primary" cx="128" cy="128" fill="transparent" r="110" stroke="currentColor" strokeDasharray="691" strokeDashoffset="152" strokeLinecap="round" strokeWidth="12"></circle>
            </svg>
            <div className="absolute flex flex-col items-center">
              <span className="text-6xl font-black font-headline tracking-tighter text-primary">78%</span>
              <span className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mt-1">Ready</span>
            </div>
          </div>
          <div className="mt-8 flex gap-6 text-center">
            <div>
              <span className="block text-xs font-bold text-primary">+4.2%</span>
              <span className="text-[10px] text-outline uppercase font-bold">vs last month</span>
            </div>
            <div className="w-[1px] bg-outline-variant/30"></div>
            <div>
              <span className="block text-xs font-bold text-secondary">Optimal</span>
              <span className="text-[10px] text-outline uppercase font-bold">Target Status</span>
            </div>
          </div>
        </div>

        {/* Risk Map Layer */}
        <div className="col-span-12 lg:col-span-8 bg-surface-container-low relative overflow-hidden h-[450px]">
          <img className="absolute inset-0 w-full h-full object-cover opacity-30 grayscale contrast-125" data-alt="Stylized geographical map of Bangladesh with dark green terrain and glowing data overlay points representing infrastructure nodes" data-location="Bangladesh" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYsJTj7mGV9HPGdTAnY8c2DUkKeWmYfkf4MUWSAAcRrnSts9k8b1DXin1RiAQCAlTnyB9bKkF0usbJ97s4lF-TZ0mlsecYF0jnEM5isbccx2WIw4nbaSn9Cxk8QwGwrQHDBPisH_slIbUdZCTMHFetoCU2YbFTX5yVlWhROQMh45uBg76t0E6GrXopSd9XELUR2zu-GoKDYsPjR_PBSgHgBybHGsHJkqA-aUlxjOJ5yJlhn04y8ThXGdB8YEpQMdoSd_y_CaGYBcUC" />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low via-transparent to-transparent"></div>
          <div className="absolute top-6 left-6 z-10">
            <h3 className="font-headline font-bold text-on-surface-variant uppercase tracking-widest text-xs">Readiness Hotspots & Gaps</h3>
            <div className="flex gap-2 mt-3">
              <span className="flex items-center gap-1.5 px-3 py-1 bg-surface-container-lowest text-[10px] font-bold text-on-surface rounded-full shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span> SAFE ZONES
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1 bg-surface-container-lowest text-[10px] font-bold text-on-surface rounded-full shadow-sm">
                <span className="w-2 h-2 rounded-full bg-tertiary"></span> VULNERABLE GAPS
              </span>
            </div>
          </div>
          {/* Floating Interactive Markers (Visual Representation) */}
          <div className="absolute top-[40%] left-[60%] animate-pulse">
            <div className="w-4 h-4 bg-tertiary rounded-full shadow-[0_0_15px_rgba(144,0,13,0.8)]"></div>
          </div>
          <div className="absolute top-[30%] left-[20%]">
            <div className="w-4 h-4 bg-emerald-500 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.8)]"></div>
          </div>
          <div className="absolute bottom-6 right-6 bg-glass p-4 rounded-lg shadow-xl max-w-xs">
            <h4 className="text-xs font-bold text-primary uppercase mb-2 tracking-wider">Map Insights</h4>
            <p className="text-[11px] leading-relaxed text-on-surface-variant">Sunamganj Haor regions exhibit critical coverage gaps. Shelter proximity &gt; 15km in 12 sectors.</p>
          </div>
        </div>

        {/* Sector Breakdown */}
        <div className="col-span-12 lg:col-span-7 bg-surface-container-low p-8">
          <h3 className="font-headline font-bold text-on-surface-variant mb-6 uppercase tracking-widest text-xs">Sector Readiness Breakdown</h3>
          <div className="space-y-6">
            {/* Sector 1 */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">router</span>
                  <span className="text-sm font-bold">Infrastructure (LoRa Mesh)</span>
                </div>
                <span className="text-sm font-black text-primary">82%</span>
              </div>
              <div className="w-full h-1.5 bg-surface-container-high rounded-full overflow-hidden">
                <div className="h-full bg-primary" style={{ width: '82%' }}></div>
              </div>
              <p className="text-[10px] mt-2 text-outline">9,420 Active Nodes · 45 Pending Maintenance</p>
            </div>
            {/* Sector 2 */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">volunteer_activism</span>
                  <span className="text-sm font-bold">Human Capital (Volunteers)</span>
                </div>
                <span className="text-sm font-black text-primary">64%</span>
              </div>
              <div className="w-full h-1.5 bg-surface-container-high rounded-full overflow-hidden">
                <div className="h-full bg-primary" style={{ width: '64%' }}></div>
              </div>
              <p className="text-[10px] mt-2 text-outline">125,000 Trained Personnel · Deployment Gap: Khulna</p>
            </div>
            {/* Sector 3 */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">inventory_2</span>
                  <span className="text-sm font-bold">Logistics (Shelter Supplies)</span>
                </div>
                <span className="text-sm font-black text-primary">88%</span>
              </div>
              <div className="w-full h-1.5 bg-surface-container-high rounded-full overflow-hidden">
                <div className="h-full bg-primary" style={{ width: '88%' }}></div>
              </div>
              <p className="text-[10px] mt-2 text-outline">Standard Rations: Full · Medical Kits: 92%</p>
            </div>
          </div>
        </div>

        {/* Strategic Recommendations (AI) */}
        <div className="col-span-12 lg:col-span-5 bg-primary-container p-8 text-white rounded-xl">
          <div className="flex items-center gap-2 mb-6">
            <span className="material-symbols-outlined">auto_awesome</span>
            <h3 className="font-headline font-bold uppercase tracking-widest text-xs">AI Priority Actions</h3>
          </div>
          <div className="space-y-4">
            <div className="bg-white/10 p-4 rounded-lg border-l-4 border-emerald-400">
              <span className="text-[10px] font-bold text-emerald-300 uppercase tracking-widest">Priority 01</span>
              <p className="text-sm font-medium mt-1">Deploy 20 additional LoRa mesh nodes in Sunamganj to eliminate alert dead-zones.</p>
            </div>
            <div className="bg-white/10 p-4 rounded-lg border-l-4 border-emerald-400">
              <span className="text-[10px] font-bold text-emerald-300 uppercase tracking-widest">Priority 02</span>
              <p className="text-sm font-medium mt-1">Conduct refresher training for 500 volunteers in Barisal division before cyclone season peak.</p>
            </div>
            <div className="bg-white/10 p-4 rounded-lg border-l-4 border-emerald-400">
              <span className="text-[10px] font-bold text-emerald-300 uppercase tracking-widest">Priority 03</span>
              <p className="text-sm font-medium mt-1">Re-route logistics chain for Satkhira shelters; current path risk rating is too high.</p>
            </div>
          </div>
        </div>

        {/* Historical Readiness Trend */}
        <div className="col-span-12 lg:col-span-8 bg-surface-container-low p-8 rounded-xl">
          <div className="flex justify-between items-center mb-8">
            <h3 className="font-headline font-bold text-on-surface-variant uppercase tracking-widest text-xs">Historical Readiness Trend (12 Months)</h3>
            <div className="flex gap-4">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-primary"></span>
                <span className="text-[10px] font-bold uppercase">Index Score</span>
              </div>
            </div>
          </div>
          {/* Mock Chart Area */}
          <div className="relative h-48 w-full flex items-end justify-between gap-1 border-b border-l border-outline-variant/30 px-2 pb-2">
            <div className="w-full h-full absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
              <span className="text-6xl font-black font-headline">SENTINEL DATA</span>
            </div>
            {/* Chart Bars/Lines representation */}
            <div className="flex-grow flex items-end justify-between gap-4 h-full relative">
              <div className="w-full bg-primary/20 h-[40%] relative group">
                <div className="absolute inset-x-0 bottom-0 bg-primary h-full rounded-t-sm"></div>
              </div>
              <div className="w-full bg-primary/20 h-[45%] relative group">
                <div className="absolute inset-x-0 bottom-0 bg-primary h-full rounded-t-sm"></div>
              </div>
              <div className="w-full bg-primary/20 h-[42%] relative group">
                <div className="absolute inset-x-0 bottom-0 bg-primary h-full rounded-t-sm"></div>
              </div>
              <div className="w-full bg-primary/20 h-[50%] relative group">
                <div className="absolute inset-x-0 bottom-0 bg-primary h-full rounded-t-sm"></div>
              </div>
              <div className="w-full bg-primary/20 h-[55%] relative group">
                <div className="absolute inset-x-0 bottom-0 bg-primary h-full rounded-t-sm"></div>
              </div>
              <div className="w-full bg-primary/20 h-[60%] relative group">
                <div className="absolute inset-x-0 bottom-0 bg-primary h-full rounded-t-sm"></div>
              </div>
              <div className="w-full bg-primary/20 h-[65%] relative group">
                <div className="absolute inset-x-0 bottom-0 bg-primary h-full rounded-t-sm"></div>
              </div>
              <div className="w-full bg-primary/20 h-[72%] relative group">
                <div className="absolute inset-x-0 bottom-0 bg-primary h-full rounded-t-sm"></div>
              </div>
              <div className="w-full bg-primary/20 h-[75%] relative group">
                <div className="absolute inset-x-0 bottom-0 bg-primary h-full rounded-t-sm"></div>
              </div>
              <div className="w-full bg-primary/20 h-[78%] relative group">
                <div className="absolute inset-x-0 bottom-0 bg-primary h-full rounded-t-sm"></div>
              </div>
            </div>
          </div>
          <div className="flex justify-between mt-4 px-2 text-[10px] font-bold text-outline uppercase">
            <span>JAN</span><span>FEB</span><span>MAR</span><span>APR</span><span>MAY</span><span>JUN</span><span>JUL</span><span>AUG</span><span>SEP</span><span>OCT</span>
          </div>
        </div>

        {/* Authority Endorsement Section */}
        <div className="col-span-12 lg:col-span-4 bg-surface-container-highest p-8 border-t-4 border-primary rounded-xl">
          <h3 className="font-headline font-bold text-on-surface-variant mb-6 uppercase tracking-widest text-xs">Official Authority Approval</h3>
          <div className="flex flex-col h-full justify-between">
            <div>
              <p className="text-xs italic text-on-surface-variant leading-relaxed">
                "I have reviewed the readiness metrics for the current cycle. The transition to LoRa mesh in the haor regions is commendable. We authorize the release of Phase 3 logistics funding based on these scores."
              </p>
              <div className="mt-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-300">
                  <img className="w-full h-full object-cover" data-alt="Professional portrait of a middle-aged South Asian male government official in formal attire, neutral background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqiQ49zm5e9HDMbmkTgb8_HzKqwAjPcp3TvPVa4tzQvnrPZWeCNaqRgjRqpKbleR8yMv4ZgvhxlqK1RkzLuziZaBOUt5-1nrf9gVkQIe_WglSJYt-XTtiNVca5Q3MfIQtv72OXUqzujsfHu9ywc3PpTgnPPjtK-QehzZVuc5xD6NqrOZqJlSMHCtdl1IiRhrVj64tJF2YBF6T8zQv8_SxV1PdjnFzPzPRbNmwTFxvX8WoN4pqBLhRAazupLtJr8cGKY9Ixcb6EqBSu" />
                </div>
                <div>
                  <h4 className="text-sm font-bold">Maj. Gen. Ahmed Rafiq</h4>
                  <span className="text-[10px] text-outline uppercase font-bold">Director General, Sentinel Operations</span>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <div className="flex items-center gap-2 mb-4 p-3 bg-white border border-emerald-100 rounded">
                <span className="material-symbols-outlined text-emerald-600">verified</span>
                <span className="text-[10px] font-bold text-emerald-700 uppercase">DIGITALLY SIGNED & ENCRYPTED</span>
              </div>
              <button className="w-full py-3 bg-[#00503a] text-white font-bold text-sm tracking-widest uppercase hover:bg-[#006a4e] transition-all">
                CERTIFY STATUS
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
