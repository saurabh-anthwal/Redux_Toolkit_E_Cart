import React from "react";
import Product from "../component/Product";
import "./Home.css";
export default function Home() {
  return (
    <div className="mainHome">
      <div className="home">
        <h3>Welcome to Redux-Toolkit</h3>
        <Product />
      </div>
    </div>
  );
}
