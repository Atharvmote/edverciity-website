import React, { useState } from 'react';
import './HoverPopup.css';
import { FaCode, FaBrain, FaLayerGroup } from 'react-icons/fa';

const iconMap = {
  'Development': <FaCode />,
  'Full Stack': <FaLayerGroup />,
  'AI & Data': <FaBrain />
};

function HoverPopup({ info, paths }) {
  const [hoverCategory, setHoverCategory] = useState(Object.keys(info)[0]);

  return (
    <div className="hover-popup" onMouseLeave={() => setHoverCategory(null)}>
      <div className="popup-left">
        {Object.keys(info).map((category, i) => (
          <div
            key={i}
            className={`popup-category ${hoverCategory === category ? 'active-cat' : ''}`}
            onMouseEnter={() => setHoverCategory(category)}
          >
            {iconMap[category] || <FaLayerGroup />}
            <span>{category}</span>
          </div>
        ))}
      </div>
      <div className="popup-right">
        {info[hoverCategory]?.map((course, j) => (
          <button
            key={j}
            className="course-button"
            onClick={() => window.location.assign(paths?.[course] || '/')}
          >
            {course}
          </button>
        ))}
      </div>
    </div>
  );
}

export default HoverPopup;