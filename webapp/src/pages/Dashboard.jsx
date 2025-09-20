import { useState } from "react";

export default function Dashboard() {
  const [status, setStatus] = useState("safe"); // "safe" or "alert"

  return (
    <div className="min-h-screen bg-[#F8F4FA] flex flex-col">
      {/* Header */}
      <header className="flex justify-between items-center px-4 py-3 bg-white shadow-sm">
        <h1 className="text-xl font-bold text-[#5A3972]">HaloNet</h1>
        <button className="text-[#5A3972] font-medium">☰</button>
      </header>

      {/* Status */}
      <div className="px-4 py-2 text-center">
        <span
          className={`inline-block px-3 py-1 text-sm rounded-full font-medium ${
            status === "safe"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {status === "safe" ? "🟢 Safe" : "🔴 Alert"}
        </span>
      </div>

      {/* Main Content */}
      <main className="flex-1 px-4 py-6 space-y-6">
        {/* Feature Cards */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white rounded-2xl p-4 shadow-md flex flex-col items-center">
            <span className="text-2xl">📍</span>
            <h2 className="font-bold text-[#5A3972] mt-2">Safe Route</h2>
            <p className="text-sm text-gray-500 text-center">
              Get safer paths using FirstNet.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-4 shadow-md flex flex-col items-center">
            <span className="text-2xl">📡</span>
            <h2 className="font-bold text-[#5A3972] mt-2">Live Tracking</h2>
            <p className="text-sm text-gray-500 text-center">
              Share location in real-time.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-4 shadow-md flex flex-col items-center">
            <span className="text-2xl">🛡️</span>
            <h2 className="font-bold text-[#5A3972] mt-2">Secure ID</h2>
            <p className="text-sm text-gray-500 text-center">
              Verify ID with encryption.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-4 shadow-md flex flex-col items-center">
            <span className="text-2xl">📢</span>
            <h2 className="font-bold text-[#5A3972] mt-2">Alerts</h2>
            <p className="text-sm text-gray-500 text-center">
              Send instant SOS alerts.
            </p>
          </div>
        </div>
      </main>

      {/* SOS Bubble Button */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 md:left-auto md:right-8">
        <button
          onClick={() =>
            setStatus(status === "safe" ? "alert" : "safe")
          }
          className="bg-[#E96A7D] text-white rounded-full w-24 h-24 md:w-28 md:h-28 flex flex-col items-center justify-center shadow-xl hover:bg-[#d95f72] transition"
        >
          <span className="text-3xl">🚨</span>
          <span className="font-bold mt-1">SOS</span>
        </button>
      </div>
    </div>
  );
}
