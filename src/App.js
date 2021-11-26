import React, { useState, useEffect } from "react";
import "./styles/App.css";
import { Homepage, Aboutpage, ServicePage, BeforePage, VideoPage, BlogPage, TestimonialsPage, ContactPage, LoginPage, DashboardPage } from "./screens"
import { URL } from "./constants"
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
  Link
} from "react-router-dom";
import { Loading } from "./components"
import Basket from '@mui/icons-material/LocalMall';
import ImageIcon from '@mui/icons-material/Image';
import StoreIcon from '@mui/icons-material/StoreMallDirectory';
import { SettingStore, MainStore } from "./redux"

const axios = require('axios').default;

export default function App() {

  const [data, setData] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    axios.get("http://localhost:81/personalStylist/pages.php")
      .then((res) => {
        if (res.data.msg === "Success") {
          const data = res.data.data[0]
          let newData = {}
          for (const key in data) {
            newData = { ...newData, [key]: JSON.parse(data[key]) }
          }

          setData(newData)
          SettingStore.dispatch({
            type: "set",
            data: newData.settings
          })

          MainStore.dispatch({
            type: "set",
            data: newData
          })

          setIsLoading(false)
        } else {
          alert("An error occurred, please refresh the page.")
        }
      })
  }, [])


  function renderBtn(title, Icon) {
    return <div className="flexDiv bIconContainer">
      <div className="flexDiv basketWrapper">
        <h6 className="basketIconText">{title}</h6>
      </div>
      <div className="basketIconWrapper">
        <Icon className="basketIcon" />
      </div>
    </div>
  }

  if (isLoading)
    return <Loading />
  else
    return (
      <div>
        <div id="right-navbar" className="basketContainer">
          {renderBtn("Go To Checkout", Basket)}
          {renderBtn("Go To Gallery", ImageIcon)}
          {renderBtn("Visit Our Store", StoreIcon)}
        </div>
        <Router>
          <Switch>
            <Route exact path={URL} element={<Homepage data={data?.home} />} />
            <Route exact path={URL + "about"} element={<Aboutpage data={data?.about} />} />
            <Route exact path={URL + "services"} element={<ServicePage data={data?.services} />} />
            <Route exact path={URL + "before"} element={<BeforePage />} />
            <Route exact path={URL + "style-videos"} element={<VideoPage />} />
            <Route exact path={URL + "blog"} element={<BlogPage />} />
            <Route exact path={URL + "testimonials"} element={<TestimonialsPage />} />
            <Route exact path={URL + "contact"} element={<ContactPage />} />
            <Route exact path={URL + "admin"} element={<LoginPage />} />
            <Route exact path={URL + "dashboard"} element={<DashboardPage data={data} />} />
          </Switch>
        </Router>
      </div>
    );
}

