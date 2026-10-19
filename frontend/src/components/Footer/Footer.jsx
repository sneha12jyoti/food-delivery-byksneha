import React from "react";
import "./Footer.css";
import { assets } from "../../assets/frontend_assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
            Welcome to our Food Delivery App — your one-stop destination for ordering delicious meals quickly and conveniently. Our platform is designed to make food ordering simple, fast, and enjoyable for everyone.

With our app, users can explore a wide variety of restaurants and dishes, browse menus with prices and images, add items to the cart, and place orders seamlessly. We focus on providing a smooth user experience with an easy-to-use interface, secure ordering, and quick access to favorite meals.

Our goal is to connect food lovers with their favorite restaurants from the comfort of their homes. Whether you’re craving fast food, traditional meals, desserts, or beverages, our app helps you discover and order food with just a few clicks.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>Get in touch</h2>
          <ul>
            <li>+919668508703</li>
            <li>ksnehatomato0212@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2026 @Tomatoksneha.com - All Right Reserved.
        Made with &hearts; by K SNEHA
      </p>
    </div>
  );
};

export default Footer;
