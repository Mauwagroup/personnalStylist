import React, { useState, useEffect } from "react";
import { Header, Footer, Card, Carousel, Btn } from "../components"
import { COLORS, SHADOW, URL } from "../constants"
import { homeStyle } from "../styles"
import { MainStore } from "../redux"

export default function Home(props) {

    const [data, setData] = useState({})
    const [allData, setAllData] = useState({})

    useEffect(() => {
        if (props.data) {
            setData(props.data)
        }
    }, [props.data])

    useEffect(() => {
        setAllData(MainStore.getState().data)
    }, [])

    return <div>
        <Header active="home" />
        {/* // Top Carousel */}
        <Carousel id="topCarousel" showData={true} showAnimation={true} data={data?.carousel} />

        {/* //Description section */}
        <div className="row centerItem" style={{ margin: "80px auto", maxWidth: 1200, flexDirection: "row" }}>
            <div className="col-md-6">
                <Carousel id="middleCarousel" showButtons={true} data={data?.wTm?.img} style={{ height: "auto", maxWidth: 480, borderRadius: 25 }} showData={false} />
            </div>
            <div className="col-md-6">
                <div className="centerItem" style={{ padding: 40 }}>
                    <h4 style={{ fontWeight: 'bold', fontStyle: "italic", color: COLORS.accent }}>{data?.wTm?.title}</h4>
                    <h2>{data?.wTm?.subtitle}</h2>
                    <div className="separator" ></div>
                    <h5>{data?.wTm?.desc}</h5>
                    <Btn title="Contact Me" to={URL + "contact"} />
                </div>
            </div>
        </div>

        {/* //Services Section */}
        <h4 style={{ fontWeight: 'bold', fontStyle: "italic", color: COLORS.accent, margin: "60px auto 20px" }}>What Do I offer</h4>
        <h2>Featured Services</h2>
        <div className="separator" style={{ width: "8%" }} ></div>
        <div style={homeStyle.appointmentSection}>
            <div className="row centerItem" style={{ margin: "auto", maxWidth: 1200, top: "-120px", position: "relative", flexDirection: "row" }}>
                {data?.featuredServices && data?.featuredServices?.length > 0 &&
                    data?.featuredServices?.map((id, idx) => {
                        let item = allData?.services?.services.filter((item) => item.id === id)[0]
                        return <div key={idx} className="col-md-4">
                            <Card data={item} />
                        </div>
                    })
                }
            </div>

            <Btn title="Make An Appointment" to={URL + "contact"} style={{ top: "-75px", position: "relative" }} />
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
            <div className="row centerItem" style={{ margin: "auto", flexDirection: "row" }}>
                <div className="col-md-6">
                    <div className="centerItem">
                        <Carousel id="bottomCarousel" showButtons={true} data={data?.about?.img} style={{ height: "auto", maxWidth: 480, borderRadius: 25 }} showData={false} />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="centerItem" style={{ padding: 40, textAlign: "left", alignItems: "flex-start" }}>
                        <h4 style={{ fontWeight: 'bold', fontStyle: "italic", color: COLORS.accent }}>{data?.about?.title}</h4>
                        <h2>{data?.about?.subtitle}</h2>
                        <div className="separator" style={{ width: "8%", margin: "20px 0 0px" }} ></div>
                        <h5 style={{ margin: "40px auto", fontStyle: "italic", color: COLORS.grey, lineHeight: 1.5 }}>{data?.about?.desc}</h5>
                        <h3 style={{ color: COLORS.grey }}>{data?.about?.name}</h3>
                    </div>
                </div>
            </div>
        </div>

        {/* //News Section */}
        <h4 style={{ fontWeight: 'bold', fontStyle: "italic", color: COLORS.accent, margin: "80px auto 20px" }}>Blog Articles</h4>
        <h2>Latest News</h2>
        <div className="separator" style={{ width: "8%", marginBottom: 60 }} ></div>
        <div className="row centerItem" style={{ margin: "auto auto 30px", maxWidth: 1200, flexDirection: "row" }}>
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

        <Footer style={{ margin: "-10px auto" }} />
    </div>
}