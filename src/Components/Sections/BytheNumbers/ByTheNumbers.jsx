import React from "react";
import "./byTheNumbers.css";

const stats = [
  {
    value: "50+",
    title: "Projects delivered",
    subtitle: "Websites, brands & systems",
  },
  {
    value: "9",
    title: "Industries served",
    subtitle: "Care, energy, trade & more",
  },
  {
    value: "6+",
    title: "Years of craft",
    subtitle: "Sydney-based, Australia-wide",
  },
  {
    value: "100%",
    title: "Custom built",
    subtitle: "No templates, ever",
  },
];

export default function ByTheNumbers() {
  return (
    <section data-theme="dark" className="numbers-section">
      <div className="numbers-container">
        {/* Header Tag */}
        <div className="numbers-header">
          <span className="numbers-subtag">
            <span className="numbers-line"></span> BY THE NUMBERS
          </span>
        </div>

        {/* 4-Column Grid */}
        <div className="numbers-grid">
          {stats.map((stat, idx) => (
            <div key={idx} className="number-stat-col">
              <strong className="stat-value">{stat.value}</strong>
              <h4 className="stat-title">{stat.title}</h4>
              <p className="stat-subtitle">{stat.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
