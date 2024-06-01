document.addEventListener("DOMContentLoaded", function() {
    // Simulate loading time
    setTimeout(function() {
        // Remove the loading screen and show the main content
        document.body.classList.add('loaded');
    }, 3000); // Adjust the timeout duration as needed
});
const audioPlayer = document.getElementById('audio-player');
const playPauseButton = document.getElementById('play-pause');
const rewindButton = document.getElementById('rewind');
const fastForwardButton = document.getElementById('fast-forward');
const volumeSlider = document.getElementById('volume-slider');

playPauseButton.addEventListener('click', () => {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playPauseButton.innerHTML = '&#10074;&#10074;'; // Pause symbol
    } else {
        audioPlayer.pause();
        playPauseButton.innerHTML = '&#9654;'; // Play symbol
    }
});

rewindButton.addEventListener('click', () => {
    audioPlayer.currentTime -= 10; // Rewind 10 seconds
});

fastForwardButton.addEventListener('click', () => {
    audioPlayer.currentTime += 10; // Fast forward 10 seconds
});

volumeSlider.addEventListener('input', () => {
    audioPlayer.volume = volumeSlider.value / 100;
});

async function fetchNews(source, elementId) {
    const apiKey = '72cff896a1ff43558bee3f6f3ecb5648'; // Replace with your actual API key
    const urls = {
        cnn: `https://newsapi.org/v2/top-headlines?sources=cnn&apiKey=${apiKey}`,
        aljazeera: `https://newsapi.org/v2/top-headlines?sources=al-jazeera-english&apiKey=${apiKey}`
    };
    
    try {
        const response = await fetch(urls[source]);
        const data = await response.json();
        const newsList = document.getElementById(elementId);
        newsList.innerHTML = data.articles.map(article => `<p>${article.title}</p>`).join('');
    } catch (error) {
        console.error('Error fetching news:', error);
    }
}

function updateNews() {
    fetchNews('cnn', 'cnn-news');
    fetchNews('aljazeera', 'aljazeera-news');
}

document.addEventListener('DOMContentLoaded', () => {
    updateNews();
    setInterval(updateNews, 60000); // Update every 60 seconds
});
document.addEventListener("DOMContentLoaded", function() {
    // Simulate loading time
    setTimeout(function() {
        // Remove the loading screen and show the main content
        document.body.classList.add('loaded');
    }, 3000); // Adjust the timeout duration as needed
});
