import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import config from "../config";
const ShowAllFeedback = () => {
  const [Feedbacks, setFeedbacks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    feedbacklist();
  }, []);

  const feedbacklist = () => {
    const url = config.serverURL + `/admin/employee/showfeedback`;

    axios.get(url).then((response) => {
      const res = response.data;
      console.log(res);
      setFeedbacks(res);
    });
  };

  return (
    <div className="container" style={{ marginTop: 30 }}>
      <h1 style={{ textAlign: "center", color: "navy" }}>Feedback List</h1>
      <table className="table table-striped" style={{ marginTop: 30 }}>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Title</th>
            <th>Feedback</th>
          </tr>
        </thead>
        <tbody>
          {Feedbacks.map((Feedback) => {
            console.log("all feedbacks" + Feedback);
            return (
              <tr>
                <td>{Feedback.firstName}</td>
                <td>{Feedback.lastName}</td>
                <td>{Feedback.emailId}</td>
                <td>{Feedback.title}</td>
                <p>{Feedback.message}</p>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ShowAllFeedback;
