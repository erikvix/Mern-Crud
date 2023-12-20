import "@/components/User/User.css";
import { useState } from "react";
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
    <div className="user-container">
      <button className="btn" onClick={handleButtonClick}>
        <box-icon color="#fff" id="bell" type="solid" name="bell"></box-icon>
      </button>
      {isOpen && (
        <div className="dropdown">
          <ul className="dropdown-box">
            <li>
              <button onClick={handleOpenModal} className="item">
                <MdInfoOutline size={24} />
                About this project
              </button>
            </li>
            <li>
              <a href="" className="item">
                Dark Theme
                <label class="switch">
                  <input type="checkbox" />
                  <span class="slider round"></span>
                </label>
              </a>
            </li>
            <li>
              <a href="" className="item">
                About this project!
              </a>
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
          <h1>Crud MERN-Stack</h1>
          <h3>o aplicativo exerce as seguintes funções:</h3>
          <ul className="modal-box">
            <li>
              <p>Inserção de usuário</p>
            </li>
            <li>
              <p>Deleção de usuário</p>
            </li>
            <li>
              <p>Edição de usuário</p>
            </li>
            <li>
              <p>Pesquisa de usuário</p>
            </li>
          </ul>
          <Button onClick={() => setIsModalOpen(false)}>X</Button>
        </Modal>
      )}
    </div>
  );
};

export default User;
