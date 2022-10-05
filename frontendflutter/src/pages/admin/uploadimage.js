import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import config from "../config";
import axios from "axios";
import { toast } from "react-toastify";
import Button from "../../components/button";
import { useNavigate } from "react-router-dom";
export default function UploadImage() {
  // used to keep the selected file
  const [file, setFile] = useState("");
  const params = useParams();
  const navigate = useNavigate();

  console.log("params.id", params.id);

  const [MyServices, setMyServices] = useState([]);

  useEffect(() => {
    servicelist();
  }, []);

  const servicelist = () => {
    const url = config.serverURL + `/admin/services/${params.id}`;

    axios.get(url).then(response => {
      const res = response.data;
      console.log(res);
      setMyServices(res);
    });
  };
  const handleimg = e => {
    console.log(e.target.files[0]);
    setFile(e.target.files[0]);
  };

  const uploadImage = () => {
    const formdata = new FormData();

    // add the file
    console.log(file);
    formdata.append("file", file);
    console.log("body", formdata);

    const url = config.serverURL + `/admin/services/${params.id}/upload`;
    axios
      .post(
        url,
        formdata,
        {
          // headers: {
          //'Content-Type': 'multipart/form-data',
          // token: sessionStorage['token'],
          // },
        }
      )
      .then(response => {
        const result = response.data;
        if (result["status"] === "error") {
          toast.error("error while uploading file");
          //navigate('/my-homes')
        } else {
          toast.success("successfully uploaded a file");
          navigate("/services-list");
        }
      });
  };
  return (
    <div className="container">
      <h3 style={{ textAlign: "center", margin: 20 }}>Upload Image</h3>

      <div className="mb-3">
        <label>Select Image</label>
        <input className="form-control" type="file" onChange={handleimg} />
        <Button onClick={uploadImage} title="Upload Photo" />
      </div>
    </div>
  );
}
