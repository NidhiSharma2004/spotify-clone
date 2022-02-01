let audioElement = new Audio();
let Player = document.getElementById("Player");
let icns = document.querySelectorAll(".icn");
let songItem = document.querySelectorAll(".songItem");
let masterPlay = document.querySelector(".masterPlay");
let bar = document.querySelector(".bar");
let progressbar = document.querySelector(".progressbar");
let back = document.querySelector(".back");
let next = document.querySelector(".next");
// let masterPlay = document.querySelector("#Pause");

// to add song name dynamically

let songs = [
  {
    Name: "love you zindagi",
    filePath: "audio/song1.mp3",
    coverPath: "covers/download.jpg",
  },
  {
    Name: "dilbar",
    filePath: "audio/song6.mp3",
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
let songlen = songs.length
// change icn on click
// slect all the icns and use for each and add the class of pause and remove play class and vice-versa
// now phele bar jo click hoga vo currentClick hoga classlist add or remove kr denge but jb second click hoga
// to vo currentClick bnega or phela currentClick last click bnega or hm uspe se remove krenge pause icn and add
// kr denge play icn
// audio element ke liye jis icn p click kiya hai uski id lenge or vhi same id pass kr denge audioelment.scr ke songs arry indx m

let id;
icns.forEach((icn) => {
  icn.addEventListener("click", (e) => {
    let currentClick = e.target;
    id = e.target.id;
    if (currentClick.classList.contains("fa-play")) {
      currentClick.classList.remove("fa-play");
      currentClick.classList.add("fa-pause");
      masterPlay.classList.add("fa-pause-circle");
      masterPlay.classList.remove("fa-play-circle");
      audioElement.src = songs[e.target.id].filePath;
      audioElement.play();
    } else {
      currentClick.classList.add("fa-play");
      currentClick.classList.remove("fa-pause");
      masterPlay.classList.remove("fa-pause-circle");
      masterPlay.classList.add("fa-play-circle");
      audioElement.pause();
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

masterPlay.addEventListener("click", () => {
  if (masterPlay.classList.contains("fa-pause-circle")) {
    masterPlay.classList.remove("fa-pause-circle");
    masterPlay.classList.add("fa-play-circle");
    audioElement.pause();
  } else {
    masterPlay.classList.add("fa-pause-circle");
    masterPlay.classList.remove("fa-play-circle");
    audioElement.src = "audio/song1.mp3";
    audioElement.play();
  }
});

audioElement.ontimeupdate = function (e) {
  bar.style.width =
    Math.floor((audioElement.currentTime * 100) / audioElement.duration) + "%";
  if (audioElement.currentTime > 0) {
    progressbar.onclick = function (e) {
      audioElement.currentTime =
        (e.offsetX / progressbar.offsetWidth) * audioElement.duration;
    };
  }
};
// sbse phele declare kiya variable id ke naam se then usko equal kiya e.target.id ke taki jo bhi gana chlrha h uski 
// id aajaye first thing is we want to increase value of id means id++ and kitne se isliye incId+1 to id ki value 1 ho jayegi
// pas krenge id ko songs ki jo lenght hai vo 5 h and hr bar 1 ka increment hoga to jb id ki real value 3 hogi
// to vo inc. hoke 4 ho jayegi isliye hm ise lenght se 2 km tk chalyenge kyuki jaise hi uski real value id ki 4 index hogi
// to incr hoke 5 hojayegi and error dega islye jb value 3 se bdi hogi to use vapis zero p set kr denge or vapis loop krnge
next.addEventListener("click", () => {
 if(id<=songs.length-2){
  let incId = id++
  incId+1
  audioElement.src = songs[id].filePath;
  audioElement.play();
 }else {
  id=0
  audioElement.src = songs[id].filePath;
  audioElement.play();
 }
})
// same as next
back.addEventListener("click", () => {
  if(id<=songs.length-1 && id>0){
    let incId = id--
    incId-1
    audioElement.src = songs[id].filePath;
    audioElement.play();
   }else if(id==0){
    id=songs.length-1
    audioElement.src = songs[id].filePath;
    audioElement.play();
   }
});


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
