import { MdDashboard, MdPerson, MdSettings, MdLogout } from "react-icons/md";

const navLinks = [
  {
    type: "dashboard",
    text: "Dashboard",
    pathName: "/dashboard",
    icon: MdDashboard,
  },
  {
    type: "users",
    text: "UserList",
    pathName: "/",
    icon: MdPerson,
  },
  {
    type: "users",
    text: "Settings",
    pathName: "/settings",
    icon: MdSettings,
  },
  {
    type: "users",
    text: "Logout",
    pathName: "/logout",
    icon: MdLogout,
  },
];

export { navLinks };
