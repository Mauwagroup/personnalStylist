import React, { useState, useEffect } from "react";
import { Header, Footer, BottomHeader, Btn, BeforeCard } from "../components"
import { COLORS, SHADOW } from "../constants"
import { homeStyle } from "../styles"

export default function Blog(props) {

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


    function Card(options) {
        return <div className="row" style={{ margin: 0 }}>
            <div className="col-md-6" style={{ padding: 0 }}>
                <div style={{ alignItems: 'flex-start', padding: "120px 80px" }}>
                    <h2>15 Easy And Stylish Casual Summer Outfits</h2>
                    <h6>JULY 18, 2017</h6><br />
                    <h6 style={{ lineHeight: 1.5, marginBottom: 35 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu metus non purus pellentesque vestibulum non eu mi. Nulla facilisi. Sed pulvinar lacus quis nulla egestas luctus. Mauris non lacus vel sapien congue placerat. Phasellus gravida interdum sagittis. Etiam sed hendrerit turpis, non commodo est. Nulla sed tincidunt erat. Cras eu arcu sit amet est consequat tincidunt at in lorem.Donec…</h6>
                    <Btn title="Read More" style={{ padding: "12px 30px" }} />
                </div>
            </div>
            <div className="col-md-6" style={{ padding: 0 }}>

                <a href="#" className="img-link centerItem">
                    <img
                        style={{
                            width: "100%",
                            height: "100%",
                            transition: "1s",
                        }}
                        src="https://emberlyn.ancorathemes.com/wp-content/uploads/2017/07/image-6.jpg"
                        alt="Logo"
                    />
                    <div className="centerItem">
                        <h2>...</h2>
                    </div>
                </a>
            </div>
        </div>
    }

    function Card2(options) {
        return <div className="row" style={{ margin: 0 }}>
            <div className="col-md-6" style={{ padding: 0 }}>
                <a href="#" className="img-link centerItem">
                    <img
                        style={{
                            width: "100%",
                            height: "100%",
                            transition: "1s",
                        }}
                        src="https://emberlyn.ancorathemes.com/wp-content/uploads/2017/07/image-3.jpg"
                        alt="Logo"
                    />
                    <div className="centerItem">
                        <h2>...</h2>
                    </div>
                </a>
            </div>
            <div className="col-md-6" style={{ padding: 0 }}>
                <div style={{ alignItems: 'flex-start', padding: "120px 80px" }}>
                    <h2>Stylish a List Mums and Daughters</h2>
                    <h6>JULY 18, 2017</h6><br />
                    <h6 style={{ lineHeight: 1.5, marginBottom: 35 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu metus non purus pellentesque vestibulum non eu mi. Nulla facilisi. Sed pulvinar lacus quis nulla egestas luctus. Mauris non lacus vel sapien congue placerat. Phasellus gravida interdum sagittis. Etiam sed hendrerit turpis, non commodo est. Nulla sed tincidunt erat. Cras eu arcu sit amet est consequat tincidunt at in lorem.Donec…</h6>
                    <Btn title="Read More" style={{ padding: "12px 30px" }} />
                </div>
            </div>
        </div>
    }

    return <div>
        <Header active="hints" subActive="blog" />
        {/* // Top Image */}
        <BottomHeader title="My Blog" />

        <div style={{ width: '100%', margin: 0, textAlign: "left" }}>
            {Card()}
            {Card2()}

        </div>

        <Footer />
    </div>
}