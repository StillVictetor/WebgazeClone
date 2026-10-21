import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

export default function Footer() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription logic here
  };

  return (
    <footer data-theme="dark" className="footer-section">
      <div className="footer-container">
        {/* --- TOP CTA BANNER --- */}
        <div className="footer-cta-banner">
          <div className="footer-cta-text">
            <span className="footer-cta-sub">
              NO PRESSURE. JUST NEXT STEPS.
            </span>
            <h2 className="footer-cta-title">
              Let's build something that <br className="desktop-br" />
              <span className="footer-cta-highlight">earns its keep</span>.
            </h2>
          </div>
          <div className="footer-cta-buttons">
            <Link to="/proposal" className="btn-footer-primary">
              REQUEST A PROPOSAL &rarr;
            </Link>
            <Link to="/book-call" className="btn-footer-secondary">
              BOOK DISCOVERY CALL &rarr;
            </Link>
          </div>
        </div>

        {/* --- MAIN FOOTER CONTENT GRID --- */}
        <div className="footer-main-grid">
          {/* Column 1: Brand Info & Socials */}
          <div className="footer-col brand-col">
            <div className="footer-logo">
              <span className="logo-dot-red">W</span>ebgaze
            </div>
            <p className="brand-description">
              Building high-performance websites, AI-assisted custom systems,
              and practical digital tools for growing businesses.
            </p>
            <div className="social-links">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="social-icon-btn"
                aria-label="LinkedIn"
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="social-icon-btn"
                aria-label="Instagram"
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                className="social-icon-btn"
                aria-label="X"
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Services */}
          <div className="footer-col">
            <h4 className="footer-col-title">SERVICES</h4>
            <ul className="footer-links-list">
              <li>
                <Link to="/services/web-design">
                  Website Design & Development
                </Link>
              </li>
              <li>
                <Link to="/services/ai-systems">
                  AI & Custom Business Systems
                </Link>
              </li>
              <li>
                <Link to="/services/maintenance">Website Maintenance</Link>
              </li>
              <li>
                <Link to="/services/seo">Search Engine Optimisation</Link>
              </li>
              <li>
                <Link to="/services/branding">Visual Branding</Link>
              </li>
              <li>
                <Link to="/services/consulting">Consulting & Audit</Link>
              </li>
            </ul>
          </div>
          {/* Column 3: Company */}
          <div className="footer-col">
            <h4 className="footer-col-title">COMPANY</h4>
            <ul className="footer-links-list">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/projects">Projects</Link>
              </li>
              <li>
                <Link to="/insights">Insights</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Newsletter */}
          <div className="footer-col">
            <h4 className="footer-col-title">GET IN TOUCH</h4>
            <div className="contact-details">
              <a href="tel:0422169233" className="contact-item">
                0422 169 233
              </a>
              <a href="mailto:hello@webgaze.com.au" className="contact-item">
                hello@webgaze.com.au
              </a>
            </div>

            <h4 className="footer-col-title newsletter-heading">NEWSLETTER</h4>
            <form onSubmit={handleSubmit} className="newsletter-form">
              <input
                type="email"
                placeholder="Your email"
                required
                className="newsletter-input"
              />
              <button
                type="submit"
                className="newsletter-btn"
                aria-label="Subscribe"
              >
                &rarr;
              </button>
            </form>
          </div>
        </div>

        {/* --- BOTTOM LEGAL BAR --- */}
        <div className="footer-bottom-bar">
          <p className="copyright-text">
            &copy; 2026 WebGaze PTY LTD. All rights reserved. ABN 53 694 048 158
          </p>
          <div className="legal-links">
            <Link to="/terms">Terms & Conditions</Link>
            <Link to="/privacy">Privacy & Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
