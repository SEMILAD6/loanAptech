import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h2>LoanAptech</h2>
            <p>Your trusted partner for fast, transparent, and affordable loan solutions</p>
          </div>
          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </div>
          <div className="footer-links">
            <h3>Support</h3>
            <ul>
             <li><a href="/Contact">Contact Us</a></li>
             <li><a href="/faq">FAQ</a></li>
             <li><a href="/terms">Terms of Service</a></li>
             <li><a href="/privacy">Privacy Policy</a></li>
            </ul>
          </div>
          <div className="footer-contact">
            <h3>Get in Touch</h3>
              <p>support@loanaptech.com<br/>
              +1 (123) 456-7890<br/>
              Mon-Fri: 9:00 AM - 6:00 PM EST</p>
          </div>
        </div>
     </div>
     <div className="footer-bottom">
        <p>Copyright © 2024 Loan Management System. All rights reserved.</p>
      </div>
    </div>
  );
}