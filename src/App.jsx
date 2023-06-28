import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./pages/root/Root";
import Home from "./pages/homepage/Home";
import GameStore from "./pages/game-store/GameStore";
import GameLibrary from "./pages/game-library/GameLibrary";
import Game from "./pages/game-detail/Game";
import SignUp from "./pages/sign-up/SignUp";
import SignIn from "./pages/sign-in/SignIn";
import CartDetails from "./pages/cart-details/CartDetails";
import Admin from "./pages/admin-page/AdminPage";
import Receipt from "./pages/receipt/Receipt";
import ReceiptDetail from "./pages/receipt-detail/ReceiptDetail";
import User from "./pages/user-info/User";
import UserDetail from "./pages/user-info/UserDetail";
import AuthGuard from "./guards/auth.guard";
import NoAuthGuard from "./guards/no-auth.guard";
import AdminGuard from "./guards/admin.guard";
import Developers from "./pages/developers/Developers";
import Publishers from "./pages/publisher/Publishers";
import { Suspense } from "react";
import { LoadingProvider } from "./context/LoadingContext";
import AccountInfo from "./pages/user-info/AccountInfo";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/store", element: <GameStore /> },
        { path: "/game/:gameId", element: <Game /> },
        { path: "/account-info", element: <AccountInfo /> },
        {
          path: "/",
          element: <AuthGuard />,
          children: [
            { path: "/library", element: <GameLibrary /> },
            { path: "/cart", element: <CartDetails /> },
          ],
        },
      ],
    },
    {
      path: "/admin",
      element: <Admin />,
      children: [
        {
          path: "/admin/",
          element: <AdminGuard />,
          children: [
            { path: "/admin/developers-management", element: <Developers /> },
            { path: "/admin/publishers-management", element: <Publishers /> },
            { path: "/admin/receipts-management", element: <Receipt /> },
            {
              path: "/admin/receipts-management/:receiptId",
              element: <ReceiptDetail />,
            },
            { path: "/admin/users-management", element: <User /> },
            {
              path: "/admin/users-management/:userId",
              element: <UserDetail />,
            },
          ],
        },
      ],
    },
    {
      path: "/",
      element: <NoAuthGuard />,
      children: [
        {
          path: "/sign-up",
          element: <SignUp />,
        },
        {
          path: "/sign-in",
          element: <SignIn />,
        },
      ],
    },
  ]);

  return (
    <Suspense fallback={<></>}>
      <LoadingProvider>
        <RouterProvider router={router} />
      </LoadingProvider>
    </Suspense>
  );
}

export default App;
