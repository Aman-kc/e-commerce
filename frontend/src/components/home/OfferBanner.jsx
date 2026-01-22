"use client";

import Link from "next/link";

export default function OfferBanner() {
  return (
    <section className="py-16">
      <div className="container">
        <div className="relative bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl overflow-hidden shadow-2xl">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full translate-y-1/2 -translate-x-1/2"></div>
          </div>

          <div className="relative z-10 py-16 px-8 text-center">
            <span className="inline-block bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-semibold mb-4">
              Special Offer
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 font-display">
              Get 25% Off on First Order
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Use code:{" "}
              <span className="font-bold bg-white/20 px-3 py-1 rounded">
                ORGANIC25
              </span>{" "}
              at checkout
            </p>
            <Link
              href="/products"
              className="btn bg-white text-primary-700 hover:bg-gray-100 text-lg"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
