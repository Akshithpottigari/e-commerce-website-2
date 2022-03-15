import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-part-1">
        <div className="brandName">Brand</div>
        <div className="footer-input-wrapper">
          <input
            type="text"
            className="footer-signup-input"
            placeholder="Enter Email Address"
          ></input>
          <button className="footer-signup-btn">Sign Up</button>
        </div>
        <div className="footer-description">
          Address
        </div>
      </div>
      {/* Categories */}
      <div className="footer-part-2">
        <div className="footer-heading">Catergories</div>
        <Link to="/electronics" className="footer-description">
          Electronics
        </Link>
        <Link to="/jewelery" className="footer-description">
          Jewelery
        </Link>
        <Link to="/mensclothing" className="footer-description">
          Men's Clothing
        </Link>
        <Link to="/womensclothing" className="footer-description">
          Women's Clothing
        </Link>
      </div>
      {/* Customer Care */}
      <div className="footer-part-2">
        <div className="footer-heading">Customer Care</div>
        <div className="footer-description">My Account</div>
        <div className="footer-description">Discounts</div>
        <div className="footer-description">Returns</div>
        <div className="footer-description">Order History</div>
        <div className="footer-description">Order Tracking</div>
      </div>
      {/* Pages */}
      <div className="footer-part-2">
        <div className="footer-heading">Pages</div>
        <Link to="/blog" className="footer-description">
          Blog
        </Link>
        <Link to="/" className="footer-description">
          Browse the Shop
        </Link>
        <Link to="/aboutus" className="footer-description">
          About Us
        </Link>
        <Link to="/contactus" className="footer-description">
          Contact Us
        </Link>
        <Link to="/faq" className="footer-description">
          FAQ
        </Link>
      </div>
    </div>
  );
}
