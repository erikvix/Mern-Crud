import { createBrowserRouter } from "react-router-dom";
import App from "@/App.jsx";
import UserList from "@/pages/UserList.jsx";
import Dasboard from "@/pages/Dasboard.jsx";
import CreateUser from "@/pages/CreateUser.jsx";
import Settings from "../pages/Settings";
import Home from "../pages/Home";
import Auth from "../pages/Auth";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <UserList />,
      },
      {
        path: "/Add",
        element: <CreateUser />,
      },
      {
        path: "Dashboard",
        element: <Dasboard />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
    ],
  },
  {
    path: "home",
    element: <Home />,
  },
  {
    path: "auth",
    element: <Auth />,
  },
]);

export { router };
