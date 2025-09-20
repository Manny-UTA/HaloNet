import React from "react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-white border-t border-indigo/10">
      <div className="mx-auto max-w-6xl px-4 py-6 text-sm flex flex-col sm:flex-row items-center justify-between gap-3">
        <span className="text-indigo/70">© {new Date().getFullYear()} HaloNet</span>
        <div className="text-indigo/70">
          Built for SMU Hackathon — Sponsors: AWS · AT&T · Deloitte
        </div>
      </div>
    </footer>
  );
}
