import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NAV_ITEMS = [
  { 
    path: '/dashboard', 
    icon: 'dashboard', 
    label: 'Central Command'
  },
  { 
    path: '/volunteer', 
    icon: 'volunteer_activism', 
    label: 'Volunteer Portal',
    subItems: [
      { path: '/volunteer', label: 'Active Volunteers' },
      { path: '/volunteer/registration', label: 'Registration' },
      { path: '/volunteer/training', label: 'Training & Readiness' }
    ]
  },
  { 
    path: '/map', 
    icon: 'map', 
    label: 'Relay Monitor'
  },
  { 
    path: '/edge', 
    icon: 'memory', 
    label: 'Edge-AI Engine',
    subItems: [
      { path: '/edge', label: 'Model Status' },
      { path: '/edge/training', label: 'Training Data' },
      { path: '/edge/firmware', label: 'Firmware Control' },
      { path: '/edge/simulation', label: 'Edge Simulation' },
      { path: '/edge/dialect-lab', label: 'Dialect Lab' }
    ]
  },
  { 
    path: '/shelters', 
    icon: 'home_health', 
    label: 'Shelter Mgmt'
  },
  { 
    path: '/public', 
    icon: 'public', 
    label: 'Public Portal',
    subItems: [
      { path: '/public', label: 'Portal Management' },
      { path: '/public-portal', label: 'Live Portal View' }
    ]
  },
  { 
    path: '/impact', 
    icon: 'report', 
    label: 'Impact Reporting'
  },
  { 
    path: '/infrastructure', 
    icon: 'router', 
    label: 'LoRaWAN Infra'
  },
  { 
    path: '/logistics', 
    icon: 'local_shipping', 
    label: 'Resource Allocation',
    subItems: [
      { path: '/logistics', label: 'Active Deployments' },
      { path: '/logistics/inventory', label: 'National Inventory' },
      { path: '/logistics/dispatch', label: 'Dispatch Units' }
    ]
  },
  { 
    path: '/reports', 
    icon: 'analytics', 
    label: 'Readiness Report'
  },
  { 
    path: '/maintenance', 
    icon: 'build', 
    label: 'Hardware Maint.',
    subItems: [
      { path: '/maintenance', label: 'Maintenance Overview' },
      { path: '/maintenance/tickets', label: 'Field Service Tickets' }
    ]
  },
  { 
    path: '/directory', 
    icon: 'contact_phone', 
    label: 'Directory'
  },
  { 
    path: '/audit', 
    icon: 'security', 
    label: 'Security Audit'
  },
  { 
    path: '/archive', 
    icon: 'history', 
    label: 'Disaster Archive'
  },
  { 
    path: '/profile', 
    icon: 'person', 
    label: 'Operator Profile'
  },
];

export default function SideNavBar({ isOpen = true }: { isOpen?: boolean }) {
  const location = useLocation();
  const [expandedMenus, setExpandedMenus] = useState<Record<string, boolean>>({});

  // Automatically expand the menu that contains the active route
  useEffect(() => {
    const activeItem = NAV_ITEMS.find(item => 
      location.pathname === item.path || 
      item.subItems?.some(sub => location.pathname === sub.path)
    );
    
    if (activeItem && !expandedMenus[activeItem.path]) {
      setExpandedMenus(prev => ({
        ...prev,
        [activeItem.path]: true
      }));
    }
  }, [location.pathname]);

  const toggleMenu = (path: string) => {
    setExpandedMenus(prev => ({
      ...prev,
      [path]: !prev[path]
    }));
  };

  return (
    <aside 
      className={`bg-slate-50 dark:bg-[#1b1c1c] flex flex-col h-[calc(100vh-64px)] border-r border-slate-200/10 fixed left-0 top-16 font-body text-sm font-medium z-40 overflow-y-auto overflow-x-hidden custom-scrollbar pb-6 transition-all duration-300 ease-in-out ${
        isOpen ? 'w-72 translate-x-0' : 'w-20 -translate-x-full lg:translate-x-0'
      }`}
    >
      <div className={`p-6 flex items-center gap-4 shrink-0 ${isOpen ? '' : 'justify-center px-0'}`}>
        <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white shrink-0">
          <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>account_balance</span>
        </div>
        {isOpen && (
          <div className="whitespace-nowrap overflow-hidden">
            <p className="text-slate-900 dark:text-white font-bold text-base leading-tight">National Command</p>
            <p className="text-slate-500 dark:text-slate-400 text-xs">Dhaka HQ - Zone A</p>
          </div>
        )}
      </div>

      <nav className="flex-1 mt-2 space-y-1 px-2 shrink-0">
        {NAV_ITEMS.map((item) => {
          const isExpanded = expandedMenus[item.path];
          const isActive = location.pathname === item.path || item.subItems?.some(sub => location.pathname === sub.path);
          
          return (
            <div key={item.path} className="flex flex-col">
              <div className={`rounded-lg flex items-center justify-between transition-all ${isActive ? 'bg-emerald-50 dark:bg-emerald-900/30 text-[#00503a] dark:text-emerald-400' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'}`}>
                <Link 
                  to={item.path} 
                  title={!isOpen ? item.label : undefined}
                  onClick={() => {
                    if (!expandedMenus[item.path]) {
                      setExpandedMenus(prev => ({ ...prev, [item.path]: true }));
                    }
                  }}
                  className={`py-3 flex items-center flex-1 ${isOpen ? 'px-4 gap-3' : 'px-0 justify-center'}`}
                >
                  <span className="material-symbols-outlined shrink-0" style={{ fontVariationSettings: isActive ? "'FILL' 1" : "" }}>{item.icon}</span>
                  {isOpen && <span className="whitespace-nowrap overflow-hidden">{item.label}</span>}
                </Link>
                {isOpen && item.subItems && (
                  <button 
                    onClick={(e) => { 
                      e.preventDefault(); 
                      e.stopPropagation();
                      toggleMenu(item.path); 
                    }}
                    className="p-3 flex items-center justify-center hover:bg-black/5 dark:hover:bg-white/5 rounded-r-lg"
                  >
                    <span className={`material-symbols-outlined shrink-0 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}>expand_more</span>
                  </button>
                )}
              </div>
              
              {isOpen && isExpanded && item.subItems && (
                <div className="ml-11 mt-1 flex flex-col space-y-1 border-l border-slate-200 dark:border-slate-700/50 pl-2 mb-2">
                  {item.subItems.map((subItem) => {
                    const isSubActive = location.pathname === subItem.path;
                    return (
                      <Link
                        key={subItem.path}
                        to={subItem.path}
                        className={`py-2 px-3 rounded-md text-sm transition-colors ${isSubActive ? 'bg-emerald-50 dark:bg-emerald-900/20 text-[#00503a] dark:text-emerald-400 font-semibold' : 'text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:text-slate-900 dark:hover:text-slate-200'}`}
                      >
                        {subItem.label}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      <div className={`p-4 shrink-0 mt-4 ${isOpen ? 'mx-2' : 'mx-0 flex justify-center'}`}>
        <Link 
          to="/alerts"
          title={!isOpen ? "Create Alert" : undefined}
          className={`bg-primary hover:bg-primary-container text-white py-3 rounded-lg font-bold flex items-center justify-center shadow-lg transition-all active:scale-95 ${isOpen ? 'w-full gap-2' : 'w-12 h-12'}`}
        >
          <span className="material-symbols-outlined text-lg">add_alert</span>
          {isOpen && <span className="whitespace-nowrap overflow-hidden">Create Alert</span>}
        </Link>
      </div>

      <div className="border-t border-slate-200/10 pt-4 space-y-1 shrink-0">
        <Link to="/settings" title={!isOpen ? "Settings" : undefined} className={`text-slate-600 dark:text-slate-400 py-3 rounded-lg flex items-center transition-colors hover:bg-slate-100 dark:hover:bg-slate-800 ${isOpen ? 'px-4 mx-2 gap-3' : 'px-0 justify-center mx-2'}`}>
          <span className="material-symbols-outlined shrink-0">settings</span>
          {isOpen && <span className="whitespace-nowrap overflow-hidden">Settings</span>}
        </Link>
        <Link to="/support" title={!isOpen ? "Support" : undefined} className={`text-slate-600 dark:text-slate-400 py-3 rounded-lg flex items-center transition-colors hover:bg-slate-100 dark:hover:bg-slate-800 ${isOpen ? 'px-4 mx-2 gap-3' : 'px-0 justify-center mx-2'}`}>
          <span className="material-symbols-outlined shrink-0">help</span>
          {isOpen && <span className="whitespace-nowrap overflow-hidden">Support</span>}
        </Link>
      </div>
    </aside>
  );
}
