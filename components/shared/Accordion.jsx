import { ChevronRight } from "lucide-react";

const Accordion = ({ title, children, isOpen, onClickHandler }) => {
  return (
    <div>
      <div
        onClick={onClickHandler}
        className={`flex w-full p-6 pl-4 border-b-2 border-b-primary-gray/25 hover:cursor-pointer `}
      >
        <p className="text-primary-blue font-semibold">{title}</p>
        <span
          className={`ml-auto transition-transform ease-in-out duration-400 ${
            isOpen && "rotate-90"
          }`}
        >
          <ChevronRight strokeWidth={1.5} />
        </span>
      </div>
      {isOpen && (
        <div className="pt-10 pl-4 duration-500 ease-out text-justify break-normal leading-[30px]">
          {children}
        </div>
      )}
    </div>
  );
};

export default Accordion;
