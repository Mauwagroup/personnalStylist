import React from "react";
import { COLORS } from "../constants"
import { Link } from "react-router-dom";

export default function Btn(props) {
    return <Link to={props.to || "/"} id={props.id} className={props.className} style={{backgroundColor: COLORS.accent, padding: "8px 20px", margin: "20px 0px", border: "none", color: COLORS.white, ...props.style}}>
        {props.title}
    </Link>
}