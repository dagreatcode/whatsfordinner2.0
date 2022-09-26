import React from "react";
import Ratings from "../../components/ShopSection/Ratings";

function SingleProduct() {
  return (
    <>
      <div>SingleProductName</div>
      <div>Product Description</div>
      {/* Table */}
      <div>Product Price</div>
      <div>Product Status: Sold Out</div>
      <Ratings />

      {/* Reviews if reviews */}
      <div>Product Reviews</div>
      <div>Reviewer Name</div>
      <div>Reviewer Ratings</div>
      <div>Reviewed Date</div>
      <div>Review Comment</div>
      {/* Add a Review if logged in */}
      <button>Submit</button>
    </>
  );
}

export default SingleProduct;
