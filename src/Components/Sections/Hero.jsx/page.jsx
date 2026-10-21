import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Page.css";

const typewriterWords = ["deliver results.", "drive revenue.", "scale brands."];

export default function Page() {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const currentWord = typewriterWords[wordIndex];

    const handleType = () => {
      if (!isDeleting) {
        // Typing phase: add one letter at a time
        setText(currentWord.substring(0, text.length + 1));
        setTypingSpeed(100);

        // When full word is typed out
        if (text === currentWord) {
          setTimeout(() => setIsDeleting(true), 2000); // Pause before starting deletion
        }
      } else {
        // Deleting phase: remove one letter at a time
        setText(currentWord.substring(0, text.length - 1));
        setTypingSpeed(50); // Delete faster

        // When word is fully deleted
        if (text === "") {
          setIsDeleting(false);
          setWordIndex((prevIndex) => (prevIndex + 1) % typewriterWords.length);
        }
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex, typingSpeed]);

  return (
    <section data-theme="dark" className="hero-section">
      {/* Background Graphic Grid & Concentric Arcs */}
      <div className="hero-grid-bg">
        <div className="arc-shape arc-1"></div>
        <div className="arc-shape arc-2"></div>
        <div className="arc-shape arc-3"></div>
      </div>

      <div className="hero-container">
        {/* Main Content Box with Slide-up Animation */}
        <div className="hero-content">
          <h1 className="hero-headline">
            We build modern brands <br />
            and digital experiences
          </h1>

          <div className="typewriter-container">
            <span className="typewriter-static">Designed to </span>
            <span className="typewriter-dynamic">
              {text}
              <span className="typewriter-cursor">|</span>
            </span>
          </div>

          <p className="hero-subtext">
            A strategic web design, branding, and SEO studio creating clear,
            practical work that helps businesses grow.
          </p>

          <div className="hero-cta-group">
            <Link to="/contact" className="btn-primary">
              START A PROJECT &rarr;
            </Link>
            <Link to="/projects" className="btn-secondary">
              SEE OUR WORK &rarr;
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
