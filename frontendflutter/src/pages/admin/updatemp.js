import React from "react";
import { toast } from "react-toastify";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import config from "../config";
export default function UpdateEmployee() {
  const params = useParams();
  const [data, setData] = useState({});
  const navigate = useNavigate();
  //employee inputs
  useEffect(() => {
    // load all the services created by admin
    employeelist();
  }, []);

  //get all services
  const employeelist = () => {
    //create axios api to send data to server
    const url = config.serverURL + `/admin/employee/${params.id}`;

    axios.get(url).then(response => {
      const res = response.data;
      console.log("result in update", res);
      setData(res);
    });
  };

  function updateemployee(id) {
    //alert(id)
    // const body = {
    //   firstName,
    //   lastName,
    //   phoneNum,
    //   hireDate,
    //   salary,
    //   deptName,
    //   empStatus
    // };

    // console.log("Body " + body);
    console.log("Firstname " + data.firstName);
    console.log("lastname" + data.lastName);

    const url = config.serverURL + `/admin/employee/${id}`;

    //axios api call
    axios.put(url, data).then(response => {
      const result = response.data;
      console.log("result", result);

      if ((result["status"] = "success")) {
        toast.success("Employee details Updated succcessfully!!");
        navigate("/list-employee");
      } else {
        toast.error("Employee details cannot be updated");
      }
    }).then(navigate("/list-employee"));
  }

  return (
    <div style={{ marginTop: 20 }}>
      <h1 style={{ textAlign: "center", color: "navy" }}>
        Update Employee : {data.firstName}
      </h1>
      <div style={styles.container}>
        <div className="mb-3">
          <label>First Name</label>
          <input
            value={data.firstName}
            onChange={e => {
              // setFirstName(e.target.value);
              setData({ ...data, firstName: e.target.value })
            }}
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label>Last Name</label>
          <input
            value={data.lastName}
            onChange={e => {
              setData({ ...data, lastName: e.target.value });
            }}
            type="text"
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label>Phone Number</label>
          <input
            value={data.phoneNum}
            onChange={e => {
              setData({ ...data, phoneNum: e.target.value });
            }}
            className="form-control"
            type="tel"
          />
        </div>
        <div className="mb-3">
          <label>Hire Date</label>
          <input
            value={data.hireDate}
            onChange={e => {
              setData({ ...data, hireDate: e.target.value });
            }}
            className="form-control"
            type="date"
          />
        </div>
        <div className="mb-3">
          <label>Salary</label>
          <input
            value={data.salary}
            onChange={e => {
              setData({ ...data, salary: e.target.value });
            }}
            className="form-control"
            type="number"
          />
        </div>
        <div className="mb-3">
          <label>Service Name </label>
          <input
            value={data.deptName}
            onChange={e => {
              setData({ ...data, deptName: e.target.value });
            }}
            className="form-control"
            type="text"
          />
        </div>
        <div className="mb-3">
          <label>Hire Status </label>
          <input
            value={data.empStatus}
            onChange={e => {
              setData({ ...data, empStatus: e.target.value });
            }}
            className="form-control"
            type="text"
          />
        </div>

        <div className="mb-3" style={{ marginTop: 40 }}>
          <button onClick={() => updateemployee(data.id)} style={styles.Button}>
            Update
          </button>
        </div>
      </div>
    </div>
  );
}
const styles = {
  container: {
    width: 400,
    height: 580,
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
