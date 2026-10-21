import React from "react";
import "./whatWeDo.css";

const disciplines = [
  {
    num: "01",
    title: "Website design & development",
    text: "Custom websites for Australian businesses that need credibility, speed, a clear conversion path, and structure search engines can understand.",
  },
  {
    num: "02",
    title: "Visual branding",
    text: "Logos, brand identities, and visual systems that make your business feel consistent across web, social, proposals, and signage.",
  },
  {
    num: "03",
    title: "Search engine optimisation",
    text: "SEO strategy, technical foundations, and content structure designed to help the right customers actually find you.",
  },
  {
    num: "04",
    title: "Maintenance & digital care",
    text: "Updates, security, backups, and practical support so your website keeps working long after launch day.",
  },
];

export default function WhatWeDo() {
  return (
    <section data-theme="light" className="what-we-do-section">
      <div className="wwd-container">
        {/* Left Header */}
        <div className="wwd-left">
          <span className="wwd-subtag">
            <span className="wwd-red-line"></span> WHAT WE DO
          </span>
          <h2 className="wwd-title">One studio. Four connected disciplines.</h2>
          <p className="wwd-desc">
            Because they live under one roof, your website, brand, and search
            presence all pull in the same direction.
          </p>
        </div>

        {/* Right Disciplines List */}
        <div className="wwd-right-list">
          {disciplines.map((item) => (
            <div key={item.num} className="wwd-list-item">
              <span className="item-num">{item.num}</span>
              <div className="item-content">
                <h3 className="item-title">{item.title}</h3>
                <p className="item-text">{item.text}</p>
              </div>
              <span className="item-arrow">&rarr;</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
