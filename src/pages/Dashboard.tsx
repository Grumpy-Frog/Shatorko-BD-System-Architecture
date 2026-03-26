import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  const [zoom, setZoom] = useState(1);

  const handleZoomIn = () => setZoom(prev => Math.min(prev + 0.5, 4));
  const handleZoomOut = () => setZoom(prev => Math.max(prev - 0.5, 0.5));
  const handleReset = () => setZoom(1);

  return (
    <main className="flex-1 relative overflow-hidden flex flex-col h-full min-h-[calc(100vh-64px)] bg-[#020617]">
      {/* Zoomable Map Container */}
      <div 
        className="absolute inset-0 transition-transform duration-700 ease-in-out" 
        style={{ transform: `scale(${zoom})`, transformOrigin: 'center center' }}
      >
        {/* Detailed SVG Map Layer (Barishal District Focus) */}
        <div className="absolute inset-0 z-0">
          <svg className="w-full h-full" preserveAspectRatio="xMidYMid slice" viewBox="0 0 800 1000" xmlns="http://www.w3.org/2000/svg">
            {/* Barishal District Landmass Contour (Stylized) */}
            <path className="fill-[#0f172a]" d="M300,200 L500,180 L650,300 L700,500 L650,750 L500,850 L300,820 L200,650 L180,400 Z"></path>
            
            {/* Major River Systems (Barishal Region) */}
            {/* Kirtankhola River */}
            <path className="fill-none stroke-[#1e3a8a] stroke-round" d="M400,200 Q450,400 420,600 T480,850" strokeWidth="12"></path>
            {/* Arial Khan River */}
            <path className="fill-none stroke-[#1e3a8a] stroke-round" d="M550,180 Q500,450 580,700" strokeWidth="10"></path>
            {/* Bishkhali River */}
            <path className="fill-none stroke-[#1e3a8a] stroke-round" d="M250,400 Q300,600 280,850" strokeWidth="8"></path>
            
            {/* Administrative Grid / Boundaries */}
            <path className="fill-none stroke-white/5" d="M0,200 L800,200 M0,400 L800,400 M0,600 L800,600 M0,800 L800,800" strokeWidth="1" strokeDasharray="4,4"></path>
            <path className="fill-none stroke-white/5" d="M200,0 L200,1000 M400,0 L400,1000 M600,0 L600,1000" strokeWidth="1" strokeDasharray="4,4"></path>
            
            {/* District Zones (Stylized) */}
            <circle cx="400" cy="450" fill="none" r="180" stroke="rgba(255,255,255,0.03)" strokeWidth="1"></circle>
            <circle cx="450" cy="700" fill="none" r="120" stroke="rgba(255,255,255,0.03)" strokeWidth="1"></circle>
          </svg>
        </div>

        {/* Data Overlays */}
        <div className="absolute inset-0 pointer-events-none z-10">
          {/* Alert Zone High Fidelity Markers */}
          <div className="absolute top-[60%] left-[50%] w-64 h-64 bg-tertiary/20 rounded-full border-2 border-tertiary/50 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute top-[40%] left-[35%] w-40 h-40 bg-secondary/20 rounded-full border-2 border-secondary/40 animate-pulse"></div>
          
          {/* LoRa Node Markers (Barishal Focus) */}
          <div className="w-2 h-2 bg-[#9ef4d0] rounded-full absolute shadow-[0_0_6px_#83d7b4] z-10" style={{ top: '45%', left: '50%' }}></div>
          <div className="w-2 h-2 bg-[#9ef4d0] rounded-full absolute shadow-[0_0_6px_#83d7b4] z-10" style={{ top: '55%', left: '45%' }}></div>
          <div className="w-2 h-2 bg-[#9ef4d0] rounded-full absolute shadow-[0_0_6px_#83d7b4] z-10" style={{ top: '65%', left: '55%' }}></div>
          <div className="w-2 h-2 bg-[#9ef4d0] rounded-full absolute shadow-[0_0_6px_#83d7b4] z-10" style={{ top: '75%', left: '48%' }}></div>
          <div className="w-2 h-2 bg-[#9ef4d0] rounded-full absolute shadow-[0_0_6px_#83d7b4] z-10" style={{ top: '35%', left: '55%' }}></div>
          <div className="w-2 h-2 bg-[#9ef4d0] rounded-full absolute shadow-[0_0_6px_#83d7b4] z-10" style={{ top: '25%', left: '40%' }}></div>
          <div className="w-2 h-2 bg-[#9ef4d0] rounded-full absolute shadow-[0_0_6px_#83d7b4] z-10" style={{ top: '80%', left: '60%' }}></div>
        </div>
      </div>

      {/* Dashboard Overlays */}
      <div className="absolute inset-0 pointer-events-none p-7 flex flex-col gap-7 z-20">
        {/* Top Row Stats: Global Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pointer-events-auto">
          <div className="bg-white/80 backdrop-blur-md rounded-xl p-5 shadow-sm border border-white/40 flex items-center gap-5">
            <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>groups</span>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant opacity-70">Total Protected People</p>
              <h2 className="text-2xl font-black text-primary tracking-tight">14,285,402</h2>
            </div>
          </div>
          
          <div className="bg-white/80 backdrop-blur-md rounded-xl p-5 shadow-sm border border-white/40 flex items-center gap-5">
            <div className="bg-secondary/10 w-14 h-14 rounded-lg flex items-center justify-center text-secondary">
              <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>door_open</span>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant opacity-70">Shelter Occupancy %</p>
              <h2 className="text-2xl font-black text-secondary tracking-tight">64.2%</h2>
            </div>
          </div>
          
          <div className="bg-white/80 backdrop-blur-md rounded-xl p-5 shadow-sm border border-white/40 flex items-center gap-5">
            <div className="bg-primary-container/10 w-14 h-14 rounded-lg flex items-center justify-center text-primary-container">
              <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>hub</span>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant opacity-70">Relay Success Rate</p>
              <h2 className="text-2xl font-black text-primary-container tracking-tight">99.8%</h2>
            </div>
          </div>
        </div>

        <div className="flex-1 flex gap-7 min-h-0">
          {/* Left Sidebar: Latest Alerts */}
          <div className="w-80 flex flex-col gap-5 pointer-events-auto">
            <div className="bg-white/80 backdrop-blur-md rounded-xl flex-1 flex flex-col min-h-0 shadow-xl border border-white/40">
              <div className="p-5 border-b border-on-surface/5 flex justify-between items-center">
                <h3 className="font-bold text-lg uppercase tracking-tighter">Latest Active Alerts</h3>
                <span className="bg-tertiary text-white text-[10px] px-2 py-0.5 rounded-full font-bold">4 NEW</span>
              </div>
              <div className="flex-1 overflow-y-auto p-3 space-y-3 custom-scrollbar">
                {/* Alert Item High */}
                <div className="bg-white p-4 rounded-lg border-l-4 border-tertiary shadow-sm">
                  <div className="flex justify-between items-start mb-1">
                    <span className="text-[10px] font-black uppercase text-tertiary tracking-widest">CRITICAL</span>
                    <span className="text-[10px] text-on-surface-variant">2m ago</span>
                  </div>
                  <h4 className="font-bold text-sm leading-tight text-on-surface mb-2">Cyclonic Surge - Barisal Division</h4>
                  <p className="text-xs text-on-surface-variant line-clamp-2">Water levels rising rapidly. Evacuation orders sent via LoRa nodes to 12 villages.</p>
                </div>
                
                {/* Alert Item Medium */}
                <div className="bg-white p-4 rounded-lg border-l-4 border-secondary shadow-sm opacity-90">
                  <div className="flex justify-between items-start mb-1">
                    <span className="text-[10px] font-black uppercase text-secondary tracking-widest">WARNING</span>
                    <span className="text-[10px] text-on-surface-variant">14m ago</span>
                  </div>
                  <h4 className="font-bold text-sm leading-tight text-on-surface mb-2">Flash Flood - Sylhet Region</h4>
                  <p className="text-xs text-on-surface-variant line-clamp-2">Inundation detected by sensors S-42 to S-45. Monitoring relay strength.</p>
                </div>
                
                {/* Alert Item Low */}
                <div className="bg-white p-4 rounded-lg border-l-4 border-primary shadow-sm opacity-80">
                  <div className="flex justify-between items-start mb-1">
                    <span className="text-[10px] font-black uppercase text-primary tracking-widest">ADVISORY</span>
                    <span className="text-[10px] text-on-surface-variant">45m ago</span>
                  </div>
                  <h4 className="font-bold text-sm leading-tight text-on-surface mb-2">Network Maintenance</h4>
                  <p className="text-xs text-on-surface-variant line-clamp-2">Gateway G-09 in Chittagong switching to solar backup.</p>
                </div>
              </div>
              <button className="p-4 text-xs font-bold text-primary hover:bg-primary/5 transition-colors uppercase tracking-widest border-t border-on-surface/5">
                View History Log
              </button>
            </div>
          </div>

          {/* Center Area: Map Controls & HUD */}
          <div className="flex-1 flex flex-col justify-end items-center pb-5 pointer-events-none">
            <div className="bg-white/80 backdrop-blur-md p-2 rounded-xl flex gap-1 shadow-2xl border border-white/50 pointer-events-auto">
              <button className="p-3 rounded-lg hover:bg-primary/10 text-on-surface transition-colors" title="Layers">
                <span className="material-symbols-outlined">layers</span>
              </button>
              <button 
                onClick={handleZoomIn}
                className="p-3 rounded-lg hover:bg-primary/10 text-on-surface transition-colors" 
                title="Zoom In"
              >
                <span className="material-symbols-outlined">zoom_in</span>
              </button>
              <button 
                onClick={handleZoomOut}
                className="p-3 rounded-lg hover:bg-primary/10 text-on-surface transition-colors" 
                title="Zoom Out"
              >
                <span className="material-symbols-outlined">zoom_out</span>
              </button>
              <div className="w-px bg-on-surface/10 mx-1"></div>
              <button 
                onClick={handleReset}
                className="p-3 rounded-lg hover:bg-primary/10 text-on-surface transition-colors" 
                title="Reset View"
              >
                <span className="material-symbols-outlined">my_location</span>
              </button>
            </div>
          </div>

          {/* Right Sidebar: LoRaWAN Network Status */}
          <div className="w-80 flex flex-col gap-5 pointer-events-auto">
            <div className="bg-white/80 backdrop-blur-md rounded-xl p-6 shadow-xl border border-white/40">
              <h3 className="font-bold text-lg uppercase tracking-tighter mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary-container">wifi_tethering</span>
                LoRaWAN Status
              </h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-end mb-2">
                    <span className="text-xs font-medium text-on-surface-variant">Active Nodes</span>
                    <span className="text-xl font-black text-on-surface">4,812 <span className="text-xs text-primary font-bold">/ 5,000</span></span>
                  </div>
                  <div className="h-2 bg-on-surface/5 rounded-full overflow-hidden">
                    <div className="h-full bg-primary-container rounded-full" style={{ width: '96.2%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-end mb-2">
                    <span className="text-xs font-medium text-on-surface-variant">Relay Points</span>
                    <span className="text-xl font-black text-on-surface">342 <span className="text-xs text-primary font-bold">ONLINE</span></span>
                  </div>
                  <div className="grid grid-cols-8 gap-1">
                    <div className="h-1 bg-primary-container rounded-full"></div>
                    <div className="h-1 bg-primary-container rounded-full"></div>
                    <div className="h-1 bg-primary-container rounded-full"></div>
                    <div className="h-1 bg-primary-container rounded-full"></div>
                    <div className="h-1 bg-primary-container rounded-full"></div>
                    <div className="h-1 bg-primary-container rounded-full animate-pulse"></div>
                    <div className="h-1 bg-tertiary rounded-full"></div>
                    <div className="h-1 bg-primary-container rounded-full"></div>
                  </div>
                </div>
                
                <div className="bg-surface-container-high rounded-lg p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-on-surface-variant uppercase">Network Latency</span>
                    <span className="text-[10px] font-bold text-primary">24ms</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-on-surface-variant uppercase">Satellite Uplink</span>
                    <span className="text-[10px] font-bold text-primary flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span> ACTIVE
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Legend */}
            <div className="bg-white/80 backdrop-blur-md rounded-xl p-5 shadow-xl border border-white/40">
              <h4 className="text-[10px] font-black uppercase text-on-surface-variant tracking-widest mb-3">Risk Level Legend</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="w-3 h-3 rounded-full bg-tertiary"></span>
                  <span className="text-xs font-medium">Extreme Risk (Immediate Action)</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-3 h-3 rounded-full bg-secondary"></span>
                  <span className="text-xs font-medium">High Risk (Monitoring)</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-3 h-3 rounded-full bg-primary-fixed-dim"></span>
                  <span className="text-xs font-medium">Normal / Safe Zone</span>
                </div>
              </div>
            </div>
            
            <Link to="/alerts" className="bg-tertiary hover:bg-tertiary-container text-white p-5 rounded-xl font-black uppercase tracking-widest text-sm flex items-center justify-center gap-3 shadow-2xl transition-all active:scale-95 group">
              <span className="material-symbols-outlined group-hover:rotate-90 transition-transform">bolt</span>
              New Emergency Alert
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
