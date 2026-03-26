import React from 'react';
import { Link } from 'react-router-dom';

export default function PublicPortal() {
  return (
    <div className="bg-background text-on-background font-body antialiased min-h-screen">
      {/* Top Navigation Bar */}
      <header className="bg-[#00503a] dark:bg-slate-950 flex justify-between items-center w-full px-8 py-4 max-w-full mx-auto shadow-[0px_24px_48px_rgba(27,28,28,0.06)] sticky top-0 z-50">
        <div className="flex items-center gap-6">
          <Link to="/" className="text-white/80 hover:text-white flex items-center gap-2 transition-colors" title="Back to Home">
            <span className="material-symbols-outlined">arrow_back</span>
            <span className="font-label text-sm font-bold hidden sm:inline">Back</span>
          </Link>
          <div className="text-xl font-black tracking-tighter text-white font-headline">SENTINEL</div>
        </div>
        <nav className="hidden md:flex gap-8 items-center">
          <a className="font-headline font-bold tracking-tight text-white border-b-2 border-white pb-1" href="#">Live Alerts</a>
          <a className="font-headline font-bold tracking-tight text-emerald-100/80 hover:text-white transition-colors" href="#">Find Shelters</a>
          <a className="font-headline font-bold tracking-tight text-emerald-100/80 hover:text-white transition-colors" href="#">Preparedness</a>
          <a className="font-headline font-bold tracking-tight text-emerald-100/80 hover:text-white transition-colors" href="#">Emergency Contacts</a>
        </nav>
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-lg text-white font-label text-sm font-semibold transition-all">
            <span className="material-symbols-outlined text-sm">language</span>
            EN / বাংলা
          </button>
          <button className="bg-tertiary text-on-tertiary px-6 py-2.5 rounded-lg font-headline font-bold text-sm tracking-wide shadow-lg hover:scale-95 duration-150 ease-in-out">
            Emergency Status
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 md:px-8 py-8 space-y-14">
        {/* Hero: Current Risk Level */}
        <section className="relative overflow-hidden rounded-xl bg-tertiary p-8 md:p-14 text-white shadow-2xl flex flex-col md:flex-row items-center gap-8">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <img className="w-full h-full object-cover" alt="dramatic dark storm clouds gathering over a coastal region with heavy wind and rain intensity" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8JaKpS3o4M3_lzDH1Wv2vRh_HDNWU3aCooYzntMnH37qgad0uzPYff9p5K9h4Cg12xcoHi3RDHSNZjIMw-5Ht4lC93NKrkqaj7YwiKErQvn3ssrw29KgC9f7Cr8GPza64p9I974V78x6JSyEBYJ5TLLZAw_oLMGMvvCJ9SOBogvjcf4WZ3u3TRifBVdprFiJBDQfF9THPHPouLDOSGx3klLqwsukf93upnmkMlXIkyAIKX4B25av3yEWfCJaTe7zz2WZ-5Wh2tgoR"/>
          </div>
          <div className="relative z-10 flex-1 space-y-4 text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>warning</span>
              <span className="font-label text-xs font-black tracking-[0.1em] uppercase">Level 4 Critical Alert</span>
            </div>
            <h1 className="font-headline font-black text-5xl md:text-7xl leading-tight tracking-tighter">
              WARNING: CYCLONE EXPECTED IN 6 HOURS
            </h1>
            <p className="text-xl text-white/90 max-w-2xl font-body leading-relaxed">
              Severe Cyclonic Storm 'MOCHA' is approaching the Chattogram coast. Evacuation is mandatory for Zone A and B residents.
            </p>
          </div>
          <div className="relative z-10 flex flex-col gap-4 min-w-[280px]">
            <button className="bg-white text-tertiary px-8 py-5 rounded-lg font-headline font-black text-xl flex items-center justify-center gap-3 shadow-xl hover:bg-surface-container-lowest transition-all">
              Find Shelter Now
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
            <div className="bg-black/20 backdrop-blur-md p-4 rounded-lg flex items-center justify-center gap-3">
              <span className="material-symbols-outlined text-white/70">timer</span>
              <span className="font-label text-sm font-bold">Updated 2 mins ago</span>
            </div>
          </div>
        </section>

        {/* Live Alert Feed & Shelter Finder Asymmetric Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-8">
          {/* Live Alert Feed */}
          <section className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="font-headline font-extrabold text-3xl tracking-tight text-primary flex items-center gap-3">
                Live Alert Feed
                <span className="w-2 h-2 bg-tertiary rounded-full inline-block"></span>
              </h2>
              <span className="text-on-surface-variant font-label text-sm font-semibold">Real-time Updates</span>
            </div>
            <div className="space-y-4">
              {/* Alert Item 1 */}
              <div className="bg-white p-6 rounded-xl shadow-[0px_12px_24px_rgba(0,0,0,0.03)] flex gap-5 items-start">
                <div className="bg-tertiary-fixed text-on-tertiary-fixed p-3 rounded-lg">
                  <span className="material-symbols-outlined">notifications_active</span>
                </div>
                <div className="space-y-2 flex-1">
                  <div className="flex justify-between items-center">
                    <span className="font-label text-xs font-bold text-tertiary uppercase tracking-wider">High Impact</span>
                    <span className="text-xs text-on-surface-variant">10:45 AM</span>
                  </div>
                  <p className="text-lg font-semibold leading-snug">ঘূর্ণিঝড় মোখা: উপকূলীয় অঞ্চলের বাসিন্দাদের দ্রুত নিকটস্থ সাইক্লোন শেল্টারে যাওয়ার নির্দেশ দেয়া হচ্ছে।</p>
                  <p className="text-on-surface-variant text-sm italic">Cyclone Mocha: Coastal residents are advised to move to nearest shelters immediately.</p>
                </div>
              </div>
              
              {/* Alert Item 2 */}
              <div className="bg-white p-6 rounded-xl shadow-[0px_12px_24px_rgba(0,0,0,0.03)] flex gap-5 items-start">
                <div className="bg-secondary-fixed text-on-secondary-fixed p-3 rounded-lg">
                  <span className="material-symbols-outlined">waves</span>
                </div>
                <div className="space-y-2 flex-1">
                  <div className="flex justify-between items-center">
                    <span className="font-label text-xs font-bold text-secondary uppercase tracking-wider">Weather Update</span>
                    <span className="text-xs text-on-surface-variant">09:15 AM</span>
                  </div>
                  <p className="text-lg font-semibold leading-snug">সাগর উত্তাল থাকবে, সব ধরনের নৌযানকে উপকূলে নিরাপদ আশ্রয়ে থাকতে বলা হয়েছে।</p>
                  <p className="text-on-surface-variant text-sm italic">Sea will remain rough, all vessels advised to remain in safe harbor.</p>
                </div>
              </div>
              
              {/* Alert Item 3 */}
              <div className="bg-white p-6 rounded-xl shadow-[0px_12px_24px_rgba(0,0,0,0.03)] flex gap-5 items-start">
                <div className="bg-primary-fixed text-on-primary-fixed p-3 rounded-lg">
                  <span className="material-symbols-outlined">medical_services</span>
                </div>
                <div className="space-y-2 flex-1">
                  <div className="flex justify-between items-center">
                    <span className="font-label text-xs font-bold text-primary uppercase tracking-wider">Health</span>
                    <span className="text-xs text-on-surface-variant">08:00 AM</span>
                  </div>
                  <p className="text-lg font-semibold leading-snug">প্রাথমিক চিকিৎসা সরঞ্জাম এবং শুকনো খাবার প্রস্তুত রাখুন।</p>
                  <p className="text-on-surface-variant text-sm italic">Keep first aid kits and dry food ready.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Shelter Finder Map Module */}
          <section className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="font-headline font-extrabold text-3xl tracking-tight text-primary">Shelter Finder</h2>
              <span className="text-secondary font-label text-sm font-bold flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">my_location</span>
                Near You
              </span>
            </div>
            <div className="bg-surface-container-high rounded-xl overflow-hidden shadow-lg h-[540px] relative group">
              <img className="w-full h-full object-cover" alt="overhead map view of a coastal city area with marked medical points and shelter locations" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYkB8zHralBKFTeHk7YemQ1BuAM6Z0nLclVdReoUYEPFl3wfibSrbbOTu1SVwCJiti08NKR9f8adPR6tShJLbWmF_tjueweKPtyHx-RgpwH1q_Xd8OPgB1yxJrq26ujpMmNVfGrKqn5ggoBmV_ozflZy1DCo0unZUVVivALNhcr10kDYOuQJ_uZ-RT3nCCo50-g7uI0DghqB9XNkRs1ZdvHsHO95g3piP3-upKHq9j7JaLlCAZKJ6-DlYmAr7cKlRgwdAVDyfvvfEo"/>
              {/* Floating Map Controls */}
              <div className="absolute top-4 right-4 flex flex-col gap-2">
                <button className="w-10 h-10 bg-white rounded-lg shadow-md flex items-center justify-center text-on-surface hover:bg-surface-container-low transition-colors">
                  <span className="material-symbols-outlined">add</span>
                </button>
                <button className="w-10 h-10 bg-white rounded-lg shadow-md flex items-center justify-center text-on-surface hover:bg-surface-container-low transition-colors">
                  <span className="material-symbols-outlined">remove</span>
                </button>
              </div>
              {/* Overlay Shelter Cards */}
              <div className="absolute bottom-4 left-4 right-4 flex flex-col gap-3">
                <div className="backdrop-blur-xl bg-[#fcf9f8]/80 p-4 rounded-xl shadow-2xl flex items-center justify-between">
                  <div className="space-y-1">
                    <h4 className="font-headline font-extrabold text-primary">Model High School Shelter</h4>
                    <div className="flex items-center gap-3">
                      <span className="bg-emerald-100 text-emerald-800 text-[10px] font-black px-2 py-0.5 rounded uppercase">Open</span>
                      <span className="font-label text-xs text-on-surface-variant">Capacity: 75% Full</span>
                    </div>
                  </div>
                  <button className="bg-primary text-white p-3 rounded-lg shadow-md">
                    <span className="material-symbols-outlined">directions</span>
                  </button>
                </div>
                <div className="backdrop-blur-xl bg-[#fcf9f8]/80 p-4 rounded-xl shadow-2xl flex items-center justify-between opacity-90">
                  <div className="space-y-1">
                    <h4 className="font-headline font-extrabold text-primary">District Library Hall</h4>
                    <div className="flex items-center gap-3">
                      <span className="bg-tertiary-fixed text-on-tertiary-fixed text-[10px] font-black px-2 py-0.5 rounded uppercase">Almost Full</span>
                      <span className="font-label text-xs text-on-surface-variant">Capacity: 98% Full</span>
                    </div>
                  </div>
                  <button className="bg-primary text-white p-3 rounded-lg shadow-md">
                    <span className="material-symbols-outlined">directions</span>
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* How to Prepare - Bento Style */}
        <section className="space-y-8 pt-8 border-t border-outline-variant/30">
          <div className="text-center space-y-2">
            <h2 className="font-headline font-black text-4xl tracking-tighter text-primary">How to Prepare</h2>
            <p className="text-on-surface-variant max-w-xl mx-auto">Follow these standard operating procedures to ensure your family's safety during the emergency period.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pack a Kit */}
            <div className="bg-surface-container-low p-8 rounded-xl space-y-6 group hover:bg-primary hover:text-white transition-all duration-300">
              <div className="w-16 h-16 bg-primary-fixed text-on-primary-fixed flex items-center justify-center rounded-xl group-hover:bg-white/20 group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>medical_information</span>
              </div>
              <div className="space-y-3">
                <h3 className="font-headline font-extrabold text-2xl tracking-tight">Pack a Kit</h3>
                <p className="text-on-surface-variant group-hover:text-white/80 leading-relaxed">Prepare a 72-hour emergency kit including medicine, dry food, clean water, and important documents.</p>
              </div>
              <ul className="space-y-2 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">check_circle</span> Torch &amp; Batteries</li>
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">check_circle</span> Bottled Water</li>
              </ul>
            </div>
            
            {/* Secure Home */}
            <div className="bg-surface-container-low p-8 rounded-xl space-y-6 group hover:bg-primary hover:text-white transition-all duration-300">
              <div className="w-16 h-16 bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center rounded-xl group-hover:bg-white/20 group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>home_repair_service</span>
              </div>
              <div className="space-y-3">
                <h3 className="font-headline font-extrabold text-2xl tracking-tight">Secure Home</h3>
                <p className="text-on-surface-variant group-hover:text-white/80 leading-relaxed">Board up windows, secure loose outdoor items, and turn off electricity/gas if instructed by officials.</p>
              </div>
              <ul className="space-y-2 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">check_circle</span> Board Windows</li>
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">check_circle</span> Gas Safety</li>
              </ul>
            </div>
            
            {/* Evacuation Plan */}
            <div className="bg-surface-container-low p-8 rounded-xl space-y-6 group hover:bg-primary hover:text-white transition-all duration-300">
              <div className="w-16 h-16 bg-tertiary-fixed text-on-tertiary-fixed flex items-center justify-center rounded-xl group-hover:bg-white/20 group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>departure_board</span>
              </div>
              <div className="space-y-3">
                <h3 className="font-headline font-extrabold text-2xl tracking-tight">Evacuation Plan</h3>
                <p className="text-on-surface-variant group-hover:text-white/80 leading-relaxed">Identify your nearest shelter and plan a safe route. Inform relatives of your intended location.</p>
              </div>
              <ul className="space-y-2 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">check_circle</span> Map Routes</li>
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">check_circle</span> Family Contacts</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Emergency Contacts & Quick Resources */}
        <section className="bg-white rounded-xl shadow-[0px_24px_64px_rgba(0,0,0,0.04)] p-8 md:p-12">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="flex-1 space-y-6">
              <h2 className="font-headline font-black text-3xl tracking-tight text-primary">Emergency Hotlines</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a className="flex items-center justify-between p-5 bg-surface rounded-lg border-l-4 border-tertiary hover:bg-surface-container transition-colors" href="tel:999">
                  <div className="space-y-1">
                    <p className="font-label text-xs font-bold text-on-surface-variant uppercase tracking-widest">National Emergency</p>
                    <p className="text-3xl font-headline font-black">999</p>
                  </div>
                  <span className="material-symbols-outlined text-tertiary text-4xl">call</span>
                </a>
                <a className="flex items-center justify-between p-5 bg-surface rounded-lg border-l-4 border-primary hover:bg-surface-container transition-colors" href="tel:333">
                  <div className="space-y-1">
                    <p className="font-label text-xs font-bold text-on-surface-variant uppercase tracking-widest">Disaster Response</p>
                    <p className="text-3xl font-headline font-black">333</p>
                  </div>
                  <span className="material-symbols-outlined text-primary text-4xl">emergency_share</span>
                </a>
              </div>
            </div>
            <div className="md:w-1/3 space-y-6">
              <h2 className="font-headline font-black text-3xl tracking-tight text-primary">Handbooks</h2>
              <div className="space-y-3">
                <button className="w-full text-left p-4 rounded-lg bg-surface flex items-center gap-4 hover:bg-surface-container transition-colors">
                  <span className="material-symbols-outlined text-primary">picture_as_pdf</span>
                  <span className="font-bold">Cyclone Survival Guide (BN)</span>
                </button>
                <button className="w-full text-left p-4 rounded-lg bg-surface flex items-center gap-4 hover:bg-surface-container transition-colors">
                  <span className="material-symbols-outlined text-primary">medical_services</span>
                  <span className="font-bold">First Aid Basics Handbook</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Bottom Navigation Bar (Mobile Only) */}
      <footer className="md:hidden">
        <div className="bg-slate-100 dark:bg-slate-800 h-[1px] mb-2"></div>
        <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-4 pt-2 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl shadow-[0_-4px_20px_rgba(0,0,0,0.05)] rounded-t-xl">
          <div className="flex flex-col items-center justify-center bg-[#006a4e] text-white rounded-lg px-4 py-2">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>emergency_home</span>
            <span className="font-['Inter'] font-semibold text-[10px] uppercase tracking-wider">Alerts</span>
          </div>
          <div className="flex flex-col items-center justify-center text-slate-600 dark:text-slate-400 px-4 py-2 hover:bg-slate-50">
            <span className="material-symbols-outlined">location_on</span>
            <span className="font-['Inter'] font-semibold text-[10px] uppercase tracking-wider">Shelters</span>
          </div>
          <div className="flex flex-col items-center justify-center text-slate-600 dark:text-slate-400 px-4 py-2 hover:bg-slate-50">
            <span className="material-symbols-outlined">menu_book</span>
            <span className="font-['Inter'] font-semibold text-[10px] uppercase tracking-wider">Prepare</span>
          </div>
          <div className="flex flex-col items-center justify-center text-slate-600 dark:text-slate-400 px-4 py-2 hover:bg-slate-50">
            <span className="material-symbols-outlined">call</span>
            <span className="font-['Inter'] font-semibold text-[10px] uppercase tracking-wider">Contacts</span>
          </div>
        </nav>
      </footer>
      {/* Secondary footer space for padding on mobile */}
      <div className="h-24 md:hidden"></div>
    </div>
  );
}
