export default function Profile() {
  return (
    <div className="min-h-screen bg-[#F8F4FA] flex flex-col items-center p-6">
      {/* Avatar */}
      <div className="w-24 h-24 rounded-full bg-[#5A3972] flex items-center justify-center text-white text-4xl mb-4">
        👩
      </div>
      <h1 className="text-2xl font-bold text-[#5A3972] mb-8">Jane Doe</h1>

      {/* Trusted Contacts */}
      <div className="w-full max-w-lg bg-white rounded-xl shadow-md p-4 mb-4 flex items-center justify-between">
        <div>
          <p className="font-bold text-[#5A3972]">Trusted Contacts</p>
          <p className="text-gray-600 text-sm">Manage emergency contacts.</p>
        </div>
        <span className="text-xl text-gray-400">›</span>
      </div>

      {/* Verify ID */}
      <div className="w-full max-w-lg bg-white rounded-xl shadow-md p-4 mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-green-500 text-xl">✅</span>
          <p className="font-bold text-[#5A3972]">Verify ID</p>
        </div>
        <p className="text-green-500 font-semibold">Verified</p>
      </div>

      {/* Notifications */}
      <div className="w-full max-w-lg bg-white rounded-xl shadow-md p-4">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-yellow-500 text-xl">🔔</span>
          <p className="font-bold text-[#5A3972]">Notifications</p>
        </div>

        <div className="flex justify-between items-center border-t py-2">
          <p>Route Alerts</p>
          <input type="checkbox" defaultChecked className="w-5 h-5 accent-[#4BBF9E]" />
        </div>

        <div className="flex justify-between items-center border-t py-2">
          <p>SOS Alerts</p>
          <input type="checkbox" defaultChecked className="w-5 h-5 accent-[#4BBF9E]" />
        </div>

        <div className="flex justify-between items-center border-t py-2">
          <p>Safety Tips</p>
          <input type="checkbox" defaultChecked className="w-5 h-5 accent-[#4BBF9E]" />
        </div>

       </div>

      {/* Back Button */}
      <button
        onClick={() => navigate("/dashboard")}
        className="px-8 py-3 bg-[#EAE2F8] text-[#5A3972] font-semibold rounded-xl hover:bg-[#d8cbee] transition"
      >
        Back to Dashboard
      </button>
    </div>
  );
}
