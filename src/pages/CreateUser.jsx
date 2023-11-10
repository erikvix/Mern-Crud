import React, { useState } from "react";
import "./CreateUser.css";
import Input from "@/components/Input";
import Button from "../components/Button";
import { string } from "prop-types";

const CreateUser = () => {
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

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

  const handleCreateUser = (e) => {
    e.preventDefault;
    fetch(`${usersURL}/${id}`, { method: "UPDATE", body: form })
      .then(handleGetUsers)
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <>
      <div>
        <h1>Register</h1>
        <form className="form" onSubmit={handleCreateUser}>
          {options.map((option, index) => {
            return (
              <div className="input-box" key={index}>
                <Input placeholder={option.placeholder} type={option.type} />
              </div>
            );
          })}
          <Button>Add User</Button>
        </form>
      </div>
    </>
  );
};

export default CreateUser;
