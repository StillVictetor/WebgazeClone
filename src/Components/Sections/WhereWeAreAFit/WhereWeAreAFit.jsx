import React from "react";
import "./whereWeAreAFit.css";

const fitPoints = [
  "Your current site no longer reflects the quality of the business.",
  "Customers keep asking questions the website should already answer.",
  "The brand feels inconsistent across web, proposals, and social.",
  "You want better visibility in search, without turning the site into keyword soup.",
];

export default function WhenWereAFit() {
  return (
    <section data-theme="light" className="when-fit-section">
      <div className="when-fit-container">
        {/* Left Side Title */}
        <div className="when-fit-left">
          <span className="when-fit-subtag">
            <span className="when-fit-line"></span> WHEN WE'RE A FIT
          </span>
          <h2 className="when-fit-title">
            The business is good. <br />
            The website just isn't saying so yet.
          </h2>
        </div>

        {/* Right Side Content List */}
        <div className="when-fit-right">
          <p className="fit-lead-text">
            We work best with established teams that need clearer positioning, a
            stronger website, better SEO foundations, and a partner who keeps
            the site useful after launch. A few signs it might be time:
          </p>

          <div className="fit-points-list">
            {fitPoints.map((point, index) => (
              <div key={index} className="fit-point-item">
                <span className="fit-red-dot">&bull;</span>
                <p className="fit-point-text">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
