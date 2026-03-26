import React, { useState } from 'react';

export default function VolunteerRegistration() {
  const [isRegistered, setIsRegistered] = useState(false);

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setIsRegistered(true);
    // Auto-close popup after 3 seconds
    setTimeout(() => {
      setIsRegistered(false);
    }, 3000);
  };

  return (
    <main className="p-4 md:p-8 min-h-[calc(100vh-64px)] bg-surface relative">
      {/* Success Popup */}
      {isRegistered && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-surface p-8 rounded-2xl shadow-2xl max-w-sm w-full text-center transform animate-in fade-in zoom-in duration-300">
            <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="material-symbols-outlined text-4xl">check_circle</span>
            </div>
            <h2 className="font-headline text-2xl font-black text-on-surface mb-2">Registration Successful</h2>
            <p className="text-on-surface-variant font-body text-sm mb-6">
              Thank you for volunteering. Your application has been submitted and is pending review.
            </p>
            <button 
              onClick={() => setIsRegistered(false)}
              className="w-full py-3 bg-primary text-white rounded-xl font-bold hover:bg-primary-container transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <span className="text-[0.75rem] font-bold tracking-[0.05em] uppercase text-primary">Join the Force</span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-on-surface font-headline mt-2">Volunteer Registration</h1>
          <p className="text-on-surface-variant mt-2 max-w-2xl">Register to become a part of the national disaster response and recovery network. Your skills can save lives.</p>
        </div>

        <form onSubmit={handleRegister} className="space-y-8 bg-surface-container-lowest p-6 md:p-8 rounded-2xl shadow-sm border border-outline-variant/20">
          
          {/* Personal Information */}
          <div>
            <h3 className="text-lg font-bold text-on-surface mb-4 flex items-center gap-2 border-b border-outline-variant/20 pb-2">
              <span className="material-symbols-outlined text-primary">person</span>
              Personal Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-on-surface">Full Name</label>
                <input required type="text" className="w-full p-3 rounded-lg bg-surface-container-high border-none focus:ring-2 focus:ring-primary outline-none transition-shadow" placeholder="Enter your full name" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-on-surface">National ID (NID)</label>
                <input required type="text" className="w-full p-3 rounded-lg bg-surface-container-high border-none focus:ring-2 focus:ring-primary outline-none transition-shadow" placeholder="10 or 17 digit NID" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-on-surface">Phone Number</label>
                <input required type="tel" className="w-full p-3 rounded-lg bg-surface-container-high border-none focus:ring-2 focus:ring-primary outline-none transition-shadow" placeholder="+880 1XXX-XXXXXX" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-on-surface">Blood Group</label>
                <select required className="w-full p-3 rounded-lg bg-surface-container-high border-none focus:ring-2 focus:ring-primary outline-none transition-shadow text-on-surface">
                  <option value="">Select Blood Group</option>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                </select>
              </div>
            </div>
          </div>

          {/* Location */}
          <div>
            <h3 className="text-lg font-bold text-on-surface mb-4 flex items-center gap-2 border-b border-outline-variant/20 pb-2">
              <span className="material-symbols-outlined text-primary">location_on</span>
              Location Details
            </h3>
            <div className="space-y-2">
              <label className="text-sm font-bold text-on-surface">Current Residential Address</label>
              <textarea required rows={3} className="w-full p-3 rounded-lg bg-surface-container-high border-none focus:ring-2 focus:ring-primary outline-none transition-shadow resize-none" placeholder="Enter your full address including district and upazila"></textarea>
            </div>
          </div>

          {/* Skills & Availability */}
          <div>
            <h3 className="text-lg font-bold text-on-surface mb-4 flex items-center gap-2 border-b border-outline-variant/20 pb-2">
              <span className="material-symbols-outlined text-primary">handyman</span>
              Skills & Availability
            </h3>
            <div className="space-y-4">
              <div className="space-y-3">
                <label className="text-sm font-bold text-on-surface">Primary Skills (Select all that apply)</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {[
                    'Medical / First Aid', 
                    'Search & Rescue', 
                    'Logistics & Supply', 
                    'Communications', 
                    'Shelter Management', 
                    'Water Rescue', 
                    'Debris Clearing', 
                    'Psychological Support'
                  ].map(skill => (
                    <label key={skill} className="flex items-center gap-3 p-3 rounded-lg bg-surface-container-low cursor-pointer hover:bg-surface-container-high transition-colors border border-transparent hover:border-outline-variant/30">
                      <input type="checkbox" className="w-4 h-4 text-primary bg-surface-container-highest border-none focus:ring-primary rounded" />
                      <span className="text-sm font-medium text-on-surface">{skill}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              <div className="space-y-3 pt-2">
                <label className="text-sm font-bold text-on-surface">Availability</label>
                <div className="flex flex-wrap gap-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="availability" value="immediate" defaultChecked className="text-primary focus:ring-primary" />
                    <span className="text-sm font-medium">Immediate Deployment</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="availability" value="weekends" className="text-primary focus:ring-primary" />
                    <span className="text-sm font-medium">Weekends Only</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="availability" value="remote" className="text-primary focus:ring-primary" />
                    <span className="text-sm font-medium">Remote Support Only</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-outline-variant/20 flex flex-col sm:flex-row justify-end gap-4">
            <button type="button" className="px-6 py-3 font-bold text-on-surface-variant hover:text-on-surface transition-colors rounded-xl hover:bg-surface-container-high">
              Cancel
            </button>
            <button type="submit" className="px-8 py-3 bg-primary text-white font-bold rounded-xl shadow-lg hover:bg-primary-container transition-all active:scale-95 flex items-center justify-center gap-2">
              <span className="material-symbols-outlined">how_to_reg</span>
              Register as Volunteer
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
