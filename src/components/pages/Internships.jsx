import React from "react";
// import "./Internship.css"
import section1 from "../../assets/Intershipimg/section1/internship2.jpg"
import section1a from "../../assets/Intershipimg/section1/projecticon1.svg"
import section1b from "../../assets/Intershipimg/section1/projecticon2.svg"
import section2 from  "../../assets/Intershipimg/section2/task3.jpeg"
import section3 from "../../assets/Intershipimg/section3/task5.jpeg"
import section4a from "../../assets/Intershipimg/section4/avrdusteech.webp"
import section4b from "../../assets/Intershipimg/section4/choicetechhub.webp"


function Internship() {

    return (
        <>
            <section className="section1">
                <div className="section1content" >
                    <div className="div1b1">
                        <img src={section1} alt="img" />
                    </div>
                    <div className="div2b2">
                        <h1>
                            Internship Edverciity</h1>

                        <h2>Internship courses at Edverciity</h2><br />

                        <p>Edverciity offers internship courses that provide
                            students with practical experience in the IT AND CAD
                            industry. These programs usually consist of a
                            combination of classroom instruction, online learning
                            modules, and project work supervised by Edverciity's
                            training experts.
                        </p><br />
                        <p>By enrolling in internship classes, students can enhance
                            their resumes, acquire hands-on skills, and establish
                            professional connections in their chosen field of study.
                            Edverciity provides these courses to students at an
                            affordable fee, along with access to the latest tools
                            and techniques used in the industry.
                        </p>
                        <div className="div2d3">

                            <div className="div2d3_box">
                                <img src={section1a}
                                    alt="icon1" />
                                <h3>Get Hands-on Experience & Build Your Career</h3>
                            </div>
                            <div className="div2d3_box">
                                <img src={section1b}
                                    alt="icon2" />
                                <h3>Internship Gain Practical Insights</h3>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <section className="section2">
                <div className="section2content">
                    <div className="s2div1">
                        {/* <div>
                            <h1>Enquire Now</h1>
                        </div> */}

                        <form id="form">
                            <h1>Enquire Now</h1>

                            <input type="text" placeholder="Enter Name" />
                                <input type="text" placeholder="Enter Email" />
                                    <input type="text" placeholder="Enter Number" />
                                        <select name id>
                                            <option value>Select</option>
                                            <option value="Nandanvan">Nandanvan</option>
                                            <option value="Sadar">Sadar</option>
                                        </select>
                                        <textarea name id cols="10" role="4"
                                            placeholder="Enter Mesaage"></textarea>
                                        <button>SEND</button>
                                    </form>
                                </div>
                                <div className="s2div2">
                                    <h1>
                                        Edverciity Summer special internship courses

                                    </h1>
                                    <h3>Hands on practice and mentor sessions</h3><br />
                                    <p><img class="s2icon" src={section2}
                                        alt="icon" /> Model for Macro-economic Trends using
                                        Data Science</p><br />
                                    <p><img class="s2icon" src={section2}
                                        alt="icon" /> Creating a Robust E-commerce Payment API
                                        using
                                        Full-Stack Development</p><br />
                                    <p><img class="s2icon" src={section2}
                                        alt="icon" /> Developing a Scalable Fraud Detection
                                        System for
                                        Banks using Machine Learning</p><br />
                                    <p><img class="s2icon" src={section2}
                                        alt="icon" /> Design and Simulation of a Robotic Arm
                                        Using
                                        SolidWorks</p><br />
                                    <p><img class="s2icon" src={section2}
                                        alt="icon" />Architectural Floor Plan and 3D
                                        Visualization Using
                                        AutoCAD and Revit</p><br />
                                    <p><img class="s2icon" src={section2}
                                        alt="icon" />/Finite Element Analysis (FEA) of a
                                        Mechanical
                                        Component Using ANSYS</p><br />

                                </div>
                            </div>
                        </section>

                        <section className="section3">
                            <h1>
                                Edverciity provides a variety of internship courses
                            </h1>
                            <div className="section3content">

                                <div className="s3d1">
                                    <ul>

                                        <li>
                                            <img src={section3}
                                                alt="icon" /> Modeling and Assembly of a Gearbox
                                            Using SolidWorks</li>
                                        <li><img src={section3}
                                            alt="icon" />Architectural Floor Plan Design and
                                            Visualization
                                            with AutoCAD</li>
                                        <li><img src={section3}
                                            alt="icon" />Reverse Engineering of a Mechanical
                                            Component Using
                                            Creo</li>
                                        <li><img src={section3}
                                            alt="icon" />Design and Drafting of a Multi-Story
                                            Building Using
                                            Revit</li>
                                        <li><img src={section3}
                                            alt="icon" />Product Design and Rendering of a
                                            Consumer
                                            Electronic Device</li>
                                        <li><img src={section3}
                                            alt="icon" />Sheet Metal Component Design and
                                            Development Using
                                            CATIA</li>
                                        <li><img src={section3}
                                            alt="icon" />Finite Element Analysis of a
                                            Suspension System Using
                                            ANSYS</li>
                                        <li><img src={section3}
                                            alt="icon" />Thermal Analysis of an Electronic
                                            Enclosure Using
                                            COMSOL Multiphysics</li>
                                        <li><img src={section3}
                                            alt="icon" />Modal Analysis of a Bridge Structure
                                            Using
                                            Abaqus</li>
                                        <li><img src={section3}
                                            alt="icon" />Crash Simulation of an Automotive
                                            Bumper System
                                            Using LS-DYNA</li>
                                        <li><img src={section3}
                                            alt="icon" />CFD Analysis of Airflow Over an
                                            Airfoil Using ANSYS
                                            Fluent</li>

                                    </ul>

                                </div>
                                <div className="s3d2">

                                    <ul>

                                        <li>
                                            <img src={section3}
                                                alt="icon" /> Job Portal app creation for Android
                                            in Kotlin</li>
                                        <li><img src={section3}
                                            alt="icon" />
                                            Ecommerce Automation using Selenium - python
                                        </li>
                                        <li><img src={section3}
                                            alt="icon" />
                                            Banking fraud predictive model using Machine learn
                                        </li>
                                        <li><img src={section3}
                                            alt="icon" />
                                            Electricity Billing System in Java Programming
                                        </li>
                                        <li><img src={section3}
                                            alt="icon" />
                                            Distance measurement in submarines
                                        </li>
                                        <li><img src={section3}
                                            alt="icon" />
                                            Full Stack development on E-commerce API-Payment G
                                        </li>
                                        <li><img src={section3}
                                            alt="icon" />
                                            Design a Responsive Tour and Travel websites
                                        </li>
                                        <li><img src={section3}
                                            alt="icon" />
                                            Online Examination portal in python Framework-Django
                                        </li>
                                        <li><img src={section3}
                                            alt="icon" />
                                            Motors control using embedded system application
                                        </li>
                                        <li><img src={section3}
                                            alt="icon" />
                                            Developing Online College Yearbook using Java web
                                        </li>
                                        <li><img src={section3}
                                            alt="icon" />
                                            High power device controlling using cloud and
                                            Raspberry Pi
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </section>
                        <section className="section4">
                            <h1>Internships offered at</h1>
                            <div class="s4img">
                                <img src={section4a} alt="img1" />
                                <img src={section4b} alt="img2" />
                            </div>
                        </section>


                    </>
                    )
}
                    export default Internship;





