import React, { useState } from 'react';

export default function Settings() {
  const [activeTab, setActiveTab] = useState('profile');

  return (
    <main className="p-4 md:p-8 min-h-[calc(100vh-64px)] bg-surface">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-headline font-extrabold text-on-surface mb-2">Settings</h1>
          <p className="text-on-surface-variant">Manage your account preferences and system configurations.</p>
        </div>

        <div className="bg-surface-container-low rounded-2xl overflow-hidden border border-outline-variant/30 shadow-sm">
          <div className="flex border-b border-outline-variant/30 overflow-x-auto">
            <button
              onClick={() => setActiveTab('profile')}
              className={`px-6 py-4 text-sm font-bold whitespace-nowrap transition-colors ${
                activeTab === 'profile'
                  ? 'text-primary border-b-2 border-primary bg-primary/5'
                  : 'text-on-surface-variant hover:bg-surface-container hover:text-on-surface'
              }`}
            >
              Profile & Account
            </button>
            <button
              onClick={() => setActiveTab('notifications')}
              className={`px-6 py-4 text-sm font-bold whitespace-nowrap transition-colors ${
                activeTab === 'notifications'
                  ? 'text-primary border-b-2 border-primary bg-primary/5'
                  : 'text-on-surface-variant hover:bg-surface-container hover:text-on-surface'
              }`}
            >
              Notifications
            </button>
            <button
              onClick={() => setActiveTab('security')}
              className={`px-6 py-4 text-sm font-bold whitespace-nowrap transition-colors ${
                activeTab === 'security'
                  ? 'text-primary border-b-2 border-primary bg-primary/5'
                  : 'text-on-surface-variant hover:bg-surface-container hover:text-on-surface'
              }`}
            >
              Security
            </button>
            <button
              onClick={() => setActiveTab('system')}
              className={`px-6 py-4 text-sm font-bold whitespace-nowrap transition-colors ${
                activeTab === 'system'
                  ? 'text-primary border-b-2 border-primary bg-primary/5'
                  : 'text-on-surface-variant hover:bg-surface-container hover:text-on-surface'
              }`}
            >
              System Preferences
            </button>
          </div>

          <div className="p-6 md:p-8">
            {activeTab === 'profile' && (
              <div className="space-y-8 animate-in fade-in duration-300">
                <div className="flex items-center gap-6">
                  <div className="relative">
                    <img
                      src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
                      alt="Profile"
                      className="w-24 h-24 rounded-full bg-surface-container border-4 border-surface shadow-sm"
                    />
                    <button className="absolute bottom-0 right-0 p-2 bg-primary text-on-primary rounded-full shadow-md hover:bg-primary/90 transition-colors">
                      <span className="material-symbols-outlined text-sm">edit</span>
                    </button>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-on-surface">Commander Felix</h3>
                    <p className="text-on-surface-variant text-sm">Central Command Hub</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Full Name</label>
                    <input
                      type="text"
                      defaultValue="Commander Felix"
                      className="w-full bg-surface-container p-3 rounded-xl border border-outline-variant/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-on-surface"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Email Address</label>
                    <input
                      type="email"
                      defaultValue="felix.cmd@shatorko.gov.bd"
                      className="w-full bg-surface-container p-3 rounded-xl border border-outline-variant/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-on-surface"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Role</label>
                    <input
                      type="text"
                      defaultValue="System Administrator"
                      disabled
                      className="w-full bg-surface-container/50 p-3 rounded-xl border border-outline-variant/30 text-on-surface-variant cursor-not-allowed"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Department</label>
                    <select className="w-full bg-surface-container p-3 rounded-xl border border-outline-variant/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-on-surface">
                      <option>Central Command</option>
                      <option>Field Operations</option>
                      <option>Logistics</option>
                      <option>IT Support</option>
                    </select>
                  </div>
                </div>

                <div className="pt-4 flex justify-end">
                  <button className="bg-primary text-on-primary px-6 py-2.5 rounded-xl font-bold hover:bg-primary/90 transition-colors shadow-sm">
                    Save Changes
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'notifications' && (
              <div className="space-y-6 animate-in fade-in duration-300">
                <h3 className="text-lg font-bold text-on-surface mb-4">Alert Preferences</h3>
                
                {[
                  { title: 'Critical System Alerts', desc: 'Hardware failures, network outages', defaultChecked: true },
                  { title: 'Weather Warnings', desc: 'Cyclone formations, severe weather updates', defaultChecked: true },
                  { title: 'Volunteer Activity', desc: 'New registrations, deployment status', defaultChecked: false },
                  { title: 'Maintenance Reports', desc: 'Weekly summaries of edge node health', defaultChecked: true },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-surface-container rounded-xl">
                    <div>
                      <div className="font-bold text-on-surface">{item.title}</div>
                      <div className="text-sm text-on-surface-variant">{item.desc}</div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked={item.defaultChecked} />
                      <div className="w-11 h-6 bg-outline-variant peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                    </label>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'security' && (
              <div className="space-y-8 animate-in fade-in duration-300">
                <div>
                  <h3 className="text-lg font-bold text-on-surface mb-4">Change Password</h3>
                  <div className="space-y-4 max-w-md">
                    <input
                      type="password"
                      placeholder="Current Password"
                      className="w-full bg-surface-container p-3 rounded-xl border border-outline-variant/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-on-surface"
                    />
                    <input
                      type="password"
                      placeholder="New Password"
                      className="w-full bg-surface-container p-3 rounded-xl border border-outline-variant/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-on-surface"
                    />
                    <input
                      type="password"
                      placeholder="Confirm New Password"
                      className="w-full bg-surface-container p-3 rounded-xl border border-outline-variant/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-on-surface"
                    />
                    <button className="bg-primary text-on-primary px-6 py-2.5 rounded-xl font-bold hover:bg-primary/90 transition-colors shadow-sm w-full">
                      Update Password
                    </button>
                  </div>
                </div>

                <div className="pt-6 border-t border-outline-variant/30">
                  <h3 className="text-lg font-bold text-on-surface mb-4">Two-Factor Authentication</h3>
                  <div className="flex items-center justify-between p-4 bg-surface-container rounded-xl border border-outline-variant/50">
                    <div>
                      <div className="font-bold text-on-surface flex items-center gap-2">
                        Authenticator App
                        <span className="bg-primary/10 text-primary text-[10px] px-2 py-0.5 rounded uppercase tracking-wider">Enabled</span>
                      </div>
                      <div className="text-sm text-on-surface-variant mt-1">Use an app like Google Authenticator to generate codes.</div>
                    </div>
                    <button className="text-error font-bold text-sm hover:underline">Disable</button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'system' && (
              <div className="space-y-6 animate-in fade-in duration-300">
                <h3 className="text-lg font-bold text-on-surface mb-4">Display & Interface</h3>
                
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Theme Preference</label>
                    <select className="w-full max-w-md bg-surface-container p-3 rounded-xl border border-outline-variant/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-on-surface">
                      <option>System Default</option>
                      <option>Light Mode</option>
                      <option>Dark Mode</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Default Dashboard View</label>
                    <select className="w-full max-w-md bg-surface-container p-3 rounded-xl border border-outline-variant/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-on-surface">
                      <option>Map Overview</option>
                      <option>System Health</option>
                      <option>Active Alerts</option>
                    </select>
                  </div>
                </div>

                <div className="pt-6 border-t border-outline-variant/30">
                  <h3 className="text-lg font-bold text-on-surface mb-4">Data Management</h3>
                  <div className="p-4 bg-error-container/20 border border-error/20 rounded-xl">
                    <h4 className="font-bold text-error mb-1">Clear Local Cache</h4>
                    <p className="text-sm text-on-surface-variant mb-4">This will clear all locally stored map tiles and temporary data. It may slow down initial load times on your next visit.</p>
                    <button className="bg-error text-on-error px-4 py-2 rounded-lg font-bold text-sm hover:bg-error/90 transition-colors shadow-sm">
                      Clear Cache (142 MB)
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
