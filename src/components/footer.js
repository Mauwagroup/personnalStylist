import React from "react";
import { COLORS } from "../constants"
import { footerStyle } from "../styles"

export default function Footer(props) {
    return <div style={{...footerStyle.topContainer, ...props.style}}>
        <div className="row" style={{ padding: "90px 0", margin: "auto", maxWidth: 1200 }}>
            <div className="col-md-3 col-sm-6">
                <h4 style={footerStyle.title}>About Me</h4><br />
                <a href="#"><h6>Home</h6></a>
                <a href="#"><h6>About Me</h6></a>
                <a href="#"><h6>My Clients</h6></a>
                <a href="#"><h6>My Team</h6></a>
                <a href="#"><h6>My Awards</h6></a>
            </div>
            <div className="col-md-3 col-sm-6 divLine">
                <h4 style={footerStyle.title}>Pages</h4><br />
                <a href="#"><h6>Home</h6></a>
                <a href="#"><h6>My Services</h6></a>
                <a href="#"><h6>Gallery</h6></a>
                <a href="#"><h6>Video Vlog</h6></a>
            </div>
            <div className="col-md-3 col-sm-6 divLine">
                <h4 style={footerStyle.title}>My Services</h4><br />
                <a href="#"><h6>Home</h6></a>
                <a href="#"><h6>My Services</h6></a>
                <a href="#"><h6>Gallery</h6></a>
                <a href="#"><h6>Video Vlog</h6></a>
            </div>
            <div className="col-md-3 col-sm-6 divLine">
                <h4 style={footerStyle.title}>Information</h4><br />
                <a href="#"><h6>Home</h6></a>
                <a href="#"><h6>My Services</h6></a>
                <a href="#"><h6>Gallery</h6></a>
                <a href="#"><h6>Video Vlog</h6></a>
            </div>
        </div>
        <div style={footerStyle.bottomContainer}>
            <h6 style={footerStyle.text}>Mauwa Group © 2021. All Rights Reserved.</h6>
        </div>
    </div>
}