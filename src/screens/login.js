import React, { useState, useEffect } from "react";
import { Header, Footer, BottomHeader, Btn } from "../components"
import { COLORS, URL } from "../constants"
import { homeStyle } from "../styles"
import {Link} from "react-router-dom";

export default function Login(props) {

    useEffect(() => {
        document.getElementById("right-navbar").style.display = "none";
    }, [])

    return <div className="centerItem" style={{ backgroundColor: "#63636333", height: "100vh" }}>

        <h2>Login</h2>
        <Link to={URL} style={{margin: "20px auto", fontSize: "1.5rem"}} >Your Logo</Link>

        <form>
            <input type="email" placeholder="Email Address" style={{ minWidth: 400 }} /><br />
            <input type="password" placeholder="Password" style={{ minWidth: 400 }} /><br />
        </form>

        <Btn to="#" title="Login" />


    </div>
}