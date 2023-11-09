import "@/components/Input/Input.css";
import Button from "@/components/Button";
import { MdSearch } from "react-icons/md";
import Icon from "../Icon";

const Input = ({ type = "text", placeholder, withButton = false }) => (
  <div className="wrapper">
    <input className="input" type={type} placeholder={placeholder} />
    {withButton && (
      <Button className="button">
        <Icon icon={MdSearch} />
      </Button>
    )}
  </div>
);

export default Input;
