"use client";

import Link from "next/link";
import Image from "next/image";
import { FaStar, FaShoppingCart, FaHeart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "@/store/cartSlice";
import { useState } from "react";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleAddToCart = (e) => {
    e.preventDefault();
    dispatch(addToCart(product));
  };

  const toggleWishlist = (e) => {
    e.preventDefault();
    setIsWishlisted(!isWishlisted);
  };

  return (
    <Link href={`/products/${product.id}`}>
      <div className="card group cursor-pointer">
        <div className="relative h-64 bg-gray-100 overflow-hidden">
          {product.discount && (
            <span className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold z-10">
              -{product.discount}%
            </span>
          )}

          <button
            onClick={toggleWishlist}
            className={`absolute top-3 right-3 z-10 w-10 h-10 rounded-full flex items-center justify-center transition-all ${
              isWishlisted
                ? "bg-red-500 text-white"
                : "bg-white/80 text-gray-600 hover:bg-red-500 hover:text-white"
            }`}
          >
            <FaHeart className={isWishlisted ? "fill-current" : ""} />
          </button>

          {product.image ? (
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary-100 to-earth-100">
              <span className="text-6xl">🌾</span>
            </div>
          )}

          {!product.inStock && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <span className="bg-white text-gray-900 px-4 py-2 rounded-lg font-semibold">
                Out of Stock
              </span>
            </div>
          )}
        </div>

        <div className="p-4">
          <p className="text-xs text-primary-600 font-medium uppercase mb-1">
            {product.category}
          </p>
          <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
            {product.name}
          </h3>

          <div className="flex items-center gap-2 mb-3">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  className={`text-xs ${
                    i < Math.floor(product.rating || 0)
                      ? "text-yellow-400"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="text-xs text-gray-500">
              ({product.rating || 0})
            </span>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <span className="text-2xl font-bold text-gray-900">
                ${product.price}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-gray-500 line-through ml-2">
                  ${product.originalPrice}
                </span>
              )}
            </div>

            {product.inStock && (
              <button
                onClick={handleAddToCart}
                className="bg-primary-600 text-white p-3 rounded-lg hover:bg-primary-700 transition-colors"
                title="Add to cart"
              >
                <FaShoppingCart />
              </button>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
