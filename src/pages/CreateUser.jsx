import React from "react";
import "./CreateUser.css";
import Input from "@/components/Input";
import Button from "../components/Button";

let options = [
  {
    placeholder: "firstname",
    type: "text",
  },
  {
    placeholder: "lastname",
    type: "text",
  },
  {
    placeholder: "email",
    type: "email",
  },
  {
    placeholder: "password",
    type: "password",
  },
];

const CreateUser = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("api/create", { method: "POST" }).then((response) => response.json)
      .then;
  };
  return (
    <>
      <div>
        <h1>Register</h1>
        <form className="form" onSubmit={handleSubmit}>
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
