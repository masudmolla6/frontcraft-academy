import React, { useContext, useState } from 'react';
import { Link, NavLink, Navigate } from 'react-router-dom';
import { TfiBook,TfiAlignRight,TfiClose ,TfiUser} from "react-icons/tfi";
import DarkMode from '../DarkMode/DarkMode';
import { AuthContext } from '../../Provider/AuthProvider';

const Header = () => {
  const [nav, setNav] = useState(false);
  const { user, logOut } = useContext(AuthContext);

  
    const handleLogout = () => {
      logOut()
        .then(() => {})
        .then((error) => console.error(error));
    };

  console.log(user);

  const handleUserInfo = () => {
    <Navigate to='/user'></Navigate>
  }

    const handleNavigation = () => {
        setNav(!nav);
    }
  return (
    <div className="sticky top-0 z-30">
      <div className="navbar bg-neutral text-neutral-content flex justify-between w-full px-12">
        <div className="w-full">
          <TfiBook className="text-3xl text-emerald-400"></TfiBook>
          <h3 className="pl-4">
            <span className="text-xl text-orange-500">Front</span>
            <span className="text-xl text-green-400">Craft</span>
          </h3>
        </div>

        {/* Desktop Nav menu*/}
        <div className="w-full justify-end items-center hidden md:flex">
          <ul className="flex">
            <li className="px-4 text-xl text-white hover:text-orange-500">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? " border-b-2 border-emerald-500 px-6 rounded-xl flex items-center"
                    : undefined
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="px-4 text-xl text-white hover:text-orange-500">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? " border-b-2 border-emerald-500 px-6 rounded-xl flex items-center"
                    : undefined
                }
                to="/courses"
              >
                Courses
              </NavLink>
            </li>
            <li className="px-4 text-xl text-white hover:text-orange-500">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? " border-b-2 border-emerald-500 px-6 rounded-xl flex items-center"
                    : undefined
                }
                to="/blog"
              >
                Blog
              </NavLink>
            </li>
            <li className="px-4 text-xl text-white hover:text-orange-500">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? " border-b-2 border-emerald-500 px-6 rounded-xl flex items-center"
                    : undefined
                }
                to="/faq"
              >
                FAQ
              </NavLink>
            </li>
            <li className="px-4 text-xl text-white hover:text-orange-500">
              {user ? (
                <NavLink
                  onClick={handleLogout}
                  className={({ isActive }) => (isActive ? "" : undefined)}
                >
                  Logout
                </NavLink>
              ) : (
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? " border-b-2 border-emerald-500 px-6 rounded-xl flex items-center justify-center"
                      : undefined
                  }
                  to="/login"
                >
                  LogIn
                </NavLink>
              )}
            </li>
            <li className="px-2 text-xl text-white hover:text-orange-500">
              <DarkMode></DarkMode>
            </li>
            {user && (
              <li
                className="px-2 text-xl text-white hover:text-orange-500 flex justify-center items-center tooltip tooltip-left"
                data-tip={user?.email}
              >
                <Link
                  className="border rounded-full p-2 hover:bg-sky-400"
                  to="user"
                >
                  {" "}
                  <TfiUser className=""></TfiUser>
                </Link>
              </li>
            )}
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
              {user && (
                <li
                  className="px-2 text-xl text-white hover:text-orange-500 flex justify-center items-center tooltip tooltip-left"
                  data-tip={user?.email}
                >
                  <Link
                    className="border rounded-full p-2 hover:bg-sky-400"
                    to="user"
                  >
                    {" "}
                    <TfiUser className=""></TfiUser>
                  </Link>
                </li>
              )}
            </li>
            <li className="py-2 border-b rounded-xl hover:bg-blue-400 duration-300 hover:text-black text-white w-full text-center border-gray-600">
              <DarkMode></DarkMode>
            </li>
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
              {user ? (
                <NavLink
                  onClick={handleLogout}
                  className={({ isActive }) => (isActive ? "" : undefined)}
                >
                  Logout
                </NavLink>
              ) : (
                <NavLink
                  className={({ isActive }) =>
                    isActive ? " text-amber-600" : undefined
                  }
                  to="/login"
                >
                  LogIn
                </NavLink>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;