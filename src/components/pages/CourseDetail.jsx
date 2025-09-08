import React from "react";
import { useParams } from "react-router-dom";
import courses from "../../assets/data/Course";
import "./CourseDetail.css";

function CourseDetail() {
  const { courseId } = useParams();
  const course = courses.find(c => c.id === courseId);

  if (!course) return <h2 className="not-found">Course Not Found</h2>;

  return (
    <div className="course-detail-container">
      {/* Header Section */}
      <div className="course-header">
        <div className="image-container">
          {course.image ? (
            <img src={course.image} alt={course.title} className="course-image" />
          ) : (
            <div className="image-placeholder">
              <span>Course Image</span>
            </div>
          )}
        </div>
        <div className="header-content">
          <h1 className="course-title">{course.title}</h1>
          <p className="course-description">{course.description}</p>
        </div>
      </div>

      {/* Course Content */}
      <div className="course-content">

        {/* Objective */}
        {course.objective && (
          <div className="content-section">
            <h2>Objective</h2>
            <p>{course.objective}</p>
          </div>
        )}

        {/* Info Grid */}
        {course.info && (
          <div className="info-grid">
            {Object.entries(course.info).map(([key, value]) => (
              <div key={key} className="info-item">
                <h3>{key.charAt(0).toUpperCase() + key.slice(1)}</h3>
                <p>{value}</p>
              </div>
            ))}
          </div>
        )}

        {/* Topics */}
        {course.topics && Array.isArray(course.topics) && (
          <div className="content-section">
            <h2>Topics Covered</h2>
            <ul className="topics-list">
              {course.topics.map((topic, index) => (
                <li key={index} className="topic-item">
                  <span className="tick-mark">✓</span>
                  {topic}
                </li>
              ))}
            </ul>
          </div>
        )}
{/* Scope, Who is For, Job Roles */}
        <div className="scope-section">
          {/* Scope */}
          {course.scope && (
            <>
              <h2>Scope & Career Opportunities</h2>
              <p>{course.scope}</p>
            </>
          )}

          {/* Who is this course for */}
        {course.whoIsFor && course.whoIsFor.length > 0 && (
  <>
    <h2 className="course-for-heading">Who is this course for?</h2>
    <div className="course-list">
      {course.whoIsFor.map((person, idx) => (
        <div key={idx} className="course-list-item">{person}</div>
      ))}
    </div>
  </>
)}

{course.jobRoles && course.jobRoles.length > 0 && (
  <>
    <h2 className="job-roles-heading">Job Roles After Completion</h2>
    <div className="job-roles-section">
      {course.jobRoles.map((role, idx) => (
        <div key={idx} className="job-role-item">{role}</div>
      ))}
    </div>
  </>
)}
</div>
        {/* Real-time Projects + Form Side by Side */}
        {course.realTimeProjects && course.formPath && (
          <div className="scope-form-section">
            {/* Left - Real-time Projects */}
            <div className="scope-section">
              <h2>{course.realTimeProjects.heading}</h2>
              <p>{course.realTimeProjects.details}</p>
            </div>

            {/* Right - Application Form */}
            <div className="apply-section">
              <h2>Apply Now</h2>
              <form className="application-form">
                <div className="form-group">
                  <input type="text" placeholder="Full Name" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Email Address" required />
                </div>
                <div className="form-group">
                  <input type="tel" placeholder="Phone Number" />
                </div>
                <button type="submit" className="submit-btn">Submit Application</button>
              </form>
            </div>
          </div>
        )}

        
      </div>
    </div>
  );
}

export default CourseDetail;
