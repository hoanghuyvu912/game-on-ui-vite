import Sidebar from "./Sidebar";
import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import AdminHeader from "src/components/admin-header/AdminHeader";
import Header from "src/components/header/Header";

export default function Admin() {
  return (
    <>
      <AdminHeader />
      <div className="flex">
        <Sidebar />
        <div className="ml-5 mb-5 w-full">
          <Outlet />
        </div>
      </div>
    </>
  );
}
