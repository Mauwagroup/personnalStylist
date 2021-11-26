import React from "react";
import { COLORS } from "../constants"
import { cardStyle } from "../styles"
import Btn from "./Btn"
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export default function DashboadCard(props, setImg, setShowEdit, setIndex, setValues, deleteItem, showEditBtn) {
    return <div className="row" style={{ margin: "10px 0px" }}>
        <div className="col-6" style={{ padding: 0 }}>
            <a href="/"
                className="img-link centerItem"
                onClick={e => {
                    e.preventDefault();
                    setImg(props.img)
                    setValues({
                        ...props
                    })
                    setIndex(props.index)
                    setShowEdit(true)
                }}
            >
                <img style={{ width: '100%', height: '100%' }} src={props.img} alt="..." />
                {showEditBtn !== false && <div className="centerItem">
                    <h2><EditIcon /></h2>
                </div>}
            </a>
        </div>
        <div className="col-6" style={{ backgroundColor: COLORS.primary, padding: 0 }}>
            <div className="flexDiv" style={{ width: "100%", height: "100%" }}>
                <div style={{ width: "10%", height: "100%", marginLeft: "-7%" }}>
                    <div style={{ width: "100%", height: '45%', backgroundColor: COLORS.primary, transform: "skewY(45deg)", position: "relative", top: 13.5 }}></div>
                    <div style={{ width: "100%", height: '45%', backgroundColor: COLORS.primary, transform: "skewY(-45deg)", position: "relative", bottom: `calc(-5% + ${1}px)` }}></div>
                </div>

                <div style={{ width: "10%", height: "100%", marginLeft: "-9.7%" }}>
                    <div style={{ backgroundColor: COLORS.primary, position: "relative", width: "100%", height: "15%", top: 0, left: 0 }}></div>
                    <div style={{ backgroundColor: COLORS.primary, position: "relative", width: "100%", height: "15%", bottom: "-70%", left: 0 }}></div>
                </div>

                <div className="centerItem" style={{ textAlign: "left", padding: 20, alignItems: "flex-start", position: "relative" }} >
                    <h4 style={{ color: COLORS.accent, fontWeight: 700 }}>{props.title || props.name}</h4>
                    {(props.subtitle || props.link) && <h5 style={{ color: COLORS.white }}>{props.link ? "Pointing to: " + props.subtitle : props.subtitle}</h5>}
                    {props.desc && <><h6 style={{ color: COLORS.white }}>{props.desc.slice(0, 100)}...</h6><br /> </>}
                    <a href={"/"} onClick={e => {
                        e.preventDefault();
                        deleteItem(props.index)
                    }} style={{ position: "absolute", bottom: 10, right: 10 }} ><DeleteIcon /></a>
                </div>
            </div>
        </div>
    </div>
}