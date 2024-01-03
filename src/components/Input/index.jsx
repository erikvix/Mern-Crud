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
  onClick,
}) => (
  <div className="wrapper">
    <input
      className="bg-[#1e293b] rounded-[2rem] p-3 md:w-72 w-60 md:p-4 text-xs md:text-sm"
      id={id}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
    {withButton && (
      <Button
        onClick={onClick}
        className="absolute h-[80%] right-[3%] top-[10%] aspect-[1]"
      >
        {children}
      </Button>
    )}
  </div>
);

export default Input;
