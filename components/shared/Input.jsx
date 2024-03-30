const Input = ({
  type,
  name,
  value,
  id,
  label,
  placeholder,
  onChangeHandler,
}) => {
  return (
    <div className="flex flex-col ">
      <label
        htmlFor={id}
        className="after:content-['*'] after:font-bold after:text-primary-red font-bold mb-1"
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={onChangeHandler}
        className=" bg-[#F6F7FF] rounded-lg sm:w-[480px] py-2 sm:py-[14px] px-3 sm:px-5 placeholder:text-primary-gray/50 placeholder:font-medium focus:border focus:outline-none focus:ring-1 focus:border-primary-gray focus:ring-primary-gray invalid:text-primary-red focus:invalid:border-primary-red focus:invalid:ring-primary-red  "
        autoComplete="on"
        required
      />
    </div>
  );
};

export default Input;
