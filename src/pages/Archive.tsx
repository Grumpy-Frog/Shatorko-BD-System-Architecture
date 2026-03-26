import React from 'react';

export default function Archive() {
  return (
    <main className="pt-16 min-h-screen">
      <div className="max-w-[1400px] mx-auto p-8 space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-outline-variant/20 pb-8">
          <div className="space-y-2">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-primary">Historical Database</span>
            <h1 className="text-5xl font-extrabold tracking-tighter text-on-surface font-headline">Disaster Archive</h1>
            <p className="text-on-surface-variant max-w-2xl font-medium">Comprehensive records of past events, response strategies, and post-incident analyses for predictive modeling.</p>
          </div>
          <div className="flex gap-3 w-full md:w-auto">
            <div className="relative flex-1 md:w-64">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
              <input className="w-full bg-surface-container-high border-none rounded-md pl-10 pr-4 py-2.5 text-sm font-medium focus:ring-2 focus:ring-primary/40 transition-shadow" placeholder="Search archives..." type="text"/>
            </div>
            <button className="px-4 py-2.5 bg-surface-container-high text-on-surface font-bold rounded-md hover:bg-surface-container-highest transition-colors flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">filter_list</span>
              Filters
            </button>
          </div>
        </div>

        {/* Timeline & Featured Event */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Featured Historical Event */}
          <div className="lg:col-span-2 bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm border border-outline-variant/20 group">
            <div className="h-64 bg-surface-container-highest relative overflow-hidden">
              <img alt="Cyclone Amphan Satellite View" className="w-full h-full object-cover opacity-80 mix-blend-multiply group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyCsFJ5Ec9jP0O28F3DhzvokHmBwN_kKkIkt3GjozW15dPS1XqvEUgv57KzW38CW6-0mwPOgkAeGHNc6pFTRtQcjIqwz-HEOXzkkwNHMsJmeuE7nlo-OLTBRYo2Td7CqdZKgZ3Wx3o3KTMzxujQE2nMD4D2HQMiVR835zn07mPu8ISdowlJoDgzjndA3SOJ6qG1k16ewQOpRyYkoMNxDb3Hn9pS0WJAJXb0_i9K_ItsH9BUQ3llQ9ygyetKi8eLZgBRQZJNZ6jQ45V"/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="bg-error text-white px-2 py-1 rounded text-[0.65rem] font-black uppercase tracking-widest">Category 5</span>
                <span className="bg-surface/90 backdrop-blur text-on-surface px-2 py-1 rounded text-[0.65rem] font-bold uppercase tracking-widest">May 2020</span>
              </div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h2 className="text-3xl font-extrabold tracking-tight font-headline mb-1">Super Cyclone Amphan</h2>
                <p className="text-sm text-white/80 font-medium max-w-xl line-clamp-2">One of the most powerful storms to hit the Bay of Bengal, requiring the evacuation of over 2.4 million people across coastal districts.</p>
              </div>
            </div>
            <div className="p-6 grid grid-cols-3 gap-4 border-b border-outline-variant/10">
              <div>
                <span className="text-[0.65rem] font-bold uppercase tracking-wider text-outline block mb-1">Impact Area</span>
                <span className="text-sm font-bold text-on-surface">Khulna, Satkhira, Bagerhat</span>
              </div>
              <div>
                <span className="text-[0.65rem] font-bold uppercase tracking-wider text-outline block mb-1">Evacuated</span>
                <span className="text-sm font-bold text-on-surface">2.4M+</span>
              </div>
              <div>
                <span className="text-[0.65rem] font-bold uppercase tracking-wider text-outline block mb-1">Economic Loss</span>
                <span className="text-sm font-bold text-error">Est. $1.5B</span>
              </div>
            </div>
            <div className="p-4 bg-surface-container-lowest flex justify-between items-center">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-primary-container border-2 border-surface flex items-center justify-center text-[0.6rem] font-bold text-on-primary-container">ND</div>
                <div className="w-8 h-8 rounded-full bg-tertiary-container border-2 border-surface flex items-center justify-center text-[0.6rem] font-bold text-on-tertiary-container">RC</div>
                <div className="w-8 h-8 rounded-full bg-surface-container-high border-2 border-surface flex items-center justify-center text-[0.6rem] font-bold text-on-surface">+3</div>
              </div>
              <button className="text-sm font-bold text-primary hover:text-primary/80 flex items-center gap-1 transition-colors">
                View Full Report <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>
          </div>

          {/* Decade Timeline */}
          <div className="bg-surface-container-low rounded-xl p-6 shadow-sm">
            <h3 className="text-sm font-bold uppercase tracking-wider text-outline mb-6">Decadal Frequency</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="text-xs font-bold font-mono w-12">2020s</span>
                <div className="flex-1 h-3 bg-surface-container-highest rounded-full overflow-hidden">
                  <div className="bg-error h-full w-[45%]"></div>
                </div>
                <span className="text-xs font-bold text-on-surface-variant w-6 text-right">12</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-xs font-bold font-mono w-12">2010s</span>
                <div className="flex-1 h-3 bg-surface-container-highest rounded-full overflow-hidden">
                  <div className="bg-orange-500 h-full w-[85%]"></div>
                </div>
                <span className="text-xs font-bold text-on-surface-variant w-6 text-right">24</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-xs font-bold font-mono w-12">2000s</span>
                <div className="flex-1 h-3 bg-surface-container-highest rounded-full overflow-hidden">
                  <div className="bg-tertiary h-full w-[60%]"></div>
                </div>
                <span className="text-xs font-bold text-on-surface-variant w-6 text-right">18</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-xs font-bold font-mono w-12">1990s</span>
                <div className="flex-1 h-3 bg-surface-container-highest rounded-full overflow-hidden">
                  <div className="bg-secondary h-full w-[75%]"></div>
                </div>
                <span className="text-xs font-bold text-on-surface-variant w-6 text-right">21</span>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-outline-variant/20">
              <h4 className="text-[0.65rem] font-bold uppercase tracking-wider text-outline mb-3">Primary Threat Types</h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-surface-container-highest text-on-surface text-xs font-semibold rounded">Cyclones (42%)</span>
                <span className="px-2 py-1 bg-surface-container-highest text-on-surface text-xs font-semibold rounded">Floods (38%)</span>
                <span className="px-2 py-1 bg-surface-container-highest text-on-surface text-xs font-semibold rounded">Landslides (12%)</span>
                <span className="px-2 py-1 bg-surface-container-highest text-on-surface text-xs font-semibold rounded">Other (8%)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Archive Grid */}
        <div>
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-extrabold tracking-tight font-headline">Archive Directory</h3>
            <div className="flex gap-2">
              <button className="text-xs font-bold text-on-surface-variant hover:text-primary transition-colors">Sort by Date</button>
              <span className="text-outline-variant">|</span>
              <button className="text-xs font-bold text-on-surface-variant hover:text-primary transition-colors">Sort by Severity</button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Archive Card 1 */}
            <div className="bg-surface-container-lowest border border-outline-variant/20 rounded-xl p-5 hover:shadow-md transition-shadow group cursor-pointer flex flex-col h-full">
              <div className="flex justify-between items-start mb-4">
                <span className="px-2 py-0.5 bg-error-container text-on-error-container text-[0.6rem] font-black uppercase tracking-widest rounded">Cyclone</span>
                <span className="text-xs font-mono text-on-surface-variant">2007</span>
              </div>
              <h4 className="text-lg font-bold text-on-surface mb-2 group-hover:text-primary transition-colors">Cyclone Sidr</h4>
              <p className="text-sm text-on-surface-variant line-clamp-3 mb-4 flex-grow">A Category 5 equivalent tropical cyclone that resulted in one of the worst natural disasters in Bangladesh.</p>
              <div className="pt-4 border-t border-outline-variant/10 flex justify-between items-center mt-auto">
                <span className="text-[0.65rem] font-bold uppercase tracking-wider text-outline">12 Documents</span>
                <span className="material-symbols-outlined text-sm text-on-surface-variant group-hover:text-primary transition-colors">open_in_new</span>
              </div>
            </div>

            {/* Archive Card 2 */}
            <div className="bg-surface-container-lowest border border-outline-variant/20 rounded-xl p-5 hover:shadow-md transition-shadow group cursor-pointer flex flex-col h-full">
              <div className="flex justify-between items-start mb-4">
                <span className="px-2 py-0.5 bg-secondary-container text-on-secondary-container text-[0.6rem] font-black uppercase tracking-widest rounded">Flood</span>
                <span className="text-xs font-mono text-on-surface-variant">1998</span>
              </div>
              <h4 className="text-lg font-bold text-on-surface mb-2 group-hover:text-primary transition-colors">1998 Bangladesh Floods</h4>
              <p className="text-sm text-on-surface-variant line-clamp-3 mb-4 flex-grow">Severe flooding that submerged over 75% of the country, lasting for more than two months.</p>
              <div className="pt-4 border-t border-outline-variant/10 flex justify-between items-center mt-auto">
                <span className="text-[0.65rem] font-bold uppercase tracking-wider text-outline">8 Documents</span>
                <span className="material-symbols-outlined text-sm text-on-surface-variant group-hover:text-primary transition-colors">open_in_new</span>
              </div>
            </div>

            {/* Archive Card 3 */}
            <div className="bg-surface-container-lowest border border-outline-variant/20 rounded-xl p-5 hover:shadow-md transition-shadow group cursor-pointer flex flex-col h-full">
              <div className="flex justify-between items-start mb-4">
                <span className="px-2 py-0.5 bg-error-container text-on-error-container text-[0.6rem] font-black uppercase tracking-widest rounded">Cyclone</span>
                <span className="text-xs font-mono text-on-surface-variant">1991</span>
              </div>
              <h4 className="text-lg font-bold text-on-surface mb-2 group-hover:text-primary transition-colors">1991 Bangladesh Cyclone</h4>
              <p className="text-sm text-on-surface-variant line-clamp-3 mb-4 flex-grow">Among the deadliest tropical cyclones on record, striking the Chittagong district with a 6m storm surge.</p>
              <div className="pt-4 border-t border-outline-variant/10 flex justify-between items-center mt-auto">
                <span className="text-[0.65rem] font-bold uppercase tracking-wider text-outline">24 Documents</span>
                <span className="material-symbols-outlined text-sm text-on-surface-variant group-hover:text-primary transition-colors">open_in_new</span>
              </div>
            </div>

            {/* Archive Card 4 */}
            <div className="bg-surface-container-lowest border border-outline-variant/20 rounded-xl p-5 hover:shadow-md transition-shadow group cursor-pointer flex flex-col h-full">
              <div className="flex justify-between items-start mb-4">
                <span className="px-2 py-0.5 bg-tertiary-container text-on-tertiary-container text-[0.6rem] font-black uppercase tracking-widest rounded">Cyclone</span>
                <span className="text-xs font-mono text-on-surface-variant">2009</span>
              </div>
              <h4 className="text-lg font-bold text-on-surface mb-2 group-hover:text-primary transition-colors">Cyclone Aila</h4>
              <p className="text-sm text-on-surface-variant line-clamp-3 mb-4 flex-grow">Caused extensive damage to embankments in the southwestern coastal region, leading to prolonged waterlogging.</p>
              <div className="pt-4 border-t border-outline-variant/10 flex justify-between items-center mt-auto">
                <span className="text-[0.65rem] font-bold uppercase tracking-wider text-outline">15 Documents</span>
                <span className="material-symbols-outlined text-sm text-on-surface-variant group-hover:text-primary transition-colors">open_in_new</span>
              </div>
            </div>
          </div>
          
          <div className="mt-8 flex justify-center">
            <button className="px-6 py-2 border border-outline-variant/30 rounded-full text-sm font-bold text-on-surface hover:bg-surface-container-low transition-colors">
              Load Older Records
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
