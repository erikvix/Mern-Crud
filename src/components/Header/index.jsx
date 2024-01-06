import User from "@/components/User";
import { useState } from "react";
import { IoMenu, IoCloseSharp } from "react-icons/io5";

import Logo from "@/components/Logo";
import NavLink from "@/components/NavLink";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex items-center px-4 py-8 justify-between md:flex md:justify-end">
      <div className="text-slate-950 dark:text-white md:hidden flex ease-linear duration-700">
        {isOpen ? (
          <IoCloseSharp
            className="flex cursor-pointer"
            onClick={handleOpenSidebar}
          />
        ) : (
          <IoMenu className="flex cursor-pointer" onClick={handleOpenSidebar} />
        )}
      </div>
      <div className="flex items-center gap-2 md:hidden">
        <Logo className={"w-9"} />
        <span className="text-slate-950 dark:text-white">React App</span>
      </div>
      {isOpen && (
        <aside className="md:hidden fixed top-20 left-0 w-[45%] h-full flex shadow-xl bg-gray-100 dark:border-slate-800 dark:bg-slate-950 flex-col z-10">
          <div className="mt-10 p-4">
            <NavLink />
          </div>
        </aside>
      )}
      <User />
    </header>
  );
};

export default Header;
