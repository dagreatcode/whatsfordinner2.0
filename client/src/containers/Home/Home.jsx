import React, { useState } from "react";
// import PropTypes from "prop-types";
import styled from 'styled-components'


export default function Home() {
  const [message, setMessage] = useState("Welcome Food People");

  const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid black;
  color: rgb(4, 49, 12);
  margin: 0 1em;
  padding: 0.25em 1em;
`

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
            <Button
              className="btn"
              style={{ backgroundColor: "#018501" }}
              onClick={() => setMessage("Lets Eat!")}
            >
              Click!
            </Button>
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
