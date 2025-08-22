import React from "react";
import "./Testimonials.css"
import image from "../../assets/Testimonilas/quotes.png"


function Testimonials(){
    return(
        <>

         <div>
            <h1 className="testimonialsh1">
                What Our <span> Students </span> Say’s
            </h1>
        </div>
        
            <div class="div1">

                <div className="box">

                    <img src={image} alt="icon"/>
                    <p>I had a great experience learning with CADD centre Sadar.
                        Instructor’s are also very supportive, they are always
                        there
                        whenever we need them and pattern is also great the way
                        of
                        teaching is really imp</p>

                </div>

                <div className="box">
                    <img src={image} alt="icon"/>
                    <p>I had a great experience learning with CADD centre Sadar.
                        Instructor’s are also very supportive, they are always
                        there
                        whenever we need them and pattern is also great the way
                        of
                        teaching is really imp</p>
                </div>

                <div className="box">
                    <img src={image} alt="icon"/>
                    <p>I had a great experience learning with CADD centre Sadar.
                        Instructor’s are also very supportive, they are always
                        there
                        whenever we need them and pattern is also great the way
                        of
                        teaching is really imp</p>
                </div>

            </div>
        
        </>
    )
}export default Testimonials;