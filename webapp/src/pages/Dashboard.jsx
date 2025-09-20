import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


export default function Dashboard() {
  const [status, setStatus] = useState("safe"); // "safe" | "alert"
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center min-h-screen bg-[#F8F4FA] p-6">
      {/* Header */}
      <div className="w-full flex justify-between items-center mb-10">
        <h1 className="text-2xl font-bold text-[#5A3972]">HaloNet</h1>
        <button className="p-2">
          <div className="space-y-1">
            <div className="w-6 h-0.5 bg-[#5A3972]"></div>
            <div className="w-6 h-0.5 bg-[#5A3972]"></div>
            <div className="w-6 h-0.5 bg-[#5A3972]"></div>
          </div>
        </button>
      </div>

      {/* Status Indicator */}
      <div
        className={`px-6 py-2 rounded-full font-semibold text-white mb-10 shadow-md ${
          status === "safe" ? "bg-[#4BBF9E]" : "bg-[#E96A7D]"
        }`}
      >
        {status === "safe" ? "🟢 Safe" : "🔴 Alert"}
      </div>

      {/* Quick Actions Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12 w-full max-w-3xl">
        <Link
          to="/safe-routes"
          className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center"
        >
          <span className="text-3xl mb-2">📍</span>
          <p className="font-semibold text-[#5A3972]">Safe Route</p>
        </Link>

        <Link
          to="/live-tracking"
          className="flex flex-col items-center justify-center bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition"
        >
          <span className="text-4xl mb-3">📡</span>
          <span className="text-[#5A3972] font-medium">Live Tracking</span>
        </Link>

        <button className="flex flex-col items-center justify-center bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
          <span className="text-4xl mb-3">🛡️</span>
          <span className="text-[#5A3972] font-medium">Verify ID</span>
        </button>
      </div>

      {/* Big SOS Button */}
      <button
        onClick={() => navigate("/sos")} // 👈 go to SOS page
        className="w-40 h-40 rounded-full bg-[#E96A7D] text-white text-2xl font-bold shadow-lg hover:bg-[#d95f72] transition"
      >
        🚨 SOS
      </button>
    </div>
  );
}
