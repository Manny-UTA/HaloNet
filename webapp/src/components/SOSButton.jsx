import React from "react";

export default function SOSButton({ onClick }) {
  return (
    <button
      onClick={onClick ?? (() => alert("🚨 SOS Alert Triggered (mock)!"))}
      className="bg-coral text-white font-semibold px-6 py-3 rounded-xl shadow-soft hover:opacity-90 focus:outline-none focus:ring-4 focus:ring-coral/30"
    >
      Send SOS
    </button>
  );
}
