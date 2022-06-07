import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { saveUser } from "../store/cartSlice";
import { useDispatch } from "react-redux";
import "./Order.css";

export default function Order() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [landmark, setLandmark] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");
  const [mobile, setMobile] = useState("+91-");

  const navigate = useNavigate();

  useEffect(()=>{
    if(localStorage.getItem('userDetails')){
      const user = JSON.parse(localStorage.getItem('userDetails'));
      setName(user.name);
      setEmail(user.email);
      setAddress(user.address);
      setLandmark(user.landmark);
      setMobile(user.mobile);
    }
  },[])

  function save() {
    if (
      name.length >= 4 ||
      email.length >= 4 ||
      address.length >= 6 ||
      city.length >= 4 ||
      pincode.length >= 6 ||
      mobile.length >= 10
    ) {
      dispatch(
        saveUser({ name, email, address, landmark, city, pincode, mobile })
      );
      navigate("/");
    } else {
      alert("fill all required fields!");
    }
  }

  return (
    <div className="container">
      <div className="subContainer">
        <h2 className="heading">Place Your Order</h2>
        <p className="subheading">Your wont find cheaper than this price anywhere.</p>
        <div className="DetailForm">
          <span> Name</span>
          <input
            type="text"
            placeholder="John Doe"
            value={name}
            onChange={(el) => setName(el.target.value)}
          />
          <br />
          <br />
          <span> Email</span>
          <input
            type="email"
            placeholder="John@gmail.com"
            value={email}
            onChange={(el) => setEmail(el.target.value)}
          />
          <br />
          <br />
          <span> Street Address</span>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="house no,street no"
            value={address}
            onChange={(el) => setAddress(el.target.value)}
          ></textarea>
          <br />
          <br />
          <span> Landmark</span>
          <input
            type="text"
            placeholder="Landmark"
            value={landmark}
            onChange={(el) => setLandmark(el.target.value)}
          />
          <br />
          <br />
          <span> City</span>
          <input
            type="text"
            placeholder="dehradun"
            value={city}
            onChange={(el) => setCity(el.target.value)}
          />
          <br />
          <br />
          <div>
            {" "}
            <span> State (default)</span>
            <span className="dropdown">
              <button className="dropbtn">uttarakhand</button>
              <span className="dropdown-content">
                <a href="#">Uttrakhand</a>
                <a href="#">Uttarpardesh</a>
                <a href="#">Himachal</a>
              </span>
            </span>
          </div>
          <span>Country</span>
          <span>our service's only for (India)</span>
          <br />
          <br />
          <span> pincode</span>
          <input
            type="text"
            placeholder="enter pincode"
            value={pincode}
            onChange={(el) => setPincode(el.target.value)}
          />
          <br />
          <br />
          <span>Phone Number</span>
          <input
            type="tel"
            placeholder="+91-"
            value={mobile}
            onChange={(el) => setMobile(el.target.value)}
          />

          <div className="btn">
            <button onClick={save}>Save</button>
          </div>
        </div>
      </div>
    </div>
  );
}
