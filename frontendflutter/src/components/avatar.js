import React from "react";
import avatar from "../images/avatar.png";
import { useNavigate, useParams } from "react-router-dom";

export default function Avatar(props) {
  const navigate = useNavigate();
  const handleOpenUserMenu = event => {
    //console.log("avatar",params.id)
    const userid = sessionStorage.getItem("user");

    navigate("/userdetails/" + userid);
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
