import { useParams, useNavigate } from "react-router-dom";
import Button from "../../components/button";
import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import config from "../config";

function UpdateService() {
  //get id from url
  const params = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState({});
  useEffect(() => {
    console.log(params.id);
    servicelist();
  }, []);

  const servicelist = async () => {
    const url = config.serverURL + `/admin/services/${params.id}`;
    axios.get(url).then(response => {
      setData(response.data);
    });
  };
  function updateservice(id) {
    //url to call service api
    const url = config.serverURL + `/admin/services/${id}`;

    //axios api call
    axios.put(url, data).then(response => {
      const result = response.data;
      console.log("result", result);

      if ((result["status"] = "success")) {
        toast.success("Service Updated succcessfully!!");
        navigate("/services-list");
      } else {
        toast.error("Service cannot be updated");
      }
    });
  }

  return (
    <div className="container" style={{ marginTop: 20 }}>
      <h3
        style={{
          textAlign: "center",
          marginBottom: 50,
          fontFamily: "revert-layer"
        }}
      >
        {" "}Update Service : {data.serviceName}
      </h3>

      <div className="row">
        <div
          className="col"
          style={{ borderRightStyle: "solid", borderRightColor: "lightgray" }}
        >
          <div className="mb-3">
            <label>Service Title</label>
            <input
              onChange={e => {
                setData({ ...data, serviceName: e.target.value });
              }}
              type="text"
              value={data.serviceName}
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label>Short Description</label>
            <textarea
              onChange={e => {
                setData({ ...data, shortDesc: e.target.value });
              }}
              rows={2}
              value={data.shortDesc}
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label>Long Desription</label>
            <textarea
              onChange={e => {
                setData({ ...data, longDesc: e.target.value });
              }}
              rows={6}
              value={data.longDesc}
              className="form-control"
            />
          </div>
        </div>

        <div className="col">
          <div className="mb-3">
            <label>Service Charge</label>
            <input
              onChange={e => {
                setData({ ...data, serviceCharge: e.target.value });
              }}
              type="number"
              value={data.serviceCharge}
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label>Service Tax</label>
            <input
              onChange={e => {
                setData({ ...data, serviceTax: e.target.value });
              }}
              type="number"
              value={data.serviceTax}
              className="form-control"
            />
          </div>
        </div>
      </div>

      <div className="row">
        <Button onClick={() => updateservice(data.id)} title="Update " />
      </div>
    </div>
  );
}

export default UpdateService;
