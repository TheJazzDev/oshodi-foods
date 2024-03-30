import { ChevronRight } from "lucide-react";

const Accordion = ({ title, info, isOpen, onClickHandler }) => {
  return (
    <div>
      <div
        onClick={onClickHandler}
        className={`flex w-full p-6 border-b-2 border-b-primary-gray/25 hover:cursor-pointer `}
      >
        <p className="text-primary-blue font-semibold">{title}</p>
        <span
          className={`ml-auto transition-transform ease-in-out duration-400 ${
            isOpen && "rotate-90"
          }`}
        >
          <ChevronRight />
        </span>
      </div>
      {isOpen && <div className="p-4 pt-10 duration-500 ease-out">{info}</div>}
    </div>
  );
};

export default Accordion;
