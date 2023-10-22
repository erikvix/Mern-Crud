import React from "react";
import "./Widget.css";
import { Link, useLocation } from "react-router-dom";
import { MdDashboard, MdPerson } from "react-icons/md";

const WidgetBox = ({type, text, pathName}) => {
  return(
    <div
      className={`widget-${type} ${
        location.pathname === `${pathName}` ? "active" : ""
      }`}
    >
      {
        type === "dashboard" ?
        <MdDashboard
        size="24"
        color={location.pathname === `${pathName}` ? "#61dbfb" : "#fff"}
      />
      :
      <MdPerson
        size="24"
        color={location.pathname === `${pathName}` ? "#61dbfb" : "#fff"}
      /> 
      }
      <Link to={pathName} >{text}</Link>
  </div>
  )
}
const Widget = () => {
  const widgets = [{
    type: "dashboard",
    text: "Dashboard",
    pathName: "/dashboard"
  },
  {
    type: "users",
    text: "UserList",
    pathName: "/" 
  }
];
  return (
    <section className="widget-container">
      <div className="widget-items">
        {
          widgets.map((widget) =>{
            return(
              <WidgetBox
                type={widget.type}
                text={widget.text}
                pathName={widget.pathName}
              ></WidgetBox>
            )
          })
        }
      </div>
    </section>
  );
};

export default Widget;
