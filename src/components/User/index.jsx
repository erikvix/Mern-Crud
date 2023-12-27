import "@/components/User/User.css";
import { useState } from "react";
import {
  MdInfoOutline,
  MdPersonAddAlt1,
  MdPersonSearch,
  MdPersonRemove,
} from "react-icons/md";
import { FaUserEdit } from "react-icons/fa";
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
    <div className="user-container">
      <button className="btn" onClick={handleButtonClick}>
        <box-icon color="#fff" id="bell" type="solid" name="bell"></box-icon>
      </button>
      {isOpen && (
        <div className="dropdown">
          <ul className="dropdown-box">
            <li>
              <button onClick={handleOpenModal} className="item btn">
                About this project
                <MdInfoOutline size={24} />
              </button>
            </li>
            <li>
              <p href="" className="item font-medium text-lg">
                Dark Theme
                <label class="switch">
                  <input type="checkbox" />
                  <span class="slider round"></span>
                </label>
              </p>
            </li>
          </ul>
        </div>
      )}
      <div>
        <box-icon
          color="#fff"
          id="user"
          name="user-circle"
          type="solid"
        ></box-icon>
      </div>
      <div className="user-box">
        <h3>User.name</h3>
        <p className="paragraph">email@gmail.com</p>
      </div>
      <i>
        <button className="btn">
          <box-icon id="arrow" name="chevron-down" color="#ffffff"></box-icon>
        </button>
      </i>
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
