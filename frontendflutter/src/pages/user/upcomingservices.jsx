const UpcomingServices = () => {
  return (
    <>
      <center>
        <h3
          style={{
            color: "green",
            fontFamily: "sans-serif",
            fontWeight: 800,
            marginTop: 15,
            fontStyle: "oblique"
          }}
        >
          Upcoming Flutter Home Services For You !!!
        </h3>
      </center>

      <div className="container">
        <div className="row">
          <div className="col-sm">
            <div className="card" style={{ marginTop: 20, border: 0 }}>
              <img
                className="card-img-top"
                src="https://premend.com/wp-content/uploads/2019/05/Industrial-Construction.jpg"
                alt="Card image cap"
                height="200px"
              />
              <div className="card-body">
                <h5 className="card-title">Industrial Construction</h5>
                <p className="card-text">
                  Construction helps matters when you are new in this field.
                </p>
              </div>
            </div>{" "}
          </div>
          <div className="col-sm">
            <div className="card" style={{ marginTop: 20, border: 0 }}>
              <img
                className="card-img-top"
                src="https://premend.com/wp-content/uploads/2019/06/Labour-Supplier-1.jpg"
                alt="Card image cap"
                height="200px"
              />
              <div className="card-body">
                <h5 className="card-title">CCTV Security Services</h5>
                <p className="card-text">
                  {" "}
                  Protect your living and working area with the help of our Home
                  Security control experts.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div className="card" style={{ marginTop: 20, border: 0 }}>
              <img
                className="card-img-top"
                src="https://premend.com/wp-content/uploads/2019/06/Labour-Supplier.jpg"
                alt="Card image cap"
                height="200px"
              />
              <div className="card-body">
                <h5 className="card-title">Society Maintenance</h5>
                <p className="card-text">
                  {" "}
                  Get maintenance guidance from technical expert for Hitech
                  society
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div className="card" style={{ marginTop: 20, border: 0 }}>
              <img
                className="card-img-top"
                src="https://premend.com/wp-content/uploads/2019/02/Mehandi-Artist.jpg"
                alt="Card image cap"
                height="200px"
              />
              <div className="card-body">
                <h5 className="card-title">Mehandi Artist</h5>
                <p className="card-text">
                  {" "}
                  In Family function beauty matters for every bride hence get
                  our best of Mehandi Artist
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpcomingServices;
