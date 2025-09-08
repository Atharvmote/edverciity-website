import React from 'react'
import DataScience from '../../assets/Body/DataScience.png'
import clock from '../../assets/Body/clock.png'
import globe from '../../assets/Body/globe.png'
import thumb from '../../assets/Body/thumb.png'
import setting from '../../assets/Body/setting.png'
import placement from '../../assets/Body/placement.png'
import iconsCheck from '../../assets/Body/iconsCheck.png'
import arrows from '../../assets/Body/arrows.png'
import './Style.css'
function Datasciencepge() {
  return (
    <>
    <div className='Container'>
        <div className='img1'>
        <img src={DataScience} alt="Data Science Img" /></div>
        <div className='info'>
            <h1>Master Certificate in Data Science</h1>
            <p>Embark on a transformative journey in Data Science with our all-encompassing Master Certificate in Data Science program.
                 Tailored to meet the escalating demand for skilled data experts, our curated courses—spanning Data Science, 
                 Data Engineering with Python, Data Science with R, and Data Analytics using Power BI—pave the way to promising careers
                  in data interpretation, business intelligence, and strategic decision-making driven by insights.<br/><br/>

               The <strong>Master Certificate in Data Science</strong> not only equips you with technical proficiency but also empowers you 
               with the analytical mindset needed to thrive in today’s data-driven world. Whether you're a beginner aiming to build 
               a strong foundation or a professional looking to upskill, this<strong> Master Certificate in Data Science program</strong> ensures you
                gain industry-relevant knowledge through real-world projects, hands-on tools, 
               and expert mentorship—positioning you at the forefront of innovation and opportunity in the field of data science.</p>
        </div>
    </div>
    <div className='Course-Objective'>
        <h1>Course objective</h1>
        <p>Advance your professional journey in the evolving domain of Data Science through our
           <strong> Master Certificate in Data Science program.</strong> Engaging in comprehensive training and practical experiences,
           you'll acquire the specialized competencies essential for thriving in data-focused roles. Our curriculum,
           aligned with industry standards, bridges your current knowledge with the critical skills sought by leading Data Science
           positions. Upon completion, you'll possess both the theoretical understanding and hands-on proficiency
           to drive data-informed strategies, extract meaningful insights, and contribute significant value to your chosen organization.</p>
    </div>
    <div className='Wrapper'>
      <div className='program-duration'>
             <img src={clock} alt="clock" width={50} height={50}/>
             <p>Program Duration <br/> <b>226</b></p>
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
                 <h2>Data Analytics</h2>
                 <div className='checklist'>
                    <img src={iconsCheck} alt="checkicon"/>
                    <p>Advanced Visualizations</p>
                 </div>
                 <div className='checklist'>
                    <img src={iconsCheck} alt="checkicon" />
                    <p>Dashboard Building</p>
                 </div>
                 <div className='checklist'>
                    <img src={iconsCheck} alt="checkicon" />
                    <p>Data Preprocessing & Calculated Fields</p>
                 </div>
                 <div className='checklist'>
                    <img src={iconsCheck} alt="checkicon"/>
                    <p>Formatting in Tableau</p>
                 </div>
                 <div className='checklist'>
                    <img src={iconsCheck} alt="checkicon" />
                    <p>Geo Spatial Analysis</p>
                 </div>
                 <div className='checklist'>
                    <img src={iconsCheck} alt="checkicon"/>
                    <p>Tableau and Data Visualization</p>
                 </div>
                 <div className='checklist'>
                    <img src={iconsCheck} alt="checkicon" />
                    <p>Working with Amazon Cloud & MySQL</p>
                 </div>
                 
               </div>
               <div>
                <h2>Python</h2>
                 <div className='checklist'>
                    <img src={iconsCheck} alt="checkicon" width={30}/>
                    <p>Advance Features</p>
                 </div>
                 <div className='checklist'>
                    <img src={iconsCheck} alt="checkicon" width={30}/>
                    <p>Analytics using Python</p>
                 </div>
                 <div className='checklist'>
                    <img src={iconsCheck} alt="checkicon" width={30}/>
                    <p>Basics and Syntax</p>
                 </div>
                 <div className='checklist'>
                    <img src={iconsCheck} alt="checkicon" width={30}/>
                    <p>Data Structures and Types</p>
                 </div>
                 <div className='checklist'>
                    <img src={iconsCheck} alt="checkicon" width={30}/>
                    <p>Fundamental Features</p>
                 </div>
                 <div className='checklist'>
                    <img src={iconsCheck} alt="checkicon" width={30}/>
                    <p>Introduction</p>
                 </div>
               </div>
               <div>
                <h2>Machine Learning</h2>
                <div className='checklist'>
                    <img src={iconsCheck} alt="checkicon" width={30}/>
                    <p>Advance algorithms</p>
                 </div>
                 <div className='checklist'>
                    <img src={iconsCheck} alt="checkicon" width={30}/>
                    <p>Big Data and Genetic Algorithms</p>
                 </div>
                 <div className='checklist'>
                    <img src={iconsCheck} alt="checkicon" width={30}/>
                    <p>Classification Algorithms</p>
                 </div>
                 <div className='checklist'>
                    <img src={iconsCheck} alt="checkicon" width={30}/>
                    <p>Clustering Algorithms</p>
                 </div>
                 <div className='checklist'>
                    <img src={iconsCheck} alt="checkicon" width={30}/>
                    <p>Introduction to Machine Learning</p>
                 </div>
                 <div className='checklist'>
                    <img src={iconsCheck} alt="checkicon" width={30}/>
                    <p>Neural Networks and Deep Learning</p>
                 </div>
                 <div className='checklist'>
                    <img src={iconsCheck} alt="checkicon" width={30}/>
                    <p>Regression Algorithms</p>
                 </div>
               </div>
            </div>
        </div>
         <div className='scope-container'>
            <div className='scope'>
               <div className='aboutsec'>
                <h1>Scope & Career Opportunities</h1>
                <p>The  <strong>  Master Certificate in Data Science </strong> course delves into both foundational and advanced machine learning topics, 
                    including data preprocessing, feature transformation, algorithm selection, and model optimization. Participants
                    will gain hands-on experience implementing widely-used machine learning techniques like regression, clustering, 
                    and decision trees using Python and R.</p> <br/> <br/>
                    <h2>Who is this Course suitable for?</h2>
                <p>Information technology specialists.<br/>Individuals aiming to become data science experts.<br/>
                 Software engineers seeking to expand their skill set.<br/>Professionals in analytics roles desiring deeper insights.<br/>
                 Recent graduates aspiring to enter the field of AI.</p>
               </div>
               <div className='scopeImg'>
                <h2>Salary Range Penetration</h2>
                <img src={arrows} alt="arrow" />
               </div>
            </div>
            <div className='job-roles'>
                <h2>Job Roles:</h2>
                <div>
                    <p>AI Research Specialist</p>
                    <p>Business Intelligence Professional</p>
                    <p>Data Science Expert</p>
                    <p>ML Developer</p>
                    <p>Data Analyst</p>
                </div>
            </div>
          </div>
          <div className='enquire'>
    <div className='msg'>
        <h2>Real-time Professional project experience to prepare student for their future</h2>
        <p>  Enhance your career readiness through immersive, real-world projects that bridge academic learning with industry demands.
             Our Master Certificate in Data Science program offers hands-on experience in areas like predictive analytics, customer 
             segmentation, and AI-driven solutions, equipping you with practical skills and a competitive edge. Engage in projects 
             such as 'Predictive Analytics for Sales Forecasting,' 'Customer Segmentation Using Clustering Techniques,' and 
             'AI-Powered Chatbot Development.'These experiences not only bolster your resume but also prepare you to tackle
              real-world challenges confidently.</p>
    </div>
    <div className='enquire-form'>
         <h3>Enquire Now</h3>
         <form>
            <input type="text" placeholder='Your Name' required /> <br/>
            <input type="email" name='email' placeholder='Email address' required/> <br/>
            <input type="tel"  placeholder='Phone number'required/> <br/>
            <select name='options'>
                <option value='' selected disabled hidden >Select Center</option>
                <option value="options">Nandanvan</option>
                <option value="options">Sadar</option>
            </select>
            <input type="text" value='Master Certificate in Data Science' className='text'/> <br/>
            <textarea placeholder='Describe your message '></textarea> <br/>
            <button type="submit">Submit</button>
         </form>
    </div>
    </div>

    </>
  )
}

export default Datasciencepge;