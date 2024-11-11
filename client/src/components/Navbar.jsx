import { useState } from "react";
import Logo from "../assets/icons/logo.svg";
import Menu from "../assets/icons/menu.svg";
import Cross from "../assets/icons/cross.svg";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="top-0 absolute w-full bg-black">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center py-5">
          <div className="flex justify-between items-center w-full md:w-auto">
            <img src={Logo} alt="logo" />
            <div
              className="block md:hidden cursor-pointer hover:opacity-80"
              onClick={() => setOpen(!open)}>
              <img src={open ? Cross : Menu} alt="action" />
            </div>
          </div>
          <ul
            className={`flex flex-col md:flex-row gap-y-5 md:gap-x-5 lg:gap-x-[5rem] items-start md:items-center w-full md:mt-0 md:ml-[5rem] 
              transition-all overflow-hidden duration-500 ease-in-out ${
                open ? "mt-4 max-md:h-none" : "max-h-0 md:max-h-none"
              }`}>
            <li>
              <p className="cursor-pointer hover:text-primary">Market Place</p>
            </li>
            <li>
              <p className="cursor-pointer hover:text-primary">About</p>
            </li>
            <li>
              <p className="cursor-pointer hover:text-primary">Contact</p>
            </li>
            <li className="md:ml-auto">
              <button className="border border-primary text-primary md:mt-0 px-5 py-2 rounded-md hover:bg-primary hover:text-white">
                Login
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
