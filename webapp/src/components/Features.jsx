import React from "react";

const items = [
  { icon: "🚨", title: "Real-Time Alerts", desc: "Detect unusual activity and notify trusted contacts + responders." },
  { icon: "🗺️", title: "Safer Routes", desc: "Network-aware routing using crime stats and FirstNet updates." },
  { icon: "📡", title: "Reliable Connectivity", desc: "Built to operate in low-connectivity scenarios." },
  { icon: "🔐", title: "Secure ID", desc: "Exclusive access via encrypted identity verification." },
  { icon: "📍", title: "Live Tracking", desc: "Share location + status during active SOS sessions." },
  { icon: "📊", title: "Responder View", desc: "Map dashboard to triage alerts and coordinate response." },
];

export default function Features() {
  return (
    <section id="features" className="bg-white py-16 border-y border-indigo/10">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-10">Features</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((f) => (
            <div key={f.title} className="rounded-xl border border-indigo/10 bg-lavender p-5 shadow-soft">
              <div className="text-2xl">{f.icon}</div>
              <h3 className="mt-2 font-bold">{f.title}</h3>
              <p className="text-indigo/80 text-sm mt-1">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
