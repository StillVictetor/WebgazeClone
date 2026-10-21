import React from "react";
import { Link } from "react-router-dom";
import "./aboutHero.css";

export default function AboutHero() {
  return (
    <section data-theme="dark" className="about-hero-section">
      <div className="about-hero-container">
        {/* Left Side Header */}
        <div className="about-hero-left">
          <span className="about-hero-badge">ABOUT WEBGAZE</span>
          <h1 className="about-hero-title">
            We make good <br />
            businesses <br />
            impossible to ignore.
          </h1>
          <p className="about-hero-desc">
            A Sydney web design, branding, and SEO studio. We build custom sites
            that load fast, look credible, and turn visitors into enquiries.
          </p>
        </div>

        {/* Right Side Action Buttons */}
        <div className="about-hero-right">
          <Link to="/proposal" className="btn-hero-primary">
            REQUEST A PROPOSAL &rarr;
          </Link>
          <Link to="/projects" className="btn-hero-secondary">
            VIEW PROJECTS &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
