import React from 'react';
import './footer.css'; // Import footer-specific CSS file

const Footer = () => {
  return (

<footer className="footer">
  <div className="row-icons s" style={{ display: 'flex', justifyContent: 'center' }}>
    <a href="https://www.facebook.com/kanishk.verma.92123/" className="icon-link"><i className="fa fa-facebook"></i></a>
    <a href="https://www.instagram.com/yogeshwar__verma/" className="icon-link"><i className="fa fa-instagram"></i></a>
    <a href="#" className="icon-link"><i className="fa fa-youtube"></i></a>
    <a href="https://x.com/Yogeshw60051820?t=nb4-QLhqaHN64y3u9S-q0w&s=09" className="icon-link"><i className="fa fa-twitter"></i></a>
  </div>

  <div className="row mm">
    <ul className="footer-links">
      <li><a href="/contact">Contact us</a></li>
      <li><a href="/service">Our Services</a></li>
      <li><a href="#">Privacy Policy</a></li>
      <li><a href="#">Terms & Conditions</a></li>
    
    </ul>
  </div>

  <div className="row-man" style={{ fontSize: '1.2rem' }}>
    CricInsight Copyright © 2024 - All rights reserved || Designed By: Yogeshwar Verma 
  </div>
</footer>

  );
};

export default Footer;
