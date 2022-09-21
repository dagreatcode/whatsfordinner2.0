// import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import axios from "axios";
import Home from "./containers/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
// import NotFound from "./containers/NotFound/NotFound";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
