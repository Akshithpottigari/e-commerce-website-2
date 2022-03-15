import React from "react";
import { ReactDOM } from "react-dom";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <>
      <div className="nav">
        <ul className="navLeft">
          <li className="brandName">
            <Link className="nav-left-a" to="/">Brand</Link>
          </li>
          <li className="navLeft-li dropdown">
            <a className="nav-left-a">Products &#9660;</a>
            <div className="dropdown-content">
              <Link to="/electronics">Electronics</Link>
              <Link to="/jewelery">Jewelery</Link>
              <Link to="/mensclothing">Men's Clothing</Link>
              <Link to="/womensclothing">Women's Clothing</Link>
            </div>
          </li>
          <li className="navLeft-li">
            <a className="nav-left-a" href="#">
              Blog
            </a>{" "}
          </li>
          <li className="navLeft-li">
            <a className="nav-left-a" href="#">
              Shop
            </a>{" "}
          </li>
          <li className="navLeft-li">
            <a className="nav-left-a" href="#">
              Contact
            </a>{" "}
          </li>
        </ul>
        <form className="navRight">
          <input
            type="text"
            className="navRight-searchbox"
            name="search"
          ></input>
          <button type="submit" className="navRight-searchButton">
            <img
              className="navRight-searchButton-icon"
              src={require("../images/Vector.png")}
            ></img>
          </button>
        </form>
      </div>
    </>
  );
}
