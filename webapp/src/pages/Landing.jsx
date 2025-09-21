import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFade(true), 2000);
    const navTimer = setTimeout(() => {
      navigate("/auth/form", { replace: true }); // ✅ goes to the real form
    }, 2500);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(navTimer);
    };
  }, [navigate]);

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
