import clsx from "clsx";

const Button = ({ children, className, variant, type, onClickHandler }) => {
  const baseStyle =
    "border-2 border-transparent text-white py-2 rounded-lg transition-all delay-75 ease-in duration-300 hover:scale-105";

  const variantStyles = {
    primary:
      "bg-primary-red px-4 hover:bg-white hover:text-primary-red hover:border-2 hover:border-primary-gray",
    secondary:
      "bg-primary-blue w-full hover:bg-white hover:text-primary-blue hover:border-2 hover:border-primary-gray",
    services:
      "bg-primary-red w-full sm:w-auto font-semibold px-16 hover:bg-white hover:text-primary-red hover:border-2 hover:border-primary-gray",
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
