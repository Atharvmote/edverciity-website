import React from "react";
import './Centers.css'
import contactimg from '../../assets/Contact/section4/contact.png'




function Centers(){

    return(
        <>
         <h1 className="contactsection1h1">CORPORATE OFFICE</h1>
        <section className="contactsection1">
            <div className="contactsection1content">

                <div className="contactsection1box1">
                    <h2>NANDANVAN</h2><br/>
                    <p>1st floor, MB Tower, Nandanvan Main Rd,<br/> Mire
                        Layout,Jawahar Nagar,<br/>Nagpur-440009, Maharashtra</p>
                    <br/>
                    <p> +91 7507111164</p><br/>
                    <p> info@edverciity.com</p>
                </div>
                <div className="contactsection1box2">
                    <iframe
                        src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59546.34578004399!2d79.07761548249256!3d21.126650583813554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c757af511ac7%3A0x46e3d843f9ee3b19!2sEdverciity%20Nandanvan!5e0!3m2!1sen!2sin!4v1752657864881!5m2!1sen!2sin"}
                        style={{border:'1px'}} allowFullScreen loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        width="99%"
                        height="99%"></iframe>

                </div>

            </div>

        </section>
        
      

        <section className="contactsection2">
            <h2 className="contactsection2h2">OUR BRANCHES</h2><br/>
            <div className="d1">
                <h2>GUJARAT</h2><br/>
                <p> 301 3rd Floor, Bhuleshwar Complex, Halar Rd, beside
                    Bhulshwar Temple, Halar, Kapadia Chal,<b> Valsad</b>,
                    Gujarat 396001</p><br/>
                <p>K. P. Tower, 303, 3rd floor Gandhi Chowk, Station Char Rasta,
                    Silvasa Rd, Rd, Imran Nagar, <b>Vapi</b>, Gujarat 396195</p>
            </div><br/>

            <div className="d2">
                <h2>MAHARASHTRA</h2><br/>
                <p> Block No. 5, 1st Floor, Mangalwari Complex 1, A-Wing, Sadar,
                    <b>Nagpur</b>, Maharashtra 440001</p><br/>

            </div><br/>

            <div className="d3">
                <h2>UTTAR PRADESH</h2><br/>
                <p> th Floor, KP Arcade, KBC-25, Kanpur - Lucknow Rd, Sector B,
                    LDA Colony, Alambagh,<b>Lucknow</b>, Uttar Pradesh
                    226012</p><br/>
                <p>Building no. 26, Bharwara, Vigyan Khand, Gomti Nagar,
                    <b>Lucknow</b>, Uttar Pradesh 226010</p><br/>
                <p>G-12, Murli Bhawan, 10A Ashok Marg, near Sree Rama Towers,
                    Hazratganj, <b>Lucknow</b>, Uttar Pradesh 226001</p>
            </div>
        </section>

        <section className="conatctsection3">
            <div className="contactsection3content">
                <div className="contactsection3box1">
                    <iframe
                        src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59530.82406570904!2d79.0052847486328!3d21.165268499999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c0e18016b443%3A0xa647973517730768!2sEdverciity!5e0!3m2!1sen!2sin!4v1752657995755!5m2!1sen!2sin"}
                        width="100%" height="100%" style={{border:'0px'}}
                        allowFullScreen loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>

                </div>
                <div className="contactsection3box2">
                    <h2>SADAR</h2><br/>
                    <p>1st Floor, A-Wing, Mangalwari Complex,<br/> Sadar,
                        Nagpur-440001, Maharashtra</p>
                    <br/>
                    <p> +91 7507111145</p><br/>
                    <p> info@edverciity.com</p>
                </div>

            </div>

        </section>
        <section className="contactsection4">
            <div className="contactsection4content">
                <div className="contactimg">
                    <img src={contactimg} alt="conctact"/>
                </div>
                <div className="contactform">
                    <h3>Get In Touch</h3>
                    <h4>
                        Feel Free to Write.
                    </h4>
                    <form >
                        <input type="text" placeholder="Enter Name"/>
                        <input type="text" placeholder="Enter Email"/>
                        <input type="text" placeholder="Enter Number"/>
                        <select name="" id="">
                            <option value="">Select</option>
                            <option value="Nandanvan">Nandanvan</option>
                            <option value="Sadar">Sadar</option>
                        </select>
                      <textarea name="" id="" cols="10" role="4" placeholder="Enter Query"></textarea>
                      <button className="formbutton">Send Query</button>
                    </form>
                </div>
            </div>

        </section>
        </>
    )
}
export default Centers;