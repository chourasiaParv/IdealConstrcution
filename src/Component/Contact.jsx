import React, { useState, useEffect } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const contact = document.querySelector('#modern-contact');
    if (contact) observer.observe(contact);

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      observer.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      alert('Thank you for your message! We\'ll get back to you soon.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 2000);
  };

  const contactInfo = [
    { icon: 'fas fa-map-marker-alt', title: 'Address', info: '123 Tech Street\nInnovation City, IC 12345', color: '#f093fb' },
    { 
      icon: 'fas fa-phone', 
      title: 'Contact', 
      info: 'Phone: +1 (555) 123-4567\nEmail: hello@techcorp.com', 
      color: '#667eea' 
    },
    { icon: 'fas fa-clock', title: 'Hours', info: 'Mon-Fri: 9:00 AM - 6:00 PM\nSat: 10:00 AM - 4:00 PM', color: '#8e54e9' }
  ];

  return (
    <>
      {/* Bootstrap CSS */}
    
      {/* <link 
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" 
        rel="stylesheet" 
      /> */}
      <link 
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" 
        rel="stylesheet" 
      />

      <style>{`
        :root {
          --primary-bg: #060606;
          --secondary-bg: #111111;
          --accent-bg: #222222;
          --glass-bg: rgba(15, 15, 15, 0.8);
          --glass-border: rgba(255, 255, 255, 0.1);
          --primary-gradient: linear-gradient(135deg, #aa4fb2 0%, #8e54e9 100%);
          --accent-gradient: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
          --neon-gradient: linear-gradient(135deg, #f093fb 0%, #8e54e9 50%, #667eea 100%);
          --text-primary: #ffffff;
          --text-secondary: #ffffff;
          --text-muted: #aaaaaa;
          --accent-color: #64ffda;
          --neon-pink: #f093fb;
          --neon-purple: #edecef;
          --neon-blue: #667eea;
          --success-color: #10d876;
          --error-color: #ff4757;
        }

        * {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          box-sizing: border-box;
        }

        body {
          background-color: #000000;
        }

        .modern-contact {
          background: var(--primary-bg);
          min-height: 100vh;
          position: relative;
          overflow: hidden;
          padding: 100px 0;
        }

        /* Interactive Background */
        .contact-bg::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, 
              rgba(102, 126, 234, 0.03) 0%, 
              transparent 50%),
            radial-gradient(circle at 20% 20%, rgba(240, 147, 251, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(142, 84, 233, 0.05) 0%, transparent 50%);
          transition: all 0.3s ease;
          pointer-events: none;
        }

        /* Animated Grid Background */
        .grid-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            linear-gradient(rgba(102, 126, 234, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(102, 126, 234, 0.03) 1px, transparent 1px);
          background-size: 60px 60px;
          animation: gridMove 25s linear infinite;
          pointer-events: none;
        }

        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(60px, 60px); }
        }

        /* Floating Elements */
        .floating-element {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          opacity: 0.1;
        }

        .floating-1 {
          width: 100px;
          height: 100px;
          top: 10%;
          left: 10%;
          background: var(--neon-pink);
          animation: float-1 15s infinite ease-in-out;
        }

        .floating-2 {
          width: 150px;
          height: 150px;
          top: 70%;
          right: 15%;
          background: var(--neon-purple);
          animation: float-2 20s infinite ease-in-out;
        }

        .floating-3 {
          width: 80px;
          height: 80px;
          bottom: 20%;
          left: 60%;
          background: var(--neon-blue);
          animation: float-3 18s infinite ease-in-out;
        }

        @keyframes float-1 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.05; }
          33% { transform: translate(40px, -30px) scale(1.2); opacity: 0.1; }
          66% { transform: translate(-30px, 40px) scale(0.8); opacity: 0.03; }
        }

        @keyframes float-2 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); opacity: 0.04; }
          50% { transform: translate(-50px, -40px) rotate(180deg); opacity: 0.08; }
        }

        @keyframes float-3 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.06; }
          50% { transform: translate(30px, -50px) scale(1.3); opacity: 0.02; }
        }

        /* Section Title */
        .section-title {
          text-align: center;
          margin-bottom: 4rem;
          opacity: ${isVisible ? '1' : '0'};
          transform: ${isVisible ? 'translateY(0)' : 'translateY(50px)'};
          transition: all 1s cubic-bezier(0.23, 1, 0.32, 1);
        }

        .section-title h2 {
          font-size: 3.5rem;
          font-weight: 900;
          background: var(--neon-gradient);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 1rem;
          letter-spacing: -2px;
          position: relative;
        }

        .section-title h2::before {
          content: '';
          position: absolute;
          top: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 200px;
          height: 200px;
          background: var(--neon-gradient);
          border-radius: 50%;
          filter: blur(100px);
          opacity: 0.2;
          z-index: -1;
        }

        .section-title p {
          font-size: 1.25rem;
        //  background: var(--text-primary);
         
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        /* Glass Card Effect */
        .glass-card {
          background: var(--glass-bg);
          backdrop-filter: blur(25px);
          border: 1px solid var(--glass-border);
          border-radius: 24px;
          padding: 3rem;
          position: relative;
          overflow: hidden;
          transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
          opacity: ${isVisible ? '1' : '0'};
          transform: ${isVisible ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.95)'};
          min-height: 800px; /* Increased height to match 3 cards */
        }

        .glass-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, 
            rgba(255, 255, 255, 0.1) 0%, 
            rgba(255, 255, 255, 0.02) 50%, 
            rgba(255, 255, 255, 0.05) 100%);
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.5s ease;
        }

        .glass-card:hover::before {
          opacity: 1;
        }

        .glass-card:hover {
          transform: translateY(-10px) scale(1.02);
          border-color: rgba(255, 255, 255, 0.15);
          box-shadow: 
            0 25px 50px rgba(0, 0, 0, 0.3),
            0 0 100px rgba(102, 126, 234, 0.1);
        }

        /* Form Styles */
        .form-title {
          font-size: 2rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 2rem;
          position: relative;
          text-align: center;
        }

        .form-title::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 3px;
          background: var(--neon-gradient);
          border-radius: 2px;
        }

        .form-group {
          margin-bottom: 2rem;
          position: relative;
        }

        .form-label {
          display: block;
          margin-bottom: 0.75rem;
          font-weight: 600;
          color: white;
          font-size: 1rem;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .form-control, .form-select, .form-textarea {
          width: 100%;
          border: 2px solid var(--glass-border);
          border-radius: 12px;
          padding: 1rem 1.25rem;
          font-size: 1rem;
          background: var(--glass-bg);
          color: white;
          backdrop-filter: blur(10px);
          transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
          position: relative;
        }

        .form-control:focus, .form-select:focus, .form-textarea:focus {
          outline: none;
          border-color: var(--neon-blue);
          box-shadow: 
            0 0 0 3px rgba(102, 126, 234, 0.1),
            0 8px 25px rgba(0, 0, 0, 0.2);
          transform: translateY(-2px);
          background: rgba(30, 30, 30, 0.8);
          color: white;
        }

        .form-control::placeholder, .form-textarea::placeholder {
          color: var(--text-muted);
          opacity: 0.7;
        }

        /* Style for select dropdown options */
        .form-select option {
          background-color: #111111;
          color: white;
          padding: 10px;
        }

        .form-textarea {
          min-height: 120px;
          resize: vertical;
        }

        /* Submit Button */
        .submit-btn {
          background: linear-gradient(135deg, #f093fb 0%, #667eea 100%);
          border: none;
          color: #080808;
          font-weight: 700;
          font-size: 1.1rem;
          padding: 1rem 2.5rem;
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
          position: relative;
          overflow: hidden;
          text-transform: uppercase;
          letter-spacing: 1px;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin: 0 auto;
          margin-top: 2rem;
          min-width: 200px;
          justify-content: center;
        }

        .submit-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.5s ease;
        }

        .submit-btn:hover::before {
          left: 100%;
        }

        .submit-btn:hover {
          transform: translateY(-3px) scale(1.05);
          box-shadow: 
            0 15px 35px rgba(240, 147, 251, 0.4),
            0 0 50px rgba(240, 147, 251, 0.2);
        }

        .submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
          transform: none;
        }

        /* Loading Animation */
        .loading-spinner {
          width: 20px;
          height: 20px;
          border: 2px solid transparent;
          border-top: 2px solid white;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        /* Contact Info Cards */
        .contact-info-container {
          height: 800px; /* Matching the form card height */
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .contact-info-card {
          background: var(--glass-bg);
          backdrop-filter: blur(20px);
          border: 1px solid var(--glass-border);
          border-radius: 20px;
          padding: 2rem;
          transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
          position: relative;
          overflow: hidden;
          opacity: ${isVisible ? '1' : '0'};
          transform: ${isVisible ? 'translateX(0)' : 'translateX(50px)'};
        }

        /* Make the middle card (combined contact) taller */
        .contact-info-card:nth-child(2) {
          flex: 1.2;
          margin: 1.5rem 0;
        }

        .contact-info-card:nth-child(1) { transition-delay: 0.2s; }
        .contact-info-card:nth-child(2) { transition-delay: 0.4s; }
        .contact-info-card:nth-child(3) { transition-delay: 0.6s; }

        .contact-info-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.05), transparent);
          transition: left 0.6s ease;
        }

        .contact-info-card:hover::before {
          left: 100%;
        }

        .contact-info-card:hover {
          transform: translateX(-10px) translateY(-5px);
          border-color: rgba(255, 255, 255, 0.15);
          box-shadow: 
            0 20px 40px rgba(0, 0, 0, 0.3),
            0 0 60px rgba(102, 126, 234, 0.1);
        }

        .contact-icon {
          width: 60px;
          height: 60px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          color: white;
          margin-bottom: 1.25rem;
          transition: all 0.3s ease;
          position: relative;
        }

        .contact-info-card:hover .contact-icon {
          transform: scale(1.1) rotate(5deg);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        .contact-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .contact-text {
          color: var(--text-primary);
          line-height: 1.6;
          font-size: 1rem;
          white-space: pre-line;
        }
          .form-select option {
  background-color: #111111;
  color: white;
  padding: 10px;
}

        /* Responsive Design */
        @media (max-width: 768px) {
          .section-title h2 { font-size: 2.5rem; }
          .glass-card { 
            padding: 2rem;
            min-height: auto;
          }
          .modern-contact { padding: 60px 0; }
          .contact-info-container {
            height: auto;
            margin-top: 2rem;
          }
          .contact-info-card {
            margin-bottom: 1.5rem;
          }
          .contact-info-card:nth-child(2) {
            margin: 1.5rem 0;
          }
        }

        /* Staggered Animations */
        .stagger-1 { transition-delay: 0.1s; }
        .stagger-2 { transition-delay: 0.3s; }
      `}</style>

      <section id="modern-contact" className="modern-contact">
        <div className="contact-bg">
          <div className="grid-background"></div>
          <div className="floating-element floating-1"></div>
          <div className="floating-element floating-2"></div>
          <div className="floating-element floating-3"></div>
        </div>

        <div className="container position-relative">
          <div className="section-title">
            <h2>Get In Touch</h2>
            <p style={{color:'white'}}>Ready to start your next project? Let's create something amazing together. We're here to help bring your vision to life.</p>
          </div>

          <div className="row g-4">
            {/* Contact Form */}
            <div className="col-lg-8">
              <div className="glass-card stagger-1">
                <h3 className="form-title">Send us a Message</h3>
                
                <div onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="form-label">Full Name *</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="form-control"
                          placeholder="Enter your full name"
                        />
                      </div>
                    </div>
                    
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="form-label">Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="form-control"
                          placeholder="Enter your email address"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="form-label">Phone Number</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="form-control"
                          placeholder="Enter your phone number"
                        />
                      </div>
                    </div>
                    
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="form-label">Subject *</label>
                        <select
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="form-select"
                        >
                          <option value="">Select a service</option>
                          <option value="web-development">Web Development</option>
                          <option value="mobile-apps">Mobile Applications</option>
                          <option value="ai-solutions">AI Solutions</option>
                          <option value="cloud-services">Cloud Services</option>
                          <option value="consultation">Free Consultation</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="form-textarea"
                      placeholder="Tell us about your project requirements, goals, and any specific needs you have..."
                    />
                  </div>

                  <button 
                    onClick={handleSubmit}
                    className="submit-btn"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="loading-spinner"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <i className="fas fa-paper-plane"></i>
                        Send Message
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="col-lg-4">
              <div className="contact-info-container stagger-2">
                <div className="contact-info-card">
                  <div 
                    className="contact-icon" 
                    style={{ background: `linear-gradient(135deg, ${contactInfo[0].color}, ${contactInfo[0].color}dd)` }}
                  >
                    <i className={contactInfo[0].icon}></i>
                  </div>
                  <h4 className="contact-title">{contactInfo[0].title}</h4>
                  <p className="contact-text">{contactInfo[0].info}</p>
                </div>
                
                <div className="contact-info-card">
                  <div 
                    className="contact-icon" 
                    style={{ background: `linear-gradient(135deg, ${contactInfo[1].color}, ${contactInfo[1].color}dd)` }}
                  >
                    <i className={contactInfo[1].icon}></i>
                  </div>
                  <h4 className="contact-title">{contactInfo[1].title}</h4>
                  <p className="contact-text">{contactInfo[1].info}</p>
                </div>
                
                <div className="contact-info-card">
                  <div 
                    className="contact-icon" 
                    style={{ background: `linear-gradient(135deg, ${contactInfo[2].color}, ${contactInfo[2].color}dd)` }}
                  >
                    <i className={contactInfo[2].icon}></i>
                  </div>
                  <h4 className="contact-title">{contactInfo[2].title}</h4>
                  <p className="contact-text">{contactInfo[2].info}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;