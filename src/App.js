import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';
import FounderCAD from './components/pages/FounderCAD';
import FounderIT from './components/pages/FounderIT';
import ITPage from './components/pages/ITPage';
import CADPage from './components/pages/CADPage';
import ExploreCourses from './components/pages/ExploreCourses';
import Internships from './components/pages/Internships';
import Centers from './components/pages/Centers';
import Testimonials from './components/pages/Testimonials';
import StudentProject from './components/pages/StudentsProject';
import GoogleReviewsSidebar from './components/pages/GoogleReviewsSidebar';
import SocialIcon from './components/pages/SocialIcon';
import StudentsCorner from './components/pages/StudentCorner';
import CourseDetail from "./components/pages/CourseDetail";
import CoursesPage from "./components/pages/CoursesPage";
import EnquiriesList from './components/EnquiriesList';



function App() {
  return (
    <Router>
      <Header />
      <GoogleReviewsSidebar />
      <SocialIcon/>
      <Routes>
        <Route path="/" element={<Body />} />

        <Route path="/founder-cad" element={<FounderCAD />} />
        <Route path="/founder-it" element={<FounderIT />} />
        
        {/* IT and CAD Pages */}
        <Route path="/it" element={<ITPage />} />
        <Route path="/cad" element={<CADPage />} />
        <Route path="/studentscorner" element={<StudentsCorner />} />

        <Route path="/courses" element={<CoursesPage />} />

        {/* ✅ Course detail page */}
        <Route path="/courses/:courseId" element={<CourseDetail />} />
    

        <Route path="/internship" element={<Internships />} />
        <Route path="/testimonial" element={<Testimonials />} />
        <Route path="/student" element={<StudentProject />} />
        <Route path="/centers" element={<Centers />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
