import React from "react";
import PlaylistCard from "./PlaylistCard";

export  function PlaylistList() {
  return (
    <div className="video-list-container">
      <div className="container-title">
        <h3>My Collection 1 Playlist</h3>
        <span>2 videos</span>
      </div>
      <div className="responsive-grid">
        <PlaylistCard />
      </div>
    </div>
  );
}