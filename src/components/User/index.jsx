import "@/components/User/User.css";
import { FaAngleDown } from "react-icons/fa6";
import { FaBell } from "react-icons/fa";
import { useState } from "react";
import { HiUserCircle } from "react-icons/hi";
import { MdInfoOutline, MdLogout, MdDarkMode } from "react-icons/md";
import Modal from "@/components/Modal";
import Button from "@/components/Button";
import { Link } from "react-router-dom";
import netlifyIdentity from "netlify-identity-widget";

netlifyIdentity.init();

const User = () => {
  const user = netlifyIdentity.currentUser();
  const [isOpen, setIsOpen] = useState(false);
  const [isArrowOpen, setIsArrowOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") !== "dark" ? "light" : "dark"
  );

  const toggleDarkMode = () => {
    const root = window.document.documentElement;

    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);

    root.classList.remove("light", "dark");
    root.classList.add(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const handleOpenArrow = () => {
    setIsArrowOpen(!isArrowOpen);
  };

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };
  const handleOpenModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="flex items-center justify-end gap-6 leading-3">
      <button
        className="hidden md:flex bg-[transparent] text-slate-950 dark:text-white hover:border-transparent"
        onClick={handleButtonClick}
      >
        <FaBell size={20} />
      </button>
      {isOpen && (
        <div className="absolute top-[90px] right-[320px] w-max h-auto shadow-lg dark:text-white dark:bg-slate-900 text-slate-950">
          <ul className="dropdown-box">
            <li>
              <button
                onClick={handleOpenModal}
                className="ease-in-out rounded-none duration-300 flex items-center bg-transparent text-slate-950 dark:text-white font-normal text-base gap-2 p-2 dark:hover:bg-slate-800 hover:bg-gray-200"
              >
                About this project
                <MdInfoOutline size={24} />
              </button>
            </li>
          </ul>
        </div>
      )}
      <div className="text-slate-950 dark:text-white  ">
        <HiUserCircle size={32} />
      </div>
      <div className="hidden md:flex flex-col text-slate-950 dark:text-white">
        {user.user_metadata.full_name ? (
          <h3>{user.user_metadata.full_name}</h3>
        ) : (
          <h3>user</h3>
        )}
        <h3>{user.user_metadata.full_name}</h3>
        {user ? (
          <p className="paragraph">{user.email}</p>
        ) : (
          <h3>user@test.com</h3>
        )}
      </div>
      <div>
        <button className="bg-[transparent] text-slate-950 dark:text-white hover:border-transparent">
          <FaAngleDown onClick={handleOpenArrow} />
        </button>
        {isArrowOpen && (
          <div className="absolute flex flex-col gap-2 shadow-lg bg-gray-50 dark:bg-slate-900 right-5 mt-6 w-30 h-auto p-2 cursor-pointer z-10">
            <div
              onClick={toggleDarkMode}
              className="p-3 dark:hover:bg-slate-800 hover:bg-gray-100 dark:text-white text-slate-950 flex items-center gap-2 cursor-pointer ease-in-out duration-300"
            >
              <MdDarkMode size={24} />
              <p className="font-normal">Dark Theme</p>
            </div>
            <Link
              to={"/home"}
              className="p-3 dark:hover:bg-slate-800 hover:bg-gray-100 ease-in-out duration-300   flex items-center gap-2 cursor-pointer text-red-500 font-normal"
            >
              <MdLogout size={24} />
              Logout
            </Link>
          </div>
        )}
      </div>
      {isModalOpen && (
        <Modal isOpen={true}>
          <div className="modal leading-6">
            <div className="header">
              <div>
                <h1 className="text-2xl uppercase font-bold">What's New</h1>
                <span>December 14, 2023</span>
              </div>
              <div>
                <Button onClick={() => setIsModalOpen(false)}>X</Button>
              </div>
            </div>
            <div>
              <div className="header-2 flex flex-col p-4 items-center gap-1">
                <h2 className="text-base">NEW FEATURES</h2>
                <div className="hr w-full"></div>
              </div>
              <ul className="list flex flex-col gap-4">
                <li className="li-box">
                  <p>
                    <span>Dark Theme.</span> Dark theme feature implemented.
                  </p>
                </li>
                <li className="li-box">
                  <p>
                    <span>CRUD working.</span> Add, Edit, Delete and Search are
                    avaliable to test on our aplication.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default User;
