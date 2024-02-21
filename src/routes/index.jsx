import { createBrowserRouter } from "react-router-dom";
import App from "@/App.jsx";
import UserList from "@/pages/UserList.jsx";
import Dasboard from "@/pages/Dasboard.jsx";
import CreateUser from "@/pages/CreateUser.jsx";
import Settings from "@/pages/Settings";
import Home from "@/pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/dashboard",
    element: <App />,
    children: [
      {
        path: "/dashboard/",
        element: <UserList />,
      },
      {
        path: "/dashboard/add",
        element: <CreateUser />,
      },
      {
        path: "/dashboard/home",
        element: <Dasboard />,
      },
      {
        path: "/dashboard/settings",
        element: <Settings />,
      },
    ],
  },
]);

export { router };
