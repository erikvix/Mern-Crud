import User from "@/components/User";
import { IoMenu } from "react-icons/io5";

const Header = () => (
  <header className="flex items-center px-4 py-8 justify-between md:flex md:justify-end">
    <IoMenu className="flex md:hidden" />
    <User />
  </header>
);

export default Header;
