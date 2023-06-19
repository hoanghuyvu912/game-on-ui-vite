import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Header.module.css";
import NavBar from "../navbar/NavBar";

export default function Header() {
  const navigate = useNavigate();

  const [active, setActive] = useState(null);

  const navItemArr = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "Store", path: "/store" },
    { id: 4, name: "Library", path: "/library" },
  ];

  const renderNavItem = navItemArr.map((e) => {
    return (
      <div
        key={e.id}
        onClick={() => {
          navigate(e.path);
          setActive(e.id);
        }}
        style={{
          cursor: "pointer",
        }}
        className={`block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 font-bold text-lg ${
          active == e.id && "text-white"
        }`}
      >
        {e.name}
      </div>
    );
  });

  // const [homePage, setHomePage] = useState(null);

  return (
    <Fragment>
      <nav
        id="header"
        className="mx-auto flex items-center justify-between flex-wrap bg-transparent py-3"
      >
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <h1
            id="game-on-header"
            className={`font-bold text-5xl tracking-tight ${classes["game-on-header"]} cursor-pointer transition-all duration-500`}
            onClick={() => {
              navigate("/");
              setActive(null);
            }}
          >
            GAME ON
          </h1>
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="w-full block lg:items-center lg:w-auto">
          {/* <div className="text-sm lg:flex-grow">
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
          >
            Docs
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
          >
            Examples
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
          >
            Blog
          </a>
        </div> */}
          <div>
            <div
              onClick={() => {
                navigate("/sign-in");
              }}
              className="inline-block cursor-pointer text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0 duration-500 mr-3"
            >
              Sign in
            </div>
            <div
              onClick={() => {
                navigate("/sign-up");
              }}
              className="inline-block cursor-pointer text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0 duration-500"
            >
              Sign up
            </div>
          </div>
        </div>
      </nav>
      {/* <NavBar homePage={homePage}/> */}
      <nav className="mx-auto flex items-center justify-between flex-wrap bg-transparent py-4 border-t-2 border-b-2 border-solid border-gray-600">
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">{renderNavItem}</div>
        </div>
      </nav>
    </Fragment>
  );
}
