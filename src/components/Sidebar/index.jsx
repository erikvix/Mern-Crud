import Logo from "@/components/Logo";
import Widget from "@/components/Widget";
import styles from '@/components/Sidebar/Sidebar.css';

const Sidebar = () => (
  <aside className={styles.mikaelTest}>
    <div className="hhh">
      <Logo />
      <p className="p">
        React <span>App</span>
      </p>
    </div>
    <div className="tt">
      <Widget />
    </div>
  </aside>
);

export default Sidebar;
