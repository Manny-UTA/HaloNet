import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import CTAStrip from "./components/CTAStrip";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-lavender text-indigo flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
        <CTAStrip />
      </main>
      <Footer />
    </div>
  );
}



