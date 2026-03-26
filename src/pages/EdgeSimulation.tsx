import React, { useState } from 'react';

export default function EdgeSimulation() {
  const [activeDialect, setActiveDialect] = useState('CTG');
  const [sirenActive, setSirenActive] = useState(false);
  const [lightActive, setLightActive] = useState(false);
  const [acknowledged, setAcknowledged] = useState(false);

  return (
    <main className="p-4 md:p-8 min-h-[calc(100vh-64px)] bg-surface">
      <div className="max-w-7xl mx-auto">
        {/* Header Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-surface-container-low p-5 rounded-xl flex items-center justify-between border-l-4 border-primary shadow-sm">
            <div>
              <div className="text-[10px] font-bold text-outline uppercase tracking-wider mb-1">Accuracy</div>
              <div className="text-2xl font-headline font-extrabold text-primary">98.4%</div>
            </div>
            <span className="material-symbols-outlined text-primary/40 text-4xl">target</span>
          </div>
          <div className="bg-surface-container-low p-5 rounded-xl flex items-center justify-between border-l-4 border-secondary shadow-sm">
            <div>
              <div className="text-[10px] font-bold text-outline uppercase tracking-wider mb-1">Time to Respond</div>
              <div className="text-2xl font-headline font-extrabold text-secondary">0.42s</div>
            </div>
            <span className="material-symbols-outlined text-secondary/40 text-4xl">timer</span>
          </div>
          <div className="bg-surface-container-low p-5 rounded-xl flex items-center justify-between border-l-4 border-primary-container shadow-sm">
            <div>
              <div className="text-[10px] font-bold text-outline uppercase tracking-wider mb-1">Readiness Score</div>
              <div className="text-2xl font-headline font-extrabold text-primary-container">ALPHA-1</div>
            </div>
            <span className="material-symbols-outlined text-primary-container/40 text-4xl">verified_user</span>
          </div>
        </div>

        {/* Simulation Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left: Scenario Feed */}
          <div className="lg:col-span-3 space-y-6">
            <h3 className="font-headline font-bold text-primary flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">dynamic_feed</span>
              SCENARIO FEED
            </h3>
            <div className="space-y-4">
              <div className="bg-tertiary-fixed p-4 rounded-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-2 opacity-20">
                  <span className="material-symbols-outlined text-4xl">cyclone</span>
                </div>
                <div className="text-[10px] font-bold text-tertiary uppercase mb-1">Priority 01</div>
                <p className="text-sm font-semibold text-on-tertiary-fixed">Cyclone Mocha approaching coastal sector 7-B.</p>
                <p className="text-[10px] text-on-tertiary-fixed-variant mt-2">TIMESTAMP: 14:02:11</p>
              </div>
              <div className="bg-surface-container-highest p-4 rounded-xl border-l-2 border-primary">
                <div className="text-[10px] font-bold text-primary uppercase mb-1">Network Status</div>
                <p className="text-sm font-medium text-on-surface">LoRa Signal Strength: -110dBm</p>
                <div className="w-full bg-outline-variant h-1 mt-2 rounded-full overflow-hidden">
                  <div className="bg-primary h-full w-[35%]"></div>
                </div>
              </div>
              <div className="bg-surface-container-highest p-4 rounded-xl border-l-2 border-secondary">
                <div className="text-[10px] font-bold text-secondary uppercase mb-1">Telemetry</div>
                <p className="text-sm font-medium text-on-surface">Wind Velocity: 142km/h</p>
                <p className="text-[10px] text-outline mt-1">Sustained at 10m altitude</p>
              </div>
            </div>
          </div>

          {/* Center: Virtual Edge Device */}
          <div className="lg:col-span-6 flex flex-col items-center">
            <div className="relative w-full max-w-md aspect-[4/5] bg-neutral-900 rounded-[2rem] p-8 shadow-2xl border-t-8 border-neutral-800 flex flex-col items-center">
              {/* Brand Label on Device */}
              <div className="text-neutral-500 font-headline text-[10px] tracking-[0.3em] mb-6">SHATORKO | EDGE-V3</div>
              
              {/* Digital LCD Screen */}
              <div className="w-full aspect-video bg-[#0c1a15] rounded-xl border-4 border-neutral-800 p-4 shadow-inner flex flex-col justify-between overflow-hidden relative">
                <div className="absolute inset-0 bg-emerald-500/5 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.1) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.03), rgba(0, 255, 0, 0.01), rgba(0, 0, 255, 0.03))', backgroundSize: '100% 2px, 3px 100%' }}></div>
                <div className="flex justify-between items-start z-10">
                  <span className="text-[10px] text-emerald-500/80 font-mono">SYS_BOOT: OK</span>
                  <span className="text-[10px] text-emerald-500/80 font-mono">LORA: ACT</span>
                </div>
                <div className="flex flex-col items-center z-10">
                  <div className="text-emerald-400 text-lg font-mono tracking-widest uppercase">Select Audio</div>
                  <div className="text-emerald-500 font-mono text-xs mt-1 animate-pulse">
                    {activeDialect === 'CTG' ? 'CHITTAGONIAN_V2.MP3' : activeDialect === 'BAR' ? 'BARISAL_V1.MP3' : 'SYLHETI_V3.MP3'}
                  </div>
                </div>
                <div className="w-full h-8 flex items-end gap-1 z-10">
                  <div className={`flex-1 ${sirenActive ? 'bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.5)]' : 'bg-emerald-900/40'} h-1 transition-all`}></div>
                  <div className={`flex-1 ${sirenActive ? 'bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.5)]' : 'bg-emerald-900/40'} h-3 transition-all`}></div>
                  <div className={`flex-1 ${sirenActive ? 'bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.5)]' : 'bg-emerald-900/40'} h-6 transition-all`}></div>
                  <div className={`flex-1 ${sirenActive ? 'bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.5)]' : 'bg-emerald-900/40'} h-4 transition-all`}></div>
                  <div className={`flex-1 ${sirenActive ? 'bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.5)]' : 'bg-emerald-900/40'} h-2 transition-all`}></div>
                </div>
              </div>

              {/* Device Controls */}
              <div className="grid grid-cols-2 gap-6 w-full mt-10">
                {/* Main Activation Buttons */}
                <button 
                  onClick={() => setSirenActive(!sirenActive)}
                  className={`${sirenActive ? 'bg-tertiary translate-y-2 shadow-none' : 'bg-tertiary-container shadow-[0_8px_0_0_#90000d]'} aspect-square rounded-full flex flex-col items-center justify-center border-4 border-black/20 transition-all`}
                >
                  <span className="material-symbols-outlined text-white text-4xl">notifications_active</span>
                  <span className="text-[10px] text-white font-bold mt-2">SIREN</span>
                </button>
                <button 
                  onClick={() => setLightActive(!lightActive)}
                  className={`${lightActive ? 'bg-primary translate-y-2 shadow-none' : 'bg-primary-container shadow-[0_8px_0_0_#00503a]'} aspect-square rounded-full flex flex-col items-center justify-center border-4 border-black/20 transition-all`}
                >
                  <span className="material-symbols-outlined text-white text-4xl">lightbulb</span>
                  <span className="text-[10px] text-white font-bold mt-2">LIGHT</span>
                </button>

                {/* Tactical Toggle / Dialect Select */}
                <div className="col-span-2 bg-neutral-800 p-4 rounded-2xl flex items-center justify-between border-b-4 border-black/40">
                  <span className="text-neutral-400 font-headline text-xs font-bold">DIALECT SELECT</span>
                  <div className="flex gap-2">
                    {['CTG', 'BAR', 'SYL'].map(dialect => (
                      <button 
                        key={dialect}
                        onClick={() => setActiveDialect(dialect)}
                        className={`px-4 py-2 rounded text-[10px] font-bold transition-colors ${activeDialect === dialect ? 'bg-neutral-700 text-emerald-500 border border-emerald-500/30' : 'bg-neutral-900 text-neutral-500'}`}
                      >
                        {dialect}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Acknowledge Button */}
                <button 
                  onClick={() => setAcknowledged(true)}
                  className={`col-span-2 py-4 rounded-xl font-headline font-extrabold tracking-widest text-sm transition-all ${acknowledged ? 'bg-secondary-container text-white translate-y-1.5 shadow-none' : 'bg-secondary text-white shadow-[0_6px_0_0_#004493] active:shadow-none active:translate-y-1.5'}`}
                >
                  {acknowledged ? 'ACKNOWLEDGED' : 'ACKNOWLEDGE ALERT'}
                </button>
              </div>

              {/* Status LEDs */}
              <div className="absolute bottom-6 flex gap-4">
                <div className={`w-2 h-2 rounded-full ${sirenActive ? 'bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)]' : 'bg-neutral-700'}`}></div>
                <div className={`w-2 h-2 rounded-full ${lightActive ? 'bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)]' : 'bg-neutral-700'}`}></div>
                <div className={`w-2 h-2 rounded-full ${acknowledged ? 'bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)]' : 'bg-neutral-700'}`}></div>
              </div>
            </div>
          </div>

          {/* Right: Procedure Checklist */}
          <div className="lg:col-span-3 space-y-6">
            <h3 className="font-headline font-bold text-primary flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">assignment_turned_in</span>
              PROCEDURE CHECKLIST
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-4 bg-surface-container-low rounded-xl opacity-60">
                <span className="material-symbols-outlined text-emerald-600" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                <div className="text-sm">
                  <div className="font-bold text-primary">01. Packet Integrity</div>
                  <div class="text-xs text-on-surface-variant">Verify LoRa CRC checksum matches expected master-key.</div>
                </div>
              </div>
              <div className={`flex items-start gap-3 p-4 rounded-xl transition-all ${activeDialect === 'CTG' ? 'bg-surface-container-low opacity-60' : 'bg-primary-fixed border-2 border-primary ring-4 ring-primary-fixed/30'}`}>
                {activeDialect === 'CTG' ? (
                  <span className="material-symbols-outlined text-emerald-600" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                ) : (
                  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white text-[10px] font-bold shrink-0">02</div>
                )}
                <div className="text-sm">
                  <div className={`font-bold ${activeDialect === 'CTG' ? 'text-primary' : 'text-on-primary-fixed'}`}>Select Regional Dialect</div>
                  <div className={`text-xs ${activeDialect === 'CTG' ? 'text-on-surface-variant' : 'text-on-primary-fixed-variant'}`}>Current requirement: Chittagonian (CTG_V2).</div>
                </div>
              </div>
              <div className={`flex items-start gap-3 p-4 rounded-xl transition-all ${sirenActive ? 'bg-surface-container-low opacity-60' : activeDialect === 'CTG' ? 'bg-primary-fixed border-2 border-primary ring-4 ring-primary-fixed/30' : 'bg-surface-container-low opacity-40'}`}>
                {sirenActive ? (
                  <span className="material-symbols-outlined text-emerald-600" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                ) : (
                  <div className={`flex items-center justify-center w-6 h-6 rounded-full ${activeDialect === 'CTG' ? 'bg-primary text-white' : 'bg-outline-variant text-on-surface'} text-[10px] font-bold shrink-0`}>03</div>
                )}
                <div className="text-sm">
                  <div className={`font-bold ${activeDialect === 'CTG' && !sirenActive ? 'text-on-primary-fixed' : 'text-outline'}`}>Trigger Siren Level 3</div>
                  <div className={`text-xs ${activeDialect === 'CTG' && !sirenActive ? 'text-on-primary-fixed-variant' : 'text-outline'}`}>Execute activation only after dialect confirmation.</div>
                </div>
              </div>
              <div className={`flex items-start gap-3 p-4 rounded-xl transition-all ${acknowledged ? 'bg-surface-container-low opacity-60' : sirenActive ? 'bg-primary-fixed border-2 border-primary ring-4 ring-primary-fixed/30' : 'bg-surface-container-low opacity-40'}`}>
                {acknowledged ? (
                  <span className="material-symbols-outlined text-emerald-600" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                ) : (
                  <div className={`flex items-center justify-center w-6 h-6 rounded-full ${sirenActive ? 'bg-primary text-white' : 'bg-outline-variant text-on-surface'} text-[10px] font-bold shrink-0`}>04</div>
                )}
                <div className="text-sm">
                  <div className={`font-bold ${sirenActive && !acknowledged ? 'text-on-primary-fixed' : 'text-outline'}`}>Final Broadcast</div>
                  <div className={`text-xs ${sirenActive && !acknowledged ? 'text-on-primary-fixed-variant' : 'text-outline'}`}>Await LoRa confirmation packet for siren deployment.</div>
                </div>
              </div>
            </div>

            {/* Performance Hint Card */}
            <div className="bg-surface-container-highest p-5 rounded-xl mt-8">
              <h4 className="text-xs font-bold text-primary mb-3">COMMANDER'S BRIEF</h4>
              <p className="text-xs text-on-surface-variant leading-relaxed italic">
                "In high-stress scenarios, the cognitive load can lead to dialect errors. Always check the checklist before triggering the physical siren button."
              </p>
            </div>
          </div>
        </div>

        {/* Training Footer Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-8">
            <div className="bg-primary p-8 rounded-2xl flex flex-col md:flex-row items-center gap-8 relative overflow-hidden">
              <div className="absolute -right-10 -bottom-10 opacity-10">
                <span className="material-symbols-outlined text-[12rem]">shield</span>
              </div>
              <div className="flex-shrink-0 z-10">
                <img 
                  className="w-24 h-24 rounded-full border-4 border-white/20 shadow-lg object-cover" 
                  alt="Training Badge" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUFxHyEkj0qgi4miYui_Og5_sRimBSI0T1K4QFDSneQB8yCfXrCjdjIufXq4JL0F0sOa0Yuu0Ssfe3h_-nwb4Cv3x-rD8kwhBhVEa1vI5HQuIceU98AfxBTRiCt4Hwi9FMem-2-kO96UhehyHWgaYzkCH9CF1gsK0x691ULQ6Il5XO-kf0OTVrKdG4GRfNG8Iwiw8ro6sq2w-EkAndcO3r8WnrDqMcAx8Sod12DjH-tP-D03TlYwOFSUoXWvoRI_tNkAbi2yo1Q_OF"
                />
              </div>
              <div className="text-white z-10 text-center md:text-left">
                <h2 className="font-headline font-extrabold text-2xl mb-2">ADVANCED EDGE CERTIFICATION</h2>
                <p className="text-emerald-100 text-sm max-w-lg opacity-90">
                  You are currently in the Elite Responder Simulation track. Completing this module with an Accuracy &gt;95% will unlock field deployment status for Unit-072.
                </p>
              </div>
              <button className="md:ml-auto bg-white text-primary px-8 py-3 rounded-xl font-bold text-xs tracking-widest hover:bg-emerald-50 transition-colors z-10 whitespace-nowrap">
                DOWNLOAD RESULTS
              </button>
            </div>
          </div>
          <div className="md:col-span-4 bg-surface-container-low p-6 rounded-2xl flex flex-col gap-4 border border-outline-variant/20">
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold text-outline">SESSION LOGS</span>
              <span className="text-[10px] text-primary px-2 py-0.5 bg-primary-fixed rounded font-bold">LIVE</span>
            </div>
            <div className="font-mono text-[10px] text-on-surface-variant space-y-2">
              <div>[14:02:44] Dialect check pending...</div>
              <div>[14:02:45] Signal stability: 89%</div>
              <div>[14:02:46] Waiting for operator input [DIALECT]</div>
              {activeDialect !== 'CTG' && <div className="text-tertiary">[14:02:48] Dialect selected: {activeDialect}</div>}
              {activeDialect === 'CTG' && <div className="text-primary">[14:02:48] Dialect verified: CTG</div>}
              {sirenActive && <div className="text-primary">[14:02:50] Siren activated</div>}
              {acknowledged && <div className="text-primary">[14:02:52] Alert acknowledged</div>}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
