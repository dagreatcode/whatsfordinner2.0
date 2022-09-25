import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import axios from "axios";
import Home from "./containers/Home/Home";
import NotFound from "./containers/NotFound/NotFound";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Banner from "./components/Banner/Banner";
import Contact from "./components/Contact/Contact";
import SiteMap from "./components/SiteMap/SiteMap";
import SideNav from "./components/SideNav/SideNav";
import CountDown from "./components/CountDown/CountDown";
import Loading from "./components/Loading/Loading";
// import Reload from "./components/Reload/Reload"
// import NotFound from "./containers/NotFound/NotFound";
import { useDispatch, useSelector } from "react-redux";
import { getDinner } from "./redux/actions/index";

function App() {
  const error = useSelector((state) => state.error);
  const loading = useSelector((state) => state.loading);
  // const reload = useSelector((state) => state.reload);
  const dispatch = useDispatch();

  useEffect(() => {
    //Fetch Data
    dispatch(getDinner());
    // CleanUp Function
    return () => {
      //Remove
      console.log("remove")
    };
  }, [dispatch]);

  if (error) {
    return <h1>{error}</h1>;
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <Router>
      <NavBar />
      <Banner />
      <div className="row">
        <div className="col-sm-2 card">
          <SideNav />
        </div>
        <div className="col-sm-8">
          {/* <Reload/> */}
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
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
