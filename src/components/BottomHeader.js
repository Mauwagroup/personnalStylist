import React from "react";
import { COLORS } from "../constants"

export default function BottomHeader(props) {
    return <div style={{
        width: '100%',
        height: 320,
        backgroundImage: 'url("https://imagesvc.meredithcorp.io/v3/mm/image?q=85&c=sc&poi=face&w=2000&h=1000&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F23%2F2020%2F06%2F26%2Fclothing-2000.jpg")'
    }}>
        <div className="black-bg" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <h2 style={{ color: COLORS.white, fontStyle: "italic", fontWeight: 700 }}>{props.title}</h2>
        </div>
    </div>
}