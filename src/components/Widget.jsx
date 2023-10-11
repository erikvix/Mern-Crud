import React from "react";
import "./Widget.css";
import { Link, useLocation } from "react-router-dom";
import { MdDashboard, MdPerson } from "react-icons/md";

const Widget = ({ title, children }) => {
  const location = useLocation();

  return (
    <section className="widget-container">
      <div className="widget-items">
        <div className="widget-box">
          <div
            className={`widget-dashboard ${
              location.pathname === "/dashboard" ? "active" : ""
            }`}
          >
            <MdDashboard
              size="24"
              color={location.pathname === "/dashboard" ? "#61dbfb" : "#fff"}
            />
            <Link to="/dashboard">Dashboard</Link>
          </div>
        </div>
        <div className="widget-box">
          <div
            className={`widget-users ${
              location.pathname === "/" ? "active" : ""
            }`}
          >
            <MdPerson
              size="24"
              color={location.pathname === "/" ? "#61dbfb" : "#fff"}
            />
            <Link to="/">Users List</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Widget;
