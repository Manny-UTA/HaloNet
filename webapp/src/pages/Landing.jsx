import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();
  const [stage, setStage] = useState("splash"); // "splash" → "features"

  useEffect(() => {
    // After 2.5s, move from splash → features
    const timer = setTimeout(() => setStage("features"), 2500);
    return () => clearTimeout(timer);
  }, []);

  if (stage === "splash") {
    // Branding splash
    return (
      <div className="flex items-center justify-center h-screen bg-[#F8F4FA] animate-fadeOut">
        <div className="text-center transition-opacity duration-700">
          <div className="flex flex-col items-center">
            <div className="relative">
              <div className="w-20 h-20 bg-[#5A3972] rounded-t-full rounded-b-md"></div>
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-4 border-4 border-white rounded-full"></div>
            </div>
            <h1 className="text-3xl font-bold text-[#5A3972] mt-4">HaloNet</h1>
            <p className="text-[#5A3972]">Your real-time safety companion</p>
          </div>
        </div>
      </div>
    );
  }

  // Feature explainer
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#F8F4FA] px-6 text-center">
      <h2 className="text-2xl font-bold text-[#5A3972]">📍 Safer Routes</h2>
      <p className="text-gray-600 mb-6">Get safer paths using risk-aware routing.</p>

      <h2 className="text-2xl font-bold text-[#5A3972]">🚨 SOS Alerts</h2>
      <p className="text-gray-600 mb-6">Send instant alerts to responders + contacts.</p>

      <h2 className="text-2xl font-bold text-[#5A3972]">🛡️ Secure ID</h2>
      <p className="text-gray-600 mb-6">Verify your ID with encrypted protection.</p>

      <button
        onClick={() => navigate("/auth")}
        className="mt-6 px-6 py-3 bg-[#E96A7D] text-white font-semibold rounded-full shadow-md hover:bg-[#d95f72] transition"
      >
        Get Started
      </button>
    </div>
  );
}
