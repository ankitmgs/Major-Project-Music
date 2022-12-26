import React from "react";
import "../CSS/ArtistProfile.css";
import PlayCircleFilledRounded from "@mui/icons-material/PlayCircleFilledRounded";
import FavoriteRounded from '@mui/icons-material/FavoriteRounded';

const ArtistProfileProps = (props) => {
  return (
    <div className="artist-recent-profile-top">
      <figure className="artist-profile-recent-created">
        <img className="cover" src={props.img} />
        <div>
          <a href="#">
            <PlayCircleFilledRounded />{" "}
          </a>
          <a href="#"><FavoriteRounded /></a>
        </div>
      </figure>
      <span className="artist-song-name ">{props.song}</span><br />
        <span className="artist-singer-name">{props.singer}</span>
    </div>
  );
};

export default ArtistProfileProps;
