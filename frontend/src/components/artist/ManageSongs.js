import React, { useEffect, useState } from "react";
import app_config from "../../config";
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { TableCell } from "@mui/material";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";


const ManageSongs = () => {
  const [songArray, setSongArray] = useState([]);
  const [isloading, setIsloading] = useState(true);

  const url = app_config.api_url;

  const getSongFromBackend = async () => {
    const response = await fetch(url + "/music/getall");
    const data = await response.json();
    setSongArray(data);
    console.log(data);
    setIsloading(false);
  };

  useEffect(() => {
    getSongFromBackend();
  }, []);


  const displaySongs = () =>{
   return songArray.map((song)=>{
  <>
  <TableRow
          key={song.title}
          sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
        >
          <TableCell component="th" scope="row">
            <img
              style={{ width: "45px", height: "45px" }}
              src={song.thumbnail}
              className="rounded-circle mr-4"
            />

          </TableCell>
          <TableCell>{song.artist}</TableCell>
          <TableCell>{song.composer}</TableCell>
          <TableCell>{song.language}</TableCell>

          {/* <TableCell>
            <span className="badge badge-success rounded-pill d-inline">
              {user.gender}
            </span>
          </TableCell> */}
          <TableCell>
            <button
              className="btn btn-danger"
              // onClick={() => {
              //   deleteUser(song._id);
              // }}
            >
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
   })
  }

  return <div>

    <TableContainer >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead style={{ backgroundColor: "#80808054" }}>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Artist</TableCell>
            <TableCell>Composer</TableCell>
            <TableCell>Language</TableCell>
            <TableCell>Delete</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{isloading ? <Loader /> : displayUser()}</TableBody>
      </Table>
    </TableContainer>

  </div>;
};

export default ManageSongs;
