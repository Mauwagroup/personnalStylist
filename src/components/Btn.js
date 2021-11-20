import React from "react";
import { COLORS } from "../constants"

export default function Btn(props) {
    return <a style={{backgroundColor: COLORS.accent, padding: "8px 20px", margin: "20px 0px", border: "none", color: COLORS.white, ...props.style}}>
        {props.title}
    </a>
}