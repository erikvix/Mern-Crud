import { NavLinkBox } from "@/components/NavLinkBox";
import { MdDashboard, MdPerson, MdSettings, MdLogout } from "react-icons/md";
import "./NavLink.css";

const navLinks = [
  {
    type: "dashboard",
    text: "Dashboard",
    pathName: "/dashboard",
    icon: MdDashboard,
  },
  {
    type: "users",
    text: "UserList",
    pathName: "/",
    icon: MdPerson,
  },
  {
    type: "users",
    text: "Settings",
    pathName: "/settings",
    icon: MdSettings,
  },
  {
    type: "users",
    text: "Logout",
    pathName: "/logout",
    icon: MdLogout,
  },
];

const NavLink = () => (
  <section className="widget-container">
    <div className="widget-items">
      {navLinks.map((link, index) => (
        <NavLinkBox
          key={index}
          type={link.type}
          pathName={link.pathName}
          icon={link.icon}
        >
          {link.text}
        </NavLinkBox>
      ))}
    </div>
  </section>
);

export default NavLink;
