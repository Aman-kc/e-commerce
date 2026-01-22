"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  FaStar,
  FaShoppingCart,
  FaHeart,
  FaMinus,
  FaPlus,
  FaCheck,
  FaTruck,
  FaShieldAlt,
} from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "@/store/cartSlice";
import { getProductById } from "@/lib/api";
import ProductCard from "@/components/products/ProductCard";

export default function ProductDetailPage() {
  const params = useParams();
  const dispatch = useDispatch();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    fetchProduct();
  }, [params.id]);

  const fetchProduct = async () => {
    try {
      setLoading(true);
      const data = await getProductById(params.id);
      setProduct(data || getMockProduct());
    } catch (error) {
      console.error("Error fetching product:", error);
      setProduct(getMockProduct());
    } finally {
      setLoading(false);
    }
  };

  const getMockProduct = () => ({
    id: params.id,
    name: "Organic Brown Rice",
    category: "grains",
    price: 12.99,
    originalPrice: 15.99,
    rating: 4.5,
    reviews: 128,
    inStock: true,
    stock: 45,
    discount: 20,
    description:
      "Premium quality organic brown rice, grown without pesticides or chemicals. Rich in fiber, vitamins, and minerals. Perfect for a healthy diet.",
    features: [
      "100% Certified Organic",
      "No Pesticides or Chemicals",
      "Rich in Fiber & Nutrients",
      "Gluten-Free & Non-GMO",
      "Sustainably Sourced",
    ],
    images: [
      "/images/products/brown-rice.jpg",
      "/images/products/brown-rice-2.jpg",
    ],
    nutritionalInfo: {
      servingSize: "100g",
      calories: 370,
      protein: "7.9g",
      carbs: "77.2g",
      fiber: "3.5g",
      fat: "2.9g",
    },
  });

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      dispatch(addToCart(product));
    }
  };

  const relatedProducts = [
    {
      id: 6,
      name: "Quinoa",
      category: "grains",
      price: 14.99,
      rating: 4.7,
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
      id: 7,
      name: "Organic Honey",
      category: "oils",
      price: 16.99,
      rating: 4.8,
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
  ];

  if (loading) {
    return (
      <div className="container py-12">
        <div className="animate-pulse">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-200 h-96 rounded-lg"></div>
            <div className="space-y-4">
              <div className="bg-gray-200 h-8 rounded w-3/4"></div>
              <div className="bg-gray-200 h-4 rounded w-1/2"></div>
              <div className="bg-gray-200 h-20 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container py-12 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          Product not found
        </h1>
        <Link href="/products" className="btn btn-primary">
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container py-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-600 mb-6">
          <Link href="/" className="hover:text-primary-600">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href="/products" className="hover:text-primary-600">
            Products
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-medium">{product.name}</span>
        </nav>

        {/* Product Detail */}
        <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-12">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Images */}
            <div>
              <div className="relative h-96 bg-gray-100 rounded-lg mb-4 overflow-hidden">
                {product.discount && (
                  <span className="absolute top-4 left-4 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold z-10">
                    -{product.discount}% OFF
                  </span>
                )}
                {product.images && product.images[selectedImage] ? (
                  <Image
                    src={product.images[selectedImage]}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary-100 to-earth-100">
                    <span className="text-9xl">🌾</span>
                  </div>
                )}
              </div>

              {product.images && product.images.length > 1 && (
                <div className="grid grid-cols-4 gap-2">
                  {product.images.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`relative h-20 bg-gray-100 rounded border-2 ${
                        selectedImage === index
                          ? "border-primary-600"
                          : "border-transparent"
                      }`}
                    >
                      <Image
                        src={img}
                        alt={`${product.name} ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div>
              <span className="inline-block bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium mb-3">
                {product.category}
              </span>

              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {product.name}
              </h1>

              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={`text-lg ${i < Math.floor(product.rating) ? "text-yellow-400" : "text-gray-300"}`}
                    />
                  ))}
                </div>
                <span className="text-gray-600">
                  ({product.reviews || 0} reviews)
                </span>
              </div>

              <div className="flex items-baseline gap-4 mb-6">
                <span className="text-4xl font-bold text-gray-900">
                  ${product.price}
                </span>
                {product.originalPrice && (
                  <span className="text-2xl text-gray-500 line-through">
                    ${product.originalPrice}
                  </span>
                )}
              </div>

              <p className="text-gray-600 leading-relaxed mb-6">
                {product.description}
              </p>

              {product.features && (
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 mb-3">
                    Key Features:
                  </h3>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-2 text-gray-600"
                      >
                        <FaCheck className="text-primary-600 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Stock Status */}
              <div className="mb-6">
                {product.inStock ? (
                  <span className="inline-flex items-center gap-2 text-green-700 bg-green-50 px-4 py-2 rounded-lg font-medium">
                    <FaCheck /> In Stock ({product.stock || 0} available)
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-2 text-red-700 bg-red-50 px-4 py-2 rounded-lg font-medium">
                    Out of Stock
                  </span>
                )}
              </div>

              {/* Quantity & Add to Cart */}
              {product.inStock && (
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <div className="flex items-center border-2 border-gray-300 rounded-lg">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-4 py-3 hover:bg-gray-100 transition-colors"
                    >
                      <FaMinus />
                    </button>
                    <span className="px-6 py-3 font-semibold">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-4 py-3 hover:bg-gray-100 transition-colors"
                    >
                      <FaPlus />
                    </button>
                  </div>
                  <button
                    onClick={handleAddToCart}
                    className="flex-1 btn btn-primary text-lg"
                  >
                    <FaShoppingCart className="mr-2" />
                    Add to Cart
                  </button>
                  <button className="btn btn-outline">
                    <FaHeart />
                  </button>
                </div>
              )}

              {/* Additional Info */}
              <div className="space-y-3 pt-6 border-t border-gray-200">
                <div className="flex items-center gap-3 text-gray-600">
                  <FaTruck className="text-primary-600 text-xl" />
                  <span>Free shipping on orders over $50</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <FaShieldAlt className="text-primary-600 text-xl" />
                  <span>100% Quality Guarantee</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Related Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((prod) => (
              <ProductCard key={prod.id} product={prod} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
