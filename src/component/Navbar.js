import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Navbar() {
  const items = useSelector((state) => state.cart.carts);
  const user = useSelector((state) => state.cart.user);

  const [showLinks, setShowLinks] = useState(false);

  function toggleLinks() {
    document.querySelector(".links").classList.toggle("show");
    setShowLinks(!showLinks);
  }
  return (
    <nav>
      <div className="mainHeader my-container">
        <Link to={"/"} className="logo-link">
          <h2>Redux-Store</h2>
        </Link>
        <div className="nav-Btn">
          <div className="menu" onClick={toggleLinks}>
            {showLinks ? (
              <i class="fa-solid fa-xmark fa-2x"></i>
            ) : (
              <i class="fa-solid fa-bars fa-2x"></i>
            )}
          </div>
          <div className="links">
            <ul>
              <Link className="link" to="/">
                <li className="navLink">Home</li>
              </Link>
              <Link className="link" to="/cart">
                <li className="navLink">
                  Cart <span className="cart-length">{items && items.length}</span>
                </li>
              </Link>
              <Link to="/user-profile" className="link">
                <li className="navLink">
                  <i class="fa-solid fa-user"></i> {"  "}
                  {user && <span>{user?.name?.split(" ")[0]}</span>}
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
