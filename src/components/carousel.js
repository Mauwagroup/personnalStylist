import React, { useState, useEffect } from "react";
import { carouselStyle } from "../styles"
import { COLORS, URL } from "../constants"
import Btn from "../components/Btn"

export default function Carousel(props) {

    let id = props.id

    useEffect(() => {
        if (props.data){
            setImgs(props.data || [])
            console.log(props.data)
        }
    }, [props.data])

    const [imgs, setImgs] = useState([])
    

    return <div  style={{ ...carouselStyle.container, ...props.style }}>
        <div id={id} className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                {imgs.map((img, index) => {
                    if (index === 0) {
                        return <button key={index} type="button" data-bs-target={`#${id}`} data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    } else {
                        return <button key={index} type="button" data-bs-target={`#${id}`} data-bs-slide-to={index.toString()} aria-label={"Slide " + (index + 1).toString()}></button>
                    }
                })}
            </div>
            <div className="carousel-inner">
                {imgs.map((item, index) => {
                    return <div key={index} className={"carousel-item" + (index === 0 ? " active" : "")} data-bs-interval="7000">
                        {props.showData &&
                            <div style={carouselStyle.txtWrapper}>
                                <div style={{ width: "50%" }}>
                                    <h4 id="carouselText1" style={carouselStyle.text}>{item?.title}</h4>
                                    <h1 id="carouselText2" style={{ ...carouselStyle.text, fontWeight: 500 }}>{item?.subtitle}</h1><br /><br />
                                    <Btn id="carouselBtn" to={URL + "contact"} title={"Contact Me"} style={{ padding: "20px 50px" }} />
                                </div>
                            </div>}
                        <img id={props.showAnimation ? "carouselAnimation" : "" } style={{ ...carouselStyle.container, ...props.style}} src={item.img || item} className="d-block w-100" alt="..." />
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