import React from "react";
import './ExploreCourses.css';
import aboutimg from '../../assets/About/section1b1.png';
import aboutimgv2 from '../../assets/About/v2.jpeg'
import aboutimg2 from '../../assets/About/v1.jpeg'

function ExploreCourses(){
    return(
        <>
          <section className="aboutsection1">
            <div className="aboutsection1content">
                <div className="aboutb1">
                    <img src={aboutimg} alt="img"/>
                </div>
                <div className="aboutb2">
                    <h1>About Edverciity</h1><br/>
                    <h2>Best Education Platform that Fits For Everyone</h2><br/>
                    <p><b>Edverciity IT & CAD Centre</b> has been a trusted name
                        in specialized training for BIM, CAD, CAM, CAE, PLM, and
                        Project Management since 2014. Our core mission is to
                        empower students with cutting-edge knowledge in
                        Computer-Aided Design (CAD), Computer-Aided
                        Manufacturing (CAM), and Computer-Aided Engineering
                        (CAE), helping them build strong and successful careers
                        across various industries.</p><br/>
                    <p>Since our inception, we have trained over 10,000
                        students, many of whom have secured placements in top
                        companies across India and abroad. At Edverciity, we
                        emphasize a unique blend of theoretical concepts and
                        hands-on practical sessions, preparing our students to
                        meet real-world industry standards and achieve
                        professional excellence.</p><br/>
                    <p>In 2014, <b>Edverciity</b> broadened its offerings by
                        launching industry-relevant IT courses to meet the
                        dynamic demands of the technology sector. Our curriculum
                        now includes Artificial Intelligence (AI), Machine
                        Learning (ML), Data Science, Business Analytics, Power
                        BI, and Full-Stack Development options such as MERN,
                        MEAN, Python, Java, and Django. We also provide training
                        in advanced programming languages like Java, Python, C,
                        and C++, ensuring our students stay ahead in today’s
                        competitive tech environment.</p>
                </div>
            </div>

        </section>
        <section className="aboutsection2">
            <div className="aboutsection2content">
                <p>
                    In addition to technical training, we offer career
                    development programs designed to enhance our students'
                    employability, These include:
                </p><br/>
                <ul>
                    <li>Group Discussions to improve communication skills.</li>
                    <li>Resume Building Workshops to create job-winning
                        resumes.</li>
                    <li>Personality Development Sessions to prepare for
                        interviews and professional success.</li>
                </ul><br/>

                <p>Our dedicated placement services provide personalized support
                    to connect students with the right job opportunities. With
                    strong industry partnerships and an active placement team,
                    we ensure that every student receives guidance throughout
                    the job search process, making them confident and ready to
                    thrive in the professional world.</p>

            </div>
        </section>

        <section className="aboutsection3">
            <div className="aboutsection3content">
                <div className="aboutbox1">
                    <img src={aboutimgv2} alt="img1"/>
                    <h2>Our Mission</h2><br/>
                    <div className="aboutbox1p1">
                        <p>Our mission is to provide top-quality,
                            industry-relevant education through expertly
                            designed programs and highly qualified instructors.
                            We are committed to fostering a holistic learning
                            experience that includes both technical and personal
                            development, offering mentorship and support at
                            every step. By combining cutting-edge training with
                            essential skills like communication and
                            problem-solving, we aim to equip our students for
                            the challenges of the modern job market while
                            helping them build fulfilling and successful
                            careers.</p>
                    </div>
                </div>
                <div className="aboutbox2">
                    <img src={aboutimg2} alt="img2"/>
                    <h2>Our Vision</h2><br/>
                    <div className="aboutbox2p1">
                    <p>Our vision at Edverciity is to be a premier institute delivering world-classNameName education in CAD and IT, empowering individuals with the skills and knowledge needed to thrive in the fast-evolving technology landscape. We aspire to create an environment where students not only gain technical expertise but also discover their true potential, enabling them to achieve long-term career success.</p>
                    </div>
                </div>

            </div>

        </section>
        <section className="aboutsection4">
            <div className="aboutsection4content">
                <h2>hello</h2>
            </div>
            <div className="aboutsection4content">
                  <h2>hello</h2>
            </div>
            <div className="aboutsection4content">
                  <h2>hello</h2>
            </div>
            <div className="aboutsection4content">
                  <h2>hello</h2>
            </div>
        </section>
        </>
    )

}
export default ExploreCourses;