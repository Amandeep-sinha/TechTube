import "./VideoListing.css";
import React from "react";
import VideoCard from "./components/VideoCard";

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
        <VideoCard/>
      </div>
    </div>
  );
}