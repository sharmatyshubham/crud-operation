import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Main() {
  const [users, setUsers] = useState([]);
  const [userEmail, setUserEmail] = useState("");
  const navigate = useNavigate();

  function handleEmailChange(e) {
    setUserEmail(e.target.value);
  }
  function handleGetStartedClick() {
    axios({
      method: "get",
      url: "http://127.0.0.1:5000/users",
    }).then((response) => {
      for (var user of response.data) {
        if (user.Email === userEmail) {
          navigate("/Login");
          break;
        } else {
          navigate("/Unregister");
        }
      }
    });
  }

  return (
    <div>
      <h1>Authentigetion</h1>
      <input
        type="email"
        placeholder="@gmai.com....."
        onChange={handleEmailChange}
      ></input>
      <button type="submit" onClick={handleGetStartedClick}>
        Login
      </button>
    </div>
  );
}
