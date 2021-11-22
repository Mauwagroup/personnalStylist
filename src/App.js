import React from "react";
import "./styles/App.css";
import { Homepage, Aboutpage, ServicePage, BeforePage, VideoPage, BlogPage, TestimonialsPage, ContactPage } from "./screens"
import {SHADOW} from "./constants"
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
  Link
} from "react-router-dom";
import Basket from '@material-ui/icons/LocalMall';
import ImageIcon from '@material-ui/icons/Image';

export default function App() {

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

  return (
    <div>
      <div className="basketContainer">
        {renderBtn("Go To Checkout", Basket)}
        {renderBtn("Go To Gallery", ImageIcon)}
      </div>
      <Router>
        <Switch>
          <Route exact path="/personnalStylist" element={<Homepage />} />
          <Route exact path="/personnalStylist/about" element={<Aboutpage />} />
          <Route exact path="/personnalStylist/services" element={<ServicePage />} />
          <Route exact path="/personnalStylist/before" element={<BeforePage />} />
          <Route exact path="/personnalStylist/style-videos" element={<VideoPage />} />
          <Route exact path="/personnalStylist/blog" element={<BlogPage />} />
          <Route exact path="/personnalStylist/testimonials" element={<TestimonialsPage />} />
          <Route exact path="/personnalStylist/contact" element={<ContactPage />} />
        </Switch>
      </Router>
    </div>
  );
}

