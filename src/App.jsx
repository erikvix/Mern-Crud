import "./App.css";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import { Outlet } from "react-router-dom";

function App() {
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
