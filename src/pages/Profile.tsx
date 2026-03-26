import React from 'react';

export default function Profile() {
  return (
    <main className="p-4 md:p-8 min-h-[calc(100vh-64px)] bg-surface">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
          <div className="space-y-2">
            <span className="text-[0.75rem] font-bold tracking-[0.05em] uppercase text-secondary">Personnel Management</span>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-on-surface font-headline">Operator Profile</h1>
            <p className="text-on-surface-variant max-w-xl">Manage institutional credentials, biometric authentication, and regional jurisdiction access.</p>
          </div>
          <div className="flex gap-3">
            <button className="px-6 py-2.5 bg-surface-container-high text-on-surface font-semibold rounded-md hover:bg-surface-container-highest transition-all flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">download</span>
              Export Data
            </button>
            <button className="px-6 py-2.5 bg-gradient-to-br from-primary to-primary-container text-white font-semibold rounded-md shadow-lg shadow-primary/20 hover:opacity-90 transition-all flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">save</span>
              Save Changes
            </button>
          </div>
        </div>

        {/* Profile Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-7">
          {/* Primary Identity Card */}
          <div className="md:col-span-8 bg-surface-container-low rounded-xl p-7 flex flex-col md:flex-row gap-8 items-start">
            <div className="relative group">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-xl overflow-hidden shadow-2xl shadow-on-surface/5 border-4 border-white">
                <img className="w-full h-full object-cover" alt="Profile" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJDv_KsuraUf2EZS1pgjPYpNccRRbhIjCph5F261lXA6wj4BonfPaGo5V0MrqjyvbA4CrSyq4g8XSY_p7o0VvsBwxGrwTJF-V5qGhDKwMupEFN6I3gMphM5mGWJh7E_OmC8pHfM3kTHDDfTl9OOe08tWhdcINRNH9WvyaDEzgGau-MFcSnMyV5eCMSNoNWi9eTn6aKT6s59-CWeYVgN0vCLFNSf6e3xrhd39TM7eaY1l7H0UFW1roUXSoY6dDVIMggs6yYjucbnG1D" />
              </div>
              <button className="absolute -bottom-2 -right-2 p-2 bg-primary text-white rounded-md shadow-lg hover:scale-105 transition-transform">
                <span className="material-symbols-outlined text-base">edit</span>
              </button>
            </div>
            <div className="flex-1 space-y-6 w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-[0.65rem] font-bold tracking-[0.05em] uppercase text-outline">Full Name</label>
                  <input className="w-full bg-surface-container-highest border-none rounded-md px-4 py-2.5 focus:ring-2 focus:ring-primary/40 focus:bg-white transition-all text-on-surface font-medium" type="text" defaultValue="Ahmed Al-Zubair" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[0.65rem] font-bold tracking-[0.05em] uppercase text-outline">Employee ID</label>
                  <input className="w-full bg-surface-container-highest/50 border-none rounded-md px-4 py-2.5 text-on-surface-variant font-mono text-sm" readOnly type="text" defaultValue="TS-DH-9022" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[0.65rem] font-bold tracking-[0.05em] uppercase text-outline">Email Address</label>
                  <input className="w-full bg-surface-container-highest border-none rounded-md px-4 py-2.5 focus:ring-2 focus:ring-primary/40 focus:bg-white transition-all text-on-surface font-medium" type="email" defaultValue="a.zubair@resilience.gov.bd" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[0.65rem] font-bold tracking-[0.05em] uppercase text-outline">Contact Number</label>
                  <input className="w-full bg-surface-container-highest border-none rounded-md px-4 py-2.5 focus:ring-2 focus:ring-primary/40 focus:bg-white transition-all text-on-surface font-medium" type="text" defaultValue="+880 1712-XXXXXX" />
                </div>
              </div>
            </div>
          </div>

          {/* Authority & Location Card */}
          <div className="md:col-span-4 bg-surface-container-high rounded-xl p-7 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
              <span className="material-symbols-outlined text-9xl">travel_explore</span>
            </div>
            <div className="z-10">
              <div className="flex items-center gap-2 mb-6">
                <span className="material-symbols-outlined text-primary">verified_user</span>
                <h3 className="text-lg font-bold">Assigned Authority</h3>
              </div>
              <div className="space-y-4">
                <div className="bg-white/40 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <p className="text-[0.65rem] font-bold uppercase tracking-wider text-outline mb-1">Primary Division</p>
                  <p className="text-xl font-bold text-primary">Dhaka Division</p>
                </div>
                <div className="bg-white/40 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <p className="text-[0.65rem] font-bold uppercase tracking-wider text-outline mb-1">Operational Cluster</p>
                  <p className="text-on-surface font-semibold">Central Command Hub</p>
                </div>
              </div>
            </div>
            <button className="mt-6 w-full py-2.5 text-primary border border-primary/20 rounded-md font-bold text-xs uppercase tracking-widest hover:bg-primary/5 transition-all">
              Request Reassignment
            </button>
          </div>

          {/* Digital Signature & Auth */}
          <div className="md:col-span-5 bg-surface-container-low rounded-xl p-7">
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary">security</span>
              Authentication &amp; Reports
            </h3>
            <div className="space-y-6">
              <div className="p-5 bg-white rounded-lg shadow-sm border border-outline-variant/10">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="text-sm font-bold">Digital Signature Setup</p>
                    <p className="text-xs text-on-surface-variant">Required for Readiness Reports</p>
                  </div>
                  <span className="px-2 py-1 bg-primary-fixed text-on-primary-fixed-variant text-[0.6rem] font-black rounded uppercase">Active</span>
                </div>
                <div className="h-24 bg-surface-container-highest rounded border border-dashed border-outline-variant flex items-center justify-center italic text-on-surface-variant/40 text-2xl font-serif">
                  Ahmed Zubair
                </div>
                <button className="mt-4 text-xs font-bold text-secondary uppercase tracking-widest flex items-center gap-1">
                  Update Signature <span className="material-symbols-outlined text-sm">north_east</span>
                </button>
              </div>
              <div className="flex items-center justify-between p-4 bg-surface-container-highest rounded-lg">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-on-surface-variant">fingerprint</span>
                  <span className="text-sm font-medium">Biometric 2FA</span>
                </div>
                <div className="w-10 h-5 bg-primary rounded-full relative">
                  <div className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications & Badges */}
          <div className="md:col-span-7 bg-surface-container-low rounded-xl p-7">
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-tertiary">military_tech</span>
              Technical Division Certifications
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {/* Badge 1 */}
              <div className="bg-white p-4 rounded-xl shadow-sm border border-outline-variant/5 flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-primary-fixed rounded-full flex items-center justify-center mb-3 text-primary">
                  <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>emergency_home</span>
                </div>
                <p className="text-[0.65rem] font-black uppercase text-on-surface-variant leading-tight">Shelter Readiness Specialist</p>
                <p className="text-[0.6rem] text-outline mt-1 italic">Verified 2024</p>
              </div>
              {/* Badge 2 */}
              <div className="bg-white p-4 rounded-xl shadow-sm border border-outline-variant/5 flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-secondary-fixed rounded-full flex items-center justify-center mb-3 text-secondary">
                  <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>waves</span>
                </div>
                <p className="text-[0.65rem] font-black uppercase text-on-surface-variant leading-tight">Hydrological Analysis Level II</p>
                <p className="text-[0.6rem] text-outline mt-1 italic">Verified 2023</p>
              </div>
              {/* Badge 3 */}
              <div className="bg-white p-4 rounded-xl shadow-sm border border-outline-variant/5 flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-tertiary-fixed rounded-full flex items-center justify-center mb-3 text-tertiary">
                  <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>satellite_alt</span>
                </div>
                <p className="text-[0.65rem] font-black uppercase text-on-surface-variant leading-tight">Crisis Network Infrastructure</p>
                <p className="text-[0.6rem] text-outline mt-1 italic">Verified 2023</p>
              </div>
            </div>
            <div className="mt-8 flex justify-center">
              <button className="px-6 py-2 bg-surface text-on-surface-variant font-bold text-[0.7rem] uppercase tracking-widest rounded border border-outline-variant/20 hover:bg-surface-container-high transition-colors">
                View Technical Transcript
              </button>
            </div>
          </div>

          {/* System Access Logs */}
          <div className="md:col-span-12 bg-surface-container-lowest rounded-xl p-7 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold flex items-center gap-2">
                <span className="material-symbols-outlined text-outline">history</span>
                Recent Access Logs
              </h3>
              <button className="text-xs font-bold text-secondary uppercase tracking-widest">Download Full Log</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-surface-container-highest">
                    <th className="py-4 text-[0.65rem] font-black uppercase tracking-wider text-outline">Event</th>
                    <th className="py-4 text-[0.65rem] font-black uppercase tracking-wider text-outline">IP Address</th>
                    <th className="py-4 text-[0.65rem] font-black uppercase tracking-wider text-outline">Timestamp</th>
                    <th className="py-4 text-[0.65rem] font-black uppercase tracking-wider text-outline">Device</th>
                    <th className="py-4 text-[0.65rem] font-black uppercase tracking-wider text-outline">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-surface-container-high">
                  <tr>
                    <td className="py-4 text-sm font-semibold">User Login (Dashboard)</td>
                    <td className="py-4 text-sm text-on-surface-variant font-mono">192.168.1.45</td>
                    <td className="py-4 text-sm text-on-surface-variant">2024-05-24 08:34:12</td>
                    <td className="py-4 text-sm text-on-surface-variant">macOS / Chrome 124</td>
                    <td className="py-4"><span className="px-2 py-0.5 bg-primary-fixed text-on-primary-fixed-variant text-[0.6rem] font-black rounded uppercase">Success</span></td>
                  </tr>
                  <tr>
                    <td className="py-4 text-sm font-semibold">Ready Report Signed</td>
                    <td className="py-4 text-sm text-on-surface-variant font-mono">103.23.44.112</td>
                    <td className="py-4 text-sm text-on-surface-variant">2024-05-23 21:15:00</td>
                    <td className="py-4 text-sm text-on-surface-variant">iOS / Sentinel App</td>
                    <td className="py-4"><span className="px-2 py-0.5 bg-primary-fixed text-on-primary-fixed-variant text-[0.6rem] font-black rounded uppercase">Success</span></td>
                  </tr>
                  <tr>
                    <td className="py-4 text-sm font-semibold">Authentication Attempt</td>
                    <td className="py-4 text-sm text-on-surface-variant font-mono">202.14.3.89</td>
                    <td className="py-4 text-sm text-on-surface-variant">2024-05-23 14:22:11</td>
                    <td className="py-4 text-sm text-on-surface-variant">Unknown / Mobile</td>
                    <td className="py-4"><span className="px-2 py-0.5 bg-error-container text-on-error-container text-[0.6rem] font-black rounded uppercase">Denied</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
