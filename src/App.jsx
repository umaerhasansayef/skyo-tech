import React from "react";
import logo from './assets/logo.png'
function App() {

  const products = [
    {
      name: "Premium Panjabi",
      price: "৳2490",
      image:   
         "https://images.unsplash.com/photo-1593032465171-8bd6d6bdfb40?q=80&w=1200&auto=format&fit=crop",
    },

    {
      name: "Stylish Shirt",
      price: "৳1890",
      image:
        "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=1200&auto=format&fit=crop",
    },

    {
      name: "Modern T-Shirt",
      price: "৳990",
      image:
        "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1200&auto=format&fit=crop",
    },

    {
      name: "Luxury Hoodie",
      price: "৳2990",
      image:
        "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-black">

      {/* Navbar */}

      <header className="sticky top-0 bg-white border-b z-50">
        <div className="max-w-7xl mx-auto px-5 py-4 flex justify-between items-center">
<div className="flex items-center gap-3">
  <img
    src={logo}
    alt="logo"
    className="w-12 h-12 rounded-full"
  />

  <div>
    <h1 className="text-3xl font-bold">
      SKYO FASHION
    </h1>

    <p className="text-gray-500 text-sm">
      Premium Fashion Store
    </p>
  </div>
</div>
          

          <div className="flex gap-3">

            <button className="bg-black text-white px-5 py-2 rounded-xl">
              Cart
            </button>

          </div>
        </div>
      </header>

      {/* Hero Section */}

      <section className="max-w-7xl mx-auto px-5 py-14 grid md:grid-cols-2 gap-10 items-center">

        <div>

          <span className="bg-gray-200 px-4 py-2 rounded-full text-sm">
            New Fashion Collection
          </span>

          <h2 className="text-5xl font-bold mt-6 leading-tight">
            Upgrade Your Style With SKYO
          </h2>

          <p className="text-gray-600 mt-6 text-lg">
            Discover premium Panjabi, Shirts,
            T-Shirts and modern fashion products.
          </p>

          <button className="mt-8 bg-black text-white px-8 py-4 rounded-2xl text-lg">
            Shop Now
          </button>

        </div>

        <img
          className="rounded-3xl shadow-2xl"
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop"
        />

      </section>

      {/* Products */}

      <section className="bg-gray-100 py-16">

        <div className="max-w-7xl mx-auto px-5">

          <h3 className="text-4xl font-bold mb-10">
            Trending Products
          </h3>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">

            {products.map((product, index) => (

              <div
                key={index}
                className="bg-white rounded-3xl overflow-hidden shadow-lg"
              >

                <img
                  src={product.image}
                  className="h-52 w-full object-cover"
                />

                <div className="p-4">

                  <h4 className="text-xl font-bold">
                    {product.name}
                  </h4>

                  <p className="text-black font-bold mt-2">
                    {product.price}
                  </p>

                  <button className="mt-4 w-full bg-black text-white py-3 rounded-xl">
                    Buy Now
                  </button>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* Footer */}

      <footer className="bg-black text-white py-10">

        <div className="max-w-7xl mx-auto px-5 text-center">

          <h2 className="text-3xl font-bold">
            SKYO FASHION
          </h2>

          <p className="text-gray-400 mt-3">
            Premium Fashion Brand In Bangladesh
          </p>

        </div>

      </footer>

    </div>
  );
}

export default App;
