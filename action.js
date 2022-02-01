let audioElement = new Audio("audio/song1.mp3");
let Player = document.getElementById("Player");
let icns = document.querySelectorAll(".icn");
let songItem = document.querySelectorAll(".songItem");
let masterPlay = document.querySelector(".masterPlay");
// let masterPlay = document.querySelector("#Pause");

// to add song name dynamically

let songs = [
  {
    Name: "love you zindagi",
    filePath: "audio/song1.mp3",
    coverPath: "covers/download.jpg",
  },
  {
    Name: "salm-e-Ishq",
    filePath: "audio/song2.mp3",
    coverPath: "covers/download.jpg",
  },
  {
    Name: "salm-e-Ishq",
    filePath: "audio/song3.mp3",
    coverPath: "covers/download.jpg",
  },
  {
    Name: "namo-namo",
    filePath: "audio/song4.mp3",
    coverPath: "covers/download.jpg",
  },
  {
    Name: "zara-zara",
    filePath: "audio/song5.mp3",
    coverPath: "covers/download.jpg",
  },
  // {Name:"dilbar",       filePath:"audio/song6.mp3", coverPath: "covers/download.jpg" },
  // {Name:"ishq sufiyana", filePath:"audio/song7.mp3", coverPath: "covers/download.jpg" },
  // {Name:"vaaste",        filePath:"audio/song8.mp3", coverPath: "covers/download.jpg" },
  // {Name:"o mere dil chain", filePath:"audio/song9.mp3", coverPath: "covers/download.jpg" },
  // {Name:"salm-e-Ishq", filePath:"audio/song2.mp3", coverPath: "covers/download.jpg" },
  // {Name:"salm-e-Ishq", filePath:"audio/song3.mp3", coverPath: "covers/download.jpg" },
  // {Name:"namo-namo", filePath:"audio/song4.mp3", coverPath: "covers/download.jpg" },
];
// after slecting all songitem i have to make each song ka index song ke index ke equall
songItem.forEach((element, i) => {
  element.querySelector(".songName").innerText = songs[i].Name;
});

// change icn on click
// slect all the icns and use for each and add the class of pause and remove play class and vice-versa
// now phele bar jo click hoga vo currentClick hoga classlist add or remove kr denge but jb second click hoga
// to vo currentClick bnega or phela currentClick last click bnega or hm uspe se remove krenge pause icn and add
// kr denge play icn 
// audio element ke liye jis icn p click kiya hai uski id lenge or vhi same id pass kr denge audioelment.scr ke songs arry indx m 
icns.forEach((icn) => {
  icn.addEventListener("click", (e) => {
    let currentClick = e.target;
    if (currentClick.classList.contains("fa-play")) {
      currentClick.classList.remove("fa-play");
      currentClick.classList.add("fa-pause");
      masterPlay.classList.add("fa-pause-circle")
      masterPlay.classList.remove("fa-play-circle")
      audioElement.src = songs[e.target.id].filePath
      audioElement.play()
    } else {
      currentClick.classList.add("fa-play");
      currentClick.classList.remove("fa-pause");
      masterPlay.classList.remove("fa-pause-circle")
      masterPlay.classList.add("fa-play-circle")
      audioElement.pause()
    }
    icns.forEach((icn2) => {
      let lastClick = icn2;
      if (lastClick != currentClick) {
        lastClick.classList.remove("fa-pause");
        lastClick.classList.add("fa-play");
      }
    });
  });
});

masterPlay.addEventListener("click",()=>{
    if(masterPlay.classList.contains("fa-pause-circle")){
        masterPlay.classList.remove("fa-pause-circle");
      masterPlay.classList.add("fa-play-circle");
      audioElement.pause()
    }
})



//CHANGE BTN
// const pauseIconClassName = "fas fa-pause";
// const playIconClassName = 'fa-play-circle';
// const btns = document.querySelectorAll('.btn')
// function onChange(event){
//     //  get the button elememt from the event
//     const buttonElement = event.currentTarget;

//     // check if play button class is present on our button
//     const isPlayButton = buttonElement.classList.contains(playIconClassName);

//     // if a play button, remove the play button class and add pause button class
//     if(isPlayButton){
//         buttonElement.classList.remove(playIconClassName);
//         buttonElement.classList.add(pauseIconClassName);
//         audioElement.play();
//     }else{
//         buttonElement.classList.add(playIconClassName);
//         buttonElement.classList.remove(pauseIconClassName);
//         audioElement.pause();
//     }

// }
// btns.forEach(btn=>{
//     btn.addEventListener('click', onChange);
//     songUdate()
// })
