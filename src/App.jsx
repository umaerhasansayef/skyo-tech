export default function App() {
  const products = [
    {
      name: "Skyo Start T Shirt",
      price: "৳500",
    },
    {
      name: "Arabian Panjabi",
      price: "৳999",
    },
    {
      name: "Turkish Hijab",
      price: "৳199",
    },
    {
      name: "Iconic Shoes",
      price: "৳1299",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      <header className="border-b sticky top-0 bg-white">
        <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">SKYO FASHION</h1>
            <p className="text-gray-500 text-sm">
              Premium Online Fashion Shop
            </p>
          </div>

          <button className="bg-black text-white px-5 py-2 rounded-xl">
            Cart
          </button>
        </div>
      </header>

      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm">
            Modern Electronics
          </span>

          <h2 className="text-5xl font-black leading-tight mt-6">
            Upgrade Your Tech Lifestyle
          </h2>

          <p className="mt-6 text-gray-600 text-lg">
            Discover premium gadgets, gaming accessories and smart electronics.
          </p>

          <button className="mt-8 bg-blue-600 text-white px-8 py-4 rounded-2xl">
            Shop Now
          </button>
        </div>

        <img
          className="rounded-3xl shadow-2xl"
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop"
        />
      </section>

      <section className="bg-gray-100 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-bold mb-10">
            Trending Products
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-6 shadow-lg"
              >
                <div className="h-40 bg-gray-200 rounded-2xl"></div>

                <h4 className="text-xl font-bold mt-5">
                  {product.name}
                </h4>

                <p className="text-blue-600 font-bold mt-2">
                  {product.price}
                </p>

                <button className="mt-5 w-full bg-black text-white py-3 rounded-xl">
                  Add To Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-black text-white py-10 mt-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold">SKYO TECH</h3>

          <p className="text-gray-400 mt-3">
            Premium Electronics & Gadgets Store
          </p>
        </div>
      </footer>
    </div>
  );
}
