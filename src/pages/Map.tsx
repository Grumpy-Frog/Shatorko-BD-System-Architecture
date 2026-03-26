import React from 'react';

export default function Map() {
  return (
    <main className="bg-surface-container-low flex flex-col md:flex-row min-h-[calc(100vh-64px)]">
      {/* Central Monitoring Panel */}
      <div className="flex-1 p-8 space-y-8">
        {/* Page Header & Global Health */}
        <header className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <h1 className="font-headline text-3xl font-black text-on-background tracking-tighter uppercase mb-1">Community Relay Monitor</h1>
            <p className="text-on-surface-variant font-medium">Monitoring LoRa Mesh Layer: 142 Active Nodes</p>
          </div>
          {/* Health Summary Bento */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="bg-surface-container-lowest p-4 rounded-xl shadow-sm border-l-4 border-primary">
              <p className="text-[10px] uppercase font-bold tracking-widest text-outline">Network Health</p>
              <p className="text-xl font-black text-primary">98.2%</p>
            </div>
            <div className="bg-surface-container-lowest p-4 rounded-xl shadow-sm border-l-4 border-secondary">
              <p className="text-[10px] uppercase font-bold tracking-widest text-outline">Avg Battery</p>
              <p className="text-xl font-black text-secondary">84%</p>
            </div>
            <div className="bg-surface-container-lowest p-4 rounded-xl shadow-sm border-l-4 border-tertiary">
              <p className="text-[10px] uppercase font-bold tracking-widest text-outline">Siren Ready</p>
              <p className="text-xl font-black text-tertiary">139/142</p>
            </div>
            <div className="bg-surface-container-lowest p-4 rounded-xl shadow-sm border-l-4 border-primary-container">
              <p className="text-[10px] uppercase font-bold tracking-widest text-outline">Active Mesh</p>
              <p className="text-xl font-black text-primary-container">Live</p>
            </div>
          </div>
        </header>

        {/* Search and Filters */}
        <section className="bg-surface-container-lowest p-4 rounded-xl shadow-sm flex flex-col md:flex-row gap-4 items-center">
          <div className="relative flex-1 w-full">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">search</span>
            <input className="w-full bg-surface-container pl-12 pr-4 py-3 rounded-lg border-none focus:ring-2 focus:ring-primary/40 text-sm" placeholder="Search relay point name, Upazila or Union Parishad..." type="text" />
          </div>
          <div className="flex gap-2 w-full md:w-auto">
            <select className="bg-surface-container border-none rounded-lg text-sm font-medium py-3 px-4 focus:ring-2 focus:ring-primary/40">
              <option>All Upazilas</option>
              <option>Chittagong Sadar</option>
              <option>Sandwip</option>
              <option>Anwara</option>
            </select>
            <select className="bg-surface-container border-none rounded-lg text-sm font-medium py-3 px-4 focus:ring-2 focus:ring-primary/40">
              <option>Status: All</option>
              <option>Online</option>
              <option>Low Battery</option>
              <option>Offline</option>
            </select>
          </div>
        </section>

        {/* Relay Nodes List (Table View) */}
        <section className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-container-high text-on-surface-variant text-[11px] uppercase tracking-widest font-bold">
                <th className="px-6 py-4">Relay Point</th>
                <th className="px-6 py-4">Location (UP)</th>
                <th className="px-6 py-4">Connectivity</th>
                <th className="px-6 py-4">Power</th>
                <th className="px-6 py-4">Siren Status</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-container">
              <tr className="hover:bg-surface-container-low transition-colors group cursor-pointer">
                <td className="px-6 py-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary-container/10 rounded flex items-center justify-center">
                      <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>mosque</span>
                    </div>
                    <div>
                      <p className="font-bold text-sm text-on-background">Baitul Aman Jame Masjid</p>
                      <p className="text-xs text-outline">ID: LR-CH-042</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-5">
                  <p className="text-sm font-medium text-on-surface">Maitshail UP</p>
                  <p className="text-[10px] text-outline uppercase tracking-wider">Sandwip, Chittagong</p>
                </td>
                <td className="px-6 py-5">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span className="text-sm font-semibold text-emerald-600">-62 dBm</span>
                  </div>
                  <p className="text-[10px] text-outline">Last Ack: 2m ago</p>
                </td>
                <td className="px-6 py-5">
                  <div className="flex items-center gap-2">
                    <div className="w-12 h-2 bg-surface-container rounded-full overflow-hidden">
                      <div className="h-full bg-primary" style={{ width: '88%' }}></div>
                    </div>
                    <span className="text-xs font-bold text-on-surface">88%</span>
                  </div>
                  <p className="text-[10px] text-outline">Solar Charging</p>
                </td>
                <td className="px-6 py-5">
                  <span className="px-2 py-1 bg-primary/10 text-primary text-[10px] font-bold rounded uppercase">System Ready</span>
                </td>
                <td className="px-6 py-5 text-right">
                  <button className="p-2 hover:bg-surface-container-high rounded-full transition-colors">
                    <span className="material-symbols-outlined text-outline">chevron_right</span>
                  </button>
                </td>
              </tr>
              <tr className="bg-surface-bright hover:bg-surface-container-low transition-colors group cursor-pointer">
                <td className="px-6 py-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-secondary/10 rounded flex items-center justify-center">
                      <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>school</span>
                    </div>
                    <div>
                      <p className="font-bold text-sm text-on-background">Al-Amin High School</p>
                      <p className="text-xs text-outline">ID: LR-CH-109</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-5">
                  <p className="text-sm font-medium text-on-surface">Gachhbaria UP</p>
                  <p className="text-[10px] text-outline uppercase tracking-wider">Chandanaish, Chittagong</p>
                </td>
                <td className="px-6 py-5">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                    <span className="text-sm font-semibold text-amber-600">-94 dBm</span>
                  </div>
                  <p className="text-[10px] text-outline">Last Ack: 14m ago</p>
                </td>
                <td className="px-6 py-5">
                  <div className="flex items-center gap-2">
                    <div className="w-12 h-2 bg-surface-container rounded-full overflow-hidden">
                      <div className="h-full bg-amber-500" style={{ width: '24%' }}></div>
                    </div>
                    <span className="text-xs font-bold text-amber-600">24%</span>
                  </div>
                  <p className="text-[10px] text-tertiary font-bold uppercase">Critical Level</p>
                </td>
                <td className="px-6 py-5">
                  <span className="px-2 py-1 bg-surface-container text-outline text-[10px] font-bold rounded uppercase">Testing Needed</span>
                </td>
                <td className="px-6 py-5 text-right">
                  <button className="p-2 hover:bg-surface-container-high rounded-full transition-colors">
                    <span className="material-symbols-outlined text-outline">chevron_right</span>
                  </button>
                </td>
              </tr>
              <tr className="hover:bg-surface-container-low transition-colors group cursor-pointer">
                <td className="px-6 py-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-tertiary/10 rounded flex items-center justify-center">
                      <span className="material-symbols-outlined text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>castle</span>
                    </div>
                    <div>
                      <p className="font-bold text-sm text-on-background">Dhaka-South Temple Hub</p>
                      <p className="text-xs text-outline">ID: LR-DH-012</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-5">
                  <p className="text-sm font-medium text-on-surface">Dhamrai UP</p>
                  <p className="text-[10px] text-outline uppercase tracking-wider">Dhaka, Central</p>
                </td>
                <td className="px-6 py-5">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    <span className="text-sm font-semibold text-emerald-600">-58 dBm</span>
                  </div>
                  <p className="text-[10px] text-outline">Last Ack: 1m ago</p>
                </td>
                <td className="px-6 py-5">
                  <div className="flex items-center gap-2">
                    <div className="w-12 h-2 bg-surface-container rounded-full overflow-hidden">
                      <div className="h-full bg-primary" style={{ width: '95%' }}></div>
                    </div>
                    <span className="text-xs font-bold text-on-surface">95%</span>
                  </div>
                  <p className="text-[10px] text-outline">AC Power OK</p>
                </td>
                <td className="px-6 py-5">
                  <span className="px-2 py-1 bg-primary/10 text-primary text-[10px] font-bold rounded uppercase">System Ready</span>
                </td>
                <td className="px-6 py-5 text-right">
                  <button className="p-2 hover:bg-surface-container-high rounded-full transition-colors">
                    <span className="material-symbols-outlined text-outline">chevron_right</span>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>

      {/* Detail Sidebar (Selected Node) */}
      <aside className="w-full md:w-96 bg-surface-container-lowest shadow-2xl z-40 flex flex-col border-l border-slate-200/20">
        <div className="relative h-48 w-full overflow-hidden">
          <img alt="Baitul Aman Masjid" className="w-full h-full object-cover" data-alt="Traditional white mosque with a green dome and minaret in a rural Bangladeshi village setting under a bright clear blue sky" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWCY_9mfiglZXiw-mcbRmWU4Sj5N0utKXhftJLVCsFdn0u_wT7SDabyI0LHVON9zUfxcmv50lGOd0y4cTuGONXCX35Cu34b3YTiJW0RhJXI0Qp0X5xcXfoJS3M-dsQU1Ug1eIAZo3aeyhWcWpFSdfyGZXBX6OUdBETwzOg5HoDaw3G7nWcW4m_ZK4beU9so9EWh-N0WbOVtdt0Q1Ji75fuB6pYU0wIcJhsW5rR7qaEQTJiNnkIe2hFVUrkhsiot-vopaivLkTqde3p" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-4 left-6 right-6 flex justify-between items-end">
            <div className="text-white">
              <h3 className="font-headline font-bold text-xl">Baitul Aman Masjid</h3>
              <p className="text-xs text-white/80">Sandwip, Zone B-12</p>
            </div>
            <span className="px-2 py-1 bg-emerald-500 text-white text-[10px] font-black rounded">ONLINE</span>
          </div>
        </div>
        <div className="p-6 flex-1 overflow-y-auto space-y-6">
          {/* Contact Section */}
          <div>
            <p className="text-[10px] uppercase font-bold tracking-widest text-outline mb-3">Local Custodian</p>
            <div className="flex items-center gap-4 bg-surface-container-low p-3 rounded-lg">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/20">
                <img alt="Custodian Profile" className="w-full h-full object-cover" data-alt="Portrait of an elderly Bangladeshi man with a white beard and a traditional cap, wearing a light colored panjabi" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbV4YdVuGK-VzQwWDptRKQXVDWRkN_1gmWeBZfvEJEyAt3OYyFDv55Aq0YJ7N7x1oBJcK_82MEjI67CGoLC7KL5g9-7KoZ531tWx7nhrDfSRqt4jIGkTAJ68Sp7I7nj4osr_icB6YcpWWdw2A6iQ1cUa-jNrRIe-S8Un5UDK-Mm1Xit0VEVftXQ0Nd6m2gUkHZkXkpIB4jd8WIUoiQMmY1a0tErS_hIYbqWKpPmHi3a6aaEk1FP6d1JgFaXX7CcCM7DU7ywzi8D-YO" />
              </div>
              <div>
                <p className="font-bold text-sm text-on-background">Imam Hafez Uddin</p>
                <p className="text-xs text-outline">+880 1712-4455XX</p>
              </div>
              <button className="ml-auto w-8 h-8 rounded-full bg-secondary text-white flex items-center justify-center">
                <span className="material-symbols-outlined text-sm">call</span>
              </button>
            </div>
          </div>

          {/* Audio Payload Details */}
          <div>
            <p className="text-[10px] uppercase font-bold tracking-widest text-outline mb-3">Dialect Configuration</p>
            <div className="bg-primary/5 p-4 rounded-lg border border-primary/10">
              <div className="flex items-center justify-between mb-2">
                <p className="font-bold text-primary text-sm">Chittagonian (Sandwipi)</p>
                <span className="material-symbols-outlined text-primary text-sm">volume_up</span>
              </div>
              <p className="text-xs text-on-surface-variant italic">"Ai honsar kotha huno, pani baribole aiye... (Listen to the warning, water is rising...)"</p>
              <div className="mt-4 flex gap-2">
                <button className="flex-1 py-2 bg-primary/10 text-primary text-[11px] font-bold rounded hover:bg-primary/20 transition-colors uppercase">Preview Audio</button>
                <button className="flex-1 py-2 bg-primary/10 text-primary text-[11px] font-bold rounded hover:bg-primary/20 transition-colors uppercase">Update Pack</button>
              </div>
            </div>
          </div>

          {/* Hardware Status */}
          <div className="space-y-4">
            <p className="text-[10px] uppercase font-bold tracking-widest text-outline mb-1">Hardware Diagnostics</p>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-surface-container p-3 rounded-lg">
                <p className="text-[10px] text-outline uppercase font-medium">Uptime</p>
                <p className="font-bold text-on-background">114 Days</p>
              </div>
              <div className="bg-surface-container p-3 rounded-lg">
                <p className="text-[10px] text-outline uppercase font-medium">LoRa Reach</p>
                <p className="font-bold text-on-background">4.2 KM</p>
              </div>
              <div className="bg-surface-container p-3 rounded-lg">
                <p className="text-[10px] text-outline uppercase font-medium">Temp</p>
                <p className="font-bold text-on-background">32°C</p>
              </div>
              <div className="bg-surface-container p-3 rounded-lg">
                <p className="text-[10px] text-outline uppercase font-medium">Humidity</p>
                <p className="font-bold text-on-background">82%</p>
              </div>
            </div>
          </div>
        </div>

        {/* Sticky Sidebar Actions */}
        <div className="p-6 border-t border-slate-200/20 bg-surface-container-low">
          <button className="w-full py-3 bg-tertiary text-white rounded-lg font-bold text-sm shadow-md flex items-center justify-center gap-2 hover:bg-on-tertiary-fixed-variant transition-all mb-3">
            <span className="material-symbols-outlined text-[18px]">campaign</span>
            Trigger Siren Test
          </button>
          <button className="w-full py-3 border-2 border-primary/20 text-primary rounded-lg font-bold text-sm flex items-center justify-center gap-2 hover:bg-primary/5 transition-all">
            <span className="material-symbols-outlined text-[18px]">build</span>
            Dispatch Maintenance
          </button>
        </div>
      </aside>
    </main>
  );
}
