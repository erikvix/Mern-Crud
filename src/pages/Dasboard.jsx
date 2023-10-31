import React, { useState, useEffect } from "react";
import axios from "axios";
import { set } from "mongoose";

function Dashboard({UserData}) {
  const [backendData, setBackendData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/api", {
      method: "GET",
    })
      .then((res) =>  res.json())
        .then((data) =>{
          console.log(data, "UserData");
          setBackendData(data)
          // console.log(backendData)
        });
  }, []);

  return (
    <div>
    <h1>Dashboard</h1>

  </div>
  );
}

export default Dashboard;
