import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/plain.css";

const PhoneInputField = ({ value, onChangeHandler, id, name }) => {
  return (
    <div className="flex flex-col ">
      <label
        htmlFor="number"
        className="after:content-['*'] after:font-bold after:text-primary-red font-bold mb-1"
      >
        Phone
      </label>
      <PhoneInput
        country={"us"}
        value={value}
        id={id}
        name={name}
        onChange={onChangeHandler}
        placeholder="Your Phone Number"
        inputClass="phoneInput"
        buttonClass="rounded-tl-lg rounded-bl-lg"
        buttonStyle={{
          border: "none",
        }}
      />
    </div>
  );
};

export default PhoneInputField;
