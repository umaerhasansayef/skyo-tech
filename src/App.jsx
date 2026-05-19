
import React from 'react';
import './App.css'; // Apnar CSS file

function App() {
  return (
    <div className="App">
      {/* Header/Navbar */}
      <nav className="navbar">
        <div className="logo">SKYO FASHION</div>
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">New Arrivals</a></li>
          <li><a href="#">Panjabi</a></li>
          <li><a href="#">Shirts</a></li>
          <li><a href="#">Pants</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <h1>Welcome to SKYO FASHION</h1>
        <p>Style meets comfort.</p>
      </header>

      {/* Product Section */}
      <main className="product-section">
        <h2>Latest Collection</h2>
        <div className="product-grid">
          {/* Example Product */}
          <div className="product-card">
            <h3>Premium Panjabi</h3>
            <p>Price: ৳2,500</p>
            <button>Buy Now</button>
          </div>
          {/* Apni ekhane aro product add korte parben */}
        </div>
      </main>
    </div>
  );
}

export default App;
