import React, { useState, useEffect } from "react";
import "./Product.css";
import { add, loadCarts } from "../store/cartSlice";
import { useDispatch } from "react-redux";
import axios from "axios";
import Loading from "./Loading";
import Alldata from "../data/Data";

export default function Product() {
  const dispatch = useDispatch();
  const [data, setData] = useState(Alldata);
  console.log(data)
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   async function abc() {
  //     // const res = await fetch("https://fakestoreapi.com/products");
  //     setLoading(true);
  //     if(sessionStorage.getItem('products')){
  //       const products = JSON.parse(sessionStorage.getItem('products'));
  //       setData(products);
  //     }else{
  //       const res = await axios.get("https://fakestoreapi.com/products");
  //       sessionStorage.setItem("products", JSON.stringify(res.data));
  //       setData(res.data);
  //     }
  //     setLoading(false);
  //   }
  //   abc();
  // }, []);

  useEffect(() => {
    dispatch(loadCarts());
  }, []);

  function handleAdd(product) {
    dispatch(add(product));
  }

  return (
    <div className="mainProduct">
      {loading ? (
        <Loading />
      ) : (
        <>
          {data.map((el, index) => (
            <div className="product" key={index}>
              <div className="image">
                <img src={el.image} alt="" />
              </div>
              <h5>{el.title}</h5>
              <div className="priceSection">
                <span>₹{el.price}</span>
                <span>⭐{el.rating.rate}</span>
              </div>
              <div className="buttonCenter">
                <button onClick={() => handleAdd(el)}>Add to cart</button>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
}
