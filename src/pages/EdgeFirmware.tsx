import React from 'react';

export default function EdgeFirmware() {
  return (
    <div className="p-6 lg:p-10 max-w-7xl mx-auto w-full animate-in fade-in duration-500">
      <div className="mb-8">
        <h1 className="text-3xl font-black font-headline text-slate-900 dark:text-white tracking-tight mb-2">Firmware Control</h1>
        <p className="text-slate-500 dark:text-slate-400">Manage, deploy, and monitor firmware updates across Sentinel Edge-AI nodes.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-slate-900 dark:text-white">Active Nodes</h3>
            <span className="material-symbols-outlined text-emerald-500">router</span>
          </div>
          <div className="text-3xl font-black text-slate-900 dark:text-white mb-1">1,248</div>
          <p className="text-sm text-slate-500 dark:text-slate-400">Online and reporting</p>
        </div>
        
        <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-slate-900 dark:text-white">Pending Updates</h3>
            <span className="material-symbols-outlined text-amber-500">system_update</span>
          </div>
          <div className="text-3xl font-black text-slate-900 dark:text-white mb-1">42</div>
          <p className="text-sm text-slate-500 dark:text-slate-400">Nodes requiring v2.4.1</p>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-slate-900 dark:text-white">Latest Version</h3>
            <span className="material-symbols-outlined text-blue-500">verified</span>
          </div>
          <div className="text-3xl font-black text-slate-900 dark:text-white mb-1">v2.4.1</div>
          <p className="text-sm text-slate-500 dark:text-slate-400">Released 2 days ago</p>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
        <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h2 className="text-xl font-bold font-headline text-slate-900 dark:text-white">Node Fleet Status</h2>
          <div className="flex gap-2 w-full sm:w-auto">
            <div className="relative flex-1 sm:w-64">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">search</span>
              <input 
                type="text" 
                placeholder="Search node ID or location..." 
                className="w-full pl-9 pr-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <button className="bg-[#00503a] hover:bg-[#006a4e] text-white px-4 py-2 rounded-lg font-bold text-sm transition-colors whitespace-nowrap">
              Deploy Update
            </button>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800">
                <th className="p-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Node ID</th>
                <th className="p-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Location</th>
                <th className="p-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Firmware</th>
                <th className="p-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Status</th>
                <th className="p-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/25 transition-colors">
                <td className="p-4 font-mono text-sm text-slate-900 dark:text-white">ND-8832-A</td>
                <td className="p-4 text-sm text-slate-600 dark:text-slate-300">Cox's Bazar Sector 4</td>
                <td className="p-4 text-sm">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-50 dark:bg-emerald-900/20 text-[#00503a] dark:text-emerald-400 font-medium">
                    v2.4.1
                  </span>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                    <span className="text-sm text-slate-600 dark:text-slate-300">Online</span>
                  </div>
                </td>
                <td className="p-4 text-right">
                  <button className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                    <span className="material-symbols-outlined text-sm">more_vert</span>
                  </button>
                </td>
              </tr>
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/25 transition-colors">
                <td className="p-4 font-mono text-sm text-slate-900 dark:text-white">ND-8833-B</td>
                <td className="p-4 text-sm text-slate-600 dark:text-slate-300">Khulna Coastal Hub</td>
                <td className="p-4 text-sm">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400 font-medium">
                    v2.3.9
                  </span>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                    <span className="text-sm text-slate-600 dark:text-slate-300">Online</span>
                  </div>
                </td>
                <td className="p-4 text-right">
                  <button className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-bold mr-4">Update</button>
                  <button className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                    <span className="material-symbols-outlined text-sm">more_vert</span>
                  </button>
                </td>
              </tr>
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/25 transition-colors">
                <td className="p-4 font-mono text-sm text-slate-900 dark:text-white">ND-8834-C</td>
                <td className="p-4 text-sm text-slate-600 dark:text-slate-300">Sylhet Highland</td>
                <td className="p-4 text-sm">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-50 dark:bg-emerald-900/20 text-[#00503a] dark:text-emerald-400 font-medium">
                    v2.4.1
                  </span>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-600"></div>
                    <span className="text-sm text-slate-600 dark:text-slate-300">Offline (2h)</span>
                  </div>
                </td>
                <td className="p-4 text-right">
                  <button className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                    <span className="material-symbols-outlined text-sm">more_vert</span>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
