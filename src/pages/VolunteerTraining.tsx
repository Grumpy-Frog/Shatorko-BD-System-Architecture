import React from 'react';

export default function VolunteerTraining() {
  return (
    <div className="p-6 lg:p-10 max-w-7xl mx-auto w-full">
      {/* Hero Section */}
      <section className="mb-12 relative overflow-hidden rounded-2xl p-8 lg:p-12 min-h-[320px] flex flex-col justify-end bg-[#006a4e] text-white">
        <img 
          alt="Emergency response team coordinating" 
          className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-overlay" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxAmHnKfda7Nc8lKpUDyWj-m2r23PCNPxwuAwPhzz2krCJcrTRlFcq66Gfrudhv-2S0vFdRFMhIS7vam9wssl2m_3hW7zN5Oia4V36El5Q1s8_R9SLx6l_yIRfZGe7cC5Jj9x6gC8U9Ov2hvWJ3NDKpEolZ5hR4bSATkUXZAIiUcMrk1jqC4u--LgPTaU-4bpy5pLHVciK7asGAEZmuTqO7A719qjCYW47tKKixurysk9y6Iy4hBovQTMYu9QsaBlCu3HAsf8UFs3p"
        />
        <div className="relative z-10 space-y-6">
          <div>
            <h1 className="text-4xl lg:text-6xl font-black font-headline tracking-tighter mb-2">Welcome back, Operator</h1>
            <p className="text-emerald-100/80 text-lg lg:text-xl font-medium max-w-2xl">Your specialized training modules are updated. Maintain peak operational readiness for the upcoming monsoon season.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/10 max-w-3xl">
            <div className="flex justify-between items-end mb-3">
              <span className="text-sm font-bold uppercase tracking-widest text-emerald-300">Readiness Level: Alpha</span>
              <span className="text-3xl font-black font-headline">94%</span>
            </div>
            <div className="h-3 w-full bg-white/20 rounded-full overflow-hidden">
              <div className="h-full bg-[#83d7b4] w-[94%] shadow-[0_0_15px_rgba(131,215,180,0.5)]"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Grid Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Training Paths */}
        <div className="lg:col-span-8 space-y-8">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-black font-headline text-[#00503a] dark:text-emerald-400 tracking-tight">Training Paths</h2>
            <button className="text-[#00503a] dark:text-emerald-400 font-bold text-sm hover:underline">View All Paths</button>
          </div>
          <div className="grid grid-cols-1 gap-6">
            {/* Path 1 */}
            <div className="bg-white dark:bg-slate-900 rounded-xl p-1 flex flex-col md:flex-row gap-6 hover:shadow-xl hover:shadow-[#00503a]/5 transition-all group overflow-hidden border border-slate-100 dark:border-slate-800">
              <div className="w-full md:w-48 h-48 md:h-auto overflow-hidden rounded-lg">
                <img 
                  alt="Hardware installation" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBm2Dyy2P_DBk9ezBNqwh2NX-vah38cOhd6V1bKy4vP24vsp6ORk8sj-7nYcyDI3QN6DvpRzk_XXTmTKVmeJ1EkFI6xjVzq6Mu5pBhGBBn2uovjduKpyKnuKHY685gwR01KVJJWnBifpVHxsTQ4Q-g6Dw4c0tsVTvav_pJsd7kitjcEBUKHYlfEnwpeT5Y5IEYHPeXPxowa-c1zmfsKUvFlbebk3bomNaXA1bUU8MKKChForgqLsj8wQE-ArvMBsvsXIbCN-PFTJqDJ"
                />
              </div>
              <div className="flex-1 py-4 pr-6 pl-6 md:pl-0 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold font-headline mb-2 text-slate-900 dark:text-white">Mosque/Temple Relay Operation</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm line-clamp-2 mb-4">Master the deployment and maintenance of LoRa-based alert systems within community religious hubs.</p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="flex-1 h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                      <div className="h-full bg-[#00503a] dark:bg-emerald-500 w-[75%]"></div>
                    </div>
                    <span className="text-xs font-bold text-[#00503a] dark:text-emerald-400">75%</span>
                  </div>
                  <button className="bg-gradient-to-br from-[#00503a] to-[#006a4e] text-white px-6 py-2.5 rounded-lg text-sm font-bold flex items-center justify-center gap-2 group-hover:gap-3 transition-all active:scale-95">
                    Continue Path <span className="material-symbols-outlined !text-lg">chevron_right</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Path 2 */}
            <div className="bg-white dark:bg-slate-900 rounded-xl p-1 flex flex-col md:flex-row gap-6 hover:shadow-xl hover:shadow-[#00503a]/5 transition-all group overflow-hidden border border-slate-100 dark:border-slate-800">
              <div className="w-full md:w-48 h-48 md:h-auto overflow-hidden rounded-lg">
                <img 
                  alt="Map evacuation route" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8Aq_BudIkE5x2vV8f033WnRYjCM49MXrIrdp2YKuwLlZ9-H_YcvhEfqoJe8eCLghte6_7SW6DOVLhILB-28CLemylq0tQbSRr052upYA4hVKBwA_gJpXIf1vn1yI30O8Walb5gVfcJW1S6ikiHcAuX-gjuDgI0lFIdPIR3_Q2V60yDc_DfEHRwFas4DCM3u0530kjiHI1NmZqd22UcatuKFblmGj3J_hriKzpNa3iWnF36yC1bw_pHm9bFowH38TICbU6T89ayyXO"
                />
              </div>
              <div className="flex-1 py-4 pr-6 pl-6 md:pl-0 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold font-headline mb-2 text-slate-900 dark:text-white">Community Evacuation & Routing</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm line-clamp-2 mb-4">Strategic routing protocols for rapid village evacuation during flash flood warnings.</p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="flex-1 h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                      <div className="h-full bg-[#00503a] dark:bg-emerald-500 w-[40%]"></div>
                    </div>
                    <span className="text-xs font-bold text-[#00503a] dark:text-emerald-400">40%</span>
                  </div>
                  <button className="bg-gradient-to-br from-[#00503a] to-[#006a4e] text-white px-6 py-2.5 rounded-lg text-sm font-bold flex items-center justify-center gap-2 group-hover:gap-3 transition-all active:scale-95">
                    Continue Path <span className="material-symbols-outlined !text-lg">chevron_right</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Path 3 */}
            <div className="bg-white dark:bg-slate-900 rounded-xl p-1 flex flex-col md:flex-row gap-6 hover:shadow-xl hover:shadow-[#00503a]/5 transition-all group overflow-hidden border border-slate-100 dark:border-slate-800">
              <div className="w-full md:w-48 h-48 md:h-auto overflow-hidden rounded-lg">
                <img 
                  alt="Medical first response kit" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBK-j9mrTgx_Gx6r3xY5rAH9P-iQUz1N_PfE8aJyEJiWaKj_uxsAkwCLCYP31XfJpsJ3CzkP9FNdDcGKda_RGbsPDN7v--oktlz9Gz1xWtD7I83sKO3UWtzDq9g3ZEY_1YYSWCkPiOQnpgLS6ZbnmeTs9_AtFIzVJTeyRAAbLXOuN8DGDpmdyLFvnb3oxa0ryh1Qe63BMBZlVWHC1mFTbXcK4bFdtIVRvUIMdfpY-W9f-BExdZUN9tV_odefHh3Xf0dQ3fs90-pqlga"
                />
              </div>
              <div className="flex-1 py-4 pr-6 pl-6 md:pl-0 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold font-headline mb-2 text-slate-900 dark:text-white">Medical First Response</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm line-clamp-2 mb-4">Field-tested medical procedures for trauma and water-borne emergency incidents.</p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="flex-1 h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                      <div className="h-full bg-[#00503a] dark:bg-emerald-500 w-[15%]"></div>
                    </div>
                    <span className="text-xs font-bold text-[#00503a] dark:text-emerald-400">15%</span>
                  </div>
                  <button className="bg-gradient-to-br from-[#00503a] to-[#006a4e] text-white px-6 py-2.5 rounded-lg text-sm font-bold flex items-center justify-center gap-2 group-hover:gap-3 transition-all active:scale-95">
                    Continue Path <span className="material-symbols-outlined !text-lg">chevron_right</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Active Drills & Resources */}
        <div className="lg:col-span-4 space-y-8">
          {/* Active Drills Section */}
          <div className="bg-slate-900 text-white p-6 rounded-2xl shadow-2xl relative overflow-hidden">
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#00503a]/40 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-6">
                <span className="material-symbols-outlined text-emerald-400">sensors</span>
                <h2 className="text-lg font-black font-headline uppercase tracking-widest">Active Drills</h2>
              </div>
              <div className="space-y-6">
                <div className="border-l-4 border-emerald-500 pl-4 py-1">
                  <h3 className="text-xl font-bold font-headline mb-1">LoRa Mesh Stress Test</h3>
                  <p className="text-emerald-100/60 text-xs font-medium uppercase tracking-tighter mb-4">Scheduled for: Friday, 09:00 BST</p>
                  <div className="grid grid-cols-3 gap-2 mb-6">
                    <div className="bg-white/10 rounded p-2 text-center">
                      <p className="text-xl font-black font-headline">02</p>
                      <p className="text-[10px] uppercase opacity-60">Days</p>
                    </div>
                    <div className="bg-white/10 rounded p-2 text-center">
                      <p className="text-xl font-black font-headline">14</p>
                      <p className="text-[10px] uppercase opacity-60">Hrs</p>
                    </div>
                    <div className="bg-white/10 rounded p-2 text-center">
                      <p className="text-xl font-black font-headline">45</p>
                      <p className="text-[10px] uppercase opacity-60">Min</p>
                    </div>
                  </div>
                  <button className="w-full py-3 bg-[#83d7b4] text-[#002116] font-black rounded-lg uppercase tracking-widest text-sm hover:bg-white transition-colors active:scale-95">
                    Join Drill
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Resource Library */}
          <div className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-6 border border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-2 mb-6">
              <span className="material-symbols-outlined text-[#00503a] dark:text-emerald-400">library_books</span>
              <h2 className="text-lg font-black font-headline text-[#00503a] dark:text-emerald-400">Resource Library</h2>
            </div>
            <div className="space-y-3">
              <a className="group flex items-center justify-between p-4 bg-white dark:bg-slate-800 rounded-xl hover:bg-[#00503a] hover:text-white dark:hover:bg-emerald-900 transition-all duration-300 shadow-sm" href="#">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#00503a] dark:text-emerald-400 group-hover:text-white">picture_as_pdf</span>
                  <span className="text-sm font-bold">Cyclone Safety Manual (BN)</span>
                </div>
                <span className="material-symbols-outlined !text-lg opacity-40 group-hover:opacity-100">download</span>
              </a>
              <a className="group flex items-center justify-between p-4 bg-white dark:bg-slate-800 rounded-xl hover:bg-[#00503a] hover:text-white dark:hover:bg-emerald-900 transition-all duration-300 shadow-sm" href="#">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#00503a] dark:text-emerald-400 group-hover:text-white">check_circle</span>
                  <span className="text-sm font-bold">Flood Response Checklist</span>
                </div>
                <span className="material-symbols-outlined !text-lg opacity-40 group-hover:opacity-100">download</span>
              </a>
              <a className="group flex items-center justify-between p-4 bg-white dark:bg-slate-800 rounded-xl hover:bg-[#00503a] hover:text-white dark:hover:bg-emerald-900 transition-all duration-300 shadow-sm" href="#">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#00503a] dark:text-emerald-400 group-hover:text-white">radio</span>
                  <span className="text-sm font-bold">Radio Protocol Guide</span>
                </div>
                <span className="material-symbols-outlined !text-lg opacity-40 group-hover:opacity-100">download</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Simulations Grid */}
      <section className="mt-16 mb-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-black font-headline text-[#00503a] dark:text-emerald-400 tracking-tight">Interactive Simulations</h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm">Real-time virtual training for hardware and software systems.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Sim 1 */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 hover:border-[#00503a]/40 dark:hover:border-emerald-500/40 transition-all cursor-pointer group shadow-sm">
            <div className="w-12 h-12 rounded-lg bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center mb-6 group-hover:bg-[#00503a] group-hover:text-white transition-colors text-emerald-700 dark:text-emerald-400">
              <span className="material-symbols-outlined">campaign</span>
            </div>
            <h3 className="text-lg font-bold font-headline mb-2 text-slate-900 dark:text-white">Siren Activation Protocol</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">Step-by-step simulation of the multi-stage siren activation for local districts.</p>
            <div className="flex items-center gap-2 text-xs font-bold text-[#00503a] dark:text-emerald-400">
              <span>RUN SIMULATION</span>
              <span className="material-symbols-outlined !text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
            </div>
          </div>

          {/* Sim 2 */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 hover:border-[#00503a]/40 dark:hover:border-emerald-500/40 transition-all cursor-pointer group shadow-sm">
            <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors text-blue-700 dark:text-blue-400">
              <span className="material-symbols-outlined">record_voice_over</span>
            </div>
            <h3 className="text-lg font-bold font-headline mb-2 text-slate-900 dark:text-white">TTS Dialect Selection</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">Practice optimizing Text-to-Speech regional accents for maximum clarity during alerts.</p>
            <div className="flex items-center gap-2 text-xs font-bold text-[#00503a] dark:text-emerald-400">
              <span>RUN SIMULATION</span>
              <span className="material-symbols-outlined !text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
            </div>
          </div>

          {/* Sim 3 */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 hover:border-[#00503a]/40 dark:hover:border-emerald-500/40 transition-all cursor-pointer group shadow-sm">
            <div className="w-12 h-12 rounded-lg bg-orange-100 dark:bg-orange-900/50 flex items-center justify-center mb-6 group-hover:bg-orange-600 group-hover:text-white transition-colors text-orange-700 dark:text-orange-400">
              <span className="material-symbols-outlined">battery_charging_full</span>
            </div>
            <h3 className="text-lg font-bold font-headline mb-2 text-slate-900 dark:text-white">Battery Backup Maintenance</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">Virtual walkthrough of solar-to-battery relay switching and maintenance cycles.</p>
            <div className="flex items-center gap-2 text-xs font-bold text-[#00503a] dark:text-emerald-400">
              <span>RUN SIMULATION</span>
              <span className="material-symbols-outlined !text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
