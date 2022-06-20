import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

  const fetchData = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        return response;
      })
      .then((data) => {
        setUsers(data.data);
      })
      .catch((error) => alert(error));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <nav className="navbar bg-info mb-3">
        <h1 className="px-3 text-white">User Information</h1>
      </nav>
      <div className="mx-5">
        <table
        className="table table-hover border border-secondary border-3 px-2"
        >
          <thead>
            <tr>
              <td>ID</td>
              <td>TITLE</td>
              <td>BODY</td>
            </tr>
          </thead>
          <tbody>
            {users.map((item, i) => (
              <tr key={i}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.body}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
    </div>
  );
}

export default App;
