import React, { useState, useEffect } from "react";
import { Header, Footer, UploadImg, Btn, DashboadCard } from "../components"
import { COLORS } from "../constants"
import { Link } from "react-router-dom";
import EditIcon from '@mui/icons-material/Edit';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
const axios = require('axios').default;

export default function DashboardSettings(props) {

    const [values, setValues] = useState({})
    const [data, setData] = useState([])
    const [oldData, setOldData] = useState([])
    const [index, setIndex] = useState(null)
    const [showEdit, setShowEdit] = useState(false)
    const [key, setKey] = useState("")

    useEffect(() => {
        setOldData(props.data?.settings ? props.data.settings : {})
    }, [props.data])

    function handleChange(event) {
        setValues(event.target.value)
    }

    function saveAll() {

        props.saveAll(oldData, 'settings');
    }

    function save() {
        setOldData(prev => {
            return {
                ...prev,
                [key]: values
            }
        })

        setShowEdit(false)
        setKey(null)
    }


    function Title(title, k) {
        return <div className="flexDiv" style={{ justifyContent: "space-between", alignItems: "center" }}>
            {!showEdit || k !== key ? <h5 style={{ color: COLORS.accent, margin: 0 }}>{title}</h5> :
                <input className="animatedInput" style={{ padding: "8px 10px" }} type="text" name="title" placeholder="Type in something" autoFocus onChange={e => handleChange(e)} value={values} />}
            <Link to="/" onClick={e => {
                e.preventDefault();
                if (key !== k) {
                    setKey(k)
                    setShowEdit(true);
                    setValues(title === "None" ? "" : title)
                } else {
                    save()
                }
            }} className={"flexDiv"} ><EditIcon style={{ marginRight: 5 }} /> {!showEdit || k !== key ? "Edit" : "Save"}</Link>
        </div>
    }

    return <div className="box" style={{ position: "relative", width: "100%", height: "89%" }}>
        <div className="flexDiv" style={{ justifyContent: "space-between", alignItems: "center", width: "100%" }}>
            <Link to="/" onClick={e => props.goBack(e)} style={{ margin: 0 }} className="dashboad-link nav-link flexDiv"><ArrowBackIcon style={{ marginRight: 10 }} />  Go Back</Link>
            <button type="button" onClick={() => saveAll()} style={{ backgroundColor: COLORS.accent, color: COLORS.white }} className="btn">Save changes</button>
        </div>
        <div className="separator" style={{ width: "100%", marginTop: 10 }}></div>

        <div style={{ position: "relative", width: "100%", height: "87%" }}>
            <div className="main-container">
                <h3 style={{ color: COLORS.white }}>Header</h3>
                <div className="separator2" style={{ width: "25%", marginTop: 15, marginLeft: 0 }}></div>
                <div className="setting-container">
                    <h4 className="grey-text">Icon</h4>
                    <div className="flexDiv" style={{ justifyContent: "space-between", alignItems: "center" }}>
                        <img className="logo" src={oldData?.logo} alt="Logo" />
                        <Link to="/" onClick={e => {
                            e.preventDefault();
                            setKey("logo")
                        }} className={"flexDiv"} data-bs-target="#exampleModal" data-bs-toggle="modal" ><EditIcon style={{ marginRight: 5 }} /> Edit</Link>
                    </div>
                    <h4 className="grey-text">Site Name</h4>
                    {Title(oldData?.sName || "None", "sName")}
                </div>

                <h3 style={{ color: COLORS.white }}>Social Media Links</h3>
                <div className="separator2" style={{ width: "25%", marginTop: 15, marginLeft: 0 }}></div>
                <div className="setting-container">
                    <h4 className="grey-text">Facebook</h4>
                    {Title(oldData?.facebook || "None", "facebook")}
                    <h4 className="grey-text">Instagram</h4>
                    {Title(oldData?.instagram || "None", "instagram")}
                    <h4 className="grey-text">Twitter</h4>
                    {Title(oldData?.twitter || "None", "twitter")}
                    <h4 className="grey-text">Youtube</h4>
                    {Title(oldData?.youtube || "None", "youtube")}
                </div>

                <h3 style={{ color: COLORS.white }}>Contact Info</h3>
                <div className="separator2" style={{ width: "25%", marginTop: 15, marginLeft: 0 }}></div>
                <div className="setting-container">
                    <h4 className="grey-text">Address</h4>
                    {Title(oldData?.address || "None", "address")}
                    <h4 className="grey-text">Phone Number</h4>
                    {Title(oldData?.tell || "None", "tell")}
                    <h4 className="grey-text">Email Address</h4>
                    {Title(oldData?.email || "None", "email")}
                </div>

                <h3 style={{ color: COLORS.white }}>Personal Information</h3>
                <div className="separator2" style={{ width: "25%", marginTop: 15, marginLeft: 0 }}></div>
                <div className="setting-container">
                    <h4 className="grey-text">First Name</h4>
                    {Title("None")}
                    <h4 className="grey-text">Last Name</h4>
                    {Title("None")}
                    <h4 className="grey-text">Email Address</h4>
                    {Title("None")}
                    <h4 className="grey-text">Password</h4>
                    {Title("****************************")}
                </div>

            </div>

        </div>


        {/* <!-- Modal --> */}
        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-xl modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content">
                    <div className="modal-header">
                        <h3 className="modal-title" id="exampleModalLabel" style={{ color: COLORS.white }}>Upload Image</h3>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="centerItem">
                            <UploadImg setImg={handleChange} img={oldData?.img} array={false} />
                        </div>

                        <div className="flexDiv" style={{ justifyContent: "space-between", width: "100%", marginTop: 0 }}>
                            <Link to="/" data-bs-dismiss="modal" onClick={e => e.preventDefault()} className="flexDiv"><ArrowBackIcon style={{ marginRight: 10 }} />  Go Back</Link>
                            <button type="button" onClick={e => save(e)} data-bs-dismiss="modal" style={{ backgroundColor: COLORS.accent, color: COLORS.white }} className="btn">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

}