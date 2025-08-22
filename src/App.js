import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';
import FounderCAD from './components/pages/FounderCAD';
import FounderIT from './components/pages/FounderIT';
import ExploreCourses from './components/pages/ExploreCourses';
import Internships from './components/pages/Internships';
import Centers from './components/pages/Centers';
import Testimonials from './components/pages/Testimonials';
import StudentProject from './components/pages/StudentsProject';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/founder-cad" element={<FounderCAD />} />
       <Route path="/founder-it" element={<FounderIT />} />
       <Route path="/courses" element={<ExploreCourses />} />
        <Route path="/internship" element={<Internships />} />
 <Route path="/testimonial" element={<Testimonials />} />
 <Route path="/student" element={<StudentProject />} />
        <Route path="/Centers" element={<Centers />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
