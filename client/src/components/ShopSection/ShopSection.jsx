import React from "react";
import Pagination from "./pagination";
import ProductCard from "./ProductCard";
// import PropTypes from 'prop-types'

function ShopSection() {
  return (
    <>
      <div>ShopSection</div>
      {/* Place All Products/Books Here with .map() in cards... DRY Code. */}
      <ProductCard />
      <Pagination />
    </>
  );
}

// ShopSection.propTypes = {}

export default ShopSection;
