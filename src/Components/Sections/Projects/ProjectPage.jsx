import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./projectPage.css";

const allProjectsData = [
  {
    id: "01",
    title: "Care Partners Australia",
    category: "Web Design",
    tags: "Web Design • Branding • UI/UX",
    link: "/projects/care-partners",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "02",
    title: "Australian Ghanaian Chamber of Commerce",
    category: "Web Design",
    tags: "Web Design • Branding",
    link: "/projects/agcci",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "03",
    title: "WINSTAMAC",
    category: "UI/UX",
    tags: "Web Design • Branding • UI/UX",
    link: "/projects/winstamac",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "04",
    title: "Sababa Global Trade & Logistics",
    category: "Branding",
    tags: "Web Design • Branding",
    link: "/projects/sababa",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "05",
    title: "Viride Energy Africa",
    category: "Web Design",
    tags: "Web Design • Development",
    link: "/projects/viride",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "06",
    title: "Ben Ari Accounting",
    category: "UI/UX",
    tags: "Web Design • Product Design",
    link: "/projects/ben-ari",
    image:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "07",
    title: "Phytoscience Australia",
    category: "Branding",
    tags: "Web Design • Branding • UI/UX",
    link: "/projects/phytoscience",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "08",
    title: "Palm Care Group",
    category: "Web Design",
    tags: "Web Design • Development",
    link: "/projects/palm-care",
    image:
      "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "09",
    title: "Prime Logistics Hub",
    category: "UI/UX",
    tags: "Web App • UI/UX",
    link: "/projects/prime-logistics",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "10",
    title: "Aura Creative Studio",
    category: "Branding",
    tags: "Branding • Design System",
    link: "/projects/aura",
    image:
      "https://images.unsplash.com/photo-1542744094-24638eff58bb?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "11",
    title: "Nexus Financial",
    category: "Web Design",
    tags: "Web Design • FinTech",
    link: "/projects/nexus",
    image:
      "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "12",
    title: "Verdant Agriculture",
    category: "UI/UX",
    tags: "UI/UX • Mobile App",
    link: "/projects/verdant",
    image:
      "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=1200&auto=format&fit=crop",
  },
];

const tabs = ["All", "Web Design", "Branding", "UI/UX"];

export default function ProjectPage() {
  const [activeTab, setActiveTab] = useState("All");

  // Filter projects dynamically based on selected tab
  const filteredProjects =
    activeTab === "All"
      ? allProjectsData
      : allProjectsData.filter((project) => project.category === activeTab);

  const realCountFormatted = String(filteredProjects.length).padStart(2, "0");

  return (
    <section data-theme="light" className="products-section">
      <div data-theme="dark" className="insights-hero-banner">
        <div className="insights-hero-container">
          <Link to="/" className="hero-back-arrow" aria-label="Go back">
            &larr;
          </Link>
          <h1 className="insights-hero-title">Our Work</h1>
        </div>
      </div>
      <div className="products-container">
        {/* --- TOP HEADER & TABS BAR --- */}
        <div className="products-header-bar">
          <div className="products-counter-title">
            <span className="selected-work-label">SELECTED WORK</span>
            <span className="dot-separator">&middot;</span>
            <span className="projects-count-real">
              {realCountFormatted} PROJECTS
            </span>
          </div>

          {/* Filter Tabs */}
          <div className="products-tabs-group">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`tab-btn ${activeTab === tab ? "active" : ""}`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* --- PROJECTS GRID --- */}
        <div className="products-grid">
          {filteredProjects.map((project) => (
            <Link
              to={project.link}
              key={project.id}
              className="product-grid-card"
            >
              <div className="product-image-box">
                <img src={project.image} alt={project.title} loading="lazy" />
              </div>
              <div className="product-info-box">
                <h3 className="product-title">{project.title}</h3>
                <span className="product-tags">{project.tags}</span>
              </div>
            </Link>
          ))}
        </div>

        {/* Fallback if a category has no items */}
        {filteredProjects.length === 0 && (
          <div className="no-projects-found">
            <p>No projects found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
}
