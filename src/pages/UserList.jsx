import "./UserList.css";
import { useState, useEffect } from "react";
import Button from "@/components/Button";
import Input from "@/components/Input";
import { MdSearch } from "react-icons/md";
import Icon from "@/components/Icon";
import Loading from "@/components/Loading";

const UserList = () => {
  const [users, setUsers] = useState([]);

  const handleGetUsers = () => {
    return fetch(`/api/users`)
      .then((response) => response.json())
      .then(({ users }) => setUsers(users))
      .catch((err) => {
        console.error(err);
      });
  };

  const handleDeleteUser = ({ id }) => {
    fetch(`/api/users/${id}`, { method: "DELETE" })
      .then(handleGetUsers)
      .catch((err) => {
        console.error(err);
      });
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
        <Input type="text" placeholder="Search..." withButton="true">
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
                      onClick={() => handleDeleteUser(user)}
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
    </section>
  );
};

export default UserList;
