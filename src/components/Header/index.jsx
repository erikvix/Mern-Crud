import User from "@/components/User";
import { IoMenu } from "react-icons/io5";

const Header = () => (
  <header className="flex items-center border px-4 justify-between md:flex md:justify-end">
    <IoMenu className="" />
    <User />
  </header>
);

export default Header;
