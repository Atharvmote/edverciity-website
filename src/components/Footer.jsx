import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Footer.css';

function Footer() {
  const navigate = useNavigate();

  const sections = {
    "Mechanical Software": [
      { label: "AutoCAD Mechanical", path: "/courses/autocad-mechanical" },
      { label: "ANSYS", path: "/courses/ansys" },
      { label: "CREO", path: "/courses/creo" },
      { label: "NX CAD", path: "/courses/nx-cad" },
      { label: "CATIA", path: "/courses/catia" },
      { label: "Solidworks", path: "/courses/solidworks" }
    ],
    "Civil Software": [
      { label: "AutoCAD Civil", path: "/courses/autocad-civil" },
      { label: "STAAD Pro", path: "/courses/staad-pro" },
      { label: "SKETCHUP", path: "/courses/sketchup" },
      { label: "3DS MAX", path: "/courses/3ds-max" },
      { label: "5D BIM", path: "/courses/5d-bim" },
      { label: "NAVISWORKS", path: "/courses/navisworks" }
    ],
    "Architecture Software": [
      { label: "Revit ARCH", path: "/courses/revit-arch" },
      { label: "SketchUp", path: "/courses/sketchup-arch" },
      { label: "LUMION", path: "/courses/lumion" },
      { label: "3DS MAX", path: "/courses/3ds-max-arch" },
      { label: "V-RAY", path: "/courses/v-ray" }
    ],
    "Masters Certification": [
      { label: "Data Science", path: "/masters/data-science" },
      { label: "Full Stack MERN", path: "/masters/mern" },
      { label: "Full Stack MEAN", path: "/masters/mean" },
      { label: "Software Development", path: "/masters/software-dev" },
      { label: "Artificial Intelligence", path: "/masters/ai" }
    ],
    "Data Science Program": [
      { label: "Data Science", path: "/programs/data-science" },
      { label: "Artificial Intelligence", path: "/programs/ai" },
      { label: "Machine Learning", path: "/programs/ml" },
      { label: "Data Analytics", path: "/programs/data-analytics" }
    ],
    "Quick Links": [
      { label: "Home", path: "/" },
      { label: "Blog", path: "/blog" },
      { label: "Career", path: "/career" },
      { label: "Placements", path: "/placements" }
    ],
    "About Edverciity": [
      { label: "About Us", path: "/about" },
      { label: "About Director", path: "/about-director" }
    ],
    "Insights": [
      { label: "Testimonials", path: "/testimonials" },
      { label: "Photo Gallery", path: "/gallery/photos" },
      { label: "Video Gallery", path: "/gallery/videos" },
      { label: "Student Projects", path: "/projects" }
    ],
    "Locate US":[
        {
            label: "Nandanvan"
            
        },
       ]
  };

  return (
    <footer className="footer">
      <div className="footer-grid">
        {Object.entries(sections).map(([title, links]) => (
          <div className="footer-column" key={title}>
            <h4>{title}</h4>
            <ul>
              {links.map((item, idx) => (
                <li key={idx} onClick={() => navigate(item.path)}>
                  {item.label}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="footer-bottom">
        <p>© 2025 Edverciity. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

