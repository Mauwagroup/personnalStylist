import React, { useState, useEffect } from "react";
import { Header, Footer, Card, BottomHeader, Btn } from "../components"
import { COLORS, SHADOW, URL } from "../constants"
import { homeStyle } from "../styles"
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Image from "../assets/images/project.png"
import { Link } from "react-router-dom";

export default function About(props) {

    const [data, setData] = useState({})

    useEffect(() => {
        if (props.data) {
            setData(props.data)
        }
    }, [props.data])


    return <div>
        <Header active="work" subActive="about" />
        {/* // Top Image */}
        <BottomHeader title="About Me" />

        {/* //Description section */}
        <div className="row centerItem" style={{ margin: "80px auto", maxWidth: 1400, flexDirection: "row" }}>
            <div className="col-md-6">
                <img style={{ width: "75%", ...SHADOW, borderRadius: 25 }} src={data?.about?.img} alt="..." />
            </div>
            <div className="col-md-6">
                <div className="centerItem" style={{ padding: 40, textAlign: "left", alignItems: "flex-start" }}>
                    <h4 style={{ fontWeight: 'bold', fontStyle: "italic", color: COLORS.accent }}>{data?.about?.title}</h4>
                    <h2>{data?.about?.subtitle}</h2>
                    <div className="separator" style={{ width: "8%", margin: "20px 0 0px" }} ></div>
                    <h5 style={{ margin: "40px auto", fontStyle: "italic", color: COLORS.grey, lineHeight: 1.5 }}>{data?.about?.desc}</h5>
                </div>
            </div>
        </div>

        {/* //Dress your best Section */}
        <div style={{ backgroundColor: "#63636333", marginTop: 40, padding: "40px 0 0" }}>
            <h4 style={{ fontWeight: 'bold', fontStyle: "italic", color: COLORS.accent }}>Dress Your Best</h4>
            <h2>Get Started With Your</h2>
            <h2>Own Stylist Today</h2>
            <div className="row centerItem" style={{ maxWidth: 1200, margin: "-160px auto 0", position: "relative", bottom: -200, flexDirection: "row" }}>
                {data?.dress && data?.dress?.length > 0 &&
                    data?.dress?.map((item, index) => {
                        return <div key={index} id="firstBox" className="col-md-4 link-box"
                            style={{
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                                backgroundImage: (`url(${item?.img || "http://emberlyn.ancorathemes.com/wp-content/uploads/2017/07/02_about-me_03.jpg"})`),
                                height: 400,
                                position: "relative",
                                padding: 0,
                            }}>
                            <div className="centerItem" style={{ backgroundColor: (item?.img ? "rgba(0, 0, 0, 0.45)" : "none"), padding: "0 50px" }}>
                                <Link to={URL + (item?.link === "home" ? "" : item.link)} ><h2 className="links">{item?.title}</h2></Link>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>

        {/* //Benefits Section */}
        <h4 style={{ fontWeight: 'bold', fontStyle: "italic", color: COLORS.accent, margin: "260px auto 20px" }}>Benefits</h4>
        <h2>Change Your Style With Me</h2>
        <div className="separator" style={{ width: "8%" }} ></div>
        <div className="row centerItem" style={{ maxWidth: 1200, margin: "0 auto 60px", flexDirection: "row"}}>
            {data?.benefits && data?.benefits.length > 0 &&
                data?.benefits?.map((item) => {
                    return <div className="col-lg-3 col-md-6 flexDiv" style={{ margin: "0 0 30px" }}>
                        <CheckCircleIcon style={{ color: COLORS.accent, fontSize: 60, margin: 10 }} />
                        <h5 style={{ margin: 0, textAlign: 'left', lineHeight: 1.5 }}>{item}</h5>
                    </div>
                })}
        </div>


        {/* // Get in touch section */}
        <div style={{ ...homeStyle.appointmentSection, marginTop: 0, padding: 10, backgroundColor: "#63636333" }}>
            <div className="row centerItem" style={{ margin: "auto", maxWidth: 1300, flexDirection: "row" }}>
                <div className="col-md-6">
                    <div className="centerItem" style={{ padding: 40, textAlign: "left", alignItems: "flex-start" }}>
                        <h4 style={{ fontWeight: 'bold', fontStyle: "italic", color: COLORS.accent }}>{data?.gIt?.title}</h4>
                        <h2>{data?.gIt?.subtitle}</h2>
                        <div className="separator" style={{ width: "8%", margin: "20px 0 0px" }} ></div>
                        <h5 style={{ margin: "40px auto", fontStyle: "italic", color: COLORS.grey, lineHeight: 1.5 }}>{data?.gIt?.desc}</h5>
                        <Btn title="Contact Me" to={URL + "contact"} />
                    </div>
                </div>
                <div className="col-md-6">
                    <img style={{ width: "75%", borderRadius: 25 }} src={data?.gIt?.img} alt="..." />
                </div>
            </div>
        </div>

        <Footer />
    </div>
}