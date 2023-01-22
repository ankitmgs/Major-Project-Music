import React, { useEffect, useState } from "react";
import app_config from "../../config";

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

  return <div>ManageSongs</div>;
};

export default ManageSongs;
