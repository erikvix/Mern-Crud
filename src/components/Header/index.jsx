import User from "@/components/User";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import Logo from "@/components/Logo";
import NavLink from "@/components/NavLink";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex items-center px-4 py-8 justify-between md:flex md:justify-end">
      <div className="flex items-center gap-2">
        <IoMenu
          className="flex md:hidden cursor-pointer"
          onClick={handleOpenSidebar}
        />
        <Logo className={"w-10"} />
        <span>React App</span>
      </div>
      {isOpen && (
        <aside className="fixed top-20 md:flex flex-col bg-[#0f172a] w-48">
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
