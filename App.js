const image = document.getElementById('cover'),
     title = document.getElementById('music-title'),
     artist = document.getElementById('music-artist'),
     currentTimeEl = document.getElementById('current-time'),
     durationEl = document.getElementById('duration'),
     progress = document.getElementById('progress'),
     playerProgress = document.getElementById('player-progress'),
     prevBtn = document.getElementById('prev'),
     nextBtn = document.getElementById('next'),
     playBtn = document.getElementById('play'),
     background = document.getElementById('bg-img');

const music = new Audio();

const songs = [
    {
        path: 'Music/Music 1.mp3',
        displayName: 'Ang Huling El Bimbo',
        cover: 'images/Image 1.jpg',
        artist: 'By: Eraserheads',
    },

    {
        path: 'Music/Music 2.mp3',
        displayName: 'Insomia',
        cover: 'images/Image 2.jpg',
        artist: 'By: Caraig David',
    },

    {
        path: 'Music/Music 3.mp3',
        displayName: 'Through the Years',
        cover: 'images/Image 3.jpg',
        artist: 'By: Kenny Rogers',
    },

    {
        path: 'Music/Music 4.mp3',
        displayName: 'The Journey',
        cover: 'images/Image 4.jpg',
        artist: 'By: Lea Salonga',
    },

    {
        path: 'Music/Music 5.mp3',
        displayName: 'Magbalik',
        cover: 'images/Image 5.jpg',
        artist: 'By: Callalily',
    },

    {
        path: 'Music/Music 6.mp3',
        displayName: 'God Gave Me You',
        cover: 'images/Image 6.jpg',
        artist: 'By: Bryan White',
    },

    {
        path: 'Music/Music 7.mp3',
        displayName: 'Photograph',
        cover: 'images/Image 7.jpg',
        artist: 'By: Ed Sheeran',
    },

    {
        path: 'Music/Music 8.mp3',
        displayName: 'Nothing Gonna Stop Us Now',
        cover: 'images/Image 8.jpg',
        artist: 'By: Starship',
    },

    {
        path: 'Music/Music 9.mp4',
        displayName: 'Opalite',
        cover: 'images/Image 9.jpg',
        artist: 'By: Taylor Swift',
    },

    {
        path: 'Music/Music 10.mp3',
        displayName: 'Marry Me',
        cover: 'images/Image 10.jpg',
        artist: 'By: Jason Derulo',
    },

    {
        path: 'Music/Music 11.mp3',
        displayName: 'By Chance (You & I)',
        cover: 'images/Image 11.jpg',
        artist: 'By: J.R.A. ',
    },

    {
        path: 'Music/Music 12.mp3',
        displayName: 'Dati',
        cover: 'images/Image 12.jpg',
        artist: 'By: Sam Concepcion, Tippy Dos Santos and Quest ',
    },

    {
        path: 'Music/Music 13.mp3',
        displayName: 'Narda',
        cover: 'images/Image 13.jpg',
        artist: 'By: Kamikazee',
    },

    {
        path: 'Music/Music 14.mp3',
        displayName: 'Rewrite The Stars',
        cover: 'images/Image 14.jpeg',
        artist: 'By: Anne-Marie & James Arthur',
    },

    {
        path: 'Music/Music 15.mp3',
        displayName: 'Huwag Muna Tayong Umuwi',
        cover: 'images/Image 15.jpg',
        artist: 'By: BINI',
    },

    {
        path: 'Music/Music 16.mp3',
        displayName: '2012',
        cover: 'images/Image 16.jpg',
        artist: 'By: Jay Sean, Nicki Minaj ',
    },

    {
        path: 'Music/Music 17.mp3',
        displayName: 'Long Live',
        cover: 'images/Image 17.jpg',
        artist: 'By: Taylor Swift',
    },

    {
        path: 'Music/Music 18.mp3',
        displayName: 'Statue',
        cover: 'images/Image 18.png',
        artist: 'By: Lil Eddie',
    },

    {
        path: 'Music/Music 19.mp4',
        displayName: 'Wherever You Will Go',
        cover: 'images/Image 19.jpg',
        artist: 'By: The Calling',
    },
];

let musicIndex = 0;
let isPlaying = false;

function togglePlay() {
    if (isPlaying) {
        pauseMusic();
    } else {
        playMusic();
    }
}

function playMusic(){
    isPlaying = true;
    //Change play button icon
    playBtn.classList.replace('fa-play', 'fa-pause');
    // Set button hover title
    playBtn.setAttribute('title', 'Pause');
    music.play();
}

function pauseMusic(){
    isPlaying = false;
    //Change pause button icon
    playBtn.classList.replace('fa-pause', 'fa-play');
    // Set button hover title
    playBtn.setAttribute('title', 'Play');
    music.pause();
}

function loadMusic(song){
    music.src = song.path;
    title.textContent = song.displayName;
    artist.textContent = song.artist;
    image.src = song.cover;
    background.src = song.cover;
}

function changeMusic(direction){
    musicIndex = (musicIndex + direction + songs.length) % songs.length;
    loadMusic(songs[musicIndex]);
    playMusic();
}

function updateProgressBar() {
    const {duration, currentTime} = music;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
    
    const formatTime = (time) => String(Math.floor(time)).padStart(2, '0');
    durationEl.textContent = `${formatTime(duration / 60)}:${formatTime(duration % 60)}`;
    currentTimeEl.textContent = `${formatTime(currentTime / 60)}:${formatTime(currentTime % 60)}`;
}

function setProgressBar (e) {
    const width = playerProgress.clientWidth;
    const clickX = e.offsetX;
    music.currentTime = (clickX / width) * music.duration;
}

playBtn.addEventListener('click', togglePlay);
prevBtn.addEventListener('click', () => changeMusic(-1));
nextBtn.addEventListener('click', () => changeMusic(1));
music.addEventListener('ended', () => changeMusic(1));
music.addEventListener('timeupdate', updateProgressBar);
playerProgress.addEventListener('click', setProgressBar);

loadMusic(songs[musicIndex]);



  