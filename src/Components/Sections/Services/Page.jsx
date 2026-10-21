import React from "react";
import "./Page.css";

const skillsData = [
  {
    id: "01",
    title: "Web Design & Development",
    description:
      "At WebGaze, we design and build websites that work for your business. Every site is carefully designed and built to help your brand stand out, perform well online, and connect with the right audience.",
  },
  {
    id: "02",
    title: "AI & Custom Business Systems",
    description:
      "We build custom tools, internal apps, automations, and AI-assisted systems that solve real business problems — from tracking work to managing learning, chats, records, and daily operations.",
  },
  {
    id: "03",
    title: "Visual Branding",
    description:
      "Visual branding is how people recognise your brand. We create cohesive brand visuals — from logos to colour systems — that help your business stand out, stay consistent, and connect with the right audience..",
  },
  {
    id: "04",
    title: "Website Maintenance",
    description:
      "Every website needs ongoing maintenance to stay secure, fast, and up to date. Regular care helps prevent issues and ensures a smooth experience for your users.",
  },
  {
    id: "05",
    title: "Search Engine Optimisation",
    description:
      "A strong SEO strategy helps your website get found by the right people. We optimise your site to improve visibility, attract relevant traffic, and support a smooth user experience.",
  },
  {
    id: "06",
    title: "Consulting & Audit",
    description:
      "Our website consultation and audit services help you understand what's working and what needs improvement. We review your site's performance, security, design, and SEO.",
  },
];

export default function Services() {
  return (
    <section data-theme="light" className="split-skills-section">
      <div className="trusted-section">
        <div className="trusted-container">
          {/* Left/Top Text */}
          <div className="trusted-title-box">
            <h3>
              TRUSTED BY
              <br />
              ORGANISATIONS
              <br />
              ACROSS AUSTRALIA
            </h3>
          </div>

          {/* Right/Bottom Infinite Scrolling Brands */}
          <div className="brands-ticker-wrapper">
            <div className="brands-track">
              {/* First set of brands */}
              <div className="brand-slide">
                <span className="brand-item">AGCCI</span>
                <span className="brand-item">Salaka</span>
                <span className="brand-item">ViRIDE</span>
                <span className="brand-item">CAMDEN</span>
                <span className="brand-item">CARE PARTNERS</span>
              </div>
              {/* Duplicate set for seamless infinite loop effect */}
              <div className="brand-slide" aria-hidden="true">
                <span className="brand-item">AGCCI</span>
                <span className="brand-item">Salaka</span>
                <span className="brand-item">ViRIDE</span>
                <span className="brand-item">CAMDEN</span>
                <span className="brand-item">CARE PARTNERS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="split-container">
        {/* LEFT SIDE: Text that stays sticky on desktop */}
        <div className="split-left">
          <div className="sticky-text-wrapper">
            <h2 className="skills-title">
              Everything you need to build a strong online presence.
            </h2>
            <p className="skills-subtitle">
              From strategy and design to optimisation and ongoing support, our
              services work together to help your business grow online — with
              clarity and confidence at every step
            </p>
          </div>
        </div>

        {/* RIGHT SIDE: Cards that stack on top of each other */}
        <div className="split-right">
          <div className="cards-stack-wrapper">
            {skillsData.map((skill, index) => (
              <div
                key={skill.id}
                className="sticky-card"
                style={{ top: `${100 + index * 24}px ` }} // Staggered offsets for the deck effect
              >
                <div className="card-top">
                  <span className="card-number">{skill.id}</span>
                  <span className="card-tag">{skill.tag}</span>
                </div>
                <div className="card-content">
                  <h3>{skill.title}</h3>
                  <p>{skill.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
