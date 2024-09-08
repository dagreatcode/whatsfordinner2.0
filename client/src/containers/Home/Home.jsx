import React, { useState } from "react";
// import PropTypes from "prop-types";
// import styled from "styled-components";
import { useSelector } from "react-redux";
import ShopSection from "../../components/ShopSection/ShopSection";

export default function Home() {
  const foods = useSelector((state) => state.dinner);
  // const randomFood = foods[Math.floor(Math.random() * foods.length)];

  const [message, setMessage] = useState("Welcome Food People");

  // const Button = styled.button`
  //   background: transparent;
  //   border-radius: 3px;
  //   border: 2px solid black;
  //   color: rgb(4, 49, 12);
  //   margin: 0 1em;
  //   padding: 0.25em 1em;
  // `;
  window.scrollTo(0, 0);
  return (
    <>
      <div className="container text-center">
        <div className="row Jumbotron jumbotron-fluid">
          <h1
            style={{
              // height: 500,
              // width: 800,
              // clear: "both",
              // paddingTop: 120,
              textAlign: "center",
            }}
            className="display-4"
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
          {/* {console.log(foods)} */}
          <h2>Here are a few Diet Recipes</h2>
          {foods.length ? (
            foods.slice(0, 200).map((food) => (
              <dl key={food.id}>
                <img
                  style={{
                    height: "300px",
                    width: "300px",
                    textAlign: "center",
                  }}
                  src={food.image}
                  alt="food thumbnail"
                />
                <dt>{food.recipe}</dt>
                <dd>
                  {food.measurement_1} {'-'} {food.ingredient_1}, {food.measurement_2} {'-'} {food.ingredient_2}, {food.measurement_3} {'-'} {food.ingredient_3},{" "}
                  {food.measurement_4} {'-'} {food.ingredient_4}, {food.measurement_5} {'-'} {food.ingredient_5}, {food.measurement_6} {'-'} {food.ingredient_6},{" "}
                  {food.measurement_7} {'-'} {food.ingredient_7}, {food.measurement_8} {'-'} {food.ingredient_8}, {food.measurement_9}  {food.ingredient_9}, {food.measurement_10} {'-'} {food.ingredient_10},
                  {console.log(food)}
                </dd>
                <br />
                <dt>{food.difficulty} {food.category.category}</dt>
                <dd>
                  {food.directions_step_1}, {food.directions_step_2}, {food.directions_step_3},{" "}
                  {food.directions_step_4}, {food.directions_step_5}, {food.directions_step_6},{" "}
                  {food.directions_step_7}, {food.directions_step_8}, {food.directions_step_9}, {food.directions_step_10},
                  <h6>Cook Time In Minutes</h6> {food.cook_time_in_minutes}
                </dd>
                <br />
              </dl>
            ))
          ) : (
            <h6>
              Not Found Until you{" "}
              <strong>
                <u>turn on your Wifi</u>
              </strong>
            </h6>
          )}
        </div>
      </div>
      <ShopSection />
    </>
  );
}

// Home.propTypes = {};
