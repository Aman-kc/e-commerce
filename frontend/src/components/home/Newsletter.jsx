"use client";

import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      setEmail("");
      setTimeout(() => setStatus(""), 3000);
    }, 1000);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-700">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Get updates on new products, special offers, and organic living
              tips delivered to your inbox
            </p>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="flex-1 px-6 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="btn bg-white text-primary-700 hover:bg-gray-100 px-8 flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {status === "loading" ? (
                  "Subscribing..."
                ) : (
                  <>
                    Subscribe
                    <FaPaperPlane />
                  </>
                )}
              </button>
            </form>

            {status === "success" && (
              <p className="mt-4 text-white font-medium animate-fade-in">
                ✓ Successfully subscribed! Check your email for confirmation.
              </p>
            )}

            <p className="text-sm text-white/70 mt-6">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
