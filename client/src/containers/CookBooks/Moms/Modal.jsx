// Modal.js
import React from "react";
import styles from "./Modal.module.css";

const Modal = ({ recipe, winePairings, onClose }) => {
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          ✖
        </button>
        <h2>{recipe.name}</h2>
        <img
          src={recipe.image}
          alt={recipe.name}
          className={styles.modalImage}
        />
        <div className={styles.content}>
          <p>{recipe.instructions}</p>

          <h3>Wine Pairings:</h3>
          <ul className={styles.wineList}>
            {winePairings.length > 0 ? (
              winePairings.map((wine) => (
                <li key={wine.id}>
                  <strong>{wine.wine}</strong>: {wine.description}
                </li>
              ))
            ) : (
              <p>No wine pairings available.</p>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Modal;
