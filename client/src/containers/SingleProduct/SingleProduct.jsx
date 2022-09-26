import React, {useEffect, useState} from "react";
import Ratings from "../../components/ShopSection/Ratings";
import axios from "axios"

function SingleProduct({match}) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get(`/api/products/${match.params.id}`);
      setProducts(data);
        console.log(`Hello: ${products}`)
    };
    fetchProducts();
  }, [match.params.id, products]);
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
