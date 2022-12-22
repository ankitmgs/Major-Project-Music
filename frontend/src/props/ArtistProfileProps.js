import React from "react";
import "../CSS/ArtistProfile.css";
import PlayCircleFilledRounded from "@mui/icons-material/PlayCircleFilledRounded";
import FavoriteRounded from '@mui/icons-material/FavoriteRounded';

const ArtistProfileProps = (props) => {
  return (
    <div className="artist-recent-profile-top">
      <figure class="artist-profile-recent-created">
        <img src={props.img} />
        <div>
          <a href="#">
            <PlayCircleFilledRounded />{" "}
          </a>
          <a href="#"><FavoriteRounded /></a>
        </div>
      </figure>
    </div>
  );
};

export default ArtistProfileProps;
