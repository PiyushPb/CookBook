import { CiSearch } from "react-icons/ci";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";

const SecondaryNavbar = () => {
  return (
    <div className="w-full p-5 bg-white flex justify-between items-center relative">
      <div className="">
        <SearchBar />
      </div>
      <div className="absolute right-20 md:right-5">
        <Menu>
          <MenuHandler>
            <div className="w-[50px] h-[50px] rounded-full overflow-hidden">
              <img
                src="https://xsgames.co/randomusers/avatar.php?g=male"
                alt=""
                className="object-cover object-center"
              />
            </div>
          </MenuHandler>
          <MenuList>
            <MenuItem>Menu Item 1</MenuItem>
            <MenuItem>Menu Item 2</MenuItem>
            <MenuItem>Menu Item 3</MenuItem>
          </MenuList>
        </Menu>
      </div>
    </div>
  );
};

const SearchBar = () => {
  return (
    <div className="w-full h-[40px] flex justify-between items-center px-5 gap-2">
      <CiSearch className="text-[18px]" />
      <input
        type="text"
        placeholder="Search recipies"
        className="outline-none border-none"
      />
    </div>
  );
};

export default SecondaryNavbar;
