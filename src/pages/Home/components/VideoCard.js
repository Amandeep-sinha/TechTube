import React, { useState, useEffect } from "react";
import "./VideoCard.css";
import { Link, useNavigate  } from "react-router-dom";
import { useAuth } from "../../../context/auth/authContext";
import { useData } from "../../../context/data/videoContext";
import { addToHistory } from "../../../services";
import { watchLaterHandler } from "../../../utils";

  export default function VideoCard({ video }) {
  const navigate = useNavigate();
  const { token } = useAuth();
  const { dispatch, history, setModal, setModelData } = useData();
  const [showList, setShowList] = useState(false);
  const { _id, title, creator, isInWatchLater } = video;  
  const isInHistory = history.find((historyVideo) => historyVideo._id === _id);

  const clickToVideoHandler = () => {
    navigate(`/${_id}`);
    token && !isInHistory && addToHistory(dispatch, video, token);
  };
  const addToWatchLater = () => {
    token ? watchLaterHandler(dispatch, video, token) : navigate("login");
  };
  const addToPlaylist = () => {
    if (token) {
      setModal(true);
      setModelData(video);
    } else {
      navigate("login");
    }
  };

  return (
    <div className="card">
      <img
        className="card-img"
        src={`https://i.ytimg.com/vi/${_id}/0.jpg`}
        onClick={() => clickToVideoHandler()}
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
               <div
                className={`${isInWatchLater && "btn-trash"}`}
                onClick={() => addToWatchLater()}
              >
                <i
                  className={`fa ${isInWatchLater ? "fa-trash" : "fa-clock-o"}`}
                  aria-hidden="true"
                ></i>
                {isInWatchLater
                  ? "Remove from Watch Later"
                  : "Add to Watch Later"}
              </div>
              <div  onClick={() => addToPlaylist()}>
                <i className="fa fa-play-circle" aria-hidden="true"></i>
                Add to Playlist
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