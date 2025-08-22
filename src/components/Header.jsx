import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import logo from '../assets/Header/Edverciity.png';

const courseData = {
  'Software Development': ['Web Development', 'UI/UX', 'Version Control', 'App Deployment'],
  'Full Stack': ['Frontend Mastery', 'Backend APIs', 'Database Design', 'DevOps'],
  'Special Programs': ['AI ML', 'Cybersecurity', 'Cloud Essentials', 'Data Engineering'],
  'Industrial Automation': ['PLC Logic', 'SCADA Systems', 'Instrumentation', 'Sensor Integration'],
  'Electronic Design': ['PCB Design', 'VLSI', 'Embedded Systems', 'Signal Processing'],
  ITIM: ['ITIL', 'Networking', 'Infrastructure Security', 'System Monitoring']
};

function Header() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeCategory, setActiveCategory] = useState('Software Development');
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const location = useLocation();
  const ref = useRef();

  useEffect(() => {
    const outsideClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('click', outsideClick);
    return () => document.removeEventListener('click', outsideClick);
  }, []);

  useEffect(() => {
    setIsMobileNavOpen(false);
  }, [location.pathname]);

  return (
    <>
      {/* 🔝 Top Strip */}
      <div className="top-strip">
        <div className="top-left">
          <Link to="/internship" className="nav-link">Internship</Link>
          <Link to="/placement" className="nav-link">Placement</Link>
          <div
            className="dropdown-wrapper"
            onMouseEnter={() => setActiveDropdown('insights')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <Link to="#" className="nav-link">
              Insights <span className={`arrow ${activeDropdown === 'insights' ? 'rotate' : ''}`}>&rsaquo;</span>
            </Link>
            {activeDropdown === 'insights' && (
              <div className="dropdown-menu">
                <Link to="/blog" className="dropdown-item">Blog</Link>
                <Link to="/student" className="dropdown-item">Student Corner</Link>
                <Link to="/testimonial" className="dropdown-item">Testimonials</Link>
                <Link to="/gallery" className="dropdown-item">Gallery</Link>
              </div>
            )}
          </div>
          <Link to="/faqs" className="nav-link">FAQs</Link>
        </div>
        <div className="top-right" >
          <span>🔴 info@yourdomain.com</span>
          <span> 📞 +91 9876543210</span>
        </div>
      </div>

      {/* 📌 Sticky Header */}
      <header className="header" ref={ref}>
        <div className="header-bar">
          <Link to="/" className="logo">
          <img src={logo} alt="logo"/>
          </Link>

          {/* ☰ Hamburger */}
          <div className="hamburger" onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}>
            ☰
          </div>

          {/* 🖥️ Desktop Nav */}
          <nav className="nav">
            <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>

            {/* Courses Dropdown */}
            <div
              className="nav-item"
              onMouseEnter={() => setActiveDropdown('courses')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link to="/courses" className="nav-link">
                Courses <span className={`arrow ${activeDropdown === 'courses' ? 'rotate' : ''}`}>&rsaquo;</span>
              </Link>
              {activeDropdown === 'courses' && (
                <div className="dropdown-panel">
                  <ul className="dropdown-left">
                    {Object.keys(courseData).map((cat) => (
                      <li
                        key={cat}
                        onMouseEnter={() => setActiveCategory(cat)}
                        className={`dropdown-category ${activeCategory === cat ? 'active' : ''}`}
                      >
                        {cat}
                      </li>
                    ))}
                  </ul>
                  <div className="dropdown-right">
                    <div className="course-grid">
                      {courseData[activeCategory]?.map((course, i) => (
                        <Link
                          key={i}
                          to={`/courses/${course.toLowerCase().replace(/ /g, '-')}`}
                          className="course-card"
                        >
                          {course}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Certifications Dropdown */}
            <div
              className="nav-item"
              onMouseEnter={() => setActiveDropdown('cert')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link to="/certifications" className="nav-link">
                Certifications <span className={`arrow ${activeDropdown === 'cert' ? 'rotate' : ''}`}>&rsaquo;</span>
              </Link>
              {activeDropdown === 'cert' && (
                <div className="cert-lines">
                  {[
                    'Certified Ethical Hacker',
                    'AutoCAD Specialist',
                    'PLC Automation Pro',
                    'Cloud Architect Expert',
                    'AI/ML Engineer'
                  ].map((title, i) => (
                    <Link
                      key={i}
                      to={`/certifications/${title.toLowerCase().replace(/ /g, '-')}`}
                      className="cert-line"
                    >
                      <span>{title}</span>
                      <span className="trending-badge">Trending</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Locate Us Dropdown */}
            <div
              className="nav-item"
              onMouseEnter={() => setActiveDropdown('locate')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link to="/Centers" className="nav-link">
                Locate Us <span className={`arrow ${activeDropdown === 'locate' ? 'rotate' : ''}`}>&rsaquo;</span>
              </Link>
              {activeDropdown === 'locate' && (
                <div className="simple-dropdown">
                  <Link to="/centres/sadar" className="simple-item">Sadar</Link>
                  <Link to="/centres/nandanwan" className="simple-item">Nandanwan</Link>
                </div>
              )}
            </div>

            {/* CTA */}
            <Link to="/enquiry" className="enquiry-btn">Contact</Link>
          </nav>
        </div>

        {/* 📱 Mobile Nav */}
        {isMobileNavOpen && (
          <div className="mobile-nav">
            <Link to="/" className="logo">
              <img src="/logo.png" alt="Logo" />
            </Link>

            <Link to="/" className="nav-link">Home</Link>

            {/* Courses */}
            <div className="nav-item">
              <Link to="/courses" className="nav-link">Courses</Link>
              <div className="dropdown-panel">
                <ul className="dropdown-left">
                  {Object.keys(courseData).map((cat) => (
                    <li
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`dropdown-category ${activeCategory === cat ? 'active' : ''}`}
                    >
                      {cat}
                    </li>
                  ))}
                </ul>
                <div className="dropdown-right">
                  <div className="course-grid">
                    {courseData[activeCategory]?.map((course, i) => (
                      <Link
                        key={i}
                        to={`/courses/${course.toLowerCase().replace(/ /g, '-')}`}
                        className="course-card"
                      >
                        {course}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Locate Us */}
            <div className="nav-item">
              <Link to="/centres" className="nav-link">Locate Us</Link>
              <div className="simple-dropdown">
                <Link to="/centres/sadar" className="simple-item">Sadar</Link>
                <Link to="/centres/nandanwan" className="simple-item">Nandanwan</Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

export default Header;