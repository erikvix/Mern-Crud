import { Link } from "react-router-dom";

const Button = ({
  children = "default",
  textClass = "font-semibold text-slate-900",
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
