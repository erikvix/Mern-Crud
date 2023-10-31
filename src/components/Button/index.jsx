import { Link } from "react-router-dom";
import "@/components/Button/Button.css";

const Button = ({ text, pathName }) => {
  return (
    <button>
      <Link className="text" to={pathName}>
        {text}
      </Link>
    </button>
  );
};

export default Button;
