import React, { useState, useEffect } from "react";
import { ChevronDown, Menu, X, ArrowLeft, Mail, Phone } from "lucide-react";
import {
  Monitor,
  ChartLine,
  Search,
  Lightbulb,
  Settings,
  Eye,
} from "lucide-react";
import "./Page.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isScrolledToWhite, setIsScrolledToWhite] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesSubmenu, setMobileServicesSubmenu] = useState(false);

  // Dynamic background detection on scroll
  useEffect(() => {
    // Select all sections that have a data-theme attribute
    const sections = document.querySelectorAll("[data-theme]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // When a section hits the top of the screen where the navbar is
          if (entry.isIntersecting) {
            const theme = entry.target.getAttribute("data-theme");
            // If the current section is 'light', set isScrolledToWhite to true, else false
            setIsScrolledToWhite(theme === "light");
          }
        });
      },
      {
        // Triggers right when the section reaches the top 80px of the screen (where your fixed navbar sits)
        rootMargin: "-80px 0px 0px 0px",
        threshold: 0,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const dropdownMenu = [
    {
      id: 1,
      icon: <Monitor size={15} />,
      title: "Website Design & Development",
      description: "Custom, high-performance websites built to convert",
      link: "/services/web-design-development",
    },
    {
      id: 2,
      icon: <Lightbulb size={15} />,
      title: "AI & Custom Business Systems",
      description: "Custom apps, automations & AI-assisted tools",
      link: "/services/ai-custom-business-systems",
    },
    {
      id: 3,
      icon: <Eye size={15} />,
      title: "Visual Branding",
      description: "Cohesive brand identities that make you unmistakable",
      link: "/services/visual-branding",
    },
    {
      id: 4,
      icon: <Settings size={15} />,
      title: "Website Maintenance",
      description: "Keep your site secure, fast, & up to date.",
      link: "/services/website-maintenance",
    },
    {
      id: 5,
      icon: <Search size={15} />,
      title: "Search Engine Optimization",
      description: "Get found by the right people and audience.",
      link: "/services/search-engine-optimization",
    },
    {
      id: 6,
      icon: <ChartLine size={15} />,
      title: "Consulting & Audit",
      description: "Understand whats's working and what needs to be improved.",
      link: "/services/consulting-audit",
    },
  ];

  return (
    <>
      <header
        className={`navbar-header ${isScrolledToWhite ? "light-theme" : "dark-theme"}`}
      >
        {/* 1. Left: Logo */}
        <div className="navbar-logo">
          <a href="#" className="logo-text">
            <span className="logo-accent">w</span>ebgaze
          </a>
        </div>

        {/* 2. Center: Nav Links */}
        <nav
          className={`navbar-pill ${isScrolledToWhite ? "pill-light" : "pill-dark"}`}
        >
          <Link to="/" className="nav-link active">
            {" "}
            Home
          </Link>
          <Link to="/about" className="nav-link">
            About
          </Link>

          {/* Services Dropdown */}
          <div
            className="dropdown-container"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="nav-link dropdown-btn">
              Services{" "}
              <ChevronDown
                size={14}
                className={`chevron ${servicesOpen ? "rotate" : ""}`}
              />
            </button>

            {servicesOpen && (
              <div className="dropdown-menu">
                {dropdownMenu.map((item) => (
                  <Link to={item.link} key={item.id} className="dropdown-item">
                    <span>{item.icon}</span>
                    <div>
                      <h2>{item.title}</h2>
                      <p>{item.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/projects" className="nav-link">
            Projects
          </Link>
          <Link to="/insights" className="nav-link">
            Insights
          </Link>
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
        </nav>

        {/* 3. Right: Request Proposal CTA */}
        <div className="navbar-cta">
          <Link to="/proposal" className="btn-proposal">
            Request a Proposal
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="mobile-toggle"
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Open Menu"
        >
          <Menu size={26} />
        </button>
      </header>

      {/* Mobile Sidebar / Drawer Overlay */}
      {mobileMenuOpen && (
        <div
          className="drawer-overlay"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div className="drawer-content" onClick={(e) => e.stopPropagation()}>
            {/* Header inside Mobile Menu */}
            <div className="drawer-header">
              <span className="drawer-logo">
                <span className="logo-accent">w</span>ebgaze
              </span>
              <button
                className="btn-close"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setMobileServicesSubmenu(false);
                }}
              >
                <X size={20} />
              </button>
            </div>

            {/* Sliding Links Container */}
            <div className="drawer-body">
              {/* Primary Menu Links */}
              <div
                className={`drawer-panel ${mobileServicesSubmenu ? "panel-left" : "panel-active"}`}
              >
                <Link
                  to="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="mobile-link active"
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  onClick={() => setMobileMenuOpen(false)}
                  className="mobile-link"
                >
                  About
                </Link>

                {/* Trigger Sub-drawer */}
                <button
                  className="mobile-link mobile-dropdown-btn"
                  onClick={() => setMobileServicesSubmenu(true)}
                >
                  <span>Services</span>
                  <ChevronDown size={18} className="-rotate-90" />
                </button>

                <Link
                  to="/projects"
                  onClick={() => setMobileMenuOpen(false)}
                  className="mobile-link"
                >
                  Projects
                </Link>
                <Link
                  to="/insights"
                  onClick={() => setMobileMenuOpen(false)}
                  className="mobile-link"
                >
                  Insights
                </Link>
                <Link
                  to="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="mobile-link"
                >
                  Contact
                </Link>
              </div>

              {/* Nested Services Drawer */}
              <div
                className={`drawer-panel ${mobileServicesSubmenu ? "panel-active" : "panel-right"}`}
              >
                <button
                  className="back-btn"
                  onClick={() => setMobileServicesSubmenu(false)}
                >
                  <ArrowLeft size={16} /> Back to menu
                </button>
                <span className="submenu-title">Our Services</span>
                <a
                  href="#web-dev"
                  onClick={() => setMobileMenuOpen(false)}
                  className="mobile-sublink"
                >
                  Web Development
                </a>
                <a
                  href="#ui-ux"
                  onClick={() => setMobileMenuOpen(false)}
                  className="mobile-sublink"
                >
                  UI/UX Design
                </a>
                <a
                  href="#marketing"
                  onClick={() => setMobileMenuOpen(false)}
                  className="mobile-sublink"
                >
                  Digital Marketing
                </a>
                <a
                  href="#branding"
                  onClick={() => setMobileMenuOpen(false)}
                  className="mobile-sublink"
                >
                  Branding & Strategy
                </a>
              </div>
            </div>

            {/* Bottom Contact & Proposal Section */}
            <div className="drawer-footer">
              <a
                href="#proposal"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-proposal full-width"
              >
                Request a Proposal
              </a>

              <div className="contact-details">
                <a href="mailto:hello@webgaze.com" className="contact-item">
                  <Mail size={15} className="text-red" /> hello@webgaze.com
                </a>
                <a href="tel:+1234567890" className="contact-item">
                  <Phone size={15} className="text-red" /> +1 (234) 567-890
                </a>
              </div>

              <div className="social-icons">
                {/* Twitter / X */}
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  className="social-btn"
                  aria-label="Twitter"
                >
                  <svg
                    width="18"
                    height="18"
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

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="social-btn"
                  aria-label="LinkedIn"
                >
                  <svg
                    width="18"
                    height="18"
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

                {/* Instagram */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="social-btn"
                  aria-label="Instagram"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect
                      x="2"
                      y="2"
                      width="20"
                      height="20"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
