import React, { useState, useEffect } from "react";
import { headerStyle } from "../styles"
import { COLORS, SHADOW, URL } from "../constants"
import MaterialIcon from 'material-icons-react';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Link } from "react-router-dom";
import { SettingStore } from "../redux"

export default function Header({ active, subActive }) {

    const [isFixed, setIsFixed] = useState(false);

    const [data, setData] = useState({})

    useEffect(() => {
        setData(SettingStore.getState().data)
    }, [])

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
        <div id="topNavBar" className="row" style={{ maxWidth: 1200, padding: "20px 10px", margin: "auto" }}>
            <div className="col-md-4">
                <div className="centerItem" style={{ ...headerStyle.flexDiv, justifyContent: "flex-start" }}>
                    <MaterialIcon id="icon1" icon="email" size={20} />
                    <h5 className="headerText" >{data?.email}</h5>
                </div>
            </div>
            <div className="col-md-4">
                <div className="centerItem" style={{ textAlign: 'center' }}>
                    <Link to={URL} >
                        <img src={data?.logo} alt="Logo" className="logo" />
                    </Link>
                    <div className="flexDiv">
                        <a target="_blank" rel="noreferrer" href={data?.facebook} className="social-icons"> <FacebookIcon fontSize={"medium"} /> </a>
                        <a target="_blank" rel="noreferrer" href={data?.instagram} className="social-icons"> <InstagramIcon fontSize={"medium"} /> </a>
                        <a target="_blank" rel="noreferrer" href={data?.twitter} className="social-icons"> <TwitterIcon fontSize={"medium"} /> </a>
                        <a target="_blank" rel="noreferrer" href={data?.youtube} className="social-icons"> <YouTubeIcon fontSize={"medium"} /> </a>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="centerItem" style={{ ...headerStyle.flexDiv, justifyContent: "flex-end" }}>
                    <h5 className="headerText" >{data?.tell}</h5>
                    <MaterialIcon id="icon2" icon="call" size={20} />
                </div>
            </div>
        </div>


        <nav id="navbar" className="navbar navbar-expand-lg" style={navbar}>
            <div className="container-fluid">
                {/* {isFixed && <Link class={"navbar-brand" + (isFixed ? " logo-visible" : " logo-hidden")} to={URL} > <img src={data?.logo} alt="Logo" className="animatedLogo" /></Link>} */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{ margin: "auto" }}>
                        <li className="nav-item">
                            <Link className={"nav-link" + (active === "home" ? " active-link" : "")} aria-current="page" to={URL} >Home</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className={"nav-link dropdown-toggle" + (active === "work" ? " active-link" : "")} href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Work With Me
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link className={"subLink nav-link" + (subActive === "about" ? " active-subLink" : "")} to={URL + "about"}>About Me</Link></li>
                                <li><Link className={"subLink nav-link" + (subActive === "testimonials" ? " active-subLink" : "")} to={URL + "testimonials"}>Testimonials</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className={"nav-link" + (active === "services" ? " active-link" : "")} to={URL + "services"}>Style Services</Link>
                        </li >
                        <li className="nav-item">
                            <Link className={"nav-link" + (active === "before" ? " active-link" : "")} to={URL + "before"} > Before & After</Link>
                        </li >
                        <li className="nav-item dropdown">
                            <a className={"nav-link dropdown-toggle" + (active === "hints" ? " active-link" : "")} href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Hints & Tips
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link className={"subLink nav-link" + (subActive === "video" ? " active-subLink" : "")} to={URL + "style-videos"}>Style Videos</Link></li>
                                <li><Link className={"subLink nav-link" + (subActive === "blog" ? " active-subLink" : "")} to={URL + "blog"} >Blog</Link></li >
                            </ul >
                        </li >
                        <li className="nav-item">
                            <Link className={"nav-link" + (active === "contact" ? " active-link" : "")} to={URL + "contact"} > Contact Us</Link>
                        </li >
                    </ul >
                </div >
            </div >
        </nav >
    </div >
}