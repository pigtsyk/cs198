// routes/youtube.js
const express = require('express');
const axios = require('axios');
const router = express.Router();
const { YOUTUBE_API_KEY } = require('../config/config');

// Search YouTube for music videos
router.get('/search', async (req, res) => {
  const { query } = req.query;
  try {
    const response = await axios.get(`https://www.googleapis.com/youtube/v3/search`, {
      params: {
        part: 'snippet',
        maxResults: 10,
        q: query,
        type: 'video',
        videoCategoryId: '10', // YouTube category ID for music
        key: YOUTUBE_API_KEY,
      },
    });
    res.json(response.data.items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
