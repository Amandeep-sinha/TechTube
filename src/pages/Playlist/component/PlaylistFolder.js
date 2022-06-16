import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Playlist.css";

export default function PlaylistFolder() {
  const [showList, setShowList] = useState(false);

  return (
    <div className="card">
      <Link to="playlistList">
        <img
          className="card-img"
          src="https://i.ytimg.com/vi/KUJsaM-hAjs/sddefault.jpg"
          alt=""
        />
        <div className="card-highlight flex-center">
          <i className="fa fa-play-circle" aria-hidden="true"></i>
          <p>1+</p>
        </div>
      </Link>
      <div className="card-info">
        <div className="card-title">
          <input
            className="card-title-header"
            type="text"
            value="My Colection 1"
            disabled
          />

          <div className="ellipse" onClick={() => setShowList(!showList)}>
            <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
            <div
              className={`option-list ${
                showList ? "display-flex" : "display-none"
              }`}
            >
              <div>
                <i className="fa fa-edit" aria-hidden="true"></i>
                Edit Playlist Name
              </div>
              <div>
                <i className="fa fa-trash" aria-hidden="true"></i>
                Delete Playlist
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}