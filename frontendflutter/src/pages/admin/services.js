import { useNavigate } from "react-router-dom";

const Service = () => {
  const navigate = useNavigate();

  const addservices = () => {
    //will transfer to add employee page to add employee details by the admon
    navigate("/add-services");
  };
  const serviceslist = () => {
    //will transfer to add employee page to add employee details by the admon
    navigate("/services-list");
  };

  return (
    <div className="container">
      <h1 style={{ textAlign: "center", color: "navy" }}>Services</h1>
      <div className="row">
        <div
          className="card col mb-4"
          style={{
            margin: 20,
            display: "inline-block",
            cursor: "pointer",
            border: 0,
            marginTop: 70
          }}
        >
          <img
            src="https://icon-library.com/images/home-service-icon/home-service-icon-5.jpg"
            alt="employee image"
            className="rounded mx-auto d-block"
            style={{ height: 300, width: 300, display: "block" }}
          />
          <div className="card-body">
            <button onClick={addservices} style={styles.Button}>
              Add Services
            </button>
          </div>
        </div>
        <div
          className="card col mb-4  "
          style={{
            margin: 20,
            display: "inline-block",
            cursor: "pointer",
            border: 0,
            marginTop: 70
          }}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/306/306458.png"
            alt="list of employee image"
            className="rounded mx-auto d-block"
            style={{ height: 300, width: 300, display: "block" }}
          />
          <div className="card-body" width="300">
            <button onClick={serviceslist} style={styles.Button}>
              Service List
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
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

export default Service;
