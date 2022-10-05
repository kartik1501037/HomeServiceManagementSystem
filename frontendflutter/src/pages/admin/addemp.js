import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import config from "../config";
const AddEmp = () => {
  //employee inputs
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [deptName, setDeptName] = useState("");
  const [hireDate, setHireDate] = useState("");
  const [salary, setSalary] = useState(0);

  //After adding employee navigate to Employees page
  const navigate = useNavigate();

  const addemp = () => {
    //check if admin has entered all the input data

    if (firstName.length === 0) {
      toast.error("please enter the first name");
    } else if (lastName.length === 0) {
      toast.error("please enter the last name");
    } else if (phoneNum.length === 0) {
      toast.error("please enter phone number");
    } else if (hireDate.length === 0) {
      toast.error("Assign Department");
    } else if (salary.length === 0) {
      toast.error("Assign Department");
    } else if (deptName.length === 0) {
      toast.error("Assign Department");
    } else {
      //make API call to  backend using axios
      const body = {
        firstName,
        lastName,
        phoneNum,
        hireDate,
        salary,
        deptName
      };

      console.log("result", body);

      const url = config.serverURL + `/admin/employee/addemployee`;

      //axios api call
      axios.post(url, body).then(response => {
        const result = response.data;
        console.log(result);

        if ((result["status"] = "success")) {
          toast.success("New Employee added succcessfully!!");
          navigate("/list-employee");
        } else {
          toast.error("Employee cannot be added");
        }
      });
    }
  };

  return (
    <div style={{ marginTop: 20 }}>
      <h1 style={{ textAlign: "center", color: "navy" }}>Add Employee</h1>
      <div style={styles.container}>
        <div className="mb-3">
          <label>First Name</label>
          <input
            onChange={e => {
              setFirstName(e.target.value);
            }}
            className="form-control"
            type="text"
          />
        </div>
        <div className="mb-3">
          <label>Last Name</label>
          <input
            onChange={e => {
              setLastName(e.target.value);
            }}
            className="form-control"
            type="text"
          />
        </div>

        <div className="mb-3">
          <label>Phone Number</label>
          <input
            onChange={e => {
              setPhoneNum(e.target.value);
            }}
            className="form-control"
            type={'number'}
            max={9999999999}

          // maxLength={10}
          />
        </div>
        <div className="mb-3">
          <label>Hire Date</label>
          <input
            onChange={e => {
              setHireDate(e.target.value);
            }}
            className="form-control"
            type="date"
          />
        </div>
        <div className="mb-3">
          <label>Salary</label>
          <input
            onChange={e => {
              setSalary(e.target.value);
            }}
            className="form-control"
            type="number"
            min={0}
          />
        </div>
        <div className="mb-3">
          <label>Service Name </label>
          <input
            onChange={e => {
              setDeptName(e.target.value);
            }}
            className="form-control"
            type="text"
          />
        </div>

        <div className="mb-3" style={{ marginTop: 40 }}>
          <button onClick={addemp} style={styles.Button}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};
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
    backgroundColor: "navy",
    color: "white",
    borderRadius: 5,
    border: "none",
    marginTop: 10
  }
};

export default AddEmp;
