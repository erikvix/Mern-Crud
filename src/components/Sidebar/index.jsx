import Logo from "@/components/Logo";
import NavLink from "@/components/NavLink";

const Sidebar = () => (
  <aside className="hidden md:flex flex-col shadow-xl bg-white dark:bg-slate-900 w-48 rounded-e-[2rem]">
    <div className="md:flex flex-col items-center mt-12">
      <Logo />
      <p className="mt-4 font-semibold text-slate-950 dark:text-white">
        React <span className="text-[#61dbfb]">App</span>
      </p>
    </div>
    <div className="p-4">
      <NavLink />
    </div>
  </aside>
);

export default Sidebar;
