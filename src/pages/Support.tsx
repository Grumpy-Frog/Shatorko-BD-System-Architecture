import React, { useState } from 'react';

export default function Support() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "How do I deploy a new Edge-AI node?",
      a: "Navigate to the Edge-AI Engine > Deployment section. Click 'Add New Node', enter the hardware MAC address, and select the target region. The system will automatically provision the node and begin the firmware flashing process over the air."
    },
    {
      q: "What should I do if a node goes offline?",
      a: "First, check the 'System Health' dashboard to see if it's a known network outage in that sector. If isolated, attempt a remote reboot via the 'Firmware Control' page. If the node remains unresponsive for >4 hours, generate a field service ticket in the 'Maintenance' hub."
    },
    {
      q: "How are volunteer alerts triggered?",
      a: "Alerts are triggered automatically when the AI prediction model confidence exceeds 85% for a severe weather event, OR they can be manually triggered by a Zone Commander from the 'Active Alerts' dashboard."
    },
    {
      q: "Can I export historical disaster data?",
      a: "Yes. Go to the 'Archive' page, use the filters to select your desired date range and region, then click the 'Export CSV' button in the top right corner of the data table."
    }
  ];

  return (
    <main className="p-4 md:p-8 min-h-[calc(100vh-64px)] bg-surface">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-headline font-extrabold text-on-surface mb-4">Command Center Support</h1>
          <p className="text-on-surface-variant max-w-2xl mx-auto">
            Access documentation, submit service tickets, or contact the central engineering team for immediate assistance with the Shatorko platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Quick Action Cards */}
          <div className="bg-primary-container p-6 rounded-2xl border border-primary/20 hover:shadow-md transition-shadow cursor-pointer group">
            <div className="w-12 h-12 bg-primary text-on-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined">menu_book</span>
            </div>
            <h3 className="font-bold text-on-primary-container mb-2">Documentation</h3>
            <p className="text-sm text-on-primary-container/80">Read the full system manual and API guides.</p>
          </div>

          <div className="bg-secondary-container p-6 rounded-2xl border border-secondary/20 hover:shadow-md transition-shadow cursor-pointer group">
            <div className="w-12 h-12 bg-secondary text-on-secondary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined">bug_report</span>
            </div>
            <h3 className="font-bold text-on-secondary-container mb-2">Report an Issue</h3>
            <p className="text-sm text-on-secondary-container/80">Submit a bug report directly to engineering.</p>
          </div>

          <div className="bg-tertiary-container p-6 rounded-2xl border border-tertiary/20 hover:shadow-md transition-shadow cursor-pointer group">
            <div className="w-12 h-12 bg-tertiary text-on-tertiary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined">support_agent</span>
            </div>
            <h3 className="font-bold text-on-tertiary-container mb-2">Live Support</h3>
            <p className="text-sm text-on-tertiary-container/80">Chat with a Level 3 support technician.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* FAQ Section */}
          <div>
            <h2 className="text-xl font-headline font-bold text-on-surface mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">help</span>
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className={`border rounded-xl overflow-hidden transition-all ${activeFaq === index ? 'border-primary bg-primary/5' : 'border-outline-variant/50 bg-surface-container-low'}`}
                >
                  <button 
                    className="w-full text-left p-4 font-bold text-on-surface flex justify-between items-center"
                    onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  >
                    {faq.q}
                    <span className={`material-symbols-outlined transition-transform ${activeFaq === index ? 'rotate-180 text-primary' : 'text-on-surface-variant'}`}>
                      expand_more
                    </span>
                  </button>
                  {activeFaq === index && (
                    <div className="p-4 pt-0 text-sm text-on-surface-variant leading-relaxed animate-in slide-in-from-top-2">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-surface-container p-6 md:p-8 rounded-2xl border border-outline-variant/30">
            <h2 className="text-xl font-headline font-bold text-on-surface mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">mail</span>
              Submit a Ticket
            </h2>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-on-surface-variant uppercase">Name</label>
                  <input type="text" className="w-full bg-surface p-3 rounded-xl border border-outline-variant/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none text-sm" placeholder="Your Name" />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-on-surface-variant uppercase">ID / Callsign</label>
                  <input type="text" className="w-full bg-surface p-3 rounded-xl border border-outline-variant/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none text-sm" placeholder="e.g. CMD-01" />
                </div>
              </div>
              
              <div className="space-y-1">
                <label className="text-xs font-bold text-on-surface-variant uppercase">Issue Category</label>
                <select className="w-full bg-surface p-3 rounded-xl border border-outline-variant/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none text-sm">
                  <option>Hardware / Edge Node</option>
                  <option>Software / Dashboard</option>
                  <option>Network / Connectivity</option>
                  <option>Account / Access</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-on-surface-variant uppercase">Description</label>
                <textarea 
                  rows={4} 
                  className="w-full bg-surface p-3 rounded-xl border border-outline-variant/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none text-sm resize-none" 
                  placeholder="Please describe the issue in detail..."
                ></textarea>
              </div>

              <div className="pt-2">
                <button type="submit" className="w-full bg-primary text-on-primary py-3 rounded-xl font-bold hover:bg-primary/90 transition-colors shadow-sm flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined text-sm">send</span>
                  Submit Ticket
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
