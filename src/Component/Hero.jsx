import React, { useState, useEffect, useRef } from 'react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const heroRef = useRef(null);
  const [counters, setCounters] = useState({ projects: 0, clients: 0, years: 0, awards: 0 });

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    // Auto slide for background
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 4000);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      clearInterval(slideInterval);
    };
  }, []);
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
          setMousePosition({ x, y })
        }
      };
  
      document.addEventListener('mousemove', handleMouseMove);
      
      return () => {
        clearTimeout(timer);
        clearTimeout(counterTimer);
        document.removeEventListener('mousemove', handleMouseMove);
      };
    }, []);
    const stats = [
    { number: counters.projects, label: 'Projects Completed', icon: 'fas fa-building', suffix: '+', color: '#667eea' },
    { number: counters.clients, label: 'Happy Clients', icon: 'fas fa-users', suffix: '+', color: '#f093fb' },
    { number: counters.years, label: 'Years Experience', icon: 'fas fa-calendar-alt', suffix: '+', color: '#4facfe' },
  
  ];

  return (
    <>
    <style jsx>{`
.stats-grid {
  display: grid !important;
  /* grid-template-columns: 1fr 1fr;  */
  gap: 30px;
  margin-bottom: 100px;
  width: 100%;
  max-width: 100%; /* Prevents bootstrap overflow */
  box-sizing: border-box;
  /* transform: translateY(0); */
  opacity: 1;
  transition: all 1.5s cubic-bezier(0.16, 1, 0.3, 1) 0.8s;
}


.stat-card {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 25px;
  padding: 40px 50px;
  text-align: center;
  position: relative;
  width: 200px;
  overflow: hidden;
  transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  cursor: pointer;
  margin-top:100px;
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

/* Responsive adjustments */
@media (max-width: 768px) {
  .stats-grid {
    gap: 20px;
    margin-bottom: 80px;
  }
  
  .stat-card {
    padding: 30px 20px;
  }
  
  .stat-icon {
    width: 60px;
    height: 60px;
    font-size: 1.5rem;
    margin-bottom: 20px;
  }
  
  .stat-number {
    font-size: 2.5rem;
  }
}

@media (max-width: 480px) {
  .stats-grid {
    grid-template-columns: 1fr;
    gap: 8px !important; /* reduced vertical gap */
    padding:50px;

  }

  .stat-card {
    margin: 20px 16px !important; /* tighter padding inside card */
  }

  .stat-icon {
    width: 50px;
    height: 50px;
    font-size: 1.2rem;
    margin-bottom: 10px !important; /* reduce bottom space below icon */
  }

  .stat-number {
    font-size: 2rem;
    margin-bottom: 5px !important;
  }

  .stat-label {
    font-size: 0.85rem;
  }
}



/* Animation classes */
.stats-grid.animate-in {
  transform: translateY(0);
  opacity: 1;
}

.stats-grid.animate-out {
  transform: translateY(80px);
  opacity: 0;
}    `} </style>
    <div 
      ref={heroRef}
      className="position-relative overflow-hidden"
      style={{
        minHeight: '100vh',
        background: 'radial-gradient(ellipse at top left, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)',
        overflowX: 'hidden'
      }}
    >
      {/* Advanced Animated Background */}
      <div className="position-absolute w-100 h-100" style={{ zIndex: 1 }}>
        {/* Mouse-Following Gradient */}
        <div 
          className="position-absolute rounded-circle"
          style={{
            width: '1000px',
            height: '1000px',
            background: `radial-gradient(circle, rgba(102, 126, 234, ${0.08 + Math.sin(Date.now() / 2000) * 0.03}) 0%, transparent 70%)`,
            left: `${mousePosition.x - 50}%`,
            top: `${mousePosition.y - 50}%`,
            transform: `translate(-50%, -50%) scale(${1 + Math.sin(Date.now() / 1000) * 0.1})`,
            transition: 'all 0.6s cubic-bezier(0.25, 0.8, 0.25, 1)',
            filter: 'blur(100px)',
            animation: 'morphingGlow 8s ease-in-out infinite'
          }}
        />

        {/* Floating Geometric Shapes */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="position-absolute"
            style={{
              width: `${Math.random() * 60 + 20}px`,
              height: `${Math.random() * 60 + 20}px`,
              background: `linear-gradient(${Math.random() * 360}deg, rgba(102, 126, 234, 0.1), rgba(240, 147, 251, 0.1))`,
              borderRadius: Math.random() > 0.5 ? '50%' : '20%',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `floatComplex ${8 + Math.random() * 10}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
              filter: 'blur(2px)',
              transform: `rotate(${Math.random() * 360}deg)`
            }}
          />
        ))}

        {/* Animated Grid Pattern */}
        <div 
          className="position-absolute w-100 h-100 opacity-25"
          style={{
            backgroundImage: `
              linear-gradient(rgba(102, 126, 234, 0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(102, 126, 234, 0.03) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            animation: 'gridMove 20s linear infinite'
          }}
        />
      </div>

      {/* Main Content */}
      <div className="container-fluid h-100 position-relative" style={{ zIndex: 2 }}>
        <div className="row min-vh-100 align-items-center py-0 py-md-5">
          
          {/* Left Content Section */}
          <div className="col-lg-6 col-md-12 pe-lg-5 px-3 px-md-4" style={{ paddingTop: '6rem' }}>
            <div className={`${isVisible ? 'animate-slideInLeft' : 'opacity-0'}`}>
              
              {/* Main Headline - Optimized for Mobile */}
              <h1 
                className="fw-bold mb-3 mb-md-4"
                style={{
background: 'linear-gradient(135deg, #ffffff 0%, #667eea 50%, #f093fb 100%)',                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  animation: 'textShimmer 4s ease-in-out infinite',
                  textShadow: '0 0 30px rgba(102, 126, 234, 0.3)',
                  fontSize: 'clamp(1.8rem, 8vw, 4rem)',
                  lineHeight: '1.1'
                }}
              >
                Building Dreams
                <br />
                <span 
                  className="position-relative d-inline-block mt-2"
                  style={{
                  background: 'linear-gradient(135deg,#d9d9d9  0%, #404040 50% ,#bb3f3f,100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Into Reality
                  <div 
                    className="position-absolute bottom-0 start-0"
                    style={{
                      width: '100%',
                      height: '3px',
                      background: 'linear-gradient(135deg, #f093fb, #4facfe)',
                      borderRadius: '2px',
                      animation: 'underlineExpand 2s ease-out'
                    }}
                  />
                </span>
              </h1>

              {/* Description */}
              <p 
                className="mb-4 text-light opacity-75"
                style={{ 
                  fontSize: 'clamp(1rem, 3vw, 1.25rem)',
                  lineHeight: '1.7',
                  maxWidth: '500px',
                  animation: 'fadeInUp 1s ease-out 0.5s both'
                }}
              >
                Transform your vision into extraordinary structures with our cutting-edge construction solutions and unparalleled craftsmanship.
              </p>


              {/* Action Buttons */}
              <div 
                className="d-flex flex-column flex-sm-row gap-3"
                style={{ animation: 'fadeInUp 1s ease-out 0.9s both' }}
              >
                <button 
                  className="btn px-4 px-lg-5 py-2 py-lg-3 rounded-pill fw-semibold position-relative overflow-hidden"
                  style={{
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    border: 'none',
                    color: 'white',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    boxShadow: '0 15px 35px rgba(102, 126, 234, 0.4)',
                    transition: 'all 0.4s ease',
                    fontSize: 'clamp(0.9rem, 2vw, 1rem)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-3px) scale(1.05)';
                    e.target.style.boxShadow = '0 20px 40px rgba(102, 126, 234, 0.6)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0) scale(1)';
                    e.target.style.boxShadow = '0 15px 35px rgba(102, 126, 234, 0.4)';
                  }}
                >
                  <span className="me-2">🚀</span>
                  Start Your Project
                  <div 
                    className="position-absolute top-0 start-0 w-100 h-100"
                    style={{
                      background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.3), transparent 70%)',
                      transform: 'translateX(-100%)',
                      animation: 'shimmer 3s ease-in-out infinite'
                    }}
                  />
                </button>

                <button 
                  className="btn px-4 px-lg-5 py-2 py-lg-3 rounded-pill fw-semibold"
                  style={{
                    background: 'transparent',
                    border: '2px solid rgba(240, 147, 251, 0.5)',
                    color: 'white',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    backdropFilter: 'blur(10px)',
                    transition: 'all 0.4s ease',
                    fontSize: 'clamp(0.9rem, 2vw, 1rem)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)';
                    e.target.style.borderColor = 'transparent';
                    e.target.style.transform = 'translateY(-3px) scale(1.05)';
                    e.target.style.boxShadow = '0 15px 35px rgba(240, 147, 251, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'transparent';
                    e.target.style.borderColor = 'rgba(240, 147, 251, 0.5)';
                    e.target.style.transform = 'translateY(0) scale(1)';
                    e.target.style.boxShadow = 'none';
                  }}
                >
                  <span className="me-2">📞</span>
                  Get Consultation
                </button>
              </div>
            </div>
          </div>

          {/* Right Stats Section */}
          <div className="col-lg-6 col-md-12 mt-4 mt-lg-0 px-3 px-md-4">
            <div className={`${isVisible ? 'animate-slideInRight' : 'opacity-0'}`}>
              
              {/* Stats Grid */}
           <div className="stats-wrapper">
  <div className="stats-grid">
    {stats.map((stat, index) => (
      <div 
        className="stat-card" 
        key={index}
        style={{ '--card-color': stat.color }}
      >
        <div className="stat-icon">
          <i className={stat.icon}></i>
        </div>
        <div className="stat-number">{stat.number}{stat.suffix}</div>
        <div className="stat-label">{stat.label}</div>
      </div>
    ))}
  </div>
</div>


              {/* Achievement Banner */}
             
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS Animations */}
      <style jsx>{`
        @keyframes morphingGlow {
          0%, 100% { 
            filter: blur(100px) hue-rotate(0deg); 
            transform: scale(1); 
          }
          25% { 
            filter: blur(80px) hue-rotate(90deg); 
            transform: scale(1.1); 
          }
          50% { 
            filter: blur(120px) hue-rotate(180deg); 
            transform: scale(0.9); 
          }
          75% { 
            filter: blur(90px) hue-rotate(270deg); 
            transform: scale(1.05); 
          }
        }

        @keyframes floatComplex {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg) scale(1); 
            opacity: 0.3; 
          }
          25% { 
            transform: translateY(-20px) rotate(90deg) scale(1.1); 
            opacity: 0.7; 
          }
          50% { 
            transform: translateY(-10px) rotate(180deg) scale(0.9); 
            opacity: 0.5; 
          }
          75% { 
            transform: translateY(-30px) rotate(270deg) scale(1.05); 
            opacity: 0.8; 
          }
        }

        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }

        @keyframes textShimmer {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes underlineExpand {
          0% { width: 0%; }
          100% { width: 100%; }
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          50%, 100% { transform: translateX(100%); }
        }

        @keyframes cardFloat {
          0% { 
            opacity: 0; 
            transform: translateY(30px) scale(0.9); 
          }
          100% { 
            opacity: 1; 
            transform: translateY(0) scale(1); 
          }
        }

        @keyframes iconBounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        @keyframes pulseGlow {
          0%, 100% { 
            transform: scale(1); 
            opacity: 0.7; 
          }
          50% { 
            transform: scale(1.2); 
            opacity: 0.3; 
          }
        }

        .animate-slideInLeft {
          animation: slideInLeft 1s ease-out;
        }

        .animate-slideInRight {
          animation: slideInRight 1s ease-out;
        }

        @keyframes slideInLeft {
          0% { 
            opacity: 0; 
            transform: translateX(-50px); 
          }
          100% { 
            opacity: 1; 
            transform: translateX(0); 
          }
        }

        @keyframes slideInRight {
          0% { 
            opacity: 0; 
            transform: translateX(50px); 
          }
          100% { 
            opacity: 1; 
            transform: translateX(0); 
          }
        }

        @keyframes fadeInUp {
          0% { 
            opacity: 0; 
            transform: translateY(30px); 
          }
          100% { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
      `}</style>
    </div>
    </>
  );
};

export default Hero;