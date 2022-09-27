import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import axios from "axios";
import Home from "./containers/Home/Home";
import SingleProduct from "./containers/SingleProduct/SingleProduct";
import Login from "./containers/Login/Login";
import Register from "./containers/Register/Register";
import Profile from "./containers/Profile/Profile";
import Cart from "./containers/Cart/Cart";
import Shipping from "./containers/Shipping/Shipping";
import Payment from "./containers/Payment/Payment";
import PlaceOrder from "./containers/Order/PlaceOrder";
import Order from "./containers/Order/OrderJustPlaced";
import NotFound from "./containers/NotFound/NotFound";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Banner from "./components/Banner/Banner";
import ContactUs from "./components/Contact/ContactUs";
import ContactInfo from "./components/Contact/ContactInfo";
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
      console.log("clean up")
      
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
            <Route path="/ContactUs" element={<ContactUs />} />
            <Route path="/products/:id" element={<SingleProduct />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/cart/:id?" element={<Cart />} />
            <Route path="/shipping" element={<Shipping />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/PlaceOrder" element={<PlaceOrder />} />
            <Route path="/order" element={<Order />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <div className="col-sm-2 card">
          <SiteMap />
        </div>
      </div>
      <CountDown />
      <ContactInfo />
      <Footer />
    </Router>
  );
}

export default App;
