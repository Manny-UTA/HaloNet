import React from "react";
import SOSButton from "./SOSButton";

export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:py-24 text-center">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-indigo border border-indigo/10 shadow-soft mb-4">
        <span className="h-2.5 w-2.5 rounded-full bg-teal"></span>
        <span className="text-xs font-semibold">Powered by FirstNet + AWS</span>
      </div>

      <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-4">
        Your real-time safety <span className="text-coral">companion</span>.
      </h1>
      <p className="max-w-2xl mx-auto text-indigo/80 text-lg mb-8">
        Detect threats, get safer routes, and alert responders in seconds—built for women’s safety and community well-being.
      </p>

      <div className="flex items-center justify-center gap-3">
        <SOSButton />
        <a href="#features" className="px-5 py-3 rounded-xl border border-indigo/20 bg-white hover:shadow-soft">
          See Features
        </a>
      </div>

      {/* subtle illustration block */}
      <div className="mt-12 grid sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
        <div className="p-4 rounded-xl bg-white shadow-soft border border-indigo/10">🗺️ Safer routes with rerouting</div>
        <div className="p-4 rounded-xl bg-white shadow-soft border border-indigo/10">📍 Live location & check-ins</div>
        <div className="p-4 rounded-xl bg-white shadow-soft border border-indigo/10">🔐 Secure ID verification</div>
      </div>
    </section>
  );
}
