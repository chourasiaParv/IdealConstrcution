import React, { useState, useEffect } from 'react';
import project1 from '../assets/project1.jpg';
import project2 from '../assets/project2.jpg';
import project3 from '../assets/project3.jpg';
import project4 from '../assets/project4.jpg';
const AdvancedProjects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Luxury Residential Complex',
      category: 'residential',
      image: project1,
      description: 'Modern 50-unit residential complex with premium amenities and sustainable design.',
      technologies: ['Architecture', 'Interior Design', 'Landscaping'],
      duration: '18 months',
      status: 'Completed',
      budget: '$2.5M',
      year: '2024'
    },
    {
      id: 2,
      title: 'Smart Corporate Headquarters',
      category: 'commercial',
      image: project2,
      description: '20-story intelligent office building with IoT integration and green technology.',
      technologies: ['Smart Systems', 'IoT', 'Green Tech'],
      duration: '24 months',
      status: 'Completed',
      budget: '$8.2M',
      year: '2023'
    },
    {
      id: 3,
      title: 'Advanced Manufacturing Hub',
      category: 'industrial',
      image: project3,
      description: '100,000 sq ft facility with AI-powered automation and robotic systems.',
      technologies: ['Automation', 'Robotics', 'AI Systems'],
      duration: '15 months',
      status: 'In Progress',
      budget: '$5.8M',
      year: '2024'
    },
    {
      id: 4,
      title: 'Heritage Mall Transformation',
      category: 'renovation',
      image: project4,
      description: 'Complete digital transformation of 200,000 sq ft heritage retail space.',
      technologies: ['Digital Integration', 'AR/VR', 'Smart Retail'],
      duration: '12 months',
      status: 'Completed',
      budget: '$3.2M',
      year: '2023'
    },
  ];

  const categories = [
    { id: 'all', name: 'All Projects', icon: 'fa-th-large', color: '#8B5CF6' },
    { id: 'residential', name: 'Residential', icon: 'fa-home', color: '#10B981' },
    { id: 'commercial', name: 'Commercial', icon: 'fa-building', color: '#3B82F6' },
    { id: 'industrial', name: 'Industrial', icon: 'fa-industry', color: '#F59E0B' },
    { id: 'renovation', name: 'Renovation', icon: 'fa-tools', color: '#EF4444' },
    { id: 'infrastructure', name: 'Infrastructure', icon: 'fa-road', color: '#06B6D4' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animate-in');
            }, index * 200);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [filteredProjects]);

  return (
    <>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

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

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Noto Sans', Helvetica, Arial, sans-serif;
          background: var(--bg-primary);
          color: var(--text-primary);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          overflow-x: hidden;
        }

        .projects-container {
          min-height: 100vh;
          background: var(--bg-primary);
          position: relative;
          overflow: hidden;
        }

        .background-animation {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          opacity: 0.03;
          pointer-events: none;
        }

        .floating-particles {
          position: absolute;
          width: 100%;
          height: 100%;
        }

        .shape {
          position: absolute;
          border-radius: 50%;
          background: var(--primary-gradient);
          animation: float 20s infinite linear;
        }

        .shape:nth-child(1) {
          width: 80px;
          height: 80px;
          left: 10%;
          animation-delay: 0s;
        }

        .shape:nth-child(2) {
          width: 120px;
          height: 120px;
          left: 80%;
          animation-delay: -5s;
        }

        .shape:nth-child(3) {
          width: 60px;
          height: 60px;
          left: 50%;
          animation-delay: -10s;
        }

        @keyframes float {
          0% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100px) rotate(360deg);
            opacity: 0;
          }
        }

        .projects-section {
          padding: 6rem 0 4rem;
          position: relative;
        }

        .container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        /* Advanced Section Header */
        .section-header {
          text-align: center;
          margin-bottom: 5rem;
          position: relative;
        }

        .section-titlee {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 800;
          background: linear-gradient(135deg, #f093fb 0%, #667eea 100%);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 1rem;
          position: relative;
        }

        .section-title::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 50%;
          width: 80px;
          height: 4px;
          background: var(--primary-gradient);
          transform: translateX(-50%);
          border-radius: 2px;
        }

        .section-subtitle {
          font-size: 1.25rem;
          color: var(--text-secondary);
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        /* Advanced Filter Tabs */
        .filter-container {
          margin-bottom: 3rem;
        }

        .filter-tabs {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .filter-tab {
          background: transparent;
          border: 2px solid var(--border-primary);
          color: var(--text-secondary);
          padding: 0.75rem 1.5rem;
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          font-weight: 600;
          position: relative;
          overflow: hidden;
        }

        .filter-tab::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: var(--primary-gradient);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: -1;
        }

        .filter-tab:hover::before,
        .filter-tab.active::before {
          left: 0;
        }

        .filter-tab:hover,
        .filter-tab.active {
          color: white;
          border-color: transparent;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
        }

        .filter-tab i {
          margin-right: 0.5rem;
        }

        /* Advanced Projects Grid */
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(420px, 1fr));
          gap: 2.5rem;
        }

        /* Advanced Project Cards */
        .project-card {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          overflow: hidden;
          position: relative;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 
            0 8px 32px rgba(0, 0, 0, 0.3),
            0 0 0 1px rgba(255, 255, 255, 0.05);
        }

        .animate-on-scroll {
          opacity: 0;
          transform: translateY(50px);
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        .project-card:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 20px 60px var(--shadow-hover);
          border-color: var(--accent-primary);
        }

        /* Advanced Image Container */
        .project-image-container {
          position: relative;
          height: 280px;
          overflow: hidden;
        }

        .project-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          filter: brightness(0.9) saturate(1.1);
        }

        .project-card:hover .project-image {
          transform: scale(1.15) rotate(1deg);
          filter: brightness(1.1) saturate(1.3);
        }

        /* Advanced Overlay Effects */
        .project-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            135deg, 
            rgba(139, 92, 246, 0.9) 0%, 
            rgba(6, 182, 212, 0.8) 50%, 
            rgba(16, 185, 129, 0.9) 100%
          );
          opacity: 0;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
        }

        .project-card:hover .project-overlay {
          opacity: 1;
        }

        .overlay-content {
          text-align: center;
          color: white;
          transform: translateY(30px) scale(0.8);
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .project-card:hover .overlay-content {
          transform: translateY(0) scale(1);
        }

        .overlay-icon {
          font-size: 3.5rem;
          margin-bottom: 1rem;
          filter: drop-shadow(0 0 20px rgba(255, 255, 255, 0.3));
        }

        .overlay-text {
          font-size: 1.2rem;
          font-weight: 600;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
        }

        /* Advanced Status Badges */
        .status-badge {
          position: absolute;
          top: 1rem;
          right: 1rem;
          padding: 0.5rem 1rem;
          border-radius: 25px;
          font-size: 0.8rem;
          font-weight: 600;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .status-completed {
          background: var(--success-gradient);
          color: white;
        }

        .status-progress {
          background: var(--warning-gradient);
          color: white;
        }

        .status-planning {
          background: var(--secondary-gradient);
          color: white;
        }

        /* Advanced Content Styling */
        .project-content {
          padding: 2.5rem;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.03), rgba(255, 255, 255, 0.01));
        }

        .project-title {
          font-size: 1.6rem;
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 1rem;
          line-height: 1.3;
          background: linear-gradient(135deg, #ffffff 0%, rgba(255, 255, 255, 0.8) 100%);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .project-description {
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.7;
          margin-bottom: 2rem;
          font-size: 1rem;
        }

        .project-stats {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .stat-item {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.03);
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .stat-icon {
          font-size: 1.2rem;
          color: #8B5CF6;
        }

        .stat-text {
          color: rgba(255, 255, 255, 0.8);
          font-size: 0.9rem;
        }

        .stat-value {
          color: #ffffff;
          font-weight: 600;
          font-size: 0.95rem;
        }

        /* Advanced Technology Tags */
        .project-technologies {
          display: flex;
          flex-wrap: wrap;
          gap: 0.8rem;
          margin-bottom: 2rem;
        }

        .tech-tag {
          background: linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(6, 182, 212, 0.2));
          color: rgba(255, 255, 255, 0.9);
          padding: 0.6rem 1.2rem;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 600;
          border: 1px solid rgba(139, 92, 246, 0.3);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          backdrop-filter: blur(10px);
        }

        .tech-tag:hover {
          background: linear-gradient(135deg, rgba(139, 92, 246, 0.4), rgba(6, 182, 212, 0.4));
          transform: translateY(-2px) scale(1.05);
          box-shadow: 0 8px 25px rgba(139, 92, 246, 0.3);
          border-color: rgba(139, 92, 246, 0.5);
        }

        /* Advanced View Project Button */
        .view-project-btn {
          width: 100%;
          background: linear-gradient(135deg, #8B5CF6 0%, #06B6D4 100%);
          border: none;
          color: white;
          padding: 1rem 2rem;
          border-radius: 16px;
          font-weight: 700;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          box-shadow: 0 8px 30px rgba(139, 92, 246, 0.4);
        }

        .view-project-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1));
          transition: all 0.5s ease;
        }

        .view-project-btn:hover::before {
          left: 0;
        }

        .view-project-btn:hover {
          transform: translateY(-3px) scale(1.02);
          box-shadow: 
            0 15px 50px rgba(139, 92, 246, 0.5),
            0 0 0 1px rgba(139, 92, 246, 0.3);
          background: linear-gradient(135deg, #9333EA 0%, #0891B2 100%);
        }

        .view-project-btn i {
          transition: transform 0.3s ease;
        }

        .view-project-btn:hover i {
          transform: translateX(5px);
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .section-title {
            font-size: 2.5rem;
          }
          
          .projects-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          
          .filter-tabs {
            gap: 0.8rem;
          }
          
          .filter-tab {
            padding: 0.8rem 1.5rem;
            font-size: 0.9rem;
          }
          
          .project-content {
            padding: 2rem;
          }
          
          .container {
            padding: 0 1rem;
          }
          
          .project-stats {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .project-image-container {
            height: 220px;
          }

          .projects-section {
            padding: 4rem 0 3rem;
          }
        }

        @media (max-width: 480px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
          
          .filter-tab {
            padding: 0.6rem 1.2rem;
            font-size: 0.85rem;
          }
          
          .project-content {
            padding: 1.5rem;
          }
        }
      `}</style>

      <div className="projects-container">
        <div className="floating-particles">
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
        </div>

        <section className="projects-section">
          <div className="container">
            <div className="section-header animate-on-scroll">
              <h1 className="section-titlee">Exceptional Projects Portfolio</h1>
              <p className="section-subtitle">
                Discover our collection of groundbreaking projects that showcase cutting-edge technology, 
                innovative design, and exceptional craftsmanship in modern construction.
              </p>
            </div>

            <div className="filter-container animate-on-scroll">
              <div className="filter-tabs">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    className={`filter-tab ${activeFilter === category.id ? 'active' : ''}`}
                    onClick={() => setActiveFilter(category.id)}
                  >
                    <i className={`fas ${category.icon}`}></i>
                    {category.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="projects-grid">
              {filteredProjects.map((project, index) => (
                <div 
                  key={project.id} 
                  className="project-card animate-on-scroll"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="project-image-container">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="project-image"
                    />
                    <div className="project-overlay">
                      <div className="overlay-content">
                        <i className="fas fa-search-plus overlay-icon"></i>
                        <p className="overlay-text">Explore Project Details</p>
                      </div>
                    </div>
                    <div className={`status-badge status-${project.status.toLowerCase().replace(' ', '')}`}>
                      {project.status}
                    </div>
                  </div>
                  
                  <div className="project-content">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    
                    <div className="project-stats">
                      <div className="stat-item">
                        <i className="fas fa-clock stat-icon"></i>
                        <div>
                          <div className="stat-text">Duration</div>
                          <div className="stat-value">{project.duration}</div>
                        </div>
                      </div>
                      <div className="stat-item">
                        <i className="fas fa-dollar-sign stat-icon"></i>
                        <div>
                          <div className="stat-text">Budget</div>
                          <div className="stat-value">{project.budget}</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="project-technologies">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <button className="view-project-btn">
                      <i className="fas fa-arrow-right me-2"></i>
                      View Project
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AdvancedProjects;