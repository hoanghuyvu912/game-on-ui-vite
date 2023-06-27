import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";

export default function AdminGuard() {
  const userInfo = useSelector((state) => state.authentication.userInfo);

  const navigate = useNavigate();

  useEffect(() => {
    if (!userInfo) {
      return navigate("/sign-in");
    }

    if (userInfo && !userInfo.roles.includes("ROLE_ADMIN")) {
      alert("Access denied!");

      return navigate("/");
    }
  }, [userInfo]);

  return <Outlet />;
}
