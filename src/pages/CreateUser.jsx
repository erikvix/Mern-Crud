import { useState } from "react";
import "./CreateUser.css";
import Button from "@/components/Button";

const CreateUser = () => {
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  
  const fields = [
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
    e.preventDefault();
    fetch(
      `/api/user`, 
      { 
        method: "POST",
        body: JSON.stringify(form)
      }
    )
    .catch((err) => err);
  };

  return (
    <div>
      <h1>Register</h1>
      <form className="form" onSubmit={handleCreateUser}>
        {fields.map(field => (
          <div className="input-box" key={field.id}>
            <input 
              id={field.id}
              type={field.type}
              value={field.value}
              placeholder={field.placeholder}
              onChange={field.onChange} 
            />
          </div>
        ))}
        <Button onClick={handleCreateUser}>Add User</Button>
      </form>
    </div>
  );
};

export default CreateUser;
