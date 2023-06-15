// import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/homepage/Home";
import Root from "./pages/root/Root";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [{ path: "/", element: <Home /> }],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
