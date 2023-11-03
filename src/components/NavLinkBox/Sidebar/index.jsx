import Logo from "@/components/Logo";
import NavLink from "@/components/NavLink";
import styles from "@/components/Sidebar/Sidebar.css";

const Sidebar = () => (
  <aside className={styles.mikaelTest}>
    <div className="hhh">
      <Logo />
      <p className="p">
        React <span>App</span>
      </p>
    </div>
    <div className="tt">
      <NavLink />
    </div>
  </aside>
);

export default Sidebar;
