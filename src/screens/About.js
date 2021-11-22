import React, { useState } from "react";
import { Header, Footer, Card, BottomHeader, Btn } from "../components"
import { COLORS, SHADOW } from "../constants"
import { homeStyle } from "../styles"
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Image from "../assets/images/project.png"
import { Link } from "react-router-dom";

export default function About(props) {

    const [data, setData] = useState([0, 0, 0, 0, 0, 0, 0, 0])

    return <div>
        <Header active="work" subActive="about" />
        {/* // Top Image */}
        <BottomHeader title="About Me" />

        {/* //Description section */}
        <div className="row" style={{ margin: "80px auto", maxWidth: 1400 }}>
            <div className="col-md-6">
                <img style={{ height: "auto", ...SHADOW, borderRadius: 25 }} src="https://emberlyn.ancorathemes.com/wp-content/uploads/2017/07/bg-12.jpg" />
            </div>
            <div className="col-md-6">
                <div className="centerItem" style={{ padding: 40, textAlign: "left", alignItems: "flex-start" }}>
                    <h4 style={{ fontWeight: 'bold', fontStyle: "italic", color: COLORS.accent }}>About Christelle</h4>
                    <h2>Meet Your Personal</h2>
                    <h2>Style Editor</h2>
                    <div className="separator" style={{ width: "8%", margin: "20px 0 0px" }} ></div>
                    <h5 style={{ margin: "40px auto", fontStyle: "italic", color: COLORS.grey, lineHeight: 1.5 }}>I love the look in a woman’s eyes when she knows she looks good. She walks with confidence and carries herself with a self-assured presence that puts others at ease and allows her to be fully present in the moment. It is much more than the clothes we wear.
                        <br /><br />Etiam sed hendrerit turpis, non commodo est. Suspendisse sed luctus mi. Praesent cursus orci a condimentum interdum. Morbi varius in risus dapibus.</h5>
                </div>
            </div>
        </div>

        {/* //Dress your best Section */}
        <div style={{ backgroundColor: "#63636333", marginTop: 40, padding: "40px 0 0" }}>
            <h4 style={{ fontWeight: 'bold', fontStyle: "italic", color: COLORS.accent }}>Dress Your Best</h4>
            <h2>Get Started With Your</h2>
            <h2>Own Stylist Today</h2>
            <div className="row" style={{ maxWidth: 1200, margin: "-160px auto 0", position: "relative", bottom: -200 }}>
                <div id="firstBox" className="col-md-4 link-box" style={{ backgroundImage: " url(http://emberlyn.ancorathemes.com/wp-content/uploads/2017/07/02_about-me_03.jpg)", height: 400 }}>
                    <div className="centerItem">
                        <Link to="/personnalStylist/services" ><h2 className="links">Explore My<br />Services</h2></Link>
                    </div>
                </div>
                <div className="col-md-4 link-box" style={{ backgroundImage: " url(http://emberlyn.ancorathemes.com/wp-content/uploads/2017/07/02_about-me_03.jpg)", height: 400 }}>
                    <div className="centerItem">
                        <Link to="/personnalStylist/testimonials" ><h2 className="links">View Clients<br />Reviews</h2></Link>
                    </div>
                </div>
                <div className="col-md-4 link-box" style={{ backgroundImage: " url(http://emberlyn.ancorathemes.com/wp-content/uploads/2017/07/02_about-me_03.jpg)", height: 400 }}>
                    <div className="centerItem">
                        <Link to="/personnalStylist/contact" ><h2 className="links">Request Style<br />Consultation</h2></Link>
                    </div>
                </div>
            </div>
        </div>

        {/* //Benefits Section */}
        <h4 style={{ fontWeight: 'bold', fontStyle: "italic", color: COLORS.accent, margin: "260px auto 20px" }}>Benefits</h4>
        <h2>Change Your Style With Me</h2>
        <div className="separator" style={{ width: "8%" }} ></div>
        <div className="row" style={{ maxWidth: 1200, margin: "0 auto 60px" }}>
            {data.map((item) => {
                return <div className="col-lg-3 col-md-6 flexDiv" style={{ margin: "0 0 30px" }}>
                    <CheckCircleIcon style={{ color: COLORS.accent, fontSize: 60, margin: 10 }} />
                    <h5 style={{ margin: 0, textAlign: 'left', lineHeight: 1.5 }}>Highly trained certified personal stylist</h5>
                </div>
            })}
        </div>


        {/* // Get in touch section */}
        <div style={{ ...homeStyle.appointmentSection, marginTop: 0, padding: 10, backgroundColor: "#63636333" }}>
            <div className="row" style={{ margin: "auto", maxWidth: 1300 }}>
                <div className="col-md-6">
                    <div className="centerItem" style={{ padding: 40, textAlign: "left", alignItems: "flex-start" }}>
                        <h4 style={{ fontWeight: 'bold', fontStyle: "italic", color: COLORS.accent }}>Let's Get In Touch</h4>
                        <h2>I can help you with any styling project</h2>
                        <div className="separator" style={{ width: "8%", margin: "20px 0 0px" }} ></div>
                        <h5 style={{ margin: "40px auto", fontStyle: "italic", color: COLORS.grey, lineHeight: 1.5 }}>Etiam vulputate metus sit amet dictum lobortis. In hac habitasse platea dictumst. Phasellus eleifend urna a scelerisque volutpat. Curabitur tincidunt purus tortor, interdum iaculis dui consectetur in efficitur elit sit amet.</h5>
                        <Btn title="Contact Me" to="/personnalStylist/contact" />
                    </div>
                </div>
                <div className="col-md-6">
                    <img style={{ height: "auto" }} src={Image} />
                </div>
            </div>
        </div>

        <Footer />
    </div>
}