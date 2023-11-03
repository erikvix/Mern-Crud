import Logo from "@/components/Logo";
import NavLink from "@/components/NavLink";
import "./Sidebar.css";

const Sidebar = () => (
  <aside className="sidebar-container">
    <div className="hhh">
      <Logo />
      <p className="center">
        React <span>App</span>
      </p>
    </div>
    <div className="content-sidebar">
      <NavLink />
    </div>
  </aside>
);

export default Sidebar;
