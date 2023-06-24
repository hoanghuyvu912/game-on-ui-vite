import Sidebar from "./Sidebar";
import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Header from "src/components/header/Header";

export default function Admin() {
  return (<>
    <Header />
    <div className="flex w-full">

      <Sidebar />
      <div className="w-full">
        <Outlet />
      </div>
    </div>
  </>

  );
}
