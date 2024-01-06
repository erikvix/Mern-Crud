import { Link, useLocation } from "react-router-dom";
import Icon from "@/components/Icon";

const NavLinkBox = ({ pathName, children, icon, colorIcon, colorText }) => {
  const location = useLocation();

  const isActive = location.pathname === pathName;

  return (
    <div
      className={`flex items-center gap-2 transition   ${
        isActive
          ? "text-[#61dbfb] dark:text-[#61dbfb]"
          : "text-gray-400 dark:text-white"
      }`}
    >
      <Icon icon={icon} color={colorIcon} />
      <Link
        to={pathName}
        className={`${colorText}  ${
          isActive
            ? "text-[#61dbfb] dark:text-[#61dbfb]"
            : "text-gray-400 dark:text-white"
        } text-sm`}
      >
        {children}
      </Link>
    </div>
  );
};
export { NavLinkBox };
