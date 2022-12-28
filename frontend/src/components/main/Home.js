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

const Home = () => {
  const url = app_config.api_url;

  const [musicArray, setMusicArray] = useState([]);

  const getMusic = async () => {
    const response = await fetch(url + "/music/getall");
    const data = await response.json();
    console.log(data);
    setMusicArray(data);
  };

  useEffect(() => {
    getMusic();
  }, []);

  const displayMusic = () => {
    return musicArray.map((music) => (
      <>

      </>
    ))
  }

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

  return (
    <div className="container">
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
        <Slider {...settings}>
          <div>
            <MusicCard
              singer="Arijit Singh"
              song="Apna Bana Le"
              img="https://i.pinimg.com/originals/60/9a/80/609a8061a8ae93f2735f3e3e20190b90.jpg"
            />
          </div>
          <div>
            <MusicCard
              singer="Arijit Singh"
              song="Apna Bana Le"
              img="https://c.saavncdn.com/685/Luka-Chuppi-Hindi-2019-20190222104001-500x500.jpg"
            />
          </div>
          <div>
            <MusicCard
              singer="Arijit Singh"
              song="Apna Bana Le"
              img="https://static.moviecrow.com/marquee/kaabil-new-posters/101643_thumb_665.jpg"
            />
          </div>
          <div>
            <MusicCard
              singer="Arijit Singh"
              song="Apna Bana Le"
              img="https://d2r2ijn7njrktv.cloudfront.net/apnlive/uploads/2022/01/22144805/chalako-massi-1.jpg"
            />
          </div>
          <div>
            <MusicCard
              singer="Arijit Singh"
              song="Apna Bana Le"
              img="https://i.scdn.co/image/ab67616d0000b27322bac849d10d34f9643b908b"
            />
          </div>
          <div>
            <MusicCard
              singer="Arijit Singh"
              song="Apna Bana Le"
              img="https://i.scdn.co/image/ab67616d0000b27322bac849d10d34f9643b908b"
            />
          </div>
          <div>
            <MusicCard
              singer="Arijit Singh"
              song="Apna Bana Le"
              img="https://i.scdn.co/image/ab67616d0000b27322bac849d10d34f9643b908b"
            />
          </div>
          <div>
            <MusicCard
              singer="Arijit Singh"
              song="Apna Bana Le"
              img="https://i.scdn.co/image/ab67616d0000b27322bac849d10d34f9643b908b"
            />
          </div>
          <div>
            <MusicCard
              singer="Arijit Singh"
              song="Apna Bana Le"
              img="https://i.scdn.co/image/ab67616d0000b27322bac849d10d34f9643b908b"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Home;
