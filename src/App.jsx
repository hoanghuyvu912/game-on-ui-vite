// import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./pages/root/Root";
import Home from "./pages/homepage/Home";
import GameStore from "./pages/game-store/GameStore";
import GameLibrary from "./pages/game-library/GameLibrary";
import Game from "./pages/game-detail/Game";
import SignUp from "./pages/sign-up/SignUp";
import SignIn from "./pages/sign-in/SignIn";
import CartDetails from "./pages/cart-details/CartDetails";
import Admin from "./pages/admin-page/Admin";
import Developer from "./pages/developer/Developers";
import Receipt from "./pages/receipt/Receipt";
import ReceiptDetail from "./pages/receipt-detail/ReceiptDetail";
import User from "./pages/user-info/User";
import UserDetail from "./pages/user-info/UserDetail";
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
        { path: "/cart", element: <CartDetails /> }
      ],
    },
    {
      path: "/admin",
      element: <Admin />,
      children: [
        { path: "/admin/developer", element: <Developer /> },
        { path: "/admin/receipt", element: <Receipt /> },
        { path: "/admin/receipt/:receiptId", element: <ReceiptDetail /> },
        { path: "/admin/user", element: <User /> },
        { path: "/admin/user/:userId", element: <UserDetail /> }
      ],
    },
    {
      path: "/sign-up",
      element: <SignUp />,
    },
    {
      path: "/sign-in",
      element: <SignIn />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
