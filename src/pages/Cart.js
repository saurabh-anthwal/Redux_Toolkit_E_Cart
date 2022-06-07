import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./Cart.css";
import { remove } from "../store/cartSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [counter, setCounter] = useState(1);
  const products = useSelector((state) => state.cart.carts);

  // console.log(products)

  function handleRemove(item) {
    console.log(item);
    dispatch(remove(item));
  }

  function Order(id) {
    navigate("/Order");
  }

  let grandTotal = 0;
  products.map((i) => {
    return (grandTotal = grandTotal + i.price);
  });
  return (
    <div className="mainCart">
      <div className="asideCart">
        {products.map((el) => (
          <div className="cartProduct" key={el.id}>
            <div className="left">
              <h4>{el.category}</h4>
              <img src={el.image} alt={el.image} />
              <div className="btn">
                <button onClick={() => setCounter(counter - 1)}>-</button>
                <span>{counter}</span>
                <button onClick={() => setCounter(counter + 1)}>+</button>
              </div>
            </div>
            <div className="right">
              <h5>{el.title}</h5>
              <strong>₹ {el.price}</strong>
              <p className="description">{el.description}</p>
              <span>⭐ ✰{el.rating.rate}</span>
              <span>In Stock: {el.rating.count}</span>
              <span>
                <button onClick={() => handleRemove(el.id)}>🚮Remove</button>
              </span>
            </div>
          </div>
        ))}
      </div>
      {grandTotal == 0 ? (
        <div className="noItem">
          <h4>Sorry,</h4>
          <p>no products found !</p>
        </div>
      ) : (
        <div className="mainAside">
          <h4>
            PRICE DETAILS <span>({products.length})</span>
          </h4>
          <div className="asideDetail">
            <div>
              <p>Total MRP</p>
              <p>Coupon Discount</p>
              <p>Convenience Fee</p>
            </div>
            <div>
              <p>₹ {grandTotal}</p>
              <p> Apply Coupon</p>
              <p>Free</p>
            </div>
          </div>
          <div className="totalAmout">
            <span>Total Amount</span>
            <span>₹ {grandTotal}</span>
          </div>

          <div className="placeOrder">
            <button onClick={() => Order(products.id)}>PLACE ORDER</button>
          </div>
        </div>
      )}
    </div>
  );
}
