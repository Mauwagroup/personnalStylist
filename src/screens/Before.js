import React, { useState } from "react";
import { Header, Footer, BottomHeader, Btn, BeforeCard } from "../components"
import { COLORS, SHADOW } from "../constants"
import { homeStyle } from "../styles"

export default function Before(props) {

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
        <Header active="before" />
        {/* // Top Image */}
        <BottomHeader title="Before & After" />

        {/* //Services Section */}
        <h4 style={{ fontWeight: 'bold', fontStyle: "italic", color: COLORS.accent, margin: "60px auto 20px" }}>Before & After</h4>
        <h2>Style Transformations</h2>
        <div className="separator" style={{ width: "8%" }} ></div>
        <div style={{marginBottom: 100}}>
            <div className="row centerItem" style={{ margin: "20px auto 60px", maxWidth: 1200, flexDirection: "row" }}>
                {data.map((item, index) => {
                    return <div className="col-md-6" key={index}>
                        {BeforeCard(item)}
                    </div>
                })}
            </div>

            <Btn title="More Transformations" />
        </div>


        <Footer />
    </div>
}