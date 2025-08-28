import React, { useState, useEffect, useRef, useCallback } from 'react';
import service1 from '../assets/services1.jpg';
import service2 from '../assets/services2.jpg';
import service3 from '../assets/services3.jpg';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeCard, setActiveCard] = useState(null);
  const [particles, setParticles] = useState([]);
  const sectionRef = useRef(null);
  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  // Initialize particles and animations
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    
    // Initialize particles
    const particleArray = [];
    for (let i = 0; i < 50; i++) {
      particleArray.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.1,
      });
    }
    setParticles(particleArray);

    // Mouse tracking
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
      document.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  // Animate particles
  const animateParticles = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((particle, index) => {
      // Update position
      particle.x += particle.speedX;
      particle.y += particle.speedY;

      // Wrap around screen
      if (particle.x > canvas.width) particle.x = 0;
      if (particle.x < 0) particle.x = canvas.width;
      if (particle.y > canvas.height) particle.y = 0;
      if (particle.y < 0) particle.y = canvas.height;

      // Draw particle
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(102, 126, 234, ${particle.opacity})`;
      ctx.fill();

      // Draw connections
      particles.forEach((otherParticle, otherIndex) => {
        if (index !== otherIndex) {
          const distance = Math.sqrt(
            Math.pow(particle.x - otherParticle.x, 2) +
            Math.pow(particle.y - otherParticle.y, 2)
          );

          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = `rgba(102, 126, 234, ${0.1 * (1 - distance / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      });
    });

    animationRef.current = requestAnimationFrame(animateParticles);
  }, [particles]);

  useEffect(() => {
    if (particles.length > 0) {
      animateParticles();
    }
  }, [particles, animateParticles]);

  const services = [
    {
      icon: 'fas fa-home',
      title: 'Residential Construction',
      description: 'Custom homes, luxury estates, and residential developments crafted with precision and attention to every detail.',
      image: service1,   // ✅ imported image      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      glowColor: '#667eea',
      features: ['Smart Home Integration', 'Eco-Friendly Materials', 'Custom Architecture', 'Premium Finishes'],
      stats: { projects: '150+', satisfaction: '99%' }
    },
    {
      icon: 'fas fa-building',
      title: 'Commercial Construction',
      description: 'Modern office buildings, retail spaces, and commercial complexes built to meet your business specifications.',
      image: service2,   
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      glowColor: '#f093fb',
      features: ['Modern Architecture', 'Energy Efficient', 'Smart Building Tech', 'Flexible Spaces'],
      stats: { projects: '200+', satisfaction: '98%' }
    },
    {
      icon: 'fas fa-industry',
      title: 'Industrial Projects',
      description: 'Heavy-duty warehouses, manufacturing facilities, and industrial complexes with specialized engineering.',
      image: service3,   
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      glowColor: '#4facfe',
      features: ['Heavy Machinery Support', 'Safety Compliance', 'Efficient Logistics', 'Scalable Design'],
      stats: { projects: '75+', satisfaction: '97%' }
    },
    // {
    //   icon: 'fas fa-tools',
    //   title: 'Renovation & Remodeling',
    //   description: 'Transform existing spaces into modern, functional environments with our expert renovation services.',
    //   image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg',
    //   gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    //   glowColor: '#43e97b',
    //   features: ['Space Optimization', 'Modern Upgrades', 'Minimal Disruption', 'Value Enhancement'],
    //   stats: { projects: '300+', satisfaction: '96%' }
    // },
    // {
    //   icon: 'fas fa-bolt',
    //   title: 'Smart Infrastructure',
    //   description: 'Cutting-edge IoT integration and smart building solutions for the future of construction.',
    //   image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg',
    //   gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    //   glowColor: '#fa709a',
    //   features: ['IoT Integration', 'AI Monitoring', 'Energy Management', 'Predictive Maintenance'],
    //   stats: { projects: '50+', satisfaction: '100%' }
    // },
    // {
    //   icon: 'fas fa-leaf',
    //   title: 'Sustainable Building',
    //   description: 'Green construction solutions focusing on environmental responsibility and energy efficiency.',
    //   image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg',
    //   gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
    //   glowColor: '#a8edea',
    //   features: ['LEED Certified', 'Solar Integration', 'Water Conservation', 'Waste Reduction'],
    //   stats: { projects: '80+', satisfaction: '98%' }
    // }
  ];

  return (
    <>
      <style jsx>{`
        @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css');
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
        @import url('https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css');
        
        * {
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
          box-sizing: border-box;
        }

        .services-section {
          min-height: 100vh;
          padding: 120px 0;
          background: #0a0a0f;
          position: relative;
          overflow: hidden;
        }

        /* Particle Canvas */
        .particle-canvas {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
          opacity: 0.3;
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

        .gradient-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(60px);
          animation: morphOrb 12s infinite ease-in-out;
        }

        .orb-1 {
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(102, 126, 234, 0.15), transparent);
          top: -10%;
          left: -10%;
          animation-delay: 0s;
        }

        .orb-2 {
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(240, 147, 251, 0.12), transparent);
          top: 50%;
          right: -5%;
          animation-delay: 4s;
        }

        .orb-3 {
          width: 250px;
          height: 250px;
          background: radial-gradient(circle, rgba(79, 172, 254, 0.1), transparent);
          bottom: 10%;
          left: 30%;
          animation-delay: 8s;
        }

        /* Grid Pattern Background */
        .grid-pattern {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: 
            linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
          background-size: 50px 50px;
          animation: gridPulse 4s infinite ease-in-out;
        }

        /* Parallax Mouse Effect */
        .parallax-layer {
          position: absolute;
          width: 100%;
          height: 100%;
          transform: translate3d(${mousePosition.x * 15}px, ${mousePosition.y * 15}px, 0);
          transition: transform 0.1s ease-out;
        }

        /* Content Wrapper */
        .content-wrapper {
          position: relative;
          z-index: 2;
        }

        /* Hero Section */
        .hero-header {
          text-align: center;
          margin-bottom: 120px;
          transform: ${isVisible ? 'translateY(0)' : 'translateY(100px)'};
          opacity: ${isVisible ? '1' : '0'};
          transition: all 1.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .hero-header h1 {
          font-size: clamp(3rem, 8vw, 6rem);
          font-weight: 900;
          background: linear-gradient(135deg, #ffffff 0%, #667eea 30%, #f093fb 70%, #ffffff 100%);
          background-size: 400% 400%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradientFlow 6s ease-in-out infinite;
          margin-bottom: 30px;
          line-height: 1.1;
          letter-spacing: -2px;
          position: relative;
        }

        .hero-header h1::after {
          content: '';
          position: absolute;
          bottom: -20px;
          left: 50%;
          width: 120px;
          height: 6px;
          background: linear-gradient(135deg, #667eea, #f093fb);
          transform: translateX(-50%);
          border-radius: 3px;
          animation: pulseGlow 3s infinite;
        }

        .hero-subtitle {
          font-size: 1.4rem;
          color: rgba(255, 255, 255, 0.8);
          max-width: 900px;
          margin: 0 auto;
          font-weight: 400;
          line-height: 1.7;
          animation: fadeInUp 2s cubic-bezier(0.16, 1, 0.3, 1) 0.5s both;
        }

        /* Services Grid */
        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
          transform: ${isVisible ? 'translateY(0)' : 'translateY(80px)'};
          opacity: ${isVisible ? '1' : '0'};
          transition: all 1.8s cubic-bezier(0.16, 1, 0.3, 1) 0.6s;
        }

        .service-card {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 30px;
          overflow: hidden;
          position: relative;
          transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: pointer;
          transform-style: preserve-3d;
          perspective: 1000px;
          height: 100%;
        }

        .service-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: var(--card-gradient);
          transform: scaleX(0);
          transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
          z-index: 3;
        }

        .service-card:hover::before {
          transform: scaleX(1);
        }

        .service-card:hover {
          transform: translateY(-30px) rotateX(5deg) rotateY(3deg);
          border-color: rgba(255, 255, 255, 0.2);
          box-shadow: 
            0 50px 100px rgba(0, 0, 0, 0.4),
            0 0 80px var(--glow-color);
        }

        /* Card Content */
        .card-header {
          position: relative;
          height: 300px;
          overflow: hidden;
        }

        .card-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: all 1s cubic-bezier(0.16, 1, 0.3, 1);
          filter: brightness(0.7) contrast(1.2) saturate(1.1);
        }

        .service-card:hover .card-image {
          transform: scale(1.2) rotate(3deg);
          filter: brightness(1) contrast(1.3) saturate(1.3);
        }

        .image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, 
            rgba(0, 0, 0, 0.6) 0%, 
            rgba(0, 0, 0, 0.3) 50%,
            rgba(0, 0, 0, 0.8) 100%);
          transition: all 0.8s ease;
        }

        .service-card:hover .image-overlay {
          background: linear-gradient(135deg, 
            rgba(0, 0, 0, 0.2) 0%, 
            rgba(0, 0, 0, 0.1) 50%,
            rgba(0, 0, 0, 0.4) 100%);
        }

        .floating-icon {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100px;
          height: 100px;
          background: var(--card-gradient);
          border-radius: 25px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2.5rem;
          color: white;
          transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 
            0 20px 40px rgba(0, 0, 0, 0.3),
            0 0 60px var(--glow-color);
          z-index: 2;
        }

        .service-card:hover .floating-icon {
          transform: translate(-50%, -50%) scale(1.2) rotateY(360deg);
          box-shadow: 
            0 30px 60px rgba(0, 0, 0, 0.4),
            0 0 100px var(--glow-color);
        }

        .card-stats {
          position: absolute;
          top: 20px;
          right: 20px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          z-index: 2;
        }

        .stat-badge {
          background: rgba(255, 255, 255, 0.9);
          color: #0a0a0f;
          padding: 8px 12px;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 700;
          backdrop-filter: blur(10px);
          transform: translateX(100px);
          opacity: 0;
          transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .service-card:hover .stat-badge {
          transform: translateX(0);
          opacity: 1;
        }

        .stat-badge:nth-child(1) { transition-delay: 0.1s; }
        .stat-badge:nth-child(2) { transition-delay: 0.2s; }

        .card-body {
          padding: 40px 30px;
          position: relative;
        }

        .card-title {
          font-size: 1.8rem;
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 20px;
          line-height: 1.2;
          transition: all 0.6s ease;
        }

        .service-card:hover .card-title {
          color: var(--glow-color);
          text-shadow: 0 0 20px var(--glow-color);
        }

        .card-description {
          color: rgba(255, 255, 255, 0.8);
          font-size: 1rem;
          line-height: 1.7;
          margin-bottom: 30px;
          transition: all 0.6s ease;
        }

        .service-card:hover .card-description {
          color: rgba(255, 255, 255, 0.95);
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 15px;
          margin-top: 25px;
        }

        .feature-item {
          display: flex;
          align-items: center;
          padding: 12px 16px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 20px;
          font-size: 0.9rem;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.9);
          transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
          transform: translateY(20px);
          opacity: 0;
        }

        .service-card:hover .feature-item {
          transform: translateY(0);
          opacity: 1;
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.2);
        }

        .feature-item:nth-child(1) { transition-delay: 0.1s; }
        .feature-item:nth-child(2) { transition-delay: 0.2s; }
        .feature-item:nth-child(3) { transition-delay: 0.3s; }
        .feature-item:nth-child(4) { transition-delay: 0.4s; }

        .feature-item i {
          color: var(--glow-color);
          margin-right: 10px;
          font-size: 0.8rem;
          filter: drop-shadow(0 0 5px var(--glow-color));
        }

        .feature-item:hover {
          transform: translateY(-3px) scale(1.02);
          background: rgba(255, 255, 255, 0.15);
        }

        /* Card Number */
        .card-number {
          position: absolute;
          top: 20px;
          left: 20px;
          width: 50px;
          height: 50px;
          background: var(--card-gradient);
          border-radius: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: 900;
          font-size: 1.3rem;
          z-index: 2;
          transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        .service-card:hover .card-number {
          transform: scale(1.1) rotate(360deg);
          box-shadow: 
            0 15px 40px rgba(0, 0, 0, 0.4),
            0 0 30px var(--glow-color);
        }

        /* Morphing Animation */
        .morphing-bg {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: var(--card-gradient);
          opacity: 0;
          transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
          border-radius: 30px;
        }

        .service-card:hover .morphing-bg {
          opacity: 0.05;
          transform: scale(1.02);
        }

        /* Animations */
        @keyframes morphOrb {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            border-radius: 50%;
          }
          25% {
            transform: translate(50px, -30px) scale(1.2);
            border-radius: 60% 40% 50% 70%;
          }
          50% {
            transform: translate(-30px, 40px) scale(0.8);
            border-radius: 70% 30% 60% 40%;
          }
          75% {
            transform: translate(30px, 20px) scale(1.1);
            border-radius: 40% 60% 70% 30%;
          }
        }

        @keyframes gridPulse {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.1;
          }
        }

        @keyframes gradientFlow {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes pulseGlow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(102, 126, 234, 0.5);
            transform: translateX(-50%) scale(1);
          }
          50% {
            box-shadow: 0 0 40px rgba(240, 147, 251, 0.8);
            transform: translateX(-50%) scale(1.1);
          }
        }

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

        /* Responsive Design */
        @media (max-width: 1200px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 35px;
          }
        }

        @media (max-width: 992px) {
          .services-section {
            padding: 80px 0;
          }

          .hero-header {
            margin-bottom: 80px;
          }

          .hero-header h1 {
            font-size: clamp(2.5rem, 6vw, 4rem);
          }

          .services-grid {
            gap: 30px;
          }

          .card-header {
            height: 250px;
          }

          .floating-icon {
            width: 80px;
            height: 80px;
            font-size: 2rem;
          }
        }

        @media (max-width: 768px) {
          .services-grid {
            grid-template-columns: 1fr;
            gap: 25px;
          }

          .card-body {
            padding: 30px 25px;
          }

          .features-grid {
            grid-template-columns: 1fr;
            gap: 12px;
          }

          .card-stats {
            top: 15px;
            right: 15px;
            gap: 8px;
          }

          .card-number {
            width: 40px;
            height: 40px;
            font-size: 1.1rem;
          }
        }

        @media (max-width: 576px) {
          .services-section {
            padding: 60px 0;
          }

          .hero-header {
            margin-bottom: 60px;
          }

          .hero-subtitle {
            font-size: 1.1rem;
          }

          .card-header {
            height: 200px;
          }

          .floating-icon {
            width: 70px;
            height: 70px;
            font-size: 1.8rem;
          }

          .card-title {
            font-size: 1.5rem;
          }
        }
      `}</style>

      <section className="services-section" ref={sectionRef}>
        {/* Particle Canvas */}
        <canvas ref={canvasRef} className="particle-canvas" />

        {/* Background Effects */}
        <div className="bg-effects">
          <div className="grid-pattern" />
          <div className="parallax-layer">
            <div className="gradient-orb orb-1" />
            <div className="gradient-orb orb-2" />
            <div className="gradient-orb orb-3" />
          </div>
        </div>

        <div className="container content-wrapper">
          {/* Hero Header */}
          <div className="hero-header">
            <h1>Our Premium Services</h1>
            <p className="hero-subtitle">
              Comprehensive construction solutions tailored to exceed your expectations, 
              from innovative design concepts to flawless execution with cutting-edge technology.
            </p>
          </div>

          {/* Services Grid */}
          <div className="services-grid">
            {services.map((service, index) => (
              <div 
                className="service-card" 
                key={index}
                style={{
                  '--card-gradient': service.gradient,
                  '--glow-color': service.glowColor + '50'
                }}
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
              >
                {/* Morphing Background */}
                <div className="morphing-bg" />
                
                {/* Card Number */}
                <div className="card-number">{String(index + 1).padStart(2, '0')}</div>

                {/* Card Header */}
                <div className="card-header">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="card-image"
                  />
                  <div className="image-overlay" />
                  
                  {/* Floating Icon */}
                  <div className="floating-icon">
                    <i className={service.icon}></i>
                  </div>
                  
                  {/* Stats */}
                  <div className="card-stats">
                    <div className="stat-badge">{service.stats.projects} Projects</div>
                    <div className="stat-badge">{service.stats.satisfaction} Satisfaction</div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="card-body">
                  <h3 className="card-title">{service.title}</h3>
                  <p className="card-description">{service.description}</p>
                  
                  {/* Features Grid */}
                  <div className="features-grid">
                    {service.features.map((feature, idx) => (
                      <div className="feature-item" key={idx}>
                        <i className="fas fa-check-circle"></i>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;