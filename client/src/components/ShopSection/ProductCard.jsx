import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

// We going to the home page!!! with .map()(0,12) length
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
      {/* {products.map((prod) => {
        return `${prod.name},
         ${prod.description}`;
      })} 
      `${prod.name},
         ${prod.description}`*/}
      <h1>ProductCard</h1>
      <div className="container" style={{}}>
        <div className="row">
          {products.map((prod) => (
            <div
              key={prod._id}
              className="card"
              style={{
                width: "18rem",
                alignItems: "center",
                display: "flex",
                flexDirection: "row",
                textAlign: "center",
              }}
            >
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{prod.name}</h5>
                <p className="card-text">{prod.description}</p>
                {/* Use .map() to pull all products by 12 */}
                {/* Table */}
                <div>Product Price: {prod.price}</div>
                <div>Product Status: {prod.countInStock}</div>
                {/* <Ratings /> */}
                <Link to="/" className="btn btn-primary">
                  Check out Product
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductCard;
