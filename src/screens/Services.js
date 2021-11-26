import React, { useState, useEffect } from "react";
import { Header, Footer, Card, BottomHeader, Btn } from "../components"
import { COLORS, SHADOW, URL } from "../constants"
import { homeStyle } from "../styles"
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Image from "../assets/images/project.png"
import HomeIcon from '@mui/icons-material/Home';
import FullDayIcon from '@mui/icons-material/QueryBuilder';
import HalfDayIcon from '@mui/icons-material/Refresh';

export default function Services(props) {

    const [data, setData] = useState({})

    useEffect(() => {
        if (props.data) {
            setData(props.data)
        }
    }, [props.data])

    return <div>
        <Header active="services" />
        {/* // Top Image */}
        <BottomHeader title="Style Services" />

        {/* //Services Section */}
        <h4 style={{ fontWeight: 'bold', fontStyle: "italic", color: COLORS.accent, margin: "60px auto 20px" }}>Styling Services</h4>
        <h2>Ready to be Transformed?</h2>
        <div className="separator" style={{ width: "8%" }} ></div>
        <div style={{ ...homeStyle.appointmentSection, backgroundColor: "#63636333" }}>
            <div className="row centerItem" style={{ margin: "auto", maxWidth: 1200, top: "-120px", position: "relative", flexDirection: "row" }}>
                {data?.services && data?.services.length > 0 &&
                    data?.services?.map((item, index) => {
                        return <div key={index} className="col-md-4">
                            <Card data={item} />
                        </div>

                    })}
            </div>
        </div>

        {/* //Dress your best Section */}
        <div style={{
            backgroundImage: 'url("http://emberlyn.ancorathemes.com/wp-content/uploads/2017/07/bg-11.jpg?id=398")',
            backgroundPosition: "center top",
            backgroundRepeat: "no-repeat !important",
            marginTop: -50,
        }}>
            <div style={{ padding: "150px 0 0" }}>
                <h4 style={{ fontWeight: 'bold', fontStyle: "italic", color: COLORS.accent }}>Styling Packages</h4>
                <h1 className="h1-alternative" style={{ color: COLORS.white }}>Become the Most Stylish</h1>
                <h1 className="h1-alternative" style={{ color: COLORS.white }}>Version of Yourself!</h1>
                <div className="row centerItem" style={{ maxWidth: 1250, margin: "-170px auto 0", position: "relative", bottom: -230, flexDirection: "row" }}>
                    <div id="firstBox" className="col-md-4 link-box" style={{ padding: 0 }}>
                        <div className="flexDiv" style={{ backgroundColor: COLORS.primary, width: "100%", padding: 20, alignItems: "center", justifyContent: "center" }}>
                            <HomeIcon style={{ color: COLORS.white, fontSize: 35, marginRight: 15 }} />
                            <h3 style={{ color: COLORS.white, fontWeight: 500, margin: 0 }}>In-Home Styling</h3>
                        </div>
                        <div style={{ backgroundColor: COLORS.white, border: "1px solid #ccc", width: "100%", height: "100%", padding: "50px 20px 50px" }}>
                            <ul style={{ textAlign: "left" }}>
                                <li>2-3 hours session at your home</li>
                                <li>Advice and consultation on what will suit you best (colours, cuts, fabrics, styles etc.)</li>
                                <li>Wardrobe edit</li>
                                <li>Complete the look with every outfit - including shoes, bags and jewellery</li>
                            </ul>
                            <h4 style={{ margin: "40px auto" }}><strong>Starting at $450</strong></h4>
                            <Btn title="Find Your Style Now" />
                        </div>
                    </div>
                    <div className="col-md-4 link-box" style={{ padding: 0 }}>
                        <div className="flexDiv" style={{ backgroundColor: COLORS.primary, width: "100%", padding: 20, alignItems: "center", justifyContent: "center" }}>
                            <HalfDayIcon style={{ color: COLORS.white, fontSize: 35, marginRight: 15 }} />
                            <h3 style={{ color: COLORS.white, fontWeight: 500, margin: 0 }}>Half-Day Shopping</h3>
                        </div>
                        <div style={{ backgroundColor: COLORS.white, border: "1px solid #ccc", width: "100%", height: "100%", padding: "50px 20px 50px" }}>
                            <ul style={{ textAlign: "left" }}>
                                <li>2-3 hours session at your home</li>
                                <li>Advice and consultation on what will suit you best (colours, cuts, fabrics, styles etc.)</li>
                                <li>Wardrobe edit</li>
                                <li>Complete the look with every outfit - including shoes, bags and jewellery</li>
                            </ul>
                            <h4 style={{ margin: "40px auto" }}><strong>Starting at $600</strong></h4>
                            <Btn title="Let's Go Shopping" />
                        </div>
                    </div>
                    <div className="col-md-4 link-box" style={{ padding: 0 }}>
                        <div className="flexDiv" style={{ backgroundColor: COLORS.primary, width: "100%", padding: 20, alignItems: "center", justifyContent: "center" }}>
                            <FullDayIcon style={{ color: COLORS.white, fontSize: 35, marginRight: 15 }} />
                            <h3 style={{ color: COLORS.white, fontWeight: 500, margin: 0 }}>Full-Day Shopping</h3>
                        </div>
                        <div style={{ backgroundColor: COLORS.white, border: "1px solid #ccc", width: "100%", height: "100%", padding: "50px 20px 50px" }}>
                            <ul style={{ textAlign: "left" }}>
                                <li>2-3 hours session at your home</li>
                                <li>Advice and consultation on what will suit you best (colours, cuts, fabrics, styles etc.)</li>
                                <li>Wardrobe edit</li>
                                <li>Complete the look with every outfit - including shoes, bags and jewellery</li>
                            </ul>
                            <h4 style={{ margin: "40px auto" }}><strong>Starting at $1000</strong></h4>
                            <Btn title="Spend The Day With Me" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* //Styling Process Section */}
        <h4 style={{ fontWeight: 'bold', fontStyle: "italic", color: COLORS.accent, margin: "320px auto 20px" }}>Styling Process</h4>
        <h2>How It Works</h2>
        <div className="separator" style={{ width: "8%" }} ></div>
        <div style={{ margin: "0 auto 110px" }}>
            <div className="row centerItem" style={{ maxWidth: 1200, margin: "50px auto 80px", flexDirection: "row" }}>
                {data?.process && data?.process?.length > 0 &&
                    data?.process.map((item, index) => {
                        return <div key={index} className="col-lg-3 col-md-6">
                            <div className="centerItem">
                                <h4 className="centerItem" style={{ width: 55, height: 55, borderRadius: 45, backgroundColor: COLORS.accent, color: COLORS.white }}>{index + 1}</h4>
                                <h4 style={{ fontWeight: "bold" }}>{item.title}</h4>
                                <h5 style={{ margin: 0, lineHeight: 1.5 }}>{item.desc}</h5>
                            </div>
                        </div>
                    })}
            </div>
            <Btn title="Make An Appointment" to={URL + "contact"} />
        </div>

        <Footer />
    </div>
}