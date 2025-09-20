import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // 👈 ensure useNavigate is imported

export default function Dashboard() {
  const [status, setStatus] = useState("safe"); // "safe" | "alert"
  const [menuOpen, setMenuOpen] = useState(false); // 👈 state for dropdown
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center min-h-screen bg-[#F8F4FA] p-6">
      {/* Header */}
      <div className="w-full flex justify-between items-center mb-10 relative">
        {/* ✅ HaloNet button goes back to Dashboard */}
        <button
          onClick={() => navigate("/dashboard")}
          className="text-2xl font-bold text-[#5A3972] hover:underline"
        >
          HaloNet
        </button>

        {/* Hamburger Menu */}
        <div className="relative">
          <button
            className="p-2"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <div className="space-y-1">
              <div className="w-6 h-0.5 bg-[#5A3972]"></div>
              <div className="w-6 h-0.5 bg-[#5A3972]"></div>
              <div className="w-6 h-0.5 bg-[#5A3972]"></div>
            </div>
          </button>

          {/* Dropdown menu */}
          {menuOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
              <button
                onClick={() => {
                  setMenuOpen(false);
                  navigate("/profile"); // 👈 make sure Profile route exists
                }}
                className="block w-full text-left px-4 py-2 text-sm text-[#5A3972] hover:bg-gray-100"
              >
                👤 Profile
              </button>
              <button
                onClick={() => {
                  setMenuOpen(false);
                  navigate("/responder-view"); // 👈 make sure ResponderView route exists
                }}
                className="block w-full text-left px-4 py-2 text-sm text-[#5A3972] hover:bg-gray-100"
              >
                🚑 Responder View
              </button>
            </div>
          )}
        </div>
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
          className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center hover:shadow-lg transition"
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

        <Link
          to="/verify-id"
          className="flex flex-col items-center justify-center bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition"
        >
          <span className="text-4xl mb-3">🛡️</span>
          <span className="text-[#5A3972] font-medium">Verify ID</span>
        </Link>
      </div>

      {/* Big SOS Button */}
      <button
        onClick={() => navigate("/sos")}
        className="w-40 h-40 rounded-full bg-[#E96A7D] text-white text-2xl font-bold shadow-lg hover:bg-[#d95f72] transition"
      >
        🚨 SOS
      </button>
    </div>
  );
}
