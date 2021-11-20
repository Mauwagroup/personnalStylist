import React, { useState, useEffect } from "react";
import { carouselStyle } from "../styles"
import { COLORS } from "../constants"
import Btn from "../components/Btn"
const { uuid } = require('uuidv4');

export default function Carousel(props) {

    let id = props.id

    useEffect(() => {
        if (props.data){
            setImgs(props.data)
        }
    }, [props.data])

    const [imgs, setImgs] = useState([{
        title: "Change Your Style",
        subtitle: "Personal Styling with Christelle",
        img: "https://media.istockphoto.com/photos/young-womans-fashion-style-young-pretty-fashioned-girl-picture-id1263307689?k=20&m=1263307689&s=612x612&w=0&h=GfQVDDiLsnC46_GSJbYEf8PxldUvNCzmTTyVUUA0A5Q="
    },
    {
        title: "Change Your Style",
        subtitle: "Fresh Approach To Shopping",
        img: "https://media.istockphoto.com/photos/young-womans-fashion-style-young-pretty-fashioned-girl-picture-id1263307689?k=20&m=1263307689&s=612x612&w=0&h=GfQVDDiLsnC46_GSJbYEf8PxldUvNCzmTTyVUUA0A5Q="
    },
    {
        title: "Change Your Style",
        subtitle: "Personal Styling with Christelle",
        img: "https://media.istockphoto.com/photos/young-womans-fashion-style-young-pretty-fashioned-girl-picture-id1263307689?k=20&m=1263307689&s=612x612&w=0&h=GfQVDDiLsnC46_GSJbYEf8PxldUvNCzmTTyVUUA0A5Q="
    }])
    
    const [scale, setScale] = useState(1.0)

    function animate() {
        const timer = setInterval(() => {
            setScale(prev => {
                if (prev >= 1.2) {
                    return 1.0
                } else {
                    return prev + 0.0005
                }
            })
        }, 45)

        setTimeout(() => {
            clearInterval(timer)
            setScale(1.0)
        }, 60000)
    }


    return <div onLoad={() => props.showAnimation ? animate() : null} style={{ ...carouselStyle.container, ...props.style }}>
        <div id={id} className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                {imgs.map((img, index) => {
                    if (index === 0) {
                        return <button onClick={() => props.showAnimation ? setScale(1.0) : null} key={index} type="button" data-bs-target={`#${id}`} data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    } else {
                        return <button onClick={() => props.showAnimation ? setScale(1.0) : null} key={index} type="button" data-bs-target={`#${id}`} data-bs-slide-to={index.toString()} aria-label={"Slide " + (index + 1).toString()}></button>
                    }
                })}
            </div>
            <div className="carousel-inner">
                {imgs.map((item, index) => {
                    return <div key={index} className={"carousel-item" + (index === 0 ? " active" : "")}>
                        {props.showData &&
                            <div style={carouselStyle.txtWrapper}>
                                <div style={{ width: "50%" }}>
                                    <h4 style={carouselStyle.text}>{item?.title}</h4>
                                    <h1 style={{ ...carouselStyle.text, fontWeight: 500 }}>{item?.subtitle}</h1><br /><br />
                                    <Btn title={"Contact Me"} style={{ padding: "20px 50px" }} />
                                </div>
                            </div>}
                        <img style={{ ...carouselStyle.container, ...props.style, transform: (scale !== 1.0 ? `scale(${scale})` : "none") }} src={item.img} className="d-block w-100" alt="..." />
                    </div>
                })}
            </div>

            {props.showButtons && <>
                <button className="carousel-control-prev" type="button" data-bs-target={`#${id}`} data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target={`#${id}`} data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </>}
        </div>
    </div>
}