import { Link } from "react-router-dom";
import "@/components/Button/Button.css";

const Button = ({ children = "default", pathName, className, onClick }) => {
  return (
    <button onClick={onClick} className={className}>
      <Link className="text" to={pathName}>
        {children}
      </Link>
    </button>
  );
};

export default Button;
