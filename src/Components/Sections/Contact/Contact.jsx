import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <section data-theme="light" className="contact-section">
      <div data-theme="dark" className="insights-hero-banner">
        <div className="insights-hero-container">
          <Link to="/" className="hero-back-arrow" aria-label="Go back">
            &larr;
          </Link>
          <h1 className="insights-hero-title">Get in Touch</h1>
        </div>
      </div>
      <div className="contact-container">
        {/* --- LEFT COLUMN: INFO & CTA BANNER --- */}
        <div className="contact-left">
          <h1 className="contact-title">
            Let's build something{" "}
            <span className="highlight-red">worth looking at.</span>
          </h1>

          <p className="contact-subtitle">
            Have a quick question or want to speak with us first? Drop a short
            message and a real person will get back to you — usually within one
            business day.
          </p>

          {/* Contact Cards */}
          <div className="contact-info-cards">
            {/* Call Us */}
            <a href="tel:+61422169233" className="info-card">
              <div className="icon-circle">
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
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <div className="info-text">
                <span className="info-label">CALL US</span>
                <strong className="info-detail">+61 422 169 233</strong>
              </div>
            </a>

            {/* Email Us */}
            <a href="mailto:hello@webgaze.com.au" className="info-card">
              <div className="icon-circle">
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
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div className="info-text">
                <span className="info-label">EMAIL US</span>
                <strong className="info-detail">hello@webgaze.com.au</strong>
              </div>
            </a>

            {/* Based In */}
            <div className="info-card">
              <div className="icon-circle">
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
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <div className="info-text">
                <span className="info-label">BASED IN</span>
                <strong className="info-detail">Sydney, NSW</strong>
              </div>
            </div>
          </div>

          {/* Red Quote CTA Box */}
          <div className="proposal-cta-box">
            <h3 className="proposal-box-title">
              Need a scoped quote with pricing?
            </h3>
            <p className="proposal-box-text">
              Use our proposal builder for project scopes, budgets and a
              tailored plan.
            </p>
            <Link to="/proposal" className="btn-proposal-pill">
              Request a Proposal &rarr;
            </Link>
          </div>
        </div>
        {/* --- RIGHT COLUMN: CONTACT FORM --- */}
        <div className="contact-right">
          <div className="form-card">
            <h2 className="form-title">Send a message</h2>
            <p className="form-subtitle">Fields marked * are required.</p>

            <form onSubmit={handleSubmit} className="contact-form">
              {/* First & Last Name Row */}
              <div className="form-row">
                <div className="input-group">
                  <label htmlFor="firstName">FIRST NAME *</label>
                  <div className="input-with-icon">
                    <span className="input-icon">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                    </span>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      placeholder="Reuben"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="input-group">
                  <label htmlFor="lastName">LAST NAME</label>
                  <div className="input-with-icon">
                    <span className="input-icon">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                    </span>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      placeholder="Smith"
                      value={formData.lastName}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              {/* Email Input */}
              <div className="input-group">
                <label htmlFor="email">EMAIL *</label>
                <div className="input-with-icon">
                  <span className="input-icon">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </span>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="hello@company.com.au"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* Phone Input */}
              <div className="input-group">
                <label htmlFor="phone">PHONE NUMBER</label>
                <div className="input-with-icon">
                  <span className="input-icon">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </span>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="+61 4XX XXX XXX"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Message Textarea */}
              <div className="input-group">
                <label htmlFor="message">MESSAGE *</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="How can we help?"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <button type="submit" className="btn-send-message">
                SEND MESSAGE &rarr;
              </button>

              <p className="form-footer-note">
                We typically reply within one business day. No spam, ever.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
