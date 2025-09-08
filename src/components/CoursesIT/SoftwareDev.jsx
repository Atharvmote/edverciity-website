import React from 'react'
import SoftwareDevImg from '../../assets/Body/SoftwareDevImg.png'
import clock from '../../assets/Body/clock.png'
import globe from '../../assets/Body/globe.png'
import thumb from '../../assets/Body/thumb.png'
import setting from '../../assets/Body/setting.png'
import placement from '../../assets/Body/placement.png'
import iconsCheck from '../../assets/Body/iconsCheck.png'
import arrows from '../../assets/Body/arrows.png'
import './Style.css'
function SoftwareDevelopment() {
  return (
    <>
    <div className='Container'>
        <div className='img1'>
        <img src={SoftwareDevImg} alt="Software Development Img" /></div>
        <div className='info'>
            <h1>Software Development</h1>
            <p>Embark on a transformative journey with our Master Certificate in Software Development in Nagpur, 
                designed to provide in-depth knowledge and practical skills in four of the most influential programming
                 languages: C, C++, Java, and Python. This comprehensive program equips you with the expertise needed to 
                 develop robust, efficient, and scalable software solutions across various domains.</p>
             <br/> <br/>
             <h1>Course objective</h1>
             <p>Advance your career in software development through our Master Certificate program.
                 Engage in immersive training and hands-on projects to acquire specialized competencies essential
                  for thriving in software development roles. Our curriculum bridges your existing knowledge with the
                   critical skills sought by leading tech companies. Upon completion, you'll possess both theoretical
                    understanding and practical proficiency to design, develop, and optimize software applications, contributing
                     significant value to your chosen organization.</p>
        </div>
    </div>

    <div className='Wrapper'>
      <div className='program-duration'>
             <img src={clock} alt="clock" width={50} height={50}/>
             <p>Program Duration <br/> <b>228 Hours</b></p>
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
               <h2>Software Development</h2>
             <div className='checklist'>
                <img src={iconsCheck} alt="checkicon"/>
                <p>C Programming</p>
             </div>
             <div className='checklist'>
                <img src={iconsCheck} alt="checkicon" />
                <p> C++</p>
             </div>
             <div className='checklist'>
                <img src={iconsCheck} alt="checkicon" />
                <p>Java</p>
             </div>
             <div className='checklist'>
                <img src={iconsCheck} alt="checkicon"/>
                <p>Python</p>
             </div>
             
          </div>   
        </div>
    </div>
    <div className='scope-container'>
    <div className='scope'>
       <div className='aboutsec'>
        <h1>Scope & Career Opportunities</h1>
        <p>This software development course in Nagpur offers comprehensive training in four foundational programming languages:
         <b>C, C++, Java, </b>  and <b>Python.</b> You'll gain proficiency in structured and object-oriented programming, data structures,
         algorithms, and software design principles. Hands-on projects will enable you to develop efficient, scalable applications
         across various domains, preparing you for diverse roles in the software development industry.</p> <br/> <br/>
          <h2>Who is this Course suitable for?</h2>
        <p>Aspiring software developers.<br/>Computer Science Students.<br/> IT Professionals Seeking Skill Enhancement.<br/>
          Individuals Interested in Software Engineering Roles.<br/> Recent Graduates Aspiring to Enter the Software Development Field.</p>
       </div>
       <div className='scopeImg'>
        <h2>Salary Range Penetration</h2>
        <img src={arrows} alt="arrow" />
       </div>
    </div>
   
    <div className='job-roles'>
        <h2>Job Roles:</h2>
        <div>
            <p>Software Developer?</p>
            <p>Systems Programmer?</p>
            <p>Application Developer?</p>
            <p>Embedded Systems Engineer?</p>
            <p>Software Engineer</p>
        </div>
    </div>
  </div>
  <div className='enquire'>
    <div className='msg'>
        <h2>Real-time Professional project experience to prepare student for their future</h2>
        <p>Engage in real-world projects that bridge academic learning with industry demands.
             Our program offers hands-on experience in areas like: <br/><br/>
             <ul>
                <li>Developing a <b> C-based File Compression Tool</b></li>
                <li>Building a <b> C++ Inventory Management System </b></li>
                <li>Creating a <b> Java-based E-commerce Application </b></li>
                <li>Designing a <b> Python Web Scraping Tool </b></li>
                </ul>
                These projects not only bolster your resume but also prepare you to tackle real-world challenges confidently</p>
    </div>
    <div className='enquire-form'>
         <h3>Enquire Now</h3>
         <form>
            <input type="text" placeholder='Your Name' required/> <br/>
            <input type="email" name='email' placeholder='Email address' required/> <br/>
            <input type="tel"  placeholder='Phone number' required/> <br/>
            <select name='options' required>
                <option value='' selected disabled hidden  >Select Center</option>
                <option value="options" re>Nandanvan</option>
                <option value="options">Sadar</option>
            </select>
            <input type="text" value='Software Development' className='text' /> <br/>
            <textarea placeholder='Describe your message '></textarea> <br/>
            <button type="submit">Submit</button>
         </form>
    </div>
    </div>
    </>
  )
}

export default SoftwareDevelopment;