import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import TopNavBar from './TopNavBar';
import SideNavBar from './SideNavBar';

export default function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex flex-col min-h-screen bg-background font-body text-on-background">
      <TopNavBar title="Shatorko BD" toggleSidebar={toggleSidebar} />
      <div className="flex flex-1 overflow-hidden relative pt-16">
        <SideNavBar isOpen={isSidebarOpen} />
        <div 
          className={`flex-1 overflow-y-auto transition-all duration-300 ${
            isSidebarOpen ? 'lg:ml-72' : 'lg:ml-20 ml-0'
          }`}
        >
          <Outlet />
        </div>
        {/* Mobile Overlay */}
        {isSidebarOpen && (
          <div 
            className="fixed inset-0 bg-black/50 z-30 lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}
      </div>
    </div>
  );
}
