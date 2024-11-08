// src/components/Player.js
import React from 'react';

function Player({ videoId }) {
  if (!videoId) return <div>Select a video to play</div>;

  const videoSrc = `https://www.youtube.com/embed/${videoId}?autoplay=1`;

  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={videoSrc}
        title="YouTube video player"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default Player;
