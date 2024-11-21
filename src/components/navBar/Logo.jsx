import { Link } from "react-router-dom";

const Logo = ({ resetSearch }) => {
  const handleLogoClick = () => {
    resetSearch(); 
    
  };

  return (
   <Link to="/" onClick={handleLogoClick} className="flex items-center w-[158px] h-[36px] gap-[55px] ">
      <img src="./src/assets/blog.png" alt="Blog img" className="dark:bg-offWhite rounded-[50%] w-[36px] h-[36px]"/>
      <img src="./src/assets/Blog-T.png" alt="Blog-T"/>
   </Link>
  );
};

export default Logo;
