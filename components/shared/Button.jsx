import clsx from "clsx";

const Button = ({ children, className, variant, type, onClickHandler }) => {
  const baseStyle = "border-2 border-transparent text-white py-2 rounded-lg";

  const variantStyles = {
    primary: "bg-primary-red px-4",
    secondary: "bg-primary-blue w-full",
  };

  const variantStyle = variantStyles[variant] || "";

  const customStyle = clsx(baseStyle, variantStyle, className);

  return (
    <button type={type} onClick={onClickHandler} className={customStyle}>
      {children}
    </button>
  );
};

export default Button;
