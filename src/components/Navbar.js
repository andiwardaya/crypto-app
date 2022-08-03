import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MenuIcon, XIcon } from "@heroicons/react/solid";
import ToogleTheme from "./ToogleTheme";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-div flex items-center justify-between font-semibold py-3 mb-5 max-w-6xl mx-auto">
      <Link to="/">
        <h1 className="font-bold uppercase">WardayaCrypto</h1>
      </Link>
      <div className="hidden md:block">
        <ToogleTheme />
      </div>
      <div className="hidden md:block">
        <Link to="/signin" className="p-4 hover:text-blue-400">
          Sign In
        </Link>
        <Link to="/signup" className="button">
          Sign Up
        </Link>
      </div>
      {/* MENU ICON */}
      <div
        className="cursor-pointer block md:hidden z-10"
        onClick={() => {
          setOpen(!open);
        }}
      >
        {open ? <XIcon className="w-8" /> : <MenuIcon className="w-8" />}
      </div>
      {/* MOBILE MENU */}
      <div
        className={`md:hidden fixed top-16 flex flex-col ${
          open ? "left-0" : "left-[100%]"
        }  items-center justify-between w-full h-[90%] bg-primary ease-in duration-300 z-10`}
      >
        <ul className="w-full p-4">
          <li className="border-b py-6">
            <Link to="/">Home</Link>
          </li>
          <li className="border-b py-6">
            <Link to="/">Account</Link>
          </li>
          <li className="border-b py-6">
            <ToogleTheme />
          </li>
        </ul>
        <div className="flex flex-col w-full p-4 ">
          <Link to="/signin">
            <button className="bg-gray-200 w-full py-1 rounded-md shadow-xl my-3 text-gray-600">
              Sign In
            </button>
          </Link>
          <Link to="/signup">
            <button className="bg-blue-500 w-full py-1 rounded-md shadow-xl my-3 text-gray-300">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
