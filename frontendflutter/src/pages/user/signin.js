import { Link, useNavigate } from "react-router-dom";
import Images from "../../images/image1_location.png";
import { toast } from "react-toastify";
import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
// import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';
// use the dispatch to update the redux store about the signin state
import { useDispatch } from "react-redux";
import { signin } from "../../Reducers/authSlice";
import config from "../config";
const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [erremail, setErrEmail] = useState();
  const params = useParams();
  // const [role, setRole] = useState("USER")
  // const options = ["ADMIN", "EMPLOYEE", "USER"];

  const signinUser = () => {
    if (email.length === 0) {
      toast.error("please enter email");
    } else if (password.length === 0) {
      toast.error("please enter password");
    }
    else {
      const body = {
        email,
        password
      };
      // url to call the api
      const url = config.serverURL + `/user/signin`;

      // make api call using axios
      axios
        .post(url, body)
        .then(response => {
          // get the server result
          const result = response.data;
          if (result.role === "ADMIN") {
            localStorage.setItem("user_details",response.data);
            // sessionStorage.setItem("user", result.id);
            // sessionStorage.setItem("User_Role", result.role);
            setUser(result["data"]);
            dispatch(signin(user));
            toast.success("Welcome ADMIN");
            navigate("../admin");
          } else {
            localStorage.setItem("user_details",response.data);
            // sessionStorage.setItem("user", result.id);
            // sessionStorage.setItem("User_Role", result.role);
            setUser(result["data"]);
            dispatch(signin(user));
            toast.success(`Welcome to ${response.data.firstName} ${" "} ${response.data.lastName} `);
            console.error()
            navigate("/home/" + result.id);
          }
        })
        .catch(error => {
          if (error.response.data.msg === "Invalid Credentials") {
            setErrEmail("Invalid Crentials")
          } else {
            setErrEmail(error.response.data.msg);
          }

        });
    }
  }
  return (
    <div style={styles.container1}>
      <div style={{ marginTop: 0 }}>
        <div style={styles.container}>
          <div className="mb-3">
            
            <label>Email</label>
            <input
              onChange={e => {
                setEmail(e.target.value);
              }}
              className="form-control"
              type="email"
              placeholder="Your email"
            />
          </div>

          <div className="mb-3">
            <label>Password</label>
            <input
              onChange={e => {
                setPassword(e.target.value);
              }}
              className="form-control"
              type="password"
              placeholder="Your password"
            />
          </div>
          <span style={{ color: "red", fontSize: "14px", textAlign: "center" }}>{erremail}</span><br />
          <div className="mb3" style={{ marginTop: 40 }} />
          <div className="mb-3">
            {/* <Dropdown>
              <Dropdown.Toggle
              >  </Dropdown.Toggle>
              <DropdownButton style={{ width: "60%", backgroundColor: "blueviolet" }}
                onClick={(e) => setRole(e.target.value)}>{role}</DropdownButton>
              {/* {options.map((ele, id) => (<Dropdown.Item eventKey={id}>{ }</Dropdown.Item>))}
              <Dropdown.Item eventKey={"ADMIN"}>ADMIN</Dropdown.Item>
              <Dropdown.Item eventKey={"EMPLOYEE"} value="EMPLOYEE"> EMPLOYEE</Dropdown.Item>
              <Dropdown.Item eventKey={"USER"} value="USER">USER</Dropdown.Item>

            </Dropdown> */}
            <div>
              Don't have an account?
              <Link to="/signup" style={{ color: "navy", }}> {"  "}Signup {" "}</Link>here
            </div>
            <button style={styles.Button} onClick={signinUser} className="">
              Sign in
            </button>
          </div>
          <div>
            <Link to="/forgot-password" style={{ color: "navy" }}>Forgot password</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: 400,
    height: 380,
    padding: 20,
    position: "relative",
    backgroundColor: "white",
    top: 100,
    left: 0,
    right: 0,
    bottom: 0,
    margin: "auto",
    borderColor: "#663399",
    borderRadius: 10,
    borderWidth: 1,
    borderStyle: "solid",
    boxShadow: "1px 1px 10px 1px white",
    textAlign: "center"
  },

  container1: {
    backgroundImage: `url(${Images})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "91vh"
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
export default Signin;
