import "@/components/Input/Input.css";
import Button from "@/components/Button";

const Input = ({
  type = "text",
  placeholder,
  withButton = false,
  children,
}) => (
  <div className="wrapper">
    <input className="input" type={type} placeholder={placeholder} />
    {withButton && <Button className="button">{children}</Button>}
  </div>
);

export default Input;
