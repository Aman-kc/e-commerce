import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Providers } from "@/components/Providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  title: "Organic Store - Fresh & Natural Organic Products",
  description:
    "Shop 100% organic grains, dairy products, and healthy snacks. Fresh from farm to your table. Free shipping on orders over $50.",
  keywords:
    "organic store, organic food, natural products, organic grains, organic dairy, healthy snacks",
  authors: [{ name: "Organic Store" }],
  openGraph: {
    title: "Organic Store - Fresh & Natural Organic Products",
    description:
      "Shop 100% organic grains, dairy products, and healthy snacks.",
    url: "https://organicstore.com",
    siteName: "Organic Store",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Organic Store - Fresh & Natural Organic Products",
    description:
      "Shop 100% organic grains, dairy products, and healthy snacks.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans antialiased">
        <Providers>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
