import { useEffect } from 'react';
import { createServer, Model } from "miragejs"

createServer({
  models: {
    user: Model
  },
  routes() {
    this.get("/api/user", () => ({ name: 'Laranja', id: 1000 }))
    this.get("/api/users", (schema) => schema.users.all())
    this.post("/api/user", (schema, request) => schema.users.create(JSON.parse(request.requestBody)))
  },
  seeds(server) {
    server.create('user', { name: 'Joao', id: 4 })
    server.create('user', { name: 'mikael', id: 10 })
  }
})

function App() {
  const handleGetUser = () => fetch('/api/user')
    .then((response) => response.json())
    .then((user) => {
      console.log(user)
      return user;        
    }).catch((err) => {
      console.error(err);
      return err
    })
  const handleGetUsers = () => fetch('/api/users')
    .then((response) => response.json())
    .then((users) => users).catch((err) => {
      console.error(err);
      return err
    })
  const handlePostUser = () => {
    fetch(`/api/user`, {
      method: "POST",
      body: JSON.stringify({
        id: 2,
        name: 'Mikael'
      })
    }).catch((err) => err);
    handleGetUsers();
  }

  useEffect(() => {
    handleGetUsers();  
  }, [])
  return (
    <>
      <button onClick={handlePostUser}>Create User</button>
    </>
  );
}

export default App;
