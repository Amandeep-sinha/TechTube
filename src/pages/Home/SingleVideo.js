import React from "react";
import "./SingleVideo.css";

export function SingleVideo() {
  return (
    <div className="play-container">
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/KUJsaM-hAjs"
        title="TechTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen=""
      ></iframe>
      <div className="video-footer">
        <div className="footer-title">
          <h2>First react app</h2>
          <h5>Tanay Pratap</h5>
        </div>

        <div className="footer-btn-list">
          <div>
            <i className="fa fa-thumbs-o-up" aria-hidden="true"></i>
            <span>Like</span>
          </div>
          <div>
            <i className="fa fa-play-circle" aria-hidden="true"></i>
            <span>Save</span>
          </div>
          <div>
            <i className="fa fa-clock-o" aria-hidden="true"></i>
            <span>Watch Later</span>
          </div>
        </div>
        <div className="footer-description">
          <h4>Description :</h4>
          <div>
            <p>
              In this video, you will create a react app from scratch, wihch you can add in your portfolio as a project.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}