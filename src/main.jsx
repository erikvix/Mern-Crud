import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import UserList from "./components/pages/UserList.jsx";
import "boxicons";
import "./index.css";
import Dasboard from "./components/pages/Dasboard.jsx";
import CreateUser from "./components/pages/CreateUser.jsx";

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

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
