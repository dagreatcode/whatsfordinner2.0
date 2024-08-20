import React from "react";

function Footer() {
  return (
    <div className="container">
      <div className="row" style={{ backgroundColor: "green" }}>
        <div className="col-sm-4 card" style={{ color: "green" }}>
          © Copyright 2022 DaGreat Code LLC.
        </div>
        <div className="col-sm-4 card" style={{ color: "green" }}>
          Contact Us
        </div>
        <div className="col-sm-4 card" style={{ color: "green" }}>
          SiteMap
        </div>
      </div>
    </div>
  );
}

export default Footer;
