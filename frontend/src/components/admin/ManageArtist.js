import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../utils/loader";

const ManageArtist = () => {
  const [artistArray, setartistArray] = useState([]);
  const [isloading, setIsloading] = useState(true);

  const getDataFromBackend = async () => {
    const response = await fetch("http://localhost:8000/artist/getall");
    const data = await response.json();
    console.log(data);
    setartistArray(data);
    setIsloading(false);
  };
  useEffect(() => {
    getDataFromBackend();
  }, []);

  const displayArtists = () => {
    return artistArray.map((artist) => (
      <>
        <tr>
          <td>
            <div className="d-flex align-items-center">
              <img
                style={{ width: "45px", height: "45px" }}
                src={artist.avatar}
                className="rounded-circle"
              />
              <div className="ms-3">
                <p className="fw-bold mb-1">{artist.name}</p>
              </div>
            </div>
          </td>
          <td>
            <p className="fw-normal mb-1">{artist.email}</p>
          </td>
          <td>
            <span className="badge badge-success rounded-pill d-inline">
              Singer
            </span>
          </td>
          <td>
            <button className="btn btn-danger">
              <i class="fa-solid fa-trash fa-lg"></i>
            </button>
          </td>
          <td>
            <button type="button" className="btn btn-secondary">
              Edit
            </button>
          </td>
        </tr>
      </>
    ));
  };

  return (
    <div>
      <table className="table align-middle mb-0 bg-white">
        <thead className="bg-light">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Profile</th>
            <th>Delete</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="d-flex align-items-center">
                <img
                  style={{ width: "45px", height: "45px" }}
                  src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                  className="rounded-circle"
                />
                <div className="ms-3">
                  <p className="fw-bold mb-1">John Doe</p>
                  <p className="text-muted mb-0">john.doe@gmail.com</p>
                </div>
              </div>
            </td>
            <td>
              <p className="fw-normal mb-1">Software engineer</p>
              <p className="text-muted mb-0">IT department</p>
            </td>
            <td>
              <span className="badge badge-success rounded-pill d-inline">
                Active
              </span>
            </td>
            <td>Senior</td>
            <td>
              <button type="button" className="btn btn-link btn-sm btn-rounded">
                Edit
              </button>
            </td>
          </tr>
          {isloading ? <><Loader /></> : displayArtists()}
        </tbody>
      </table>
    </div>
  );
};

export default ManageArtist;
