"use client";

import Link from "next/link";
import {
  FaSeedling,
  FaCheese,
  FaCookie,
  FaCoffee,
  FaTint,
  FaAppleAlt,
} from "react-icons/fa";

export default function Categories() {
  const categories = [
    {
      name: "Grains & Cereals",
      icon: FaSeedling,
      description: "Organic rice, wheat, oats & more",
      href: "/products?category=grains",
      color: "from-amber-400 to-orange-500",
    },
    {
      name: "Dairy Products",
      icon: FaCheese,
      description: "Fresh milk, cheese, yogurt & butter",
      href: "/products?category=dairy",
      color: "from-blue-400 to-cyan-500",
    },
    {
      name: "Organic Snacks",
      icon: FaCookie,
      description: "Healthy snacks for guilt-free munching",
      href: "/products?category=snacks",
      color: "from-pink-400 to-rose-500",
    },
    {
      name: "Beverages",
      icon: FaCoffee,
      description: "Natural juices, teas & health drinks",
      href: "/products?category=beverages",
      color: "from-green-400 to-emerald-500",
    },
    {
      name: "Oils & Condiments",
      icon: FaTint,
      description: "Pure oils, spices & seasonings",
      href: "/products?category=oils",
      color: "from-yellow-400 to-amber-500",
    },
    {
      name: "Fresh Produce",
      icon: FaAppleAlt,
      description: "Fresh organic fruits & vegetables",
      href: "/products?category=produce",
      color: "from-lime-400 to-green-500",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title">Shop by Category</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Explore our wide range of organic products, carefully selected for
            your healthy lifestyle
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Link
                key={index}
                href={category.href}
                className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className={`bg-gradient-to-br ${category.color} p-8 text-white relative overflow-hidden`}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                  <Icon className="text-5xl mb-3 relative z-10" />
                  <h3 className="text-2xl font-bold relative z-10">
                    {category.name}
                  </h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600">{category.description}</p>
                  <span className="inline-flex items-center gap-2 text-primary-600 font-medium mt-3 group-hover:gap-3 transition-all">
                    Browse Products
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
