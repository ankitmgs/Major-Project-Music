import React, { useEffect, useState } from "react";
import app_config from "../../config";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Loader from "../utils/loader";

const ManageUser = () => {
  const [userArray, setUserArray] = useState([]);
  const [isloading, setIsloading] = useState(true);
  const url = app_config.api_url;

  const getUserfromBackend = async () => {
    const response = await fetch(url + "/user/getall");
    const data = await response.json();
    console.log(data);
    setUserArray(data);
    setIsloading(false);
  };

  useEffect(() => {
    getUserfromBackend();
  }, []);

  const displayUser = () => {
    return userArray.map((user) => (
      <>
        <TableRow
          key={user.name}
          sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
        >
          <TableCell component="th" scope="row">
            <img
              style={{ width: "45px", height: "45px" }}
              src={user.avatar}
              className="rounded-circle mr-4"
            />
            {user.Fname} {user.Lname}
          </TableCell>
          <TableCell>{user.email}</TableCell>
          <TableCell>
            <span className="badge badge-success rounded-pill d-inline">
              {user.gender}
            </span>
          </TableCell>
          <TableCell>
            <button className="btn btn-danger">
              <i class="fa-solid fa-trash fa-lg"></i>
            </button>
          </TableCell>
          <TableCell>
            <button type="button" className="btn btn-secondary">
              Edit
            </button>
          </TableCell>
        </TableRow>
      </>
    ));
  };

  return (
    <div>
      {" "}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead style={{ backgroundColor: "#80808054" }}>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>Delete</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{isloading ? <Loader /> : displayUser()}</TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ManageUser;