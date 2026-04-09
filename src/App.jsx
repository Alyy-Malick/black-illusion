import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from '@/layouts/MainLayout';
import Home from '@/pages/Home';

// Placeholder Pages for future development
const Shop = () => <div className="section-padding-lg container-wide text-center"><h1>Shop</h1></div>;
const Collections = () => <div className="section-padding-lg container-wide text-center"><h1>Collections</h1></div>;
const ProductDetails = () => <div className="section-padding-lg container-wide text-center"><h1>Product Details</h1></div>;
const Cart = () => <div className="section-padding-lg container-wide text-center"><h1>Cart</h1></div>;
const Wishlist = () => <div className="section-padding-lg container-wide text-center"><h1>Wishlist</h1></div>;
const About = () => <div className="section-padding-lg container-wide text-center"><h1>About</h1></div>;
const Contact = () => <div className="section-padding-lg container-wide text-center"><h1>Contact</h1></div>;

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="collections" element={<Collections />} />
          <Route path="product/:id" element={<ProductDetails />} />
          <Route path="cart" element={<Cart />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<div className="section-padding-lg container-wide text-center uppercase tracking-widest">404 - Page Not Found</div>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
