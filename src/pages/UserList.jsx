import "./UserList.css";
import { useState, useEffect } from "react";
import Button from "@/components/Button";
import Input from "@/components/Input";
import { MdSearch } from "react-icons/md";
import Icon from "@/components/Icon";
import Loading from "@/components/Loading";
import Modal from "@/components/Modal";
import { useDebounce } from "use-debounce";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [debouncedValue] = useDebounce(inputValue, 500);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    console.log(debouncedValue);
  };

  const handleSearchUser = () => {
    const filteredUsers = users.filter((user) =>
      user.email.includes(inputValue)
    );
    if (filteredUsers === "") {
      handleGetUsers();
    }
    console.log(handleGetUsers());
    console.log(filteredUsers);
    setUsers(filteredUsers);
  };
  const handleGetUsers = () => {
    return fetch(`/api/users`)
      .then((response) => response.json())
      .then(({ users }) => setUsers(users))
      .catch((err) => {
        console.error(err);
      });
  };

  const handleDeleteUser = () => {
    if (userToDelete) {
      fetch(`/api/users/${userToDelete.id}`, { method: "DELETE" })
        .then(() => {
          setIsModalOpen(false);
          handleGetUsers();
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };

  const handleOpenModal = (user) => {
    setUserToDelete(user);
    setIsModalOpen(true);
  };
  useEffect(() => {
    handleGetUsers();
  }, []);

  return (
    <section className="users-dashboard">
      <div className="dashboard-header">
        <Button text="Add User" pathName="/Add">
          Add User
        </Button>
        <Input
          type="text"
          onChange={handleInputChange}
          placeholder="Search..."
          withButton="true"
          onClick={handleSearchUser}
        >
          <Icon icon={MdSearch} />
        </Input>
      </div>
      <div className="dashboard-content">
        {users.length > 0 ? (
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>First-Name</th>
                <th>Last-Name</th>
                <th>Email</th>
                <th>Password</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <td>{user.id}</td>
                  <td>{user.firstname}</td>
                  <td>{user.lastname}</td>
                  <td>{user.email}</td>
                  <td>{user.password}</td>
                  <td>
                    <box-icon
                      style={{ cursor: "pointer" }}
                      color="#94a3b8"
                      name="edit"
                    ></box-icon>
                    <box-icon
                      style={{ cursor: "pointer" }}
                      color="#94a3b8"
                      name="x"
                      onClick={() => handleOpenModal(user)}
                    ></box-icon>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <Loading />
        )}
      </div>
      <Modal isOpen={isModalOpen}>
        <h3>Are you sure you want to delete the user?</h3>
        <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
          <Button onClick={() => handleDeleteUser(user)}>Delete</Button>
          <Button onClick={() => setIsModalOpen(false)}>Cancel</Button>
        </div>
      </Modal>
    </section>
  );
};

export default UserList;
