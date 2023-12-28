import Alert from "@/components/Alert";
import "./UserList.css";
import { useState, useEffect } from "react";
import Button from "@/components/Button";
import Input from "@/components/Input";
import { MdSearch } from "react-icons/md";
import Icon from "@/components/Icon";
import Loading from "@/components/Loading";
import EditModal from "@/components/Modal/EditModal.jsx";
import Modal from "@/components/Modal";
import { useDebounce } from "use-debounce";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setEditIsModalOpen] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);
  const [userToEdit, setUserToEdit] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [debouncedValue] = useDebounce(inputValue, 500);

  const initialForm = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  };
  const [form, setForm] = useState(initialForm);

  const fields = [
    {
      onChange: (e) => setForm({ ...form, firstname: e.target.value }),
      placeholder: "First Name",
      id: "first-name",
      type: "text",
      value: form.firstname,
    },
    {
      onChange: (e) => setForm({ ...form, lastname: e.target.value }),
      placeholder: "Last Name",
      id: "last-name",
      type: "text",
      value: form.lastname,
    },
    {
      onChange: (e) => setForm({ ...form, email: e.target.value }),
      placeholder: "Email",
      id: "user-email",
      type: "email",
      value: form.email,
    },
    {
      onChange: (e) => setForm({ ...form, password: e.target.value }),
      placeholder: "Password",
      id: "user-password",
      type: "password",
      value: form.password,
    },
  ];

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
  };

  const handleGetUsers = () => {
    return fetch(`/api/users`)
      .then((response) => response.json())
      .then(({ users }) => setUsers(users))
      .catch((err) => {
        console.error(err);
      });
  };

  const handleEditUser = () => {
    if (userToEdit) {
      fetch(`/api/user/${userToEdit.id}`, {
        method: "PUT",
        body: JSON.stringify(form),
      })
        .then(() => {
          handleGetUsers();
        })
        .catch((err) => {
          console.error(err);
        });
      setIsModalOpen(false);
      setIsAlertOpen(true);
      setTimeout(() => {
        setIsAlertOpen(false);
      }, 2000);
    } else {
      console.log("sem usuario");
    }
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
  const handleOpenModaltest = (user) => {
    setUserToEdit(user);
    setEditIsModalOpen(true);
  };
  useEffect(() => {
    handleGetUsers();
  }, []);

  return (
    <section className="flex flex-col gap-8">
      <div className="flex justify-between">
        <Button text="Add User" pathName="/Add">
          Add User
        </Button>
        <Input
          type="text"
          onChange={handleInputChange}
          placeholder="Search email..."
          withButton="true"
          onClick={() => setSearch(inputValue)}
        >
          <Icon icon={MdSearch} />
        </Input>
      </div>
      <div className="overflow-x-auto">
        {users.length > 0 ? (
          <table className="table min-w-full ">
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
              {users
                .filter((user) => {
                  return search.toLowerCase() === ""
                    ? user
                    : user.email.toLowerCase().includes(search);
                })
                .map((user, index) => (
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
                        onClick={() => {
                          handleOpenModaltest(user);
                        }}
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
        <div
          style={{
            display: "flex",
            gap: "1rem",
            marginTop: "1rem",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button
            className={"button-ok"}
            textClass={"textNormal"}
            onClick={() => handleDeleteUser(user)}
          >
            Delete
          </Button>
          <Button
            className={"button-cancel"}
            textClass={"textNormal"}
            onClick={() => setIsModalOpen(false)}
          >
            Cancel
          </Button>
        </div>
      </Modal>
      <EditModal isOpen={isEditModalOpen}>
        <h3>Edit an user</h3>
        <form
          style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          onSubmit={handleEditUser}
        >
          {fields.map((field) => (
            <div className="input-box" key={field.id}>
              <Input
                id={field.id}
                type={field.type}
                value={field.value}
                placeholder={field.placeholder}
                onChange={field.onChange}
              />
            </div>
          ))}
        </form>
        <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
          <Button
            className={"button-ok"}
            textClass={"textNormal"}
            onClick={() => handleEditUser()}
          >
            Edit
          </Button>
          <Button
            className={"button-cancel"}
            textClass={"textNormal"}
            onClick={() => setEditIsModalOpen(false)}
          >
            Cancel
          </Button>
        </div>
      </EditModal>
      <Alert isOpen={isAlertOpen}>User edited!</Alert>
    </section>
  );
};

export default UserList;
