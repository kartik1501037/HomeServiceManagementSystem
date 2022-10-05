
import React from "react";
import { toast } from "react-toastify";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import SocialFollow from "../components/socialmedia";
import config from "./config"
export default function ContactUs() {

  const params = useParams();
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  //employee inputs
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [emailId, setEmailId] = useState("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  console.log(params);


  function contactus() {
    //alert(id)
    const body = {
      firstName,
      lastName,
      emailId,
      title,
      message
    };

    console.log(body);

    const url = config.serverURL + `/user/feedback`;

    //axios api call
    axios.post(url, body).then(response => {
      const result = response.data;
      console.log("result", result);

      if (result["status"] = "success") {
        toast.success("FeedBack Sent!!");
        //navigate("/showfeedback");
      } else {
        toast.error("Please Try Again");
      }
    });
  }

  return (
    <div style={{ marginTop: 20 }}>
      <h2 style={{ textAlign: "center", color: "navy" }}>Contact Us</h2>
      <div className="row">
        <div className="col">
          <div style={styles.container}>
            <div className="mb-3">
              <label>First Name</label>
              <input
                onChange={e => {
                  setFirstname(e.target.value);
                }}
                className="form-control"
                type="text"
              />
            </div>
            <div className="mb-3">
              <label>Last Name</label>
              <input
                onChange={e => {
                  setLastname(e.target.value);
                }}
                className="form-control"
                type="text"
              />
            </div>
            <div className="mb-3">
              <label>Email</label>
              <input
                onChange={e => {
                  setEmailId(e.target.value);
                }}
                className="form-control"
                type="email"
              />
            </div>
            <div className="mb-3">
              <label>Title</label>
              <input
                onChange={e => {
                  setTitle(e.target.value);
                }}
                className="form-control"
                type="text"
              />
            </div>
            <div className="mb-3">
              <label>Message</label>
              <textarea
                onChange={e => {
                  setMessage(e.target.value);
                }}
                rows="6"
                style={{ resize: "none" }}
                className="form-control"
              />
            </div>
            <div className="mb-3" style={{ marginTop: 10 }}>
              <button onClick={contactus} style={styles.Button}>
                Send
              </button>
            </div>
          </div>
        </div>
        <div className="col">
          <div>
            <p>
              <p
                style={{
                  marginTop: 30,
                  fontWeight: 700,
                  fontFamily: "sans-serif",
                  fontSize: 30,
                  fontStyle: "italic",
                  color: "royalblue"
                }}
              >
                How can we Help?
              </p>
              <p>
                <img
                  src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80"
                  alt="contact image"
                  className="rounded mx-auto d-block"
                  style={{ left: 0, height: 300, width: 550, display: "block" }}
                />
              </p>
              <p
                style={{
                  marginTop: 15,
                  fontSize: 20,
                  fontFamily: "sans-serif",
                  fontStyle: "inherit",
                  color: "dimgrey",
                  fontWeight: 600
                }}
              >
                <p>Email : homeservices@test.com</p>
                <p>Address: Bavdhan,Pune, Maharashtra </p>
                <p>Phone : 02164 225 500</p>
              </p>
              <header />
              <SocialFollow />
            </p>
          </div>
        </div>
      </div>
    </div>


  );
}
const styles = {
  container: {
    width: 500,
    height: 620,
    padding: 20,
    position: "relative",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    margin: "auto",
    marginTop: 20,
    borderColor: "navy",
    borderRadius: 10,
    broderWidth: 1,
    borderStyle: "solid",
    boxShadow: "1px 1px 20px 5px #C9C9C9"
  },
  Button: {
    position: "relative",
    width: "100%",
    height: 40,
    backgroundColor: "black",
    color: "white",
    borderRadius: 5,
    border: "none",
    marginTop: 10
  }
};
