import React from "react";
import VideoItem from "./VideoItem";

const VideoList = function ({ videos, onVideoSelect }) {
  const renderedItems = videos.map((video) => {
    return (
      <VideoItem
        key={video.id.videoId}
        video={video}
        onVideoSelect={onVideoSelect}
      />
    );
  });

  return <div className="ui relaxed divided list">{renderedItems}</div>;
};

export default VideoList;
