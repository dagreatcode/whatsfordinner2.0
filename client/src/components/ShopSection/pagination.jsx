import React from "react";
import { Link } from "react-router-dom";
import styles from "./ShopSection.module.css"; // Import the CSS Module

export default function Pagination() {
  return (
    <nav aria-label="Page navigation example" className={styles.pagination}>
      <ul className="pagination">
        <li className="page-item">
          <Link className="page-link" to="/" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
            <span className="sr-only">Previous</span>
          </Link>
        </li>
        {/* Adding more pages dynamically */}
        {[1, 2, 3, 4, 5].map((page) => (
          <li className="page-item" key={page}>
            <Link className="page-link" to="/">
              {page}
            </Link>
          </li>
        ))}
        <li className="page-item">
          <Link className="page-link" to="/" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
            <span className="sr-only">Next</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
