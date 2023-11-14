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
  
  const options = [
    {
      onChange: (e) => setForm({ ...form, firstname: e.target.value }),
      placeholder: "First Name",
      type: "text",
      value: form.firstname,
    },
    {
      onChange: (e) => setForm({ ...form, lastname: e.target.value }),
      placeholder: "Last Name",
      type: "text",
      value: form.lastname,
    },
    {
      onChange: () => (e) => setForm({ ...form, email: e.target.value }),
      placeholder: "Email",
      type: "email",
      value: form.email,
    },
    {
      onChange: () => (e) => setForm({ ...form, password: e.target.value }),
      placeholder: "Password",
      type: "password",
      value: form.password,
    },
  ];
  

  const handleCreateUser = (e) => {
    e.preventDefault;
    fetch(`/api/user`, { method: "POST", body: form })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <>
      <div>
        <h1>Register</h1>
        <div className="form" onSubmit={handleCreateUser}>
          {options.map((option, index) => (
              <div className="input-box" key={index}>
                <input type={option.type} placeholder={option.placeholder} onChange={option.onChange} />
              </div>
            ))}
          <Button onClick={handleCreateUser}>Add User</Button>
        </div>
      </div>
    </>
  );
};

export default CreateUser;
