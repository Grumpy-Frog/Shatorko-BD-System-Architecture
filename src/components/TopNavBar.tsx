import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function TopNavBar({ title, showLinks = true, toggleSidebar }: { title: string, showLinks?: boolean, toggleSidebar?: () => void }) {
  const location = useLocation();
  const [showNotifications, setShowNotifications] = useState(false);
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('English');
  const notifRef = useRef<HTMLDivElement>(null);
  const langRef = useRef<HTMLDivElement>(null);

  const notifications = [
    { id: 1, title: 'Alert Sent', message: 'Cyclone warning broadcasted to Barisal.', time: '2m ago', unread: true },
    { id: 2, title: 'System Update', message: 'LoRaWAN gateway G-09 is back online.', time: '1h ago', unread: true },
    { id: 3, title: 'New Shelter Added', message: 'Shelter capacity increased in Sylhet.', time: '3h ago', unread: false },
  ];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (notifRef.current && !notifRef.current.contains(event.target as Node)) {
        setShowNotifications(false);
      }
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setShowLanguageMenu(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="bg-[#00503a] dark:bg-slate-950 text-white dark:text-emerald-400 font-headline tracking-tight fixed top-0 z-50 shadow-lg dark:shadow-none flex justify-between items-center w-full px-6 py-3">
      <div className="flex items-center gap-4 md:gap-8">
        {toggleSidebar && (
          <button 
            onClick={toggleSidebar}
            className="p-2 -ml-2 hover:bg-white/10 rounded-lg transition-colors flex items-center justify-center"
            aria-label="Toggle Sidebar"
          >
            <span className="material-symbols-outlined font-bold">menu</span>
          </button>
        )}
        <Link to="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity cursor-pointer">
          <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-primary">
            <span className="material-symbols-outlined font-bold text-2xl">shield_with_heart</span>
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-xl font-black text-white uppercase tracking-tighter">{title}</span>
            <span className="text-[10px] font-bold tracking-widest text-emerald-300">সতর্ক বিডি</span>
          </div>
        </Link>
        
        {showLinks && (
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/dashboard" className={`text-white pb-1 font-bold ${location.pathname === '/dashboard' ? 'border-b-2 border-emerald-400' : 'text-emerald-100/70 dark:text-slate-400 hover:text-white transition-colors'}`}>Dashboard</Link>
            <Link to="/alerts" className={`text-white pb-1 font-bold ${location.pathname === '/alerts' ? 'border-b-2 border-emerald-400' : 'text-emerald-100/70 dark:text-slate-400 hover:text-white transition-colors'}`}>Alerts</Link>
            <Link to="/map" className={`text-white pb-1 font-bold ${location.pathname === '/map' ? 'border-b-2 border-emerald-400' : 'text-emerald-100/70 dark:text-slate-400 hover:text-white transition-colors'}`}>Map</Link>
            <Link to="/shelters" className={`text-white pb-1 font-bold ${location.pathname === '/shelters' ? 'border-b-2 border-emerald-400' : 'text-emerald-100/70 dark:text-slate-400 hover:text-white transition-colors'}`}>Shelters</Link>
            <Link to="/project-details" className={`text-white pb-1 font-bold ${location.pathname === '/project-details' ? 'border-b-2 border-emerald-400' : 'text-emerald-100/70 dark:text-slate-400 hover:text-white transition-colors'}`}>Project Details</Link>
          </nav>
        )}
      </div>
      <div className="flex items-center gap-4">
        <Link to="/alerts" className="hidden lg:flex items-center gap-2 bg-emerald-700 hover:bg-emerald-800 transition-colors px-4 py-2 rounded font-bold text-sm uppercase tracking-wider">
          <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>broadcast_on_home</span>
          Emergency Broadcast
        </Link>
        <div className="flex items-center gap-3 border-l border-white/10 pl-4">
          <span className="text-xs font-medium cursor-pointer hover:text-emerald-300">{currentLanguage === 'Bangla' ? 'Bangla' : 'English'}</span>
          
          <div className="relative" ref={notifRef}>
            <button 
              onClick={() => setShowNotifications(!showNotifications)}
              className="relative flex items-center justify-center hover:bg-emerald-800 transition-colors p-1 rounded"
            >
              <span className="material-symbols-outlined cursor-pointer">notifications</span>
              <span className="absolute top-0.5 right-0.5 w-2 h-2 bg-red-500 rounded-full border border-[#00503a]"></span>
            </button>

            {showNotifications && (
              <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-slate-900 rounded-xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden text-slate-800 dark:text-slate-200 animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="p-4 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center bg-slate-50 dark:bg-slate-900/50">
                  <h3 className="font-bold text-sm uppercase tracking-wider">Notifications</h3>
                  <button className="text-xs text-emerald-600 dark:text-emerald-400 font-medium hover:underline">Mark all read</button>
                </div>
                <div className="max-h-[300px] overflow-y-auto custom-scrollbar">
                  {notifications.map((notif) => (
                    <div key={notif.id} className={`p-4 border-b border-slate-100 dark:border-slate-800 last:border-0 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer ${notif.unread ? 'bg-emerald-50/50 dark:bg-emerald-900/10' : ''}`}>
                      <div className="flex justify-between items-start mb-1">
                        <h4 className={`text-sm font-bold ${notif.unread ? 'text-slate-900 dark:text-white' : 'text-slate-700 dark:text-slate-300'}`}>{notif.title}</h4>
                        <span className="text-[10px] text-slate-500 font-medium">{notif.time}</span>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2">{notif.message}</p>
                    </div>
                  ))}
                </div>
                <div className="p-3 text-center border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
                  <button className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline uppercase tracking-widest">View All</button>
                </div>
              </div>
            )}
          </div>

          <div className="relative" ref={langRef}>
            <button 
              onClick={() => setShowLanguageMenu(!showLanguageMenu)}
              className="flex items-center justify-center hover:bg-emerald-800 transition-colors p-1 rounded"
            >
              <span className="material-symbols-outlined cursor-pointer">language</span>
            </button>
            
            {showLanguageMenu && (
              <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-slate-900 rounded-xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden text-slate-800 dark:text-slate-200 animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="py-1">
                  <button 
                    onClick={() => { setCurrentLanguage('English'); setShowLanguageMenu(false); }}
                    className={`w-full text-left px-4 py-2 text-sm hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors ${currentLanguage === 'English' ? 'font-bold text-[#00503a] dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20' : ''}`}
                  >
                    English
                  </button>
                  <button 
                    onClick={() => { setCurrentLanguage('Bangla'); setShowLanguageMenu(false); }}
                    className={`w-full text-left px-4 py-2 text-sm hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors ${currentLanguage === 'Bangla' ? 'font-bold text-[#00503a] dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20' : ''}`}
                  >
                    Bangla (বাংলা)
                  </button>
                </div>
              </div>
            )}
          </div>
          <Link to="/profile" className="w-8 h-8 rounded-full overflow-hidden border-2 border-emerald-500/30 block cursor-pointer hover:border-emerald-400 transition-colors">
            <img alt="User Profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHqpmZmq_6jWSzVeO7cvKMjMJjG0ugbe46ul9DRU6KLrfBY49EinbTCOG28UAG6PpD6RZH2uArcVWH7Lix-RjYfd9ffxZyVwfA6sW4xS_s4B1edURZZpWh3VAXUHa9TliMIYrNFZBKm_fLXLGRpzzzQ0KRjSaYWuupM-UcM6W4JqlIZBhPzIF54Xpd1JB6fEZpxPlh7FTEMH2rRfUT66hoj9dBbGfYMq9JipmbVE_KwaKe0PSWFird9cUiQV3ghBa6SWywWYvxMzhU" />
          </Link>
        </div>
      </div>
    </header>
  );
}
