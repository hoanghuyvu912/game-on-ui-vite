import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Footer from "src/components/footer/footer";
import Header from "src/components/header/Header";
import UserForm from "../form/UserForm";

export default function Root() {
  return (
    <Fragment>
      <Header />
      <Outlet />
      <Footer />
      <UserForm />
    </Fragment>
  );
}
