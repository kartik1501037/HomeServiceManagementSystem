// import { StyleSheet, Text, View } from 'react-native'
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import config from "../config";
export default function ShowAllBookedServices() {
  const [Orders, SetOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    orderlist();
    changestatus();
  }, []);

  const orderlist = () => {
    const url = config.serverURL + `/admin/orders/showorders`;

    axios.get(url).then((response) => {
      const result = response.data;
      console.log(result);

      SetOrders(result);
    });
  };

  const changestatus = (id) => {
    console.log(id);

    const url = config.serverURL + `/admin/orders/updatestatus/${id}`;

    const body = {};
    axios.put(url, body).then((response) => {
      const result = response.data;
      console.log(result);
    });
    //orderlist();
  };

  const pending = () => {
    navigate("/showpending");
  };
  const completed = () => {
    navigate("/showcompleted");
  };

  return (
    <div className="container">
      <h1 style={{ textAlign: "center", color: "navy", marginTop: 30 }}>
        Services Booked{" "}
      </h1>
      <table className="table table-striped" style={{ marginTop: 30 }}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Customer Name</th>
            <th>Service Name</th>
            <th>Employee Name</th>
            <th>Order Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {Orders.map((order) => {
            return (
              <tr>
                <td>{order.id}</td>
                <td>{order.user.firstName}</td>
                <td>{order.service.serviceName}</td>
                <td>{order.emp.firstName}</td>
                <td>{order.status}</td>

                <td>
                  <button
                    onClick={() => changestatus(order.id)}
                    style={styles.button}
                    className="btn btn-sm btn-success"
                  >
                    Change Status
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div>
        <button onClick={pending} style={styles.Button} className="">
          Show Pending
        </button>

        <button onClick={completed} style={styles.Button} className="">
          Show Completed
        </button>
      </div>
    </div>
  );
}

const styles = {
  h3: {
    textAlign: "center",
    margin: 20
  },
  Button: {
    position: "relative",
    width: "12%",
    height: 40,
    backgroundColor: "navy",
    color: "white",
    borderRadius: 5,
    border: "none",
    marginTop: 10,
    marginLeft: 20
  }
};
