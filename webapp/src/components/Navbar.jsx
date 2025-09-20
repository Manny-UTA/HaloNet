import React from "react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 bg-white/70 backdrop-blur border-b border-indigo/10">
      <nav className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 rounded-full bg-coral"></span>
          <span className="font-extrabold tracking-tight">HaloNet</span>
        </div>
        <div className="hidden sm:flex items-center gap-6 text-sm">
          <a href="#features" className="hover:opacity-80">Features</a>
          <a href="#how" className="hover:opacity-80">How it works</a>
          <a href="#contact" className="hover:opacity-80">Contact</a>
          <a href="#dashboard" className="bg-indigo text-white px-4 py-2 rounded-xl hover:opacity-90">Open Dashboard</a>
        </div>
      </nav>
    </header>
  );
}
