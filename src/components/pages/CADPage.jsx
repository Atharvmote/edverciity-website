import React from 'react';
import { Link } from 'react-router-dom';
import  "./CADPage.css";

function CADPage() {
  const cadCourses = {
    "Mechanical CAD": [
      { id: "autocad-mechanical", title: "AutoCAD Mechanical", description: "2D & 3D Mechanical Design" },
      { id: "solidworks", title: "SolidWorks", description: "3D CAD Design & Simulation" },
      { id: "nx-catia", title: "NX CATIA", description: "Advanced CAD/CAM/CAE" },
      { id: "creo-ansys", title: "Creo ANSYS", description: "Product Design & Analysis" },
      { id: "product-design", title: "Product Design", description: "Industrial Design Process" },
      { id: "gd-t", title: "GD & T", description: "Geometric Dimensioning & Tolerancing" }
    ],
    "Civil CAD": [
      { id: "autocad-civil", title: "AutoCAD Civil", description: "Civil Engineering Design" },
      { id: "revit", title: "Revit Architecture", description: "Building Information Modeling" },
      { id: "staad-pro", title: "STAAD Pro", description: "Structural Analysis & Design" },
      { id: "etables", title: "ETables", description: "Structural Design Software" },
      { id: "civil3d", title: "Civil 3D", description: "Civil Infrastructure Design" },
      { id: "quantity-surveying", title: "Quantity Surveying", description: "Cost Estimation & Planning" }
    ],
    "Electrical CAD": [
      { id: "autocad-electrical", title: "AutoCAD Electrical", description: "Electrical System Design" },
      { id: "electrical-basics", title: "Electrical Engineering", description: "Fundamentals & Applications" },
      { id: "eplan", title: "EPlan", description: "Electrical Engineering Software" },
      { id: "system-monitoring", title: "System Monitoring", description: "SCADA & Control Systems" }
    ],
    "Architecture & BIM": [
      { id: "revit-arch", title: "Revit Architecture", description: "Building Design & Documentation" },
      { id: "sketchup", title: "SketchUp", description: "3D Modeling & Visualization" },
      { id: "3ds-max", title: "3DS MAX", description: "3D Animation & Rendering" },
      { id: "lumion", title: "Lumion", description: "Architectural Visualization" },
      { id: "v-ray", title: "V-Ray", description: "Photorealistic Rendering" }
    ]
  };

  return (
    <div className="cad-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1>CAD Training Programs</h1>
            <p>Master Computer-Aided Design and build a successful career in Engineering</p>
            <div className="hero-stats">
              <div className="stat">
                <h3>15,000+</h3>
                <p>Students Trained</p>
              </div>
              <div className="stat">
                <h3>98%</h3>
                <p>Placement Rate</p>
              </div>
              <div className="stat">
                <h3>20+</h3>
                <p>Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Categories */}
      <section className="courses-section">
        <div className="container">
          <h2>Our CAD Course Categories</h2>
          <div className="course-categories">
            {Object.entries(cadCourses).map(([category, courses]) => (
              <div key={category} className="category-card">
                <h3>{category}</h3>
                <div className="courses-grid">
                  {courses.map((course) => (
                    <Link key={course.id} to={`/courses/${course.id}`} className="course-item">
                      <h4>{course.title}</h4>
                      <p>{course.description}</p>
                      <span className="learn-more">Learn More →</span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose CAD */}
      <section className="why-choose-section">
        <div className="container">
          <h2>Why Choose CAD Training at EdverCiity?</h2>
          <div className="features-grid">
            <div className="feature">
              <div className="feature-icon">🎯</div>
              <h3>Industry-Standard Software</h3>
              <p>Learn the same CAD software used by top engineering companies worldwide</p>
            </div>
            <div className="feature">
              <div className="feature-icon">🏗️</div>
              <h3>Real Projects</h3>
              <p>Work on actual engineering projects to build your portfolio</p>
            </div>
            <div className="feature">
              <div className="feature-icon">👨‍💼</div>
              <h3>Expert Instructors</h3>
              <p>Learn from experienced engineers with international exposure</p>
            </div>
            <div className="feature">
              <div className="feature-icon">🏆</div>
              <h3>Certification</h3>
              <p>Get industry-recognized certificates to boost your career</p>
            </div>
          </div>
        </div>
      </section>

      {/* Software Showcase */}
      <section className="software-showcase">
        <div className="container">
          <h2>Software We Teach</h2>
          <div className="software-grid">
            <div className="software-item">
              <div className="software-logo">🔄</div>
              <h3>AutoCAD</h3>
              <p>2D & 3D Design</p>
            </div>
            <div className="software-item">
              <div className="software-logo">⚙️</div>
              <h3>SolidWorks</h3>
              <p>3D CAD Design</p>
            </div>
            <div className="software-item">
              <div className="software-logo">🏗️</div>
              <h3>Revit</h3>
              <p>BIM Software</p>
            </div>
            <div className="software-item">
              <div className="software-logo">📐</div>
              <h3>STAAD Pro</h3>
              <p>Structural Analysis</p>
            </div>
            <div className="software-item">
              <div className="software-logo">🎨</div>
              <h3>3DS MAX</h3>
              <p>3D Visualization</p>
            </div>
            <div className="software-item">
              <div className="software-logo">⚡</div>
              <h3>ANSYS</h3>
              <p>Engineering Simulation</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Your CAD Journey?</h2>
            <p>Join thousands of successful engineers who started their career with EdverCiity</p>
            <div className="cta-buttons">
              <Link to="/enquiry" className="btn-primary">Enroll Now</Link>
              <Link to="/founder-cad" className="btn-secondary">Meet Our CAD Mentor</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CADPage;
