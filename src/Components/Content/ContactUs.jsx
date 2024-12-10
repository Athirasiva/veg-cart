import React from "react";

function ContactUs() {
  return (
    <div className="contact-info-container">
      <h2>Contact Us</h2>
      <div className="contact-details">
        <div className="contact-item">
          <h3>Our Address</h3>
          <p>Eat Veg Store, 123 ABC Street, Fresh City, FL 12345</p>
        </div>
        <div className="contact-item">
          <h3>Call Us</h3>
          <p>+91 123-4567</p>
        </div>
        <div className="contact-item"> 
          <h3>Email Us</h3>
          <p>support@vegetablestore.com</p>
        </div>
      </div>

      <div className="map-container">
        <h3>Visit Us on the Map</h3>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62862.14306986714!2d76.27092132233858!3d10.026435083023266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080da53444d5e9%3A0xb46c57c6b1bc9aff!2sEdappally%2C%20Kochi%2C%20Kerala!5e0!3m2!1sen!2sin!4v1733841721593!5m2!1sen!2sin"
          width="600"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="Eat Veg Store"
        ></iframe>
      </div>
    </div>
  );
}

export default ContactUs;
