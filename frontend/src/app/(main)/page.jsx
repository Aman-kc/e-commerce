import HeroSection from "@/components/home/HeroSection";
import Features from "@/components/home/Features";
import Categories from "@/components/home/Categories";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import OfferBanner from "@/components/home/OfferBanner";
import Newsletter from "@/components/home/Newsletter";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Features />
      <OfferBanner />
      <Categories />
      <FeaturedProducts />
      <Newsletter />
    </>
  );
}
