import React, { useEffect, useState } from "react";
import axios from "axios";

const ProductCard = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("/api/products");
      setProducts(data);
      //   console.log(`Hello: ${products}`)
    };
    fetchProducts();
  }, [products]);
  return (
    <>
      {/* Use .map() to pull all products by 12 */}
      <h1>Product Card</h1>
      {/* {products[1].name}
      <br/>
      {products[1].description}
      <br/>
      {products[1].price}
      <br/>
      {products[1].countInStock}
      <br/>
      {products[1].ratings}
      <br/>
      {products[1].numReviews} */}



      {products.map((prod) => {
        return `${prod.name},
         ${prod.description}`;
      })}
    </>
  );
};

export default ProductCard;
