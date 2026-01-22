"use client";

import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import Image from "next/image";
import { FaTrash, FaMinus, FaPlus, FaShoppingBag } from "react-icons/fa";
import { removeFromCart, updateQuantity } from "@/store/cartSlice";

export default function CartPage() {
  const dispatch = useDispatch();
  const { items, totalAmount } = useSelector((state) => state.cart);

  const handleUpdateQuantity = (id, quantity) => {
    if (quantity > 0) {
      dispatch(updateQuantity({ id, quantity }));
    }
  };

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const subtotal = totalAmount;
  const shipping = subtotal > 50 ? 0 : 10;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center py-12">
          <FaShoppingBag className="text-6xl text-gray-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Your cart is empty
          </h2>
          <p className="text-gray-600 mb-6">
            Add some organic products to get started!
          </p>
          <Link href="/products" className="btn btn-primary">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-12">
        <div className="container">
          <h1 className="text-4xl font-bold mb-2">Shopping Cart</h1>
          <p className="text-lg text-white/90">Review your selected items</p>
        </div>
      </div>

      <div className="container py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold">
                  Cart Items ({items.length})
                </h2>
              </div>
              <div className="divide-y divide-gray-200">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="p-6 hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex gap-4">
                      <div className="relative w-24 h-24 bg-gray-100 rounded-lg flex-shrink-0 overflow-hidden">
                        {item.image ? (
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary-100 to-earth-100">
                            <span className="text-3xl">🌾</span>
                          </div>
                        )}
                      </div>

                      <div className="flex-1">
                        <Link
                          href={`/products/${item.id}`}
                          className="font-semibold text-gray-900 hover:text-primary-600 transition-colors"
                        >
                          {item.name}
                        </Link>
                        <p className="text-sm text-gray-500 mt-1 capitalize">
                          {item.category}
                        </p>
                        <div className="flex items-center gap-4 mt-3">
                          <div className="flex items-center border-2 border-gray-300 rounded-lg">
                            <button
                              onClick={() =>
                                handleUpdateQuantity(item.id, item.quantity - 1)
                              }
                              className="px-3 py-1 hover:bg-gray-100 transition-colors"
                            >
                              <FaMinus className="text-sm" />
                            </button>
                            <span className="px-4 py-1 font-semibold">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                handleUpdateQuantity(item.id, item.quantity + 1)
                              }
                              className="px-3 py-1 hover:bg-gray-100 transition-colors"
                            >
                              <FaPlus className="text-sm" />
                            </button>
                          </div>
                          <button
                            onClick={() => handleRemove(item.id)}
                            className="text-red-600 hover:text-red-700 transition-colors p-2"
                            title="Remove item"
                          >
                            <FaTrash />
                          </button>
                        </div>
                      </div>

                      <div className="text-right">
                        <p className="text-xl font-bold text-gray-900">
                          ${item.totalPrice.toFixed(2)}
                        </p>
                        <p className="text-sm text-gray-500 mt-1">
                          ${item.price.toFixed(2)} each
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <h2 className="text-xl font-semibold mb-6">Order Summary</h2>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span className="font-semibold">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span className="font-semibold">
                    {shipping === 0 ? (
                      <span className="text-green-600">FREE</span>
                    ) : (
                      `$${shipping.toFixed(2)}`
                    )}
                  </span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Tax (8%)</span>
                  <span className="font-semibold">${tax.toFixed(2)}</span>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-gray-900">
                    Total
                  </span>
                  <span className="text-2xl font-bold text-primary-600">
                    ${total.toFixed(2)}
                  </span>
                </div>
              </div>

              {shipping > 0 && (
                <div className="bg-blue-50 text-blue-700 p-3 rounded-lg text-sm mb-4">
                  Add ${(50 - subtotal).toFixed(2)} more for FREE shipping!
                </div>
              )}

              <Link href="/checkout" className="btn btn-primary w-full mb-3">
                Proceed to Checkout
              </Link>
              <Link href="/products" className="btn btn-outline w-full">
                Continue Shopping
              </Link>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600 text-center">
                  <span className="font-semibold">Free shipping</span> on orders
                  over $50
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
