"use client";

import { FaLeaf, FaShippingFast, FaShieldAlt, FaHeadset } from "react-icons/fa";

export default function Features() {
  const features = [
    {
      icon: FaLeaf,
      title: "100% Organic",
      description: "Certified organic products with no chemicals or pesticides",
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      icon: FaShippingFast,
      title: "Free Delivery",
      description: "Free shipping on orders above $50",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: FaShieldAlt,
      title: "Quality Assured",
      description: "Premium quality products, tested and verified",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      icon: FaHeadset,
      title: "24/7 Support",
      description: "Dedicated customer support always ready to help",
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
  ];

  return (
    <section className="py-16 -mt-10 relative z-20">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className={`${feature.bgColor} w-14 h-14 rounded-lg flex items-center justify-center mb-4`}
                >
                  <Icon className={`text-2xl ${feature.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
