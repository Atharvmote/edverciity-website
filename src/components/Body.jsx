import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Body.css';
import main from '../assets/Body/1.jpg';
import TopY from '../assets/Body/TopY.jpg';
//Tree images of top slider
 import about9 from '../assets/Body/about-logo.png';
 import TopX from '../assets/Body/TopCourses.jpg';

import Axx from '../assets/Company/accenture.jpg'
import  mindtreeX from '../assets/Company/Mindtree.jpg';
import infosysX from '../assets/Company/Infosys.jpg';
import microsoftX from '../assets/Company/Microsoft.jpg';
import HclX from '../assets/Company/HCL.jpg';

import  tcslogo  from '../assets/Company/tcslogo.jpg';
import CapGe from '../assets/Company/Capgemini-logo.jpg';
import Wipro from '../assets/Company/Wipro-logo.jpg';
import meta from '../assets/Company/Meta.jpg'
import Mahi from '../assets/Company/tech-mahindra.webp';

import Cicso from '../assets/Company/Cisco.jpg';
import Cogni from '../assets/Company/cognizant.webp';

import internship from '../assets/Company/internship.png';
import  aicsm from '../assets/Company/aicsm-round-logo-new-250x250.webp';
import nsdc from '../assets/Company/nsdc-logo-png_seeklogo-408075.webp';
import Skill from '../assets/Company/SkillIndia-logo.webp';
import Iso from '../assets/Company/ISO-logo.jpg';

import Ak from '../assets/Company/Ak.jpg';
import SU from '../assets/Company/Swapnil-Udapurkar.jpeg';

import place from '../assets/Company/Placement.png';
import reviewImg from '../assets/Company/Google-review.png';

const StepCard = ({ step, visible, position, index }) => {
  return (
    <div className={`step-card ${position} ${visible ? 'visible' : ''}`}
         data-index={index}
         style={{ '--delay': index * 0.2 }}>
      <div className="step-number-container">
        <div className="ocean-effect"></div>
        <div className="step-number">{step.id}</div>
      </div>
      <h3 className='wow'>{step.title}</h3>
      <p>{step.desc}</p>
    </div>
  );
};

const Body = () => {
  // State declarations
  const [index, setIndex] = useState(0);
  const [placementIndex, setPlacementIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [startIndex, setStartIndex] = useState(0);
  const [courseIndex, setCourseIndex] = useState(0);
  const [visibleSteps, setVisibleSteps] = useState([]);
  const [centerVisible, setCenterVisible] = useState(false);
  
  // Refs
  const trackRef = useRef();
  const courseTrackRef = useRef();
  const containerRef = useRef();
  const navigate = useNavigate();

  // Data arrays
  const images = [
    main,main,TopY
    
  ];

  const partners = [
    { Tittle: "A.I.C.S.M", logo: aicsm },
    {Tittle:"N.S.D.C", logo: nsdc },
    {Tittle:"Skill India" ,logo: Skill },
    { Tittle:"I.S.O ",logo: Iso }
  ];

  const placementData = [
    { src: '/1 new message_files/1.jpg', name: 'Abc Joshi', company: 'Google' },
    { src: '/riya.jpg', name: 'Riya Sharma', company: 'Amazon' },
    { src: '/atharv.jpg', name: 'Atharv Joshi', company: 'Google' },
    { src: '/riya.jpg', name: 'Riya Sharma', company: 'Amazon' },
  ];

  const allCourses = [
   { title: "MERN Stack", image: TopX },
    { title: "AI & ML", image: TopX },
    { title: "Cyber Security", image: TopX },
    { title: "Data Science", image: TopX },
    { title: "UI/UX", image: TopX },
    { title: "Cloud Computing", image:TopX },
    { title: "Blockchain", image: TopX },
    { title: "Digital Marketing", image: TopX }
  ];

  const STEPS = [
    { id: "01", title: "Discovery Call", desc: "We understand your goals and needs" },
    { id: "02", title: "Skill Assessment", desc: "Evaluate your current abilities" },
    { id: "03", title: "Custom Plan", desc: "Tailored learning path creation" },
    { id: "04", title: "Begin Journey", desc: "Start your transformation" },
    { id: "05", title: "Mentorship", desc: "1-on-1 expert guidance" },
    { id: "06", title: "Projects", desc: "Real-world portfolio building" },
    { id: "07", title: "Placement Prep", desc: "Interview & resume training" },
    { id: "08", title: "Career Launch", desc: "Job placement support" }
  ];

  const courses = [
    {
      title: "Data Science",
      image: TopX,
      description: "Unlock career opportunities by mastering Python, ML, AI, and Big Data in one comprehensive program.",
      rating: "4.7",
      applied: "4379+ ",
      link: "/datascience"
    },
    {
      title: "Full Stack MERN",
      image: TopX,
      description: "Build dynamic, scalable, and modern web applications with the power of MERN.",
      rating: "4.8",
      applied: "7433+ ",
      link: "/fullstack"
    },
    {
      title: "Artificial Intelligence",
      image: TopX,
      description: "From neural networks to generative AI — become an AI expert with our comprehensive program.",
      rating: "4.9",
      applied: "5932+ ",
      link: "/ai"
    },
    {
      title: "Software Development",
      image: TopX,
      description: "Master the craft of building innovative, reliable, and scalable software solutions.",
      rating: "4.6",
      applied: "6983+ ",
      link: "/softwaredev"
    },
    {
      title: "CAD",
      image: TopX,
      description: "Design precision models and master 3D workflows for engineering.",
      rating: "4.5",
      applied: "4539+ ",
      link: "/cad"
    },
    {
      title: "UI/UX Design",
      image: TopX,
      description: "Craft intuitive interfaces and elevate user experiences with design thinking.",
      rating: "4.8",
      applied: "4892+ ",
      link: "/uiux"
    }
  ];

  const reviews = [
    { text: "Edverciity transformed my career path. The mentors are truly next-level!", name: "Priya S." },
    { text: "The CAD training was hands-on and industry-ready. Loved every module!", name: "Rohan M." },
    { text: "Supportive instructors and real-world projects made learning exciting.", name: "Ayesha K." }
  ];

  // Effects
  useEffect(() => {
    // How It Works animation sequence
    const leftTimers = [0,1,2,3].map(index => 
      setTimeout(() => setVisibleSteps(prev => [...prev, index]), 500 + index * 400)
    );
    const centerTimer = setTimeout(() => setCenterVisible(true), 2000);
    const rightTimers = [4,5,6,7].map(index => 
      setTimeout(() => setVisibleSteps(prev => [...prev, index]), 2500 + (index-4) * 400)
    );

    // Placement track animation
    const track = trackRef.current;
    let scrollInterval;
    if (track) {
      scrollInterval = setInterval(() => {
        track.scrollLeft += 1;
        if (track.scrollLeft >= track.scrollWidth / 2) {
          track.scrollLeft = 0;
        }
      }, 60);
    }

    // Course track animation
    let scrollTimer;
    if (courseTrackRef.current) {
      scrollTimer = setInterval(() => {
        setCourseIndex((prev) => {
          const next = prev + 1;
          if (courseTrackRef.current) {
            courseTrackRef.current.style.transition = 'transform 0.6s ease-in-out';
            courseTrackRef.current.style.transform = `translateX(-${next * 240}px)`;
          }
          if (next === allCourses.length) {
            setTimeout(() => {
              if (courseTrackRef.current) {
                courseTrackRef.current.style.transition = 'none';
                courseTrackRef.current.style.transform = `translateX(0px)`;
              }
            }, 650);
            return 0;
          }
          return next;
        });
      }, 3000);
    }

    // Testimonial slider
    const testimonialTimer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % reviews.length);
    }, 4000);

    return () => {
      leftTimers.forEach(clearTimeout);
      clearTimeout(centerTimer);
      rightTimers.forEach(clearTimeout);
      clearInterval(scrollInterval);
      clearInterval(scrollTimer);
      clearInterval(testimonialTimer);
    };
  }, []);

  // Helper functions
  const visibleCount = 4;
  const endIndex = startIndex + visibleCount;
  const visibleCourses = courses.slice(startIndex, endIndex);

  const handleNext = () => {
    if (endIndex < courses.length) setStartIndex(startIndex + visibleCount);
  };

  const handlePrev = () => {
    if (startIndex > 0) setStartIndex(startIndex - visibleCount);
  };

  return (
    <div className="body-container">
      {/* Slider Section */}
      <div className="slider">
        <img src={images[index]} alt="slide" className="slider-image" />
        <div className="slider-dots">
          {images.map((_, i) => (
            <span key={i} className={`dot ${i === index ? 'active' : ''}`} onClick={() => setIndex(i)} />
          ))}
        </div>
      </div>

      {/* About Section */}
      <section className='next'>
        <span className='bg-text'>ABOUT</span>
        <span className='bg-text1'>EDVERCIITY</span>
        <div className='image-container'>
          <img src={about9} alt='Edverciity Visual' />
        </div>
        <div className='info'>
          <h2>About Edverciity</h2>
          <p>
            <strong>Best Education Platform that Fits For Everyone</strong><br />
            Edverciity IT & CAD Centre has been a trusted name in specialized training for BIM, CAD, CAM, CAE, PLM, and Project Management since 2014. Our core mission is to empower students with cutting-edge knowledge in Computer-Aided Design (CAD), Computer-Aided Manufacturing (CAM), and Computer-Aided Engineering (CAE), helping them build strong and successful careers across various industries.
          </p>
          <Link to="/courses" className="pulse-button">
            Explore Courses
          </Link>
        </div>
      </section>

      {/* Trending Courses */}
      <div className="trending-courses">
        <span className="bg-text4">TECHNOLOGY</span>
        <h1 className="underline1">Top Technologies Offered</h1>
        <div className="course-box-container1">
          {visibleCourses.map((course, index) => (
            <div key={index} className="course-box trending-box">
              <h3>{course.title}</h3>
              <img src={course.image} alt={course.title} className="course-image" />
              <p>{course.description}</p>
              <Link to={course.link}>
                <button className="explore-btn1">Explore Courses</button>
              </Link>
              <div className="bottom-bar">
                <div className="rating">⭐ {course.rating}</div>
                <div className="applied">
                  <span className="bracket">(</span>
                  <span className="applied-num">{course.applied}</span>
                  <span className="learners">learners</span>
                  <span className="bracket">)</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="pagination-controls">
          <button onClick={handlePrev} disabled={startIndex === 0}>← Prev</button>
          <button onClick={handleNext} disabled={endIndex >= courses.length}>Next →</button>
        </div>
      </div>

      {/* Achievements Section */}
      <section className='yo'>
        <div className="bg-text3">ACHIEVEMENTS</div>
        <h2 className='Trust-underline'>Trusted by Companies & Our Achievements</h2>
        <div className="trust-section">
          <div className="trust-grid">
            <div className="trust-block">
              <h1>12+</h1>
              <h2>Years of Excellence</h2>
            </div>
            <div className="trust-block">
              <h1>900+</h1>
              <h2>Students Trained</h2>
            </div>
            <div className="trust-block">
              <h1>10+ Lacs</h1>
              <h2>Highest Package Placed</h2>
            </div>
            <div className="trust-block">
              <h1>99.9%</h1>
              <h2>Satisfaction Rate</h2>
            </div>
            <div className="trust-block">
              <h1>100+</h1>
              <h2>Corporate Tie-Ups</h2>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Technologies */}
      <div className="languages"> 
        <span className='bg-text2'>EXPLORE</span> 
        <h1 className='underline'>Explore Technologies</h1> 
        <div className="course-box-container2"> 
          <div className="course-box cad-box"> 
            <h3>CAD Training</h3> 
            <img src={TopX} alt="CAD Training" className="course-image" /> 
            <p>Gain industry-ready skills in mechanical, civil design through specialized AutoCAD and SolidWorks.</p> 
            <Link to="/cad"> 
              <button className="explore-btn">Explore Courses</button> 
            </Link>
          </div> 
          <div className="course-box it-box"> 
            <h3>IT Training</h3>
            <img src={TopX} alt="IT Training" className="course-image" /> 
            <p>Master the latest development, AI, and core programming with hands-on learning paths.</p> 
            <Link to="/it"> 
              <button className="explore-btn">Explore Courses</button> 
            </Link> 
          </div> 
          <div className="course-box special-box"> 
            <h3>Special Courses</h3> 
            <img src={TopX} alt="Special Courses" className="course-image" />
            <p>Stay ahead with focused programs on Cyber Security, IoT, Blockchain, and more cutting-edge technologies.</p> 
            <Link to="/Special"> 
              <button className="explore-btn">Explore Courses</button> 
            </Link> 
          </div> 
        </div>
      </div>

      {/* Testimonial Section */}
      <section className="testimonial-section">
        <div className="testimonial-content">
          <h2>Hear from Our Students</h2>
          <p className="testimonial-description">
          EdverCiity students describe their learning as practical, enjoyable, and industry-focused. With hands-on training and exposure to
           real-world challenges, they gain confidence and valuable skills. Beyond academics, guidance on careers, grooming, and connections
            with reputed companies help them grow both professionally and personally for today’s competitive gworld.
          </p>
          <div className="see-more-container">
            <button className="see-more-btn">See More Testimonials</button>
          </div>
        </div>
        
        <div className="testimonial-video">
          <a 
            href="https://www.youtube.com/watch?v=Q75Ea6Geoqs" 
            target="_blank" 
            rel="noopener noreferrer"
            className="video-thumbnail"
          >
            <img
              src="https://img.youtube.com/vi/Q75Ea6Geoqs/maxresdefault.jpg"
              alt="Student testimonial video thumbnail"
            />
            <div className="play-button">
              <svg viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" fill="white"/>
              </svg>
            </div>
          </a>
        </div>
        {/* <div className="testimonial-video">
  <a 
    href="https://www.youtube.com/watch?v=xKdnkWPhfH8" 
    target="_blank" 
    rel="noopener noreferrer"
    className="video-thumbnail"
  >
    <img
      src="https://img.youtube.com/vi/xKdnkWPhfH8/maxresdefault.jpg"
      alt="Student testimonial video thumbnail"
    />
    <div className="play-button">
      <svg viewBox="0 0 24 24">
        <path d="M8 5v14l11-7z" fill="white"/>
      </svg>
    </div>
  </a>
</div> */}
      </section>

      {/* Placements Section */}
      <section className='yo1'>
        <span className='bg-text8'>PLACEMENTS</span> 
        <h1 className='underline8'>OUR PLACEMENTS</h1>
        <div className="placement-track" ref={trackRef}>
          {[...placementData, ...placementData].map(({ src, name, company }, index) => (
            <div className="placement-card" key={index}>
              <div className="image-container">
                <img src={src} alt={`${name} - ${company}`} className='abcd' />
              </div>
              <div className="placement-info">
                <h4>{name}</h4>
                <p>{company}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Notable Organizations Section */}
      <section className="notable-organizations">
        <h1>Notable Organizations Employing Our Talent</h1>
        
        <div className="logos-grid">
          {/* IBM Group */}
          <div className="logo-group">
            <div className="logos">
              <img src={Axx} alt="Accenture" />
               <img src={mindtreeX} alt="Mindtree" />
            <img src={infosysX} alt="Infosys" />
             <img src={HclX} alt="HCL" /> 
              <img src={microsoftX} alt="icrosoft" /> 
       
            </div>
          </div>
          <hr />

          {/* IOS Group */}
          <div className="logo-group">
            <div className="logos">
               <img src={ tcslogo }/>
              <img src={CapGe} alt="Capgemini" />
              <img src={Wipro} alt="Wipro" />
              <img src={meta} alt="meta" />
                            <img src={Mahi} alt="TECH mathindra" />
            </div>
          </div>

          <hr />
        
          {/* TECH Group */}
          <div className="logo-group">
            <div className="logos">
              <img src={Cicso} alt="Cisco" />
              <img src={Cogni} alt="Cognizant" />
            </div>
          </div>
        </div>
      </section>

      {/* Internship Section */}
      <section className="internship-section">
        <div className="bg-text5">INTERNSHIP</div>
        <div className="internship-container">
          <div className="internship-image">
            <img src={internship} alt="Internship Launch" />
          </div>
          <div className="internship-content">
            <h2>Launch Your Career: Gain Real-World Experience with Our Internships</h2>
            <h4>Internships for Students</h4>
            <p>
              LiveTechSkills has created internship courses that cater to a variety of topics, providing students with hands-on experience in industry projects, in response to the current demand from colleges and enterprises.
            </p>
            <Link to="/Internship" className="apply-btn">
              Apply Now
            </Link>
          </div>
        </div>
      </section>

      {/* Affiliations Section */}
      <section className="affiliation-section">
        <div className="bg-text6">AFFILIATIONS</div>
        <h2 className="affiliation-heading">
          Partnering with Industry Leaders to Deliver Unmatched Quality
          <span className="sub-heading">Our Affiliations</span>
        </h2>
        <div className="partner-grid">
          {partners.map((partner, index) => (
            <div className="partner-card" key={index}>
              <img src={partner.logo} alt={`Partner ${index}`} />
            </div>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works-3d" ref={containerRef}>
        <div className="steps-grid">
          {/* Left Column - Steps 1-4 */}
          <div className="steps-column left-column">
            {STEPS.slice(0, 4).map((step, index) => (
              <StepCard 
                key={index}
                step={step}
                visible={visibleSteps.includes(index)}
                position="left"
                index={index}
              />
            ))}
          </div>

          {/* Center Step - Title Box */}
          <div className={`center-step  ${centerVisible ? 'visible' : ''}`}>
            <h2 className="how-it-works-title">How Edverciity Works</h2>
            <div className="title-glow"></div>
          </div>

          {/* Right Column - Steps 5-8 */}
          <div className="steps-column right-column">
            {STEPS.slice(4).map((step, index) => (
              <StepCard 
                key={index+4}
                step={step}
                visible={visibleSteps.includes(index+4)}
                position="right"
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Top Courses Marquee */}
      <section className="top-courses-marquee">
        <span className="bg-text7">TRENDING</span>
        <h2 className='topp'>Top Trending Courses</h2>
        <div className="marquee-wrapper">
          <div className="marquee-track" ref={courseTrackRef}>
            {[...allCourses, ...allCourses].map((course, index) => (
              <div className="course-card" key={index}>
                <img src={course.image} alt={course.title} className="course-thumb" />
                <p>{course.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="contact-container">
          <div className="contact-left">
            <h2>📍 Head Office – <span>Nandanvan</span></h2>
            <p><i className="fas fa-map-marker-alt"></i> 1st floor, Block 2, MB Tower, Mire Layout, Jawahar Nagar, Nandanvan, Nagpur - 440009, Maharashtra</p>
            <p><i className="fas fa-phone-alt"></i> +91 9096060149</p>

            <h2>🏢 Branch Office – <span>Sadar</span></h2>
            <p><i className="fas fa-map-marker-alt"></i> 1st Floor, JB-Wing, Mangalwari Complex, Sadar Nagpur - 440001, Maharashtra</p>
            <p><i className="fas fa-phone-alt"></i> +91 7507111135</p>
          </div>
          <div className="contact-right">
            <h3>Enquire Now</h3>
            <form className="enquiry-form">
              <input type="text" placeholder="Your name" required />
              <input type="email" placeholder="Email address" required />
              <input type="tel" placeholder="Phone number" required />
              <select required>
                <option value="">Select Course</option>
                <option value="CAD">CAD</option>
                <option value="IT">IT</option>
              </select>
              <textarea placeholder="Describe your message" rows="4"></textarea>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </section>

      {/* About Founders Section */}
      <section className="about-edverciity">
        <span className="bg-text11">MENTORS</span>
        <div className="about-intro">
          <h2>Empowering Futures Through CAD Precision & IT Innovation</h2>
        </div>
        <div className="founder-grid">
          <div className="founder-card image-right" onClick={() => window.location.href = '/founder-cad'}>
            <div className="founder-info">
              <h3>Mr. Swapnil Udapurkar</h3>
              <p>
                Brought industrial precision and creative innovation to the CAD program at Edverciity.
              </p>
              <div className="card-hover-info">Shaped real-world CAD design careers.</div>
            </div>
            <div className="founder-image">
            <img src={SU} alt="Mr.Swapnil Sir" />
            </div>
          </div>
          <div className="founder-card image-left" onClick={() => window.location.href = '/founder-it'}>
            <div className="founder-image">
              <img src={Ak} alt="Mr. IT" />
            </div>
            <div className="founder-info">
              <h3>Mr. Akshay Jain</h3>
              <p>
                Built Edverciity's tech legacy through expert mentorship and a future-ready curriculum.
              </p>
              <div className="card-hover-info">15+ years mentoring & tech curriculum architect.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Engagement Section */}
      <section className="course-engage">
        <p className='h2'>Explore our course structure, ask questions, and engage with expert instructors.</p>
        <p>🎯 Book Your Demo Class Today!</p>
        <div className="engage-actions">
          <button 
            className="apply-btn"
            onClick={() => navigate('/apply-form')}>
            🚀 Apply Now
          </button>
        </div>
      </section>

      {/* Testimonial Slider */}
      <section className="testimonial-slider">
        <span className="bg-text12">SUCCESS</span>
        <div className="testimonial-heading">
          <h2>Voices of Success</h2>
          <p>Real Stories from Our Achievers</p>
        </div>
        <div className="testimonial-slider-content">
          <div className="image-container">
            <img src={place} alt="Decorative" className="main-image" />
          </div>
          <div className="testimonial-right">
            <div className="review-slide">
              <div className="image-holder">
                <img
                  src={reviewImg}
                  alt="Google Verified Review"
                  className="google-review-badge"
                />
                <p>"{reviews[activeIndex].text}"</p>
                <span>⭐️⭐️⭐️⭐️⭐️ – {reviews[activeIndex].name}</span>
              </div>
            </div>
            <div className="slider-dots">
              {reviews.map((_, i) => (
                <span key={i} className={`dot ${i === activeIndex ? 'active' : ''}`} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Body;