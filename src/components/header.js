import React, { useState, useEffect } from "react";
import { headerStyle } from "../styles"
import { COLORS, SHADOW } from "../constants"
import MaterialIcon from 'material-icons-react';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import { Link } from "react-router-dom";

export default function Header({ active, subActive }) {

    const [isFixed, setIsFixed] = useState(false);

    function checkIsScrolled() {
        let topNavBar = document.getElementById("topNavBar");

        if (window.scrollY > topNavBar.scrollHeight + 1)
            setIsFixed(true);
        else
            setIsFixed(false);
    }

    useEffect(() => {
        window.scrollTo(0, 0)
        window.addEventListener("scroll", () => {
            checkIsScrolled()
        })
    }, [])

    const navbar = {
        ...(!isFixed ? headerStyle.linksWrapper : {}),
        ...(isFixed ? {
            ...headerStyle.linksWrapper,
            ...SHADOW,
            position: "fixed",
            padding: "5px 0",
            backgroundColor: COLORS.white,
            top: 0,
            left: 0,
            zIndex: 95,
            borderTop: "none",
            right: 0,
            width: "100%",
            backgroundImage: 'url("https://www.transparenttextures.com/patterns/arches.png")'
        } : {})
    }

    return <div style={{ ...headerStyle.container, marginBottom: (isFixed ? 50 : 0) }}>
        <div id="topNavBar" className="row" style={{ maxWidth: 1200, padding: "40px 10px", margin: "auto" }}>
            <div className="col-md-4">
                <div className="centerItem" style={{ ...headerStyle.flexDiv, justifyContent: "flex-start" }}>
                    <MaterialIcon id="icon1" icon="email" size={20} />
                    <h5 className="headerText" >Email@yourdomain.com</h5>
                </div>
            </div>
            <div className="col-md-4">
                <div className="centerItem" style={{ textAlign: 'center' }}>
                    <h4>Your Logo</h4>
                    <div className="flexDiv">
                        <a className="social-icons"> <FacebookIcon fontSize={"medium"} /> </a>
                        <a className="social-icons"> <InstagramIcon fontSize={"medium"} /> </a>
                        <a className="social-icons"> <TwitterIcon fontSize={"medium"} /> </a>
                        <a className="social-icons"> <YouTubeIcon fontSize={"medium"} /> </a>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="centerItem" style={{ ...headerStyle.flexDiv, justifyContent: "flex-end" }}>
                    <h5 className="headerText" >099 000 0000</h5>
                    <MaterialIcon id="icon2" icon="call" size={20} />
                </div>
            </div>
        </div>


        <nav id="navbar" className="navbar navbar-expand-lg" style={navbar}>
            <div className="container-fluid">
                <Link class={"navbar-brand" + (isFixed ? " logo-visible" : " logo-hidden")} to="/personnalStylist">Your Logo</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{ margin: "auto" }}>
                        <li className="nav-item">
                            <Link className={"nav-link" + (active === "home" ? " active-link" : "")} aria-current="page" to="/personnalStylist">Home</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className={"nav-link dropdown-toggle" + (active === "work" ? " active-link" : "")} href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Work With Me
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link className={"subLink nav-link" + (subActive === "about" ? " active-subLink" : "")} to="/personnalStylist/about">About Me</Link></li>
                                <li><Link className={"subLink nav-link" + (subActive === "testimonials" ? " active-subLink" : "")} to="/personnalStylist/testimonials">Testimonials</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className={"nav-link" + (active === "services" ? " active-link" : "")} to="/personnalStylist/services">Style Services</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={"nav-link" + (active === "before" ? " active-link" : "")} to="/personnalStylist/before">Before & After</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className={"nav-link dropdown-toggle" + (active === "hints" ? " active-link" : "")} href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Hints & Tips
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link className={"subLink nav-link" + (subActive === "video" ? " active-subLink" : "")} to="/personnalStylist/style-videos">Style Videos</Link></li>
                                <li><Link className={"subLink nav-link" + (subActive === "blog" ? " active-subLink" : "")} to="/personnalStylist/blog" >Blog</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className={"nav-link" + (active === "contact" ? " active-link" : "")} to="/personnalStylist/contact">Contact Us</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
}