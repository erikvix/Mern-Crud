import { Link } from "react-router-dom";

const Button = ({
  children = "default",
  textClass = "font-semibold text-white dark:text-slate-900",
  pathName,
  className = "bg-[#61dbfb] text-sm md:text-lg px-3 md:px6 py-0 rounded-3xl shadow-md border dark:border-slate-800 ease-in-out duration-300 hover:border-sky-400",
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
