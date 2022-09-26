import React from "react";
import {Link} from "react-router-dom"

export default function Pagination() {
  return (
    <>
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to={"#"}>
            1
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={"#"}>
            2
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={"#"}>
            3
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={"#"}>
            4
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={"#"}>
            5
          </Link>
        </li>
      </ul>
    </>
  );
}
