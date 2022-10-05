import React from "react";
import { useEffect, useState } from "react";
import img from "../../images/walljpg.jpg";
import axios from "axios";
import { useNavigate } from "react-router-dom";
//import user from "../../images/user.jpg";
import config from "../config";

export default function UserDetails() {
  const id = sessionStorage.getItem("user");
  const navigate = useNavigate();
  const [user, setUser] = useState();
  useEffect(() => {
    userdetails();
  }, []);

  const userdetails = () => {

    const url = config.serverURL + `/user/${id}`;

    axios.get(url).then((response) => {
      const result = response.data;
      console.log("result", result);
      setUser(result);
    });
  };
  const update = (id) => {
    console.log(id);
    navigate("/updateuser/" + user?.id);
  };
  const showorder = (id) => {
    //show customer specifc order
    console.log("id", id);
    navigate("/custorder/" + user?.id);
  };
  return (
    <div style={styles.container}>
      <div className="row">
        <div className="col">
          <img src={img} style={styles.container1} />
        </div>
        <div className="col">
          <div style={{ position: "absolute" }}>
            <div style={{ color: "red", position: "fixed", right: "20px", fontSize: "20px" }}>
              Welcome <br />
              Name : &nbsp;&nbsp;{user?.firstName}&nbsp;&nbsp;{user?.lastName}<br />
              Role : &nbsp;&nbsp;{user?.role}<br />
            </div>
          </div>
          <div style={{ position: "relative", top: "10vh" }}>
            <div style={styles.details}>
              <h4 style={{ marginTop: 20, marginBottom: 20 }}>
                {" "}
                Personal Details{" "}
              </h4>
              <h5>
                Name : {user?.firstName} &nbsp;&nbsp;&nbsp;&nbsp; Surname: {user?.lastName}
                <br />
                <br />
                Email : {user?.email}
                <br />
                <br />
                Phone : {user?.phone}
                <br />
                <br />
              </h5>
            </div>
            <div style={styles.details}>
              <h4 style={{ marginTop: 10, marginBottom: 20 }}>Address </h4>
              <h5>
                House No : {user?.houseNo} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br />
                Street : {user?.street}
                <br />
                <br />
                City : {user?.city}
                <br />
                <br />
                Pincode : {user?.pincode}
                <br />
                <br />
                State : {user?.state}
              </h5>

            </div>
            <div style={{ marginTop: 50 }}>
              <button style={styles.Button} onClick={update} className="">
                Update
              </button>
              <button style={styles.Button} onClick={showorder} className="">
                Order
              </button>
              {(user?.role === "ADMIN") ? <button style={styles.Button} onClick={() => navigate("/Admin")} className="">
                Admin Page
              </button> : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
const styles = {
  container: {
    //backgroundImage: `url(${user})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "95%",
    height: "90vh",
  },

  container1: {
    width: "100%",
    height: "100%",
    position: "relative",
    top: "12%",
    left: "5%"
  },

  Button: {
    position: "relative",
    width: "inherit",
    height: "6vh",
    backgroundColor: "black",
    color: "white",
    borderRadius: 5,
    border: "none",
    marginTop: 10,
    marginLeft: "2%",
    padding: "10px"

  },

  details: {
    marginLeft: 20,
    marginTop: 10,
  },
};
