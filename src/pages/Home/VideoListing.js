import "./VideoListing.css";
import React from "react";
import { Link } from "react-router-dom";

export function VideoListing() {
  return (
    <div className="video-list-container">
      <div className="category-list">
        <div className="category">All</div>
        <div className="category">HTML</div>
        <div className="category">CSS</div>
        <div className="category">JAVASCRIPT</div>
        <div className="category">REACT</div>
      </div>

      <div className="responsive-grid">
        <Link to="singleVideo">
          <div className="card">
            <img
              className="card-img"
              src="https://i.ytimg.com/vi/KUJsaM-hAjs/sddefault.jpg"
              alt=""
            />

            <div className="card-info">
              <div className="card-title">
                <h3 className="card-title-header">Getting Started with HTML5</h3>
                <div className="ellipse">
                  <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                  <div className="option-list">
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
                <h3>Tanay Pratap : 612355 view</h3>
              </div>
            </div>
          </div>
        </Link>     
      </div>
    </div>
  );
}