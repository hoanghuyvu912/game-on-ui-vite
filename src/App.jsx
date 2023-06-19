// import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./pages/root/Root";
import Home from "./pages/homepage/Home";
import GameStore from "./pages/game-store/GameStore";
import GameLibrary from "./pages/game-library/GameLibrary";
import Game from "./pages/game-detail/Game";
import SignUp from "./pages/sign-up/SignUp";
import SignIn from "./pages/sign-in/SignIn";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/store", element: <GameStore /> },
        { path: "/library", element: <GameLibrary /> },
        { path: "/game/:gameId", element: <Game /> },
      ],
    },
    {
      path: "/sign-up",
      element: <SignUp />,
    },
    {
      path: "/sign-in",
      element: <SignIn   />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
