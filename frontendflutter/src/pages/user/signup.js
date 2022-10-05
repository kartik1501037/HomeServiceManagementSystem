import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import config from "../config";
const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhoneNumber] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [dob, setDob] = useState("");
  const [houseNo, setHouseNo] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");
  const [status, setStatus] = useState(true);
  const navigate = useNavigate();
  const signup = () => {
    if (firstName.length == 0) {
      toast.error("please enter First name");
    } else if (lastName.length == 0) {
      toast.error("please enter Last name");
    } else if (phone.length == 0) {
      toast.error("please enter Phone number");
    } else if (phone.length > 10) {
      console.log(phone.length)
      toast.error("Phone number exceed limits of 10");
    }
    else if (email.length == 0) {
      toast.error("please enter email");
    }
    else if (email.indexOf("@") == -1) {
      console.warn(email.indexOf("@"));
      toast.error("please enter valid email");
    }
    else if (password.length == 0) {
      toast.error("please enter password");
    }
    else if (password != confirmPassword) {
      toast.error("please enter confirm password");
    }
    else if (phone == 0) {
      toast.error("please enter phone number");
    } else if (dob == 0) {
      toast.error("please enter date of birth");
    } else if (houseNo.length == 0) {
      toast.error("please enter houseNo");
    } else if (street.length == 0) {
      toast.error("please enter street");
    } else if (city.length == 0) {
      toast.error("please enter city");
    } else if (state.length == 0) {
      toast.error("please enter state");
    } else if (pincode.length == 0) {
      toast.error("please enter pincode");
    }
    else {

      const body = {
        firstName,
        lastName,
        email,
        password,
        phone,
        dob,
        houseNo,
        street,
        city,
        state,
        pincode
      };

      // url to call the api
      const url = config.serverURL + `/user/signup`;
      // make the API call to check if user exists

      // http method: post
      // body: contains the data to be sent to the API
      axios.post(url, body).then((response) => {
        // get the data from the response
        const result = response.data;
        console.log(result);
        if (result["status"] == "error") {
          toast.error("Error try again");
        } else {
          toast.success("New User registered!!");
          navigate("/signin");
        }
      });
    }
  }
  return (
    <div className="row">
      <div
        className="col"
        style={{ borderRightStyle: "solid", borderRightColor: "lightgray" }}
      >
        <label>First Name </label>{" "}
        <span style={{ "color": "red" }}>*</span>
        <input
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
          className="form-control"
          type="text"
          placeholder="Your first name"
        />

        <label>Last Name</label>
        <span style={{ "color": "red" }}>* {" "}</span>
        <input
          onChange={(e) => {
            setLastName(e.target.value);
          }}
          className="form-control"
          type="text"
          placeholder="Your last name"
        />

        <label>Phone Number</label>{" "}<span style={{ "color": "red" }}>*{" "} </span>
        <input
          onChange={(e) => {
            setPhoneNumber(e.target.value);
          }}
          className="form-control"
          type={'number'}
          placeholder="Your mobile number"
        />

        <label>Email</label>{" "}<span style={{ "color": "red" }}>*</span>
        <input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          className="form-control"
          type={'email'}
          placeholder="Your email"
        />

        <label>Password</label>{" "}<span style={{ "color": "red" }}>*</span>
        <input
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          className="form-control"
          type="password"
          placeholder="Your password"
        />

        <label>Confirm Password</label>{" "}<span style={{ "color": "red" }}>*</span>
        <input
          onChange={(e) => {
            setconfirmPassword(e.target.value);
          }}
          className="form-control"
          type="password"
          placeholder="Repeat above password"
        />
      </div>

      <div className="col">
        <label>DOB</label>{" "}<span style={{ "color": "red" }}>*</span>
        <input
          onChange={(e) => {
            setDob(e.target.value);
          }}
          className="form-control"
          type={'date'}
          placeholder="yyyy-dd-mm"
        />

        <label>House No</label>{" "}<span style={{ "color": "red" }}>*</span>
        <input
          onChange={(e) => {
            setHouseNo(e.target.value);
          }}
          className="form-control"
          type="text"
          placeholder="Your House No."
        />

        <label>street</label>{" "}<span style={{ "color": "red" }}>*</span>
        <input
          onChange={(e) => {
            setStreet(e.target.value);
          }}
          className="form-control"
          type="text"
          placeholder="Your Street"
        />

        <label>City</label>{" "}<span style={{ "color": "red" }}>*</span>
        <input
          onChange={(e) => {
            setCity(e.target.value);
          }}
          className="form-control"
          type="text"
          placeholder="Your City"
        />

        <label>State</label>{" "}<span style={{ "color": "red" }}>*</span>
        <input
          onChange={(e) => {
            setState(e.target.value);
          }}
          className="form-control"
          type="text"
          placeholder="Your State"
        />

        <label>Pincode</label>{" "}<span style={{ "color": "red" }}>*</span>
        <input
          onChange={(e) => {
            setPincode(e.target.value);
          }}
          className="form-control"
          type={'number'}
          placeholder="Enter PinCode"
        />
      </div>

      <div className="mb3" style={{ marginTop: 30 }} />
      <div className="mb-3">
        <div style={{ "textAlign": "center" }}>
          Already have an account?
          <Link to="/signin" >{"  "}Sign In {"  "}</Link>here
        </div>
        <button style={styles.Button} onClick={signup}>
          Sign up
        </button>
      </div>
    </div>
    // </div>
  );
};

const styles = {
  container: {
    width: 500,
    height: 650,
    padding: 40,
    position: "relative",
    backgroundColor: "white",
    top: 50,
    left: 0,
    right: 0,
    bottom: 0,
    margin: "auto",
    borderColor: "#663399",
    borderRadius: 10,
    borderWidth: 1,
    borderStyle: "solid",
    boxShadow: "1px 1px 10px 1px grey",
  },

  //   container1: {
  //     backgroundImage: `url(${Images})`,
  //     backgroundPosition: "center",
  //     backgroundSize: "cover",
  //     backgroundRepeat: "no-repeat",
  //     width: "100%",
  //     height: "100vh"
  //   },
  error: {
    fontSize: "10px"
  },
  Button: {
    position: "relative",
    width: "40%",
    height: 40,
    backgroundColor: "black",
    color: "white",
    borderRadius: 5,
    border: "none",
    marginTop: 10,
    left: "33%"
  },
};

export default Signup;
