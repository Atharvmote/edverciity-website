import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Header.css";
import logo from "../assets/Header/Edverciity.png";

// IT Courses
const itCourses = {
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
};

// CAD Courses
const cadCourses = {
  "Mechanical CAD": [
    { id: "autocad-mech", title: "AutoCAD Mechanical" },
    { id: "solidworks", title: "SolidWorks" },
    { id: "nx-catia", title: "NX CATIA" },
    { id: "creo-ansys", title: "Creo ANSYS" },
    { id: "product-design", title: "Product Design" },
    { id: "gd-t", title: "GD & T" },
  ],
  "Electrical CAD": [
    { id: "autocad-elec", title: "AutoCAD Electrical" },
    { id: "electrical-basics", title: "Electrical" },
    { id: "eplan", title: "EPlan" },
    { id: "system-monitoring", title: "System Monitoring" },
  ],
  "Civil CAD": [
    { id: "autocad-civil", title: "AutoCAD Civil" },
    { id: "revit", title: "Revit" },
    { id: "staads", title: "Staads" },
    { id: "etabs", title: "ETabs" },
    { id: "civil3d", title: "Civil 3D" },
    { id: "quantity-surveying", title: "Quantity Surveying" },
  ],
};

function Header() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [courseType, setCourseType] = useState("IT");
  const [activeCategory, setActiveCategory] = useState("Data Science");
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const location = useLocation();
  const ref = useRef();
  const navigate = useNavigate();

  // close dropdown on outside click
  useEffect(() => {
    const outsideClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("click", outsideClick);
    return () => document.removeEventListener("click", outsideClick);
  }, []);

  // close mobile nav on route change
  useEffect(() => {
    setIsMobileNavOpen(false);
  }, [location.pathname]);

  // navigation handlers
  const handleItClick = () => {
    setCourseType("IT");
    setActiveCategory("Data Science");
    navigate("/it");
  };

  const handleCadClick = () => {
    setCourseType("CAD");
    setActiveCategory("Mechanical CAD");
    navigate("/cad");
  };

  // current courses
  const currentCourses = courseType === "IT" ? itCourses : cadCourses;

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
              Insights <span className={`arrow ${activeDropdown === "insights" ? "rotate" : ""}`}>›</span>
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
          <span><a href="mailto:info@yourdomain.com">✉️ info@yourdomain.com</a></span>
          <span><a href="https://wa.me/919876543210">📞 +91 899078897</a></span>
        </div>
      </div>

      {/* Header */}
      <header className="header" ref={ref}>
        <div className="header-bar">
          <Link to="/" className="logo">
            <img src={logo} alt="logo" />
          </Link>

          <div className="hamburger" onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}>☰</div>

          <nav className="nav">
            <Link to="/" className={`nav-link ${location.pathname === "/" ? "active" : ""}`}>Home</Link>

            {/* Courses Dropdown */}
            <div
              className="nav-item"
              onMouseEnter={() => setActiveDropdown("courses")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <span className="nav-link">
                Courses <span className={`arrow ${activeDropdown === "courses" ? "rotate" : ""}`}>›</span>
              </span>

              {activeDropdown === "courses" && (
                <div className="dropdown-panel">
                  {/* Toggle IT / CAD */}
                  <div style={{ display: "flex", justifyContent: "center", gap: "12px", marginBottom: "12px" }}>
                    <button
                      onMouseEnter={() => {
                        setCourseType("IT");
                        setActiveCategory("Data Science");
                      }}
                      onClick={handleItClick}
                      className={`toggle-btn ${courseType === "IT" ? "active" : ""}`}
                    >
                      IT Courses
                    </button>
                    <button
                      onMouseEnter={() => {
                        setCourseType("CAD");
                        setActiveCategory("Mechanical CAD");
                      }}
                      onClick={handleCadClick}
                      className={`toggle-btn ${courseType === "CAD" ? "active" : ""}`}
                    >
                      CAD Courses
                    </button>
                  </div>

                  <div style={{ display: "flex", gap: "24px" }}>
                    {/* Categories */}
                    <ul className="dropdown-left">
                      {Object.keys(currentCourses).map((cat) => (
                        <li
                          key={cat}
                          onMouseEnter={() => setActiveCategory(cat)}
                          className={`dropdown-category ${activeCategory === cat ? "active" : ""}`}
                        >
                          {cat}
                        </li>
                      ))}
                    </ul>

                    {/* Courses */}
                    <div className="dropdown-right">
                      <div className="course-grid">
                        {currentCourses[activeCategory]?.map((course) => (
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

          {/* Certifications Dropdown */}
<div
  className="nav-item"
  onMouseEnter={() => setActiveDropdown("cert")}
  onMouseLeave={() => setActiveDropdown(null)}
>
  <span className="nav-link">
    Certifications <span className={`arrow ${activeDropdown === "cert" ? "rotate" : ""}`}>›</span>
  </span>

  {activeDropdown === "cert" && (
    <div className="certlines" style={{ display: "flex", flexDirection: "column", gap: "6px", padding: "8px" }}>
      {[
        "Diploma in Artificial Intelligence",
        "AutoCAD Specialist",
        "Diploma in Data Science",
        "PLC Automation Pro",
        "Full Stack MERN Developer"
      ].map((title, i) => (
        <Link
          key={i}
          to={`/certifications/${title.toLowerCase().replace(/ /g, "-")}`}
          className="cert-line"
          style={{
            color: "pink",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "6px 12px",
            borderBottom: "1px solid #ddd",
            borderRadius: "4px",
            textDecoration: "none",
          }}>
          <span>{title}</span>
        </Link>
      ))}
    </div>
  )}
</div>

            <Link to="/studentscorner" className="nav-link">Student Corner</Link>
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
            <Link to="/it" className="nav-link" onClick={() => setIsMobileNavOpen(false)}>IT Courses</Link>
            <Link to="/cad" className="nav-link" onClick={() => setIsMobileNavOpen(false)}>CAD Courses</Link>
            <Link to="/certification" className="nav-link" onClick={() => setIsMobileNavOpen(false)}>Certification</Link>
            <Link to="/student" className="nav-link" onClick={() => setIsMobileNavOpen(false)}>Student Corner</Link>
            <Link to="/blog" className="nav-link" onClick={() => setIsMobileNavOpen(false)}>Blog</Link>
            <Link to="/testimonial" className="nav-link" onClick={() => setIsMobileNavOpen(false)}>Testimonials</Link>
            <Link to="/gallery" className="nav-link" onClick={() => setIsMobileNavOpen(false)}>Gallery</Link>
            <Link to="/faqs" className="nav-link" onClick={() => setIsMobileNavOpen(false)}>FAQs</Link>
            <Link to="/enquiry" className="enquiry-btn" onClick={() => setIsMobileNavOpen(false)}>Enquiry Now</Link>
          </div>
        )}
      </header>
    </>
  );
}

export default Header;
