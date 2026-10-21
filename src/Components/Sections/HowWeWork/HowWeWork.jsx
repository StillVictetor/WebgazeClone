import React from "react";
import "./how-we-work.css";

const stepsData = [
  {
    number: "01",
    title: "Discovery & Understanding",
    subtitle: "We listen before we act.",
    text: "We get clear on your goals, your audience, and the context around the work — defining what success looks like before a single pixel moves.",
    pills: ["KICKOFF CALL", "GOALS", "RESEARCH"]
  },
  {
    number: "02",
    title: "Direction & Planning",
    subtitle: "We map the path forward.",
    text: "With the picture in place, we set scope, priorities, and the practical steps to move — keeping everything aligned, realistic, and built for results.",
    pills: ["SCOPE", "SITEMAP", "TIMELINE"]
  },
  {
    number: "03",
    title: "Development & Refinement",
    subtitle: "We build and iterate.",
    text: "Design, content, and systems are shaped through an iterative loop — focused on quality, consistency, and purpose at every stage.",
    pills: ["DESIGN", "BUILD", "FEEDBACK"]
  },
  {
    number: "04",
    title: "Delivery & Implementation",
    subtitle: "We launch with confidence.",
    text: "We bring it together, run final checks, and hand over a site that's complete and ready to perform — with support so nothing slips.",
    pills: ["QA", "LAUNCH", "HANDOVER"]
  }
];

export default function HowWeWork() {
  return (
    <section data-theme="dark" className="how-we-work-section">
      <div className="hww-container">
        
        {/* Section Header */}
        <div className="hww-header">
          <div className="hww-title-box">
            <span className="hww-tag">
              <span className="hww-line"></span> HOW WE WORK
            </span>
            <h2 className="hww-main-title">A process built for clarity, not chaos.</h2>
          </div>
          <p className="hww-description">
            From the first conversation to final delivery, every step is intentional — keeping you informed, on time, and confident in the outcome.
          </p>
        </div>

        {/* Process Track (Handles Horizontal Grid on Laptop & Vertical Line on Mobile) */}
        <div className="hww-process-wrapper">
          <div className="hww-vertical-line-mobile"></div>
          
          <div className="hww-steps-grid">
            {stepsData.map((step, index) => (
              <div 
                key={step.number} 
                className="hww-step-item"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Desktop top horizontal line & dot */}
                <div className="hww-desktop-line-container">
                  <div className="hww-horizontal-line"></div>
                  <div className="hww-number-badge-desktop">{step.number}</div>
                </div>

                {/* Mobile badge circle */}
                <div className="hww-number-badge-mobile">{step.number}</div>

                {/* Content Body */}
                <div className="hww-content-body">
                  <h3 className="hww-card-title">{step.title}</h3>
                  <h4 className="hww-card-subtitle">{step.subtitle}</h4>
                  <p className="hww-card-text">{step.text}</p>
                  
                  <div className="hww-pills-group">
                    {step.pills.map((pill, idx) => (
                      <span key={idx} className="hww-pill">{pill}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}