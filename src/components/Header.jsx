import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Header.css";
import logo from "../assets/Header/Edverciity.png";

const courseData = {
    "Data Science": [
    { id: "master-ds", title: "Master Diploma in Data Science" },
    { id: "master-ai", title: "Master Certification in Artificial Intelligence" },
    { id: "diploma-de", title: "Diploma in Data Engineering" },
    { id: "data-analyst-python", title: "Data Analyst using Python" },
    { id: "data-analyst-powerbi", title: "Data Analyst using PowerBI" },
  ],
  "Full Stack": [
    { id: "mern", title: "Full Stack MERN" },
    { id: "mean", title: "Full Stack MEAN" },
    { id: "java-full", title: "JAVA Full Stack" },
    { id: "python-full", title: "Python Full Stack" },
  ],
  "Software Development": [
    { id: "java", title: "Java & Advance Java" },
    { id: "python", title: "Python" },
    { id: "c", title: "C Programming" },
    { id: "cpp", title: "C++ Programming" },
    { id: "aspnet", title: "ASP.Net with C#" },
    { id: "django", title: "Django" },
    { id: "web-dev", title: "Web Development" },
    { id: "php", title: "PHP Development" },
  ],
  "Mechanical CAD": [
    { id: "plc", title: "AutoCAD Mechanical" },
    { id: "scada", title: "SolidWorks" },
    { id: "instrumentation", title: "NX CATIA" },
    { id: "creo", title: "Creo ANSYS" },
    { id: "product-design", title: "Product Design" },
    { id: "gd-t", title: "GD & T" }
  ],
  "Electrical CAD": [
    { id: "autocad", title: "AutoCAD Electrical" },
    { id: "electrical-basics", title: "Electrical" },
    { id: "eplan", title: "EPlan" },
    { id: "system-monitoring", title: "System Monitoring" }
  ],
  "Civil CAD": [
    { id: "autocad", title: "AutoCAD Civil" },
    { id: "revit", title: "Revit" },
    { id: "stord", title: "Staads" },
    { id: "etales", title: "ETables" },
    { id: "civil3d", title: "Civil 3D" },
    { id: "quantity-surveying", title: "Quantity Surveying" }
  ]

};

function Header() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeCategory, setActiveCategory] = useState("Full Stack");
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [courseType, setCourseType] = useState(); 
  const location = useLocation();
  const ref = useRef();
  const navigate = useNavigate();

  // Close dropdown on outside click
  useEffect(() => {
    const outsideClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("click", outsideClick);
    return () => document.removeEventListener("click", outsideClick);
  }, []);

  // Close mobile nav on route change
  useEffect(() => {
    setIsMobileNavOpen(false);
  }, [location.pathname]);

  // Handle IT/CAD toggle button clicks
  const handleItClick = () => {
    setCourseType("IT");
    navigate("/it");
  };

  const handleCadClick = () => {
    setCourseType("CAD");
    navigate("/cad");
  };

  return (
    <>
      {/* Top Strip */}
      <div className="top-strip">
        <div className="top-left">
          <Link to="/internship" className="nav-link">Internship</Link>
          <Link to="/placement" className="nav-link">Placement</Link>

          {/* Insights Dropdown */}
          <div
            className="dropdown-wrapper"
            onMouseEnter={() => setActiveDropdown("insights")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <span className="nav-link">
              Insights{" "}
              <span className={`arrow ${activeDropdown === "insights" ? "rotate" : ""}`}>›</span>
            </span>
            {activeDropdown === "insights" && (
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

        <div className="top-right">
          <span>
            <a href="mailto:info@yourdomain.com" target="_blank" rel="noopener noreferrer">✉️ info@yourdomain.com</a>
          </span>
          <span>
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">📞 +91 899078897</a>
          </span>
        </div>
      </div>

      {/* Sticky Header */}
      <header className="header" ref={ref}>
        <div className="header-bar">
          {/* Logo */}
          <Link to="/" className="logo">
            <img src={logo} alt="logo" />
          </Link>

          {/* Hamburger */}
          <div className="hamburger" onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}>☰</div>

          {/* Desktop Nav */}
          <nav className="nav">
            <Link to="/" className={`nav-link ${location.pathname === "/" ? "active" : ""}`}>Home</Link>

            {/* Courses Dropdown */}
            <div
              className="nav-item"
              onMouseEnter={() => setActiveDropdown("courses")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <span className="nav-link">
                Courses{" "}
                <span className={`arrow ${activeDropdown === "courses" ? "rotate" : ""}`}>›</span>
              </span>

              {activeDropdown === "courses" && (
                <div className="dropdown-panel">
                  <div style={{ display: "flex", justifyContent: "center", gap: "12px", marginBottom: "12px" }}>
                    <button
                      onClick={handleItClick}
                      style={{
                        padding: "4px 12px",
                        borderRadius: "6px",
                        border: "1px solid #1E3A8A",
                        background: courseType === "IT" ? "#1E3A8A" : "#fff",
                        color: courseType === "IT" ? "#fff" : "#1E3A8A",
                        cursor: "pointer",
                      }}
                    >
                      IT Courses
                    </button>
                    <button
                      onClick={handleCadClick}
                      style={{
                        padding: "4px 12px",
                        borderRadius: "6px",
                        border: "1px solid #1E3A8A",
                        background: courseType === "CAD" ? "#1E3A8A" : "#fff",
                        color: courseType === "CAD" ? "#fff" : "#1E3A8A",
                        cursor: "pointer",
                      }}
                    >
                      CAD Courses
                    </button>
                  </div>

                  <div style={{ display: "flex", gap: "24px" }}>
                    {/* Left Categories */}
                    <ul className="dropdown-left">
                      {Object.keys(courseData).map((cat) => (
                        <li
                          key={cat}
                          onMouseEnter={() => setActiveCategory(cat)}
                          className={`dropdown-category ${activeCategory === cat ? "active" : ""}`}
                        >
                          {cat}
                        </li>
                      ))}
                    </ul>

                    {/* Right Courses */}
                    <div className="dropdown-right">
                      <div className="course-grid">
                        {courseData[activeCategory]?.map((course) => (
                          <Link key={course.id} to={`/courses/${course.id}`} className="course-card">
                            {course.title}
                          </Link>
                        ))}
                      </div>
                   </div>
                  </div>
                </div>
              )}
            </div>

            {/* Certifications */}
            <div
              className="nav-item"
              onMouseEnter={() => setActiveDropdown("cert")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <span className="nav-link">
                Certifications{" "}
                <span className={`arrow ${activeDropdown === "cert" ? "rotate" : ""}`}>›</span>
              </span>

              {activeDropdown === "cert" && (
                <div className="cert-lines">
                  {["Certified Ethical Hacker","AutoCAD Specialist","PLC Automation Pro","Cloud Architect Expert","AI/ML Engineer"].map((title,i) => (
                    <Link key={i} to={`/certifications/${title.toLowerCase().replace(/ /g,"-")}`} className="cert-line">
                      <span>{title}</span>
                      <span className="trending-badge">Trending</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

<Link
  to="/students"
  className={`nav-link ${location.pathname === "/students" ? "active" : ""}`}
>
  Students Corner
</Link>


            {/* Locate Us */}
   <div
  className="nav-item"
  onMouseEnter={() => setActiveDropdown("locate")}
  onMouseLeave={() => setActiveDropdown(null)}
>
  <span className="nav-link">
    Contact Us{" "}
    <span
      className={`arrow ${activeDropdown === "locate" ? "rotate" : ""}`}
    >
      ›
    </span>
  </span>

  {activeDropdown === "locate" && (
    <div className="simple-dropdown">
      {/* Page + section link */}
      <a href="/centers#sadar" className="simple-item">Sadar</a>
      <a href="/centers#nandanvan" className="simple-item">Nandanvan</a>
    </div>
  )}
</div>


            {/* CTA */}
            <Link to="/enquiry" className="enquiry-btn">Enquiry Now</Link>
          </nav>
        </div>

        {/* Mobile Nav */}
        {isMobileNavOpen && (
          <div className="mobile-nav">
            <div className="mobile-nav-header">
              <img src={logo} alt="logo" className="mobile-logo" />
              <div className="close-btn" onClick={() => setIsMobileNavOpen(false)}>✖</div>
            </div>

            <Link to="/" className="nav-link" onClick={() => setIsMobileNavOpen(false)}>Home</Link>
            <Link to="/internship" className="nav-link" onClick={() => setIsMobileNavOpen(false)}>Internship</Link>
            <Link to="/placement" className="nav-link" onClick={() => setIsMobileNavOpen(false)}>Placement</Link>
            <Link to="/courses" className="nav-link" onClick={() => setIsMobileNavOpen(false)}>Courses</Link>
            <Link to="/certifications" className="nav-link" onClick={() => setIsMobileNavOpen(false)}>Certifications</Link>
            <Link to="/centres" className="nav-link" onClick={() => setIsMobileNavOpen(false)}>Locate Us</Link>
            <Link to="/enquiry" className="enquiry-btn" onClick={() => setIsMobileNavOpen(false)}>Contact</Link>
          </div>
        )}
      </header>
    </>
  );
}

export default Header;
