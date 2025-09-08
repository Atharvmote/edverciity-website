// import React from "react";
// import { Link } from "react-router-dom";
// import "./CoursesPage.css";

// // Import category images
// import MastersImg from "../../assets/Body/TopCourses.jpg";
// import SoftwareImg from "../../assets/Body/TopCourses.jpg";
// import DataScienceImg from "../../assets/Body/TopCourses.jpg";
// import SpecialProgramsImg from "../../assets/Body/TopCourses.jpg";

// // Courses data with individual IDs (for dynamic detail page)
// const allCourses = [
//   {
//     category: "Masters Certification",
//     image: MastersImg,
//     courses: [
//       { name: "Master Certificate In Data Science", id: "datascience" },
//       { name: "Full Stack Development - MERN", id: "mern" },
//       { name: "Full Stack Development - MEAN", id: "mean" },
//       { name: "Software Development", id: "softwaredev" },
//       { name: "Artificial Intelligence", id: "ai" }
//     ]
//   },
//   {
//     category: "Software Development",
//     image: SoftwareImg,
//     courses: [
//       { name: "Python", id: "python" },
//       { name: "Java & Advanced Java", id: "java" },
//       { name: "C Programming", id: "c" },
//       { name: "C++ Programming", id: "cpp" },
//       { name: "ASP.Net With C#", id: "aspnet" },
//       { name: "Django", id: "django" },
//       { name: "Web Designing", id: "web-design" },
//       { name: "PHP Development", id: "php" }
//     ]
//   },
//   {
//     category: "Data Science Program",
//     image: DataScienceImg,
//     courses: [
//       { name: "Data Science", id: "data-science-program" },
//       { name: "Artificial Intelligence", id: "ai-program" },
//       { name: "Machine Learning", id: "ml" },
//       { name: "Data Analytics", id: "data-analytics" }
//     ]
//   },
//   {
//     category: "Special Programs",
//     image: SpecialProgramsImg,
//     courses: [
//       { name: "Ethical Hacking", id: "ethical-hacking" },
//       { name: "Cyber Security", id: "cyber-security" },
//       { name: "Robotic Process Automation", id: "rpa" },
//       { name: "Blockchain", id: "blockchain" },
//       { name: "Internet Of Things", id: "iot" },
//       { name: "Android App Development Using Kotlin", id: "kotlin" }
//     ]
//   }
// ];

// function CoursesPage() {
//   return (
//     <div className="courses-page">
//       {allCourses.map((category, idx) => (
//         <div
//           key={idx}
//           className={`category-section ${idx % 2 === 0 ? "row" : "row-reverse"}`}
//         >
//           {/* Courses list */}
//           <div className="courses-column">
//             <h2>{category.category}</h2>
//             <ul>
//               {category.courses.map((course, i) => (
//                 <li key={i} className="course-item">
//                   {/* ✅ Link dynamically goes to /courses/:id */}
//                   <Link to={`/courses/${course.id}`} className="course-link">
//                     {course.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Category image */}
//           <div className="category-image">
//             <img src={category.image} alt={category.category} />
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default CoursesPage;
// src/components/pages/CoursesPage.jsx
import React from "react";
import { Link } from "react-router-dom";
import courses from "../../assets/data/Course";

function CoursesPage() {
  return (
    <div>
      <h1>Our Courses</h1>
      <ul>
        {courses.map(course => (
          <li key={course.id}>
            <Link to={`/courses/${course.id}`}>
              {course.title}
            </Link>
            <p>{course.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CoursesPage;
