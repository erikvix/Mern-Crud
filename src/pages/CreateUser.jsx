import React, { useState } from "react";
import "./CreateUser.css";
import Input from "@/components/Input";
import Button from "../components/Button";

const CreateUser = () => {
  const [form, setForm] = useState({
    id: 4,
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  const [users, setUsers] = useState([]);

  let options = [
    {
      placeholder: "First Name",
      type: "text",
      value: form.firstname,
    },
    {
      placeholder: "Last Name",
      type: "text",
      value: form.lastname,
    },
    {
      placeholder: "Email",
      type: "email",
      value: form.email,
    },
    {
      placeholder: "Password",
      type: "password",
      value: form.password,
    },
  ];

  const handleGetUsers = () => {
    return fetch(`http://localhost:5173/api/users`)
      .then((response) => response.json())
      .then(({ users }) => setUsers(users))
      .catch((err) => {
        console.error(err);
      });
  };

  const handleCreateUser = (e) => {
    e.preventDefault();
    fetch(`http://localhost:5173/api/user`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: form,
    })
      .then(handleGetUsers)
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <>
      <div>
        <h1>Register</h1>
        <div className="form">
          {options.map((option, index) => {
            return (
              <div className="input-box" key={index}>
                <Input
                  placeholder={option.placeholder}
                  type={option.type}
                  value={
                    form[option.placeholder.toLowerCase().replace(/\s+/g, "")]
                  }
                  onChange={(e) =>
                    setForm({
                      ...form,
                      [option.placeholder.toLowerCase().replace(/\s+/g, "")]:
                        e.target.value,
                    })
                  }
                />
              </div>
            );
          })}
          <Button onClick={handleCreateUser}>Add User</Button>
        </div>
      </div>
    </>
  );
};

export default CreateUser;
