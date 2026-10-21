import React from "react";
import "./whyWeExist.css";

const topInfoBar = [
  { label: "BASED IN", value: "Sydney, NSW" },
  { label: "WORKING", value: "Australia-wide" },
  { label: "EXPERIENCE", value: "6+ years" },
  { label: "PROJECTS", value: "50+ delivered" },
];

export default function WhyWeExist() {
  return (
    <section data-theme="light" className="why-exist-section">
      <div className="why-exist-container">
        {/* Top Info Bar Grid */}
        <div className="top-info-bar">
          {topInfoBar.map((item, idx) => (
            <div key={idx} className="info-bar-col">
              <span className="info-label">{item.label}</span>
              <strong className="info-value">{item.value}</strong>
            </div>
          ))}
        </div>

        {/* Main Section Content */}
        <div className="why-exist-content">
          <div className="why-exist-left">
            <span className="why-tag">
              <span className="why-red-line"></span> WHY WE EXIST
            </span>
            <h2 className="why-title">
              Most people judge your business before they ever speak to you.
            </h2>
            <p className="why-lead-text">
              They find you online, scan for a few seconds, and decide whether
              you're worth their time. A slow, confusing, or dated website
              quietly loses good customers every day.
            </p>
          </div>

          <div className="why-exist-right">
            <p className="why-detail-text">
              We started WebGaze to fix that gap. Plenty of Australian
              businesses are excellent at what they do, but their website
              doesn't show it. Our job is to close the distance between how good
              the business really is and how it comes across online, with
              clearer structure, stronger branding, faster pages, and content
              the right people can actually find.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
