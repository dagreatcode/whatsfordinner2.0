import React, { useState } from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import ShopSection from "../../components/ShopSection/ShopSection";
import styles from "./Home.module.css"; // Import the CSS Module
import { Link } from "react-router-dom";

export default function Home() {
  const foods = useSelector((state) => state.dinner);
  const [message, setMessage] = useState("Welcome Food People");
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 12;

  const totalPages = Math.ceil(foods.length / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const currentFoods = foods.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <>
      <div className={`${styles.container} text-center`}>
        <div className="row Jumbotron jumbotron-fluid">
          <h1 className="display-4">{message}</h1>
        </div>

        <div className="row">
          <div className="col-sm-4">
            <h1>-</h1>
          </div>
          <div className="col-sm-4">
            <button
              className="btn"
              style={{ backgroundColor: "#018501" }}
              onClick={() => setMessage("Let's Eat!")}
            >
              Click!
            </button>
          </div>
          <div className="col-sm-4">
            <h1>-</h1>
          </div>
        </div>
        <Link to="/Mom" className="btn btn-primary">
          Go to Mom's Recipes
        </Link>
        <h2>Here are a few Diet Recipes</h2>
        <div className={styles.recipeGrid}>
          {currentFoods.length ? (
            currentFoods.map((food) => (
              <div key={food.id} className={styles.foodCard}>
                <img
                  className={styles.foodImage}
                  src={food.image}
                  alt="food thumbnail"
                />
                <div className={styles.foodDetails}>
                  <dt>{food.recipe}</dt>
                  <dd>
                    {food.measurement_1} {"-"} {food.ingredient_1},{" "}
                    {food.measurement_2} {"-"} {food.ingredient_2},{" "}
                    {food.measurement_3} {"-"} {food.ingredient_3},{" "}
                    {food.measurement_4} {"-"} {food.ingredient_4},{" "}
                    {food.measurement_5} {"-"} {food.ingredient_5},{" "}
                    {food.measurement_6} {"-"} {food.ingredient_6},{" "}
                    {food.measurement_7} {"-"} {food.ingredient_7},{" "}
                    {food.measurement_8} {"-"} {food.ingredient_8},{" "}
                    {food.measurement_9} {"-"} {food.ingredient_9},{" "}
                    {food.measurement_10} {"-"} {food.ingredient_10}
                  </dd>
                  <br />
                  <dt>
                    {food.difficulty} {food.category.category}
                  </dt>
                  <dd>
                    {food.directions_step_1}, {food.directions_step_2},{" "}
                    {food.directions_step_3}, {food.directions_step_4},{" "}
                    {food.directions_step_5}, {food.directions_step_6},{" "}
                    {food.directions_step_7}, {food.directions_step_8},{" "}
                    {food.directions_step_9}, {food.directions_step_10},
                    <h6>Cook Time In Minutes</h6> {food.cook_time_in_minutes}
                  </dd>
                  <br />
                </div>
              </div>
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

        <div className={styles.pagination}>
          <button
            className={styles.pageButton}
            onClick={handlePreviousPage}
            disabled={currentPage === 0}
          >
            Previous
          </button>
          <span>{`Page ${currentPage + 1} of ${totalPages}`}</span>
          <button
            className={styles.pageButton}
            onClick={handleNextPage}
            disabled={currentPage === totalPages - 1}
          >
            Next
          </button>
        </div>
      </div>
      <ShopSection />
    </>
  );
}

Home.propTypes = {
  foods: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      recipe: PropTypes.string.isRequired,
      measurement_1: PropTypes.string.isRequired,
      ingredient_1: PropTypes.string.isRequired,
      measurement_2: PropTypes.string.isRequired,
      ingredient_2: PropTypes.string.isRequired,
      measurement_3: PropTypes.string.isRequired,
      ingredient_3: PropTypes.string.isRequired,
      measurement_4: PropTypes.string.isRequired,
      ingredient_4: PropTypes.string.isRequired,
      measurement_5: PropTypes.string.isRequired,
      ingredient_5: PropTypes.string.isRequired,
      measurement_6: PropTypes.string.isRequired,
      ingredient_6: PropTypes.string.isRequired,
      measurement_7: PropTypes.string.isRequired,
      ingredient_7: PropTypes.string.isRequired,
      measurement_8: PropTypes.string.isRequired,
      ingredient_8: PropTypes.string.isRequired,
      measurement_9: PropTypes.string,
      ingredient_9: PropTypes.string,
      measurement_10: PropTypes.string,
      ingredient_10: PropTypes.string,
      difficulty: PropTypes.string.isRequired,
      category: PropTypes.shape({
        category: PropTypes.string.isRequired,
      }).isRequired,
      directions_step_1: PropTypes.string.isRequired,
      directions_step_2: PropTypes.string.isRequired,
      directions_step_3: PropTypes.string.isRequired,
      directions_step_4: PropTypes.string.isRequired,
      directions_step_5: PropTypes.string.isRequired,
      directions_step_6: PropTypes.string.isRequired,
      directions_step_7: PropTypes.string.isRequired,
      directions_step_8: PropTypes.string.isRequired,
      directions_step_9: PropTypes.string.isRequired,
      directions_step_10: PropTypes.string.isRequired,
      cook_time_in_minutes: PropTypes.number.isRequired,
    })
  ).isRequired,
};
