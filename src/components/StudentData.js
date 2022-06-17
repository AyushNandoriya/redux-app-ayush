import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const StudentData = () => {
  const items = useSelector((state) => state);
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const columns = [
    { field: "id", headerName: "ID", width: "100" },
    { field: "name", headerName: "NAME", width: "300" },
    { field: "description", headerName: "DESCRIPTION", width: "300" },
    {
      field: "action",
      renderCell: (items) => {
        return (
            <Button
            variant="contained"
            color="error"
              onClick={() => {
                DeleteRow(items.id)
              }}
            >
              Delete
            </Button>
        );
      },
      width: "300",
    },
  ];
  const add = (name, description) => ({
    type: "addItem",
    payload: {
      name: name,
      description: description,
    },
  });

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

  const DeleteRow = (id) => {
      dispatch(remove(id));
  }

  return (
    <div>
        <div className="d-flex bg-warning text-white justify-content-between p-2 mb-3">
            <h1>Student Information</h1>
            <Button variant="contained" onClick={() => setShow(true)} >Display Form</Button>
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
      </div>) : null}

    <div style={{height: "400px"}}>
      <DataGrid  rows={items} columns={columns}/>
    </div>
    </div>
  );
};

export default StudentData;