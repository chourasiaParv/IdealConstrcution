import React, { useState, useEffect } from "react";
import Header from "./Component/Header";
import Hero from "./Component/Hero";
import About from "./Component/About";
import Services from "./Component/Services";
import Projects from "./Component/Projects";
import Team from "./Component/Team";
import Contact from "./Component/Contact";
import Footer from "./Component/Footer";
// import './app.css'

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Apply theme class to body and save to localStorage
  useEffect(() => {
    document.body.className = darkMode ? "dark-theme" : "light-theme";
    document.documentElement.setAttribute(
      "data-theme",
      darkMode ? "dark" : "light"
    );
    localStorage.setItem("darkMode", darkMode.toString());
  }, [darkMode]);

  // Load theme from localStorage on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("darkMode");
    if (savedTheme) {
      setDarkMode(savedTheme === "true");
    }
  }, []);

  return (
    <>
      <style jsx>{`
     
        :root {
          --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          --secondary-gradient: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
          --success-gradient: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
          --warning-gradient: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
          --bg-primary: #0d1117;
          --bg-secondary: #161b22;
          --bg-tertiary: #21262d;
          --text-primary: #f0f6fc;
          --text-secondary: #c9d1d9;
          --text-muted: #8b949e;
          --border-primary: #30363d;
          --shadow-primary: rgba(0, 0, 0, 0.6);
          --shadow-hover: rgba(0, 0, 0, 0.8);
          --accent-primary: #58a6ff;
          --accent-secondary: #39d353;
        }

 

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          transition: color 0.3s ease, background-color 0.3s ease,
            border-color 0.3s ease;
        }

        body {
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
          line-height: 1.6;
          color: var(--text-dark);
          overflow-x: hidden;
        }

        html {
          scroll-behavior: smooth;
        }

        /* Global Animation Classes */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes pulse {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        /* Smooth transitions for theme changes */
        .app-container {
          transition: all 0.3s ease;
        }

        /* Custom Scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: var(--bg-light);
        }

        ::-webkit-scrollbar-thumb {
          background: var(--primary-color);
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: #e55a2b;
        }

        /* Loading Animation */
        .loading-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: var(--white);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          opacity: 1;
          visibility: visible;
          transition: all 0.5s ease;
        }

        .loading-overlay.fade-out {
          opacity: 0;
          visibility: hidden;
        }

        .loader {
          width: 50px;
          height: 50px;
          border: 4px solid var(--bg-light);
          border-top: 4px solid var(--primary-color);
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        /* Back to Top Button */
        .back-to-top {
          position: fixed;
          bottom: 30px;
          right: 30px;
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, var(--primary-color), #e55a2b);
          color: white;
          border: none;
          border-radius: 50%;
          cursor: pointer;
          font-size: 1.2rem;
          box-shadow: 0 4px 15px rgba(255, 107, 53, 0.3);
          transition: all 0.3s ease;
          opacity: 0;
          visibility: hidden;
          transform: translateY(20px);
          z-index: 1000;
        }

        .back-to-top.visible {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }

        .back-to-top:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 25px rgba(255, 107, 53, 0.4);
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .back-to-top {
            bottom: 20px;
            right: 20px;
            width: 45px;
            height: 45px;
            font-size: 1rem;
          }
        }

        /* Accessibility Improvements */
        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
        }

        /* Focus Styles */
        a:focus,
        button:focus,
        input:focus,
        textarea:focus,
        select:focus {
          outline: 2px solid var(--primary-color);
          outline-offset: 2px;
        }

        /* Print Styles */
        @media print {
          .navbar,
          .back-to-top,
          .social-links,
          .theme-toggle {
            display: none !important;
          }
        }
      `}</style>

      <div className="app-container" data-theme={darkMode ? "dark" : "light"}>
        {/* Header Navigation */}
        <Header/>

        <main>
          <section id="home">
            <Hero />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="services">
            <Services />
          </section>
          <section id="projects">
            <Projects />
          </section>
          <section id="team">
            <Team />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </main>

        <Footer />

        {/* Back to Top Button */}
        <BackToTopButton />
      </div>
    </>
  );
};

// Back to Top Button Component
const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`back-to-top ${isVisible ? "visible" : ""}`}
      onClick={scrollToTop}
      aria-label="Back to top"
    >
      <i className="fas fa-chevron-up"></i>
    </button>
  );
};

export default App;