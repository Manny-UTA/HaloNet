import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();
  const [fade, setFade] = useState(false);
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Start fading after 2s
    const fadeTimer = setTimeout(() => setFade(true), 2000);

    // Hide splash + go to auth after 2.5s
    const navTimer = setTimeout(() => {
      setShowSplash(false);
      navigate("/auth");
    }, 2500);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(navTimer);
    };
  }, [navigate]);

  if (showSplash) {
    // 🔹 Splash screen
    return (
      <div
        className={`flex items-center justify-center h-screen bg-[#F8F4FA] transition-opacity duration-500 ${
          fade ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="text-center">
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

  // 🔹 If splash is done, fallback UI (rarely visible, since we navigate to /auth)
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
