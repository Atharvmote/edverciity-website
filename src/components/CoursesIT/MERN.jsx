import React from 'react'
import MERN from '../../assets//Body/MERN.png'
import clock from '../../assets/Body/clock.png'
import globe from '../../assets/Body/globe.png'
import thumb from '../../assets/Body/thumb.png'
import setting from '../../assets/Body/setting.png'
import placement from '../../assets/Body/placement.png'
import iconsCheck from '../../assets/Body/iconsCheck.png'
import arrows from '../../assets/Body/arrows.png'
import './Style.css'
function Mernpge() {
  return (
    <>
    <div className='Container'>
        <div className='img1'>
        <img src={MERN} alt="MERN" /></div>
        <div className='info'>
            <h1>Full Stack Development - MERN</h1>
            <p>Elevate your web development career with our comprehensive Full Stack MERN (MongoDB, Express.js,
              React.js, Node.js) Development Master Certification. This program is designed for aspiring developers
             aiming to build dynamic, data-driven web applications. Through hands-on projects and real-world scenarios, 
             you'll gain proficiency in the MERN stack, preparing you for a successful career in Full Stack MERN Course in Nagpur.</p>
             <br/> <br/>
             <h1>Course objective</h1>
             <p>Advance your professional trajectory in web development through our <strong> Full Stack MERN course </strong> program in Nagpur.
             Engaging in immersive training and practical experiences, you'll acquire the specialized competencies 
             essential for thriving in full-stack development roles. Our curriculum bridges your current knowledge 
             with the critical skills sought by leading tech companies. Upon completion, you'll possess both the 
             theoretical understanding and hands-on proficiency to develop robust web applications, optimize user 
             experiences, and contribute significant value to your chosen organization.</p>
        </div>
    </div>

    <div className='Wrapper'>
      <div className='program-duration'>
             <img src={clock} alt="clock" width={50} height={50}/>
             <p>Program Duration <br/> <b>160 Hours</b></p>
      </div>
      <div className='program-duration'>
             <img src={globe} alt="globe" width={50} height={50}/>
             <p>Accredited by <br/> <b>AICSM</b></p>
      </div>
      <div className='program-duration'>
             <img src={thumb} alt="thumb" width={50} height={50}/>
             <p>Flexible Learning<br/> <b>In-center and online</b></p>
      </div>
       <div className='program-duration'>
             <img src={setting} alt="setting" width={50} height={50}/>
             <p>Project-based Assessment<br/> <b>Hands-on with assessment</b></p>
      </div>
       <div className='program-duration'>
             <img src={placement} alt="placement" width={50} height={50}/>
             <p>Placement Support<br/> <b>Upon successful completion</b></p>
      </div>
    </div>
    <div className='keytopic'>
          <h1>Key Topics Covered</h1>
           <div className='topics'>
             <div>
               <h2>Back-End Development</h2>
             <div className='checklist'>
                <img src={iconsCheck} alt="checkicon"/>
                <p>Express.js: Build robust back-end applications with Express.js, a web application framework for Node.js.</p>
             </div>
             <div className='checklist'>
                <img src={iconsCheck} alt="checkicon" />
                <p>GitHub: Master version control and collaboration using GitHub for managing project repositories.</p>
             </div>
             <div className='checklist'>
                <img src={iconsCheck} alt="checkicon" />
                <p>Heroku: Learn to deploy and manage applications on the cloud platform Heroku.</p>
             </div>
             <div className='checklist'>
                <img src={iconsCheck} alt="checkicon"/>
                <p>MongoDB: Gain proficiency in MongoDB, a NoSQL database for scalable and flexible applications.</p>
             </div>
             <div className='checklist'>
                <img src={iconsCheck} alt="checkicon" />
                <p>Node.js: Master Node.js, a JavaScript runtime environment, for server-side scripting in web development.</p>
             </div>
             <div className='checklist'>
                <img src={iconsCheck} alt="checkicon"/>
                <p>Restful API: Explore Representational State Transfer (REST) architecture for designing scalable and efficient APIs.</p>
             </div>
          </div>   
        </div>
    </div>
    <div className='scope-container'>
    <div className='scope'>
       <div className='aboutsec'>
        <h1>Scope & Career Opportunities</h1>
        <p>This <strong> Full Stack MERN Course in Nagpur </strong> delves into both foundational and advanced web development topics,
             including front-end and back-end technologies, database management, and deployment strategies.
              Participants will gain hands-on experience implementing widely-used web development techniques
               using MongoDB, Express.js, React.js, and Node.js</p> <br/> <br/>
               <h2>Who is this Course suitable for?</h2>
        <p>Software Engineers seeking to expand their skill set.<br/>
          IT Professionals aiming to specialize in web development.<br/>
        Front-End and Back-End Developers looking to master the MERN stack.<br/>
        Recent Graduates aspiring to enter the field of web development.</p>
       </div>
       <div className='scopeImg'>
        <h2>Salary Range Penetration</h2>
        <img src={arrows} alt="arrow" />
       </div>
    </div>
    
    <div className='job-roles'>
        <h2>Job Roles:</h2>
        <div>
            <p>Full Stack Web Developer</p>
            <p>Front-End Developer</p>
            <p>Back-End Developer</p>
            <p>Web Application Developer</p>
            <p>Full Stack MERN developer</p>
        </div>
    </div>
  </div>
  <div className='enquire'>
    <div className='msg'>
        <h2>Real-time Professional project experience to prepare student for their future</h2>
        <p>Engage in real-world projects that bridge academic learning with industry demands.
             Our <strong> full stack MERN course in Nagpur </strong> offers hands-on experience in areas like e-commerce platforms, 
             content management systems, and social media applications, equipping you with practical skills and a
              competitive edge. Participate in projects such as 'E-Commerce Website Development,' 'Content Management 
              System Creation,' and 'Social Media Application Build.' These experiences not only bolster your resume but 
              also prepare you to tackle real-world challenges confidently.</p>
    </div>
    <div className='enquire-form'>
         <h3>Enquire Now</h3>
         <form>
            <input type="text" placeholder='Your Name' required /> <br/>
            <input type="email" name='email' placeholder='Email address'required/> <br/>
            <input type="tel"  placeholder='Phone number' required/> <br/>
            <select name='options'>
                <option value='' selected disabled hidden >Select Center</option>
                <option value="options">Nandanvan</option>
                <option value="options">Sadar</option>
            </select>
            <input type="text" value='Full Stack Development - MERN' className='text'/> <br/>
            <textarea placeholder='Describe your message '></textarea> <br/>
            <button type="submit">Submit</button>
         </form>
    </div>
    </div>
    </>
  )
}

export default Mernpge;