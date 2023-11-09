import { Link, useLocation } from "react-router-dom";
import "./NavLinkBox.css";
import Icon from "@/components/Icon";

const NavLinkBox = ({ type, pathName, children, icon }) => {
  const location = useLocation();

  const isActive = location.pathname === pathName;

  return (
    <div className={`widget-${type} ${isActive ? "active" : ""}`}>
      <Icon icon={icon} />
      <Link to={pathName}>{children}</Link>
    </div>
  );
};
export { NavLinkBox };
