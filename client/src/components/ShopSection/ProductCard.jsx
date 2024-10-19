import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./ShopSection.module.css"; // Import the CSS Module
// import Rating from "./Ratings"; // Import Rating component

const ProductCard = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("/api/all-products");
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <>
      <h1>ProductCard</h1>
      <div className={styles.container}>
        <div className="row">
          <div className="col-sm-12 d-flex flex-wrap justify-content-center">
            {products.map((prod) => (
              <div key={prod._id} className={styles.card}>
                <img
                  src={prod.image}
                  className="card-img-top"
                  alt={prod.name}
                />
                <div className={styles.cardBody}>
                  <h5 className="card-title">{prod.name}</h5>
                  <p className="card-text">{prod.description}</p>
                  <div>Product Price: {prod.price}</div>
                  <div>Product Status: {prod.countInStock}</div>
                  <Link to="/" className="btn btn-primary">
                    Check out Product
                  </Link>
                </div>
              </div>
            ))}
            {/* Adding more blank cards */}
            {[...Array(4)].map((_, index) => (
              <div key={index} className={styles.blankCard}>
                <p>More Products Coming Soon!</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
