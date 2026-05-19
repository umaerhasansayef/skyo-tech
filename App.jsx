export default function App() {
  const products = [
    { name: 'Gaming Headphone', price: '৳2499' },
    { name: 'Smart Watch', price: '৳3999' },
    { name: 'RGB Keyboard', price: '৳1999' },
    { name: 'Wireless Mouse', price: '৳1299' }
  ]

  return (
    <div className="min-h-screen bg-white text-black">
      <header className="border-b">
        <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">SKYO TECH</h1>
            <p className="text-gray-500">Modern Online Tech Shop</p>
          </div>
          <button className="bg-black text-white px-5 py-2 rounded-xl">
            Cart
          </button>
        </div>
      </header>

      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-5xl font-black leading-tight">
            Premium Gadgets & Electronics
          </h2>
          <p className="mt-6 text-gray-600 text-lg">
            Welcome to SKYO TECH online shop.
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
          <h3 className="text-3xl font-bold mb-10">Trending Products</h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-3xl p-6 shadow-lg">
                <div className="h-40 bg-gray-200 rounded-2xl"></div>
                <h4 className="text-xl font-bold mt-5">{product.name}</h4>
                <p className="text-blue-600 font-bold mt-2">{product.price}</p>

                <button className="mt-5 w-full bg-black text-white py-3 rounded-xl">
                  Add To Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
