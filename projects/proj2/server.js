const express = require('express');
const axios = require('axios');
const path = require('path');
const app = express();
const port = 3000;

// YouTube API key and playlist ID
const apiKey = 'AIzaSyCvOFbnF4WaJmGhFCtFLQm7zcOb_jDdbWY';
const playlistId = 'PL2S5h5fo63DpkaH5u7DSBImZApcfAL4uY';
const youtubeApiUrl = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&key=${apiKey}`;

// Fetch the playlist videos via API
app.get('/api/videos', async (req, res) => {
  try {
    const response = await axios.get(youtubeApiUrl);
    const videos = response.data.items.map(item => ({
      title: item.snippet.title,
      description: item.snippet.description,
      videoId: item.snippet.resourceId.videoId,
      thumbnail: item.snippet.thumbnails.high.url,
    }));
    res.json(videos);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching YouTube videos');
  }
});

// Serve the index.html file at the root URL
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Serve static files (like index.html, images, etc.) from the "public" folder
app.use(express.static('public'));

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
