import React, { useEffect, useRef } from 'react';
import './WhyITCAD.css';
import { gsap } from 'gsap';

const benefits = [
  {
    icon: '/3c7e08691640c2c7e05a89fefa740c2d.jpg',
    title: 'Industry-Relevant Skills',
    description: 'Master modern IT frameworks and CAD techniques used globally.',
  },
  {
    icon: '/3c7e08691640c2c7e05a89fefa740c2d.jpg',
    title: 'Job-Ready Curriculum',
    description: 'Bridging theory and hands-on learning for real-world impact.',
  },
  {
    icon: '/3c7e08691640c2c7e05a89fefa740c2d.jpg',
    title: 'Certifications That Matter',
    description: 'Globally recognized credentials from NSDC, ISO & more.',
  },
  {
    icon: '/3c7e08691640c2c7e05a89fefa740c2d.jpg',
    title: 'Expert Mentorship',
    description: 'Learn from professionals and CAD architects who build the future.',
  }
];

function WhyITCAD() {
  const sectionRef = useRef();
  const cardRefs = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, scale: 0.95 },
      { opacity: 1, scale: 1, duration: 1, ease: 'power3.out' }
    );

    gsap.fromTo(
      cardRefs.current,
      { y: 50, opacity: 0, rotateY: -45 },
      {
        y: 0,
        opacity: 1,
        rotateY: 0,
        duration: 1,
        ease: 'back.out(1.7)',
        stagger: 0.3,
        delay: 0.3
      }
    );
  }, []);

  return (
    <section className="why-section" ref={sectionRef}>
      <h2 className="why-heading">🚀 Your Gateway to Excellence in IT & CAD Education</h2>
      <div className="why-grid">
        {benefits.map((benefit, index) => (
          <div
            className="why-card"
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
          >
            <img src={benefit.icon} alt={benefit.title} className="why-icon" />
            <h3>{benefit.title}</h3>
            <p>{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyITCAD;
