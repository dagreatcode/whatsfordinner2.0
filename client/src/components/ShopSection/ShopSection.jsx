import React from "react";
import Pagination from "./pagination";
import ProductCard from "./ProductCard";
// import PropTypes from 'prop-types'


function ShopSection() {
  return (
    // Place All Products/Books Here with .map() in cards... DRY Code.
    <>
      <div>ShopSection</div>
      <Pagination />
      <ProductCard />
    </>
  );
}

// ShopSection.propTypes = {}

export default ShopSection;
