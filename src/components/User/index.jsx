import "@/components/User/User.css";
import { FaAngleDown } from "react-icons/fa6";
import { useState } from "react";
import { HiUserCircle } from "react-icons/hi";
import { MdInfoOutline } from "react-icons/md";
import Modal from "@/components/Modal";
import Button from "@/components/Button";

const User = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };
  const handleOpenModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="flex items-center justify-end gap-2 leading-3">
      <button
        className="hidden md:flex bg-[transparent] text-white hover:border-transparent"
        onClick={handleButtonClick}
      >
        <box-icon color="#fff" id="bell" type="solid" name="bell"></box-icon>
      </button>
      {isOpen && (
        <div className="dropdown">
          <ul className="dropdown-box">
            <li>
              <button
                onClick={handleOpenModal}
                className="flex items-center bg-transparent text-white font-normal text-base gap-2 p-2 hover:border-transparent"
              >
                About this project
                <MdInfoOutline size={24} />
              </button>
            </li>
            <li>
              <p
                href=""
                className="flex items-center bg-transparent text-white font-normal text-base gap-2 p-2 hover:border-transparent"
              >
                Dark Theme
                <label class="relative inline-block w-[55px] h-[28px]">
                  <input type="checkbox" className="w-0 h-0 opacity-0" />
                  <span class="slider round"></span>
                </label>
              </p>
            </li>
          </ul>
        </div>
      )}
      <div className="">
        <HiUserCircle size={32} />
      </div>
      <div className="hidden md:flex flex-col">
        <h3>User.name</h3>
        <p className="paragraph">email@gmail.com</p>
      </div>
      <div>
        <button className="bg-[transparent] text-white hover:border-transparent">
          <FaAngleDown />
        </button>
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
