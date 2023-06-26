import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";

export default function AuthGuard() {
  const userInfo = useSelector((state) => state.authentication.userInfo);

  const navigate = useNavigate();

  useEffect(() => {
    if (!userInfo) {
      navigate("/login");
    }
  }, []);

  return <Outlet />;
}
