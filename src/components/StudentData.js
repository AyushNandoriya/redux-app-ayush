import React, { useState } from "react";
import './StudentData.css';
import { useSelector, useDispatch } from "react-redux";
import { DataGrid } from "@mui/x-data-grid";
import { ButtonGroup, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const StudentData = () => {
  const items = useSelector((state) => state);
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const columns = [
    { field: "id", headerName: "ID", width: "100" },
    { field: "name", headerName: "NAME", width: "200" },
    { field: "description", headerName: "DESCRIPTION", width: "300" },
    {
      field: "action",
      renderCell: (items) => {
        return (
          <ButtonGroup>
            <Button
            className="rounded"
            variant="contained"
            onClick={() => editRow(items.row)}
          >
            Edit
          </Button>
          <Button
          className="mx-2 rounded"
            variant="contained"
            color="error"
            onClick={() => {
              DeleteRow(items.id);
            }}
          >
            Delete
          </Button>
          </ButtonGroup>
        );
      },
      width: "200",
    },
  ];
  const add = (name, description) => ({
    type: "addItem",
    payload: {
      name: name,
      description: description,
    },
  });

  const editRow =(row) => {
    setShow(true);
    setName(row.name);
    setDescription(row.description);
  }

  const remove = (id) => ({
    type: "removeItem",
    payload: {
      id: id,
    },
  });

  const addItem = (e) => {
    e.preventDefault();
    dispatch(add(name, description));
    setName("");
    setDescription("");
  };

  const deleteAllRows = () => {
    for (let i = 0; i < items.length; i++) {
      items.slice(items[i]);
    }
  }

  const DeleteRow = (id) => {
    dispatch(remove(id));
  };

  return (
    <div>
      <div className="d-flex bg-warning justify-content-between text-white p-2 mb-3">
        <h1>Student Information</h1>
        <div className="pt-2">
          <Button variant="contained" className="mx-2" onClick={() => setShow(true)}>
            Add
          </Button>
          <Button variant="contained" className="bg-danger" onClick={deleteAllRows}>Delete</Button>
        </div>
      </div>
      {show ? (
        <div className="px-3 mb-4">
          <form onSubmit={addItem}>
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
            <label className="form-label">Student Name:</label>
            <input
              type="text"
              className="form-control mb-3"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label className="form-label">Description:</label>
            <textarea
              type="text"
              className="form-control mb-3"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <button className="btn btn-primary">Submit</button>
          </form>
        </div>
      ) : null}

      <div style={{ height: "400px" }}>
        <DataGrid rows={items} columns={columns} checkboxSelection />
      </div>
    </div>
  );
};

export default StudentData;
