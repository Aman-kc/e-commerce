import Link from "next/link";
import { FaLeaf, FaHeart, FaSeedling, FaTruck } from "react-icons/fa";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-20">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About Organic Store
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Committed to bringing you the finest organic products from farm to
            table
          </p>
        </div>
      </div>

      <div className="container py-16">
        {/* Story */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="text-center mb-12">
            <FaLeaf className="text-5xl text-primary-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h2>
          </div>
          <div className="bg-white rounded-lg shadow-md p-8 md:p-12">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Founded in 2020, Organic Store was born from a simple belief:
              everyone deserves access to pure, chemical-free, and nutritious
              food. What started as a small farmers market stall has grown into
              a trusted online destination for organic products.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              We work directly with certified organic farms across the country,
              ensuring that every product meets our strict quality standards.
              From grains and dairy to snacks and beverages, each item is
              carefully selected for its purity, taste, and nutritional value.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Today, we're proud to serve over 50,000 customers who trust us to
              deliver fresh, organic products right to their doorstep. Our
              mission remains unchanged: to make organic living accessible and
              affordable for everyone.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaLeaf className="text-3xl text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                100% Organic
              </h3>
              <p className="text-gray-600">
                All products are certified organic with no pesticides or harmful
                chemicals
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaHeart className="text-3xl text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Health First
              </h3>
              <p className="text-gray-600">
                Your health and wellness are our top priorities in everything we
                do
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaSeedling className="text-3xl text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Sustainable
              </h3>
              <p className="text-gray-600">
                Environmentally responsible farming practices for a better
                tomorrow
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaTruck className="text-3xl text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Fast Delivery
              </h3>
              <p className="text-gray-600">
                Fresh products delivered quickly to maintain quality and
                freshness
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Go Organic?</h2>
          <p className="text-lg mb-8 text-white/90">
            Join thousands of happy customers enjoying healthier lives with our
            organic products
          </p>
          <Link
            href="/products"
            className="btn bg-white text-primary-700 hover:bg-gray-100"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
}
