import User from "@/components/User";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import Sidebar from "@/components/Sidebar";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex items-center px-4 py-8 justify-between md:flex md:justify-end">
      <IoMenu
        className="flex md:hidden cursor-pointer"
        onClick={handleOpenSidebar}
      />
      {isOpen && <div className="fixedbg-black w-40 h-40"></div>}
      <User />
    </header>
  );
};

export default Header;
