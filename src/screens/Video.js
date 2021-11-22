import React, { useState } from "react";
import { Header, Footer, BottomHeader, Btn, BeforeCard } from "../components"
import { COLORS, SHADOW } from "../constants"
import { homeStyle } from "../styles"

export default function Video(props) {

    const [data, setData] = useState([{
        img: "https://emberlyn.ancorathemes.com/wp-content/uploads/2017/07/single-1.1.jpg",
        name: "Jane",
        body: "Morbi et massa magna. Cras turpis mi, consectetur id turpis molestie, commodo ultrices mi. Nulla nec mi vitae est mollis malesuada. usce dictum lorem quam, quis aliquet nisl."
    },
    {
        img: "https://emberlyn.ancorathemes.com/wp-content/uploads/2017/07/single-2.1.jpg",
        name: "Adrian",
        body: "Morbi et massa magna. Cras turpis mi, consectetur id turpis molestie, commodo ultrices mi. Nulla nec mi vitae est mollis malesuada. usce dictum lorem quam, quis aliquet nisl."
    },
    {
        img: "https://emberlyn.ancorathemes.com/wp-content/uploads/2017/07/single-1.jpg",
        name: "Amanda",
        body: "Morbi et massa magna. Cras turpis mi, consectetur id turpis molestie, commodo ultrices mi. Nulla nec mi vitae est mollis malesuada. usce dictum lorem quam, quis aliquet nisl."
    },
    {
        img: "https://emberlyn.ancorathemes.com/wp-content/uploads/2017/07/single-3.jpg",
        name: "Laura",
        body: "Morbi et massa magna. Cras turpis mi, consectetur id turpis molestie, commodo ultrices mi. Nulla nec mi vitae est mollis malesuada. usce dictum lorem quam, quis aliquet nisl."
    },
    {
        img: "https://emberlyn.ancorathemes.com/wp-content/uploads/2017/07/single-5.jpg",
        name: "Annie",
        body: "Morbi et massa magna. Cras turpis mi, consectetur id turpis molestie, commodo ultrices mi. Nulla nec mi vitae est mollis malesuada. usce dictum lorem quam, quis aliquet nisl."
    },
    {
        img: "https://emberlyn.ancorathemes.com/wp-content/uploads/2017/07/single-6_1.jpg",
        name: "Mark",
        body: "Morbi et massa magna. Cras turpis mi, consectetur id turpis molestie, commodo ultrices mi. Nulla nec mi vitae est mollis malesuada. usce dictum lorem quam, quis aliquet nisl."
    }
    ])

    return <div>
        <Header active="hints" subActive="video" />
        {/* // Top Image */}
        <BottomHeader title="Style Videos" />

        <div style={{ maxWidth: 1300, margin: "80px auto 120px", textAlign: "left" }}>
            <iframe width="100%" height="600px" src="https://www.youtube.com/embed/WJ3-F02-F_Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <h2>A Day In The Life of Personal Stylist Emily West</h2>
            <h5>Find out more about Emily, award-winning stylist, enterpreneur and author.</h5>
            <br />
            <br />

            <div className="row" style={{ margin: "40px auto" }}>
                <div className="col-md-6">
                    <iframe width="100%" height="400px" src="https://www.youtube.com/embed/WJ3-F02-F_Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <h2 style={{ fontSize: "2rem", margin: "20px 0 40px" }}>A Day In The Life of Personal Stylist Emily West</h2>
                    <br />
                    <br />
                </div>
                <div className="col-md-6">
                    <iframe width="100%" height="400px" src="https://www.youtube.com/embed/WJ3-F02-F_Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <h2 style={{ fontSize: "2rem", margin: "20px 0 40px" }}>A Day In The Life of Personal Stylist Emily West</h2>
                    <br />
                    <br />
                </div>
                <div className="col-md-6">
                    <iframe width="100%" height="400px" src="https://www.youtube.com/embed/WJ3-F02-F_Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <h2 style={{ fontSize: "2rem", margin: "20px 0 40px" }}>A Day In The Life of Personal Stylist Emily West</h2>
                    <br />
                    <br />
                </div>
                <div className="col-md-6">
                    <iframe width="100%" height="400px" src="https://www.youtube.com/embed/WJ3-F02-F_Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <h2 style={{ fontSize: "2rem", margin: "20px 0 40px" }}>A Day In The Life of Personal Stylist Emily West</h2>
                    <br />
                    <br />
                </div>
            </div>

            <div style={{ textAlign: "center", marginTop: -40}}>
                <Btn title="Show More Videos" />
            </div>
        </div>

        <Footer />
    </div>
}