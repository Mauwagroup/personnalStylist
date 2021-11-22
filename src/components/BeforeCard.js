import React from "react";
import { COLORS } from "../constants"
import { cardStyle } from "../styles"
import Btn from "./Btn"

export default function BeforeCard(props) {
    return <div className="row" style={{ margin: "30px 1px" }}>
        <div className="col-6" style={{ padding: 0 }}>
            <a href="#" className="img-link centerItem">
                <img style={{ width: '100%', height: '100%' }} src={props.img} />
                <div className="centerItem">
                    <h2>...</h2>
                </div>
            </a>
        </div>
        <div className="col-6" style={{ backgroundColor: COLORS.grey, padding: 0 }}>
            <div className="flexDiv" style={{ width: "100%", height: "100%" }}>
                <div style={{ width: "10%", height: "100%", marginLeft: "-7%" }}>
                    <div style={{ width: "100%", height: '45%', backgroundColor: COLORS.grey, transform: "skewY(45deg)", position: "relative", top: 13.5 }}></div>
                    <div style={{ width: "100%", height: '45%', backgroundColor: COLORS.grey, transform: "skewY(-45deg)", position: "relative", bottom: `calc(-5% + ${1}px)` }}></div>
                </div>

                <div style={{ width: "10%", height: "100%", marginLeft: "-9.7%" }}>
                    <div style={{ backgroundColor: COLORS.grey, position: "relative", width: "100%", height: "15%", top: 0, left: 0 }}></div>
                    <div style={{ backgroundColor: COLORS.grey, position: "relative", width: "100%", height: "15%", bottom: "-70%", left: 0 }}></div>
                </div>

                <div className="centerItem" style={{ textAlign: "left", padding: 20, alignItems: "flex-start" }} >
                    <h4 style={{ color: COLORS.accent, fontWeight: 700 }}>{props.name + "'s Makeover"}</h4>
                    <h5 style={{ color: COLORS.white }}>{props.body}</h5><br />
                    <a href="#" >View Makeover</a>
                </div>
            </div>
        </div>
    </div>
}