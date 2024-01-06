import Button from "@/components/Button";
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
  <div className="max-w-full relative">
    <input
      className=" dark:bg-slate-800 rounded-[2rem] p-3 md:w-72 w-52 md:p-4 text-xs md:text-sm bg-gray-50 border border-gray-300 text-gray-500  focus:ring-blue-500 focus:border-blue-500 block  dark:border-slate-700 dark:placeholder-slate-400 dark:text-slate-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
