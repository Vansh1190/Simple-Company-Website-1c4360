import React from "react";

const AboutSection = () => {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <h2 className="section-title">About Us</h2>
        
        <div className="about-content">
          <div className="company-image">
            <img src="https://images.unsplash.com/photo-1484589065579-248aad0d8b13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMkJvZmZpY2UlMkJzcGFjZSUyQndpdGglMkJ0ZWFtJTJCd29ya2luZ3xlbnwwfHx8fDE3NDczNjg5MjV8MA&ixlib=rb-4.1.0&q=80&w=1080" alt="modern office space with team working" />
          </div>
          
          <div className="company-description">
            <h3>Who We Are</h3>
            <p>
              We are a forward-thinking company dedicated to delivering exceptional
              solutions to our clients. With years of industry experience, our team
              of experts works tirelessly to ensure the highest quality standards
              in everything we do.
            </p>
            
            <div className="company-values">
              <div className="value-item">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="32" height="32"><rect width="256" height="256" fill="none"/><line x1="128" y1="128" x2="224" y2="32" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M195.88,60.12A95.92,95.92,0,1,0,218,94.56" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M161.94,94.06a48,48,0,1,0,13.11,43.46" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
                <h4>Our Mission</h4>
                <p>
                  To provide innovative solutions that empower businesses to reach
                  their full potential while maintaining the highest standards of
                  quality and customer satisfaction.
                </p>
              </div>
              
              <div className="value-item">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="32" height="32"><rect width="256" height="256" fill="none"/><circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="176" y1="100" x2="148" y2="128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="176" y1="128" x2="148" y2="100" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="108" y1="100" x2="80" y2="128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="108" y1="128" x2="80" y2="100" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><circle cx="128" cy="180" r="16"/></svg>
                <h4>Our Vision</h4>
                <p>
                  To become the industry leader in delivering exceptional services
                  while fostering lasting relationships with our clients and
                  contributing to their success.
                </p>
              </div>
            </div>
          </div>
          
          <div className="key-features">
            <div className="feature">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="24" height="24"><rect width="256" height="256" fill="none"/><polyline points="88 136 112 160 168 104" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
              <span>Professional Excellence</span>
            </div>
            <div className="feature">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="24" height="24"><rect width="256" height="256" fill="none"/><polyline points="88 136 112 160 168 104" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
              <span>Customer-Centric Approach</span>
            </div>
            <div className="feature">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="24" height="24"><rect width="256" height="256" fill="none"/><polyline points="88 136 112 160 168 104" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
              <span>Innovative Solutions</span>
            </div>
            <div className="feature">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="24" height="24"><rect width="256" height="256" fill="none"/><polyline points="88 136 112 160 168 104" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
              <span>Quality Assurance</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;