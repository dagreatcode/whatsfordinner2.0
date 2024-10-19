import React from "react";
import Pagination from "./pagination";
import ProductCard from "./ProductCard";
import styles from './ShopSection.module.css'; // Import the CSS Module

function ShopSection() {
  return (
    <div className={styles.container}>
      <h2>Shop Section</h2>
      <ProductCard />
      <Pagination />
    </div>
  );
}

export default ShopSection;
