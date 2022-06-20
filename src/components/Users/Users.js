import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUsers, deleteUsers, userData, deleteAllUsers } from "./UserSlice";
import CloseIcon from "@mui/icons-material/Close";
import { ButtonGroup, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

export default function Counter() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const users = useSelector(userData);
  const dispatch = useDispatch();
  const columns = [
    { field: "id", headerName: "ID", width: "100" },
    { field: "name", headerName: "USER NAME", width: "200" },
    { field: "password", headerName: "PASSWORD", width: "300" },
    {
      field: "action",
      headerName: "ACTION",
      renderCell: (row) => {
        return (
          <ButtonGroup>
            <Button
              className="rounded"
              variant="contained"
              onClick={() => editRow(row.row)}
            >
              Edit
            </Button>
            <Button
              className="mx-2 rounded"
              variant="contained"
              color="error"
              onClick={() => deleteUser(row.id)}
            >
              Delete
            </Button>
          </ButtonGroup>
        );
      },
      width: "200",
    },
  ];

  const addEmployee = (e) => {
    e.preventDefault();
    dispatch(addUsers({ id, name, password }));
  };

  const editRow = (row) => {
    console.log(row);
    setShow(true);
    setId(row.id);
    setName(row.name);
    setPassword(row.password);
  };

  const deleteUser = (id) => {
    console.log(id);
    dispatch(deleteUsers(id));
  };

  const deleteAll = () => {
    dispatch(deleteAllUsers(0));
  }

  return (
    <div>
      <div className="d-flex bg-warning justify-content-between text-dak p-2 mb-3">
        <h1>User Data</h1>
        <div className="pt-2">
          <Button
            variant="contained"
            className="mx-2"
            onClick={() => setShow(true)}
          >
            Add
          </Button>
          <Button variant="contained" className="bg-danger" onClick={deleteAll}>
            Delete
          </Button>
        </div>
      </div>
      {show ? (
        <div className="px-3 mb-4">
          <form onSubmit={(e) => addEmployee(e)}>
            <div className="d-flex justify-content-between">
              <h2 className="mb-3">User Data</h2>
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
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label className="form-label">Password:</label>
            <input
              type="password"
              className="form-control mb-3"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="btn btn-primary">Submit</button>
          </form>
        </div>
      ) : null}
      <div style={{ height: "350px" }} className="mx-3">
        <DataGrid
          rows={users}
          columns={columns}
          checkboxSelection
          className="px-2"
          style={{ border: "3px solid gray" }}
        />
      </div>
    </div>
  );
}
