import { Link } from "react-router-dom";
import { MdDashboard, MdPerson } from "react-icons/md";

const WidgetBox = ({ type, pathName, children }) => (
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
      <Link to={pathName}>{children}</Link>
  </div>
);

export { WidgetBox };