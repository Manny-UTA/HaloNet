import React from "react";
import Navbar from "./components/Navbar";
import SOSButton from "./components/SOSButton";

function App() {
  return (
    <div className="min-h-screen bg-[#F7F4FB] text-[#2E2A5D]">
      <Navbar />
      <main className="p-4 flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-6">HaloNet</h1>
        <p className="mb-4">Your real-time safety companion.</p>
        <SOSButton />
      </main>
    </div>
  );
}

export default App;
