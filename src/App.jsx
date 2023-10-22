import "./App.css";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { createServer } from "miragejs"

let server = createServer()
server.get("/api/users", { users: [{ id: 1, name: "Bob" }] })

import api from "./api/api";

function App() {
  const [users, setUsers] = useState([]); 
  useEffect(() => {
    api.get("api").then((res) => {
      console.log(res);
    });
  }, []);

  return (
    <>
      <div className="app-container">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="content">
          <Header></Header>
        </div>
        <div className="test">
          <main className="main-content">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
