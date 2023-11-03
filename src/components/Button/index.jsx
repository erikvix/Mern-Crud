import { Link } from "react-router-dom";
import "@/components/Button/Button.css";

const Button = ({ children = "default", pathName, className }) => {
  return (
    <button className={className}>
      <Link className="text" to={pathName}>
        {children}
      </Link>
    </button>
  );
};

export default Button;
