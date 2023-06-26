import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { notification } from "antd";
import { MaLoaiNguoiDung } from "../enums/common";

export default function AdminGuard() {
  const userInfo = useSelector((state) => state.authentication.userInfo);

  const navigate = useNavigate();

  useEffect(() => {
    if (!userInfo) {
      return navigate("/login");
    }

    if (userInfo && !userInfo.roles.includes("ROLE_ADMIN")) {
      alert("Access denied!");

      return navigate("/");
    }
  }, []);

  return <Outlet />;
}
