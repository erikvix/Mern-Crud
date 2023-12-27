import Logo from "@/components/Logo";
import NavLink from "@/components/NavLink";

const Sidebar = () => (
  <aside className="hidden md:flex flex-col bg-[#0f172a] w-48">
    <div className="md:flex flex-col items-center mt-12">
      <Logo />
      <p className="mt-4">
        React <span>App</span>
      </p>
    </div>
    <div className="p-4">
      <NavLink />
    </div>
  </aside>
);

export default Sidebar;
