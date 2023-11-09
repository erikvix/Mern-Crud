import { NavLinkBox } from "@/components/NavLinkBox";
import { MdDashboard, MdPerson, MdSettings, MdLogout } from "react-icons/md";
import { navLinks } from "@/utils/navLinks";
import "./NavLink.css";
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
