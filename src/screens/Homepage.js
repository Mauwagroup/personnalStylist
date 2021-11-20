import React, { useState } from "react";
import { Header, Footer, Card, Carousel, Btn } from "../components"
import { COLORS, SHADOW } from "../constants"
import { homeStyle } from "../styles"

export default function Home(props) {

    const [data, setData] = useState([{
        img: "https://emberlyn.ancorathemes.com/wp-content/uploads/2017/07/slid-1.jpg"
    }])

    const [data2, setData2] = useState([
        { img: "http://emberlyn.ancorathemes.com/wp-content/uploads/2017/07/1.png" },
        { img: "http://emberlyn.ancorathemes.com/wp-content/uploads/2017/07/3.png" },
        { img: "http://emberlyn.ancorathemes.com/wp-content/uploads/2017/07/2.png" },
    ])

    return <div>
        <Header />
        {/* // Top Carousel */}
        <Carousel id="topCarousel" showData={true} showAnimation={true} />

        {/* //Description section */}
        <div className="row" style={{ margin: "80px auto", maxWidth: 1200 }}>
            <div className="col-md-6">
                <Carousel id="middleCarousel" showButtons={true} data={data} style={{ height: "auto", maxWidth: 480 }} showData={false} />
            </div>
            <div className="col-md-6">
                <div className="centerItem" style={{ padding: 40 }}>
                    <h4 style={{ fontWeight: 'bold', fontStyle: "italic", color: COLORS.accent }}>Welcome To Me</h4>
                    <h2>Personal Shopping and Styling</h2>
                    <div className="separator" ></div>
                    <h5>If you want confidence in your style, you've come to the right place. I specialise in creating effortless, up to date, wardrobes. My style packages enable you to make the best of your image.</h5>
                    <Btn title="Contact Me" />
                </div>
            </div>
        </div>

        {/* //Services Section */}
        <h4 style={{ fontWeight: 'bold', fontStyle: "italic", color: COLORS.accent, margin: "60px auto 20px" }}>What Do I offer</h4>
        <h2>Featured Services</h2>
        <div className="separator" style={{ width: "8%" }} ></div>
        <div style={homeStyle.appointmentSection}>
            <div className="row" style={{ margin: "auto", maxWidth: 1200, top: "-90px", position: "relative" }}>
                <div className="col-md-4">
                    <Card />
                </div>
                <div className="col-md-4">
                    <Card />
                </div>
                <div className="col-md-4">
                    <Card />
                </div>
            </div>

            <Btn title="Make An Appointment" style={{ top: "-45px", position: "relative" }} />
        </div>

        {/* //Reviews Section */}
        <div className="centerItem" style={{ margin: "40px auto", maxWidth: 1200 }}>
            <div className="centerItem" style={{ padding: 40, width: "60%" }}>
                <h4 style={{ fontWeight: 'bold', fontStyle: "italic", color: COLORS.accent }}>Welcome To Me</h4>
                <h2>What Clients Say</h2>
                <h5 style={{ margin: "40px auto", fontStyle: "italic", color: COLORS.grey, lineHeight: 1.5 }}>"If you want confidence in your style, you've come to the right place. I specialise in creating effortless, up to date, wardrobes. My style packages enable you to make the best of your image."</h5>
                <h3 style={{ color: COLORS.grey }}>Franck Tamala</h3>
                <h5 style={{ color: COLORS.accent }}>21 Years</h5>
            </div>
        </div>

        {/* // Presentation section */}
        <div style={{ ...homeStyle.appointmentSection, marginTop: 0, padding: 10, backgroundColor: "#63636333" }}>
            <div className="row" style={{ margin: "auto" }}>
                <div className="col-md-6">
                    <Carousel id="bottomCarousel" showButtons={true} data={data2} style={{ maxHeight: 600, width: "auto" }} showData={false} />
                </div>
                <div className="col-md-6">
                    <div className="centerItem" style={{ padding: 40, textAlign: "left", alignItems: "flex-start" }}>
                        <h4 style={{ fontWeight: 'bold', fontStyle: "italic", color: COLORS.accent }}>About Me</h4>
                        <h2>Find Your Style</h2>
                        <h2>With Me</h2>
                        <div className="separator" style={{ width: "8%", margin: "20px 0 0px" }} ></div>
                        <h5 style={{ margin: "40px auto", fontStyle: "italic", color: COLORS.grey, lineHeight: 1.5 }}>If you want confidence in your style, you've come to the right place. I specialise in creating effortless, up to date, wardrobes. My style packages enable you to make the best of your image.</h5>
                        <h3 style={{ color: COLORS.grey }}>Christelle Mak</h3>
                    </div>
                </div>
            </div>
        </div>

        {/* //News Section */}
        <h4 style={{ fontWeight: 'bold', fontStyle: "italic", color: COLORS.accent, margin: "80px auto 20px" }}>Blog Articles</h4>
        <h2>Latest News</h2>
        <div className="separator" style={{ width: "8%", marginBottom: 60 }} ></div>
        <div className="row" style={{ margin: "auto auto 60px", maxWidth: 1200 }}>
            <div className="col-md-4">
                <Card info={true} />
            </div>
            <div className="col-md-4">
                <Card info={true} />
            </div>
            <div className="col-md-4">
                <Card info={true} />
            </div>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3582.0230971913047!2d27.972844314981234!3d-26.130789883470605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950b2ac66e1eeb%3A0xbba7ef40920709d2!2sCresta%20Shopping%20Centre!5e0!3m2!1sfr!2sza!4v1637342718823!5m2!1sfr!2sza" width={"100%"} height={500} style={{ border: 0, margin: 0 }} allowfullscreen="" loading="lazy"></iframe>

        <Footer />
    </div>
}