// src/App.js
import React, { useState } from 'react';
import Player from './components/Player';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [videos, setVideos] = useState([]);
  const [selectedVideoId, setSelectedVideoId] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await fetch(`/api/youtube/search?query=${searchQuery}`);
      const data = await response.json();
      setVideos(data);
    } catch (error) {
      console.error('Error fetching videos:', error);
    }
  };

  return (
    <div className="App">
      <h1>Music Video Player</h1>

      <div>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search for music videos"
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      <div>
        {videos.map((video) => (
          <div key={video.id.videoId} onClick={() => setSelectedVideoId(video.id.videoId)}>
            <h3>{video.snippet.title}</h3>
            <img src={video.snippet.thumbnails.default.url} alt={video.snippet.title} />
          </div>
        ))}
      </div>

      <Player videoId={selectedVideoId} />
    </div>
  );
}

export default App;
