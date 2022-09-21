import React from "react";
import logo from "./logo.svg";
import "./Reload.css";

function Reload() {
  return (
    <div className="Reload">
      <header className="Reload-header">
        <img src={logo} className="Reload-logo" alt="logo" />
        <p>
          Edit <code>src/Reload.jsx</code> and save to reload.
        </p>
        <a
          className="Reload-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default Reload;
