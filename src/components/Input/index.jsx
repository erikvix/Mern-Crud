import "@/components/Input/Input.css";
import Button from "@/components/Button";
import { MdSearch } from "react-icons/md";
import Icon from "../Icon";

const Input = ({ type, placeholder }) => (
  <div className="wrapper">
    <input className="input" type={type} placeholder={placeholder} />
    <Button className="button">
      <Icon icon={MdSearch} />
    </Button>
  </div>
);

export default Input;
