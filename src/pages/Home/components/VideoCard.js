import React, { useState } from "react";
import "./VideoCard.css";
import { Link } from "react-router-dom";

export default function VideoCard() {
  const [showList, setShowList] = useState(false);

  return (
    <div className="card">
      <Link to="singleVideo">
        <img
          className="card-img"
          src="https://i.ytimg.com/vi/KUJsaM-hAjs/sddefault.jpg"
          alt=""
        />
      </Link>
      <div className="card-info">
        <div className="card-title">
          <h3 className="card-title-header">First React App</h3>
          <div className="ellipse" onClick={() => setShowList(!showList)}>
            <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
            <div
              className={`option-list ${
                showList ? "display-flex" : "display-none"
              }`}
            >
              <div>
                <i className="fa fa-clock-o" aria-hidden="true"></i>
                Add to Watch Later
              </div>
              <div>
                <i className="fa fa-play-circle" aria-hidden="true"></i>
                Add to Playlist
              </div>
            </div>
          </div>
        </div>

        <div className="card-description">
          <h3>Ankur Warikoo : 475749view</h3>
        </div>
      </div>
    </div>
  );
}