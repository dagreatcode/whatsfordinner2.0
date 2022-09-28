import React from "react";
import Link from "react-router-dom";

function Header() {
  return (
    <>
      <div className="input-group">
        <select
          className="form-select"
          id="inputGroupSelect04"
          aria-label="Example select with button addon"
        >
          <option selected>Choose...</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        <button className="btn btn-outline-secondary" type="button">
          Button
        </button>
      </div>
      <div>Profile If One</div>
      <div>Cart</div>
      <div className="dropdown">
        <button
          className="btn btn-primary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Cart
        </button>
        <ul className="dropdown-menu">
          <li>
            <Link className="dropdown-item" href="#">
              Dropdown item
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" href="#">
              Dropdown item
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" href="#">
              Dropdown item
            </Link>
          </li>
        </ul>
      </div>
      <button
        type="button"
        className="btn btn-secondary"
        data-bs-toggle="popover"
        data-bs-placement="right"
        data-bs-custom-className="custom-popover"
        data-bs-title="Custom popover"
        data-bs-content="This popover is themed via CSS variables."
      >
        Custom popover
      </button>
    </>
  );
}

export default Header;
