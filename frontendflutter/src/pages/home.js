import Footer from "../components/Footer";
import Slider from "../components/Slice/Slider";
import { useSelector, useDispatch } from "react-redux";
import { signin } from "../Reducers/authSlice";
import axios from "axios";
import { useState, useEffect } from "react";
import config from "./config";
import { useNavigate } from "react-router-dom";
const logo = require("../images/image2_logo.png");
const p1 = require("../images//Computer-Repairing.jpg");
const p2 = require("../images/painting.jpg");
const p3 = require("../images/House-Keeping.jpg");
// const p4 = require("../images/Pest-Control.jpg");
// const p5 = require("../images/Refrigerator-Repair.jpg");
// const p6 = require("../images/Carrpentry.jpg");

const Home = () => {
  // const dispatch = useDispatch();

  // const signinStatus = useSelector(state => state.authSlice.status);
  // useEffect(() => {
  //   //console.log("token: " + sessionStorage["token"]);
  //   if (sessionStorage["token"] && sessionStorage["token"].length > 0) {
  //     // reading the information from sesssionstorage and manually signing in user
  //     const user = {
  //       token: sessionStorage["token"],
  //       name: sessionStorage["username"]
  //     };
  //     dispatch(signin(user));
  //   }

  //   gethomes();
  // }, []);
  // const url = config.serverURL + `/customer/getCurrentUserDetails`;
  // const gethomes = () => {
  //   axios
  //     .get(url, {
  //       headers: { Authorization: "Bearer " + sessionStorage["token"] }
  //     })
  //     .then(response => {
  //       const result = response.data;
  //       console.log(result);
  //     });
  // };
  // const navigate = useNavigate();
  return (
    <div className="slider">
      <div className="load">
        {/* <Slider /> */}
        <center>
          {" "}<h2 style={{ color: "white" }}>Welcome to Flutter Home Services</h2>
        </center>
        <div className="content">
          <div className="principal">
            <h2 style={{ color: "white" }}>
              <strong>Extraordinary service for extraordinary customers</strong>
            </h2>

            <p
              style={{
                color: "white",
                fontFamily: "Arial",
                fontWeight: 600,
                marginTop: 10,
                fontSize: "25px"
              }}
            >ONE STOP SOLUTION FOR ALL YOUR NEEDS
              <br />
              To our detailed system of providing services
            </p>
          </div>
        </div>
        <div style={{ marginTop: -15, textAlign: "center" }}>
          <br />
          <br />
          <h3 style={{ color: "white" }}>Our Popular Home Services</h3>
          <br /> <br />
          <div className="container">
            <div className="row">
              <div className="col-sm">
                <div className="card" style={{ marginTop: 20, border: 0 }}>
                  <img
                    className="card-img-top"
                    src={p1}
                    alt="Card image cap"
                    height="200px"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Computer Repairing</h5>
                    <p className="card-text">
                        {" "}₹ 500-10,500 <s>₹ 12,995.00</s>
                      </p>
                      <p className="card-text">
                      Computer Repairing Services
                    </p>
                  </div>
                </div>{" "}
              </div>
              <div className="col-sm">
                <div className="card" style={{ marginTop: 20, border: 0 }}>
                  <img
                    className="card-img-top"
                    src={p2}
                    alt="Card image cap"
                    height="200px"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Painting Services</h5>
                    <p className="card-text">
                      ₹ 5000-25,000 <s>₹ 35,995.00</s></p>
                      <p className="card-text"> Painting Services</p>
                  </div>
                </div>
              </div>
              <div className="col-sm">
                <div className="card" style={{ marginTop: 20, border: 0 }}>
                  <img
                    className="card-img-top"
                    src={p3}
                    alt="Card image cap"
                    height="200px"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Housekeeping</h5>
                    <p className="card-text">
                      ₹ 2,500.00-5 <s>₹ 10,995.00</s> </p>
                      <p className="card-text">Housekeeping Services</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="container34" >
            <div className="container1">
              <h1>You can register your service </h1>
              <h3> Just by creating your agency Account</h3>
            </div >
            <div className="container2">
              <button className="btn btn-primary" onClick={() => navigate("/createadmin")}>Create New Agnecy Account </button></div>
          </div> */}
          <Footer />
        </div>
      </div>
    </div>
  );
};


export default Home;
