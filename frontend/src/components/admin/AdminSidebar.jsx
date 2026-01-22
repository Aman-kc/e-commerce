"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaHome, FaBox, FaTags, FaShoppingBag, FaLeaf } from "react-icons/fa";

export default function AdminSidebar() {
  const pathname = usePathname();

  const menuItems = [
    { path: "/admin", icon: FaHome, label: "Dashboard" },
    { path: "/admin/products", icon: FaBox, label: "Products" },
    { path: "/admin/categories", icon: FaTags, label: "Categories" },
    { path: "/admin/orders", icon: FaShoppingBag, label: "Orders" },
  ];

  return (
    <aside className="w-64 bg-primary-700 text-white flex flex-col">
      <div className="p-6">
        <div className="flex items-center gap-2 text-2xl font-bold">
          <FaLeaf />
          <span>Admin Panel</span>
        </div>
      </div>

      <nav className="flex-1 px-4">
        {menuItems.map((item) => {
          const isActive = pathname === item.path;
          return (
            <Link
              key={item.path}
              href={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition-colors ${
                isActive
                  ? "bg-primary-800 text-white"
                  : "text-primary-100 hover:bg-primary-600"
              }`}
            >
              <item.icon className="text-xl" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-primary-600">
        <p className="text-sm text-primary-200 text-center">
          Organic Store Admin v1.0
        </p>
      </div>
    </aside>
  );
}
