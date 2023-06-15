import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Footer from "src/components/footer/footer";
import Header from "src/components/header/Header";
import NavBar from "src/components/navbar/NavBar";

export default function Root() {
  return (
    <Fragment className="flex w-4/5 mx-auto">
      <Header />
      <NavBar />
      <Outlet />
      <Footer />
    </Fragment>
  );
}
