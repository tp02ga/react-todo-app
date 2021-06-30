import React from "react";
import { Link } from "react-router-dom";

function Header() {
  doSomething();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "1em",
      }}
    >
      <div>Todo App</div>
      <div>
        <Link to="/dashboard">Dashboard</Link>
      </div>
    </div>
  );
}

function doSomething() {}

export default Header;
