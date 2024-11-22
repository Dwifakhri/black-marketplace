import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/icons/logo.svg";
import Menu from "../assets/icons/menu.svg";
import Cross from "../assets/icons/cross.svg";
import { useCookie } from "../utils/useCookie";

const Navbar = () => {
  const { cookie, logOut } = useCookie();
  const isLoggedIn = cookie.token === "eyBfhryt678";
  const [open, setOpen] = useState(false);
  const [isOpenDrop, setOpenDrop] = useState(false);

  // const logOuts = () => {
  //   console.log(logOut());
  // };

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
              transition-all overflow-hidden md:overflow-visible duration-500 ease-in-out ${
                open
                  ? "mt-4 max-md:h-none overflow-visible"
                  : "max-h-0 md:max-h-none"
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
              {isLoggedIn ? (
                <div className="relative text-left">
                  <button
                    onClick={() => {
                      setOpenDrop(!isOpenDrop);
                    }}>
                    <img
                      className="w-8 h-8 rounded-full"
                      src="https://via.placeholder.com/32"
                      alt="Profile"
                    />
                  </button>
                  {isOpenDrop && (
                    <div className="absolute left-0 md:right-0 md:left-auto mt-2 w-24 bg-black border border-gray-300 rounded-md shadow-lg z-100">
                      <ul className="bg-black rounded-md">
                        <li className="bg-black rounded-md">
                          <button
                            onClick={logOut}
                            className="block px-4 py-2 text-sm text-white w-full rounded-md">
                            Logout
                          </button>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              ) : (
                <NavLink to="/login">
                  <button className="border border-primary text-primary md:mt-0 px-5 py-2 rounded-md hover:bg-primary hover:text-white">
                    Login
                  </button>
                </NavLink>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
