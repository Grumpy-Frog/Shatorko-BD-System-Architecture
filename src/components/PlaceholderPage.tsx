import React from 'react';

export default function PlaceholderPage({ title, description, icon }: { title: string, description: string, icon: string }) {
  return (
    <main className="bg-surface p-4 md:p-8 min-h-[calc(100vh-64px)] flex items-center justify-center">
      <div className="max-w-2xl mx-auto text-center space-y-6">
        <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto text-primary">
          <span className="material-symbols-outlined text-5xl">{icon}</span>
        </div>
        <h1 className="font-headline text-4xl font-black tracking-tight text-on-background">{title}</h1>
        <p className="text-on-surface-variant font-body text-lg">{description}</p>
        
        <div className="grid grid-cols-2 gap-4 mt-8">
          <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/20">
            <div className="w-8 h-8 bg-surface-container-high rounded mb-3"></div>
            <div className="h-4 bg-surface-container-high rounded w-3/4 mb-2"></div>
            <div className="h-3 bg-surface-container-high rounded w-1/2"></div>
          </div>
          <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/20">
            <div className="w-8 h-8 bg-surface-container-high rounded mb-3"></div>
            <div className="h-4 bg-surface-container-high rounded w-3/4 mb-2"></div>
            <div className="h-3 bg-surface-container-high rounded w-1/2"></div>
          </div>
        </div>
      </div>
    </main>
  );
}
