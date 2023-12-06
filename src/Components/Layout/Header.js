import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const menuClicked = () => {
    setOpen(!open);
  };

  return (
    <>
      <nav className="mt-1 bg-amber-300 bg-cover p-3">
        <div className=" md:flex justify-content-between w-5/6 md:max-w-7xl mx-auto  ">
          <div className="flex justify-content-between ">
            <div>
              <span className="text-green-500 font-bold text-4xl">Bike</span>
              <span className="text-slate-500 font-thin text-3xl">Buddy</span>
            </div>
            <div className="md:hidden mt-2">
              <button onClick={menuClicked}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className={`flex justify-end ${open ? "block" : ""}`}>
            <ul className="md:flex md:space-x-8 space-y-8 md:space-y-0">
              <li className="text-slate-500 text-xl hover:bg-green-500 px-4 py-2 hover:rounded-full hover:text-white transform eas-in-out duration-100 border-green-4">
                <NavLink className="font-body" to={"/"}>
                  HOME
                </NavLink>
              </li>
              <li className="text-slate-500 text-xl hover:bg-green-500 px-4 py-2 rounded-full hover:text-white transform eas-in-out duration-100">
                <NavLink className="font-body" to={"/About"}>
                  ABOUT
                </NavLink>
              </li>
              <li className="text-slate-500 text-xl hover:bg-green-500 px-4 py-2 rounded-full hover:text-white transform eas-in-out duration-100">
                <NavLink className="font-body" to={"/Login"}>
                  LOGIN
                </NavLink>
              </li>
              <li className="px-4 py-2">
                <NavLink to="/bikecart">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-green-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                    />
                  </svg>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
