"use client";

import Link from "next/link";
import Image from "next/image";
import { FaLeaf, FaArrowRight } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-primary-50 to-earth-50 py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-primary-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-earth-400 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full mb-6">
              <FaLeaf className="text-sm" />
              <span className="text-sm font-medium">
                100% Certified Organic
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 font-display leading-tight">
              Fresh Organic Products
              <span className="text-primary-600"> From Farm to Table</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              Experience the natural goodness of 100% organic grains, dairy
              products, and healthy snacks. Fresh, chemical-free, and delivered
              to your doorstep.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/products" className="btn btn-primary text-lg group">
                Shop Now
                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/about" className="btn btn-outline text-lg">
                Learn More
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-gray-200">
              <div>
                <h3 className="text-3xl font-bold text-primary-600 mb-1">
                  500+
                </h3>
                <p className="text-sm text-gray-600">Organic Products</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-primary-600 mb-1">
                  50k+
                </h3>
                <p className="text-sm text-gray-600">Happy Customers</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-primary-600 mb-1">
                  100%
                </h3>
                <p className="text-sm text-gray-600">Organic Certified</p>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative w-full h-[600px]">
              <div className="absolute inset-0 bg-primary-200 rounded-3xl rotate-6"></div>
              <div className="absolute inset-0 bg-earth-200 rounded-3xl -rotate-3"></div>
              <div className="absolute inset-0 bg-white rounded-3xl shadow-2xl overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-primary-100 to-earth-100 flex items-center justify-center">
                  <div className="text-center p-12">
                    <FaLeaf className="text-9xl text-primary-500 mb-4 mx-auto" />
                    <h3 className="text-2xl font-bold text-gray-800">
                      Organic & Natural
                    </h3>
                    <p className="text-gray-600 mt-2">100% Chemical Free</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
