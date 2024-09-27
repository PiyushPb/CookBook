import React from "react";
import { MdHome, MdInbox, MdPeople, MdStore, MdLogout } from "react-icons/md";
import { BiCategory } from "react-icons/bi";
import { RiAddBoxLine } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

import {
  Card,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";
import Logo from "./Logo";

const menuItems = [
  { name: "Home", icon: <MdHome />, link: "/" },
  { name: "Category", icon: <BiCategory />, link: "/category" },
  { name: "Add New Recipe", icon: <RiAddBoxLine />, link: "/addRecipe" },
  { name: "Profile", icon: <MdPeople />, link: "#" },
  { name: "Settings", icon: <IoSettingsOutline />, link: "#" },
];

const Sidebar = () => {
  return (
    <Card className="h-screen w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
      <div className="mb-2 p-4">
        <Logo />
      </div>
      <div className="flex flex-col justify-between h-full">
        <List>
          {menuItems.map((item, index) => (
            <ListItem key={index}>
              <ListItemPrefix>{item.icon}</ListItemPrefix>
              <Link to={item.link} className="flex-1 text-left">
                {item.name}
              </Link>
              {item.badge && (
                <ListItemSuffix>
                  <Chip
                    value={item.badge}
                    size="sm"
                    variant="ghost"
                    color="blue-gray"
                    className="rounded-full"
                  />
                </ListItemSuffix>
              )}
            </ListItem>
          ))}
        </List>
        <List>
          <ListItem className="cursor-pointer text-red-500 hover:text-red-500 hover:bg-red-100/50">
            <ListItemPrefix>
              <MdLogout />
            </ListItemPrefix>
            <a href="#" className="flex-1 text-left">
              Logout
            </a>
          </ListItem>
        </List>
      </div>
    </Card>
  );
};

export default Sidebar;
