import React, { useState, useEffect, useRef } from 'react';

const Team = () => {
  const [activeMember, setActiveMember] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const teamMembers = [
   {
  id: 1,
  name: 'Alexandra Rivera',
  position: 'Chief Creative Director',
  image: 'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  description: 'Visionary leader transforming digital landscapes with innovative design thinking and strategic creativity that pushes boundaries.',
  experience: '12+ Years',
  projects: '300+',
  speciality: 'Digital Innovation',
  color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  accentColor: '#667eea',
  achievements: [
    'Design Excellence Award 2024',
    'Innovation Leadership Prize',
    'Creative Visionary Recognition'
  ],
  skills: [
    { name: 'Creative Strategy', level: 96 },
    { name: 'Design Thinking', level: 94 },
    { name: 'Team Leadership', level: 92 }
  ],
  social: ['linkedin', 'twitter', 'dribbble']
},

    {
      id: 2,
      name: 'Marcus Chen',
      position: 'Technology Architect',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      description: 'Full-stack visionary architecting scalable solutions that bridge innovation with practical implementation and cutting-edge technology.',
      experience: '10+ Years',
      projects: '250+',
      speciality: 'Technology Innovation',
      color: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      accentColor: '#f093fb',
      achievements: [
        'Tech Innovation Award 2024',
        'AI Excellence Recognition',
        'Open Source Contributor'
      ],
      skills: [
        { name: 'System Architecture', level: 98 },
        { name: 'AI/ML Integration', level: 95 },
        { name: 'Cloud Solutions', level: 93 }
      ],
      social: ['linkedin', 'twitter', 'github']
    }
  ];

  const socialIcons = {
    linkedin: '💼',
    twitter: '🐦',
    dribbble: '🎨',
    github: '💻',
    behance: '🎭'
  };

  return (

    
    <div className="position-relative min-vh-100 overflow-hidden" style={{
      background: 'radial-gradient(ellipse at top left, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)',
    }}>
      {/* Advanced Background Effects */}
      <div className="position-absolute w-100 h-100" style={{ zIndex: 1 }}>
        {/* Dynamic Mouse Glow */}
        <div 
          className="position-absolute rounded-circle"
          style={{
            width: '800px',
            height: '800px',
            background: 'radial-gradient(circle, rgba(102, 126, 234, 0.12) 0%, transparent 70%)',
            left: `${mousePosition.x - 400}px`,
            top: `${mousePosition.y - 400}px`,
            transition: 'all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1)',
            filter: 'blur(80px)',
            animation: 'pulseGlow 6s ease-in-out infinite alternate'
          }}
        />

        {/* Floating Particles */}
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="position-absolute rounded-circle"
            style={{
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              background: `rgba(${102 + Math.random() * 100}, ${126 + Math.random() * 100}, 234, ${Math.random() * 0.8 + 0.2})`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `floatingParticle ${Math.random() * 10 + 5}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}

        {/* Geometric Patterns */}
        <div 
          className="position-absolute"
          style={{
            width: '300px',
            height: '300px',
            background: 'linear-gradient(45deg, rgba(102, 126, 234, 0.05), rgba(118, 75, 162, 0.05))',
            borderRadius: '50%',
            top: '10%',
            right: '5%',
            animation: 'rotateGeometry 20s linear infinite',
            filter: 'blur(40px)'
          }}
        />
        
        <div 
          className="position-absolute"
          style={{
            width: '200px',
            height: '200px',
            background: 'linear-gradient(135deg, rgba(240, 147, 251, 0.08), rgba(245, 87, 108, 0.08))',
            transform: 'rotate(45deg)',
            bottom: '15%',
            left: '8%',
            animation: 'rotateGeometry 15s linear infinite reverse',
            filter: 'blur(30px)'
          }}
        />
      </div>

      {/* Main Content */}
      <div className="container-fluid py-5 position-relative" style={{ zIndex: 2 }}>
        {/* Header Section */}
        <div className={`text-center mb-5 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h1 className="display-3 fw-bold mb-4 position-relative" style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #667eea 50%, #764ba2 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textShadow: '0 0 30px rgba(102, 126, 234, 0.3)',
                animation: 'titleGlow 3s ease-in-out infinite alternate'
              }}>
                Meet Our Visionaries
                <div 
                  className="position-absolute start-50 translate-middle-x"
                  style={{
                    bottom: '-15px',
                    width: '100px',
                    height: '4px',
                    background: 'linear-gradient(135deg, #667eea, #764ba2)',
                    borderRadius: '2px',
                    animation: 'expandLine 2s ease-out'
                  }}
                />
              </h1>
              <p className="lead text-light opacity-75 mx-auto mb-5" style={{ maxWidth: '600px', fontSize: '1.25rem' }}>
                Exceptional leaders driving innovation and excellence in every project we undertake
              </p>
            </div>
          </div>
        </div>

        {/* Team Cards */}
        <div className="row g-5 justify-content-center">
          {teamMembers.map((member, index) => (
            <div key={member.id} className="col-lg-5 col-md-6">
              <div 
                className={`team-card h-100 ${isVisible ? 'animate-slideInUp' : 'opacity-0'}`}
                style={{
                  animationDelay: `${index * 0.3}s`,
                  transform: hoveredCard === member.id ? 'translateY(-20px) rotateY(5deg)' : 'translateY(0) rotateY(0)',
                  transition: 'all 0.6s cubic-bezier(0.25, 0.8, 0.25, 1)'
                }}
                onMouseEnter={() => setHoveredCard(member.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="card border-0 h-100 position-relative overflow-hidden" style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  backdropFilter: 'blur(20px)',
                  borderRadius: '28px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  boxShadow: hoveredCard === member.id 
                    ? '0 30px 60px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(102, 126, 234, 0.3)'
                    : '0 15px 35px rgba(0, 0, 0, 0.2)',
                  transition: 'all 0.4s ease'
                }}>
                  
                  {/* Animated Background Gradient */}
                  <div 
                    className="position-absolute w-100 h-100"
                    style={{
                      background: member.color,
                      opacity: hoveredCard === member.id ? 0.1 : 0.05,
                      transition: 'opacity 0.4s ease',
                      borderRadius: '28px'
                    }}
                  />

                  {/* Floating Border Animation */}
                  <div 
                    className="position-absolute w-100 h-100"
                    style={{
                      background: `conic-gradient(from 0deg, ${member.accentColor}, transparent, ${member.accentColor})`,
                      borderRadius: '28px',
                      opacity: hoveredCard === member.id ? 0.6 : 0,
                      animation: hoveredCard === member.id ? 'rotateBorder 3s linear infinite' : 'none',
                      transition: 'opacity 0.4s ease',
                      padding: '2px',
                      zIndex: -1
                    }}
                  >
                    <div 
                      className="w-100 h-100"
                      style={{
                        background: 'rgba(15, 15, 35, 0.95)',
                        borderRadius: '26px'
                      }}
                    />
                  </div>

                  <div className="card-body p-5 text-center position-relative" style={{ zIndex: 2 }}>
                    {/* Profile Image with Advanced Effects */}
                    <div className="position-relative mb-4 mx-auto" style={{ width: '160px', height: '160px' }}>
                      {/* Glow Ring */}
                      <div 
                        className="position-absolute w-100 h-100 rounded-circle"
                        style={{
                          background: member.color,
                          filter: 'blur(15px)',
                          opacity: hoveredCard === member.id ? 0.8 : 0.3,
                          transform: hoveredCard === member.id ? 'scale(1.2)' : 'scale(1)',
                          transition: 'all 0.4s ease'
                        }}
                      />
                      
                      {/* Profile Image */}
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="rounded-circle position-relative"
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          border: `3px solid ${member.accentColor}40`,
                          transform: hoveredCard === member.id ? 'scale(1.05) rotate(3deg)' : 'scale(1)',
                          transition: 'all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)',
                          zIndex: 2
                        }}
                      />
                      
                      {/* Status Indicator */}
                      <div 
                        className="position-absolute bottom-0 end-0 rounded-circle border border-3 border-dark"
                        style={{
                          width: '24px',
                          height: '24px',
                          background: '#10b981',
                          animation: 'statusPulse 2s ease-in-out infinite'
                        }}
                      />
                    </div>

                    {/* Member Info */}
                    <h3 className="h2 fw-bold mb-2 text-white" style={{
                      background: 'linear-gradient(135deg, #ffffff 0%, ' + member.accentColor + ' 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}>
                      {member.name}
                    </h3>

                    <p className="fw-semibold mb-3" style={{
                      color: member.accentColor,
                      fontSize: '1.1rem',
                      textTransform: 'uppercase',
                      letterSpacing: '2px',
                      position: 'relative'
                    }}>
                      {member.position}
                      <span 
                        className="position-absolute start-50 translate-middle-x"
                        style={{
                          bottom: '-8px',
                          width: '60px',
                          height: '2px',
                          background: member.color,
                          borderRadius: '2px'
                        }}
                      />
                    </p>

                    <p className="text-light opacity-75 mb-4" style={{ 
                      fontSize: '1rem',
                      lineHeight: '1.7'
                    }}>
                      {member.description}
                    </p>

                    {/* Stats Row */}
                    <div className="row g-3 mb-4">
                      <div className="col-md-4 col-12">
                        <div className="p-3 rounded-3" style={{ background: 'rgba(255, 255, 255, 0.05)' }}>
                          <div className="h4 fw-bold mb-1" style={{ color: member.accentColor }}>
                            {member.experience}
                          </div>
                          <small className="text-light opacity-75 text-uppercase">Experience</small>
                        </div>
                      </div>
                      <div className="col-md-4 col-6">
                        <div className="p-3 rounded-3" style={{ background: 'rgba(255, 255, 255, 0.05)' }}>
                          <div className="h4 fw-bold mb-1" style={{ color: member.accentColor }}>
                            {member.projects}
                          </div>
                          <small className="text-light opacity-75 text-uppercase">Projects</small>
                        </div>
                      </div>
                      <div className="col-md-4 col-6">
                        <div className="p-3 rounded-3" style={{ background: 'rgba(255, 255, 255, 0.05)' }}>
                          <div className="h4 fw-bold mb-1 text-warning">
                            4.9★
                          </div>
                          <small className="text-light opacity-75 text-uppercase">Rating</small>
                        </div>
                      </div>
                    </div>

                    {/* Social Links */}
                    <div className="d-flex justify-content-center gap-3 mb-4">
                      {member.social.map((platform, idx) => (
                        <a 
                          key={idx}
                          href="#" 
                          className="btn btn-sm rounded-circle d-flex align-items-center justify-content-center"
                          style={{
                            width: '45px',
                            height: '45px',
                            background: 'rgba(255, 255, 255, 0.1)',
                            border: '1px solid rgba(255, 255, 255, 0.2)',
                            color: 'white',
                            fontSize: '1.2rem',
                            transition: 'all 0.3s ease'
                          }}
                          onMouseEnter={(e) => {
                            e.target.style.background = member.color;
                            e.target.style.transform = 'translateY(-3px) scale(1.1)';
                            e.target.style.boxShadow = `0 8px 25px ${member.accentColor}40`;
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                            e.target.style.transform = 'translateY(0) scale(1)';
                            e.target.style.boxShadow = 'none';
                          }}
                        >
                          {socialIcons[platform]}
                        </a>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <button
                      className="btn btn-lg fw-semibold px-4 py-3 position-relative overflow-hidden"
                      style={{
                        background: member.color,
                        border: 'none',
                        borderRadius: '50px',
                        color: 'white',
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                        boxShadow: `0 15px 35px ${member.accentColor}40`,
                        transition: 'all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)'
                      }}
                      onClick={() => setActiveMember(member)}
                      onMouseEnter={(e) => {
                        e.target.style.transform = 'translateY(-3px) scale(1.05)';
                        e.target.style.boxShadow = `0 20px 40px ${member.accentColor}60`;
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.transform = 'translateY(0) scale(1)';
                        e.target.style.boxShadow = `0 15px 35px ${member.accentColor}40`;
                      }}
                    >
                      <span className="me-2">🚀</span>
                      View Profile
                      <div 
                        className="position-absolute top-0 start-0 w-100 h-100"
                        style={{
                          background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.3), transparent 70%)',
                          transform: 'translateX(-100%)',
                          animation: 'buttonShine 3s ease-in-out infinite'
                        }}
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Advanced Modal */}
      {activeMember && (
        <div 
          className="modal d-flex align-items-center justify-content-center"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0, 0, 0, 0.85)',
            backdropFilter: 'blur(20px)',
            zIndex: 9999,
            animation: 'modalFadeIn 0.4s ease-out'
          }}
          onClick={() => setActiveMember(null)}
        >
          <div 
            className="modal-dialog modal-lg"
            style={{ animation: 'modalSlideIn 0.5s cubic-bezier(0.25, 0.8, 0.25, 1)' }}
            onClick={e => e.stopPropagation()}
          >
            <div 
              className="modal-content border-0 overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(15, 15, 35, 0.95), rgba(25, 25, 45, 0.95))',
                backdropFilter: 'blur(25px)',
                borderRadius: '24px',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}
            >
              <button 
                className="btn-close position-absolute top-0 end-0 m-3"
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: 'none',
                  color: 'white',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  zIndex: 10
                }}
                onClick={() => setActiveMember(null)}
              >
                ✕
              </button>

              <div className="modal-header border-0 p-4 pb-0">
                <div className="d-flex align-items-center gap-4">
                  <img 
                    src={activeMember.image} 
                    alt={activeMember.name}
                    className="rounded-circle"
                    style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                  />
                  <div>
                    <h3 className="text-white mb-1">{activeMember.name}</h3>
                    <p className="mb-0" style={{ color: activeMember.accentColor }}>
                      {activeMember.position}
                    </p>
                  </div>
                </div>
              </div>

              <div className="modal-body p-4">
                {/* Skills Section */}
                <div className="mb-4">
                  <h5 className="text-white mb-3">Core Expertise</h5>
                  {activeMember.skills.map((skill, index) => (
                    <div key={index} className="mb-3">
                      <div className="d-flex justify-content-between align-items-center mb-1">
                        <span className="text-light">{skill.name}</span>
                        <span className="text-light opacity-75">{skill.level}%</span>
                      </div>
                      <div className="progress" style={{ height: '8px', background: 'rgba(255, 255, 255, 0.1)' }}>
                        <div 
                          className="progress-bar"
                          style={{
                            width: `${skill.level}%`,
                            background: activeMember.color,
                            animation: `skillProgress 1s ease-out ${index * 0.2}s both`
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Achievements */}
                <div>
                  <h5 className="text-white mb-3">Key Achievements</h5>
                  {activeMember.achievements.map((achievement, index) => (
                    <div 
                      key={index}
                      className="d-flex align-items-center gap-3 p-3 mb-2 rounded-3"
                      style={{
                        background: 'rgba(255, 255, 255, 0.05)',
                        animation: `achievementSlide 0.5s ease-out ${index * 0.1}s both`
                      }}
                    >
                      <span style={{ color: activeMember.accentColor, fontSize: '1.2rem' }}>
                        🏆
                      </span>
                      <span className="text-light">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Advanced CSS Animations */}
      <style>{`
        @keyframes pulseGlow {
          0% { transform: scale(0.9); opacity: 0.3; }
          100% { transform: scale(1.1); opacity: 0.7; }
        }

        @keyframes floatingParticle {
          0% { transform: translateY(100vh) rotate(0deg); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
        }

        @keyframes rotateGeometry {
          0% { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(180deg) scale(1.1); }
          100% { transform: rotate(360deg) scale(1); }
        }

        @keyframes titleGlow {
          0% { text-shadow: 0 0 20px rgba(102, 126, 234, 0.3); }
          100% { text-shadow: 0 0 40px rgba(102, 126, 234, 0.8), 0 0 60px rgba(118, 75, 162, 0.4); }
        }

        @keyframes expandLine {
          0% { width: 0; opacity: 0; }
          100% { width: 100px; opacity: 1; }
        }

        @keyframes rotateBorder {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes statusPulse {
          0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.4); }
          50% { transform: scale(1.1); box-shadow: 0 0 0 8px rgba(16, 185, 129, 0); }
        }

        @keyframes buttonShine {
          0% { transform: translateX(-100%); }
          50%, 100% { transform: translateX(100%); }
        }

        @keyframes modalFadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }

        @keyframes modalSlideIn {
          0% { transform: translateY(50px) scale(0.9); opacity: 0; }
          100% { transform: translateY(0) scale(1); opacity: 1; }
        }

        @keyframes skillProgress {
          0% { width: 0%; }
          100% { width: var(--width); }
        }

        @keyframes achievementSlide {
          0% { transform: translateX(-30px); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }

        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out;
        }

        .animate-slideInUp {
          animation: slideInUp 0.8s cubic-bezier(0.25, 0.8, 0.25, 1) both;
        }

        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideInUp {
          0% { opacity: 0; transform: translateY(60px) rotateX(-15deg); }
          100% { opacity: 1; transform: translateY(0) rotateX(0deg); }
        }

        .team-card {
          perspective: 1000px;
        }

        .btn-close:focus {
          box-shadow: none;
        }

        @media (max-width: 768px) {
          .display-3 {
            font-size: 2.5rem;
          }
          
          .modal-dialog {
            margin: 1rem;
          }
        }
        @media (max-width: 480px) {
        .stats-grid {
          grid-template-columns: 1fr;
          gap: 10px;
          padding: 10px;
        }

        .stat-card {
          width: 95%;
          margin: 0 auto;
          padding: 14px 12px;
          font-size: 0.9rem;
        }

        .stat-icon {
          width: 40px;
          height: 40px;
          font-size: 1.2rem;
          margin-bottom: 6px;
        }

        .stat-number {
          font-size: 1.5rem;
          margin-bottom: 4px;
        }

        .stat-label {
          font-size: 0.75rem;
        }
      }
      `}</style>
    </div>
  );
};

export default Team;