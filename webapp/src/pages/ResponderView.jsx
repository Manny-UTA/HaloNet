import { useNavigate } from "react-router-dom";

export default function ResponderView() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F8F4FA] flex flex-col">
      {/* Header */}
      <header className="flex justify-between items-center p-6 bg-white shadow">
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 bg-[#5A3972] rounded-full"></div>
          <h1 className="text-xl font-bold text-[#5A3972]">HaloNet Responder</h1>
        </div>
        <nav className="flex space-x-6 text-[#5A3972] font-medium">
          <button onClick={() => navigate("/dashboard")}>Dashboard</button>
          <button>Contacts</button>
        </nav>
      </header>

      {/* SOS Banner */}
      <div className="bg-[#E96A7D] text-white p-4 text-center font-semibold">
        🚨 SOS Triggered by Emily Chen at 224 Elm St. (2 min ago)
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row gap-6 p-6 flex-1">
        {/* Map Placeholder */}
        <div className="flex-1 bg-white rounded-xl shadow p-6 flex items-center justify-center">
          <div className="text-center">
            <div className="text-5xl">📍</div>
            <p className="text-[#5A3972] font-semibold mt-2">Map Placeholder</p>
          </div>
        </div>

        {/* Alerts Section */}
        <div className="w-full md:w-1/3 bg-white rounded-xl shadow p-6">
          <h2 className="text-lg font-bold text-[#5A3972] mb-4">Alerts</h2>
          <p className="text-red-500 font-medium mb-6">
            SOS Triggered by Emily Chen at 224 Elm St.
          </p>
          <div className="space-y-3">
            <button className="w-full py-2 rounded-lg bg-[#F3EAFE] text-[#5A3972] font-semibold hover:bg-[#e6d7fc]">
              Acknowledge
            </button>
            <button className="w-full py-2 rounded-lg bg-[#5A3972] text-white font-semibold hover:bg-[#472c5a]">
              Dispatch
            </button>
          </div>
        </div>
      </div>

      {/* Trusted Contacts */}
      <div className="bg-white rounded-xl shadow mx-6 p-6 mb-6">
        <h2 className="text-lg font-bold text-[#5A3972] mb-4">
          Trusted Contacts
        </h2>
        <ul className="space-y-2 text-gray-700">
          <li className="flex justify-between">
            <span>Sarah Lee</span>
            <span className="font-medium">+1 234 567 8901</span>
          </li>
          <li className="flex justify-between">
            <span>James Kim</span>
            <span className="font-medium">+1 345 678 9012</span>
          </li>
        </ul>
      </div>

      {/* Footer */}
      <div className="flex justify-center mb-6">
        <button className="px-10 py-3 rounded-full bg-[#5A3972] text-white font-semibold hover:bg-[#472c5a]">
          OK
        </button>
      </div>
    </div>
  );
}
