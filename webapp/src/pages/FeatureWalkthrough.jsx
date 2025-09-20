import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function FeatureWalkthrough() {
  const [step, setStep] = useState(0);   // ✅ state for which card
  const navigate = useNavigate();

  const steps = [
    {
      title: "Safer Routes",
      description: "Get safer paths with risk-aware rerouting.",
      icon: "📍",
    },
    {
      title: "SOS Alerts",
      description: "Instant alerts to responders & trusted contacts.",
      icon: "🚨",
    },
    {
      title: "Secure ID",
      description: "Verified identity for trusted safety.",
      icon: "🛡️",
    },
  ];

  const handleNext = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      // 🎯 Last step → go to dashboard
      navigate("/dashboard");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-[#F8F4FA]">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-80 text-center">
        <div className="text-6xl mb-4">{steps[step].icon}</div>
        <h2 className="text-2xl font-bold text-[#5A3972] mb-2">
          {steps[step].title}
        </h2>
        <p className="text-gray-600 mb-6">{steps[step].description}</p>

        <button
          onClick={handleNext}
          className="w-full py-3 bg-[#E96A7D] text-white font-semibold rounded-xl hover:bg-[#d95f72] transition"
        >
          {step === steps.length - 1 ? "Finish" : "Next"}
        </button>

        {/* Step indicators */}
        <div className="flex justify-center mt-4 gap-2">
          {steps.map((_, i) => (
            <span
              key={i}
              className={`w-3 h-3 rounded-full ${
                i === step ? "bg-[#5A3972]" : "bg-gray-300"
              }`}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
}
