import React, { useState } from "react";
import { Header, Footer, BottomHeader, Btn, BeforeCard } from "../components"
import { COLORS, SHADOW } from "../constants"
import { homeStyle } from "../styles"
import Phone from "../assets/images/phone.png"
import MaterialIcon from 'material-icons-react';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import EmailIcon from '@material-ui/icons/Email';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import AddressIcon from '@material-ui/icons/Room';
import { Link } from "react-router-dom";

export default function Contact(props) {

    const [data, setData] = useState([{
        img: "https://emberlyn.ancorathemes.com/wp-content/uploads/2017/07/single-1.1.jpg",
        name: "Jane",
        body: "Morbi et massa magna. Cras turpis mi, consectetur id turpis molestie, commodo ultrices mi. Nulla nec mi vitae est mollis malesuada. usce dictum lorem quam, quis aliquet nisl."
    },
    {
        img: "https://emberlyn.ancorathemes.com/wp-content/uploads/2017/07/single-2.1.jpg",
        name: "Adrian",
        body: "Morbi et massa magna. Cras turpis mi, consectetur id turpis molestie, commodo ultrices mi. Nulla nec mi vitae est mollis malesuada. usce dictum lorem quam, quis aliquet nisl."
    },
    {
        img: "https://emberlyn.ancorathemes.com/wp-content/uploads/2017/07/single-1.jpg",
        name: "Amanda",
        body: "Morbi et massa magna. Cras turpis mi, consectetur id turpis molestie, commodo ultrices mi. Nulla nec mi vitae est mollis malesuada. usce dictum lorem quam, quis aliquet nisl."
    },
    {
        img: "https://emberlyn.ancorathemes.com/wp-content/uploads/2017/07/single-3.jpg",
        name: "Laura",
        body: "Morbi et massa magna. Cras turpis mi, consectetur id turpis molestie, commodo ultrices mi. Nulla nec mi vitae est mollis malesuada. usce dictum lorem quam, quis aliquet nisl."
    },
    {
        img: "https://emberlyn.ancorathemes.com/wp-content/uploads/2017/07/single-5.jpg",
        name: "Annie",
        body: "Morbi et massa magna. Cras turpis mi, consectetur id turpis molestie, commodo ultrices mi. Nulla nec mi vitae est mollis malesuada. usce dictum lorem quam, quis aliquet nisl."
    },
    {
        img: "https://emberlyn.ancorathemes.com/wp-content/uploads/2017/07/single-6_1.jpg",
        name: "Mark",
        body: "Morbi et massa magna. Cras turpis mi, consectetur id turpis molestie, commodo ultrices mi. Nulla nec mi vitae est mollis malesuada. usce dictum lorem quam, quis aliquet nisl."
    }
    ])

    return <div>
        <Header active="contact" />
        {/* // Top Image */}
        <BottomHeader title="Contact Us" />

        <div className="row" style={{ maxWidth: 1400, padding: "80px 20px", margin: "auto" }} >
            <div className="col-md-6">
                <img style={{ width: "90%", marginBottom: 30, marginTop: -10 }} src={Phone} />
            </div>
            <div className="col-md-6" style={{ textAlign: "left" }}>
                <div id="contact" className="centerItem" style={{ alignItems: 'flex-start' }}>
                    <h4 style={{ fontWeight: 'bold', fontStyle: "italic", color: COLORS.accent }}>Let's Get In Touch</h4>
                    <h2>Contact Info</h2>
                    <div className="separator" style={{ width: "12%", margin: "30px 0" }} ></div>
                    <h5>Please contact Emily direct for further information including an arrangement of any personal style service.</h5><br />
                    <h6><AddressIcon fontSize="small" style={{ color: COLORS.accent }} /> 123 Pearl Street, New York, NY 10001</h6>
                    <h6>
                        <Link to="#" className="contact-link" ><PhoneAndroidIcon fontSize="small" style={{ color: COLORS.accent }} /> 099 000 0000</Link>
                    </h6>
                    <Link to="#" className="contact-link" ><EmailIcon fontSize="small" style={{ color: COLORS.accent }} /> name@example.com</Link>
                    <br />
                    <div className="flexDiv">
                        <a className="social-icons" style={{ marginLeft: 0 }}> <FacebookIcon fontSize={"medium"} /> </a>
                        <a className="social-icons"> <InstagramIcon fontSize={"medium"} /> </a>
                        <a className="social-icons"> <TwitterIcon fontSize={"medium"} /> </a>
                        <a className="social-icons"> <YouTubeIcon fontSize={"medium"} /> </a>
                    </div>
                </div>
            </div>
        </div>


        {/* Form Section */}
        <div style={{ ...homeStyle.appointmentSection, marginTop: 0, padding: "60px 20px", backgroundColor: "#63636333" }}>
            <div className="centerItem" style={{ maxWidth: 1200, margin: "auto" }}>
                <h4 style={{ fontWeight: 'bold', fontStyle: "italic", color: COLORS.accent }}>Send A Message</h4>
                <h2>Request Help</h2>
                <div className="separator" style={{ width: "8%", margin: "30px 0" }} ></div>
                <form style={{ width: "100%" }}>
                    <div className="flexDiv" style={{ justifyContent: "space-between" }}>
                        <input style={{ width: "49%" }} type="text" placeholder="Your Name" />
                        <input style={{ width: "49%" }} type="email" placeholder="Your Email" />
                    </div>
                    <textarea style={{ width: "100%", minHeight: 300 }} type="text" placeholder="Your Message" />
                    <div className="flexDiv" style={{ alignItems: "center", marginBottom: 40 }}>
                        <label style={{height: 19}}>
                            <input className="checkbox" type="checkbox" />
                            <span className="checkmark" ></span>
                        </label>
                        <h6 style={{ margin: 0 }}>I agree that my submitted data is being collected and stored.</h6>
                    </div>

                    <Btn title="Send Message" />
                </form>
            </div>
        </div>


        <Footer />
    </div>
}