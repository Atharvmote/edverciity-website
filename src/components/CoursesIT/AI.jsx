import React from 'react'
import AIImg from '../../assets/Body/AIImg.png'
import clock from '../../assets/Body/clock.png'
import globe from '../../assets/Body/globe.png'
import thumb from '../../assets/Body/thumb.png'
import setting from '../../assets/Body/setting.png'
import placement from '../../assets/Body/placement.png'
import iconsCheck from '../../assets/Body/iconsCheck.png'
import arrows from '../../assets/Body/arrows.png'
import './Style.css'
function AIPge() {
  return (
    <>
    <div className='Container'>
        <div className='img1'>
        <img src={AIImg} alt="Artificial Intelligence" /></div>
        <div className='info'>
            <h1>Artificial Intelligence</h1>
            <p>Embark on a transformative journey with our <strong>Master Certificate in Artificial Intelligence </strong>,
             designed to provide in-depth knowledge and practical skills in the rapidly evolving field of AI. 
             This comprehensive program equips you with the expertise needed to develop intelligent systems and 
             applications across various domains.</p>
             <br/> <br/>
             <h1>Course objective</h1>
             <p>Advance your career in AI through our Master Certificate program. Engage in immersive training and hands-on
                projects to acquire specialized competencies essential for thriving in AI roles. Our curriculum bridges your
                 existing knowledge with the critical skills sought by leading tech companies. Upon completion, you'll possess
                  both theoretical understanding and practical proficiency to design, develop, and optimize AI applications,
                   contributing significant value to your chosen organization.</p>
        </div>
    </div>

    <div className='Wrapper'>
      <div className='program-duration'>
             <img src={clock} alt="clock" width={50} height={50}/>
             <p>Program Duration <br/> <b>220 Hours</b></p>
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
                <div className='topics-grid'>
                  <div className='topic1'>
                  <h2>Deep Learning</h2>
                   <div className='checklist1'>
                     <img src={iconsCheck} alt="checkicon" />
                     <p>Dive deep into neural networks and learn how to train models to recognize patterns and make predictions based on data.</p>
                   </div>
                   </div>
                   <div className='topic1'>
                   <h2>Reinforcement Learning</h2>
                   <div className="checklist1">
                     <img src={iconsCheck} alt="checkicon" />
                     <p>Explore the principles of reinforcement learning and understand how to train agents to make decisions in dynamic environments.</p>
                   </div>
                   </div>
                   <div className='topic1'>
                    <h2>Algorithm Design</h2>
                    <div className="checklist1">
                      <img src={iconsCheck} alt="checkicon" />
                      <p>Learn to develop efficient algorithms to solve complex problems and optimize computational processes.</p>
                    </div>
                   </div>
                   
                   <div className='topic1'>
                    <h2>OpenCv</h2>
                    <div className='checklist1'>
                      <img src={iconsCheck} alt="checkicon" />
                      <p>Master computer vision techniques using the OpenCV library to analyze and interpret visual data.</p>
                    </div>
                   </div>
                   <div className='topic1'>
                    <h2>Robotics, IoT concepts, and AI projects</h2>
                    <div className='checklist1'>
                      <img src={iconsCheck} alt="checkicon" />
                      <p>Discover how AI is applied in robotics and the IoT and engage in hands-on projects to reinforce your learning and apply your skills to real-world scenarios.</p>
                    </div>
                   </div>
                  </div>
                  
            </div>
    <div className='scope-container'>
    <div className='scope'>
       <div className='aboutsec'>
        <h1>Scope & Career Opportunities</h1>
        <p>This course offers in-depth training in AI, covering machine learning, deep learning, natural language processing, 
          and computer vision. You'll gain proficiency in developing intelligent algorithms, understanding AI ethics, 
          and deploying AI solutions. Hands-on projects will enable you to apply AI techniques
           to real-world problems, preparing you for diverse roles in the AI industry.</p>
             <h2>Who is this Course suitable for?</h2>
        <p>Aspiring AI Engineers.<br/>
        Data Scientists seeking AI specialization.<br/>
        Software Developers aiming to integrate AI into applications.<br/>
        IT Professionals switching into AI jobs.<br/>
        Recent Graduates aspiring to start career in AI.</p>
       </div>
       <div className='scopeImg'>
        <h2>Salary Range Penetration</h2>
        <img src={arrows} alt="arrow" />
       </div>
    </div>
   
    <div className='job-roles'>
        <h2>Job Roles:</h2>
        <div>
            <p>AI Engineer?</p>
            <p>ML Engineer</p>
            <p>Data Scientist?</p>
            <p>NLP Engineer?</p>
            <p>Computer Vision Engineer</p>
            <p>AI Research Scientist?</p>
            <p>AI Product Manager?</p>
        </div>
    </div>
  </div>
  <div className='enquire'>
    <div className='msg'>
        <h2>Real-time Professional project experience to prepare student for their future</h2>
        <p>Engage in real-world projects that bridge academic learning with industry demands.
           Our program offers hands-on experience in areas like: <br/><br/>
           <ul>
            <li>Developing a <b>Chatbot for Customer Support</b></li>
            <li>Building a <b>Recommendation System for E-Commerce </b></li>
            <li>Creating a <b>Facial Recognition System </b></li>
            <li>Designing a <b>Sentiment Analysis Tool for Social Media </b> </li>
            </ul>
            These projects not only bolster your resume but also prepare you to tackle real-world challenges confidently.</p>
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
            <input type="text" value='Artificial Intelligence' className='text'/> <br/>
            <textarea placeholder='Describe your message '></textarea> <br/>
            <button type="submit">Submit</button>
         </form>
    </div>
    </div>
    </>
  )
}

export default AIPge;