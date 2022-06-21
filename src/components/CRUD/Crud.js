import React, { useState, useEffect } from "react";
import axios from "axios";
import CloseIcon from "@mui/icons-material/Close";

const Crud = () => {
    
    const [users, setUsers] = useState([]);
  const [show, setShow] = useState(false);
  const [id, setId] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        return response;
      })
      .then((data) => {
        setUsers(data.data);
      })
      .catch((error) => alert(error));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(url, { 
        id : id,
        username: userName,
        email: email
       })
      .then((res) => {
        setUsers([...users, res.data])
        console.log(res);
      })
      .catch((error) => alert(error));
      
      setId('');
      setUserName('');
      setEmail('');
  };

  const handleDelete = (id) => {

    axios.delete(`${url}/${id}`);
          setUsers(users.filter((items) => {return items.id !== id})     
          )};

    return (
        <div>
      <nav className="navbar bg-info mb-3">
        <h1 className="px-3 text-white">User Information</h1>
        <button className="btn btn-primary mx-2" onClick={() => setShow(true)}>
          Add
        </button>
      </nav>
      {show ? (
        <div className="px-3 mb-4">
          <form onSubmit={handleSubmit}>
            <div className="d-flex justify-content-between">
              <h2 className="mb-3">Student Form</h2>
              <CloseIcon
                style={{
                  color: "white",
                  backgroundColor: "red",
                  borderRadius: "10%",
                  marginRight: "1%",
                  marginTop: "1%",
                  cursor: "pointer",
                }}
                onClick={() => setShow(false)}
              ></CloseIcon>
            </div>
            <label className="form-label">User Id:</label>
            <input
              type="text"
              className="form-control mb-3"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
            <label className="form-label">User Name:</label>
            <input
              type="text"
              className="form-control mb-3"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <label className="form-label">E-mail:</label>
            <input
              type="text"
              className="form-control mb-3"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className="btn btn-primary">Submit</button>
          </form>
        </div>
      ) : null}
      <div className="mx-5">
        <table className="table table-hover border border-secondary border-3">
          <thead>
            <tr>
              <td>ID</td>
              <td>USER NAME</td>
              <td>E-MAIL</td>
              <td>ACTION</td>
            </tr>
          </thead>
          <tbody>
            {users.map((item, i) => (
              <tr key={i}>
                <td key={item.id}>{item.id}</td>
                <td key={item.username}>{item.username}</td>
                <td key={item.email}>{item.email}</td>
                <td>
                  <button className="btn btn-danger" onClick={() => handleDelete(item.id)}>DELETE</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    )
};

export default Crud;