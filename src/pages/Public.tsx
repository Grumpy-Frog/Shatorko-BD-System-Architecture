import React from 'react';
import { Link } from 'react-router-dom';

export default function Public() {
  return (
    <main className="p-4 md:p-8 min-h-[calc(100vh-64px)] bg-surface">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-8">
          <div className="space-y-2">
            <span className="text-[0.75rem] font-bold tracking-[0.05em] uppercase text-primary">Citizen Interface</span>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-on-surface font-headline">Public Portal Management</h1>
            <p className="text-on-surface-variant max-w-2xl">Manage public-facing alerts, educational content, and citizen reporting interfaces.</p>
          </div>
          <div className="flex gap-3">
            <Link to="/public-portal" className="px-6 py-2.5 bg-surface-container-high text-on-surface font-semibold rounded-md hover:bg-surface-container-highest transition-all flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">preview</span>
              Preview Portal
            </Link>
            <button className="px-6 py-2.5 bg-primary text-on-primary font-semibold rounded-md shadow-lg shadow-primary/20 hover:opacity-90 transition-all flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">publish</span>
              Publish Update
            </button>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column: Active Announcements */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-outline-variant/20">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">campaign</span>
                  Active Public Announcements
                </h3>
                <button className="text-xs font-bold text-primary uppercase tracking-widest">New Announcement</button>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-surface-container-low rounded-lg border-l-4 border-error">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 bg-error-container text-on-error-container text-[0.6rem] font-black rounded uppercase">Critical Alert</span>
                      <span className="text-xs text-on-surface-variant font-mono">Active</span>
                    </div>
                    <button className="text-on-surface-variant hover:text-error"><span className="material-symbols-outlined text-sm">delete</span></button>
                  </div>
                  <p className="text-sm font-bold text-on-surface mb-1">Cyclone Remal - Evacuation Order</p>
                  <p className="text-xs text-on-surface-variant">All residents in coastal areas of Khulna and Satkhira must evacuate to designated shelters immediately.</p>
                </div>

                <div className="p-4 bg-surface-container-low rounded-lg border-l-4 border-tertiary">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 bg-tertiary-container text-on-tertiary-container text-[0.6rem] font-black rounded uppercase">Advisory</span>
                      <span className="text-xs text-on-surface-variant font-mono">Active</span>
                    </div>
                    <button className="text-on-surface-variant hover:text-error"><span className="material-symbols-outlined text-sm">delete</span></button>
                  </div>
                  <p className="text-sm font-bold text-on-surface mb-1">Heavy Rainfall Warning</p>
                  <p className="text-xs text-on-surface-variant">Expect heavy rainfall over the next 48 hours. Avoid low-lying areas prone to flash floods.</p>
                </div>
              </div>
            </div>

            {/* Citizen Reports */}
            <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-outline-variant/20">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary">record_voice_over</span>
                  Recent Citizen Reports
                </h3>
                <button className="text-xs font-bold text-secondary uppercase tracking-widest">View All</button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-surface-container-highest">
                      <th className="py-3 text-[0.65rem] font-black uppercase tracking-wider text-outline">Time</th>
                      <th className="py-3 text-[0.65rem] font-black uppercase tracking-wider text-outline">Location</th>
                      <th className="py-3 text-[0.65rem] font-black uppercase tracking-wider text-outline">Type</th>
                      <th className="py-3 text-[0.65rem] font-black uppercase tracking-wider text-outline">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-surface-container-high">
                    <tr className="hover:bg-surface-container-lowest transition-colors">
                      <td className="py-3 text-xs text-on-surface-variant">10 mins ago</td>
                      <td className="py-3 text-sm font-semibold">Dacope, Khulna</td>
                      <td className="py-3 text-sm">Waterlogging</td>
                      <td className="py-3"><span className="px-2 py-0.5 bg-surface-container-highest text-on-surface-variant text-[0.6rem] font-black rounded uppercase">Unverified</span></td>
                    </tr>
                    <tr className="hover:bg-surface-container-lowest transition-colors">
                      <td className="py-3 text-xs text-on-surface-variant">1 hour ago</td>
                      <td className="py-3 text-sm font-semibold">Shyamnagar, Satkhira</td>
                      <td className="py-3 text-sm">Fallen Tree</td>
                      <td className="py-3"><span className="px-2 py-0.5 bg-primary-container text-on-primary-container text-[0.6rem] font-black rounded uppercase">Verified</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Right Column: Portal Stats */}
          <div className="space-y-6">
            <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-outline-variant/20">
              <h3 className="text-sm font-bold uppercase tracking-wider text-outline mb-4">Portal Traffic (24h)</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-[0.65rem] font-bold uppercase tracking-wider text-outline mb-1">Unique Visitors</p>
                  <p className="text-3xl font-black text-on-surface">124.5K</p>
                </div>
                <div>
                  <p className="text-[0.65rem] font-bold uppercase tracking-wider text-outline mb-1">Active Alerts Viewed</p>
                  <p className="text-3xl font-black text-on-surface">89.2K</p>
                </div>
                <div>
                  <p className="text-[0.65rem] font-bold uppercase tracking-wider text-outline mb-1">App Downloads</p>
                  <p className="text-3xl font-black text-on-surface">1,204</p>
                </div>
              </div>
            </div>

            <div className="bg-surface-container-low rounded-xl p-6">
              <h3 className="text-sm font-bold uppercase tracking-wider text-outline mb-4">Quick Links</h3>
              <div className="space-y-3">
                <button className="w-full py-3 px-4 bg-surface-container-high text-on-surface font-bold rounded-lg flex items-center justify-between hover:bg-surface-container-highest transition-colors">
                  <span className="flex items-center gap-2"><span className="material-symbols-outlined">menu_book</span> Update Guidelines</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
                <button className="w-full py-3 px-4 bg-surface-container-high text-on-surface font-bold rounded-lg flex items-center justify-between hover:bg-surface-container-highest transition-colors">
                  <span className="flex items-center gap-2"><span className="material-symbols-outlined">sms</span> SMS Broadcast</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
