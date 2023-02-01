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
import { Data as UserData } from ".././utils/data";
import BarChart from "../Graph/BarChart";
import ManageArtist from "./ManageArtist";
import ManageUser from "./ManageUser";
import app_config from "../../config";
import axios from "axios";
import AdminManageSongs from "./ManageSongs";
import AnimatedNumbers from "react-animated-numbers";
import DoughnutChart from "./Graph/DoughnutChart";

const AdminDashboard = () => {
  const url = app_config.api_url;
  const [num, setNum] = useState(100);
  const [num2, setNum2] = useState(200);
  const [num3, setNum3] = useState([userLength]);
  const [artistArray, setArtistArray] = useState([]);
  const [musicArray, setMusicArray] = useState([]);

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

  const getArtistGetAll = async () => {
    const response = await fetch(url + "/artist/getall");
    const data = await response.json();
    console.log("artist", data);
    setArtistArray(data);
  };
  const getMusicGetAll = async () => {
    const response = await fetch(url + "/music/getall");
    const data = await response.json();
    console.log("music", data);
    setMusicArray(data);
  };

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
    getArtistGetAll();
    getMusicGetAll();
  }, []);

  var userLength = Object.keys(userDatafromAPI).length;
  console.log("Total user", userLength);

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
  const data2 = {
    labels: ["Pop", "Blues", "Jazz", "Classical", "Western", "hjkl"],
    datasets: [
      {
        label: "Total",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4  col-sm-6">
          <div
            className="card mt-4 p-5 d-flex flex-row justify-content-between"
            style={{ alignItems: "center" }}
          >
            <div style={{ fontWeight: "bolder", fontSize: "2rem" }}>
              Total Music
            </div>
            <div>
              <AnimatedNumbers
                animateToNumber={num}
                fontStyle={{ fontSize: 32 }}
                configs={(number, index) => {
                  return { mass: 1, tension: 230 * (index + 1), friction: 140 };
                }}
              ></AnimatedNumbers>
            </div>
          </div>
        </div>
        <div className="col-md-4  col-sm-6">
          <div
            className="card mt-4 p-5 d-flex flex-row justify-content-between"
            style={{ alignItems: "center" }}
          >
            <div style={{ fontWeight: "bolder", fontSize: "2rem" }}>
              Total Artist
            </div>
            <div>
              <AnimatedNumbers
                animateToNumber={num2}
                fontStyle={{ fontSize: 32 }}
                configs={(number, index) => {
                  return { mass: 1, tension: 230 * (index + 1), friction: 140 };
                }}
              ></AnimatedNumbers>
            </div>
          </div>
        </div>

        <div className="col-md-4  col-sm-6">
          <div
            className="card mt-4 p-5 d-flex flex-row justify-content-between"
            style={{ alignItems: "center" }}
          >
            <div style={{ fontWeight: "bolder", fontSize: "2rem" }}>
              Total User
            </div>
            <div>
              <AnimatedNumbers
                animateToNumber={num3}
                fontStyle={{ fontSize: 32 }}
                configs={(number, index) => {
                  return { mass: 1, tension: 230 * (index + 1), friction: 140 };
                }}
              ></AnimatedNumbers>
            </div>
          </div>
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
          <div className="card mt-4 p-4">
            <center style={{ maxHeight: "18rem" }}>
              <DoughnutChart chartData={data2} />
            </center>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
