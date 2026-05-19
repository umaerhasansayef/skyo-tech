import React, { useState } from "react";
import logo from "./assets/logo.png";

function App() {
  // কার্ট কাউন্টারের জন্য স্টেট
  const [cartCount, setCartCount] = useState(0);

  const products = [
    {
      name: "Premium Panjabi",
      price: "৳2490",
      image: "https://images.unsplash.com/photo-1593032465171-8bd6b6dbfb40?q=80&w=1200&auto=format&fit=crop",
    },
    {
      name: "Stylish Shirt",
      price: "৳1890",
      image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=1200&auto=format&fit=crop",
    },
    {
      name: "Modern T-Shirt",
      price: "৳990",
      image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1200&auto=format&fit=crop",
    },
    {
      name: "Luxury Hoodie",
      price: "৳2990",
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  // কার্ট হ্যান্ডলার
  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <div className="min-h-screen bg-white text-black font-sans antialiased">
      
      {/* Navbar */}
      <header className="sticky top-0 bg-white/90 backdrop-blur-md border-b border-gray-100 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-5 py-4 flex justify-between items-center">
          
          {/* Logo + Name */}
          <div className="flex items-center gap-3 cursor-pointer group">
            <img
              src={logo}
              alt="SKYO FASHION Logo"
              className="w-12 h-12 rounded-full ring-2 ring-black/5 group-hover:scale-105 transition-transform"
            />
            <div>
              <h1 className="text-2xl md:text-3xl font-black tracking-wider text-black">
                SKYO FASHION
              </h1>
              <p className="text-gray-400 text-xs uppercase tracking-widest font-medium">
                Premium Fashion Store
              </p>
            </div>
          </div>

          {/* Cart Button */}
          <button className="bg-black text-white px-5 py-2.5 rounded-xl font-medium flex items-center gap-2 hover:bg-gray-800 transition-colors shadow-sm relative active:scale-95">
            <span>Cart</span>
            {cartCount > 0 && (
              <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full animate-bounce">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-5 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <span className="inline-block bg-gray-100 text-gray-800 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase">
            🔥 New Fashion Collection
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 leading-[1.15]">
            Upgrade Your Style <br />With <span className="underline decoration-wavy decoration-1">Skyo</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-md">
            Discover premium Panjabi, Shirts, T-Shirts and modern fashion products crafted for excellence.
          </p>
          <button className="bg-black text-white px-8 py-4 rounded-2xl text-base font-medium hover:bg-gray-800 transition-colors shadow-lg shadow-black/10 active:scale-98">
            Shop Collection
          </button>
        </div>

        <div className="relative group">
          <div className="absolute inset-0 bg-black/5 rounded-3xl group-hover:opacity-0 transition-opacity duration-300"></div>
          <img
            className="rounded-3xl shadow-2xl w-full object-cover aspect-[4/3] md:aspect-square"
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop"
            alt="Skyo Fashion Hero Showcase"
          />
        </div>
      </section>

      {/* Products Section */}
      <section className="bg-gray-50/70 py-20 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-5">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h3 className="text-3xl font-black text-gray-900 tracking-tight">
                Trending Products
              </h3>
              <p className="text-gray-500 text-sm mt-1">Our most loved styles this week</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col group"
              >
                <div className="overflow-hidden relative aspect-[3/4]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-5 flex flex-col flex-grow justify-between">
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 group-hover:text-gray-700 transition-colors">
                      {product.name}
                    </h4>
                    <p className="text-xl font-extrabold text-black mt-1.5">
                      {product.price}
                    </p>
                  </div>

                  <button 
                    onClick={handleAddToCart}
                    className="mt-5 w-full bg-black text-white py-3 rounded-xl font-medium hover:bg-gray-800 active:bg-black transition-colors"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white pt-16 pb-12 border-t border-gray-900">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid md:grid-cols-2 gap-10 items-start border-b border-gray-800 pb-12">
            
            {/* Brand Info */}
            <div>
              <h2 className="text-3xl font-black tracking-wider">SKYO FASHION</h2>
              <p className="text-gray-400 mt-3 text-sm max-w-sm leading-relaxed">
                Premium Fashion Brand In Bangladesh. Bringing you the trendiest and high-quality clothing at your doorstep.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-4 md:text-right">
              <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest">Contact Us</h4>
              <div className="flex md:justify-end items-center gap-2 text-gray-300">
                <span className="text-sm">📧 {/* Email Icon */}</span>
                <a href="mailto:umaerhasansayef@gmail.com" className="hover:text-white transition-colors text-base font-medium">
                  umaerhasansayef@gmail.com
                </a>
              </div>
              <div className="flex md:justify-end items-center gap-2 text-gray-300">
                <span className="text-sm">📞 {/* Phone Icon */}</span>
                <a href="tel:01601193696" className="hover:text-white transition-colors text-base font-medium">
                  01601193696
                </a>
              </div>
            </div>

          </div>

          <div className="pt-8 text-center text-xs text-gray-500">
            <p>&copy; {new Date().getFullYear()} SKYO FASHION. All rights reserved.</p>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;

