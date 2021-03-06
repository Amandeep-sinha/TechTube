import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth/authContext";
import { useData } from "../../context/data/videoContext";
import { removeFromWatchLater } from "../../services";

export function WatchLaterCard({video}) {
  const [showList, setShowList] = useState(false);
  const { _id, title, creator } = video;
  const { dispatch } = useData();
  const { token } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="card">
      
        <img
          className="card-img"
          src={`https://i.ytimg.com/vi/${_id}/0.jpg`}
        onClick={() => navigate(`/${_id}`)}
        />
      <div className="card-info" title={title}>
        <div className="card-title">
          <h3 className="card-title-header">{title}</h3>
          <div className="ellipse" onClick={() => setShowList(!showList)}>
            <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
            <div
              className={`option-list ${
                showList ? "display-flex" : "display-none"
              }`}
            >
              <div>
                <i className="fa fa-heart" aria-hidden="true"></i>
                Add to Liked
              </div>
              <div>
                <i className="fa fa-play-circle" aria-hidden="true"></i>
                Add to Playlist
              </div>
              <div className="btn-trash" onClick={() => removeFromWatchLater(dispatch, _id, token)}>
                <i className="fa fa-trash" aria-hidden="true"></i>
                Remove from Watch Later
              </div>
            </div>
          </div>
        </div>

        <div className="card-description">
          <h3>{creator}</h3>
        </div>
      </div>
    </div>
  );
}