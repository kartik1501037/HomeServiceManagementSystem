import React from "react";
import { useEffect, useState } from "react";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Button from '../../components/button'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import config from "../config";
import UserDetails from "./userdetails";


export default function UpdateUser() {
  const params = useParams()
  const [user, setUser] = useState({});
  const navigate = useNavigate()

  const [confirmPassword, setconfirmPassword] = useState("");

  useEffect(() => {

    userdetails();
  }, []);

  const userdetails = () => {

    const url = config.serverURL + `/user/${params.id}`
    axios.get(url).then
      (response => {
        // const result = response.data
        // setUser(result)
        setUser(response.data)
      })
  };
  function update(id) {
    //alert(id)

    const url = config.serverURL + `/user/${id}`

    if (user.role === "ADMIN") {
      setUser({ ...user, role: "ADMIN" })
    }
    else {
      setUser({ ...user, role: "USER" })
    }
    axios.put(url, user).then(response => {
      const result = response.data
      console.log("updated", result)

      if (result['status'] = "success") {
        toast.success("Profile Updated")
        navigate("/userdetails/" + id)
      } else {
        toast.error("Try again!!")
      }
    })

  }
  return (
    <div className="row">
      <h1 style={{ textAlign: "center", color: "black" }}>Update Profile</h1>
      <div
        className="col"
        style={{ borderRightStyle: "solid", borderRightColor: "lightgray" }}
      >
        <label>First Name </label>
        <input
          value={user.firstName}
          onChange={(e) => {
            setUser({ ...user, firstName: e.target.value });
          }}
          className="form-control"
          type="text"

        />
        <label>Last Name</label>
        <input
          value={user.lastName}
          onChange={(e) => {
            setUser({ ...user, lastName: e.target.value });
          }}
          className="form-control"
          type="text"
        />

        <label>Phone Number</label>
        <input
          value={user.phone}
          onChange={(e) => {
            setUser({ ...user, phone: e.target.value });
          }}
          className="form-control"
          type={"number"} maxLength={10} minLength={10}
        />

        <label>Email</label>
        <input type={"email"}
          value={user.email}
          onChange={(e) => {
            setUser({ ...user, email: e.target.value });
          }}
          className="form-control"
        />

        <label>Password</label>
        <input
          value={user.password}
          onChange={(e) => {
            setUser({ ...user, password: e.target.value });
          }}
          className="form-control"
          type={"password"}

        />

        <label>Confirm Password</label>
        <input
          value={confirmPassword}
          onChange={(e) => {
            setconfirmPassword(e.target.value);
          }}
          className="form-control"
          type={"password"}

        />
      </div>

      <div className="col">
        <label>DOB</label>
        <input
          value={user.dob}
          onChange={(e) => {
            setUser({ ...user, dob: e.target.value });
          }}
          className="form-control"
          type="text"

        />

        <label>House No</label>
        <input
          value={user.houseNo}
          onChange={(e) => {
            setUser({ ...user, houseNo: e.target.value });
          }}
          className="form-control"
          type="text"

        />

        <label>Street</label>
        <input
          value={user.street}
          onChange={(e) => {
            setUser({ ...user, street: e.target.value });
          }}
          className="form-control"
          type="text"

        />

        <label>City</label>
        <input
          value={user.city}
          onChange={(e) => {
            setUser({ ...user, city: e.target.value });
          }}
          className="form-control"
          type="text"

        />

        <label>State</label>
        <input
          value={user.state}
          onChange={(e) => {
            setUser({ ...user, state: e.target.value });
          }}
          className="form-control"
          type="text"

        />

        <label>Pincode</label>
        <input
          value={user.pincode}
          onChange={(e) => {
            setUser({ ...user, pincode: e.target.value });
          }}
          className="form-control"
          type="text"

        />
      </div>

      <div className="row">
        <Button onClick={() => update(user.id)} title="Update " />
      </div>
    </div>
    // </div>
  )
}
