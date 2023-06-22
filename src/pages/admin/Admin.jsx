import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Footer from "src/components/footer/footer";
import Header from "src/components/header/Header";

export default function Admin() {
    return (
      <Fragment>
        <Outlet />
      </Fragment>
    );
  }