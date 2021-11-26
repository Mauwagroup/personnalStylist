import React, {useState, useEffect} from 'react'
import Lottie from 'react-lottie';
import animationData from "../assets/loading.json"
import {COLORS} from "../constants"

export default function LottieControl(props) {

    const [screenWidth, setScreenWidth] = useState(window.screen.width)
    useEffect(() => {
        window.addEventListener("resize", () => {
            setScreenWidth(window.screen.width)
        });
    })

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return <div
        style={{
            top: 0,
            position: 'absolute',
            width: '100%',
            height: '100vh',
            backgroundColor: COLORS.white,
            zIndex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center", 
            backgroundImage: 'url("https://www.transparenttextures.com/patterns/arches.png")'
        }}>
        <Lottie options={defaultOptions}
            isPaused={false}
            style={{ width: 180, height: 180, margin: "10px auto" }}
        />
        <h3 style={{color: COLORS.accent}}>Please, Wait!</h3>
    </div>

}