const Badge = ({ category }) => {
  return (
    <div className="w-[97px] h-[28px] px-[10px] py-[4px] gap-[4px] rounded-tl-md bg-[rgba(75, 107, 251, 0.05)] text-primary-light text-md">
      <p className="dark:text-interactiveBlue w-[77px] h-[20px] font-['Work_Sans'] text-[14px] font-medium leading-[20px] text-left text-[rgb(75,107,251)]">
        {category || "General"}
      </p>
    </div>
  );
};

export default Badge;
