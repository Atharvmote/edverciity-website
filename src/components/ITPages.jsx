// import React from 'react';
// import { Link } from 'react-router-dom';
// import'./ITPA.css';

// function ITPage() {
//   const itCourses = {
//     "Full Stack Development": [
//       { id: "mern", title: "Full Stack MERN", description: "MongoDB, Express, React, Node.js" },
//       { id: "mean", title: "Full Stack MEAN", description: "MongoDB, Express, Angular, Node.js" },
//       { id: "java-full", title: "JAVA Full Stack", description: "Java, Spring Boot, React" },
//       { id: "python-full", title: "Python Full Stack", description: "Python, Django, React" }
//     ],
//     "Data Science & AI": [
//       { id: "master-ds", title: "Master Diploma in Data Science", description: "Complete Data Science Program" },
//       { id: "master-ai", title: "Master Certification in AI", description: "Artificial Intelligence & ML" },
//       { id: "diploma-de", title: "Diploma in Data Engineering", description: "Data Pipeline & Analytics" },
//       { id: "data-analyst-python", title: "Data Analyst using Python", description: "Python for Data Analysis" },
//       { id: "data-analyst-powerbi", title: "Data Analyst using PowerBI", description: "Business Intelligence" }
//     ],
//     "Programming Languages": [
//       { id: "java", title: "Java & Advance Java", description: "Core Java to Advanced Concepts" },
//       { id: "python", title: "Python Programming", description: "Python from Basics to Advanced" },
//       { id: "c", title: "C Programming", description: "Fundamentals of C Programming" },
//       { id: "cpp", title: "C++ Programming", description: "Object-Oriented Programming" },
//       { id: "aspnet", title: "ASP.Net with C#", description: "Web Development with .NET" },
//       { id: "django", title: "Django Framework", description: "Python Web Framework" },
//       { id: "web-dev", title: "Web Development", description: "HTML, CSS, JavaScript" },
//       { id: "php", title: "PHP Development", description: "Server-side Web Development" }
//     ],
//     "Special Programs": [
//       { id: "ai-ml", title: "AI/ML Specialization", description: "Machine Learning & AI" },
//       { id: "cybersecurity", title: "Cybersecurity", description: "Information Security" },
//       { id: "cloud", title: "Cloud Essentials", description: "AWS, Azure, GCP" },
//       { id: "rpa", title: "Robotic Process Automation", description: "Automation with RPA" },
//       { id: "blockchain", title: "Blockchain Technology", description: "Cryptocurrency & DApps" },
//       { id: "iot", title: "Internet of Things", description: "IoT Development" }
//     ]
//   };

//   return (
//     <div className="it-page">
//       {/* Hero Section */}
//       <section className="hero-section">
//         <div className="container">
//           <div className="hero-content">
//             <h1>IT Training Programs</h1>
//             <p>Master the latest technologies and build a successful career in Information Technology</p>
//             <div className="hero-stats">
//               <div className="stat">
//                 <h3>10,000+</h3>
//                 <p>Students Trained</p>
//               </div>
//               <div className="stat">
//                 <h3>95%</h3>
//                 <p>Placement Rate</p>
//               </div>
//               <div className="stat">
//                 <h3>50+</h3>
//                 <p>Industry Partners</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Course Categories */}
//       <section className="courses-section">
//         <div className="container">
//           <h2>Our IT Course Categories</h2>
//           <div className="course-categories">
//             {Object.entries(itCourses).map(([category, courses]) => (
//               <div key={category} className="category-card">
//                 <h3>{category}</h3>
//                 <div className="courses-grid">
//                   {courses.map((course) => (
//                     <Link key={course.id} to={`/courses/${course.id}`} className="course-item">
//                       <h4>{course.title}</h4>
//                       <p>{course.description}</p>
//                       <span className="learn-more">Learn More →</span>
//                     </Link>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Why Choose IT */}
//       <section className="why-choose-section">
//         <div className="container">
//           <h2>Why Choose IT Training at EdverCiity?</h2>
//           <div className="features-grid">
//             <div className="feature">
//               <div className="feature-icon">💻</div>
//               <h3>Industry-Ready Skills</h3>
//               <p>Learn the most in-demand technologies used by top companies</p>
//             </div>
//             <div className="feature">
//               <div className="feature-icon">🎯</div>
//               <h3>Hands-on Projects</h3>
//               <p>Work on real-world projects to build your portfolio</p>
//             </div>
//             <div className="feature">
//               <div className="feature-icon">👨‍🏫</div>
//               <h3>Expert Mentors</h3>
//               <p>Learn from industry professionals with years of experience</p>
//             </div>
//             <div className="feature">
//               <div className="feature-icon">🏢</div>
//               <h3>Placement Support</h3>
//               <p>Get assistance with job placements and career guidance</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="cta-section">
//         <div className="container">
//           <div className="cta-content">
//             <h2>Ready to Start Your IT Journey?</h2>
//             <p>Join thousands of successful IT professionals who started their career with EdverCiity</p>
//             <div className="cta-buttons">
//               <Link to="/enquiry" className="btn-primary">Enroll Now</Link>
//               <Link to="/founder-it" className="btn-secondary">Meet Our IT Mentor</Link>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default ITPage;
