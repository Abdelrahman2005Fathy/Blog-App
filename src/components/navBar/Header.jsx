import Logo from "./Logo";
import SwitchTheme from "./SwitchTheme";
import SearchBar from "../navBar/SearchBar"
const Header = ({ setSearchTerm, resetSearch })=>{
    return(
      <div className="flex items-center justify-center w-[1830px] h-[100px] gap-6">
          <div className="flex items-center w-[1130px] h-[36px] gap-[118px]">
            <Logo resetSearch={resetSearch}/>
            <SearchBar setSearchTerm={setSearchTerm} resetSearch={resetSearch}/>
          </div>
          <SwitchTheme/>
      </div>
    );
};
export default Header;