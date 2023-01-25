import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { Data as UserData } from ".././utils/data";
import BarChart from "./Graph/BarChart";
import ManageArtist from "./ManageArtist";
import ManageUser from "./ManageUser";
import app_config from "../../config";
import axios from "axios";

const AdminDashboard = () => {
  const url = app_config.api_url;
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "User Gained",
        data: UserData.map((data) => data.userGain),
      },
    ],
  });
  const [userDatafromAPI, setuserDatafromAPI] = useState([]);

  useEffect(() => {
    axios
      .get(url + "/user/getall")
      .then((res) => {
        console.log(res.data);
        setuserDatafromAPI(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];
  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: [234, 543, 34534, 43, 57, 395, 53],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Dataset 2",
        data: [234, 543, 34534, 43, 57, 395, 53],
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3 col-sm-6">
          <div className="card mt-4 p-4">Total Music Uploaded on Platform</div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="card mt-4 p-4">Total Artists</div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="card mt-4 p-4">Total Users</div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="card mt-4 p-4">Active Live</div>
        </div>
      </div>

      <div className="row">
        <div className="card-md-12">
          <div className="card mt-4 p-4">Manage Users</div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          <div className="card mt-4 p-4">Music List</div>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <div className="card mt-4 p-4">
            Manage Artist Registration Request
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="card mt-4 p-4">
            <ManageArtist />
          </div>
        </div>
        <div className="col-md-6">
          <div className="card mt-4 p-4">
            <div className="" style={{height: "20rem", overflowY: "auto" }}>
              <ManageUser />
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 col-sm-12">
          <div className="card mt-4 p-4">
            <BarChart chartData={data} />
          </div>
        </div>
        <div className="col-md-6 col-sm-12">
          <div className="card mt-4 p-4">Graph 2</div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
