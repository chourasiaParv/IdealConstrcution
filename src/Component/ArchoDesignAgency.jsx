import React, { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import backgroundImage from '../assets/01.jpg'; // Import your image

const ArchoDesignAgency = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-vh-100  text-white overflow-hidden position-relative">
      {/* Background Image for entire page */}
     <div 
  className="position-fixed top-0 start-0 w-100 h-100"
  style={{
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    // backgroundAttachment: 'fixed',
    filter: 'brightness(0.4)',
    zIndex: -1,
    // Fallback background color
    backgroundColor: '#121212'
  }}
></div>

      {/* Navigation with semi-transparent background */}
      <nav className="fixed-top  bg-opacity-70 backdrop-blur-sm z-50">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center py-3">
            {/* Logo */}
            <div className="fs-4 fw-bold">ARCHO</div>
            
            {/* Desktop Navigation */}
            <div className="d-none d-md-flex align-items-center gap-4">
              <div className="d-flex align-items-center gap-1 cursor-pointer">
                <span>Home</span>
                <ChevronDown className="w-4 h-4" />
              </div>
              <a href="#" className="text-white text-decoration-none hover-opacity-75">About</a>
              <div className="d-flex align-items-center gap-1 cursor-pointer">
                <span>Portfolio</span>
                <ChevronDown className="w-4 h-4" />
              </div>
              <div className="d-flex align-items-center gap-1 cursor-pointer">
                <span>Blog</span>
                <ChevronDown className="w-4 h-4" />
              </div>
              <a href="#" className="text-white text-decoration-none hover-opacity-75">Contact</a>
            </div>

            {/* Mobile menu button */}
            <div className="d-md-none">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="btn text-white p-0 border-0 bg-transparent"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="d-md-none bg-dark bg-opacity-90 border-top border-secondary">
            <div className="container py-2">
              <div className="d-flex justify-content-between align-items-center py-2">
                <span>Home</span>
                <ChevronDown className="w-4 h-4" />
              </div>
              <a href="#" className="d-block py-2 text-white text-decoration-none hover-opacity-75">About</a>
              <div className="d-flex justify-content-between align-items-center py-2">
                <span>Portfolio</span>
                <ChevronDown className="w-4 h-4" />
              </div>
              <div className="d-flex justify-content-between align-items-center py-2">
                <span>Blog</span>
                <ChevronDown className="w-4 h-4" />
              </div>
              <a href="#" className="d-block py-2 text-white text-decoration-none hover-opacity-75">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Exit fullscreen notification */}
      

      {/* Main Content */}
      <div className="min-vh-100 d-flex position-relative">
        {/* Left Side - Content */}
        <div className="w-100 col-lg-6 d-flex flex-column justify-content-center px-3 px-sm-4 px-lg-5 pt-5 pt-lg-0">
          {/* Decorative Lines */}
          <div className="position-absolute start-0 top-50 translate-middle-y" style={{left: '2rem'}}>
            <div className="d-flex flex-column gap-2">
              <div className="w-3 bg-white opacity-50" style={{height: '1px'}}></div>
              <div className="w-4 bg-white opacity-50" style={{height: '1px'}}></div>
            </div>
          </div>

          <div className="max-w-lg position-relative z-1">
            <p className="text-uppercase text-white-50 letter-spacing mb-4 small">
              INTERIOR
            </p>
            
            <h1 className="display-3 fw-bold mb-4 text-white">
              DESIGN AGENCY
            </h1>
            
            <p className="text-white-75 mb-5 lead">
              Right design and right ideas matter a lot of in interior design business. 
              A style that makes a statement.
            </p>
            
            <button className="btn btn-warning text-white px-4 py-3 text-uppercase small fw-bold">
              DISCOVER WORK
            </button>
          </div>
        </div>

        {/* Right Side - Decorative Elements */}
        <div className="d-none d-lg-block col-lg-6 position-relative">
          {/* Page indicator */}
          <div className="position-absolute top-50 end-3 translate-middle-y display-6 text-white-50 fw-light">
            1/3
          </div>
          
          {/* Modern Chair */}
          <div className="position-absolute bottom-32 start-25 translate-middle-x">
            <div className="w-4 h-px bg-white opacity-50 rounded-pill mx-auto"></div>
            <div className="w-px h-3 bg-white opacity-50 mx-auto mt-n1"></div>
            <div className="w-6 h-5 bg-warning rounded-top-pill mt-n1 position-relative">
              <div className="position-absolute top-1 start-1 end-1 bottom-0 bg-warning bg-opacity-75 rounded-top-pill"></div>
            </div>
          </div>

          {/* Cabinet */}
          <div className="position-absolute bottom-16 end-0 w-64 h-32 bg-dark bg-opacity-50">
            <div className="w-full h-full bg-gradient-to-r from-gray-800 to-gray-900 opacity-50"></div>
            <div className="position-absolute top-4 left-4 w-8 h-8 bg-gray-600 opacity-50"></div>
            <div className="position-absolute top-4 right-16 w-6 h-12 bg-warning opacity-50"></div>
            <div className="position-absolute top-4 right-8 w-6 h-16 bg-gray-600 opacity-50"></div>
          </div>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="fixed-bottom mb-3 start-50 translate-middle-x d-flex gap-2 z-40">
        <div className="rounded-circle bg-white" style={{width: '0.75rem', height: '0.75rem'}}></div>
        <div className="rounded-circle bg-white opacity-30" style={{width: '0.75rem', height: '0.75rem'}}></div>
        <div className="rounded-circle bg-white opacity-30" style={{width: '0.75rem', height: '0.75rem'}}></div>
      </div>

      {/* Scroll indicators */}
      <div className="position-fixed end-3 top-50 translate-middle-y d-flex flex-column gap-2 z-40">
        <div className="w-px h-3 bg-white opacity-30"></div>
        <div className="w-1 h-1 bg-white rounded-circle"></div>
        <div className="w-px h-3 bg-white opacity-30"></div>
      </div>

      {/* Bottom scroll indicator */}
      <div className="position-fixed bottom-3 end-3 z-40">
        <ChevronDown className="w-6 h-6 text-white-50 animate-bounce" />
      </div>
    </div>
  );
};

export default ArchoDesignAgency;