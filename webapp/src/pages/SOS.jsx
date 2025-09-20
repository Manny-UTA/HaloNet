import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function SOS() {
  const [countdown, setCountdown] = useState(5); // optional auto-send countdown
  const navigate = useNavigate();

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#F8F4FA] p-6 text-center">
      <h1 className="text-2xl font-bold text-[#5A3972] mb-6">🚨 Alert</h1>

      {/* Big pulsing SOS Button */}
      <div className="relative flex items-center justify-center">
        <div className="absolute w-64 h-64 bg-[#E96A7D] rounded-full animate-ping opacity-30"></div>
        <div className="absolute w-56 h-56 bg-[#E96A7D] rounded-full animate-pulse opacity-50"></div>
        <div className="w-48 h-48 rounded-full bg-[#E96A7D] flex flex-col items-center justify-center text-white shadow-lg">
          <span className="text-5xl mb-2">🔔</span>
          <span className="text-2xl font-bold">SOS</span>
        </div>
      </div>

      {/* Countdown or Info */}
      <p className="mt-6 text-gray-600">
        Notifying responders in <strong>{countdown}</strong> seconds...
      </p>

      {/* Notify Button */}
      <button
        onClick={() => alert("🚑 Responders notified!")}
        className="mt-8 w-full max-w-xs py-3 bg-[#E96A7D] text-white font-semibold rounded-xl hover:bg-[#d95f72] transition"
      >
        Notify Responders
      </button>

      {/* Cancel or Back to Dashboard */}
      <button
        onClick={() => navigate("/dashboard")}
        className="mt-4 text-[#5A3972] underline"
      >
        Cancel / Back to Dashboard
      </button>
    </div>
  );
}
