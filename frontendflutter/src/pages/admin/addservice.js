import { useState } from "react";
import Button from "../../components/button";
import Input from "../../components/input";
import TextArea from "../../components/textArea";
import { toast } from "react-toastify";
import axios from "axios";
import config from '../config'
import { useNavigate } from "react-router-dom";

const AddService = () => {
  const [serviceName, setserviceName] = useState("");
  const [shortDesc, setShortDesc] = useState("");
  const [longDesc, setLongDesc] = useState("");
  const [serviceCharge, setserviceCharge] = useState("");
  const [serviceTax, setServiceTax] = useState(0);

  // used to go to home screen
  const navigate = useNavigate();

  const addservices = () => {
    if (serviceName.length === 0) {
      toast.error("enter serviceTitle");
    } else if (shortDesc.length === 0) {
      toast.error("enter short description");
    } else if (longDesc.length === 0) {
      toast.error("enter long description");
    } else {
      const body = {
        serviceName,
        shortDesc,
        longDesc,
        serviceCharge,
        serviceTax
      };
      console.log(body);

      //url to call service api
      const url = config.serverURL+`/admin/services/addservices`;

      //axios api call
      axios.post(url, body).then(response => {
        const result = response.data;
        console.log(result);

        if ((result["status"] = "success")) {
          toast.success("Service added succcessfully!!");
          navigate("/services-list");
        } else {
          toast.error("Service cannot be added");
        }
      });
    }
  };

  return (
    <div className="container" style={{ marginTop: 20 }}>
      <h3
        style={{
          textAlign: "center",
          marginBottom: 50,
          fontFamily: "revert-layer"
        }}
      >
        {" "}Service
      </h3>

      <div className="row">
        <div
          className="col"
          style={{ borderRightStyle: "solid", borderRightColor: "lightgray" }}
        >
          <Input
            title="Service Title"
            onChange={e => {
              setserviceName(e.target.value);
            }}
          />
          <TextArea
            lines="3"
            title="Short Description"
            onChange={e => {
              setShortDesc(e.target.value);
            }}
          />
          <TextArea
            lines="6"
            title="Long Desription"
            onChange={e => {
              setLongDesc(e.target.value);
            }}
          />
        </div>

        <div className="col">
          <Input
            type="number"
            title="Service Charge"
            onChange={e => {
              setserviceCharge(e.target.value);
            }}
          />
          <Input
            type="number"
            title="Tax"
            onChange={e => {
              setServiceTax(e.target.value);
            }}
          />
        </div>
      </div>

      <div className="row">
        <Button onClick={addservices} title="Add Service" />
      </div>
    </div>
  );
};

export default AddService;
