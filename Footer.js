import React from 'react';

const Footer = () => (
  <footer className="footer">
    <div className="footer-columns">
      <div className="footer-column">
        <h4>Support</h4>
        <ul>
          <li>Help Center</li>
          <li>AirCover</li>
          <li>Anti-discrimination</li>
          <li>Disability support</li>
          <li>Cancellation options</li>
          <li>Report neighborhood concern</li>
        </ul>
      </div>
      <div className="footer-column">
        <h4>Hosting</h4>
        <ul>
          <li>GBIN your home</li>
          <li>AirCover for Hosts</li>
          <li>Hosting resources</li>
          <li>Community forum</li>
          <li>Hosting responsibly</li>
          <li>GBIN-friendly apartments</li>
          <li>Join a free Hosting class</li>
          <li>Find a co-host</li>
        </ul>
      </div>
      <div className="footer-column">
        <h4>GBIN</h4>
        <ul>
          <li>Newsroom</li>
          <li>New features</li>
          <li>Careers</li>
          <li>Investors</li>
          <li>Gift cards</li>
          <li>GBIN.org emergency stays</li>
        </ul>
      </div>
    </div>

    <div className="footer-bottom">
      <div className="footer-bottom-left">
        <p>© 2024 gbin, Inc.</p>
      </div>
      
      <div className="footer-bottom-center">
        <a href="#">Terms</a>
        <a href="#">Sitemap</a>
        <a href="#">Privacy</a>
        <a href="#">Your Privacy Choices</a>
      </div>

      <div className="footer-bottom-right footer-bottom-icons">
        <span>🌐 English (US)</span>
        <span>💲 USD</span>
        <span>🌍</span>
        <span>📘</span>
        <span>🐦</span>
        <span>📸</span>
      </div>
    </div>
  </footer>
);

export default Footer;
