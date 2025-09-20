import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SafeRoutes() {
  const [destination, setDestination] = useState("");
  const [routeFound, setRouteFound] = useState(false);
  const navigate = useNavigate();

  const handleFindRoute = () => {
    if (destination.trim() !== "") {
      setRouteFound(true);
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-[#F8F4FA] p-6 relative">
      {/* Back to Dashboard (always visible) */}
      <button
        onClick={() => navigate("/dashboard")}
        className="absolute top-6 left-6 text-[#5A3972] font-semibold hover:underline"
      >
        ← Back
      </button>

      <h1 className="text-3xl font-bold text-[#5A3972] mb-6">Safe Routes</h1>

      {/* Map Mockup */}
      <div className="w-full max-w-md bg-white rounded-2xl shadow-md p-4 mb-6">
        <div className="relative h-56 bg-gray-200 rounded-xl flex items-center justify-center">
          <span className="text-gray-500">🗺️ Map Mockup</span>
          <div className="absolute top-6 left-6 w-20 h-20 bg-red-200 border-2 border-red-500 rounded-full flex items-center justify-center text-xs text-red-700">
            Risky area
          </div>
        </div>
      </div>

      {/* Input Field */}
      <input
        type="text"
        placeholder="Enter destination"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
        className="w-full max-w-md px-4 py-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5A3972]"
      />

      {/* CTA Buttons */}
      {!routeFound ? (
        <button
          onClick={handleFindRoute}
          className="w-full max-w-md py-3 bg-[#E96A7D] text-white font-semibold rounded-lg shadow-md hover:bg-[#d95f72] transition"
        >
          Find Route
        </button>
      ) : (
        <div className="flex flex-col gap-4 w-full max-w-md">
          <div className="bg-purple-100 text-purple-700 p-3 rounded-lg text-center shadow">
            ✅ Safer route found via FirstNet to avoid high-risk zones.
          </div>
          <button
            className="w-full py-3 bg-[#4BBF9E] text-white font-semibold rounded-lg shadow-md hover:bg-[#3da98b] transition"
          >
            Start Route
          </button>
          <button
            onClick={() => navigate("/dashboard")}
            className="w-full py-3 bg-white border border-[#5A3972] text-[#5A3972] font-semibold rounded-lg shadow hover:bg-gray-100 transition"
          >
            Back to Dashboard
          </button>
          <button
            onClick={() => navigate("/features")} // TODO: make Features page
            className="w-full py-3 bg-[#5A3972] text-white font-semibold rounded-lg shadow-md hover:bg-[#452c5e] transition"
          >
            Explore Safety Features
          </button>
        </div>
      )}
    </div>
  );
}
