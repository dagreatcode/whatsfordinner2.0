// import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import axios from "axios";
import Home from "./containers/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Banner from "./components/Banner/Banner";
import Contact from "./components/Contact/Contact";
import SiteMap from "./components/SiteMap/SiteMap";
import SideNav from "./components/SideNav/SideNav";
import CountDown from "./components/CountDown/CountDown";
import Loading from "./components/Loading/Loading"
import Reload from "./components/Reload/Reload"
// import NotFound from "./containers/NotFound/NotFound";

function App() {
  return (
    <Router>
      <NavBar />
      <Banner />
      <div className="row">
        <div className="col-sm-2 card">
          <SideNav />
        </div>
        <div className="col-sm-8">
        <Loading/>
        <Reload/>
          <Routes>
            <Route exact path="/Contact" element={<Contact />} />
            <Route exact path="/" element={<Home />} />
          </Routes>
        </div>
        <div className="col-sm-2 card">
          <SiteMap />
        </div>
      </div>
      <CountDown />
      <Footer />
    </Router>
  );
}

export default App;
