


let Player = document.getElementById("Player");

const songItem = document.querySelectorAll(".songItem")

// to add song name dynamically 

let songs = [
    {Name:"love you zindagi", filePath:"audio/song1.mp3", coverPath: "covers/download.jpg" },
    {Name:"salm-e-Ishq", filePath:"audio/song2.mp3", coverPath: "covers/download.jpg" },
    {Name:"salm-e-Ishq", filePath:"audio/song3.mp3", coverPath: "covers/download.jpg" },
    {Name:"namo-namo", filePath:"audio/song4.mp3", coverPath: "covers/download.jpg" },
    {Name:"zara-zara", filePath:"audio/song5.mp3", coverPath: "covers/download.jpg" },
    // {Name:"dilbar",       filePath:"audio/song6.mp3", coverPath: "covers/download.jpg" },
    // {Name:"ishq sufiyana", filePath:"audio/song7.mp3", coverPath: "covers/download.jpg" },
    // {Name:"vaaste",        filePath:"audio/song8.mp3", coverPath: "covers/download.jpg" },
    // {Name:"o mere dil chain", filePath:"audio/song9.mp3", coverPath: "covers/download.jpg" },
    // {Name:"salm-e-Ishq", filePath:"audio/song2.mp3", coverPath: "covers/download.jpg" },
    // {Name:"salm-e-Ishq", filePath:"audio/song3.mp3", coverPath: "covers/download.jpg" },
    // {Name:"namo-namo", filePath:"audio/song4.mp3", coverPath: "covers/download.jpg" },
]

// after slecting all songitem i have to make each song ka index song ke index ke equall
songItem.forEach((element,i)=>{
    console.log(element,i)
    element.querySelector(".songName").innerText = songs[i].Name;
});



  //CHANGE BTN
const pauseIconClassName = 'fa-pause-circle';
const playIconClassName = 'fa-play-circle';
const btns = document.querySelectorAll('.btn')
function onChange(event){
    //  get the button elememt from the event
    const buttonElement = event.currentTarget;

    // check if play button class is present on our button
    const isPlayButton = buttonElement.classList.contains(playIconClassName);

    // if a play button, remove the play button class and add pause button class
    if(isPlayButton){
        buttonElement.classList.remove(playIconClassName);
        buttonElement.classList.add(pauseIconClassName);
        audioElement.play();
    }else{
        buttonElement.classList.add(playIconClassName);
        buttonElement.classList.remove(pauseIconClassName);
        audioElement.pause();
    }
    
}
btns.forEach(btn=>{
    btn.addEventListener('click', onChange);
    songUdate()
})


