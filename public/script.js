fetch('/api/videos')
    .then(response => response.json())
    .then(videos => {
        const videosContainer = document.getElementById('videos');
        videos.forEach(video => {
            const videoElement = document.createElement('div');
            videoElement.classList.add('video');

            videoElement.innerHTML = `
                <img src="${video.thumbnail}" alt="${video.title}">
                <div class="video-title">${video.title}</div>
                <a class="video-watch" href="https://www.youtube.com/watch?v=${video.videoId}" target="_blank">Watch Video</a>
            `;
            videosContainer.appendChild(videoElement);
        });
    });