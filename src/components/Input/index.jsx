import "@/components/Input/Input.css";
import Button from "@/components/Button";
import "./Input.css";
const Input = ({
  id,
  type = "text",
  value,
  placeholder,
  onChange,
  children,
  withButton = false,
}) => (
  <div className="wrapper">
    <input
      className="input"
      id={id}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
    {withButton && <Button className="button">{children}</Button>}
  </div>
);

export default Input;
