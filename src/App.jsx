import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Page";
import Hero from "./Components/Sections/Hero.jsx/page.jsx";
import Services from "./Components/Sections/Services/Page.jsx";
import HowWeWork from "./Components/Sections/HowWeWork/HowWeWork.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Projects from "./Components/Sections/Projects/Projects.jsx";
import TestimonialsAndFAQ from "./Components/Sections/Testimonials/Testimonial.jsx";
import AboutHero from "./Components/Sections/About/AboutHero.jsx";
import WhyWeExist from "./Components/Sections/WhyWeExist/WhyWeExist.jsx";
import WhatWeDo from "./Components/Sections/WhatWeDo/WhatWeDo.jsx";
import WhenWereAFit from "./Components/Sections/WhereWeAreAFit/WhereWeAreAFit.jsx";
import NeverCutCorners from "./Components/Sections/NeverCutCorners/NeverCutCorner.jsx";
import ByTheNumbers from "./Components/Sections/BytheNumbers/ByTheNumbers.jsx";
import Insights from "./Components/Sections/Insights/Insights.jsx";
import Contact from "./Components/Sections/Contact/Contact.jsx";
import ProjectPage from "./Components/Sections/Projects/ProjectPage.jsx";

// Insight Pages
import InsightPages from "./Components/Sections/Insights/InsightPages/InsightPages.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Hero />
              <Services />
              <Projects />
              <HowWeWork />
              <TestimonialsAndFAQ />
              <Footer />
            </>
          }
        />

        <Route
          path="/about"
          element={
            <>
              <Navbar />
              <AboutHero />
              <WhyWeExist />
              <ByTheNumbers />
              <WhatWeDo />
              <NeverCutCorners />
              <WhenWereAFit />

              <Footer />
            </>
          }
        />

        <Route
          path="/insights"
          element={
            <>
              <Navbar />
              <Insights />
              <Footer />
            </>
          }
        />

        {/* Insight Pages */}
        <Route
          path="/insights/:slug"
          element={
            <>
              <Navbar />
              <InsightPages />
              <Footer />
            </>
          }
        />

        <Route
          path="/contact"
          element={
            <>
              <Navbar />
              <Contact />
              <Footer />
            </>
          }
        />

        <Route
          path="/projects"
          element={
            <>
              <Navbar />
              <ProjectPage />
              <Footer />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
