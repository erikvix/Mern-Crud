import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";

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
