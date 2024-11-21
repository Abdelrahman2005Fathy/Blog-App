import { Link } from "react-router-dom";

const SearchBar = ({ setSearchTerm, resetSearch }) => {
    const handleInputChange = (e) => {
      setSearchTerm(e.target.value); // تمرير الكلمة المدخلة
    };
  
    return (
      <div className="flex items-center justify-between w-full h-[36px] gap-[21px] overflow-x-hidden">
        <Link to="/" onClick={resetSearch={resetSearch}} >
          <p className="text-[rgba(59, 60, 74, 1)] inline-block font-sans text-[16px] font-normal leading-[24px] text-center w-[667px] h-[24px] gap-[4px]">
            Home
          </p> 
        </Link>
        <div className="flex items-center bg-[rgba(244,244,245,1)] dark:bg-lightGray dark:text-offWhite w-[166px] h-[36px] p-[8px_16px_8px_8px] gap-3 rounded-tl-[5px] rounded-bl-[0px] rounded-br-[0px] rounded-tr-[0px] text-xs">
          <input
            type="text"
            placeholder="Search"
            onChange={handleInputChange} // إضافة onChange
            className="w-[114px] dark:bg-mediumGray dark:text-offWhite h-[20px] text-[rgba(161, 161, 170, 1)] font-inter text-sm font-normal leading-5 text-left"
          />
          <img src="./src/assets/search-outline.png" alt="search icon" className="w-[16px] h-[16px] dark:text-offWhite" />
        </div>
      </div>
    );
  };
  
  export default SearchBar;
  