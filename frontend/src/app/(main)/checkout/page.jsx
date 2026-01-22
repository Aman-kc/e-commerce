"use client";

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { FaCreditCard, FaTruck, FaLock } from "react-icons/fa";
import { clearCart } from "@/store/cartSlice";
import { createOrder } from "@/lib/api";

export default function CheckoutPage() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { items, totalAmount } = useSelector((state) => state.cart);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    shipping: "standard",
    payment: "card",
    notes: "",
  });

  const [processing, setProcessing] = useState(false);

  const subtotal = totalAmount;
  const shippingCost =
    formData.shipping === "standard"
      ? 0
      : formData.shipping === "express"
        ? 10
        : 25;
  const tax = subtotal * 0.08;
  const total = subtotal + shippingCost + tax;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);

    try {
      const orderData = {
        ...formData,
        items,
        subtotal,
        shipping: shippingCost,
        tax,
        total,
      };

      // await createOrder(orderData)

      // Simulate API call
      setTimeout(() => {
        dispatch(clearCart());
        router.push("/order-success");
      }, 2000);
    } catch (error) {
      console.error("Order error:", error);
      alert("Failed to process order. Please try again.");
      setProcessing(false);
    }
  };

  if (items.length === 0) {
    router.push("/cart");
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-12">
        <div className="container">
          <h1 className="text-4xl font-bold mb-2">Checkout</h1>
          <p className="text-lg text-white/90">Complete your order</p>
        </div>
      </div>

      <div className="container py-8">
        <form onSubmit={handleSubmit}>
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Checkout Form */}
            <div className="lg:col-span-2 space-y-6">
              {/* Billing Details */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                  <FaTruck className="text-primary-600" />
                  Billing & Shipping Details
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="input"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="input"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="input"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="input"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Street Address *
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                      className="input"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      City *
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                      className="input"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      State *
                    </label>
                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      required
                      className="input"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      ZIP Code *
                    </label>
                    <input
                      type="text"
                      name="zip"
                      value={formData.zip}
                      onChange={handleChange}
                      required
                      className="input"
                    />
                  </div>
                </div>
              </div>

              {/* Shipping Method */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold mb-6">Shipping Method</h2>
                <div className="space-y-3">
                  <label className="flex items-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-primary-500 transition-colors">
                    <input
                      type="radio"
                      name="shipping"
                      value="standard"
                      checked={formData.shipping === "standard"}
                      onChange={handleChange}
                      className="mr-3 accent-primary-600"
                    />
                    <div className="flex-1">
                      <span className="font-medium">
                        Standard Shipping (5-7 days)
                      </span>
                      <span className="text-sm text-gray-500 block">Free</span>
                    </div>
                    <span className="font-bold text-primary-600">$0.00</span>
                  </label>
                  <label className="flex items-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-primary-500 transition-colors">
                    <input
                      type="radio"
                      name="shipping"
                      value="express"
                      checked={formData.shipping === "express"}
                      onChange={handleChange}
                      className="mr-3 accent-primary-600"
                    />
                    <div className="flex-1">
                      <span className="font-medium">
                        Express Shipping (2-3 days)
                      </span>
                    </div>
                    <span className="font-bold">$10.00</span>
                  </label>
                  <label className="flex items-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-primary-500 transition-colors">
                    <input
                      type="radio"
                      name="shipping"
                      value="overnight"
                      checked={formData.shipping === "overnight"}
                      onChange={handleChange}
                      className="mr-3 accent-primary-600"
                    />
                    <div className="flex-1">
                      <span className="font-medium">Overnight Shipping</span>
                    </div>
                    <span className="font-bold">$25.00</span>
                  </label>
                </div>
              </div>

              {/* Payment Method */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                  <FaCreditCard className="text-primary-600" />
                  Payment Method
                </h2>
                <div className="space-y-3 mb-6">
                  <label className="flex items-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-primary-500 transition-colors">
                    <input
                      type="radio"
                      name="payment"
                      value="card"
                      checked={formData.payment === "card"}
                      onChange={handleChange}
                      className="mr-3 accent-primary-600"
                    />
                    <span className="font-medium">Credit/Debit Card</span>
                  </label>
                  <label className="flex items-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-primary-500 transition-colors">
                    <input
                      type="radio"
                      name="payment"
                      value="paypal"
                      checked={formData.payment === "paypal"}
                      onChange={handleChange}
                      className="mr-3 accent-primary-600"
                    />
                    <span className="font-medium">PayPal</span>
                  </label>
                  <label className="flex items-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-primary-500 transition-colors">
                    <input
                      type="radio"
                      name="payment"
                      value="cod"
                      checked={formData.payment === "cod"}
                      onChange={handleChange}
                      className="mr-3 accent-primary-600"
                    />
                    <span className="font-medium">Cash on Delivery</span>
                  </label>
                </div>

                {formData.payment === "card" && (
                  <div className="space-y-4 pt-4 border-t border-gray-200">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Card Number
                      </label>
                      <input
                        type="text"
                        placeholder="1234 5678 9012 3456"
                        className="input"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Expiry Date
                        </label>
                        <input
                          type="text"
                          placeholder="MM/YY"
                          className="input"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          CVV
                        </label>
                        <input
                          type="text"
                          placeholder="123"
                          className="input"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Order Notes */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold mb-4">
                  Order Notes (Optional)
                </h2>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Any special instructions for delivery..."
                  className="input"
                />
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
                <h2 className="text-xl font-semibold mb-6">Your Order</h2>

                <div className="space-y-3 mb-6 max-h-64 overflow-y-auto">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="flex gap-3 pb-3 border-b border-gray-200 last:border-0"
                    >
                      <div className="relative w-16 h-16 bg-gray-100 rounded flex-shrink-0">
                        <span className="text-2xl flex items-center justify-center h-full">
                          🌾
                        </span>
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-sm text-gray-900">
                          {item.name}
                        </p>
                        <p className="text-xs text-gray-500">
                          Qty: {item.quantity}
                        </p>
                      </div>
                      <span className="font-semibold text-sm">
                        ${item.totalPrice.toFixed(2)}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span className="font-semibold">
                      ${subtotal.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Shipping</span>
                    <span className="font-semibold">
                      ${shippingCost.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Tax (8%)</span>
                    <span className="font-semibold">${tax.toFixed(2)}</span>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold">Total</span>
                    <span className="text-2xl font-bold text-primary-600">
                      ${total.toFixed(2)}
                    </span>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={processing}
                  className="btn btn-primary w-full mb-3 disabled:opacity-50"
                >
                  <FaLock className="mr-2" />
                  {processing ? "Processing..." : "Place Order"}
                </button>

                <p className="text-sm text-gray-600 text-center flex items-center justify-center gap-2">
                  <FaLock className="text-primary-600" />
                  Your payment information is secure
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
