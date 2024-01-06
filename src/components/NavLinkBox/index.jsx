import { Link, useLocation } from "react-router-dom";
import Icon from "@/components/Icon";

const NavLinkBox = ({ pathName, children, icon, colorIcon, colorText }) => {
  const location = useLocation();

  const isActive = location.pathname === pathName;

  return (
    <div
      className={`flex items-center gap-2 transition  dark:text-white ${
        isActive ? "text-[#61dbfb] dark:text-[#61dbfb]" : "text-gray-800"
      }`}
    >
      <Icon icon={icon} color={colorIcon} />
      <Link
        to={pathName}
        className={`${colorText} dark:text-white ${
          isActive ? "text-[#61dbfb] dark:text-[#61dbfb]" : "text-gray-800"
        } text-sm`}
      >
        {children}
      </Link>
    </div>
  );
};
export { NavLinkBox };
