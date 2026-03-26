import React, { useState } from 'react';

export default function Alerts() {
  const [isSent, setIsSent] = useState(false);

  const handleSend = () => {
    setIsSent(true);
    setTimeout(() => {
      setIsSent(false);
    }, 3000);
  };

  return (
    <main className="bg-surface p-4 md:p-8 min-h-[calc(100vh-64px)] relative">
      {/* Success Popup */}
      {isSent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-surface p-8 rounded-2xl shadow-2xl max-w-sm w-full text-center transform animate-in fade-in zoom-in duration-300">
            <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="material-symbols-outlined text-4xl">check_circle</span>
            </div>
            <h2 className="font-headline text-2xl font-black text-on-surface mb-2">Alert Sent</h2>
            <p className="text-on-surface-variant font-body text-sm mb-6">
              The emergency alert has been successfully transmitted to the LoRa network.
            </p>
            <button 
              onClick={() => setIsSent(false)}
              className="w-full py-3 bg-primary text-white rounded-xl font-bold hover:bg-primary-container transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto">
        <header className="mb-10">
          <h1 className="font-headline text-3xl font-black tracking-tight text-on-background">Alert Creation & Intelligence</h1>
          <p className="text-on-surface-variant font-body">Deploy critical information across the national resilience infrastructure.</p>
        </header>

        <div className="grid grid-cols-12 gap-8 items-start">
          {/* Left Column: Workflow */}
          <div className="col-span-12 lg:col-span-7 space-y-8">
            {/* Step 1: Select Hazard */}
            <section className="bg-surface-container-low p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="bg-primary text-white w-7 h-7 flex items-center justify-center rounded-full text-xs font-bold">1</span>
                <h2 className="font-headline font-bold text-lg">Select Hazard Type</h2>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <button className="flex flex-col items-center gap-3 p-6 bg-surface-container-lowest rounded-lg border-2 border-secondary-container ring-2 ring-secondary-container ring-offset-2 transition-all">
                  <span className="material-symbols-outlined text-4xl text-secondary">water_drop</span>
                  <span className="font-label text-xs font-bold tracking-widest uppercase">Flood</span>
                </button>
                <button className="flex flex-col items-center gap-3 p-6 bg-surface-container-lowest rounded-lg hover:bg-surface-bright transition-all">
                  <span className="material-symbols-outlined text-4xl text-on-surface-variant">cyclone</span>
                  <span className="font-label text-xs font-bold tracking-widest uppercase">Cyclone</span>
                </button>
                <button className="flex flex-col items-center gap-3 p-6 bg-surface-container-lowest rounded-lg hover:bg-surface-bright transition-all">
                  <span className="material-symbols-outlined text-4xl text-on-surface-variant">landslide</span>
                  <span className="font-label text-xs font-bold tracking-widest uppercase">Landslide</span>
                </button>
              </div>
            </section>

            {/* Step 2: Target Area */}
            <section className="bg-surface-container-low rounded-xl overflow-hidden">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="bg-primary text-white w-7 h-7 flex items-center justify-center rounded-full text-xs font-bold">2</span>
                    <h2 className="font-headline font-bold text-lg">Target Area Selection</h2>
                  </div>
                  <div className="flex gap-2">
                    <button className="text-xs bg-surface-container-high px-3 py-1.5 rounded font-bold hover:bg-surface-container-highest">DRAW POLYGON</button>
                    <button className="text-xs bg-surface-container-high px-3 py-1.5 rounded font-bold hover:bg-surface-container-highest">SELECT DISTRICTS</button>
                  </div>
                </div>
              </div>
              <div className="relative h-[400px] bg-slate-200">
                <img className="w-full h-full object-cover grayscale brightness-75 contrast-125" data-alt="Detailed topographical map of Bangladesh showing river delta systems and coastal regions with a digital overlay of alert zones" data-location="Bangladesh" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCg0dLF4AFOx8zDyNL8QF-PPIbfY1dNKCstascX6cqBduVqRVALOPF8D1DJzFc076gw66o2i9e-UN98t9YNYrlSuMX6EzDLdjhWpV4PpxZGpmsIGQho-TNVt8h1z1DWktnlweROKNMjW0VeWYxBAxuuJhCpFZCjw3KQ9FElJ2PU3Bem_FeGvUXSledIwnoyiY7R4OXh9vMMuIa8uocZ3jq_Uao2G5Y8EMz1ytqp6ANsWKStz7psL0ns8bH1OOIQ70G2Yg_7tO7pu6F_" />
                {/* Map UI Overlays */}
                <div className="absolute top-4 right-4 flex flex-col gap-2">
                  <button className="glass-panel p-2 rounded-lg shadow-sm">
                    <span className="material-symbols-outlined">add</span>
                  </button>
                  <button className="glass-panel p-2 rounded-lg shadow-sm">
                    <span className="material-symbols-outlined">remove</span>
                  </button>
                </div>
                <div className="absolute bottom-6 left-6 glass-panel p-4 rounded-xl shadow-lg flex items-center gap-4">
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase font-bold text-on-surface-variant tracking-widest">Active Selection</span>
                    <span className="text-sm font-bold">Barisal & Bhola Districts</span>
                  </div>
                  <div className="h-8 w-px bg-outline-variant/30"></div>
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase font-bold text-on-surface-variant tracking-widest">Estimated Pop.</span>
                    <span className="text-sm font-bold text-primary">1.2M People</span>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column: Intelligence & Severity */}
          <div className="col-span-12 lg:col-span-5 space-y-8">
            {/* Intelligence Panel */}
            <section className="bg-surface-container-lowest p-8 rounded-xl border-l-4 border-primary shadow-xl">
              <div className="flex items-center justify-between mb-8">
                <h2 className="font-headline font-black text-xl tracking-tight">Intelligence Engine</h2>
                <span className="bg-primary-container text-on-primary-container text-[10px] px-2 py-1 rounded font-black tracking-tighter">AI ASSISTED</span>
              </div>
              <div className="space-y-6">
                <div>
                  <label className="text-[10px] font-black uppercase text-on-surface-variant tracking-widest mb-2 block">Technical Input (English)</label>
                  <div className="bg-surface-container-low p-4 rounded-lg font-body text-sm italic text-on-surface-variant leading-relaxed">
                    "Significant water level rise expected in Meghna river basin. Probability of overflow 85% within next 12 hours. Advise immediate evacuation."
                  </div>
                </div>
                <div className="relative">
                  <span className="absolute -top-3 left-4 bg-surface-container-lowest px-2 text-[10px] font-black text-primary tracking-widest uppercase">Localized Output (Bangla)</span>
                  <div className="bg-primary/5 p-6 rounded-lg border border-primary/20">
                    <p className="font-body text-lg font-bold leading-relaxed text-primary">
                      মেঘনা নদীর পানি দ্রুত বাড়ছে। আগামী ১২ ঘণ্টার মধ্যে বড় ধরনের বন্যা হতে পারে। সবাই এখনই নিরাপদ আশ্রয়ে চলে যান।
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <button className="flex items-center gap-2 text-primary font-bold text-xs hover:underline">
                        <span className="material-symbols-outlined text-sm">volume_up</span> Play Dialect Audio
                      </button>
                      <button className="text-[10px] font-bold text-on-surface-variant flex items-center gap-1">
                        <span className="material-symbols-outlined text-sm">edit</span> Edit Translation
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Severity Selector */}
            <section className="bg-surface-container-low p-6 rounded-xl">
              <h2 className="font-headline font-bold text-sm mb-4 uppercase tracking-widest text-on-surface-variant">Severity Level</h2>
              <div className="space-y-3">
                <label className="flex items-center justify-between p-4 bg-surface-container-lowest rounded-lg cursor-pointer border-2 border-transparent hover:border-outline-variant transition-all">
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded-full bg-yellow-500"></div>
                    <span className="font-bold text-sm">Warning</span>
                  </div>
                  <input className="text-primary focus:ring-primary" name="severity" type="radio" />
                </label>
                <label className="flex items-center justify-between p-4 bg-surface-container-lowest rounded-lg cursor-pointer border-2 border-transparent hover:border-outline-variant transition-all">
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded-full bg-orange-600"></div>
                    <span className="font-bold text-sm">Danger</span>
                  </div>
                  <input className="text-primary focus:ring-primary" name="severity" type="radio" />
                </label>
                <label className="flex items-center justify-between p-4 bg-surface-container-lowest rounded-lg cursor-pointer border-2 border-tertiary ring-1 ring-tertiary transition-all">
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded-full bg-tertiary"></div>
                    <span className="font-bold text-sm text-tertiary">Great Danger</span>
                  </div>
                  <input defaultChecked className="text-tertiary focus:ring-tertiary" name="severity" type="radio" />
                </label>
              </div>
            </section>

            {/* Primary Action */}
            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-2 text-xs text-on-surface-variant px-2">
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
                <span>Network Status: <strong className="text-emerald-600">LoRa Gateway Dhaka High-Pwr Online</strong></span>
              </div>
              <button 
                onClick={handleSend}
                className="w-full py-5 rounded-xl bg-gradient-to-br from-primary to-primary-container text-white font-headline font-black text-lg tracking-tight shadow-xl hover:shadow-2xl transition-all transform active:scale-[0.98] flex items-center justify-center gap-3"
              >
                Send to LoRa Network
                <span className="material-symbols-outlined">sensors_krx</span>
              </button>
              <p className="text-[10px] text-center text-on-surface-variant italic px-4">
                By clicking, you authorize immediate transmission to 14,000 public alert receivers and mobile nodes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
