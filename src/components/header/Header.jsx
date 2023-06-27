import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Header.module.css";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "src/store/auth-slice";

export default function Header() {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const userInfo = useSelector((state) => state.authentication.userInfo);
  console.log(userInfo);

  const [active, setActive] = useState(null);

  const [dropDownOpen, setDropDownOpen] = useState(false);

  const cartQuantity = useSelector((state) => state.cart.totalQuantity);

  const navItemArr = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "Store", path: "/store" },
    { id: 4, name: "Library", path: "/library" },
  ];

  const renderAuthButtons = userInfo ? (
    <div className="flex items-center gap-2 font-bold text-2xl ">
      <h1>Welcome back, </h1>
      <div
        onClick={() => {
          setDropDownOpen(!dropDownOpen);
        }}
        className="relative"
      >
        <button className="bg-white text-blue-700 font-semibold py-1 px-3 rounded inline-flex items-center hover:bg-gray-400 transition-all duration-150">
          <span className="mr-1">{userInfo.username}</span>
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
          </svg>
        </button>
        <div
          className={`w-full absolute ${
            dropDownOpen ? "block" : "hidden"
          } text-black bg-white rounded mt-1 text-[1rem] transition-all duration-75 z-20`}
        >
          {userInfo.roles.includes("ROLE_ADMIN") && (
            <div
              onClick={() => {
                navigate("/admin");
              }}
              className="p-3 hover:bg-gray-700 hover:rounded hover:text-white transition-all duration-150 cursor-pointer"
            >
              Admin page
            </div>
          )}
          <div className="p-3 hover:bg-gray-700 hover:rounded hover:text-white transition-all duration-150 cursor-pointer">
            Account info
          </div>
          <div
            onClick={() => {
              dispatch(authActions.logout());
            }}
            className="p-3 hover:bg-gray-700 hover:rounded transition-all duration-150 cursor-pointer"
          >
            Logout
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div>
      <div
        onClick={() => {
          navigate("/sign-in");
        }}
        className="inline-block cursor-pointer text-lg px-4 py-2 leading-none rounded text-white hover:border-white hover:border-solid hover:border-[1px] mt-4 lg:mt-0 mr-3"
      >
        Sign in
      </div>
      <div
        onClick={() => {
          navigate("/sign-up");
        }}
        className="inline-block cursor-pointer text-lg px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-blue-700 hover:bg-white mt-4 lg:mt-0 duration-500"
      >
        Sign up
      </div>
    </div>
  );

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
        className={`block mt-4 lg:inline-block lg:mt-0  hover:text-blue-700 mr-4 font-bold text-lg ${
          active == e.id && "text-blue-700 rounded px-2 py-1 bg-white "
        }`}
      >
        {e.name}
      </div>
    );
  });

  return (
    <Fragment>
      <nav
        id="header"
        className="mx-auto flex sm:flex-col sm:items-center md:flex-row md:justify-between bg-transparent py-3"
      >
        <div className="flex sm:flex-col items-center flex-shrink-0 text-white mr-6">
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
        <div className="w-full block lg:items-center lg:w-auto sm:my-3">
          {renderAuthButtons}
        </div>
      </nav>
      <nav className="mx-auto flex items-center justify-between flex-wrap bg-transparent py-1 border-t-2 border-b-2 border-solid border-gray-600">
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto justify-between">
          <div className="text-sm lg:flex-grow">{renderNavItem}</div>
          {userInfo && (
            <div
              onClick={() => {
                navigate("/cart");
              }}
              className="group font-bold text-xl mr-2 relative border-2 border-solid border-white px-12 py-2 rounded-2xl hover:bg-white hover:text-blue-500 transition-all duration-150 cursor-pointer ml-auto"
            >
              Cart
              {cartQuantity > 0 && (
                <div className="absolute text-base right-[-15px] top-[-15px] rounded-full bg-white text-blue-900 w-8 h-8 justify-center items-center flex border-solid border-2 group-hover:bg-blue-700 group-hover:text-white transition:all duration-150">
                  {cartQuantity}
                </div>
              )}
            </div>
          )}
        </div>
      </nav>
    </Fragment>
  );
}
