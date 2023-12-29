import logo from "@/assets/react.svg";
import "@/components/Logo/Logo.css";

const Logo = ({ className = "logo" }) => (
  <img className={className} src={logo} alt="" />
);

export default Logo;
