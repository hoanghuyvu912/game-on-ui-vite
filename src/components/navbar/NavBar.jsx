import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function NavBar(props) {
  const [active, setActive] = useState(null);

  const navigate = useNavigate();

  const cartQuantity = useSelector((state) => state.cart.totalQuantity);

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

  return (
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
        {renderNavItem}
      </div>
      <div className="bg-red-500 w-96 h-96">Cart</div>
    </nav>
  );
}
