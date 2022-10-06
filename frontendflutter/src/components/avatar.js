import React, { useEffect } from "react";
import avatar from "../images/avatar.png";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";


export default function Avatar(props) {
  const navigate = useNavigate();
  const signinStatus = useSelector(state => state.authSlice.status);
  useEffect(()=>{
    handleOpenUserMenu()
  },[])
  const handleOpenUserMenu = event => {
    //console.log("avatar",params.id)
    const user = JSON.parse(localStorage.getItem("user_details"));
    if(signinStatus){
      navigate("/userdetails/" + user.id);
    }
  };
  return (
    <div>
      <img
        alt="avatar"
        src={avatar}
        style={{
          width: "50px",
          borderRadius: "65%",
          objectFit: "contain",
          border: "1px solid black"
        }}
        onClick={handleOpenUserMenu}
      />
    </div>
  );
}
