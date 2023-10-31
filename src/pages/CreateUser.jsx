import React from "react";
import "./CreateUser.css";

const CreateUser = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("api/create", { method: "POST" }).then((response) => response.json)
      .then;
  };
  return (
    <>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <label>FirstName</label>
          <input type="text" name="firstname" />
          <label>LasttName</label>
          <input type="text" name="firstname" />
          <label>Email</label>
          <input type="email" name="firstname" />
          <label>Password</label>
          <input type="password" name="firstname" />
          <button type="submit">Enviar Dados</button>
        </form>
      </div>
    </>
  );
};

export default CreateUser;
