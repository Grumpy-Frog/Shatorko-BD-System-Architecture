import React from 'react';

export default function DialectLab() {
  return (
    <main className="p-4 md:p-8 min-h-screen bg-surface">
      {/* Header Section */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
        <div>
          <span className="text-primary font-bold tracking-widest text-[10px] uppercase mb-2 block">AI Language Processing</span>
          <h1 className="text-3xl font-black font-headline text-on-surface tracking-tight">Dialect Configuration Lab</h1>
        </div>
        <div className="flex gap-4">
          <button className="flex items-center gap-2 px-6 py-3 bg-surface-container-high hover:bg-surface-dim transition-colors rounded-lg text-sm font-bold text-on-surface">
            <span className="material-symbols-outlined text-lg">history</span>
            TRAINING HISTORY
          </button>
          <button className="flex items-center gap-2 px-8 py-3 bg-gradient-to-br from-primary to-primary-container text-white rounded-lg text-sm font-bold shadow-lg shadow-primary/20 hover:opacity-90 transition-opacity">
            <span className="material-symbols-outlined text-lg">add</span>
            NEW DIALECT PROFILE
          </button>
        </div>
      </header>

      {/* Dialect Status Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 mb-7">
        {/* Total Dialects */}
        <div className="bg-surface-container-low p-6 rounded-xl flex flex-col justify-between border border-outline-variant/10">
          <div className="flex justify-between items-start">
            <div className="p-3 bg-primary/10 rounded-lg">
              <span className="material-symbols-outlined text-primary">translate</span>
            </div>
            <span className="text-[10px] font-bold text-primary px-2 py-0.5 bg-primary/10 rounded uppercase">Active</span>
          </div>
          <div className="mt-8">
            <p className="text-on-surface-variant text-xs font-bold uppercase tracking-wider">Total Active Dialects</p>
            <h3 className="text-3xl font-black font-headline mt-1">42</h3>
            <p className="text-[10px] text-on-surface-variant mt-2 flex items-center gap-1">
              <span className="text-primary font-bold">+3</span> added this month
            </p>
          </div>
        </div>

        {/* High Confidence */}
        <div className="bg-surface-container-low p-6 rounded-xl flex flex-col justify-between border border-outline-variant/10">
          <div className="flex justify-between items-start">
            <div className="p-3 bg-secondary/10 rounded-lg">
              <span className="material-symbols-outlined text-secondary">verified</span>
            </div>
            <span className="text-[10px] font-bold text-secondary px-2 py-0.5 bg-secondary/10 rounded uppercase">Verified</span>
          </div>
          <div className="mt-8">
            <p className="text-on-surface-variant text-xs font-bold uppercase tracking-wider">High Confidence Models</p>
            <h3 className="text-3xl font-black font-headline mt-1">28</h3>
            <p className="text-[10px] text-on-surface-variant mt-2 flex items-center gap-1">
              Confidence score: <span className="text-secondary font-bold">&gt;95%</span>
            </p>
          </div>
        </div>

        {/* Low Confidence */}
        <div className="bg-surface-container-low p-6 rounded-xl flex flex-col justify-between border border-outline-variant/10">
          <div className="flex justify-between items-start">
            <div className="p-3 bg-tertiary/10 rounded-lg">
              <span className="material-symbols-outlined text-tertiary">warning</span>
            </div>
            <span className="text-[10px] font-bold text-tertiary px-2 py-0.5 bg-tertiary/10 rounded uppercase">Training</span>
          </div>
          <div className="mt-8">
            <p className="text-on-surface-variant text-xs font-bold uppercase tracking-wider">Low Confidence Models</p>
            <h3 className="text-3xl font-black font-headline mt-1">8</h3>
            <p className="text-[10px] text-on-surface-variant mt-2 flex items-center gap-1">
              Requires <span className="text-tertiary font-bold">Manual Review</span>
            </p>
          </div>
        </div>

        {/* Total Samples */}
        <div className="bg-surface-container-low p-6 rounded-xl flex flex-col justify-between border border-outline-variant/10">
          <div className="flex justify-between items-start">
            <div className="p-3 bg-primary-container/10 rounded-lg">
              <span className="material-symbols-outlined text-primary-container">audio_file</span>
            </div>
            <span className="text-[10px] font-bold text-primary-container px-2 py-0.5 bg-primary-container/10 rounded uppercase">Data</span>
          </div>
          <div className="mt-8">
            <p className="text-on-surface-variant text-xs font-bold uppercase tracking-wider">Total Voice Samples</p>
            <h3 className="text-3xl font-black font-headline mt-1">12.4K</h3>
            <p className="text-[10px] text-on-surface-variant mt-2 flex items-center gap-1">
              <span className="text-primary-container font-bold">1.2 TB</span> of training data
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-12 gap-7">
        {/* Dialect Models List */}
        <div className="col-span-12 lg:col-span-8 bg-surface-container-low rounded-xl p-6 border border-outline-variant/10">
          <div className="flex justify-between items-center mb-6">
            <h4 className="text-sm font-black font-headline uppercase tracking-widest text-on-surface">Dialect Models</h4>
            <div className="flex gap-2">
              <button className="px-3 py-1.5 bg-surface-container-high rounded-md text-[10px] font-bold text-on-surface hover:bg-surface-dim transition-colors">ALL</button>
              <button className="px-3 py-1.5 bg-primary/10 rounded-md text-[10px] font-bold text-primary">HIGH CONFIDENCE</button>
              <button className="px-3 py-1.5 bg-surface-container-high rounded-md text-[10px] font-bold text-on-surface hover:bg-surface-dim transition-colors">TRAINING</button>
            </div>
          </div>
          
          <div className="space-y-4">
            {/* Dialect Item 1 */}
            <div className="bg-surface-container-lowest p-5 rounded-lg border border-outline-variant/10 hover:border-primary/30 transition-all cursor-pointer group shadow-sm">
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-black bg-primary/10 text-primary px-2 py-0.5 rounded uppercase">#DL-9042</span>
                  <span className="text-[10px] font-black bg-surface-container-highest text-on-surface-variant px-2 py-0.5 rounded uppercase">CHITTAGONG</span>
                </div>
                <span className="text-[10px] text-on-surface-variant font-medium">98.2% Confidence</span>
              </div>
              <h5 className="text-lg font-bold text-on-surface mb-2 group-hover:text-primary transition-colors">Chatgaya Dialect Profile</h5>
              <p className="text-sm text-on-surface-variant mb-4 line-clamp-2">High-confidence model for the Chittagong region. Successfully handles complex phonetic variations and local idioms. Used in emergency broadcasts.</p>
              <div className="flex justify-between items-center pt-4 border-t border-outline-variant/10">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-surface-container-highest flex items-center justify-center text-[10px] font-bold">AI</div>
                  <span className="text-xs font-bold text-on-surface">Sentinel AI Core</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1 text-on-surface-variant">
                    <span className="material-symbols-outlined text-sm">location_on</span>
                    <span className="text-[10px] font-bold uppercase">Chittagong Region</span>
                  </div>
                  <button className="px-4 py-1.5 bg-primary text-white text-[10px] font-black uppercase tracking-widest rounded hover:bg-primary-container transition-colors">DEPLOYED</button>
                </div>
              </div>
            </div>

            {/* Dialect Item 2 */}
            <div className="bg-surface-container-lowest p-5 rounded-lg border border-outline-variant/10 hover:border-primary/30 transition-all cursor-pointer group shadow-sm">
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-black bg-secondary/10 text-secondary px-2 py-0.5 rounded uppercase">#DL-8115</span>
                  <span className="text-[10px] font-black bg-surface-container-highest text-on-surface-variant px-2 py-0.5 rounded uppercase">SYLHET</span>
                </div>
                <span className="text-[10px] text-on-surface-variant font-medium">92.4% Confidence</span>
              </div>
              <h5 className="text-lg font-bold text-on-surface mb-2 group-hover:text-primary transition-colors">Sylheti Dialect Profile</h5>
              <p className="text-sm text-on-surface-variant mb-4 line-clamp-2">Stable model for the Sylhet region. Good performance on standard Sylheti speech. Minor improvements needed for rural variations.</p>
              <div className="flex justify-between items-center pt-4 border-t border-outline-variant/10">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center text-[10px] font-bold text-secondary">AI</div>
                  <span className="text-xs font-bold text-on-surface">Sentinel AI Core</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1 text-on-surface-variant">
                    <span className="material-symbols-outlined text-sm">location_on</span>
                    <span className="text-[10px] font-bold uppercase">Sylhet Region</span>
                  </div>
                  <button className="px-4 py-1.5 bg-surface-container-highest text-on-surface text-[10px] font-black uppercase tracking-widest rounded hover:bg-surface-dim transition-colors">ACTIVE</button>
                </div>
              </div>
            </div>

            {/* Dialect Item 3 */}
            <div className="bg-surface-container-lowest p-5 rounded-lg border border-outline-variant/10 hover:border-primary/30 transition-all cursor-pointer group shadow-sm">
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-black bg-tertiary/10 text-tertiary px-2 py-0.5 rounded uppercase">#DL-7702</span>
                  <span className="text-[10px] font-black bg-surface-container-highest text-on-surface-variant px-2 py-0.5 rounded uppercase">RANGPUR</span>
                </div>
                <span className="text-[10px] text-on-surface-variant font-medium">64.5% Confidence</span>
              </div>
              <h5 className="text-lg font-bold text-on-surface mb-2 group-hover:text-primary transition-colors">Rangpuri Dialect Profile</h5>
              <p className="text-sm text-on-surface-variant mb-4 line-clamp-2">Training model for the Rangpur region. Currently gathering more voice samples to improve phonetic accuracy. Manual review active.</p>
              <div className="flex justify-between items-center pt-4 border-t border-outline-variant/10">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-tertiary/20 flex items-center justify-center text-[10px] font-bold text-tertiary">AI</div>
                  <span className="text-xs font-bold text-on-surface">Sentinel AI Core</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1 text-on-surface-variant">
                    <span className="material-symbols-outlined text-sm">location_on</span>
                    <span className="text-[10px] font-bold uppercase">Rangpur Region</span>
                  </div>
                  <button className="px-4 py-1.5 bg-tertiary text-white text-[10px] font-black uppercase tracking-widest rounded hover:bg-tertiary-container transition-colors">TRAINING</button>
                </div>
              </div>
            </div>
          </div>
          
          <button className="w-full mt-6 py-4 bg-surface-container-high rounded-lg text-xs font-black tracking-widest text-on-surface uppercase hover:bg-surface-dim transition-all">
            LOAD MORE PROFILES
          </button>
        </div>

        {/* Right Panel: Training Progress & Stats */}
        <div className="col-span-12 lg:col-span-4 flex flex-col gap-7">
          {/* Training Progress View */}
          <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/10">
            <h4 className="text-sm font-black font-headline uppercase tracking-widest text-on-surface mb-4">Training Progress</h4>
            <div className="aspect-square bg-surface-container-highest rounded-lg relative overflow-hidden border border-outline-variant/10 flex items-center justify-center">
              <div className="relative w-48 h-48">
                <svg className="w-full h-full transform -rotate-90">
                  <circle
                    className="text-on-surface/5"
                    strokeWidth="12"
                    stroke="currentColor"
                    fill="transparent"
                    r="80"
                    cx="96"
                    cy="96"
                  />
                  <circle
                    className="text-primary"
                    strokeWidth="12"
                    strokeDasharray={2 * Math.PI * 80}
                    strokeDashoffset={2 * Math.PI * 80 * (1 - 0.75)}
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="transparent"
                    r="80"
                    cx="96"
                    cy="96"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-4xl font-black text-on-surface">75%</span>
                  <span className="text-[10px] font-bold text-on-surface-variant uppercase">Overall Accuracy</span>
                </div>
              </div>
            </div>
            <div className="mt-4 flex justify-between items-center">
              <span className="text-[10px] font-bold text-on-surface-variant uppercase">Models in Training</span>
              <span className="text-sm font-black text-primary">8 / 42</span>
            </div>
          </div>

          {/* Regional Accuracy */}
          <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/10 flex-1">
            <h4 className="text-sm font-black font-headline uppercase tracking-widest text-on-surface mb-6">Regional Accuracy</h4>
            <div className="space-y-5">
              <div>
                <div className="flex justify-between items-end mb-2">
                  <span className="text-xs font-bold text-on-surface">Dhaka Central</span>
                  <span className="text-xs font-bold text-primary">99%</span>
                </div>
                <div className="h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-[99%]"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-end mb-2">
                  <span className="text-xs font-bold text-on-surface">Chittagong Region</span>
                  <span className="text-xs font-bold text-secondary">98%</span>
                </div>
                <div className="h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
                  <div className="h-full bg-secondary w-[98%]"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-end mb-2">
                  <span className="text-xs font-bold text-on-surface">Sylhet Region</span>
                  <span className="text-xs font-bold text-amber-500">92%</span>
                </div>
                <div className="h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
                  <div className="h-full bg-amber-500 w-[92%]"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-end mb-2">
                  <span className="text-xs font-bold text-on-surface">Rangpur Region</span>
                  <span className="text-xs font-bold text-tertiary">64%</span>
                </div>
                <div className="h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
                  <div className="h-full bg-tertiary w-[64%]"></div>
                </div>
              </div>
            </div>
            <button className="w-full mt-8 py-3 bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest rounded-lg hover:bg-primary/20 transition-colors">
              VIEW DETAILED ANALYTICS
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
