import React from "react";

export default function SOSButton() {
  return (
    <button
      className="bg-[#E46D7B] text-white font-bold py-3 px-6 rounded-full shadow-lg hover:bg-red-600"
      onClick={() => alert("SOS Alert Triggered!")}
    >
      🚨 SOS
    </button>
  );
}
