import React from "react";
import "./StudentProject.css"
import Project1 from "../../assets/Projectss/p1.jpg"
import Project2 from "../../assets/Projectss/p2.jpg"
import Project3 from "../../assets/Projectss/p3.png"
import Project4 from "../../assets/Projectss/p4.jpg"
import Project5 from "../../assets/Projectss/p5.jpg"
import Project6 from "../../assets/Projectss/p6.jpg"

function StudentProject() {

    return (
        <>
            <section className="projectsection1">

                <div className="projectsection1content">
                    <h1>
                        Our <span style={{ color: 'red' }}>Student's</span> Work</h1>
                    <div className="div11">

                        <div className="Projectss">
                            <img className="pimg" src={Project1} alt="p1" />
                            <h2>EXTERIOR VIEW USING SKETCHUP & LUMION</h2>
                            <h3>NIRAJ VERMA</h3>
                        </div>
                        <div className="Projectss">
                            <img className="pimg" src={Project2} alt="p2" />
                            <h2>MASTER BED ROOM INTERIOR VIEW</h2>
                            <h3>YASHSHWINI WELEKAR</h3>
                        </div>
                        <div className="Projectss">
                            <img className="pimg" src={Project3} alt="p3" />
                            <h2>MULTIPLE VIEWS OF CAR ON AUTOCAD MECHANICAL</h2>
                            <h3>MR. DHIRAJ PETHE</h3>
                        </div>
                        <div className="Projectss">
                            <img className="pimg" src={Project4} alt="p4" />
                            <h2>EXPLODED VIEW OF ENGINE BOX</h2>
                            <h3>MR. HIMANSHU SHINDE</h3>
                        </div>
                    </div>

                    <div className="div22">


                        <div className="Projectss">
                            <img className="pimg" src={Project5} alt="p5" />
                            <h2>View Of Residential Bungalow</h2>
                            <h3>Ms. Nikita MIshra</h3>
                        </div>
                        <div className="Projectss">
                            <img className="pimg" src={Project6} alt="p6" />
                            <h2>Interior view of Master Bedroom in Sketchup+Lumion</h2>
                            <h3>Mr. Karambir Singh</h3>
                        </div>

                    </div>

                </div>

            </section>
        </>
    )
}
export default StudentProject