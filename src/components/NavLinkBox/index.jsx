import { Link, useLocation } from "react-router-dom";
import { MdDashboard, MdPerson } from "react-icons/md";
import "./NavLinkBox.css";

const NavLinkBox = ({ type, pathName, children, icon: Icon }) => {
  const location = useLocation();

  const isActive = location.pathname === pathName;

  return (
    <div className={`widget-${type} ${isActive ? "active" : ""}`}>
      <Icon size="24" color={isActive ? "#61dbfb" : "#fff"} />
      <Link to={pathName}>{children}</Link>
    </div>
  );
};
export { NavLinkBox };
