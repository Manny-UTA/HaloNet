import { Outlet, NavLink } from "react-router-dom";

export default function AppLayout() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-[#F8F4FA]">
      {/* Sidebar (desktop) */}
      <aside className="hidden md:flex flex-col w-64 bg-white shadow p-6 space-y-6">
        <h2 className="text-xl font-bold text-[#5A3972]">HaloNet</h2>
        <NavItem to="/app/dashboard" label="Dashboard" />
        <NavItem to="/app/routes" label="Routes" />
        <NavItem to="/app/tracking" label="Tracking" />
        <NavItem to="/app/profile" label="Profile" />
      </aside>

      {/* Main content + bottom nav (mobile) */}
      <div className="flex-1">
        <Outlet />
        <nav className="fixed bottom-0 left-0 w-full bg-white border-t flex justify-around py-2 md:hidden">
          <NavItem to="/app/dashboard" label="🏠" />
          <NavItem to="/app/routes" label="📍" />
          <NavItem to="/app/tracking" label="📡" />
          <NavItem to="/app/profile" label="👤" />
        </nav>
      </div>
    </div>
  );
}

function NavItem({ to, label }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `px-4 py-2 rounded-lg font-medium ${
          isActive ? "bg-[#E96A7D] text-white" : "text-[#5A3972]"
        }`
      }
    >
      {label}
    </NavLink>
  );
}
