import React, { useState } from "react";
// import PropTypes from "prop-types";
// import styled from 'styled-components'
import { useSelector } from "react-redux";
import ShopSection from "../../components/ShopSection/ShopSection";

export default function Home() {
  const foods = useSelector((state) => state.dinner);
  // const randomFood = foods[Math.floor(Math.random() * foods.length)];

  const [message, setMessage] = useState("Welcome Food People");

  //   const Button = styled.button`
  //   background: transparent;
  //   border-radius: 3px;
  //   border: 2px solid black;
  //   color: rgb(4, 49, 12);
  //   margin: 0 1em;
  //   padding: 0.25em 1em;
  // `
  window.scrollTo(0, 0);
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
          <h2>Here are a few Diet Recipes</h2>
          {foods.length ? (
            foods.slice(0, 5).map((food) => {
              return (
                <tr key={food.id}>
                  <td>{food.recipe}</td>
                </tr>
              );
            })
          ) : (
            <h6>
              Not Found Until you{" "}
              <strong>
                <u>turn on your location</u>
              </strong>
              .<p>Where To Go?</p>
              <p>
                If This is a private Browser, the GEO Location for this page
                will not work.
              </p>
              A Geolocation request can only be fulfilled in a secure context.
              <p></p>
            </h6>
          )}
        </div>
      </div>
      <ShopSection />
    </>
  );
}

// Home.propTypes = {};
