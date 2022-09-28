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

      <div className="card" style={{ width: "18rem" }}>
        {products.map((prod) => (
          <div>
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              {/* Use .map() to pull all products by 12 */}
              <h1>{prod.name}</h1>
    
              <div>SingleProductName</div>
              <div>{prod.description}</div>
              {/* Table */}
              <div>Product Price</div>
              <div>Product Status: Sold Out</div>
              {/* <Ratings /> */}

              {/* Reviews if reviews */}
              <div>Product Reviews</div>
              <div>Reviewer Name</div>
              <div>Reviewer Ratings</div>
              <div>Reviewed Date</div>
              <div>Review Comment</div>
              <Link to="/" className="btn btn-primary">
                Go somewhere
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductCard;
