import React, { useState } from "react";
import { Header, Footer, BottomHeader, Btn, BeforeCard } from "../components"
import { COLORS, SHADOW } from "../constants"
import { homeStyle } from "../styles"

export default function Testimonials(props) {

    function Card(data) {
        return <div className="col-md-6" style={{margin: "0 0px 40px" }}>
            <div style={{ display: "flex", flexDirection: "row", paddingBottom: "40px", borderBottom: "1px solid #ccc" }}>
                <img style={{ height: 80, width: 80, marginRight: 25, marginTop: 8 }} src="https://bestprofilepictures.com/wp-content/uploads/2021/04/Cool-Profile-Picture.jpg" />
                <div className="centerItem" style={{ alignItems: 'flex-start' }}>
                    <h4 style={{ lineHeight: 1.5, fontStyle: "italic", textAlign: "left" }}>“Emily is a life saver! I just landed a new job which requires me to wear clothing that is both fashion forward and professional. At my previous place of employment, I had a uniform.”</h4><br />
                    <h6 style={{ fontWeight: "bold" }}>ANNA, PERSONAL TRAINER</h6>
                </div>
            </div>
        </div>
    }

    return <div>
        <Header active="work" subActive="testimonials" />
        {/* // Top Image */}
        <BottomHeader title="Testimonials" />

        {/* //Services Section */}
        <h4 style={{ fontWeight: 'bold', fontStyle: "italic", color: COLORS.accent, margin: "60px auto 20px" }}>Clients Reviews</h4>
        <h2>What Clients Say</h2>
        <div className="separator" style={{ width: "8%" }} ></div>
        <div style={{ maxWidth: 1400, margin: "40px auto", padding: "0 20px"}}>
            <div className="row centerItem" style={{flexDirection: "row"}}>
                {Card()}
                {Card()}
                {Card()}
                {Card()}
                {Card()}
                {Card()}
                {Card()}
            </div>
        </div>

        <Footer />
    </div>
}