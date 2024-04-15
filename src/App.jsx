import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const root = window.document.documentElement;
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      root.classList.add("dark");
      console.log(window.matchMedia("(prefers-color-scheme: dark)").matches);
    } else {
      root.classList.remove("dark");
    }
  }, []);
  return (
    <div className="bg-gray-100 dark:bg-slate-950">
      <div className=" md:flex flex-row">
        <Sidebar />
        <div className="flex flex-col md:flex-1 md:px-8 md:py-4 md:h-screen">
          <Header />
          <div className="md:flex h-screen items-center justify-center ">
            <main className="bg-white border border-gray-100 shadow-xl dark:border-slate-800 dark:bg-slate-900 p-6 rounded-[1.5rem] mx-8">
              <Outlet />
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
