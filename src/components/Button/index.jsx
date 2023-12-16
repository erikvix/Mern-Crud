import { Link } from "react-router-dom";
import "@/components/Button/Button.css";

const Button = ({
  children = "default",
  textClass = "text",
  pathName,
  className,
  onClick,
}) => {
  return (
    <button onClick={onClick} className={className}>
      <Link className={textClass} to={pathName}>
        {children}
      </Link>
    </button>
  );
};

export default Button;
