import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { TfiBook,TfiAlignRight,TfiClose } from "react-icons/tfi";

const Header = () => {
    const [nav, setNav] = useState(false);
    const handleNavigation = () => {
        setNav(!nav);
    }
    return (
      <div className="navbar bg-neutral text-neutral-content flex justify-between w-full px-12">
        <div className="w-full">
          <TfiBook className="text-3xl text-emerald-400"></TfiBook>
          <h3 className="pl-4">
            <span className="text-xl text-orange-500">Front</span>
            <span className="text-xl text-green-400">Craft</span>
          </h3>
        </div>

        {/* Desktop Nav menu*/}
        <div className="w-full justify-end hidden md:flex">
          <ul className="flex">
            <li className="px-6 text-xl text-white hover:text-orange-500">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "bg-blue-500 px-8 py-1 rounded-full flex items-center"
                    : undefined
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="px-6 text-xl text-white hover:text-orange-500">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "bg-blue-500 px-8 py-1 rounded-full flex items-center"
                    : undefined
                }
                to="/courses"
              >
                Courses
              </NavLink>
            </li>
            <li className="px-6 text-xl text-white hover:text-orange-500">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "bg-blue-500 px-8 py-1 rounded-full flex items-center"
                    : undefined
                }
                to="/blog"
              >
                Blog
              </NavLink>
            </li>
            <li className="px-6 text-xl text-white hover:text-orange-500">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "bg-blue-500 px-8 py-1 rounded-full flex items-center"
                    : undefined
                }
                to="/faq"
              >
                FAQ
              </NavLink>
            </li>
            <li className="px-6 text-xl text-white hover:text-orange-500">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "bg-blue-500 px-8 py-1 rounded-full flex items-center"
                    : undefined
                }
                to="/login"
              >
                LogIn
              </NavLink>
            </li>
          </ul>
        </div>

        {/* mobile nav Icon*/}
        <div className="md:hidden" onClick={handleNavigation}>
          {nav ? (
            <TfiClose className="text-2xl text-emerald-400"></TfiClose>
          ) : (
            <TfiAlignRight className="text-2xl text-emerald-400"></TfiAlignRight>
          )}
        </div>

        {/* mobile nav menu */}

        <div>
          <ul
            className={
              nav
                ? "fixed md:hidden left-0 top-16 w-[60%] h-full border-r border-r-gray-900 bg-sky-950 ease-in-out duration-500"
                : "ease-in-out w-[60%] duration-500 fixed top-16 bottom-0 left-[-100%]"
            }
          >
            <li className="py-2 border-b rounded-xl hover:bg-blue-400 duration-300 hover:text-black text-white w-full text-center border-gray-600">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-amber-600" : undefined
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="py-2 border-b rounded-xl hover:bg-blue-400 duration-300 hover:text-black text-white text-center border-gray-600">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-amber-600" : undefined
                }
                to="/courses"
              >
                Courses
              </NavLink>
            </li>
            <li className="py-2 border-b rounded-xl hover:bg-blue-400 duration-300 hover:text-black text-white text-center border-gray-600">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-amber-600" : undefined
                }
                to="/blog"
              >
                Blog
              </NavLink>
            </li>
            <li className="py-2 border-b rounded-xl hover:bg-blue-400 duration-300 hover:text-black text-white text-center border-gray-600">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-amber-600" : undefined
                }
                to="/faq"
              >
                FAQ
              </NavLink>
            </li>
            <li className="py-2 border-b rounded-xl hover:bg-blue-400 duration-300 hover:text-black  text-white text-center border-gray-600 w-full">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-amber-600" : undefined
                }
                to="/login"
              >
                LogIn
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    );
};

export default Header;