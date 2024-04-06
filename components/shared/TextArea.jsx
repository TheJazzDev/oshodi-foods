const TextArea = ({
  name,
  value,
  id,
  label,
  placeholder,
  onChangeHandler,
  rows,
}) => {
  return (
    <div className="flex flex-col ">
      <label
        htmlFor={id}
        className="after:content-['*'] after:font-bold after:text-primary-red font-bold mb-1"
      >
        {label}
      </label>
      <textarea
        id={id}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={onChangeHandler}
        className="bg-[#F6F7FF] rounded-lg  w-full py-2 sm:py-[14px] px-3 sm:px-5 placeholder:text-primary-gray/50 placeholder:font-medium focus:outline-2 focus:outline-primary-gray focus:ring-1 focus:border-primary-gray focus:ring-primary-gray "
        autoComplete="on"
        required
        rows={rows}
      />
    </div>
  );
};

export default TextArea;
