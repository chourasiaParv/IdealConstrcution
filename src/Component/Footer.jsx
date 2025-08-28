import React, { useState, useEffect } from 'react';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const footer = document.querySelector('#footer');
    if (footer) observer.observe(footer);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');
        @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');

        :root {
          /* --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%); */
          --secondary-gradient: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
          --accent-gradient: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
          --dark-bg: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%);
          --card-bg: rgba(255, 255, 255, 0.05);
          --card-border: rgba(255, 255, 255, 0.1);
          --text-primary: #ffffff;
          --text-secondary: #b8c5d6;
          --text-muted: #8892b0;
          --accent-color: #64ffda;
          --glass-bg: rgba(255, 255, 255, 0.03);
          --glass-border: rgba(255, 255, 255, 0.08);
          --shadow-glow: 0 8px 32px rgba(100, 255, 218, 0.1);
          --shadow-hover: 0 20px 40px rgba(0, 0, 0, 0.3);
        }

        * {
          font-family: 'Poppins', sans-serif;
          box-sizing: border-box;
        }

        .footer-section {
          background: var(--dark-bg);
          position: relative;
          overflow: hidden;
          padding: 80px 0 0;
        }

        /* Animated background elements */
        .footer-bg-elements {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 0;
        }

        .bg-circle {
          position: absolute;
          border-radius: 50%;
          background: var(--accent-color);
          opacity: 0.03;
          animation: float 8s ease-in-out infinite;
        }

        .bg-circle:nth-child(1) {
          width: 200px;
          height: 200px;
          top: 10%;
          left: 5%;
          animation-delay: 0s;
        }

        .bg-circle:nth-child(2) {
          width: 150px;
          height: 150px;
          top: 50%;
          right: 10%;
          animation-delay: -3s;
        }

        .bg-circle:nth-child(3) {
          width: 100px;
          height: 100px;
          bottom: 20%;
          left: 60%;
          animation-delay: -6s;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.03;
          }
          50% {
            transform: translateY(-30px) rotate(180deg);
            opacity: 0.08;
          }
        }

        /* Glowing lines */
        .glow-line {
          position: absolute;
          height: 1px;
          background: var(--accent-gradient);
          animation: lineGlow 4s ease-in-out infinite;
        }

        .glow-line:nth-child(1) {
          top: 20%;
          left: 0;
          width: 30%;
          animation-delay: 0s;
        }

        .glow-line:nth-child(2) {
          top: 60%;
          right: 0;
          width: 25%;
          animation-delay: -2s;
        }

        @keyframes lineGlow {
          0%, 100% {
            opacity: 0.2;
            transform: scaleX(1);
          }
          50% {
            opacity: 0.8;
            transform: scaleX(1.2);
          }
        }

        /* Footer content container */
        .footer-content {
          position: relative;
          z-index: 2;
        }

        /* Brand section */
        .footer-brand {
          font-size: 1.5rem;
          font-weight: 700;
          background: white;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          margin-bottom: 20px;
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          letter-spacing: -1px;
          opacity: ${isVisible ? '1' : '0'};
          transform: ${isVisible ? 'translateY(0)' : 'translateY(30px)'};
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          /* white-space: nowrap; */

        }

        .footer-brand i {
          background: var(--secondary-gradient);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-right: 15px;
          font-size: 1rem;
          animation: pulse 2s infinite;
        }

        .footer-brand img{
          width:50px;
          height:auto;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        .footer-brand:hover {
          transform: translateY(-3px);
          filter: drop-shadow(0 5px 15px rgba(102, 126, 234, 0.3));
        }

        /* Description */
        .footer-description {
          font-size: 1.1rem;
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 30px;
          opacity: ${isVisible ? '1' : '0'};
          transform: ${isVisible ? 'translateY(0)' : 'translateY(20px)'};
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.1s;
        }

        /* Social links */
        .footer-social {
          display: flex;
          gap: 15px;
          margin-bottom: 30px;
          opacity: ${isVisible ? '1' : '0'};
          transform: ${isVisible ? 'translateY(0)' : 'translateY(20px)'};
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s;
        }

        .social-link {
          width: 55px;
          height: 55px;
          background: var(--glass-bg);
          backdrop-filter: blur(10px);
          border: 1px solid var(--glass-border);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-color);
          font-size: 1.3rem;
          text-decoration: none;
          position: relative;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .social-link::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: var(--primary-gradient);
          border-radius: 50%;
          transform: scale(0);
          transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          z-index: -1;
        }

        .social-link:hover::before {
          transform: scale(1);
        }

        .social-link:hover {
          transform: translateY(-5px) scale(1.1);
          color: white;
          box-shadow: var(--shadow-hover);
          border-color: transparent;
        }

        /* Section titles */
        .footer-title {
          font-size: 1.4rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 25px;
          position: relative;
          text-transform: uppercase;
          letter-spacing: 1px;
          opacity: ${isVisible ? '1' : '0'};
          transform: ${isVisible ? 'translateX(0)' : 'translateX(-30px)'};
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.3s;
        }

        .footer-title::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 50px;
          height: 3px;
          background: var(--accent-gradient);
          border-radius: 2px;
          animation: ${isVisible ? 'slideWidth 1s ease-out 0.8s both' : 'none'};
        }

        @keyframes slideWidth {
          from { width: 0; }
          to { width: 50px; }
        }

        /* Footer links */
        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-links li {
          margin-bottom: 12px;
          opacity: ${isVisible ? '1' : '0'};
          transform: ${isVisible ? 'translateX(0)' : 'translateX(-20px)'};
          transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .footer-links li:nth-child(1) { transition-delay: 0.4s; }
        .footer-links li:nth-child(2) { transition-delay: 0.5s; }
        .footer-links li:nth-child(3) { transition-delay: 0.6s; }
        .footer-links li:nth-child(4) { transition-delay: 0.7s; }

        .footer-link {
          color: var(--text-secondary);
          text-decoration: none;
          font-size: 1rem;
          position: relative;
          padding: 8px 0;
          display: block;
          transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .footer-link::before {
          content: '';
          position: absolute;
          left: -15px;
          top: 50%;
          width: 0;
          height: 2px;
          background: var(--accent-color);
          transition: all 0.3s ease;
          transform: translateY(-50%);
        }

        .footer-link:hover::before {
          width: 10px;
        }

        .footer-link:hover {
          color: var(--accent-color);
          transform: translateX(15px);
          text-shadow: 0 0 10px rgba(100, 255, 218, 0.3);
        }

        /* Contact items */
        .contact-item {
          display: flex;
          align-items: flex-start;
          margin-bottom: 15px;
          font-size: 1rem;
          color: var(--text-secondary);
          opacity: ${isVisible ? '1' : '0'};
          transform: ${isVisible ? 'translateX(0)' : 'translateX(-20px)'};
          transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .contact-item:nth-child(1) { transition-delay: 0.4s; }
        .contact-item:nth-child(2) { transition-delay: 0.5s; }
        .contact-item:nth-child(3) { transition-delay: 0.6s; }

        .contact-icon {
          width: 40px;
          height: 40px;
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-color);
          margin-right: 15px;
          flex-shrink: 0;
          font-size: 1.1rem;
          transition: all 0.3s ease;
        }

        .contact-item:hover .contact-icon {
          background: var(--accent-color);
          color: var(--dark-bg);
          transform: scale(1.1) rotate(360deg);
          box-shadow: 0 5px 15px rgba(100, 255, 218, 0.3);
        }

        .contact-link {
          color: inherit;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .contact-link:hover {
          color: var(--accent-color);
        }

        /* Footer bottom */
        .footer-bottom {
          margin-top: 60px;
          padding: 30px 0;
          border-top: 1px solid var(--glass-border);
          background: var(--glass-bg);
          backdrop-filter: blur(10px);
          opacity: ${isVisible ? '1' : '0'};
          transform: ${isVisible ? 'translateY(0)' : 'translateY(30px)'};
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.8s;
        }

        .copyright-text {
          color: var(--text-muted);
          font-size: 0.95rem;
          margin: 0;
        }

        .bottom-links {
          display: flex;
          gap: 30px;
        }

        .bottom-link {
          color: var(--text-muted);
          text-decoration: none;
          font-size: 0.95rem;
          transition: all 0.3s ease;
          position: relative;
        }

        .bottom-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 1px;
          background: var(--accent-color);
          transition: width 0.3s ease;
        }

        .bottom-link:hover::after {
          width: 100%;
        }

        .bottom-link:hover {
          color: var(--accent-color);
        }

        /* Scroll to top button */
        .scroll-top {
          position: absolute;
          top: -25px;
          right: 30px;
          width: 50px;
          height: 50px;
          background: var(--primary-gradient);
          border: none;
          border-radius: 50%;
          color: white;
          font-size: 1.2rem;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
        }

        .scroll-top:hover {
          transform: translateY(-5px) scale(1.1);
          box-shadow: 0 15px 35px rgba(102, 126, 234, 0.4);
        }

        @media (max-width: 768px) {
          .footer-brand {
            font-size: 2rem;
          }
          
          .bottom-links {
            flex-direction: column;
            gap: 15px;
            margin-top: 20px;
          }
          
          .scroll-top {
            right: 20px;
          }
        }
      `}</style>

      <footer id="footer" className="footer-section">
        <div className="footer-bg-elements">
          <div className="bg-circle"></div>
          <div className="bg-circle"></div>
          <div className="bg-circle"></div>
          <div className="glow-line"></div>
          <div className="glow-line"></div>
        </div>

        <div className="container">
          <div className="footer-content">
            <div className="row g-4">
              {/* Company Info */}
              <div className="col-lg-4 col-md-6">
                <a href="#home" className="footer-brand">
                  {/* <i className="fas fa-hard-hat"></i> */}
                  <img src="/src\assets\logo.svg" alt="" />
              IDEAL CONSULTANTS & DEVELOPERS
                </a>
                <p className="footer-description">
                  Building excellence since 2003. We are committed to delivering 
                  high-quality construction services that exceed expectations and 
                  create lasting value for our clients.
                </p>
                <div className="footer-social">
                  <a href="#" className="social-link" aria-label="Facebook">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="social-link" aria-label="Twitter">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="social-link" aria-label="LinkedIn">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="#" className="social-link" aria-label="Instagram">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#" className="social-link" aria-label="YouTube">
                    <i className="fab fa-youtube"></i>
                  </a>
                </div>
              </div>
              
              {/* Services */}
              <div className="col-lg-2 col-md-6 col-sm-6">
                <h6 className="footer-title">Services</h6>
                <ul className="footer-links">
                  <li><a href="#services" className="footer-link">Residential</a></li>
                  <li><a href="#services" className="footer-link">Commercial</a></li>
                  <li><a href="#services" className="footer-link">Industrial</a></li>
                  <li><a href="#services" className="footer-link">Renovation</a></li>
                </ul>
              </div>
              
              {/* Quick Links */}
              <div className="col-lg-3 col-md-6 col-sm-6">
                <h6 className="footer-title">Quick Links</h6>
                <ul className="footer-links">
                  <li><a href="#about" className="footer-link">About Us</a></li>
                  <li><a href="#projects" className="footer-link">Our Projects</a></li>
                  <li><a href="#team" className="footer-link">Our Team</a></li>
                  <li><a href="#contact" className="footer-link">Contact</a></li>
                </ul>
              </div>
              
              {/* Contact Info */}
              <div className="col-lg-3 col-md-6">
                <h6 className="footer-title">Contact Info</h6>
                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div>123 Construction Ave,<br />Builder City, BC 12345</div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fas fa-phone"></i>
                  </div>
                  <a href="tel:+15551234567" className="contact-link">+1 (555) 123-4567</a>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <a href="mailto:info@buildcorp.com" className="contact-link">info@buildcorp.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <p className="copyright-text">
                  © {currentYear} BuildCorp. All rights reserved.
                </p>
              </div>
              <div className="col-md-6 text-md-end">
                <div className="bottom-links">
                  <a href="#privacy" className="bottom-link">Privacy Policy</a>
                  <a href="#terms" className="bottom-link">Terms of Service</a>
                  <a href="#cookies" className="bottom-link">Cookie Policy</a>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll to top button */}
          <button 
            className="scroll-top"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Scroll to top"
          >
            <i className="fas fa-chevron-up"></i>
          </button>
        </div>
      </footer>
    </>
  );
};

export default Footer;