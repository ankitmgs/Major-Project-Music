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
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Bar } from "react-chartjs-2";
import { Data as UserData } from ".././utils/data";
import BarChart from "./Graph/BarChart";
import ManageArtist from "./ManageArtist";
import ManageUser from "./ManageUser";
import app_config from "../../config";
import axios from "axios";
import AdminManageSongs from "./ManageSongs";

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
          <div className="card mt-4 p-4">Total Songs</div>
        </div>
      </div>

      <div className="row">
        <div className="card-md-12">
          <div className="card mt-4 p-4">
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  <h4>Manage Songs</h4>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <div style={{ height: "20rem", overflowY: "auto" }}>
                    <AdminManageSongs />
                  </div>
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
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
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  <h4>Manage Artist</h4>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <div style={{ height: "20rem", overflowY: "auto" }}>
                    <ManageArtist />
                  </div>
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card mt-4 p-4">
          <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  <h4>Manage User</h4>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <div style={{ height: "20rem", overflowY: "auto" }}>
                    <ManageUser />
                  </div>
                </Typography>
              </AccordionDetails>
            </Accordion>
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
