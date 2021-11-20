import React from "react";
import { COLORS } from "../constants"
import { cardStyle } from "../styles"
import Btn from "./Btn"

export default function Card(props) {
    return <div style={{ width: '100%' }}>
        <img style={cardStyle.topContainer} src={"http://emberlyn.ancorathemes.com/wp-content/uploads/2017/07/services-3-1278x720.jpg"} />
        {props.info !== true && <div style={cardStyle.bottomContainer}>
            <h3>Personal Shopping</h3>
            <h5 style={{ textAlign: 'center', fontWeight: 400, fontSize: "0.9rem", margin: "20px auto" }}>I will advise you on the best styles, shapes and colors to suit you.</h5>
            <Btn title="Learn More" />
        </div>}

        {props.info && <div style={cardStyle.bottomContainer2}>
            <h5 style={cardStyle.text}>JUNE 18, 2018 | BY <span style={{color: COLORS.secondary}}>CINDY JEFFERSON</span> </h5>
            <h4>Why Choose a Personal Stylist?</h4>
            <h5 style={{...cardStyle.text, lineHeight: 1.5}}>Lorem ipsum dolor sit amet, mel id copiosae fabellas, idonam nominavi sea. sadipscing…</h5>
            <Btn title="Learn More" />
        </div>}
    </div>
}