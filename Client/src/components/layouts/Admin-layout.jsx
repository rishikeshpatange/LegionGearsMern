import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg p-6 flex flex-col">
        <h1 className="text-2xl font-bold text-gray-900 mb-10">Admin Dashboard</h1>
        <nav className="flex flex-col gap-6">
          <NavLink
            to="/admin/users"
            className={({ isActive }) =>
              `p-3 rounded-lg transition ${
                isActive ? "bg-blue-600 text-white" : "text-gray-700 hover:bg-gray-200"
              }`
            }
          >
            Users
          </NavLink>
          <NavLink
            to="/admin/orders"
            className={({ isActive }) =>
              `p-3 rounded-lg transition ${
                isActive ? "bg-blue-600 text-white" : "text-gray-700 hover:bg-gray-200"
              }`
            }
          >
            Orders
          </NavLink>

        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;