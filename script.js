//initialize variables

let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let gif0 = document.getElementById('gif0');
let gif1 = document.getElementById('gif1');
let gif2 = document.getElementById('gif2');
let gif3 = document.getElementById('gif3');
let gif4 = document.getElementById('gif4');
let gif5 = document.getElementById('gif5');
let gif6 = document.getElementById('gif6');
let gif7 = document.getElementById('gif7');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Eminem - Lose Yourself", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Halsey - Without Me", filePath: "songs/2.mp3", coverPath: "covers/2.png"},
    {songName: "Kendrick Lamar, SZA - All The Stars", filePath: "songs/3.mp3", coverPath: "covers/3.jpeg"},
    {songName: "Major Lazer & DJ Snake - Lean On (feat. MØ)", filePath: "songs/4.mp3", coverPath: "covers/4.png"},
    {songName: "Martin Jensen - Solo Dance", filePath: "songs/5.mp3", coverPath: "covers/5.jpeg"},
    {songName: "Weeknd - Starboy", filePath: "songs/6.mp3", coverPath: "covers/6.webp"},
    {songName: "The Chainsmokers - Closer ft. Halsey", filePath: "songs/7.mp3", coverPath: "covers/7.jpeg"},
    {songName: "The Script - Superheroes", filePath: "songs/8.mp3", coverPath: "covers/8.jpeg"}
]

//covers and songs selection
songItems.forEach((element, i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})


//handle play/pause

masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-solid', 'fa-play');
        masterPlay.classList.add('fa-solid', 'fa-pause');
        gif.style.opacity = 1;
        const a = 'gif'+songIndex;
        const aE = document.getElementById(a);
        aE.style.opacity = 1;
    }else{
        audioElement.pause();
        masterPlay.classList.remove('fa-solid', 'fa-pause');
        masterPlay.classList.add('fa-solid', 'fa-play');
        gif.style.opacity = 0;
        const a = 'gif'+songIndex;
        const aE = document.getElementById(a);
        aE.style.opacity = 0;
    }
})

//progressbar
audioElement.addEventListener('timeupdate', ()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
    if(progress == 100){
        songIndex += 1;
        audioElement = songs[songIndex].filePath;
        console.log(audioElement);
    }
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = (myProgressBar.value*audioElement.duration)/100; 
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-solid', 'fa-pause');
        element.classList.add('fa-solid', 'fa-play');
    })
}

function makeAllStop(){
    for(i = 0; i<8; i++){
        const a = 'gif'+i;
        const aE = document.getElementById(a);
        aE.style.opacity = 0;
    }
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-solid', 'fa-play');
        e.target.classList.add('fa-solid', 'fa-pause');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-solid', 'fa-play');
        masterPlay.classList.add('fa-solid', 'fa-pause');
        gif.style.opacity = 1;
        makeAllStop();
        const a = 'gif'+songIndex;
        const aE = document.getElementById(a);
        aE.style.opacity = 1;
        masterSongName.innerText = songs[songIndex].songName;
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex==7){
        songIndex = 0;
    }else{
        songIndex += 1;
    }
    makeAllPlays();
    document.getElementsByClassName('songItemPlay')[songIndex].classList.remove('fa-solid', 'fa-play');
    document.getElementsByClassName('songItemPlay')[songIndex].classList.add('fa-solid', 'fa-pause');
    audioElement.src = `songs/${songIndex+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-solid', 'fa-play');
    masterPlay.classList.add('fa-solid', 'fa-pause');
    gif.style.opacity = 1;
    makeAllStop();
    const a = 'gif'+songIndex;
    const aE = document.getElementById(a);
    aE.style.opacity = 1;
    masterSongName.innerText = songs[songIndex].songName;
})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex==0){
        songIndex = 7;
    }else{
        songIndex -= 1;
    }
    makeAllPlays();
    document.getElementsByClassName('songItemPlay')[songIndex].classList.remove('fa-solid', 'fa-play');
    document.getElementsByClassName('songItemPlay')[songIndex].classList.add('fa-solid', 'fa-pause');
    audioElement.src = `songs/${songIndex+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-solid', 'fa-play');
    masterPlay.classList.add('fa-solid', 'fa-pause');
    gif.style.opacity = 1;
    makeAllStop();
    const a = 'gif'+songIndex;
    const aE = document.getElementById(a);
    aE.style.opacity = 1;
    masterSongName.innerText = songs[songIndex].songName;
})


