import { useNavigate } from "react-router-dom";

export default function LiveTracking() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center min-h-screen bg-[#F8F4FA] p-6">
      {/* Back to Dashboard */}
      <button
        onClick={() => navigate("/dashboard")}
        className="absolute top-6 left-6 text-[#5A3972] font-semibold hover:underline"
      >
        ← Back
      </button>

      {/* Header */}
      <h1 className="text-3xl font-bold text-[#5A3972] mt-12 mb-6">
        Live Tracking
      </h1>

      {/* Map Mockup */}
      <div className="w-full max-w-md bg-white rounded-2xl shadow-md p-4 mb-6">
        <div className="relative h-64 bg-gray-200 rounded-xl flex items-center justify-center">
          <span className="text-gray-500">🗺️ Map Mockup</span>
          <div className="absolute text-4xl">📍</div>
        </div>
      </div>

      {/* Current Status */}
      <div className="w-full max-w-md bg-purple-100 text-purple-700 px-4 py-3 rounded-lg text-center mb-6">
        <span className="font-semibold">▪ Walking Home</span>
      </div>

      {/* Share Button */}
      <button
        className="w-full max-w-md py-3 bg-[#4BBF9E] text-white font-semibold rounded-lg shadow-md hover:bg-[#3da98b] transition"
      >
        Share with trusted contacts
      </button>
    </div>
  );
}
