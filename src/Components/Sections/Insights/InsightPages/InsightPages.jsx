import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { articlesData } from "../../HardCoded/ArticlesData";
import "./insightPages.css";

export default function InsightPages() {
  const { slug } = useParams();
  const [scrollProgress, setScrollProgress] = useState(0);

  // Find article matching the URL slug, fallback to the first one if not found
  const article =
    articlesData.find((item) => item.slug === slug) || articlesData[0];

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div data-theme="dark" className="article-page-wrapper">
      {/* --- HERO SECTION --- */}
      <header className="article-hero">
        <div className="hero-content-box">
          <span className="hero-category-tag">&bull; {article.category}</span>
          <h1 className="hero-main-title">{article.heroTitle}</h1>
        </div>
      </header>

      {/* --- STICKY 3-COLUMN LAYOUT --- */}
      <main className="article-main-container">
        {/* LEFT COLUMN: STICKY TABLE OF CONTENTS */}
        <aside className="article-left-sidebar">
          <div className="sticky-toc-box">
            <h4 className="sidebar-section-title">CONTENTS</h4>
            <nav className="toc-nav-list">
              {article.toc.map((item) => (
                <a key={item.id} href={`#${item.id}`} className="toc-link-item">
                  {item.label}
                </a>
              ))}
            </nav>

            {/* REAL-TIME SCROLL PROGRESS INDICATOR */}
            <div className="scroll-progress-widget">
              <div className="scroll-process-head">
                <span className="progress-label">PROGRESS</span>
                <span className="progress-percentage">
                  {Math.round(scrollProgress)}%
                </span>
              </div>

              <div className="progress-bar-track">
                <div
                  className="progress-bar-fill"
                  style={{ width: `${scrollProgress}%` }}
                ></div>
              </div>
            </div>

            {/* Share / Social links */}
            <div className="share-links-group">
              <span className="share-label">SHARE</span>
              <button className="share-btn">Copy link</button>
              <button className="share-btn">Share on X</button>
              <button className="share-btn">LinkedIn</button>
            </div>
          </div>
        </aside>

        {/* MIDDLE COLUMN: SCROLLABLE ARTICLE BODY CONTENT */}
        <article className="article-middle-content">
          <div className="article-intro-header">
            <span className="content-badge">&bull; {article.category}</span>
            <span className="article-date">{article.date}</span>
            <span className="dot-sep">&bull;</span>
            <span className="read-time">{article.readTime}</span>
            <span className="dot-sep">&bull;</span>
            <span className="word-count">{article.wordCount}</span>

            <h2 className="article-inner-title">{article.title}</h2>

            <p className="article-lead">{article.lead}</p>
          </div>

          {/* Initial Paragraphs */}
          {article.paragraphsBeforeSections.map((pText, idx) => (
            <p key={idx} className="paragraph-text">
              {pText}
            </p>
          ))}

          {/* Dynamic Sections */}
          {article.sections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              className="content-section"
            >
              <h3 className="section-heading">{section.heading}</h3>
              {section.paragraphs.map((p, pIdx) => (
                <p key={pIdx} className="paragraph-text">
                  {p}
                </p>
              ))}
            </section>
          ))}

          {/* Bottom Back Button & Audit CTA */}
          <div className="article-bottom-actions">
            <Link to="/insights" className="btn-all-insights">
              &larr; ALL INSIGHTS
            </Link>
            <Link to="/contact" className="btn-website-audit">
              Book a strategy call &rarr;
            </Link>
          </div>
        </article>

        {/* RIGHT COLUMN: STICKY METADATA & ALSO READ */}
        <aside className="article-right-sidebar">
          <div className="sticky-meta-box">
            {/* Article Info Box */}
            <div className="info-card-box">
              <div className="meta-info-grid">
                <h4 className="sidebar-section-title">ARTICLE INFO</h4>
                <div className="meta-item">
                  <span className="meta-label">READING TIME</span>
                  <strong className="meta-value">{article.readTime}</strong>
                </div>
                <div className="meta-item">
                  <span className="meta-label">WORD COUNT</span>
                  <strong className="meta-value">
                    {article.wordCount.split(" ")[0]}
                  </strong>
                </div>
                <div className="meta-item">
                  <span className="meta-label">CATEGORY</span>
                  <strong className="meta-value red-text">
                    {article.category}
                  </strong>
                </div>
                <div className="meta-item">
                  <span className="meta-label">PUBLISHED</span>
                  <strong className="meta-value">{article.date}</strong>
                </div>
              </div>

              <div className="tags-group">
                <span className="meta-label">TAGS</span>
                <div className="tags-flex">
                  <span className="mini-tag">Strategy</span>
                  <span className="mini-tag">Web Design</span>
                  <span className="mini-tag">Redesign</span>
                </div>
              </div>
            </div>

            {/* Also Read Recommendations */}
            <div className="also-read-box">
              <h4 className="sidebar-section-title">ALSO READ</h4>
              <div className="recommendations-list">
                <Link to="/insights/brand-mistake" className="rec-card">
                  <span className="rec-category">BRANDING</span>
                  <h5 className="rec-title">
                    The Brand Mistake That's Costing Australian Businesses Trust
                  </h5>
                </Link>

                <Link to="/insights/local-seo" className="rec-card">
                  <span className="rec-category">SEO</span>
                  <h5 className="rec-title">
                    Local SEO in 2026: What Actually Moves the Needle
                  </h5>
                </Link>

                <Link to="/insights/redesign-vs-refresh" className="rec-card">
                  <span className="rec-category">STRATEGY</span>
                  <h5 className="rec-title">
                    When to Redesign vs. Refresh: A Framework
                  </h5>
                </Link>
              </div>
            </div>
            <div className="connect1">
              <span className="sidebar-section-title">Work with us</span>
              <h2 className="">Ready to build something great?</h2>
              <p>
                WebGaze works with Australian businesses to build websites and
                brands that actually convert.
              </p>
              <Link className="connect1-btn" to="/contact">
                Get in Touch &rarr;{" "}
              </Link>
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
}
