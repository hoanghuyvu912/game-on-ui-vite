import React from "react";
import { useSelector } from "react-redux";

export default function GameLibrary() {
  const isLoggedIn = useSelector(
    (state) => state.authentication.isAuthenticated
  );

  const loggedInUserId = useSelector((state) => state.authentication.userId);
  console.log(loggedInUserId);

  return (
    <div>
      Game Library
      {isLoggedIn && <p>Logged in !</p>}
    </div>
  );
}
