import React from 'react';
import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-container">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you! Get in touch with us using the form below.</p>
        <div className="contact-info">
          <div className="info-item">
            <strong>Email:</strong> support@loanapp.com
          </div>
          <div className="info-item">
            <strong>Phone:</strong> +1 (555) 123-4567
          </div>
          <div className="info-item">
            <strong>Hours:</strong> Mon-Fri 9am - 6pm EST
          </div>
        </div>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>

  )
}