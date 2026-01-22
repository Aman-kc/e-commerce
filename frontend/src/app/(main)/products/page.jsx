"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import ProductCard from "@/components/products/ProductCard";
import { getAllProducts, getProductsByCategory } from "@/lib/api";
import { FaFilter, FaTh, FaList } from "react-icons/fa";

export default function ProductsPage() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [priceRange, setPriceRange] = useState(50);
  const [sortBy, setSortBy] = useState("default");
  const [viewMode, setViewMode] = useState("grid");
  const [selectedCategory, setSelectedCategory] = useState(category || "all");

  useEffect(() => {
    fetchProducts();
  }, [category]);

  useEffect(() => {
    filterAndSortProducts();
  }, [products, priceRange, sortBy, selectedCategory]);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      let data;
      if (category) {
        data = await getProductsByCategory(category);
      } else {
        data = await getAllProducts();
      }

      // Use mock data if API returns empty
      if (!data || data.length === 0) {
        data = getMockProducts();
      }

      setProducts(data);
      setFilteredProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
      setProducts(getMockProducts());
      setFilteredProducts(getMockProducts());
    } finally {
      setLoading(false);
    }
  };

  const filterAndSortProducts = () => {
    let filtered = [...products];

    // Filter by category
    if (selectedCategory !== "all") {
      filtered = filtered.filter((p) => p.category === selectedCategory);
    }

    // Filter by price
    filtered = filtered.filter((p) => p.price <= priceRange);

    // Sort products
    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "name":
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }

    setFilteredProducts(filtered);
  };

  const getMockProducts = () => {
    return [
      {
        id: 1,
        name: "Organic Brown Rice",
        category: "grains",
        price: 12.99,
        originalPrice: 15.99,
        rating: 4.5,
        inStock: true,
        discount: 20,
      },
      {
        id: 2,
        name: "Fresh Organic Milk",
        category: "dairy",
        price: 5.99,
        rating: 5,
        inStock: true,
      },
      {
        id: 3,
        name: "Organic Almonds",
        category: "snacks",
        price: 18.99,
        rating: 4.8,
        inStock: true,
      },
      {
        id: 4,
        name: "Green Tea",
        category: "beverages",
        price: 8.99,
        originalPrice: 11.99,
        rating: 4.6,
        inStock: true,
        discount: 25,
      },
      {
        id: 5,
        name: "Organic Olive Oil",
        category: "oils",
        price: 22.99,
        rating: 4.9,
        inStock: true,
      },
      {
        id: 6,
        name: "Quinoa",
        category: "grains",
        price: 14.99,
        rating: 4.7,
        inStock: false,
      },
      {
        id: 7,
        name: "Organic Honey",
        category: "oils",
        price: 16.99,
        rating: 4.8,
        inStock: true,
      },
      {
        id: 8,
        name: "Greek Yogurt",
        category: "dairy",
        price: 6.99,
        rating: 4.5,
        inStock: true,
      },
      {
        id: 9,
        name: "Oats",
        category: "grains",
        price: 9.99,
        rating: 4.6,
        inStock: true,
      },
      {
        id: 10,
        name: "Organic Cashews",
        category: "snacks",
        price: 19.99,
        rating: 4.7,
        inStock: true,
      },
      {
        id: 11,
        name: "Herbal Tea",
        category: "beverages",
        price: 7.99,
        rating: 4.4,
        inStock: true,
      },
      {
        id: 12,
        name: "Coconut Oil",
        category: "oils",
        price: 15.99,
        rating: 4.8,
        inStock: true,
      },
    ];
  };

  const categories = [
    { id: "all", name: "All Products" },
    { id: "grains", name: "Grains & Cereals" },
    { id: "dairy", name: "Dairy Products" },
    { id: "snacks", name: "Organic Snacks" },
    { id: "beverages", name: "Beverages" },
    { id: "oils", name: "Oils & Condiments" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-12">
        <div className="container">
          <h1 className="text-4xl font-bold mb-2">Our Products</h1>
          <p className="text-lg text-white/90">
            Discover our range of organic products
          </p>
        </div>
      </div>

      <div className="container py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <aside className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                <FaFilter /> Filters
              </h3>

              {/* Categories */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-700 mb-3">Categories</h4>
                <div className="space-y-2">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`w-full text-left px-3 py-2 rounded transition-colors ${
                        selectedCategory === cat.id
                          ? "bg-primary-100 text-primary-700 font-medium"
                          : "text-gray-600 hover:bg-gray-100"
                      }`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-700 mb-3">
                  Price Range
                </h4>
                <input
                  type="range"
                  min="0"
                  max="50"
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  className="w-full accent-primary-600"
                />
                <div className="flex justify-between text-sm text-gray-600 mt-2">
                  <span>$0</span>
                  <span className="font-semibold">${priceRange}</span>
                </div>
              </div>

              {/* Sort By */}
              <div>
                <h4 className="font-semibold text-gray-700 mb-3">Sort By</h4>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="default">Default</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="name">Name: A to Z</option>
                </select>
              </div>
            </div>
          </aside>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            {/* Toolbar */}
            <div className="bg-white rounded-lg shadow-md p-4 mb-6 flex flex-wrap items-center justify-between gap-4">
              <p className="text-gray-600">
                <span className="font-semibold text-gray-900">
                  {filteredProducts.length}
                </span>{" "}
                products found
              </p>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded ${viewMode === "grid" ? "bg-primary-100 text-primary-700" : "text-gray-600 hover:bg-gray-100"}`}
                >
                  <FaTh />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded ${viewMode === "list" ? "bg-primary-100 text-primary-700" : "text-gray-600 hover:bg-gray-100"}`}
                >
                  <FaList />
                </button>
              </div>
            </div>

            {/* Products Loading */}
            {loading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="animate-pulse">
                    <div className="bg-gray-200 h-64 rounded-lg mb-4"></div>
                    <div className="bg-gray-200 h-4 rounded mb-2"></div>
                    <div className="bg-gray-200 h-4 rounded w-2/3"></div>
                  </div>
                ))}
              </div>
            ) : filteredProducts.length === 0 ? (
              <div className="bg-white rounded-lg shadow-md p-12 text-center">
                <p className="text-gray-600 text-lg">
                  No products found matching your criteria.
                </p>
              </div>
            ) : (
              <div
                className={`grid gap-6 ${viewMode === "grid" ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"}`}
              >
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
