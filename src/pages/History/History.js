import React from "react";
import { HistoryCard } from "./HistoryCard";
import { useData } from "../../context/data/videoContext";
import {useNavigate} from "react-router-dom";
import { clearHistory } from "../../services";
import { useAuth } from "../../context/auth/authContext";

export function History() {
  const { history, dispatch } = useData();
  const { token } = useAuth();
  const isHistoryFill = history.length > 0;
  const navigate = useNavigate();
  return (
    <div className="video-list-container">
      <div className="container-title">
        <h3>History</h3>
        {isHistoryFill && (
          <div className="container-title-header wd-inherit">
            <span>({history.length} videos) </span>
            <button
              className="btn danger btn-clear"
              onClick={() => clearHistory(dispatch, token)}
            >
              <i className="fa fa-trash" aria-hidden="true" />
              <span>Clear History</span>
            </button>
          </div>
        )}
      </div>
      <div className="responsive-grid">
      {isHistoryFill ? (
        <div>
          <div className="responsive-grid">
            {history.map((video) => (
              <HistoryCard key={video.id} video={video} />
            ))}
          </div>
        </div>
      ) : (
        <div className="message-container flex-center">
          <p className="paragraph-md">
             you haven't watched anything yet.
          </p>
          <button className="btn success" onClick={() => navigate("/")}>
            Watch Now
          </button>
        </div>
      )}
      </div>
    </div>
  );
}