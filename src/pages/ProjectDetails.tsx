import React from 'react';
import { motion } from 'motion/react';

const Section = ({ title, icon, children, delay = 0 }: { title: string, icon: string, children: React.ReactNode, delay?: number }) => (
  <motion.section 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-xl border border-slate-200 dark:border-slate-800 mb-8"
  >
    <div className="flex items-center gap-4 mb-6">
      <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl flex items-center justify-center text-emerald-600 dark:text-emerald-400">
        <span className="material-symbols-outlined text-3xl font-bold">{icon}</span>
      </div>
      <h2 className="text-2xl font-black text-slate-800 dark:text-white uppercase tracking-tight">{title}</h2>
    </div>
    <div className="text-slate-600 dark:text-slate-400 leading-relaxed space-y-4">
      {children}
    </div>
  </motion.section>
);

const Card = ({ title, description, icon }: { title: string, description: string, icon: string }) => (
  <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-xl border border-slate-100 dark:border-slate-700 hover:border-emerald-500/30 transition-colors group">
    <span className="material-symbols-outlined text-emerald-500 mb-4 block group-hover:scale-110 transition-transform">{icon}</span>
    <h3 className="font-bold text-slate-800 dark:text-white mb-2">{title}</h3>
    <p className="text-sm text-slate-500 dark:text-slate-400">{description}</p>
  </div>
);

const DiagramNode = ({ icon, title, desc, isCylinder = false }: { icon: string, title: string, desc?: string, isCylinder?: boolean }) => (
  <div className={`flex flex-col items-center text-center p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm ${isCylinder ? 'rounded-t-3xl rounded-b-3xl' : ''}`}>
    <span className="material-symbols-outlined text-emerald-500 mb-1">{icon}</span>
    <p className="text-[10px] font-black uppercase tracking-tighter text-slate-800 dark:text-white leading-tight">{title}</p>
    {desc && <p className="text-[8px] text-slate-500 dark:text-slate-400 mt-1 leading-tight">{desc}</p>}
  </div>
);

const DiagramArrow = ({ label, isDashed = false }: { label?: string, isDashed?: boolean }) => (
  <div className="flex flex-col items-center py-2">
    {label && <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest mb-1">{label}</span>}
    <div className={`w-0.5 h-8 ${isDashed ? 'border-l-2 border-dashed border-slate-300' : 'bg-slate-300'} relative`}>
      <div className="absolute -bottom-1 -left-[3px] w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[6px] border-t-slate-300"></div>
    </div>
  </div>
);

export default function ProjectDetails() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 p-6 md:p-12">
      <div className="max-w-5xl mx-auto">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-1.5 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 rounded-full text-xs font-black uppercase tracking-widest mb-6">
            Project Overview
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white mb-6 tracking-tighter">
            Shatorko <span className="text-emerald-600">BD</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-medium">
            Hybrid Last-Mile Early Warning System: A low-cost, reliable solution for Bangladesh's remote communities.
          </p>
        </motion.div>

        {/* Goal Section */}
        <Section title="Goal of the Project" icon="target" delay={0.1}>
          <p>Build a low-cost, reliable early warning system for Bangladesh that ensures alerts reach the most vulnerable.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            {[
              { text: "Alerts reach remote communities", icon: "rss_feed" },
              { text: "Easy to understand (Bangla + dialect audio)", icon: "record_voice_over" },
              { text: "Works even with poor network", icon: "signal_cellular_off" },
              { text: "Authorities can track alert reception", icon: "analytics" },
              { text: "People know nearest safe shelter", icon: "home_pin" }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 bg-emerald-50 dark:bg-emerald-900/10 p-3 rounded-lg border border-emerald-100 dark:border-emerald-900/20">
                <span className="material-symbols-outlined text-emerald-600 dark:text-emerald-400 text-sm">{item.icon}</span>
                <span className="text-sm font-bold text-slate-700 dark:text-slate-300">{item.text}</span>
              </div>
            ))}
          </div>
        </Section>

        {/* Problems Section */}
        <Section title="Problems to Solve" icon="warning" delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card icon="signal_disconnected" title="Network Issues" description="Weak or unreliable mobile networks in coastal and remote areas." />
            <Card icon="location_off" title="Isolation" description="Isolated communities like char, haor, and coastal belts are hard to reach." />
            <Card icon="devices_off" title="Low Tech Usage" description="Low smartphone and internet penetration in rural communities." />
            <Card icon="timer" title="Communication Delay" description="Significant time gap between authority alerts and community reception." />
            <Card icon="translate" title="Complex Messages" description="Technical disaster messages are often unclear or too complex for locals." />
            <Card icon="diversity_3" title="Poor Coordination" description="Lack of seamless coordination between authorities, volunteers, and citizens." />
          </div>
        </Section>

        {/* Core Solution Section */}
        <Section title="Core Solution" icon="lightbulb" delay={0.3}>
          <p className="mb-6">A hybrid system combining cutting-edge technology with community-based human networks.</p>
          <div className="space-y-4">
            {[
              "Central platform (web + backend) for management",
              "LoRa-based communication for offline reach",
              "Edge alert devices (Orange Pi) for local broadcasting",
              "Volunteer mobile app for field coordination",
              "Bangla + dialect voice alerts for accessibility",
              "Smart shelter routing (Dijkstra / A*) for safe evacuation"
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="material-symbols-outlined text-emerald-500 mt-1">check_circle</span>
                <span className="font-medium">{item}</span>
              </div>
            ))}
          </div>
        </Section>

        {/* System Overview Section */}
        <Section title="System Overview" icon="account_tree" delay={0.4}>
          <div className="relative border-l-2 border-emerald-500/30 ml-4 pl-8 space-y-12">
            {[
              { title: "Authority Creates Alert", desc: "Alert is initiated via the central dashboard." },
              { title: "System Simplifies Message", desc: "Technical data is converted to simple Bangla and dialect audio." },
              { title: "Multi-Channel Broadcast", desc: "Sent via LoRa (remote), App (volunteers), and SMS (fallback)." },
              { title: "Edge Device Activation", desc: "Local devices play sirens and voice alerts automatically." },
              { title: "Volunteer Action", desc: "Volunteers spread the message and guide the community." },
              { title: "Safe Evacuation", desc: "People move to shelters using optimized safe routes." },
              { title: "Coverage Tracking", desc: "System monitors acknowledgments and field reports." }
            ].map((step, i) => (
              <div key={i} className="relative">
                <div className="absolute -left-[41px] top-0 w-4 h-4 rounded-full bg-emerald-500 border-4 border-white dark:border-slate-950"></div>
                <h4 className="font-black text-slate-800 dark:text-white uppercase tracking-tighter mb-1">{step.title}</h4>
                <p className="text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* System Architecture Flow Diagram */}
        <Section title="System Architecture" icon="architecture" delay={0.5}>
          <div className="space-y-8 relative py-4">
            {/* Layer 1: Central Command */}
            <div className="relative p-6 rounded-3xl bg-blue-50/50 dark:bg-blue-900/10 border-2 border-blue-100 dark:border-blue-900/30">
              <div className="absolute -top-3 left-6 px-3 py-1 bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest rounded-full">
                Layer 1: Central Command
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-2">
                <DiagramNode icon="dashboard" title="Authority Dashboard" desc="Alert Creation & Monitoring" />
                <DiagramNode icon="dns" title="Alert Mgmt Server" desc="Coordination & Distribution" />
                <DiagramNode icon="database" title="Database" desc="Alert Logs & Node Status" isCylinder />
                <DiagramNode icon="map" title="Map Server / GIS" desc="Spatial Area Selection" />
              </div>
            </div>

            <DiagramArrow label="Official Alert Data" />

            {/* Layer 2: Message Intelligence */}
            <div className="relative p-6 rounded-3xl bg-emerald-50/50 dark:bg-emerald-900/10 border-2 border-emerald-100 dark:border-emerald-900/30">
              <div className="absolute -top-3 left-6 px-3 py-1 bg-emerald-600 text-white text-[10px] font-black uppercase tracking-widest rounded-full">
                Layer 2: Message Intelligence
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
                <DiagramNode icon="translate" title="Bangla Simplifier" desc="Technical to Easy Bangla" />
                <DiagramNode icon="record_voice_over" title="Dialect TTS / Edge-AI" desc="Local Audio Generation" />
                <DiagramNode icon="description" title="Template Generator" desc="Multi-channel Formatting" />
              </div>
            </div>

            <DiagramArrow label="Processed Warnings" />

            {/* Layer 3: Communication Layer */}
            <div className="relative p-6 rounded-3xl bg-amber-50/50 dark:bg-amber-900/10 border-2 border-amber-100 dark:border-amber-900/30">
              <div className="absolute -top-3 left-6 px-3 py-1 bg-amber-600 text-white text-[10px] font-black uppercase tracking-widest rounded-full">
                Layer 3: Communication
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-2">
                <DiagramNode icon="language" title="Internet / App" desc="Digital Notifications" />
                <DiagramNode icon="hub" title="LoRaWAN Server" desc="Network Management" />
                <DiagramNode icon="router" title="LoRa Gateway" desc="Packet Transmission" />
                <DiagramNode icon="sms" title="SMS Fallback" desc="Basic Phone Reach" />
              </div>
            </div>

            <DiagramArrow label="LoRa Packets / App Alerts" />

            {/* Layer 4: Community Relay Layer */}
            <div className="relative p-6 rounded-3xl bg-orange-50/50 dark:bg-orange-900/10 border-2 border-orange-100 dark:border-orange-900/30">
              <div className="absolute -top-3 left-6 px-3 py-1 bg-orange-600 text-white text-[10px] font-black uppercase tracking-widest rounded-full">
                Layer 4: Community Relay
              </div>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mt-2">
                <DiagramNode icon="mosque" title="Mosque Node" />
                <DiagramNode icon="temple_hindu" title="Temple Node" />
                <DiagramNode icon="local_hospital" title="Hospital Node" />
                <DiagramNode icon="school" title="Shelter Node" />
                <DiagramNode icon="account_balance" title="UP Office Node" />
              </div>
              <div className="mt-4 flex justify-center">
                <div className="bg-white dark:bg-slate-800 px-6 py-3 rounded-xl border border-orange-200 dark:border-orange-800 shadow-sm flex items-center gap-3">
                  <span className="material-symbols-outlined text-orange-500">memory</span>
                  <div className="text-left">
                    <p className="text-[10px] font-black uppercase tracking-tighter text-orange-600">Edge Device</p>
                    <p className="text-sm font-bold">Orange Pi / Edge-AI Unit</p>
                  </div>
                </div>
              </div>
            </div>

            <DiagramArrow label="Local Audio & Sirens" />

            {/* Layer 5: Human Dissemination Layer */}
            <div className="relative p-6 rounded-3xl bg-purple-50/50 dark:bg-purple-900/10 border-2 border-purple-100 dark:border-purple-900/30">
              <div className="absolute -top-3 left-6 px-3 py-1 bg-purple-600 text-white text-[10px] font-black uppercase tracking-widest rounded-full">
                Layer 5: Human Dissemination
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
                <DiagramNode icon="badge" title="Institution Staff" desc="Imams, Teachers, Staff" />
                <DiagramNode icon="volunteer_activism" title="Local Volunteers" desc="CPP & Youth Responders" />
                <DiagramNode icon="groups" title="Community" desc="Households & Residents" />
              </div>
            </div>

            <DiagramArrow label="Guidance & Support" />

            {/* Layer 6: Feedback & Evacuation Support */}
            <div className="relative p-6 rounded-3xl bg-pink-50/50 dark:bg-pink-900/10 border-2 border-pink-100 dark:border-pink-900/30">
              <div className="absolute -top-3 left-6 px-3 py-1 bg-pink-600 text-white text-[10px] font-black uppercase tracking-widest rounded-full">
                Layer 6: Feedback & Support
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
                <DiagramNode icon="smartphone" title="Volunteer App" desc="Field Reporting & Coordination" />
                <DiagramNode icon="route" title="Shelter Mapping" desc="Dijkstra / A* Safe Routing" />
                <DiagramNode icon="analytics" title="Coverage Tracking" desc="Ack & Reached Zones" />
              </div>
            </div>

            {/* Feedback Arrows (Visualized as dashed lines on the side) */}
            <div className="absolute -right-4 top-0 bottom-0 w-8 hidden lg:flex flex-col justify-around pointer-events-none">
              <div className="h-full border-r-2 border-dashed border-slate-300 dark:border-slate-700 relative">
                <div className="absolute top-1/2 -right-2 transform -translate-y-1/2 rotate-90 text-[10px] font-bold text-slate-400 uppercase tracking-widest whitespace-nowrap">
                  Feedback & Acknowledgment Flow
                </div>
              </div>
            </div>
          </div>
          <p className="mt-8 text-xs italic text-center text-slate-500">
            System architecture of Shatorko BD: A hybrid last-mile early warning platform for Bangladesh combining centralized control, LoRaWAN relay nodes, and dynamic shelter guidance.
          </p>
        </Section>

        {/* Edge Alert System */}
        <Section title="Edge Alert System" icon="settings_input_antenna" delay={0.6}>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <p className="mb-4">Hardware based on Orange Pi / Raspberry Pi with LoRa modules, speakers, and solar backup.</p>
              <div className="grid grid-cols-2 gap-2">
                {["LoRa Module", "Speaker", "Siren", "LED Light", "Battery", "Solar Panel"].map((item, i) => (
                  <div key={i} className="text-xs font-bold bg-slate-100 dark:bg-slate-800 p-2 rounded text-center">{item}</div>
                ))}
              </div>
            </div>
            <div className="w-full md:w-64 h-48 bg-emerald-500/10 rounded-2xl border-2 border-dashed border-emerald-500/30 flex items-center justify-center">
              <span className="material-symbols-outlined text-6xl text-emerald-500 animate-pulse">developer_board</span>
            </div>
          </div>
        </Section>

        {/* Community Layer */}
        <Section title="Community Layer" icon="groups_2" delay={0.7}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold text-sm mb-3 uppercase tracking-wider">Alert Points</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-emerald-500 text-xs">mosque</span> Mosques & Temples</li>
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-emerald-500 text-xs">local_hospital</span> Hospitals</li>
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-emerald-500 text-xs">school</span> Schools / Shelters</li>
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-emerald-500 text-xs">account_balance</span> Union Parishad Offices</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-sm mb-3 uppercase tracking-wider">Human Layer</h4>
              <p className="text-sm opacity-80">Staff (Imams, hospital staff), Volunteers, and Community members work together to announce alerts and guide evacuation.</p>
            </div>
          </div>
        </Section>

        {/* Unique Features */}
        <Section title="Unique Features" icon="star" delay={0.8}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: "Offline Resilience", desc: "Works without internet using LoRa technology." },
              { title: "Religious Hubs", desc: "Uses mosques/temples as relays (Bangladesh-specific)." },
              { title: "Dialect Support", desc: "Converts alerts into local dialect audio for better reach." },
              { title: "Smart Routing", desc: "Provides real-time safe evacuation routes." },
              { title: "Real Tracking", desc: "Tracks actual coverage, not just message sending." }
            ].map((feature, i) => (
              <div key={i} className="bg-emerald-600 text-white p-5 rounded-xl shadow-lg shadow-emerald-900/20">
                <h4 className="font-black uppercase tracking-tighter mb-1">{feature.title}</h4>
                <p className="text-xs opacity-90">{feature.desc}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Tech Stack */}
        <Section title="Tech Stack" icon="code" delay={0.9}>
          <div className="flex flex-wrap gap-3">
            {["React", "Next.js", "Node.js", "PostgreSQL", "Leaflet", "Firebase", "Google TTS", "LoRaWAN"].map((tech, i) => (
              <span key={i} className="px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-full text-sm font-bold">{tech}</span>
            ))}
          </div>
        </Section>

        {/* Footer */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center py-12 border-t border-slate-200 dark:border-slate-800"
        >
          <p className="text-slate-500 dark:text-slate-400 font-bold uppercase tracking-widest text-xs mb-4">
            Shatorko BD Prototype Simulation
          </p>
          <div className="flex justify-center gap-4">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></div>
            <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
