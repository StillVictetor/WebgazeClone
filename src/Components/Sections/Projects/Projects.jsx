import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import "./projects.css";

const projectsData = [
  {
    id: "01",
    title: "Care Partners Australia",
    tags: "WEB DESIGN • BRANDING • UI/UX",
    link: "/projects/care-partners",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "02",
    title: "Australian Ghanaian Chamber of Commerce",
    tags: "WEB DESIGN • SYSTEM DEV • SEO",
    link: "/projects/agcci",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "03",
    title: "WINSTAMAC",
    tags: "WEB APP • BRANDING • UI/UX",
    link: "/projects/winstamac",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "04",
    title: "WINSTAMAC",
    tags: "WEB APP • BRANDING • UI/UX",
    link: "/projects/winstamac",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function ProjectsSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  const sliderRef = useRef(null);

  // Dynamic real-time calculations based on array length
  const totalProjectsCount = projectsData.length;
  const formattedTotal = String(totalProjectsCount).padStart(2, "0");
  const formattedActive = String(activeSlide + 1).padStart(2, "0");

  const handleScroll = () => {
    if (sliderRef.current) {
      const scrollLeft = sliderRef.current.scrollLeft;
      const cardWidth = sliderRef.current.children[0]?.offsetWidth || 300;
      const newIndex = Math.round(scrollLeft / (cardWidth + 28)); // 28px is gap
      const clampedIndex = Math.max(0, Math.min(newIndex, totalProjectsCount - 1));
      setActiveSlide(clampedIndex);
    }
  };

  const scrollNext = () => {
    if (sliderRef.current) {
      const cardWidth = sliderRef.current.children[0]?.offsetWidth || 300;
      sliderRef.current.scrollBy({ left: cardWidth + 28, behavior: "smooth" });
    }
  };

  const scrollPrev = () => {
    if (sliderRef.current) {
      const cardWidth = sliderRef.current.children[0]?.offsetWidth || 300;
      sliderRef.current.scrollBy({ left: -(cardWidth + 28), behavior: "smooth" });
    }
  };

  return (
    <section data-theme="dark" className="projects-section">
      <div className="projects-container">
        
        {/* --- HEADER --- */}
        <div className="projects-header">
          <div className="projects-title-box">
            <span className="projects-subtag">SELECTED WORK</span>
            <h2 className="projects-main-title">
              Projects that <br className="desktop-only-br" />
              speak for themselves.
            </h2>
            <p className="projects-description">
              A selection of recent websites, brand systems, and digital experiences for clients across Australia and beyond.
            </p>
          </div>

          <Link to="/projects" className="btn-see-all">
            SEE ALL PROJECTS &nbsp;&nearr;
          </Link>
        </div>

        {/* --- HORIZONTAL SCROLL TRACK (ALL DEVICES) --- */}
        <div 
          className="projects-track-wrapper" 
          ref={sliderRef}
          onScroll={handleScroll}
        >
          {projectsData.map((project) => (
            <Link 
              to={project.link} 
              key={project.id} 
              className="project-card"
            >
              <div className="card-image-wrapper">
                <img src={project.image} alt={project.title} loading="lazy" />
                <div className="card-overlay-gradient"></div>
              </div>

              {/* Card Bottom Details */}
              <div className="card-info-box">
                <span className="card-tags">{project.tags}</span>
                <h3 className="card-project-title">{project.title}</h3>
                <span className="card-view-btn">VIEW PROJECT &rarr;</span>
              </div>
            </Link>
          ))}
        </div>{/* --- BOTTOM CONTROLS & DYNAMIC PROGRESS BAR --- */}
        <div className="projects-bottom-bar">
          <div className="progress-indicator-group">
            <span className="counter-text">
              <strong className="active-num">{formattedActive}</strong> / {formattedTotal}
            </span>
            <div className="progress-track">
              <div 
                className="progress-fill"
                style={{
                  width: `${((activeSlide + 1) / totalProjectsCount) * 100}%
                `}}
              ></div>
            </div>
          </div>

          {/* Slider Arrows */}
          <div className="carousel-arrows">
            <button onClick={scrollPrev} className="arrow-btn" aria-label="Previous Project">
              &larr;
            </button>
            <button onClick={scrollNext} className="arrow-btn" aria-label="Next Project">
              &rarr;
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}