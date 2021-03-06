import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/auth/authContext";
import { useData } from "../../../context/data/videoContext";
import { removeVideoFromPlaylist } from "../../../services";
import { watchLaterHandler } from "../../../utils";

export default function PlaylistCard({video, listId}) {
  const [showList, setShowList] = useState(false);
  const { _id, title, creator } = video;
  const { dispatch, videos } = useData();
  const { token } = useAuth();
  const navigate = useNavigate();
  const isInWatchLater = videos.some(
    (list) => list._id === _id && list.isInWatchLater
  );
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
              <div  className="btn-trash"
                onClick={() =>
                  removeVideoFromPlaylist(dispatch, listId, _id, token)
                }>
                <i className="fa fa-trash" aria-hidden="true"></i>
                Remove from Playlist
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