import React from "react";

function Header() {
  return (
    <>
      <div class="input-group">
        <select
          class="form-select"
          id="inputGroupSelect04"
          aria-label="Example select with button addon"
        >
          <option selected>Choose...</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        <button class="btn btn-outline-secondary" type="button">
          Button
        </button>
      </div>
      <div>Profile If One</div>
      <div>Cart</div>
    </>
  );
}

export default Header;
