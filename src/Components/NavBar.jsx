// Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "./CartContext";
import "./Navbar.css";

const Navbar = () => {
  const { cartItems } = useCart();
  const count = cartItems.reduce((s, i) => s + (i.qty || 1), 0);

  return (
    <nav className="app-nav">
      <div className="nav-inner">
        <Link to="/" className="logo">RecipeFinder</Link>
        <div className="nav-right">
          <Link to="/cart" className="cart-btn">
            🛒 Cart <span className="cart-count">{count}</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
