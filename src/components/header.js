import React from "react";
import { headerStyle } from "../styles"
import { COLORS } from "../constants"
import MaterialIcon from 'material-icons-react';

export default function Header(props) {
    return <div style={headerStyle.container}>
        <div style={headerStyle.logoWrapper}>
            <div style={headerStyle.flexDiv}>
                <MaterialIcon id="icon1" icon="email" size={20} />
                <h5 className="headerText" >Email@yourdomain.com</h5>
            </div>
            <div style={{ textAlign: 'center' }}>
                <h4>Your Logo</h4>
                <h5 style={{color: COLORS.accent}}>Inspire People</h5>
            </div>
            <div style={headerStyle.flexDiv}>
                <h5 className="headerText" >099 000 0000</h5>
                <MaterialIcon id="icon2" icon="call" size={20} />
            </div>
        </div>
        <ul class="nav" style={headerStyle.linksWrapper}>
            <li class="nav-item">
                <a class="nav-link active-link" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">About Us</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Style Services</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Before & After</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Hints & Tips</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Contact Us</a>
            </li>
        </ul>
    </div>
}