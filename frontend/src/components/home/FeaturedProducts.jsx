"use client";

import { useEffect, useState } from "react";
import ProductCard from "@/components/products/ProductCard";
import { getFeaturedProducts } from "@/lib/api";

export default function FeaturedProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const data = await getFeaturedProducts();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  // Mock data for demonstration
  const mockProducts = [
    {
      id: 1,
      name: "Organic Brown Rice",
      category: "grains",
      price: 12.99,
      originalPrice: 15.99,
      image: "/images/products/brown-rice.jpg",
      rating: 4.5,
      inStock: true,
      discount: 20,
    },
    {
      id: 2,
      name: "Fresh Organic Milk",
      category: "dairy",
      price: 5.99,
      image: "/images/products/milk.jpg",
      rating: 5,
      inStock: true,
    },
    {
      id: 3,
      name: "Organic Almonds",
      category: "snacks",
      price: 18.99,
      image: "/images/products/almonds.jpg",
      rating: 4.8,
      inStock: true,
    },
    {
      id: 4,
      name: "Green Tea",
      category: "beverages",
      price: 8.99,
      originalPrice: 11.99,
      image: "/images/products/green-tea.jpg",
      rating: 4.6,
      inStock: true,
      discount: 25,
    },
    {
      id: 5,
      name: "Organic Olive Oil",
      category: "oils",
      price: 22.99,
      image: "/images/products/olive-oil.jpg",
      rating: 4.9,
      inStock: true,
    },
    {
      id: 6,
      name: "Quinoa",
      category: "grains",
      price: 14.99,
      image: "/images/products/quinoa.jpg",
      rating: 4.7,
      inStock: false,
    },
    {
      id: 7,
      name: "Organic Honey",
      category: "oils",
      price: 16.99,
      image: "/images/products/honey.jpg",
      rating: 4.8,
      inStock: true,
    },
    {
      id: 8,
      name: "Greek Yogurt",
      category: "dairy",
      price: 6.99,
      image: "/images/products/yogurt.jpg",
      rating: 4.5,
      inStock: true,
    },
  ];

  const displayProducts = products.length > 0 ? products : mockProducts;

  if (loading) {
    return (
      <section className="py-20">
        <div className="container">
          <h2 className="section-title">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="bg-gray-200 h-64 rounded-lg mb-4"></div>
                <div className="bg-gray-200 h-4 rounded mb-2"></div>
                <div className="bg-gray-200 h-4 rounded w-2/3"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title">Featured Products</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Handpicked organic products that our customers love the most
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="/products" className="btn btn-primary text-lg">
            View All Products
          </a>
        </div>
      </div>
    </section>
  );
}
