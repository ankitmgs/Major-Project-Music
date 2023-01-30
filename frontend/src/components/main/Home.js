import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import app_config from "../../config";
import MusicCard from "../../props/MusicCard";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;

  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "red",
        marginRight: "2rem",
        color: "black",
      }}
      onClick={onClick}
    />
  );
}

const Home = ({ selMusic, setSelMusic }) => {
  const url = app_config.api_url;

  const [musicArray, setMusicArray] = useState([]);
  const [artistArray, setArtistArray] = useState([]);

  const getMusic = async () => {
    const response = await fetch(url + "/music/getall");
    const data = await response.json();
    console.log("songs", data);
    setMusicArray(data);
  };

  const getArtist = async () => {
    const response = await fetch(url + "/artist/getall");
    const data = await response.json();
    console.log("artists", data);
    setArtistArray(data);
  };

  useEffect(() => {
    getMusic();
    getArtist();
  }, []);

  const displayMusic = () => {
    return musicArray.map((music) => (
      <div className="d-flex justify-content-center">
        <MusicCard
          // singer={music.artist.name}
          music={music}
          setSelMusic={setSelMusic}
        />
      </div>
    ));
  };

  const settings = {
    className: "center",
    infinite: false,
    centerPadding: "60px",
    slidesToShow: 6,
    swipeToSlide: true,
    nextArrow: <SampleNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const settings2 = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    autoplay: true,

    speed: 500,
  };

  var settings3 = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container mt-5">
      <div >
        <Slider {...settings2}>
          <div className="d-flex flex-column">
            {/* <h3>1</h3> */}
            <center>
              <img
                style={{
                  width: "380px",
                  height: "250px",
                  backgroundSize: "cover",
                }}
                src="https://a10.gaanacdn.com/gn_img/showcase/0wrb4N3Lg7/wrb4jpM3Lg/size_l_1640488725.webp"
                alt="artist-img"
              />
            </center>
          </div>
          <div className="d-flex flex-column">
            {/* <h3>1</h3> */}
            <center>
              <img
                style={{
                  width: "380px",
                  height: "250px",
                  backgroundSize: "cover",


                }}
                src="https://s1.dmcdn.net/v/H2Gni1NlaziC8Dhx6/x1080"
                alt="artist-img"
              />
            </center>
          </div>
          <div className="d-flex flex-column">
            {/* <h3>1</h3> */}
            <center>
              <img
                style={{
                  width: "380px",
                  height: "250px",
                  backgroundSize: "cover",
                }}
                src="https://a10.gaanacdn.com/gn_img/albums/7rVW1aRWk5/VW1aEGejWk/size_l.webp"
                alt="artist-img"
              />
            </center>
          </div>
          <div className="d-flex flex-column">
            {/* <h3>1</h3> */}
            <center>
              <img
                style={{
                  width: "380px",
                  height: "250px",
                  backgroundSize: "cover",

                }}
                src="https://a10.gaanacdn.com/gn_img/albums/D0PKLrWGl9/PKLqE2XR3G/size_l.jpg"
                alt="artist-img"
              />
            </center>
          </div>
          <div className="d-flex  justify-content-between">
            {/* <h3>1</h3> */}
            <center>
              <img
                style={{
                  width: "380px",
                  height: "250px",
                  backgroundSize: "cover",
                  // borderRadius: "50%",

                }}
                src="https://a10.gaanacdn.com/gn_img/albums/a7LWBaz3zX/LWBkQx9Dbz/size_l.jpg"
                alt="artist-img"
              />
            </center>
          </div>


        </Slider>
      </div>
      <div className="mt-5">
        <span
          style={{
            marginLeft: "0.7rem",
            color: "black",
            fontSize: "1.2rem",
            fontWeight: "bolder",
          }}
        >
          Popular Songs
        </span>
        <Slider {...settings}>{displayMusic()}</Slider>
      </div>
      <div className="mt-5">
        <span
          style={{
            marginLeft: "0.7rem",
            color: "black",
            fontSize: "1.2rem",
            fontWeight: "bolder",
          }}
        >
          New Releases
        </span>
        <Slider {...settings}>{displayMusic()}</Slider>
      </div>
      <div className="mt-5">
        <span
          style={{
            marginLeft: "0.7rem",
            color: "black",
            fontSize: "1.2rem",
            fontWeight: "bolder",
          }}
        >
          Trending Songs
        </span>
        <Slider {...settings}>{displayMusic()}</Slider>
      </div>

      <div className="mt-5">
        <span
          style={{
            marginLeft: "0.7rem",
            color: "black",
            fontSize: "1.2rem",
            fontWeight: "bolder",
          }}
        >
          Featured Artists
        </span>
        <Slider {...settings3}>
          <div className="d-flex flex-column">
            {/* <h3>1</h3> */}
            <center>
              <img
                style={{
                  width: "150px",
                  height: "150px",
                  backgroundSize: "cover",
                  borderRadius: "50%",
                  border: "7px solid black",
                }}
                src="https://images.hindustantimes.com/img/2022/12/30/550x309/e2a13dc8-82ec-11eb-a5d1-d80dd4489497_1615524097058_1672360184539_1672360184539.jpg"
                alt="artist-img"
              />
            </center>
            <p
              className="d-flex justify-content-center mt-2"
              style={{ fontSize: "large", color: "black" }}
            >
              Arijit Singh
            </p>
          </div>
          <div className="d-flex flex-column">
            {/* <h3>1</h3> */}
            <center>
              <img
                style={{
                  width: "150px",
                  height: "150px",
                  backgroundSize: "cover",
                  borderRadius: "50%",
                  border: "7px solid black",
                }}
                src="https://maharashtratimes.com/thumb/msid-89431861,imgsize-60758,width-540,height-405,resizemode-75/lata-mangeshkar-89431861.jpg"
                alt="artist-img"
              />
            </center>
            <p
              className="d-flex justify-content-center mt-2"
              style={{ fontSize: "large", color: "black" }}
            >
              Lata Mangeshkar
            </p>
          </div>
          <div className="d-flex flex-column">
            {/* <h3>1</h3> */}
            <center>
              <img
                style={{
                  width: "150px",
                  height: "150px",
                  backgroundSize: "cover",
                  borderRadius: "50%",
                  border: "7px solid black",
                }}
                src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Darsan_Raval.jpg"
                alt="artist-img"
              />
            </center>
            <p
              className="d-flex justify-content-center mt-2"
              style={{ fontSize: "large", color: "black" }}
            >
              Darshan Raval
            </p>
          </div>
          <div className="d-flex flex-column">
            {/* <h3>1</h3> */}
            <center>
              <img
                style={{
                  width: "150px",
                  height: "150px",
                  backgroundSize: "cover",
                  borderRadius: "50%",
                  border: "7px solid black",
                }}
                src="https://i.scdn.co/image/ab6761610000e5ebcb6926f44f620555ba444fca"
                alt="artist-img"
              />
            </center>
            <p
              className="d-flex justify-content-center mt-2"
              style={{ fontSize: "large", color: "black" }}
            >
              Pritam
            </p>
          </div>
          <div className="d-flex flex-column">
            {/* <h3>1</h3> */}
            <center>
              <img
                style={{
                  width: "150px",
                  height: "150px",
                  backgroundSize: "cover",
                  borderRadius: "50%",
                  border: "7px solid black",
                }}
                src="https://m.economictimes.com/thumb/msid-94687190,width-1200,height-900,resizemode-4,imgsize-29224/udit-narayan-canva.jpg"
                alt="artist-img"
              />
            </center>
            <p
              className="d-flex justify-content-center mt-2"
              style={{ fontSize: "large", color: "black" }}
            >
              Udit Narayan
            </p>
          </div>
          <div className="d-flex flex-column">
            {/* <h3>1</h3> */}
            <center>
              <img
                style={{
                  width: "150px",
                  height: "150px",
                  backgroundSize: "cover",
                  borderRadius: "50%",
                  border: "7px solid black",
                }}
                src="https://images.hindustantimes.com/img/2022/12/30/550x309/e2a13dc8-82ec-11eb-a5d1-d80dd4489497_1615524097058_1672360184539_1672360184539.jpg"
                alt="artist-img"
              />
            </center>
            <p
              className="d-flex justify-content-center mt-2"
              style={{ fontSize: "large", color: "black" }}
            >
              Arijit Singh
            </p>
          </div>
          <div className="d-flex flex-column">
            {/* <h3>1</h3> */}
            <center>
              <img
                style={{
                  width: "150px",
                  height: "150px",
                  backgroundSize: "cover",
                  borderRadius: "50%",
                  border: "7px solid black",
                }}
                src="https://images.hindustantimes.com/img/2022/12/30/550x309/e2a13dc8-82ec-11eb-a5d1-d80dd4489497_1615524097058_1672360184539_1672360184539.jpg"
                alt="artist-img"
              />
            </center>
            <p
              className="d-flex justify-content-center mt-2"
              style={{ fontSize: "large", color: "black" }}
            >
              Arijit Singh
            </p>
          </div>
          <div className="d-flex flex-column">
            {/* <h3>1</h3> */}
            <center>
              <img
                style={{
                  width: "150px",
                  height: "150px",
                  backgroundSize: "cover",
                  borderRadius: "50%",
                  border: "7px solid black",
                }}
                src="https://images.hindustantimes.com/img/2022/12/30/550x309/e2a13dc8-82ec-11eb-a5d1-d80dd4489497_1615524097058_1672360184539_1672360184539.jpg"
                alt="artist-img"
              />
            </center>
            <p
              className="d-flex justify-content-center mt-2"
              style={{ fontSize: "large", color: "black" }}
            >
              Arijit Singh
            </p>
          </div>
        </Slider>
      </div>

      <audio src={""}></audio>
    </div>
  );
};

export default Home;
