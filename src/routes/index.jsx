import { createBrowserRouter } from "react-router-dom";
import App from "@/App.jsx";
import UserList from "@/pages/UserList.jsx";
import Dasboard from "@/pages/Dasboard.jsx";
import CreateUser from "@/pages/CreateUser.jsx";

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
    ],
  },
]);

export { router };