import React, { useEffect, useState } from 'react'
import MEAN from '../../assets/Body/MEAN.png'
import clock from '../../assets/Body/clock.png'
import globe from '../../assets/Body/globe.png'
import thumb from '../../assets/Body/thumb.png'
import setting from '../../assets/Body/setting.png'
import placement from '../../assets/Body/placement.png'
import iconsCheck from '../../assets/Body/iconsCheck.png'
import arrows from '../../assets/Body/arrows.png'
import course from '../../assets/data/Course'

import './Style.css'
function Meanpge() {
   const [select,setSelect] = useState([])
   useEffect(()=>{
let selectCourse = course.filter((e)=>e.title === 'Mean Stack')
setSelect(selectCourse)
   },[])
  return (
    <>

    {
      select && select.map((e)=>(
         <><h1>{e.title}</h1></>
      ))
    }
    <div className='Container'>
        <div className='img1'>
        <img src={MEAN} alt="MEAN" /></div>
        <div className='info'>
            <h1>Full Stack Development - MEAN</h1>
            <p>Unlock your potential as a Full Stack Developer with our comprehensive Master Certificate program, 
                focusing on the Full Stack Development MEAN —MongoDB, Express.js, Angular, and Node.js. 
                This program is meticulously designed to equip you with the expertise required to build dynamic, 
                scalable, and efficient web applications.</p>
             <br/> <br/>
             <h1>Course objective</h1>
             <p>Advance your professional journey in web development through our Full Stack Development - MEAN 
                Master Certificate program. Engaging in immersive training and practical experiences, you'll acquire the
                 specialized competencies essential for thriving in full-stack development roles. Our curriculum bridges
                  your current knowledge with the critical skills sought by leading tech companies. Upon completion, 
                  you'll possess both the theoretical understanding and hands-on proficiency to develop robust web applications,
                   optimize user experiences, and contribute significant value to your chosen organization.</p>
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
        <p>This course delves into both foundational and advanced web development topics,
             including front-end and back-end technologies, database management, and deployment strategies. 
             Participants will gain hands-on experience implementing widely-used web development techniques 
             using technologies like HTML, CSS, JavaScript, Angular, Node.js, Express.js, and MongoDB.</p> <br/> <br/>
              <h2>Who is this Course suitable for?</h2>
        <p>Aspiring full stack web developers.<br/> Software Engineers seeking to expand their skill set.<br/>
      IT Professionals aiming to specialize in web development.<br/>
     Front-End and Back-End Developers looking to master full-stack technologies.<br/>
     Recent Graduates aspiring to enter the field of web development</p>
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
            <p>Full Stack MEAN developer</p>
        </div>
    </div>
  </div>
   <div className='enquire'>
    <div className='msg'>
        <h2>Real-time Professional project experience to prepare student for their future</h2>
        <p>Engage in real-world projects that bridge academic learning with industry demands. 
        Our program offers hands-on experience in areas like e-commerce platforms, content management systems, 
        and social media applications, equipping you with practical skills and a competitive edge.
         Participate in projects such as 'E-Commerce Website Development,' 'Content Management System Creation,'
          and 'Social Media Application Build.' These experiences not only bolster your resume but also prepare
           you to tackle real-world challenges confidently.</p>
    </div>
    <div className='enquire-form'>
         <h3>Enquire Now</h3>
         <form>
            <input type="text" placeholder='Your Name' required/> <br/>
            <input type="email" name='email' placeholder='Email address' required/> <br/>
            <input type="tel"  placeholder='Phone number' required/> <br/>
            <select name='options'>
                <option value='' selected disabled hidden >Select Center</option>
                <option value="options">Nandanvan</option>
                <option value="options">Sadar</option>
            </select>
            <input type="text" value='Full Stack Development - MEAN' className='text'/> <br/>
            <textarea placeholder='Describe your message '></textarea> <br/>
            <button type="submit">Submit</button>
         </form>
    </div>
    </div>
    </>
  )
}

export default Meanpge;