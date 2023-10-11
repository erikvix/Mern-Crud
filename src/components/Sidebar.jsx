import React from "react";
import "./Sidebar.css";
import Logo from "./Logo";
import Widget from "./Widget";

const Sidebar = () => {
  return (
    <aside className="siderbar-container">
      <div className="hhh">
        <Logo />
        <p className="p">
          React <span>App</span>
        </p>
      </div>
      <div className="tt">
        <Widget></Widget>
      </div>
    </aside>
  );
};

export default Sidebar;
