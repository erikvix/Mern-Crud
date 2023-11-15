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
      id: 'first-name',
      type: "text",
      value: form.firstname,
    },
    {
      onChange: (e) => setForm({ ...form, lastname: e.target.value }),
      placeholder: "Last Name",
      id: 'last-name',
      type: "text",
      value: form.lastname,
    },
    {
      onChange: (e) => setForm({ ...form, email: e.target.value }),
      placeholder: "Email",
      id: 'user-email',
      type: "email",
      value: form.email,
    },
    {
      onChange: (e) => setForm({ ...form, password: e.target.value }),
      placeholder: "Password",
      id: 'user-password',
      type: "password",
      value: form.password,
    },
  ];
  

  const handleCreateUser = (e) => {
    e.preventDefault;
    console.log(form);
    fetch(`/api/user`, { method: "POST", body: JSON.stringify(form) })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <>
      <div>
        <h1>Register</h1>
        <form className="form" onSubmit={handleCreateUser}>
          {options.map((option, index) => (
              <div className="input-box" key={index}>
                <input id={option.id} type={option.type} value={option.value} placeholder={option.placeholder}  onChange={option.onChange} />
              </div>
            ))}
          <Button onClick={handleCreateUser}>Add User</Button>
        </form>
      </div>
    </>
  );
};

export default CreateUser;
