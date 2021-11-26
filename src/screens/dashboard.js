import React, { useState, useEffect } from "react";
import { Header, Footer, UploadImg, Btn, DashboadCard } from "../components"
import { COLORS, URL, SHADOW } from "../constants"
import DashboardPages from "./DashboardPages"
import DashboardSettings from "./dashboardSettings"
import { Link } from "react-router-dom";
import DashboardIcon from '@mui/icons-material/Dashboard';
import LogoutIcon from '@mui/icons-material/Logout';
import PagesIcon from '@mui/icons-material/Pages';
import SettingsIcon from '@mui/icons-material/Settings';
import StoreIcon from '@mui/icons-material/Store';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import swal from 'sweetalert';
const axios = require('axios').default;

export default function Dashboard(props) {

    const [screen, setScreen] = useState(0)
    const [previous, setPrevious] = useState(0)
    const [data, setData] = useState({})


    useEffect(() => {
        document.getElementById("right-navbar").style.display = "none";
        setData(props.data)
    }, [props.data])


    function goBack(e) {
        e.preventDefault();
        setScreen(previous)
    }

    function saveAll(data, page) {

        let form = new FormData();
        form.append("data", JSON.stringify(data))
        form.append("page", page)

        axios.post("http://localhost:81/personalStylist/pages.php", form)
            .then(res => {
                console.log(res.data)
                if (res.data.msg === "Success") {
                    swal("Success", "Your changes have been saved successfully!", "success")
                    setData(prev => {
                        return {
                            ...prev,
                            [page]: data
                        }
                    })
                }
            })
            .catch(err => console.log(err))
    }


    function addData() {
        const data = {
            name: "Christelle Mak",
            age: 21
        }

        let form = new FormData();
        form.append("data", JSON.stringify(data))
        form.append("page", "about")

        axios.post("http://localhost:81/personalStylist/pages.php", form)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
    }

    function changeScreen(e, s) {
        e.preventDefault();
        setPrevious(screen)
        setScreen(s)
    }

    return <div style={{ backgroundColor: COLORS.black, height: "100vh", position: "fixed", width: "100%" }}>
        <div className="row" style={{ margin: 0, padding: 0 }}>
            <div className="col-md-2" style={{ margin: 0, padding: 0 }}>
                <div style={{ width: "100%", height: "100vh", ...SHADOW, backgroundColor: COLORS.grey, padding: "20px 10px" }}>
                    <Link to={URL} className="dashboad-link nav-link">{data?.settings?.logo ? <img src={data?.settings?.logo} className="logo" alt="Logo" /> : "Your Logo"}</Link>

                    <div className="separator" style={{ width: "100%" }}></div>

                    <div style={{ position: "relative", width: "100%", height: "100%" }}>
                        <div className="main-container" style={{left: "0", top: -10, paddingBottom: 90}}>
                            <Link to="#" onClick={e => changeScreen(e, 0)} className={"dashboad-link nav-link flexDiv" + (screen === 0 ? "  active-link" : "")}><DashboardIcon style={{ marginRight: 10 }} />  Dashboard</Link>
                            <Link to="#" onClick={e => changeScreen(e, 1)} className={"dashboad-link nav-link flexDiv" + (screen === 1 ? "  active-link" : "")}><PagesIcon style={{ marginRight: 10 }} />  Pages</Link>
                            <Link to="#" onClick={e => changeScreen(e, 2)} className={"dashboad-link nav-link flexDiv" + (screen === 2 ? "  active-link" : "")}><StoreIcon style={{ marginRight: 10 }} />  Store</Link>
                            <Link to="#" onClick={e => changeScreen(e, 3)} className={"dashboad-link nav-link flexDiv" + (screen === 3 ? "  active-link" : "")}><PhotoLibraryIcon style={{ marginRight: 10 }} />  Gallery</Link>
                            <Link to="#" onClick={e => changeScreen(e, 4)} className={"dashboad-link nav-link flexDiv" + (screen === 4 ? "  active-link" : "")}><SettingsIcon style={{ marginRight: 10 }} />  Settings</Link>

                            <div className="separator" style={{ width: "100%" }}></div>
                            <Link to="/" className="dashboad-link nav-link flexDiv"><LogoutIcon style={{ marginRight: 10 }} />  Log Out</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-10">
                <div style={{ width: '100%', height: "100vh", padding: "30px 15px", textAlign: "left", position: "relative" }}>
                    <h3 style={{ color: COLORS.white }}>Hi, Christelle!</h3>
                    <h5 style={{ color: COLORS.accent }}>{new Date().toDateString()}</h5><br />


                    {screen === 1 && <DashboardPages goBack={goBack} saveAll={saveAll} data={data} />}
                    {screen === 4 && <DashboardSettings goBack={goBack} saveAll={saveAll} data={data} />}

                </div>
            </div>
        </div>
    </div>
}