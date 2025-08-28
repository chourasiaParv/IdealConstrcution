import React, { useState, useEffect, useRef } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [counters, setCounters] = useState({ projects: 0, clients: 0, years: 0, awards: 0 });
  const sectionRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    
    // Animated counters with easing
    const animateCounters = () => {
      const targets = { projects: 500, clients: 250, years: 20, awards: 15 };
      const duration = 3000;
      const steps = 100;
      
      let step = 0;
      const interval = setInterval(() => {
        step++;
        const progress = step / steps;
        const easeProgress = 1 - Math.pow(1 - progress, 4);
        
        setCounters({
          projects: Math.floor(targets.projects * easeProgress),
          clients: Math.floor(targets.clients * easeProgress),
          years: Math.floor(targets.years * easeProgress),
          awards: Math.floor(targets.awards * easeProgress)
        });
        
        if (step >= steps) clearInterval(interval);
      }, duration / steps);
    };
    
    const counterTimer = setTimeout(animateCounters, 1500);
    
    // Mouse tracking for parallax effects
    const handleMouseMove = (e) => {
      const rect = sectionRef.current?.getBoundingClientRect();
      if (rect) {
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        setMousePosition({ x, y });
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      clearTimeout(timer);
      clearTimeout(counterTimer);
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const values = [
    {
      icon: 'fas fa-award',
      title: 'Quality First',
      description: 'We never compromise on quality. Every project meets the highest standards with meticulous attention to detail.',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      glowColor: '#667eea'
    },
    {
      icon: 'fas fa-rocket',
      title: 'Innovation',
      description: 'Cutting-edge technology and modern techniques to deliver exceptional results.',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      glowColor: '#f093fb'
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'Safety Priority',
      description: 'Comprehensive safety protocols ensuring zero-accident work environments.',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      glowColor: '#4facfe'
    },
    {
      icon: 'fas fa-handshake',
      title: 'Client Trust',
      description: 'Building lasting relationships through transparency, reliability, and excellence.',
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      glowColor: '#43e97b'
    }
  ];

  const stats = [
    { number: counters.projects, label: 'Projects Completed', icon: 'fas fa-building', suffix: '+', color: '#667eea' },
    { number: counters.clients, label: 'Happy Clients', icon: 'fas fa-users', suffix: '+', color: '#f093fb' },
    { number: counters.years, label: 'Years Experience', icon: 'fas fa-calendar-alt', suffix: '+', color: '#4facfe' },
    { number: counters.awards, label: 'Awards Won', icon: 'fas fa-trophy', suffix: '+', color: '#43e97b' }
  ];

  return (
    <>
      <style jsx>{`
        @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css');
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
        @import url('https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css');
        
        <link 
              href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" 
  rel="stylesheet" 
/>
<link 
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" 
  rel="stylesheet" 
/>
        * {
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
          box-sizing: border-box;
        }

        .about-section {
          min-height: 100vh;
          padding: 120px 0;
          background: #0a0a0f;
          position: relative;
          overflow: hidden;
        }

        /* Advanced Background Effects */
        .bg-effects {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 0;
        }

        .neural-network {
          position: absolute;
          width: 100%;
          height: 100%;
          opacity: 0.1;
        }

        .neural-dot {
          position: absolute;
          width: 4px;
          height: 4px;
          background: #667eea;
          border-radius: 50%;
          animation: pulse 3s infinite ease-in-out;
        }

        .neural-line {
          position: absolute;
          height: 1px;
          background: linear-gradient(90deg, transparent, #667eea, transparent);
          animation: flow 4s infinite ease-in-out;
        }

        .floating-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(2px);
          animation: float 8s infinite ease-in-out;
        }

        .orb-1 {
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(102, 126, 234, 0.1), transparent);
          top: 10%;
          left: -10%;
          animation-delay: 0s;
        }

        .orb-2 {
          width: 200px;
          height: 200px;
          background: radial-gradient(circle, rgba(240, 147, 251, 0.1), transparent);
          top: 60%;
          right: -5%;
          animation-delay: 2s;
        }

        .orb-3 {
          width: 150px;
          height: 150px;
          background: radial-gradient(circle, rgba(79, 172, 254, 0.1), transparent);
          bottom: 20%;
          left: 20%;
          animation-delay: 4s;
        }

        /* Parallax Mouse Effect */
        .parallax-layer {
          position: absolute;
          width: 100%;
          height: 100%;
          transform: translate3d(${mousePosition.x * 10}px, ${mousePosition.y * 10}px, 0);
          transition: transform 0.1s ease-out;
        }

        /* Content Wrapper */
        .content-wrapper {
          position: relative;
          z-index: 2;
        }

        /* Hero Title */
        .hero-title {
          text-align: center;
          margin-bottom: 100px;
          transform: ${isVisible ? 'translateY(0)' : 'translateY(100px)'};
          opacity: ${isVisible ? '1' : '0'};
          transition: all 1.5s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .hero-title h1 {
          font-size: clamp(3rem, 8vw, 6rem);
          font-weight: 900;
          background: linear-gradient(135deg, #ffffff 0%, #667eea 50%, #f093fb 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 30px;
          line-height: 1.1;
          letter-spacing: -2px;
        }

        .hero-subtitle {
          font-size: 1.4rem;
          color: rgba(255, 255, 255, 0.7);
          max-width: 800px;
          margin: 0 auto;
          font-weight: 400;
          line-height: 1.6;
        }

        .glitch-effect {
          position: relative;
          display: inline-block;
        }

        .glitch-effect::before,
        .glitch-effect::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .glitch-effect::before {
          animation: glitch-1 2s infinite;
          color: #667eea;
          z-index: -1;
        }

        .glitch-effect::after {
          animation: glitch-2 2s infinite;
          color: #f093fb;
          z-index: -2;
        }

        /* Main Content Grid */
        .main-content {
          transform: ${isVisible ? 'translateY(0)' : 'translateY(80px)'};
          opacity: ${isVisible ? '1' : '0'};
          transition: all 1.5s cubic-bezier(0.16, 1, 0.3, 1) 0.3s;
          margin-bottom: 120px;
        }

        .content-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 30px;
          padding: 60px;
          position: relative;
          overflow: hidden;
          transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .content-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transform: translateX(-100%);
          animation: shimmer 3s infinite;
        }

        .content-card:hover {
          transform: translateY(-20px);
          border-color: rgba(255, 255, 255, 0.2);
          box-shadow: 0 40px 80px rgba(0, 0, 0, 0.3);
        }

        .content-title {
          font-size: 2.5rem;
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 30px;
          position: relative;
        }

        .content-title::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 0;
          width: 80px;
          height: 4px;
          background: linear-gradient(135deg, #667eea, #f093fb);
          border-radius: 2px;
        }

        .content-text {
          font-size: 1.1rem;
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.8;
          margin-bottom: 40px;
        }

        .feature-list {
          list-style: none;
          padding: 0;
        }

        .feature-item {
          display: flex;
          align-items: center;
          padding: 15px 0;
          color: rgba(255, 255, 255, 0.9);
          font-weight: 500;
          transform: translateX(-30px);
          opacity: 0;
          animation: slideInLeft 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .feature-item:nth-child(1) { animation-delay: 1s; }
        .feature-item:nth-child(2) { animation-delay: 1.2s; }
        .feature-item:nth-child(3) { animation-delay: 1.4s; }
        .feature-item:nth-child(4) { animation-delay: 1.6s; }

        .feature-icon {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: linear-gradient(135deg, #43e97b, #38f9d7);
          margin-right: 20px;
          position: relative;
          box-shadow: 0 0 20px rgba(67, 233, 123, 0.5);
        }

        .feature-icon::before {
          content: '';
          position: absolute;
          top: -4px;
          left: -4px;
          right: -4px;
          bottom: -4px;
          border: 2px solid rgba(67, 233, 123, 0.3);
          border-radius: 50%;
          animation: ping 2s infinite;
        }

        /* 3D Image Container */
        .image-container {
          position: relative;
          perspective: 1000px;
          transform-style: preserve-3d;
        }

        .hero-image {
          width: 100%;
          height: 500px;
          border-radius: 30px;
          overflow: hidden;
          position: relative;
          transform: rotateY(0deg) rotateX(0deg);
          transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 
            0 20px 40px rgba(0, 0, 0, 0.3),
            0 0 0 1px rgba(255, 255, 255, 0.1);
        }

        .hero-image:hover {
          transform: rotateY(5deg) rotateX(5deg) translateZ(20px);
          box-shadow: 
            0 40px 80px rgba(0, 0, 0, 0.4),
            0 0 0 1px rgba(255, 255, 255, 0.2);
        }

        .hero-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .hero-image:hover img {
          transform: scale(1.1);
        }

        .image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, 
            rgba(102, 126, 234, 0.1) 0%, 
            rgba(240, 147, 251, 0.1) 100%);
          opacity: 0;
          transition: opacity 0.6s ease;
        }

        .hero-image:hover .image-overlay {
          opacity: 1;
        }

        /* Stats Grid */
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
          margin-bottom: 120px;
          transform: ${isVisible ? 'translateY(0)' : 'translateY(80px)'};
          opacity: ${isVisible ? '1' : '0'};
          transition: all 1.5s cubic-bezier(0.16, 1, 0.3, 1) 0.6s;
        }

        .stat-card {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 25px;
          padding: 40px 30px;
          text-align: center;
          position: relative;
          overflow: hidden;
          transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: pointer;
        }

        .stat-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, 
            transparent, 
            rgba(255, 255, 255, 0.1), 
            transparent);
          transition: left 0.8s;
        }

        .stat-card:hover::before {
          left: 100%;
        }

        .stat-card:hover {
          transform: translateY(-20px) scale(1.05);
          border-color: var(--card-color);
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.3);
        }

        .stat-icon {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: var(--card-color);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 25px;
          font-size: 1.8rem;
          transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        .stat-card:hover .stat-icon {
          transform: rotateY(360deg) scale(1.1);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
        }

        .stat-number {
          font-size: 3.5rem;
          font-weight: 900;
          color: #ffffff;
          margin-bottom: 15px;
          line-height: 1;
          background: linear-gradient(135deg, var(--card-color), #ffffff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .stat-label {
          font-size: 1rem;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.7);
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        /* Values Grid */
        .values-section {
          transform: ${isVisible ? 'translateY(0)' : 'translateY(80px)'};
          opacity: ${isVisible ? '1' : '0'};
          transition: all 1.5s cubic-bezier(0.16, 1, 0.3, 1) 0.9s;
        }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 40px;
        }

        .value-card {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 30px;
          padding: 50px 40px;
          position: relative;
          overflow: hidden;
          transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: pointer;
        }

        .value-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: var(--card-gradient);
          transform: scaleX(0);
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .value-card:hover::before {
          transform: scaleX(1);
        }

        .value-card:hover {
          transform: translateY(-15px) rotateX(5deg);
          border-color: rgba(255, 255, 255, 0.2);
          box-shadow: 0 40px 80px rgba(0, 0, 0, 0.3);
        }

        .value-icon {
          width: 100px;
          height: 100px;
          border-radius: 25px;
          background: var(--card-gradient);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2.5rem;
          margin-bottom: 30px;
          transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 
            0 20px 40px rgba(0, 0, 0, 0.3),
            0 0 40px var(--glow-color);
        }

        .value-card:hover .value-icon {
          transform: rotateY(360deg) scale(1.1);
          box-shadow: 
            0 30px 60px rgba(0, 0, 0, 0.4),
            0 0 60px var(--glow-color);
        }

        .value-title {
          font-size: 1.8rem;
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 20px;
          line-height: 1.2;
        }

        .value-description {
          font-size: 1rem;
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.6;
          font-weight: 400;
        }

        /* Animations */
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
          }
          33% {
            transform: translate(30px, -30px) rotate(120deg);
          }
          66% {
            transform: translate(-20px, 20px) rotate(240deg);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 0.1;
            transform: scale(1);
          }
          50% {
            opacity: 0.3;
            transform: scale(1.2);
          }
        }

        @keyframes flow {
          0% {
            transform: translateX(-100%);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateX(100%);
            opacity: 0;
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes slideInLeft {
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes ping {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }

        @keyframes glitch-1 {
          0%, 14%, 15%, 49%, 50%, 99%, 100% {
            transform: translate(0);
          }
          15%, 49% {
            transform: translate(-2px, 0);
          }
        }

        @keyframes glitch-2 {
          0%, 20%, 21%, 62%, 63%, 99%, 100% {
            transform: translate(0);
          }
          21%, 62% {
            transform: translate(2px, 0);
          }
        }

        /* Responsive Design */
        @media (max-width: 1200px) {
          .values-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }
        }

        @media (max-width: 992px) {
          .hero-title h1 {
            font-size: clamp(2.5rem, 6vw, 4rem);
          }
          
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 25px;
          }
          
          .content-card {
            padding: 40px 30px;
          }
          
          .hero-image {
            height: 400px;
            margin-bottom: 40px;
          }
        }

        @media (max-width: 768px) {
          .about-section {
            padding: 80px 0;
          }
          
          .stats-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          
          .content-card {
            padding: 30px 25px;
          }
          
          .value-card {
            padding: 35px 25px;
          }
          
          .hero-image {
            height: 300px;
          }
        }

        @media (max-width: 576px) {
          .hero-title {
            margin-bottom: 60px;
          }
          
          .hero-subtitle {
            font-size: 1.1rem;
          }
          
          .stat-number {
            font-size: 2.5rem;
          }
          
          .content-title {
            font-size: 2rem;
          }
        }
      `}</style>

      <section className="about-section" ref={sectionRef}>
        {/* Advanced Background Effects */}
        <div className="bg-effects">
          <div className="parallax-layer">
            <div className="floating-orb orb-1"></div>
            <div className="floating-orb orb-2"></div>
            <div className="floating-orb orb-3"></div>
          </div>
          
          <div className="neural-network">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="neural-dot"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`
                }}
              />
            ))}
            {[...Array(10)].map((_, i) => (
              <div
                key={i}
                className="neural-line"
                style={{
                  left: `${Math.random() * 80}%`,
                  top: `${Math.random() * 100}%`,
                  width: `${20 + Math.random() * 200}px`,
                  animationDelay: `${Math.random() * 4}s`
                }}
              />
            ))}
          </div>
        </div>

        <div className="container content-wrapper">
          {/* Hero Title */}
          <div className="hero-title">
            <h1 className="glitch-effect" data-text="About BuildCorp">
              About BuildCorp
            </h1>
            <p className="hero-subtitle">
              We are a leading construction company committed to excellence, 
              innovation, and delivering exceptional results that exceed expectations.
            </p>
          </div>

          {/* Main Content */}
          <div className="row main-content align-items-center">
            <div className="col-lg-6">
              <div className="image-container">
                <div className="hero-image">
                  <img 
                    src="/src\assets\about-img.jpg" 
                    alt="Professional Construction Team"
                  />
                  <div className="image-overlay"></div>
                </div>
              </div>
            </div>
            
            <div className="col-lg-6">
              <div className="content-card">
                <h2 className="content-title">Two Decades of Excellence</h2>
                <p className="content-text">
                  Founded in 2003, BuildCorp has grown from a small local contractor 
                  to a trusted name in construction. We specialize in residential, 
                  commercial, and industrial projects, bringing innovation and 
                  craftsmanship to every build.
                </p>
                <p className="content-text">
                  Our team of skilled professionals is dedicated to turning your vision 
                  into reality while maintaining the highest standards of quality, safety, 
                  and customer service.
                </p>
                
                <ul className="feature-list">
                  <li className="feature-item">
                    <div className="feature-icon"></div>
                    Licensed & Insured Professionals
                  </li>
                  <li className="feature-item">
                    <div className="feature-icon"></div>
                    24/7 Support & Emergency Response
                  </li>
                  <li className="feature-item">
                    <div className="feature-icon"></div>
                    Certified Quality Management
                  </li>
                  <li className="feature-item">
                    <div className="feature-icon"></div>
                    Lifetime Warranty Coverage
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          {/* <div className="stats-grid">
            {stats.map((stat, index) => (
              <div 
                className="stat-card" 
                key={index}
                style={{'--card-color': stat.color}}
              >
                <div className="stat-icon">
                  <i className={stat.icon}></i>
                </div>
                <div className="stat-number">{stat.number}{stat.suffix}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div> */}

          {/* Values Section */}
          <div className="values-section">
            <div className="values-grid">
              {values.map((value, index) => (
                <div 
                  className="value-card" 
                  key={index}
                  style={{
                    '--card-gradient': value.gradient,
                    '--glow-color': value.glowColor + '30'
                  }}
                >
                  <div className="value-icon">
                    <i className={value.icon}></i>
                  </div>
                  <h3 className="value-title">{value.title}</h3>
                  <p className="value-description">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;