import { Header } from "antd/es/layout/layout";
import React from "react";

import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Cart() {
  return (
    <>
      <Header />
      <div
        className="card mt-10"
        style={{
          width: "55rem",
          height: "46rem",
          marginBottom: "80px",
          marginLeft: "270px",
        }}
      >
        <div className="cart">
          <div className="cart-imagebox">
            {/* <img
              className="cart-image"
              src={require("/Users/muthusankar/Desktop/pizza app/client/src/assets/city/activa.jpeg")}
              alt="bike image"
            /> */}
          </div>
          <div className="cart-description">
            <div className="cart-descriptionside">
              <div className="city-price">
                <p className="side-desc">
                  <p className="city-head">Location</p>
                  <p className="cityname-desc">Velacherry - Chennai</p>
                  <p className="type">Rent</p>
                  <p className="bike-price">Rs.400.00</p>
                </p>
              </div>

              <div clasName="deposit">
                <p className="advance">Deposit</p>
                <p className="amount">Rs.1,000.00</p>
                <p className="amount-desc">Per vehicle</p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="row"
          style={{ marginLeft: "285px", marginTop: "-20px" }}
        >
          <div className="col-lg-3">
            <div className="input-group">
              <span className="input-group-btn">
                <button
                  type="button"
                  className="quantity-left-minus btn  btn-number"
                  data-type="minus"
                  data-field=""
                  style={{
                    width: "40px",
                    height: "38px",
                    backgroundColor: "#c60063",
                  }}
                >
                  <FaMinus style={{ color: "white" }} />
                </button>
              </span>
              <input
                type="text"
                id="quantity"
                name="quantity"
                className="form-control input-number"
                value="1"
                min="1"
                max="100"
              />
              <span className="input-group-btn">
                <button
                  type="button"
                  className="quantity-right-plus btn  btn-number"
                  data-type="plus"
                  data-field=""
                  style={{
                    width: "40px",
                    height: "38px",
                    backgroundColor: "#c60063",
                  }}
                >
                  <FaPlus style={{ color: "white", align: "center" }} />
                </button>
              </span>
            </div>
          </div>
        </div>
        <div className="line" style={{ color: "#f0f0f5", marginTop: "30px" }}>
          ________________________________________________________________________________________________
        </div>
        <p className="policy" style={{ fontWeight: "bold", marginTop: "30px" }}>
          Partner T & C
        </p>
        <p>
          <ul>
            <li>
              The rider needs to present a valid Driving License at the time of
              picking up the vehicle.
            </li>
            <li>
              At the time of pick up of vehicle Original ID proof (Voter
              ID/Aadhaar Card/Passport) of the rider need to be submitted.
            </li>
            <li>E-Aadhar card/smart Aadhar card will not be accepted.</li>
            <li>Only 1 complimentary helmet will be provided.</li>
            <li>Fuel charges are not included.</li>
            <li>
              Sufficient fuel will be provided with the vehicle to reach the
              nearest Petrol station.
            </li>
            <li>
              The customer is liable to pay Service charges as per authorized
              Service Center, In case of damage to the vehicle.
            </li>
          </ul>
        </p>
        <Link to="/payment">
          <button
            type="submit"
            className="btn"
            style={{
              width: "800px",
              height: "55px",
              backgroundColor: "#c60063",
              color: "white",
            }}
          >
            Book Now
          </button>
        </Link>
      </div>
    </>
  );
}
