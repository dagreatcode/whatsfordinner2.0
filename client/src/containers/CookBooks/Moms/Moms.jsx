import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Modal from './Modal'; // Import the modal component
import styles from './SoulFoodRecipes.module.css';

const SoulFoodRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [winePairings, setWinePairings] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const { data } = await axios.get("https://dummyjson.com/recipes");
        setRecipes(data.recipes || []);
      } catch (error) {
        console.error('Error fetching recipes:', error);
        setError('Failed to load recipes.');
      }
    };

    fetchRecipes();
  }, []);

  const handleRecipeClick = async (recipe) => {
    setSelectedRecipe(recipe);
    try {
      const { data } = await axios.get("https://api.sampleapis.com/wines/reds");
      setWinePairings(data);
    } catch (error) {
      console.error('Error fetching wine pairings:', error);
      setError('Failed to load wine pairings.');
    }
  };

  const closeModal = () => {
    setSelectedRecipe(null);
    setWinePairings([]);
  };

  return (
    <div className={styles.container}>
      <h1>Soul Food Recipes</h1>
      {error && <p className={styles.error}>{error}</p>}
      <div className={styles.recipeList}>
        {recipes.length > 0 ? (
          recipes.map((recipe) => (
            <div
              key={recipe.id}
              className={styles.recipeCard}
              onClick={() => handleRecipeClick(recipe)}
            >
              <img src={recipe.image} alt={recipe.name} className={styles.recipeImage} />
              <h2>{recipe.name}</h2>
              <p>{recipe.instructions}</p>
            </div>
          ))
        ) : (
          <p>No recipes found.</p>
        )}
      </div>

      {selectedRecipe && (
        <Modal
          recipe={selectedRecipe}
          winePairings={winePairings}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default SoulFoodRecipes;
