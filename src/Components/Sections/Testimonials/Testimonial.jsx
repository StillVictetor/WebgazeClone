import React, { useState } from "react";
import "./testimonial.css";

const testimonialsData = [
  {
    quote: "WebGaze completely transformed how we show up online. The website is clean, fast, and we're already getting more enquiries. They really understood what we needed.",
    author: "Care Partners Australia",
    role: "NDIS Service Provider",
    logoText: "CPA",
  },
  {
    quote: "Their strategic approach and technical execution blew past our expectations. Working with them was seamless from kickoff to launch.",
    author: "Australian Ghanaian Chamber of Commerce",
    role: "Business Council",
    logoText: "AGCCI",
  },
  {
    quote: "Exceptional speed, top-tier design systems, and absolute professionalism. Our revenue scaled up noticeably within the first month.",
    author: "Winstamac Group",
    role: "Industrial Engineering",
    logoText: "WINSTAMAC",
  },
];

const faqData = [
  {
    question: "What does WebGaze actually do?",
    answer: "We build high-performance websites, AI-assisted custom systems, robust web applications, and strategic digital branding tailored for businesses looking to scale."
  },
  {
    question: "How much does a website cost?",
    answer: "Every project is scoped custom based on your requirements, complexity, and growth goals. Book a discovery call and we'll give you a clear, fixed-price proposal."
  },
  {
    question: "How long does it take to build a website?",
    answer: "Typically, standard agency websites take between 4 to 6 weeks from kickoff call to final launch, depending on scope and feedback cycles."
  },
  {
    question: "Can you redesign or improve an existing website?",
    answer: "Yes! We audit existing web applications and digital assets to upgrade performance, UI/UX design, SEO rankings, and conversion pathways."
  },
  {
    question: "Do you offer ongoing support?",
    answer: "We offer dedicated website maintenance packages, continuous security updates, performance tracking, and iterative feature development."
  },
];

export default function TestimonialsAndFAQ() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const currentT = testimonialsData[activeTestimonial];

  return (
    <section data-theme="light" className="testimonials-faq-section">
      <div className="tf-container">
        
        {/* ================= LEFT COLUMN: TESTIMONIALS ================= */}
        <div className="tf-left-column">
          <div className="tf-section-header">
            <span className="tf-subtag">
              <span className="tf-red-line"></span> TESTIMONIALS
            </span>
            <h2 className="tf-main-title">What clients think.</h2>
            <p className="tf-description">
              Real outcomes for real businesses — built with strategy, clarity, and craft.
            </p>
          </div>

          {/* Testimonial Card */}
          <div className="testimonial-card">
            <div className="testimonial-logo-badge">{currentT.logoText}</div>
            <p className="testimonial-quote">"{currentT.quote}"</p>
            <div className="testimonial-author-box">
              <h4 className="author-name">{currentT.author}</h4>
              <span className="author-role">{currentT.role}</span>
            </div>
          </div>

          {/* Testimonial Progress Bars/Dots */}
          <div className="testimonial-pagination">
            {testimonialsData.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`pagination-bar ${index === activeTestimonial ? "active" : ""}`}
                aria-label={`Go to slide ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>{/* ================= RIGHT COLUMN: FAQ ACCORDION ================= */}
        <div className="tf-right-column">
          <div className="tf-section-header">
            <span className="tf-subtag">
              <span className="tf-red-line"></span> FAQ
            </span>
            <h2 className="tf-main-title">Questions, Answered.</h2>
            <p className="tf-description">
              Can't find the answer you're looking for? Reach out directly — we're happy to help.
            </p>
          </div>

          <div className="faq-list">
            {faqData.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div key={index} className={`faq-item ${isOpen ? "open" : ""}`}>
                  <button 
                    onClick={() => toggleFaq(index)} 
                    className="faq-question-btn"
                  >
                    <span>{faq.question}</span>
                    <span className="faq-icon">{isOpen ? "−" : "+"}</span>
                  </button>
                  {isOpen && (
                    <div className="faq-answer">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="faq-cta-wrapper">
            <a href="mailto:hello@webgaze.com.au" className="btn-email-us">
              EMAIL US
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}