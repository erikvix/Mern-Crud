import "./App.css";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";

import axios from "axios";
import api from "./api/api";

function App() {
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
