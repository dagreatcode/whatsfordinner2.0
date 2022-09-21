import React, { useState } from "react";
// import PropTypes from "prop-types";

export default function Home() {
  const [message, setMessage] = useState("Welcome Food People");
  return (
    <>
      <div className="container text-center">
        <div className="row">
          <h1
            style={{
              // height: 500,
              // width: 800,
              // clear: "both",
              // paddingTop: 120,
              textAlign: "center",
            }}
            // className="jumbotron"
          >
            {message}
          </h1>
        </div>
        <div className="row">
          <div className="col-sm-4">
            <h1>-</h1>
          </div>
          <div className="col-sm-4">
            <button
              className="btn"
              style={{ backgroundColor: "#018501" }}
              onClick={() => setMessage("Lets Eat!")}
            >
              Click!
            </button>
          </div>
          <div className="col-sm-4">
            <h1>-</h1>
          </div>
        </div>
      </div>
    </>
  );
}

// Home.propTypes = {};
