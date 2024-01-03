import { Link, useLocation } from "react-router-dom";
import Icon from "@/components/Icon";

const NavLinkBox = ({ pathName, children, icon, colorIcon, colorText }) => {
  const location = useLocation();

  const isActive = location.pathname === pathName;

  return (
    <div
      className={`flex items-center gap-2 transition ${
        isActive ? "text-[#61dbfb]" : ""
      }`}
    >
      <Icon icon={icon} color={colorIcon} />
      <Link to={pathName} className={`text-${colorText} text-sm md:text-base`}>
        {children}
      </Link>
    </div>
  );
};
export { NavLinkBox };
