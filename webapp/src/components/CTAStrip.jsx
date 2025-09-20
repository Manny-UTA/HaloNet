import React from "react";

export default function CTAStrip() {
  return (
    <section id="how" className="py-14">
      <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-3 gap-6">
        <div className="rounded-xl bg-white border border-indigo/10 p-6 shadow-soft">
          <h4 className="font-semibold">1) Verify ID</h4>
          <p className="text-sm text-indigo/80 mt-1">Onboarding verifies identity with encrypted storage.</p>
        </div>
        <div className="rounded-xl bg-white border border-indigo/10 p-6 shadow-soft">
          <h4 className="font-semibold">2) Enable Location</h4>
          <p className="text-sm text-indigo/80 mt-1">We monitor movement + context to detect risk.</p>
        </div>
        <div className="rounded-xl bg-white border border-indigo/10 p-6 shadow-soft">
          <h4 className="font-semibold">3) Instant SOS</h4>
          <p className="text-sm text-indigo/80 mt-1">Trigger alerts via tap, voice, or gesture.</p>
        </div>
      </div>
    </section>
  );
}
