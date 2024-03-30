const Card = ({ children, url }) => {
  return (
    <div
      className="bg-cover bg-center overflow-hidden rounded-md h-48 sm:h-[24.8rem] hover:cursor-pointer min-w-[8rem] sm:w-[14.75rem] hover:min-w-[12rem] sm:hover:w-[22.5rem] transition-width duration-300 ease-in-out"
      style={{ backgroundImage: `url(${url})` }}
    >
      <div className="bg-primary-gray/65 hover:bg-primary-gray/25 w-full h-full flex items-end justify-center transition-background duration-300 ease-in-out">
        <p className="mb-8 sm:mb-20 text-white text-base sm:text-xl font-medium sm:w-[8.25rem] text-center">
          {children}
        </p>
      </div>
    </div>
  );
};

export default Card;
