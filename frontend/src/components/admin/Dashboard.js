import React, { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Data as UserData } from ".././utils/data";
import BarChart from "./Graph/BarChart";


const AdminDashboard = () => {

  const [userData, setUserData] = useState({
    labels: UserData.map((data)=> data.year),
    datasets: [{
      label: "User Gained",
      data: UserData.map((data) => data.userGain)
    }]
  })

  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: [234, 543, 34534, 43, 57, 395, 53],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Dataset 2',
        data: [234, 543, 34534, 43, 57, 395, 53],
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };


  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-sm-12">
          <div className="card">
            <BarChart chartData={data} />
          </div>
        </div>
        <div className="col-md-6 col-sm-12">
          <div className="card">hello</div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
