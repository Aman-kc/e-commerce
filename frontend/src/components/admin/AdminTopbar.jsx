"use client";

import { useRouter } from "next/navigation";
import { FaBell, FaUser, FaSignOutAlt } from "react-icons/fa";

export default function AdminTopbar() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("adminUser");
    router.push("/admin/login");
  };

  return (
    <div className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-800">Welcome, Admin</h2>
        <div className="flex items-center gap-4">
          <button className="relative p-2 text-gray-600 hover:text-primary-600 transition-colors">
            <FaBell className="text-xl" />
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          <button className="p-2 text-gray-600 hover:text-primary-600 transition-colors">
            <FaUser className="text-xl" />
          </button>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            <FaSignOutAlt />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
}
