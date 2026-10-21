import React from "react";
import "./neverCutCorner.css";

const cornerItems = [
  {
    num: "01",
    title: "Strategy before pixels",
    text: "We get clear on your offer, audience, and goals before any design decisions are made. The prettiest site fails if it says the wrong thing.",
  },
  {
    num: "02",
    title: "Design that earns trust",
    text: "Clean, fast, and consistent. We make your business feel established without sacrificing readability, accessibility, or load speed.",
  },
  {
    num: "03",
    title: "Built to be found",
    text: "Search thinking lives inside the architecture, not bolted on later. The right people should be able to discover you and understand you quickly.",
  },
  {
    num: "04",
    title: "We don't disappear",
    text: "Launch is the start, not the finish. We stick around for updates, fixes, and changes so your site stays useful as the business grows.",
  },
];

export default function NeverCutCorners() {
  return (
    <section data-theme="dark" className="corners-section">
      <div className="corners-container">
        {/* Header */}
        <div className="corners-header">
          <span className="corners-subtag">
            <span className="corners-line"></span> HOW WE WORK
          </span>
          <h2 className="corners-title">
            Four things we never cut <br />
            corners on.
          </h2>
        </div>

        {/* Outline Box Grid */}
        <div className="corners-box-grid">
          {cornerItems.map((item) => (
            <div key={item.num} className="corner-card">
              <div className="corner-card-header">
                <span className="corner-num">{item.num}</span>
                <h3 className="corner-card-title">{item.title}</h3>
              </div>
              <p className="corner-card-text">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
