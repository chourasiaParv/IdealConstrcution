import React, { useState, useEffect } from 'react';

const Header = () => {
  const [expanded, setExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to handle smooth scrolling to sections
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    setExpanded(false); // Close mobile menu after click
  };

  return (
    <>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');
        @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');

        :root {
          --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          --secondary-gradient: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
          --dark-bg: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
          --text-light: #ffffff;
          --text-secondary: #b8c5d6;
          --accent-color: #00d4ff;
          --glass-bg: rgba(255, 255, 255, 0.05);
          --glass-border: rgba(255, 255, 255, 0.1);
          --shadow-glow: 0 8px 32px rgba(0, 212, 255, 0.3);
          --shadow-dark: 0 8px 32px rgba(0, 0, 0, 0.4);
        }

        * {
          font-family: 'Poppins', sans-serif;
        }

        .header-navbar {
          background: ${scrolled 
            ? 'rgba(26, 26, 46, 0.95)' 
            : 'var(--dark-bg)'};
          backdrop-filter: ${scrolled ? 'blur(20px) saturate(180%)' : 'none'};
          -webkit-backdrop-filter: ${scrolled ? 'blur(20px) saturate(180%)' : 'none'};
          border-bottom: ${scrolled ? '1px solid var(--glass-border)' : 'none'};
          box-shadow: ${scrolled 
            ? '0 8px 32px rgba(0, 0, 0, 0.5)' 
            : 'none'};
          transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1050;
          padding: ${scrolled ? '10px 0' : '20px 0'};
          animation: slideDown 0.8s ease-out;
        }

        @keyframes slideDown {
          from {
            transform: translateY(-100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .header-brand {
          font-size: ${scrolled ? '1.5rem' : '1.5rem'};
          font-weight: 700;
          background: white;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          transition: all 0.4s ease;
          text-decoration: none;
          letter-spacing: -0.5px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          gap: 12px;
          margin-left: -10px;
          padding-left: 0;
        }

        .header-brand::before {
          content: '';
          position: absolute;
          top: -5px;
          left: -5px;
          right: -5px;
          bottom: -5px;
          background: var(--primary-gradient);
          border-radius: 15px;
          opacity: 0;
          z-index: -1;
          transition: opacity 0.3s ease;
          filter: blur(10px);
        }

        .header-brand:hover::before {
          opacity: 0.2;
        }

        .header-brand i {
          background: var(--secondary-gradient);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }

        .header-nav {
          display: flex;
          align-items: center;
          gap: 40px;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .header-nav-link {
          color: var(--text-secondary);
          font-weight: 500;
          position: relative;
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          text-decoration: none;
          padding: 12px 0;
          font-size: 0.95rem;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          cursor: pointer;
        }

        .header-nav-link:hover {
          color: var(--accent-color);
          transform: translateY(-3px);
          text-shadow: 0 5px 15px rgba(0, 212, 255, 0.4);
        }

        .header-nav-link::before {
          content: '';
          position: absolute;
          top: 0;
          left: 50%;
          width: 0;
          height: 2px;
          background: var(--primary-gradient);
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          transform: translateX(-50%);
        }

        .header-nav-link:hover::before {
          width: 100%;
        }

        .header-nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0;
          height: 2px;
          background: var(--secondary-gradient);
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          transform: translateX(-50%);
          transition-delay: 0.1s;
        }

        .header-nav-link:hover::after {
          width: 100%;
        }

        .header-toggler {
          display: none;
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          border-radius: 15px;
          padding: 12px;
          font-size: 1.3rem;
          color: var(--accent-color);
          cursor: pointer;
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }

        .header-toggler:hover {
          background: var(--glass-border);
          transform: scale(1.05);
        }

        .header-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 10px;
          width: 100%;
        }

        .header-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
        }

        .header-inner img{
          width: 50px;
          height:auto;
        }

        .header-collapse {
          display: flex;
          align-items: center;
        }

        .mobile-menu {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: rgba(26, 26, 46, 0.98);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid var(--glass-border);
          padding: 30px;
          transform: translateY(-20px);
          opacity: 0;
          visibility: hidden;
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          box-shadow: var(--shadow-dark);
        }

        .mobile-menu.show {
          transform: translateY(0);
          opacity: 1;
          visibility: visible;
        }

        .mobile-nav {
          flex-direction: column;
          gap: 20px;
          align-items: center;
        }

        .mobile-nav .header-nav-link {
          font-size: 1.1rem;
          padding: 15px 0;
          border-bottom: 1px solid var(--glass-border);
          width: 100%;
          text-align: center;
        }

        .floating-elements {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
          overflow: hidden;
        }

        .floating-elements::before,
        .floating-elements::after {
          content: '';
          position: absolute;
          width: 20px;
          height: 20px;
          background: var(--accent-color);
          border-radius: 50%;
          opacity: 0.1;
          animation: float 6s ease-in-out infinite;
        }

        .floating-elements::before {
          top: 20%;
          left: 10%;
          animation-delay: -2s;
        }

        .floating-elements::after {
          top: 60%;
          right: 15%;
          animation-delay: -4s;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }

        @media (max-width: 768px) {
          .header-toggler {
            display: block;
          }

          .header-nav {
            display: none;
          }

          .header-collapse {
            gap: 20px;
          }

          .header-brand {
            font-size: 1.5rem;
          }
        }
            @media (max-width: 480px) {
          .header-navbar {
            padding: ${scrolled ? '6px 0' : '10px 0'};
          }
          
          .header-brand {
            font-size: ${scrolled ? '1.2rem' : '1.3rem'};
          }
          
          .header-container {
            padding: 0 20px;
          }
        }

        /* Scroll indicator */
        .scroll-indicator {
          position: absolute;
          bottom: -2px;
          left: 0;
          height: 2px;
          background: var(--primary-gradient);
          transition: width 0.3s ease;
          width: ${scrolled ? '100%' : '0%'};
        }
      `}</style>

      <nav className="header-navbar">
        <div className="floating-elements"></div>
        <div className="scroll-indicator"></div>
        
        <div className="header-container">
          <div className="header-inner">
            <a href="#home" className="header-brand" onClick={(e) => scrollToSection(e, 'home')}>
              {/* <i className="fas fa-hard-hat"></i> */}
              <img src="/src/assets/logo.svg" alt="" />
              IDEAL CONSULTANTS & DEVELOPERS
            </a>
            
            <button 
              className="header-toggler"
              onClick={() => setExpanded(!expanded)}
              aria-label="Toggle navigation"
            >
              <i className={`fas ${expanded ? 'fa-times' : 'fa-bars'}`}></i>
            </button>

            <div className="header-collapse d-none d-md-flex">
              <nav className="header-nav">
                <a className="header-nav-link" onClick={(e) => scrollToSection(e, 'home')}>Home</a>
                <a className="header-nav-link" onClick={(e) => scrollToSection(e, 'about')}>About</a>
                <a className="header-nav-link" onClick={(e) => scrollToSection(e, 'services')}>Services</a>
                <a className="header-nav-link" onClick={(e) => scrollToSection(e, 'projects')}>Projects</a>
                <a className="header-nav-link" onClick={(e) => scrollToSection(e, 'team')}>Team</a>
                <a className="header-nav-link" onClick={(e) => scrollToSection(e, 'contact')}>Contact</a>
              </nav>
            </div>
          </div>
        </div>

        <div className={`mobile-menu d-md-none ${expanded ? 'show' : ''}`}>
          <nav className="header-nav mobile-nav">
            <a className="header-nav-link" onClick={(e) => scrollToSection(e, 'home')}>
              <i className="fas fa-home me-2"></i>Home
            </a>
            <a className="header-nav-link" onClick={(e) => scrollToSection(e, 'about')}>
              <i className="fas fa-info-circle me-2"></i>About
            </a>
            <a className="header-nav-link" onClick={(e) => scrollToSection(e, 'services')}>
              <i className="fas fa-cogs me-2"></i>Services
            </a>
            <a className="header-nav-link" onClick={(e) => scrollToSection(e, 'projects')}>
              <i className="fas fa-project-diagram me-2"></i>Projects
            </a>
            <a className="header-nav-link" onClick={(e) => scrollToSection(e, 'team')}>
              <i className="fas fa-users me-2"></i>Team
            </a>
            <a className="header-nav-link" onClick={(e) => scrollToSection(e, 'contact')}>
              <i className="fas fa-envelope me-2"></i>Contact
            </a>
          </nav>
        </div>
      </nav>
    </>
  );
};

export default Header;