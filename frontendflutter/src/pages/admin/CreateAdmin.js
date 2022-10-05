import axios from 'axios';
import React, { useState } from 'react'
import { toast } from 'react-toastify';
import home1 from '../../images/home1.jpg'
import config from '../config';
import { useNavigate } from 'react-router-dom';
function CreateAdmin() {
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        city: "",
        compname: "",
        phone: ""
    });
    const [error, setError] = useState({
        firstName: "",
        lastName: "",
        email: "",
        city: "",
        compname: "",
        phone: ""
    });
    const navigate = useNavigate()
    const [status, setStatus] = useState(false);
    const validationfun = (e) => {
        e.preventDefault();

        console.log(status);
        if (!status) {
            if (data.firstName === "" || data.firstName === " " || data.firstName.indexOf(" ") === 0) {
                error.firstName = "Please Enter Correctly Name";
                setError({ ...error })
                setStatus(false)
            }
            else {
                setStatus(true)
                error.firstName = ""
                setError({ ...error })
            }
            if (data.lastName === "" || data.lastName === " " || data.lastName.indexOf(" ") === 0) {
                error.lastName = "Please Enter Correctly Name"
                setError({ ...error }); setStatus(false)
            }
            else {
                setStatus(true)
                error.lastName = ""
                setError({ ...error })
            }
            if (data.email.length === 0 || data.email.indexOf(" ") === 0
                || data.email.indexOf("@") <= 0) {
                error.email = "Enter Email is Incorrect"
                setError({ ...error })
                setStatus(false)
            }
            else {
                error.email = "";
                setError({ ...error })
                setStatus(true)
            }
            if (data.city === "" || data.city.indexOf(" ") === 0) {
                error.city = "please Enter correct city name";
                setError({ ...error })
                setStatus(false)
            }
            else {
                error.city = "";
                setError({ ...error })
                setStatus(true)
            }
            if (data.compname === "" || data.compname.indexOf(" ") === 0) {
                error.compname = "please Enter correct city name";
                setError({ ...error })
                setStatus(false)
            }
            else {
                error.compname = "";
                setError({ ...error })
                setStatus(true)
            }
            if (data.phone === "" || data.phone.indexOf(" ") === 0 ||
                data.phone.length < 10 || data.phone.length > 10) {
                error.phone = "please Enter correct city name";
                setError({ ...error })
                setStatus(false)
            }
            else {
                error.phone = "";
                setError({ ...error })
                setStatus(true)
            }
        }
        else {
            if (status === true) {
                const url = config.serverURL + "/admin/newconnection/create"

                axios.post(url, data)
                    .then(res => {
                        toast.success(" You have Successfly Registered. ")
                        alert("your Password is Shared on regsisted email");
                        toast.info("Now can log in");
                        navigate("/signin")
                    })
                    .catch((err) => {
                        toast.error(" we have some issue");
                        alert(" Email id is All ready Registered.")
                        navigate("/")
                    })
            }
        }
    }
    return (
        // <div className='bgImg'>
        <div className='bgImg'>
            <img src={home1} style={{ width: "100%", height: "800px" }} />
            <div className='first-text'>
                <span className='first-text1' >Create Admin</span>
                <form className='container'>
                    <label className='label-text' >Full Name :</label>
                    <span style={{ "color": "red", fontSize: "15px" }}>* {" "}{error.firstName}
                    </span><br></br>
                    <input type={'text'}
                        value={data.firstName}
                        onChange={(e) => {
                            setData({ ...data, firstName: e.target.value })
                        }}
                        style={Styles.forminput}
                        placeholder="First Name"></input>
                    <span style={{ "color": "red", fontSize: "15px" }}> {error.lastName}</span>
                    <input type={'text'}
                        value={data.lastName}
                        onChange={(e) => {
                            setData({ ...data, lastName: e.target.value })
                        }}
                        style={Styles.forminput}
                        placeholder="Last Name"></input><br></br>

                    <label className='label-text'>Email :</label>
                    <span style={{ "color": "red", fontSize: "15px" }}>* {" "}{error.email}
                    </span><br></br>
                    <input type={'email'}
                        value={data.email}
                        onChange={(e) => {
                            setData({ ...data, email: e.target.value })
                        }}
                        style={Styles.forminput}
                        placeholder="xyz@gmail.com"></input><br></br>

                    <label className='label-text'>Phone Number :</label>
                    <span style={{ "color": "red", fontSize: "15px" }}>* {" "}{error.phone}
                    </span><br></br>
                    <input type={'number'}
                        value={data.phone}
                        onChange={(e) => {
                            setData({ ...data, phone: e.target.value })
                        }}
                        style={Styles.forminput}
                        placeholder="phone number"></input><br></br>

                    <label className='label-text'>Company Name :</label>
                    <span style={{ "color": "red", fontSize: "15px" }}>* {" "}{error.compname}
                    </span><br></br>
                    <input type={'text'}
                        value={data.compname}
                        onChange={(e) => {
                            setData({ ...data, compname: e.target.value })
                        }}
                        style={Styles.forminput}
                        placeholder="Company Name "></input><br></br>


                    <label className='label-text'>City Name :</label>
                    <span style={{ "color": "red", fontSize: "15px" }}>* {" "}{error.city}
                    </span><br></br>
                    <input type={'text'}
                        value={data.city}
                        onChange={(e) => {
                            setData({ ...data, city: e.target.value })
                        }}
                        style={Styles.forminput}
                        placeholder="pune"></input><br></br>
                    <button
                        onClick={validationfun}
                        style={{ marginTop: "10px" }}
                        type='submit'
                        className="btn btn-primary">
                        Create Account</button>
                </form>
            </div>
        </div>
    )
}

const Styles = {
    forminput: {
        margin: "5px",
        borderRadius: "7px",
        width: "inherit",
        height: "45px",
        padding: "10px"
    }
}

export default CreateAdmin