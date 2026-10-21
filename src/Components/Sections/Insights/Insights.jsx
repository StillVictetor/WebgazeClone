import React from "react";
import { Link } from "react-router-dom";
import "./insights.css";

const insightsArticles = [
  {
    id: "01",
    category: "WEB DESIGN",
    title: "Why Your Website Is Losing You Clients (And How to Fix It)",
    excerpt:
      "Most business websites fail silently. No error messages, no crashes — just visitors who leave before they convert. Here's what's actually going wrong.",
    date: "Apr 2026",
    readTime: "5 min read",
    slug: "/insights/website-losing-clients",
  },
  {
    id: "02",
    category: "BRANDING",
    title: "The Brand Mistake That's Costing Australian Businesses Trust",
    excerpt:
      "Inconsistent branding costs more than you think. We break down the single most common visual identity mistake — and the fast fix.",
    date: "Mar 2026",
    readTime: "4 min read",
    slug: "/insights/brand-consistency",
  },
  {
    id: "03",
    category: "SEO",
    title: "Local SEO in 2025: What Actually Moves the Needle",
    excerpt:
      "Google's algorithm has shifted again. Here's what's working right now for Australian businesses trying to rank in their local market.",
    date: "Feb 2025",
    readTime: "6 min read",
    slug: "/insights/local-seo-2025",
  },
  {
    id: "04",
    category: "STRATEGY",
    title: "When to Redesign vs. Refresh: A Framework for Business Owners",
    excerpt:
      "A full redesign is expensive. A surface refresh often misses the point. This decision framework helps you pick the right path.",
    date: "Jan 2026",
    readTime: "5 min read",
    slug: "/insights/redesign-vs-refresh",
  },
];

export default function Insights() {
  return (
    <section data-theme="light" className="insights-section">
      <div data-theme="dark" className="insights-hero-banner">
        <div className="insights-hero-container">
          <Link to="/" className="hero-back-arrow" aria-label="Go back">
            &larr;
          </Link>
          <h1 className="insights-hero-title">Insights</h1>
        </div>
      </div>
      <div className="insights-container">

        {/* Articles List */}
        <div className="insights-list">
          {insightsArticles.map((article) => (
            <Link
              to={article.slug}
              key={article.id}
              className="insight-row-card"
            >
              {/* Index Number */}
              <div className="insight-index">{article.id}</div>

              {/* Main Content Body */}
              <div className="insight-content">
                <span className="insight-category">{article.category}</span>
                <h3 className="insight-title">{article.title}</h3>
                <p className="insight-excerpt">{article.excerpt}</p>
                <div className="insight-meta">
                  <span>{article.date}</span>
                  <span className="meta-dot">•</span>
                  <span>{article.readTime}</span>
                </div>
              </div>

              {/* Hover Circle Button */}
              <div className="insight-action-btn" aria-hidden="true">
                <span>&rarr;</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
