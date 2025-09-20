import { useNavigate } from "react-router-dom";

export default function VerifyID() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#F8F4FA] p-6 text-center">
      <h1 className="text-2xl font-bold text-[#5A3972] mb-4">🛡️ Verify ID</h1>
      <p className="text-gray-600 mb-6 max-w-md">
        Securely verify your identity to enable trusted safety features.
      </p>

      <button
        onClick={() => alert("🔒 ID Verified! (placeholder)")}
        className="px-6 py-3 bg-[#5A3972] text-white font-semibold rounded-xl hover:bg-[#472c5a] transition"
      >
        Start Verification
      </button>

      <button
        onClick={() => navigate("/dashboard")}
        className="mt-6 text-[#5A3972] underline"
      >
        ⬅ Back to Dashboard
      </button>
    </div>
  );
}
