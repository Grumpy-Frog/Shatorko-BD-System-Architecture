import React from 'react';

export default function Edge() {
  return (
    <main className="p-4 md:p-8 min-h-[calc(100vh-64px)] bg-surface">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-8">
          <div className="space-y-2">
            <span className="text-[0.75rem] font-bold tracking-[0.05em] uppercase text-secondary">Audio Synthesis</span>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-on-surface font-headline">Dialect Configuration Lab</h1>
            <p className="text-on-surface-variant max-w-2xl">Manage regional language models, synthesize localized warning messages, and test audio output for siren networks.</p>
          </div>
          <div className="flex gap-3">
            <button className="px-6 py-2.5 bg-surface-container-high text-on-surface font-semibold rounded-md hover:bg-surface-container-highest transition-all flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">library_music</span>
              Audio Library
            </button>
            <button className="px-6 py-2.5 bg-secondary text-on-secondary font-semibold rounded-md shadow-lg shadow-secondary/20 hover:opacity-90 transition-all flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">mic</span>
              New Synthesis
            </button>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column: Synthesis Studio */}
          <div className="lg:col-span-8 space-y-6">
            <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-outline-variant/20">
              <h3 className="text-lg font-bold flex items-center gap-2 mb-6">
                <span className="material-symbols-outlined text-secondary">record_voice_over</span>
                Message Synthesizer
              </h3>

              <div className="space-y-6">
                {/* Input Text */}
                <div className="space-y-2">
                  <label className="text-[0.65rem] font-bold tracking-[0.05em] uppercase text-outline">Warning Message (Bengali)</label>
                  <textarea 
                    className="w-full bg-surface-container-highest border-none rounded-md px-4 py-3 focus:ring-2 focus:ring-secondary/40 focus:bg-white transition-all text-on-surface font-medium resize-none h-24"
                    defaultValue="সতর্কতা! ঘূর্ণিঝড় আসছে। দয়া করে নিকটস্থ আশ্রয়কেন্দ্রে যান।"
                  ></textarea>
                </div>

                {/* Configuration Options */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-[0.65rem] font-bold tracking-[0.05em] uppercase text-outline">Target Dialect</label>
                    <select defaultValue="Chittagonian (Chatgaiya)" className="w-full bg-surface-container-highest border-none rounded-md px-4 py-2.5 focus:ring-2 focus:ring-secondary/40 focus:bg-white transition-all text-on-surface font-medium appearance-none">
                      <option>Standard Bengali</option>
                      <option>Chittagonian (Chatgaiya)</option>
                      <option>Sylheti</option>
                      <option>Noakhailla</option>
                      <option>Barishali</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[0.65rem] font-bold tracking-[0.05em] uppercase text-outline">Voice Profile</label>
                    <select className="w-full bg-surface-container-highest border-none rounded-md px-4 py-2.5 focus:ring-2 focus:ring-secondary/40 focus:bg-white transition-all text-on-surface font-medium appearance-none">
                      <option>Authoritative Male (Default)</option>
                      <option>Clear Female</option>
                      <option>Urgent Alert (Synthetic)</option>
                    </select>
                  </div>
                </div>

                {/* Synthesis Controls */}
                <div className="flex items-center justify-between pt-4 border-t border-surface-container-highest">
                  <div className="flex items-center gap-4">
                    <button className="w-12 h-12 bg-secondary text-on-secondary rounded-full flex items-center justify-center hover:bg-secondary/90 transition-colors shadow-md">
                      <span className="material-symbols-outlined">play_arrow</span>
                    </button>
                    <div>
                      <p className="text-sm font-bold">Preview Audio</p>
                      <p className="text-xs text-on-surface-variant">00:00 / 00:05</p>
                    </div>
                  </div>
                  <button className="px-6 py-2.5 bg-surface-container-high text-on-surface font-bold rounded-md hover:bg-surface-container-highest transition-colors">
                    Generate File
                  </button>
                </div>
              </div>
            </div>

            {/* Recent Syntheses */}
            <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-outline-variant/20">
              <h3 className="text-sm font-bold uppercase tracking-wider text-outline mb-4">Recent Generations</h3>
              <div className="space-y-3">
                {/* Audio Item */}
                <div className="flex items-center justify-between p-3 bg-surface-container-low rounded-lg hover:bg-surface-container-highest transition-colors group cursor-pointer">
                  <div className="flex items-center gap-4">
                    <button className="w-8 h-8 bg-surface-container-highest rounded-full flex items-center justify-center group-hover:bg-secondary group-hover:text-on-secondary transition-colors">
                      <span className="material-symbols-outlined text-sm">play_arrow</span>
                    </button>
                    <div>
                      <p className="text-sm font-bold">Cyclone Evacuation - Chittagong</p>
                      <p className="text-[0.65rem] text-on-surface-variant uppercase tracking-wider">Chatgaiya • 12s • Generated 2h ago</p>
                    </div>
                  </div>
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-1.5 text-on-surface-variant hover:text-secondary"><span className="material-symbols-outlined text-sm">download</span></button>
                    <button className="p-1.5 text-on-surface-variant hover:text-primary"><span className="material-symbols-outlined text-sm">send</span></button>
                  </div>
                </div>
                {/* Audio Item */}
                <div className="flex items-center justify-between p-3 bg-surface-container-low rounded-lg hover:bg-surface-container-highest transition-colors group cursor-pointer">
                  <div className="flex items-center gap-4">
                    <button className="w-8 h-8 bg-surface-container-highest rounded-full flex items-center justify-center group-hover:bg-secondary group-hover:text-on-secondary transition-colors">
                      <span className="material-symbols-outlined text-sm">play_arrow</span>
                    </button>
                    <div>
                      <p className="text-sm font-bold">Flood Warning - Sylhet</p>
                      <p className="text-[0.65rem] text-on-surface-variant uppercase tracking-wider">Sylheti • 08s • Generated 1d ago</p>
                    </div>
                  </div>
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-1.5 text-on-surface-variant hover:text-secondary"><span className="material-symbols-outlined text-sm">download</span></button>
                    <button className="p-1.5 text-on-surface-variant hover:text-primary"><span className="material-symbols-outlined text-sm">send</span></button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Dialect Stats & Deployment */}
          <div className="lg:col-span-4 space-y-6">
            {/* Deployment Status */}
            <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-outline-variant/20">
              <h3 className="text-sm font-bold uppercase tracking-wider text-outline mb-4">Active Deployments</h3>
              <div className="space-y-4">
                <div className="p-4 bg-surface-container-low rounded-lg border-l-2 border-secondary">
                  <div className="flex justify-between items-start mb-2">
                    <p className="text-sm font-bold">Coastal Siren Network</p>
                    <span className="px-2 py-0.5 bg-secondary-container text-on-secondary-container text-[0.6rem] font-black rounded uppercase">Live</span>
                  </div>
                  <p className="text-xs text-on-surface-variant mb-2">Currently broadcasting: Cyclone Alert (Chatgaiya)</p>
                  <div className="flex justify-between items-center text-[0.65rem] font-bold text-outline">
                    <span>Nodes: 45/45</span>
                    <button className="text-error hover:underline">Stop Broadcast</button>
                  </div>
                </div>
              </div>
              <button className="w-full mt-4 py-2 bg-secondary/10 text-secondary font-bold text-xs uppercase tracking-widest rounded hover:bg-secondary/20 transition-colors">
                Deploy New Audio
              </button>
            </div>

            {/* Dialect Coverage */}
            <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-outline-variant/20">
              <h3 className="text-sm font-bold uppercase tracking-wider text-outline mb-4">Model Accuracy</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-semibold">Standard Bengali</span>
                    <span className="text-on-surface font-bold">99%</span>
                  </div>
                  <div className="w-full bg-surface-container-highest rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '99%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-semibold">Chittagonian</span>
                    <span className="text-secondary font-bold">92%</span>
                  </div>
                  <div className="w-full bg-surface-container-highest rounded-full h-2">
                    <div className="bg-secondary h-2 rounded-full" style={{ width: '92%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-semibold">Sylheti</span>
                    <span className="text-tertiary font-bold">88%</span>
                  </div>
                  <div className="w-full bg-surface-container-highest rounded-full h-2">
                    <div className="bg-tertiary h-2 rounded-full" style={{ width: '88%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-semibold">Noakhailla</span>
                    <span className="text-error font-bold">75%</span>
                  </div>
                  <div className="w-full bg-surface-container-highest rounded-full h-2">
                    <div className="bg-error h-2 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
              </div>
              <p className="text-[0.65rem] text-on-surface-variant mt-4 italic text-center">Accuracy based on community feedback and linguistic review.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
