// Создаем элементы
const phone = document.createElement('div');
phone.style.width = '300px';
phone.style.display = 'flex';
phone.style.height = '617px';
phone.style.left = '100px';
phone.style.bottom = '-1000px';
phone.style.position = 'fixed';
phone.style.transition = '0.5s';
phone.style.zIndex = '9999';

document.body.appendChild(phone);



const phonebtnpower = document.createElement('div');
phonebtnpower.style.width = '5px';
phonebtnpower.style.display = 'flex';
phonebtnpower.style.height = '90px';
phonebtnpower.style.right = '0px';
phonebtnpower.style.top = '160px';
phonebtnpower.style.zIndex = '11';
phonebtnpower.style.position = 'absolute';
phonebtnpower.style.borderRadius = '0px 10px 10px 0px';
phonebtnpower.style.backgroundColor = 'rgb(190, 190, 190)';
phone.appendChild(phonebtnpower);

const phonebtnplus = document.createElement('div');
phonebtnplus.style.width = '5px';
phonebtnplus.style.display = 'flex';
phonebtnplus.style.height = '60px';
phonebtnplus.style.left = '0px';
phonebtnplus.style.top = '130px';
phonebtnplus.style.zIndex = '11';
phonebtnplus.style.position = 'absolute';
phonebtnplus.style.borderRadius = '10px 0px 0px 10px';
phonebtnplus.style.backgroundColor = 'rgb(190, 190, 190)';
phone.appendChild(phonebtnplus);


const phonebtnvol = document.createElement('div');
phonebtnvol.style.width = '3px';
phonebtnvol.style.display = 'flex';
phonebtnvol.style.height = '30px';
phonebtnvol.style.left = '2px';
phonebtnvol.style.top = '80px';
phonebtnvol.style.zIndex = '11';
phonebtnvol.style.position = 'absolute';
phonebtnvol.style.borderRadius = '10px 0px 0px 10px';
phonebtnvol.style.backgroundColor = 'rgb(190, 190, 190)';
phone.appendChild(phonebtnvol);

const phonebtnminus = document.createElement('div');
phonebtnminus.style.width = '5px';
phonebtnminus.style.display = 'flex';
phonebtnminus.style.height = '60px';
phonebtnminus.style.left = '0px';
phonebtnminus.style.top = '210px';
phonebtnminus.style.zIndex = '11';
phonebtnminus.style.position = 'absolute';
phonebtnminus.style.borderRadius = '10px 0px 0px 10px';
phonebtnminus.style.backgroundColor = 'rgb(190, 190, 190)';
phone.appendChild(phonebtnminus);

const frame0 = document.createElement('div');
frame0.style.display = 'flex';
frame0.style.flexDirection = 'column';
frame0.style.width = '290px';
frame0.style.height = '615px';
frame0.style.left = '5px';
frame0.style.overflow = 'hidden';
frame0.style.position = 'absolute';

frame0.style.color = 'white';
// frame0.style.margin = '30px';
frame0.style.background = 'rgb(190, 190, 190)';
// frame0.style.paddingTop = '50px';
// frame0.style.paddingBottom = '20px';
frame0.style.borderRadius = '37px';
// frame0.style.border = '3px solid rgb(190, 190, 190)';
frame0.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.75), 0 8px 30px rgba(0, 0, 0, 0.5)';

phone.appendChild(frame0);

const pha1 = document.createElement('div');
pha1.style.position = "absolute";
pha1.style.transition = "0.3s";
pha1.style.top = "0px";
pha1.style.right = "50px";
pha1.style.width = "8px";
pha1.style.height = "3px";
pha1.style.backgroundColor = "rgb(222, 222, 222)";

const pha2 = document.createElement('div');
pha2.style.position = "absolute";
pha2.style.top = "50px";
pha2.style.transition = "0.3s";


pha2.style.left = "0px";
pha2.style.width = "3px";
pha2.style.height = "8px";
pha2.style.backgroundColor = "rgb(222, 222, 222)";

const pha3 = document.createElement('div');
pha3.style.position = "absolute";
pha3.style.bottom = "50px";
pha3.style.transition = "0.3s";


pha3.style.left = "0px";
pha3.style.width = "3px";
pha3.style.height = "8px";
pha3.style.backgroundColor = "rgb(222, 222, 222)";

const pha4 = document.createElement('div');
pha4.style.position = "absolute";
pha4.style.top = "50px";
pha4.style.transition = "0.3s";


pha4.style.right = "0px";
pha4.style.width = "3px";
pha4.style.height = "8px";
pha4.style.backgroundColor = "rgb(222, 222, 222)";

const pha5 = document.createElement('div');
pha5.style.position = "absolute";
pha5.style.bottom = "50px";
pha5.style.transition = "0.3s";

pha5.style.right = "0px";
pha5.style.width = "3px";
pha5.style.height = "8px";
pha5.style.backgroundColor = "rgb(222, 222, 222)";

const pha6 = document.createElement('div');
pha6.style.position = "absolute";
pha6.style.bottom = "0px";
pha6.style.transition = "0.3s";
pha6.style.left = "50px";
pha6.style.width = "8px";
pha6.style.height = "3px";
pha6.style.backgroundColor = "rgb(222, 222, 222)";



frame0.appendChild(pha1);
frame0.appendChild(pha2);
frame0.appendChild(pha3);
frame0.appendChild(pha4);
frame0.appendChild(pha5);
frame0.appendChild(pha6);

const frame01 = document.createElement('div');
frame01.style.display = 'flex';
frame01.style.flexDirection = 'column';
// frame01.style.width = '290px';
// frame01.style.height = '615px';
frame01.style.left = '3px';
frame01.style.right = '3px';
frame01.style.top = '3px';
frame01.style.bottom = '3px';
frame01.style.overflow = 'hidden';
frame01.style.position = 'absolute';

frame01.style.color = 'white';
// frame01.style.margin = '30px';
frame01.style.backgroundColor = 'black';

// frame01.style.paddingTop = '50px';
// frame01.style.paddingBottom = '20px';
frame01.style.borderRadius = '35px';
// frame01.style.border = '3px solid rgb(190, 190, 190)';
// frame01.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.75), 0 8px 30px rgba(0, 0, 0, 0.5)';

frame0.appendChild(frame01);

const frame02 = document.createElement('div');
frame02.style.background = 'url("asl0.png")';
frame02.style.height = '100%';
frame02.style.position = 'absolute';
frame02.style.backgroundSize = 'contain';
frame02.style.backgroundRepeat = 'no-repeat';
frame02.style.left = '100px';
frame02.style.right = '100px';
frame02.style.backgroundPosition = 'center';
// frame02.style.bottom = '30px';
frame01.appendChild(frame02);

const frame = document.createElement('div');
const frameBg = document.createElement('div');
const bgColor = document.createElement('div');
const bgBlack = document.createElement('div');

frame.className = 'frame';
frameBg.className = 'frame-bg';
bgColor.className = 'bg-color album-artwork';
bgBlack.className = 'bg-black album-artwork';

bgColor.style.backgroundSize = 'cover'; // Или другой вариант: 'contain', 'auto', '100%', '50%', и т.д.
bgBlack.style.backgroundSize = 'cover';
bgColor.style.width = '600px';
bgColor.style.height = '600px';
bgBlack.style.width = '600px';
bgBlack.style.height = '600px';

bgColor.src = 'https://administrati0n.github.io/data-one/player/img/logo/Pure Imagination.jpeg';
bgBlack.src = 'https://administrati0n.github.io/data-one/player/img/logo/Pure Imagination.jpeg';

// frameBg.style.background = "black";
frameBg.style.display = "flex";

frameBg.appendChild(bgColor);
frameBg.appendChild(bgBlack);

frame.appendChild(frameBg);

frame.style.display = 'flex';
frame.style.flexDirection = 'column';
frame.style.width = '100%';
frame.style.height = '539px';
// frame.style.left = '5px';
// frame.style.right = '5px';
// frame.style.top = '5px';
// frame.style.bottom = '5px';
frame.style.overflow = 'hidden';
frame.style.position = 'absolute';

frame.style.color = 'white';
// frame.style.margin = '30px';
frame.style.background = 'rgb(190, 190, 190)';
frame.style.paddingTop = '50px';
frame.style.paddingBottom = '20px';
// frame.style.borderRadius = '37px';
// frame.style.border = '3px solid rgb(190, 190, 190)';
// frame.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.75), 0 8px 30px rgba(0, 0, 0, 0.5)';





const frameBefore = document.createElement('div');
frameBefore.style.content = '""';
// frameBefore.style.display = 'block';
frameBefore.style.display = 'block';
frameBefore.style.width = '4em';
frameBefore.style.height = '0.6em';
frameBefore.style.background = 'white';
frameBefore.style.margin = '0 auto';
frameBefore.style.marginTop = '20px';
frameBefore.style.transition = "0.8s";
frameBefore.style.zIndex = '10';
frameBefore.style.borderRadius = '10em';
frameBefore.style.mixBlendMode = 'overlay';
frame.insertBefore(frameBefore, frame.firstChild);

const frameHeader = document.createElement('div');
frameHeader.className = 'frame-header';
frameHeader.style.position = 'relative';
frameHeader.style.zIndex = '10';
frameHeader.style.display = 'flex';
frameHeader.style.flexShrink = '0';
frameHeader.style.alignItems = 'center';
frameHeader.style.padding = '2rem';
// frame.insertBefore(frameHeader, frame.firstChild);

const imageContainer = document.createElement('div');
imageContainer.className = 'image';
frameHeader.appendChild(imageContainer);

const image = document.createElement('img');
// image.src = 'https://administrati0n.github.io/data-one/player/img/logo/Experience.jpg';
image.style.width = '50px';
image.style.borderRadius = '0.5em';
image.style.boxShadow = '0 3px 30px rgba(0, 0, 0, 0.2), 0 3px 10px rgba(0, 0, 0, 0.4)';
// imageContainer.appendChild(image);

const infoContainer = document.createElement('div');
infoContainer.className = 'info';
frameHeader.appendChild(infoContainer);

const title = document.createElement('div');
title.className = 'title';
title.innerText = 'Title';
title.style.fontSize = '1.8rem';
infoContainer.appendChild(title);

const subtitle = document.createElement('div');
subtitle.className = 'subtitle';
subtitle.innerText = 'Subtitle';
subtitle.style.fontSize = '1.2rem';
subtitle.style.marginTop = '0.25em';
// infoContainer.appendChild(subtitle);

const lyrics = document.createElement('div');
lyrics.className = 'frame-lyrics';
lyrics.style.position = 'absolute';
lyrics.style.width = '100%';
lyrics.style.height = '550px';
// lyrics.style.display = 'none';
lyrics.style.zIndex = '10';
lyrics.style.flexGrow = '1';
lyrics.style.transition = "0.8s"
// lyrics.style.padding = '2rem';
lyrics.style.paddingTop = '0';
lyrics.style.fontSize = '2rem';
lyrics.style.overflowY = 'auto';

const lyricsText1 = document.createElement('div');
lyricsText1.innerText = 'Lyrics Text 1';
lyricsText1.style.color = 'rgba(255, 255, 255, 0.75)';
// lyrics.appendChild(lyricsText1);

const lyricsText2 = document.createElement('div');
lyricsText2.innerText = 'Lyrics Text 2';
lyricsText2.style.color = 'rgba(255, 255, 255, 0.75)';
lyricsText2.style.marginTop = '1.4em';
// lyrics.appendChild(lyricsText2);

const lyricsText3 = document.createElement('div');
lyricsText3.innerText = 'Lyrics Text 3';
lyricsText3.className = 'active';
lyricsText3.style.color = 'white';
lyricsText3.style.fontSize = '3rem';
lyricsText3.style.marginTop = '0.8em';
// lyrics.appendChild(lyricsText3);

const lyricsText4 = document.createElement('div');
lyricsText4.innerText = 'Lyrics Text 4';
lyricsText4.style.color = 'rgba(255, 255, 255, 0.75)';
lyricsText4.style.filter = 'blur(0.05px)';
// lyrics.appendChild(lyricsText4);

const frameBgStyle = {
  position: 'absolute',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
  pointerEvents: 'none',
  zIndex: '0',
  overflow: 'hidden',
  borderRadius: '27px'
};

for (const prop in frameBgStyle) {
  frameBg.style[prop] = frameBgStyle[prop];
}

const bgColorStyle = {
  width: '200%',
  left: '-300px',
  position: 'absolute',
  filter: 'blur(40px)',
  // borderRadius: '100em',
  animation: 'rotate 35s linear infinite'
};

for (const prop in bgColorStyle) {
  bgColor.style[prop] = bgColorStyle[prop];
}

const bgBlackStyle = {
  left: '0',
  bottom: '0',
  filter: 'blur(40px)',
  zIndex: '1',
  animation: 'rotate1 35s linear infinite'
  // animationDirection: 'reverse',
  // animationDelay: '10s'
};

for (const prop in bgBlackStyle) {
  bgBlack.style[prop] = bgBlackStyle[prop];
}

const rotateKeyframes = `
@-webkit-keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@-webkit-keyframes rotate1 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-360deg);
  }
}

@keyframes rotate1 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-360deg);
  }
}
`;

const rotateKeyframes1 = `

`;



const style = document.createElement('style');
style.appendChild(document.createTextNode(rotateKeyframes));
document.head.appendChild(style);

// Добавьте созданный фрейм в DOM, куда вам нужно.

















// frameBefore.addEventListener("click", function() {
// if(lyrics.style.top = "1000px"){
// frame.style.transition = "0.8s";
// frameBg.style.transition = "0.8s";
// lyrics.style.transition = "0.8s";
// leftBarMNoteC.style.display = "flex";
// frameBg.style.top = "1000px";
// lyrics.style.top = "1000px";
// mptb.style.transition = "0.8s";
// mptb.style.opacity = "1";
// mpt.style.opacity = "1";
// mpt.style.transition = "0.8s";

// }else{
// frameBg.style.top = "0px";
// lyrics.style.top = "0px";

// }
// });




frame.appendChild(lyrics);
























frame.style.transition = "0.5s";


phonebtnpower.addEventListener("click", function() {

if(frame.style.display === "none"){
frame.style.display = "flex";
  setTimeout(function() {
frame.style.opacity = "1";
}, 100);  


}else{
  frame.style.opacity = "0";
  setTimeout(function() {
frame.style.display = "none";
}, 500);  
}

});


phonebtnpower.addEventListener("mouseenter", function() {
  phonebtnpower.style.transition = "0.5s";
  phonebtnpower.style.width = "10px";
  phonebtnpower.style.right = "-5px";
  phonebtnpower.style.borderRadius = "0px 4px 4px 0px";
  phonebtnpower.style.cursor = "pointer";
});

phonebtnpower.addEventListener("mouseleave", function() {
  phonebtnpower.style.transition = "0.5s";
  phonebtnpower.style.width = "5px";
  phonebtnpower.style.right = "0px";
  phonebtnpower.style.borderRadius = "0px 10px 10px 0px";
  phonebtnpower.style.cursor = "normal";
});


















































const playerImage = document.createElement("div");
// playerImage.style.background = "url('https://i1.sndcdn.com/artworks-000120546175-l4xtt4-t500x500.jpg')";
playerImage.style.backgroundColor = 'rgba(0, 0, 0, 1)';
playerImage.style.backgroundPosition = "center";
playerImage.style.backgroundSize = "400px";
playerImage.style.width = "400px";
playerImage.style.height = "264px";
// playerImage.style.opacity = "0.2";
// playerImage.style.borderRadius = "9px 0px 0px 9px";
playerImage.style.borderRadius = "24px 24px 0px 0px";



const playerImage2 = document.createElement("div");
// playerImage2.style.background = "url('https://i1.sndcdn.com/artworks-000120546175-l4xtt4-t500x500.jpg')";
playerImage2.style.backgroundColor = 'rgba(0, 0, 0, 1)';
playerImage2.style.backgroundPosition = "center";
playerImage2.style.marginTop = "50px";
playerImage2.style.left = "20px";
playerImage2.style.top = "0px";
playerImage2.style.position = "absolute";
playerImage2.style.backgroundSize = "280px";
playerImage2.style.width = "244px";
playerImage2.style.height = "244px";
playerImage2.style.boxShadow = "0px 5px 10px rgba(0, 0, 0, 0.5)";
// playerImage2.style.opacity = "0.5";
// playerImage2.style.borderRadius = "9px 0px 0px 9px";
playerImage2.style.borderRadius = "15px";

const playerContainerV = document.createElement("div");
playerContainerV.style.display = "flex";
playerContainerV.style.position = "absolute";
playerContainerV.style.flexDirection = "column";
playerContainerV.style.top = "300px";
playerContainerV.style.left = "0px";
playerContainerV.style.width = "220px";
playerContainerV.style.height = "100px";

const playerTrackTitle = document.createElement("div");
playerTrackTitle.style.fontFamily = "Gilroy";
playerTrackTitle.style.fontSize = "15px";
playerTrackTitle.style.marginTop = "6px";
playerTrackTitle.style.marginLeft = "22px";
playerTrackTitle.style.marginBottom = "0px";
playerTrackTitle.style.whiteSpace = "nowrap";
playerTrackTitle.style.overflow = "hidden";
playerTrackTitle.style.textOverflow = "ellipsis";
playerTrackTitle.textContent = "The Beach";


const playerArtistTitle = document.createElement("div");
playerArtistTitle.style.fontFamily = "Gilroy";
playerArtistTitle.style.fontSize = "15px";
playerArtistTitle.style.marginBottom = "5px";
playerArtistTitle.style.marginLeft = "22px";
playerArtistTitle.style.opacity = "0.5";
playerArtistTitle.style.whiteSpace = "nowrap";
playerArtistTitle.style.overflow = "hidden";
playerArtistTitle.style.textOverflow = "ellipsis";
playerArtistTitle.textContent = "The Neighbourhood";


const playerContainerH = document.createElement("div");
playerContainerH.style.display = "flex";
playerContainerH.style.flexDirection = "row";
playerContainerH.style.marginBottom = "auto";
playerContainerH.style.width = "100%";
playerContainerH.style.position = "absolute";
// playerContainerH.style.right = "15px";
// playerContainerH.style.bottom = "115px";

// Инициализация переменной timeLabel
// let timeLabel = 0; // или другой тип данных, кроме строки

const currentTimeLabel = document.createElement("div");
let timeLabel = document.createElement("div");
timeLabel.style.fontSize = "15px";
timeLabel.style.fontFamily = "Gilroy";
timeLabel.textContent = "0:00";
timeLabel.style.position = "absolute";
timeLabel.style.top = "380px";
timeLabel.style.left = "25px";
timeLabel.style.opacity = "0.5";
// timeLabel = String(timeLabel); // Преобразование в строку
let timeLabelText = timeLabel.textContent; // или timeLabel.innerText

const durationLabel = document.createElement("span");
durationLabel.style.fontSize = "15px";
durationLabel.style.fontFamily = "Gilroy";
durationLabel.textContent = "";
durationLabel.style.position = "absolute";
durationLabel.style.top = "380px";
durationLabel.style.opacity = "0.5";
durationLabel.style.right = "25px";

const controlsContainer = document.createElement("div");
controlsContainer.style.display = "flex";
controlsContainer.style.marginTop = "20px";



const playerBack = document.createElement("button");
playerBack.style.backgroundRepeat = "no-repeat";
// playerBack.style.opacity = "0.5";
playerBack.style.position = "absolute";
playerBack.style.left = "40px";
playerBack.style.top = "415px";
playerBack.style.transition = "0.2s";
playerBack.style.backgroundColor = "rgba(255, 255, 255, 0)";
// playerBack.style.backgroundImage = "url('https://administrati0n.github.io/data-one/player/img/controls/back/back.png')";
playerBack.style.backgroundSize = "36px";
playerBack.style.borderRadius = "999px";
playerBack.style.backgroundPosition = "center";
playerBack.style.width = "45px";
playerBack.style.height = "45px";
playerBack.style.borderRadius = "999px";
// playerBack.style.boxShadow = "0px 5px 10px rgba(255, 255, 255, 0.25)";
playerBack.style.border = "none";


const playerBack1 = document.createElement("div");
playerBack1.style.position = "absolute";
playerBack1.style.left = "33px";
playerBack1.style.backgroundRepeat = "no-repeat";
playerBack1.style.margin = "0 auto";
playerBack1.style.top = "13px";
playerBack1.style.right = "30px";
playerBack1.style.transition = "0.3s";
playerBack1.style.backgroundColor = "rgba(255, 255, 255, 1)";
playerBack1.style.backgroundSize = "45px";
playerBack1.style.backgroundPosition = "center";
playerBack1.style.width = "5px";
playerBack1.style.height = "20px";
playerBack1.style.border = "none";
playerBack1.style.borderRadius = "999px";


const playerBack2 = document.createElement("div");
playerBack2.style.position = "absolute";
playerBack2.style.right = "14px";
playerBack2.style.backgroundRepeat = "no-repeat";
playerBack2.style.margin = "0 auto";
playerBack2.style.top = "17px";
playerBack2.style.transition = "0.3s";
playerBack2.style.backgroundColor = "rgba(255, 255, 255, 1)";
playerBack2.style.backgroundSize = "45px";
playerBack2.style.backgroundPosition = "center";
playerBack2.style.width = "5px";
playerBack2.style.height = "20px";
playerBack2.style.border = "none";
playerBack2.style.borderRadius = "999px";
playerBack2.style.rotate = "-60deg";

const playerBack3 = document.createElement("div");
playerBack3.style.position = "absolute";
playerBack3.style.right = "14px";
playerBack3.style.backgroundRepeat = "no-repeat";
playerBack3.style.margin = "0 auto";
playerBack3.style.top = "9px";
playerBack3.style.transition = "0.3s";
playerBack3.style.backgroundColor = "rgba(255, 255, 255, 1)";
playerBack3.style.backgroundSize = "45px";
playerBack3.style.backgroundPosition = "center";
playerBack3.style.width = "5px";
playerBack3.style.height = "20px";
playerBack3.style.border = "none";
playerBack3.style.borderRadius = "999px";
playerBack3.style.rotate = "60deg";



const playerBack4 = document.createElement("div");
playerBack4.style.position = "absolute";
playerBack4.style.left = "18px";
playerBack4.style.backgroundRepeat = "no-repeat";
playerBack4.style.margin = "0 auto";
playerBack4.style.top = "13px";
playerBack4.style.right = "30px";
playerBack4.style.transition = "0.3s";
playerBack4.style.backgroundColor = "rgba(255, 255, 255, 1)";
playerBack4.style.backgroundSize = "45px";
playerBack4.style.backgroundPosition = "center";
playerBack4.style.width = "5px";
playerBack4.style.height = "20px";
playerBack4.style.border = "none";
playerBack4.style.borderRadius = "999px";


const playerBack5 = document.createElement("div");
playerBack5.style.position = "absolute";
playerBack5.style.right = "29px";
playerBack5.style.backgroundRepeat = "no-repeat";
playerBack5.style.margin = "0 auto";
playerBack5.style.top = "17px";
playerBack5.style.transition = "0.3s";
playerBack5.style.backgroundColor = "rgba(255, 255, 255, 1)";
playerBack5.style.backgroundSize = "45px";
playerBack5.style.backgroundPosition = "center";
playerBack5.style.width = "5px";
playerBack5.style.height = "20px";
playerBack5.style.border = "none";
playerBack5.style.borderRadius = "999px";
playerBack5.style.rotate = "-60deg";

const playerBack6 = document.createElement("div");
playerBack6.style.position = "absolute";
playerBack6.style.right = "29px";
playerBack6.style.backgroundRepeat = "no-repeat";
playerBack6.style.margin = "0 auto";
playerBack6.style.top = "9px";
playerBack6.style.transition = "0.3s";
playerBack6.style.backgroundColor = "rgba(255, 255, 255, 1)";
playerBack6.style.backgroundSize = "45px";
playerBack6.style.backgroundPosition = "center";
playerBack6.style.width = "5px";
playerBack6.style.height = "20px";
playerBack6.style.border = "none";
playerBack6.style.borderRadius = "999px";
playerBack6.style.rotate = "60deg";

const playerBack7 = document.createElement("div");
playerBack7.style.position = "absolute";
playerBack7.style.left = "26px";
playerBack7.style.backgroundRepeat = "no-repeat";
playerBack7.style.margin = "0 auto";
playerBack7.style.top = "17px";
playerBack7.style.right = "30px";
playerBack7.style.transition = "0.3s";
playerBack7.style.backgroundColor = "rgba(255, 255, 255, 1)";
playerBack7.style.backgroundSize = "45px";
playerBack7.style.backgroundPosition = "center";
playerBack7.style.width = "8px";
playerBack7.style.height = "13px";
playerBack7.style.border = "none";
playerBack7.style.borderRadius = "999px";


const playerBack8 = document.createElement("div");
playerBack8.style.position = "absolute";
playerBack8.style.left = "11px";
playerBack8.style.backgroundRepeat = "no-repeat";
playerBack8.style.margin = "0 auto";
playerBack8.style.top = "17px";
playerBack8.style.right = "30px";
playerBack8.style.transition = "0.3s";
playerBack8.style.backgroundColor = "rgba(255, 255, 255, 1)";
playerBack8.style.backgroundSize = "45px";
playerBack8.style.backgroundPosition = "center";
playerBack8.style.width = "8px";
playerBack8.style.height = "13px";
playerBack8.style.border = "none";
playerBack8.style.borderRadius = "999px";

playerBack.appendChild(playerBack1)
playerBack.appendChild(playerBack2)
playerBack.appendChild(playerBack3)
playerBack.appendChild(playerBack4)
playerBack.appendChild(playerBack5)
playerBack.appendChild(playerBack6)
playerBack.appendChild(playerBack7)
playerBack.appendChild(playerBack8)

const playerPlay = document.createElement("button");
playerPlay.style.position = "absolute";
playerPlay.style.right = "150px";
playerPlay.style.backgroundRepeat = "no-repeat";
playerPlay.style.margin = "0 auto";
playerPlay.style.top = "415px";
playerPlay.style.left = "115px";
playerPlay.style.transition = "0.3s";
playerPlay.style.backgroundColor = "rgba(255, 255, 255, 0)";
// playerPlay.style.backgroundImage = "url('https://administrati0n.github.io/data-one/player/img/controls/play/play.png')";
playerPlay.style.backgroundSize = "45px";
playerPlay.style.backgroundPosition = "center";
playerPlay.style.width = "45px";
playerPlay.style.height = "45px";
playerPlay.style.border = "none";
playerPlay.style.borderRadius = "999px";
// playerPlay.style.boxShadow = "0px 5px 10px rgba(255, 255, 255, 0.25)";

const playerPlay1 = document.createElement("div");
playerPlay1.style.position = "absolute";
playerPlay1.style.left = "11px";
playerPlay1.style.backgroundRepeat = "no-repeat";
playerPlay1.style.margin = "0 auto";
playerPlay1.style.top = "10px";
playerPlay1.style.right = "30px";
playerPlay1.style.transition = "0.3s";
playerPlay1.style.backgroundColor = "rgba(255, 255, 255, 1)";
playerPlay1.style.backgroundSize = "45px";
playerPlay1.style.backgroundPosition = "center";
playerPlay1.style.width = "10px";
playerPlay1.style.height = "26px";
playerPlay1.style.border = "none";
playerPlay1.style.borderRadius = "999px";


const playerPlay2 = document.createElement("div");
playerPlay2.style.position = "absolute";
playerPlay2.style.right = "17px";
playerPlay2.style.backgroundRepeat = "no-repeat";
playerPlay2.style.margin = "0 auto";
playerPlay2.style.top = "14px";
playerPlay2.style.right = "17px";
playerPlay2.style.transition = "0.3s";
playerPlay2.style.backgroundColor = "rgba(255, 255, 255, 1)";
playerPlay2.style.backgroundSize = "45px";
playerPlay2.style.backgroundPosition = "center";
playerPlay2.style.width = "10px";
playerPlay2.style.height = "26px";
playerPlay2.style.border = "none";
playerPlay2.style.borderRadius = "999px";
playerPlay2.style.rotate = "60deg";

const playerPlay3 = document.createElement("div");
playerPlay3.style.position = "absolute";
playerPlay3.style.right = "17px";
playerPlay3.style.backgroundRepeat = "no-repeat";
playerPlay3.style.margin = "0 auto";
playerPlay3.style.top = "6px";
playerPlay3.style.right = "17px";
playerPlay3.style.transition = "0.3s";
playerPlay3.style.backgroundColor = "rgba(255, 255, 255, 1)";
playerPlay3.style.backgroundSize = "45px";
playerPlay3.style.backgroundPosition = "center";
playerPlay3.style.width = "10px";
playerPlay3.style.height = "26px";
playerPlay3.style.border = "none";
playerPlay3.style.borderRadius = "999px";
playerPlay3.style.rotate = "-60deg";

const playerPlay4 = document.createElement("div");
playerPlay4.style.position = "absolute";
playerPlay4.style.left = "20px";
playerPlay4.style.backgroundRepeat = "no-repeat";
playerPlay4.style.margin = "0 auto";
playerPlay4.style.top = "13px";
playerPlay4.style.right = "15px";
playerPlay4.style.transition = "0.3s";
playerPlay4.style.backgroundColor = "rgba(255, 255, 255, 1)";
playerPlay4.style.backgroundSize = "45px";
playerPlay4.style.backgroundPosition = "center";
playerPlay4.style.width = "10px";
playerPlay4.style.height = "19px";
playerPlay4.style.border = "none";
playerPlay4.style.borderRadius = "999px";


const playerPlay5 = document.createElement("div");
playerPlay5.style.position = "absolute";
playerPlay5.style.left = "25px";
playerPlay5.style.backgroundRepeat = "no-repeat";
playerPlay5.style.margin = "0 auto";
playerPlay5.style.top = "22px";
playerPlay5.style.right = "30px";
playerPlay5.style.transition = "0.3s";
playerPlay5.style.backgroundColor = "rgba(255, 255, 255, 1)";
playerPlay5.style.backgroundSize = "45px";
playerPlay5.style.backgroundPosition = "center";
playerPlay5.style.width = "10px";
playerPlay5.style.height = "0px";
playerPlay5.style.border = "none";
playerPlay5.style.borderRadius = "999px";



const playerNext = document.createElement("button");
playerNext.style.backgroundRepeat = "no-repeat";
playerNext.style.position = "absolute";
playerNext.style.right = "40px";
playerNext.style.top = "415px";
playerNext.style.transition = "0.2s";
playerNext.style.backgroundColor = "rgba(255, 255, 255, 0)";
// playerNext.style.backgroundImage = "url('https://administrati0n.github.io/data-one/player/img/controls/next/next.png')";
playerNext.style.backgroundSize = "36px";
playerNext.style.backgroundPosition = "center";
playerNext.style.width = "45px";
playerNext.style.height = "45px";
playerNext.style.borderRadius = "999px";
// playerNext.style.boxShadow = "0px 5px 10px rgba(255, 255, 255, 0.25)";
playerNext.style.border = "none";




const playerNext1 = document.createElement("div");
playerNext1.style.position = "absolute";
playerNext1.style.left = "2px";
playerNext1.style.backgroundRepeat = "no-repeat";
playerNext1.style.margin = "0 auto";
playerNext1.style.top = "13px";
playerNext1.style.right = "30px";
playerNext1.style.transition = "0.3s";
playerNext1.style.backgroundColor = "rgba(255, 255, 255, 1)";
playerNext1.style.backgroundSize = "45px";
playerNext1.style.backgroundPosition = "center";
playerNext1.style.width = "5px";
playerNext1.style.height = "20px";
playerNext1.style.border = "none";
playerNext1.style.borderRadius = "999px";


const playerNext2 = document.createElement("div");
playerNext2.style.position = "absolute";
playerNext2.style.right = "12px";
playerNext2.style.backgroundRepeat = "no-repeat";
playerNext2.style.margin = "0 auto";
playerNext2.style.top = "17px";
playerNext2.style.transition = "0.3s";
playerNext2.style.backgroundColor = "rgba(255, 255, 255, 1)";
playerNext2.style.backgroundSize = "45px";
playerNext2.style.backgroundPosition = "center";
playerNext2.style.width = "5px";
playerNext2.style.height = "20px";
playerNext2.style.border = "none";
playerNext2.style.borderRadius = "999px";
playerNext2.style.rotate = "60deg";

const playerNext3 = document.createElement("div");
playerNext3.style.position = "absolute";
playerNext3.style.right = "12px";
playerNext3.style.backgroundRepeat = "no-repeat";
playerNext3.style.margin = "0 auto";
playerNext3.style.top = "9px";
playerNext3.style.transition = "0.3s";
playerNext3.style.backgroundColor = "rgba(255, 255, 255, 1)";
playerNext3.style.backgroundSize = "45px";
playerNext3.style.backgroundPosition = "center";
playerNext3.style.width = "5px";
playerNext3.style.height = "20px";
playerNext3.style.border = "none";
playerNext3.style.borderRadius = "999px";
playerNext3.style.rotate = "-60deg";



const playerNext4 = document.createElement("div");
playerNext4.style.position = "absolute";
playerNext4.style.left = "21px";
playerNext4.style.backgroundRepeat = "no-repeat";
playerNext4.style.margin = "0 auto";
playerNext4.style.top = "13px";
playerNext4.style.right = "30px";
playerNext4.style.transition = "0.3s";
playerNext4.style.backgroundColor = "rgba(255, 255, 255, 1)";
playerNext4.style.backgroundSize = "45px";
playerNext4.style.backgroundPosition = "center";
playerNext4.style.width = "5px";
playerNext4.style.height = "20px";
playerNext4.style.border = "none";
playerNext4.style.borderRadius = "999px";


const playerNext5 = document.createElement("div");
playerNext5.style.position = "absolute";
playerNext5.style.right = "27px";
playerNext5.style.backgroundRepeat = "no-repeat";
playerNext5.style.margin = "0 auto";
playerNext5.style.top = "17px";
playerNext5.style.transition = "0.3s";
playerNext5.style.backgroundColor = "rgba(255, 255, 255, 1)";
playerNext5.style.backgroundSize = "45px";
playerNext5.style.backgroundPosition = "center";
playerNext5.style.width = "5px";
playerNext5.style.height = "20px";
playerNext5.style.border = "none";
playerNext5.style.borderRadius = "999px";
playerNext5.style.rotate = "60deg";

const playerNext6 = document.createElement("div");
playerNext6.style.position = "absolute";
playerNext6.style.right = "27px";
playerNext6.style.backgroundRepeat = "no-repeat";
playerNext6.style.margin = "0 auto";
playerNext6.style.top = "9px";
playerNext6.style.transition = "0.3s";
playerNext6.style.backgroundColor = "rgba(255, 255, 255, 1)";
playerNext6.style.backgroundSize = "45px";
playerNext6.style.backgroundPosition = "center";
playerNext6.style.width = "5px";
playerNext6.style.height = "20px";
playerNext6.style.border = "none";
playerNext6.style.borderRadius = "999px";
playerNext6.style.rotate = "-60deg";

const playerNext7 = document.createElement("div");
playerNext7.style.position = "absolute";
playerNext7.style.left = "25px";
playerNext7.style.backgroundRepeat = "no-repeat";
playerNext7.style.margin = "0 auto";
playerNext7.style.top = "17px";
playerNext7.style.right = "30px";
playerNext7.style.transition = "0.3s";
playerNext7.style.backgroundColor = "rgba(255, 255, 255, 1)";
playerNext7.style.backgroundSize = "45px";
playerNext7.style.backgroundPosition = "center";
playerNext7.style.width = "8px";
playerNext7.style.height = "13px";
playerNext7.style.border = "none";
playerNext7.style.borderRadius = "999px";


const playerNext8 = document.createElement("div");
playerNext8.style.position = "absolute";
playerNext8.style.left = "9px";
playerNext8.style.backgroundRepeat = "no-repeat";
playerNext8.style.margin = "0 auto";
playerNext8.style.top = "17px";
playerNext8.style.right = "30px";
playerNext8.style.transition = "0.3s";
playerNext8.style.backgroundColor = "rgba(255, 255, 255, 1)";
playerNext8.style.backgroundSize = "45px";
playerNext8.style.backgroundPosition = "center";
playerNext8.style.width = "9px";
playerNext8.style.height = "13px";
playerNext8.style.border = "none";
playerNext8.style.borderRadius = "999px";

playerNext.appendChild(playerNext1)
playerNext.appendChild(playerNext2)
playerNext.appendChild(playerNext3)
playerNext.appendChild(playerNext4)
playerNext.appendChild(playerNext5)
playerNext.appendChild(playerNext6)
playerNext.appendChild(playerNext7)
playerNext.appendChild(playerNext8)




// 

const volumeSeekBar = document.createElement("div");
volumeSeekBar.type = "range";
volumeSeekBar.min = "0";
volumeSeekBar.max = "100";
volumeSeekBar.value = "0";
// volumeSeekBar.style.width = "260px";
volumeSeekBar.style.bottom = "60px"; // Измененная позиция на 100 пикселей ниже
volumeSeekBar.style.left = "20px";
volumeSeekBar.style.right = "20px";
volumeSeekBar.style.appearance = "none";
volumeSeekBar.style.height = "5px";
volumeSeekBar.style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 0.25)";
volumeSeekBar.style.background = "rgba(255, 255, 255, 0.3)";
volumeSeekBar.style.outline = "none";
volumeSeekBar.style.borderRadius = "999px";
volumeSeekBar.style.cursor = "pointer";
volumeSeekBar.style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 0.25)";
volumeSeekBar.style.position = "absolute";
volumeSeekBar.style.display = "flex";

// Добавляем обработчик события клика на полосе громкости
volumeSeekBar.addEventListener("click", function(event) {
  const clickX = event.clientX - volumeSeekBar.getBoundingClientRect().left;
  const seekPosition = clickX / volumeSeekBar.clientWidth;
  const currentTrack = tracks.find(track => track.playing);
  if (currentTrack) {
    const volume = seekPosition;
    currentTrack.audio.volume = volume;
    // Обновляем ширину индикатора
    updateVolumeIndicatorWidth(volume * 100);
  }
});


const volumeIndicator = document.createElement("div");
volumeIndicator.style.width = "100%"; // Изначально установленная ширина индикатора (0%)
volumeIndicator.style.height = "100%";
volumeIndicator.style.background = "rgba(255, 255, 255, 0.5)";
volumeIndicator.style.borderRadius = "999px";


// Функция для обновления ширины индикатора громкости
function updateVolumeIndicatorWidth(volumePercentage) {
  volumeIndicator.style.width = volumePercentage + "%";
}

// Добавляем индикатор громкости в ползунок громкости
volumeSeekBar.appendChild(volumeIndicator);



// Создаем полосу промотки
const playerSeekBar = document.createElement("div");
playerSeekBar.type = "range";
playerSeekBar.min = "0";
playerSeekBar.max = "100";
playerSeekBar.value = "0";
// playerSeekBar.style.width = "260px";
playerSeekBar.style.bottom = "190px";
playerSeekBar.style.left = "20px";
playerSeekBar.style.right = "20px";
playerSeekBar.style.appearance = "none";
playerSeekBar.style.height = "5px";
playerSeekBar.style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 0.25)";
playerSeekBar.style.background = "rgba(255, 255, 255, 0.3)";
playerSeekBar.style.outline = "none";
playerSeekBar.style.borderRadius = "999px";
playerSeekBar.style.cursor = "pointer";
playerSeekBar.style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 0.25)";
playerSeekBar.style.position = "absolute";
playerSeekBar.style.display = "flex";

// Пример использования функции обновления положения индикатора
let duration = 1000; // Общая продолжительность (в секундах)
let currentTime = 0; // Текущее время воспроизведения (в секундах)

// Создаем элемент индикатора
const indicator = document.createElement("div");
indicator.style.width = parseInt(currentTime) + "px";
indicator.style.height = "100%";
indicator.style.background = "rgba(255, 255, 255, 0.5)";
indicator.style.borderRadius = "999px";

// Добавляем обработчики событий для изменения высоты слайдера при наведении мыши
playerSeekBar.addEventListener('mouseenter', function() {
  playerSeekBar.style.height = '10px';
  playerSeekBar.style.transition = '0.2s';
  indicator.style.transition = '0.2s';
  indicator.style.height = '10px';
});

playerSeekBar.addEventListener('mouseleave', function() {
  playerSeekBar.style.height = '5px';
  playerSeekBar.style.transition = '0.2s';
  indicator.style.transition = '0.2s';
  indicator.style.height = '5px';
});





volumeSeekBar.addEventListener('mouseenter', function() {
  volumeSeekBar.style.height = '10px';
  volumeSeekBar.style.transition = '0.2s';
  volumeIndicator.style.transition = '0.2s';
  volumeIndicator.style.height = '10px';
});

volumeSeekBar.addEventListener('mouseleave', function() {
  volumeSeekBar.style.height = '5px';
  volumeSeekBar.style.transition = '0.2s';
  volumeIndicator.style.transition = '0.2s';
  volumeIndicator.style.height = '5px';
});





// Добавляем обработчик события изменения значения полосы промотки
playerSeekBar.addEventListener("input", function(event) {
  const seekValue = event.target.value;
  const currentTrack = tracks.find(track => track.playing);

  if (currentTrack) {
    let seekTime = (currentTrack.audio.duration * seekValue) / 100;
    currentTrack.audio.currentTime = seekTime;
    // currentTime = seekValue;
    updateIndicatorWidth(seekValue); // Обновляем ширину индикатора
  }
});


updateIndicatorPosition(currentTime, duration);



// Добавляем индикатор в полосу промотки
playerSeekBar.appendChild(indicator);

// Добавляем полосу промотки в контейнер слайдера
// playerContainer.appendChild(playerSeekBar);

let currentTrack;


// Обработчик события клика на полосе промотки
playerSeekBar.addEventListener("mousedown", function(event) {
 const seekPosition = event.offsetX / playerSeekBar.clientWidth;
  const currentTrack = tracks.find(track => track.playing);
  if (currentTrack) {
    const seekTime = currentTrack.audio.duration * seekPosition;
    currentTrack.audio.currentTime = seekTime;
    currentTrack.audio.addEventListener('timeupdate', function() {
  currentTime = currentTrack.audio.currentTime;
  updateIndicatorWidth((currentTime / currentTrack.audio.duration) * 100);
});
    indicator.style.width = parseInt(currentTime) + "px";
    updateIndicatorWidth(seekPosition * 100); // Обновляем ширину индикатора
  }
});



let seekBarPosition;

// Функция для обновления положения индикатора на основе текущего времени воспроизведения
function updateIndicatorPosition(currentTime, duration) {
  const percent = (currentTime / duration) * 100;
  // playerSeekBar.value = percent;
  playerSeekBar.value = parseInt(percent);
  currentTime = (duration / 100) * percent;
  updateIndicatorWidth(percent);
  updateTimeLabel(timeLabel, currentTime);
}



// Функция для обновления ширины индикатора
function updateIndicatorWidth(percent) {
  indicator.style.width = parseInt(percent) + "%";
}




// 
// Добавляем стили для hover состояния кнопок
playerBack.addEventListener("mouseenter", function() {
  playerBack.style.transition = "0.4s";
  playerBack.style.background = "rgba(255, 255, 255, 0.25";
});

playerBack.addEventListener("mouseleave", function() {
  playerBack.style.transition = "0.4s";
  playerBack.style.background = "rgba(255, 255, 255, 0";
});

playerPlay.addEventListener("mouseenter", function() {
  playerPlay.style.transition = "0.4s";
  playerPlay.style.background = "rgba(255, 255, 255, 0.25";
  // playerPlay.style.backgroundImage = "url('https://administrati0n.github.io/data-one/player/img/controls/play/play_hover.png')";
});

playerPlay.addEventListener("mouseleave", function() {
  playerPlay.style.transition = "0.4s";
  playerPlay.style.background = "rgba(255, 255, 255, 0";
  // playerPlay.style.backgroundImage = "url('https://administrati0n.github.io/data-one/player/img/controls/play/play.png')";
});



playerNext.addEventListener("mouseenter", function() {
  playerNext.style.transition = "0.4s";
  playerNext.style.background = "rgba(255, 255, 255, 0.25";
});

playerNext.addEventListener("mouseleave", function() {
  playerNext.style.transition = "0.4s";
  playerNext.style.background = "rgba(255, 255, 255, 0";
});

// Добавляем стили для active состояния кнопок
playerBack.addEventListener("mousedown", function() {
    playerBack.style.transition = "0.4s";
  playerBack.style.background = "rgba(255, 255, 255, 0.35";
});

playerBack.addEventListener("mouseup", function() {
    playerBack.style.transition = "0.4s";
  playerBack.style.background = "rgba(255, 255, 255, 0";
});

playerPlay.addEventListener("mousedown", function() {
    playerPlay.style.transition = "0.4s";
  playerPlay.style.background = "rgba(255, 255, 255, 0.35";
});

playerPlay.addEventListener("mouseup", function() {
  playerPlay.style.transition = "0.4s";
  playerPlay.style.background = "rgba(255, 255, 255, 0";
});



playerNext.addEventListener("mousedown", function() {
    playerNext.style.transition = "0.4s";
  playerNext.style.background = "rgba(255, 255, 255, 0.35";
});

playerNext.addEventListener("mouseup", function() {
    playerNext.style.transition = "0.4s";
  playerNext.style.background = "rgba(255, 255, 255, 0";
});

// Создаем массив треков
const tracks = [
  {
    title: "Experience",
    duration1: "-5:17",
    duration2: "17",
    artist: "Ludovico Einaudi, Daniel Hope & I Virtuosi Italiani",
    image: "https://administrati0n.github.io/data-one/player/Experience.jpg",
    image2: "https://administrati0n.github.io/data-one/player/Experience.jpg",
    audio: "https://administrati0n.github.io/data-one/player/Experience.mp3",
    playing: false
  },
  {
    title: "Where Is My Mind",
    duration1: "-2:45",
    duration2: "45",
    artist: "Maxence Cyrin",
    image: "https://administrati0n.github.io/data-one/player/Where Is My Mind.jpeg",
    image2: "https://administrati0n.github.io/data-one/player/Where Is My Mind.jpeg",
    audio: "https://administrati0n.github.io/data-one/player/Where Is My Mind.mp3",
    playing: false
  },
  {
    title: "Pure Imagination",
    duration1: "-1:04",
    duration2: "04",
    artist: "Shiloh",
    image: "https://administrati0n.github.io/data-one/player/Pure Imagination.jpeg",
    image2: "https://administrati0n.github.io/data-one/player/Pure Imagination.jpeg",
    audio: "https://administrati0n.github.io/data-one/player/Pure Imagination.mp3",
    playing: false
  },
  {
    title: "The Beach (Instrumental + Slowed + Muffled)",
    duration1: "-4:24",
    duration1: "24",
    artist: "mxpheebz",
    image: "https://administrati0n.github.io/data-one/player/The Beach.jpg",
    image2: "https://administrati0n.github.io/data-one/player/The Beach.jpg",
    audio: "https://administrati0n.github.io/data-one/player/The Beach.mp3",
    playing: false
  }
];

// // Функция для обновления времени воспроизведения на метке
// function updateTimeLabel(label, time) {
//   const minutes = Math.floor(time / 60);
//   const seconds = Math.floor(time % 60);
//   const formattedTime = `${minutes}:${seconds.toString().padStart(2, "0")}`;
// }

function formatTime(timeInSeconds) {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = Math.floor(timeInSeconds % 60);
  const formattedTime = `${minutes}:${seconds.toString().padStart(2, "0")}`;
  return formattedTime; // Возвращаем отформатированное время
}

function updateTimeLabel(label, time) {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  const formattedTime = `${minutes}:${seconds.toString().padStart(2, "0")}`;
  label.textContent = formattedTime;
   return { minutes, seconds, formattedTime };

}

// Пример использования функции обновления времени
// const currentTime = 30; // Текущее время воспроизведения в секундах
// const duration = 120; // Общая продолжительность трека в секундах
// updateTimeLabel(currentTimeLabel, currentTime);
// updateTimeLabel(durationLabel, duration);

// playerContainer.appendChild(currentTimeLabel);
frame.appendChild(playerSeekBar);
// playerContainer.appendChild(durationLabel);
// playerContainer.appendChild(controlsContainer);


// const { minutes } = updateTimeLabel(minutes);

// Функция изменения трека
function changeTrack(index) {
// if (typeof timeLabel !== 'string') {
//   timeLabel = timeLabel.toString();
// }
  const track = tracks[index];


durationLabel.textContent = track.duration1;




  playerTrackTitle.textContent = track.title;
  playerArtistTitle.textContent = track.artist;
  // durationLabel.textContent = track.duration1;
bgColor.style.backgroundImage = `url('${track.image}')`;
bgBlack.style.backgroundImage = `url('${track.image}')`;
// console.log(timeLabel);

  // bgColor.src = `url('${track.image}')`;
// bgBlack.src = `url('${track.image}')`;
  playerImage2.style.backgroundImage = `url('${track.image2}')`;
  if (!track.playing) {

    return; // Если трек не должен быть воспроизведен, прекращаем выполнение функции
  }
  // Проверяем состояние воспроизведения трека
  if (track.playing) {
    // playerPlay.style.display = "none";
playerPlay5.style.top = "10px";
playerPlay5.style.height = "26px";
    // playerPause.style.display = "block";
  } else {
    playerPlay5.style.top = "18px";
playerPlay5.style.height = "9px";
playerPlay3.style.opacity = "0";
playerPlay2.style.top = "10";
playerPlay2.style.opacity = "0";
    // playerPlay.style.display = "block";
    // playerPause.style.display = "none";
  }

  // Приостанавливаем и сбрасываем в начало предыдущий трек
  const currentTrack = tracks.find(track => track.playing);
  if (currentTrack && currentTrack !== track) {
    currentTrack.playing = false;
    currentTrack.audio.pause();
    currentTrack.audio.currentTime = 0;
  }

  // Воспроизводим текущий трек
  track.playing = true;
  track.audio.play().catch(error => {
    // Обрабатываем ошибку воспроизведения
    console.error("Failed to play audio:", error);
  });
}


let playm = "n";



// Обработчик события для кнопки playerPlay
playerPlay.addEventListener("click", function() {
  const currentTrack = tracks.find(track => track.playing);

  const newTrack = tracks.find(track => track.title === playerTrackTitle.textContent);

  if (playm === "n") {
    playm = "y";
  newTrack.playing = true;
  newTrack.audio.play();
  playerPlay5.style.top = "10px";
playerPlay5.style.height = "26px";

playerPlay3.style.height = "10px";
playerPlay3.style.right = "24px";
playerPlay3.style.top = "11px";

playerPlay2.style.height = "10px";
playerPlay2.style.right = "24px";
playerPlay2.style.top = "26px";
  }else{
playm = "n";
currentTrack.playing = false;
currentTrack.audio.pause(); // Приостанавливаем текущий трек

playerPlay5.style.top = "22px";
playerPlay5.style.height = "0px";

playerPlay3.style.top = "6px";
playerPlay3.style.right = "17px";
playerPlay3.style.height = "26px";

playerPlay2.style.top = "14px";
playerPlay2.style.right = "17px";
playerPlay2.style.height = "26px";
  }


});





// Создаем объекты аудио для каждого трека
tracks.forEach(track => {
  track.audio = new Audio(track.audio); // Создаем объект аудио
  track.audio.addEventListener("ended", function() {
  const currentTrack = tracks.find(track => track.playing); // Получаем текущий трек
if (currentTrack) {
  resetAndPlayTrack(currentTrack);
}

// Получаем индекс текущего трека
const currentIndex = tracks.findIndex(track => track.title === playerTrackTitle.textContent);
// Вычисляем индекс следующего трека
const nextIndex = (currentIndex + 1) % tracks.length;
// Получаем текущий трек
// const currentTrack = tracks[currentIndex];
// Получаем следующий трек
const nextTrack = tracks[nextIndex];

if (currentTrack) {
  // Останавливаем текущий трек
  currentTrack.audio.pause();
  currentTrack.audio.currentTime = 0;
  // Помечаем текущий трек как не играющий
  currentTrack.playing = false;
}

// Изменяем трек и изображение
changeTrack(nextIndex);

// Проверяем, что следующий трек определен и воспроизводим его
if (nextTrack) {
  nextTrack.playing = true;
  nextTrack.audio.play();
      playm = "y";
  playerPlay5.style.top = "10px";
playerPlay5.style.height = "26px";

playerPlay3.style.height = "10px";
playerPlay3.style.right = "24px";
playerPlay3.style.top = "11px";

playerPlay2.style.height = "10px";
playerPlay2.style.right = "24px";
playerPlay2.style.top = "26px";
}




volumeIndicator.style.width = "100%"; // Изначально установленная ширина индикатора (0%)

  });

  // Добавляем обработчик события timeupdate
  track.audio.addEventListener('timeupdate', function() {
    currentTime = track.audio.currentTime;
    updateIndicatorPosition(currentTime, track.audio.duration);
  });
});




// Изначально скрываем кнопку playerPause
// playerPause.style.display = "none";



function resetAndPlayTrack(track) {
  track.audio.currentTime = 0; // Сбрасываем время трека на 0
  track.audio.play(); // Воспроизводим трек

  // Здесь вы можете добавить любой другой код, который должен выполняться после сброса и воспроизведения трека
}


// Обработчик события для кнопки playerBack
playerBack.addEventListener("click", function() {
    const currentTrack = tracks.find(track => track.playing); // Получаем текущий трек
if (currentTrack) {
  resetAndPlayTrack(currentTrack);
}
  // Получаем индекс текущего трека

  // Вычисляем индекс предыдущего трека
  // Изменяем трек и изображение
  // changeTrack(prevIndex);


// Получаем индекс текущего трека
  const currentIndex = tracks.findIndex(track => track.title === playerTrackTitle.textContent);
// Вычисляем индекс следующего трека
  const prevIndex = (currentIndex - 1 + tracks.length) % tracks.length;
// Получаем текущий трек
// const currentTrack = tracks[currentIndex];
// Получаем следующий трек
const backTrack = tracks[prevIndex];

if (currentTrack) {
  // Останавливаем текущий трек
  currentTrack.audio.pause();
  currentTrack.audio.currentTime = 0;
  // Помечаем текущий трек как не играющий
  currentTrack.playing = false;
}

// Изменяем трек и изображение
changeTrack(prevIndex);

// Проверяем, что следующий трек определен и воспроизводим его
if (backTrack) {
  backTrack.playing = true;
  backTrack.audio.play();
      playm = "y";
  playerPlay5.style.top = "10px";
playerPlay5.style.height = "26px";

playerPlay3.style.height = "10px";
playerPlay3.style.right = "24px";
playerPlay3.style.top = "11px";

playerPlay2.style.height = "10px";
playerPlay2.style.right = "24px";
playerPlay2.style.top = "26px";
}

volumeIndicator.style.width = "100%"; // Изначально установленная ширина индикатора (0%)






});

// Обработчик события для кнопки playerNext
playerNext.addEventListener("click", function() {
  const currentTrack = tracks.find(track => track.playing); // Получаем текущий трек
if (currentTrack) {
  resetAndPlayTrack(currentTrack);
}

// Получаем индекс текущего трека
const currentIndex = tracks.findIndex(track => track.title === playerTrackTitle.textContent);
// Вычисляем индекс следующего трека
const nextIndex = (currentIndex + 1) % tracks.length;
// Получаем текущий трек
// const currentTrack = tracks[currentIndex];
// Получаем следующий трек
const nextTrack = tracks[nextIndex];

if (currentTrack) {
  // Останавливаем текущий трек
  currentTrack.audio.pause();
  currentTrack.audio.currentTime = 0;
  // Помечаем текущий трек как не играющий
  currentTrack.playing = false;
}

// Изменяем трек и изображение
changeTrack(nextIndex);

// Проверяем, что следующий трек определен и воспроизводим его
if (nextTrack) {
  nextTrack.playing = true;
  nextTrack.audio.play();
      playm = "y";
  playerPlay5.style.top = "10px";
playerPlay5.style.height = "26px";

playerPlay3.style.height = "10px";
playerPlay3.style.right = "24px";
playerPlay3.style.top = "11px";

playerPlay2.style.height = "10px";
playerPlay2.style.right = "24px";
playerPlay2.style.top = "26px";
}




volumeIndicator.style.width = "100%"; // Изначально установленная ширина индикатора (0%)

});

const playerLossLessC = document.createElement("div");
// playerLossLessC.style.width = "111px";
// playerLossLessC.style.height = "24px";
playerLossLessC.style.display = "flex";
playerLossLessC.style.position = "absolute";
playerLossLessC.style.borderRadius = "4px";
playerLossLessC.style.top = "379px";
playerLossLessC.style.left = "90px";
// playerLossLessC.style.background = "rgba(255, 255, 255, 0.25)";


const playerLossLessCT = document.createElement("span");
playerLossLessCT.style.fontSize = "15px";
playerLossLessCT.style.fontFamily = "Arial Bold";
playerLossLessCT.textContent = "Dolby";
playerLossLessCT.style.position = "absolute";
playerLossLessCT.style.top = "1px";
playerLossLessCT.style.left = "24px";
playerLossLessCT.style.opacity = "0.5";

const playerLossLessCT1 = document.createElement("span");
playerLossLessCT1.style.fontSize = "15px";
playerLossLessCT1.style.fontFamily = "Arial";
playerLossLessCT1.textContent = "Atmos";
playerLossLessCT1.style.position = "absolute";
playerLossLessCT1.style.top = "1px";
playerLossLessCT1.style.left = "67px";
playerLossLessCT1.style.opacity = "0.25";

const playerLossLessCL = document.createElement("div");
playerLossLessCL.style.background = "white";
playerLossLessCL.style.backgroundSize = "24px";
playerLossLessCL.style.backgroundRepeat = "no-repeat";
playerLossLessCL.style.width = "7px";
playerLossLessCL.style.height = "11px";
playerLossLessCL.style.position = "absolute";
playerLossLessCL.style.top = "4px";
playerLossLessCL.style.left = "7px";
playerLossLessCL.style.borderRadius = "0px 15px 15px 0px";
playerLossLessCL.style.opacity = "0.5";

const playerLossLessCL1 = document.createElement("div");
playerLossLessCL1.style.background = "white";
playerLossLessCL1.style.backgroundSize = "24px";
playerLossLessCL1.style.backgroundRepeat = "no-repeat";
playerLossLessCL1.style.width = "7px";
playerLossLessCL1.style.height = "11px";
playerLossLessCL1.style.position = "absolute";
playerLossLessCL1.style.top = "4px";
playerLossLessCL1.style.left = "16px";
playerLossLessCL1.style.borderRadius = "15px 0px 0px 15px";
playerLossLessCL1.style.opacity = "0.5";




const homeBar = document.createElement("div");
homeBar.style.position = "absolute";
homeBar.style.bottom = "10px";
homeBar.style.left = "90px";
homeBar.style.width = "110px";
homeBar.style.borderRadius = "999px";
homeBar.style.height = "5px";
homeBar.style.mixBlendMode = "difference";
homeBar.style.backgroundColor = "rgba(255, 255, 255, 1";


const mdnpc = document.createElement("div");
mdnpc.style.position = "absolute";
mdnpc.style.top = "20px";
mdnpc.style.left = "100px";
mdnpc.style.width = "100px";
mdnpc.style.borderRadius = "999px";
mdnpc.style.zIndex = "999";
mdnpc.style.height = "30px";
mdnpc.style.transition = "0.3s";
mdnpc.style.backgroundColor = "rgba(0, 0, 0, 1)";

mdnpc.addEventListener("mouseenter", function() {
  mdnpc.style.width = "114px";
  mdnpc.style.height = "34px";
  mdnpc.style.top = "18px";
mdnpc.style.transition = "0.3s";
  mdnpc.style.left = "94px";
});

mdnpc.addEventListener("mouseleave", function() {
  mdnpc.style.width = "100px";
  mdnpc.style.height = "30px";
  mdnpc.style.top = "20px";
mdnpc.style.transition = "0.3s";
  mdnpc.style.left = "100px";
});


const mpt = document.createElement("div");
mpt.style.opacity = "0";
mpt.style.transition = "0.8s";
mpt.style.position = "absolute";
mpt.style.fontFamily = "Gilroy";
mpt.style.fontSize = "25px";
mpt.textContent = "This Function in Beta";
mpt.style.top = "60px";
mpt.style.mixBlendMode = "difference";
mpt.style.left = "20px";

const mptb = document.createElement("button");
mptb.style.opacity = "0";
mptb.style.transition = "0.8s";
mptb.style.position = "absolute";
mptb.style.fontFamily = "Gilroy";
mptb.style.fontSize = "15px";
mptb.textContent = "Open Player";
mptb.style.top = "320px";
mptb.style.mixBlendMode = "difference";
mptb.style.left = "95px";

mptb.addEventListener("click", function() {
frameBg.style.top = "0px";
lyrics.style.top = "0px";
mptb.style.opacity = "0.5";
mpt.style.opacity = "0";
});


// Создаем элемент div
const usertime = document.createElement("div");
usertime.style.position = "absolute";
usertime.style.fontFamily = "Gilroy";
usertime.style.fontSize = "15px";
usertime.style.top = "25px";
usertime.style.mixBlendMode = "difference";
usertime.style.left = "40px";
usertime.style.zIndex = "99999999";

// Функция для обновления времени каждую секунду
function updateTime() {
  // Получаем текущее время пользователя
  const currentTime = new Date();

  // Получаем текущее время в 12-часовом формате без AM/PM
  const formattedTime = currentTime.toLocaleTimeString(undefined, {
    hour: "numeric",
    hour12: true,
    minute: "numeric"
    // second: "numeric"
  }).replace(/(am|pm|AM|PM)/, ''); // Удаляем AM/PM из строки форматированного времени

  // Обновляем текст элемента с новым временем
  usertime.textContent = formattedTime;
  // usertime.textContent = "formattedTime";
}

// Обновляем время сразу после создания элемента
updateTime();

// Обновляем время каждую секунду
setInterval(updateTime, 100);

// Задаем свойства элемента
// usertime.textContent = "formattedTime";

// Добавляем элемент в контейнер




// Добавляем элементы в DOM 
// frame.appendChild(mpt);
// frame.appendChild(mptb);
lyrics.appendChild(timeLabel);
// frame.appendChild(homeBar);
phone.appendChild(mdnpc);
phone.appendChild(usertime);
// Добавляем ползунок громкости на страницу
lyrics.appendChild(volumeSeekBar);
playerSeekBar.appendChild(indicator);
// playerContainer.appendChild(playerImage);
lyrics.appendChild(currentTimeLabel);
lyrics.appendChild(durationLabel);
lyrics.appendChild(playerImage2);
lyrics.appendChild(playerContainerV);
lyrics.appendChild(playerSeekBar);
lyrics.appendChild(playerLossLessC);
playerLossLessC.appendChild(playerLossLessCT);
playerLossLessC.appendChild(playerLossLessCT1);
playerLossLessC.appendChild(playerLossLessCL);
playerLossLessC.appendChild(playerLossLessCL1);
// playerImageContainer.appendChild(playerImage2);
// playerImageContainer.appendChild(playerContainerV);
playerContainerV.appendChild(playerTrackTitle);
playerContainerV.appendChild(playerArtistTitle);
lyrics.appendChild(playerContainerH);
// playerContainerH.appendChild(playerPause);
playerContainerH.appendChild(playerPlay);
playerPlay.appendChild(playerPlay1);
playerPlay.appendChild(playerPlay2);
playerPlay.appendChild(playerPlay3);
playerPlay.appendChild(playerPlay5);
// playerPlay.appendChild(playerPlay4);
playerContainerH.appendChild(playerBack);
playerContainerH.appendChild(playerNext);
// document.body.appendChild(playerContainer);
frame01.appendChild(frame);
// Добавляем frame в DOM дерево (например, внутрь элемента с id="container")
// const container = document.getElementById('div');
// container.appendChild(frame);

// Изначально отображаем первый трек
changeTrack(0);













phonebtnplus.addEventListener("mouseenter", function() {
  phonebtnplus.style.transition = "0.5s";
  phonebtnplus.style.width = "10px";
  phonebtnplus.style.left = "-5px";
  phonebtnplus.style.borderRadius = "4px 0px 0px 4px";
  phonebtnplus.style.cursor = "pointer";
});

phonebtnplus.addEventListener("mouseleave", function() {
  phonebtnplus.style.transition = "0.5s";
  phonebtnplus.style.width = "5px";
  phonebtnplus.style.left = "0px";
  phonebtnplus.style.borderRadius = "10px 0px 0px 10px";
  phonebtnplus.style.cursor = "normal";
});

phonebtnminus.addEventListener("mouseenter", function() {
  phonebtnminus.style.transition = "0.5s";
  phonebtnminus.style.width = "10px";
  phonebtnminus.style.left = "-5px";
  phonebtnminus.style.borderRadius = "4px 0px 0px 4px";
  phonebtnminus.style.cursor = "pointer";
});

phonebtnminus.addEventListener("mouseleave", function() {
  phonebtnminus.style.transition = "0.5s";
  phonebtnminus.style.width = "5px";
  phonebtnminus.style.left = "0px";
  phonebtnminus.style.borderRadius = "10px 0px 0px 10px";
  phonebtnminus.style.cursor = "normal";
});


phonebtnplus.addEventListener("mousedown", function() {
  let intervalId;

  // Функция для увеличения громкости
  function increaseVolume() {
    const currentTrack = tracks.find(track => track.playing);
    if (currentTrack) {
      let volume = currentTrack.audio.volume;
      volume += 0.05; // Увеличиваем громкость на 5%
      if (volume > 1) {
        volume = 1; // Гарантируем, что громкость не превысит 1
      }
      // console.log(volume);
      currentTrack.audio.volume = volume;
      // Обновляем ширину индикатора
      const indicatorWidth = volume * 100;
      updateVolumeIndicatorWidth(indicatorWidth);
    }
  }

  // Запускаем увеличение громкости каждые 100 миллисекунд
  intervalId = setInterval(increaseVolume, 100);

  // Останавливаем увеличение громкости при отпускании кнопки или выходе курсора за пределы кнопки
  function stopIncreasingVolume() {
    clearInterval(intervalId);
    phonebtnplus.removeEventListener("mouseup", stopIncreasingVolume);
    phonebtnplus.removeEventListener("mouseout", stopIncreasingVolume);
  }

  phonebtnplus.addEventListener("mouseup", stopIncreasingVolume);
  phonebtnplus.addEventListener("mouseout", stopIncreasingVolume);
});

phonebtnminus.addEventListener("mousedown", function() {
  let intervalId;

  // Функция для уменьшения громкости
  function decreaseVolume() {
    const currentTrack = tracks.find(track => track.playing);
    if (currentTrack) {
      let volume = currentTrack.audio.volume;
      volume -= 0.05; // Уменьшаем громкость на 5%
      if (volume < 0) {
        volume = 0; // Гарантируем, что громкость не будет отрицательной
      }
      // console.log(volume);
      currentTrack.audio.volume = volume;
      // Обновляем ширину индикатора
      const indicatorWidth = volume * 100;
      updateVolumeIndicatorWidth(indicatorWidth);
    }
  }

  // Запускаем уменьшение громкости каждые 100 миллисекунд
  intervalId = setInterval(decreaseVolume, 100);

  // Останавливаем уменьшение громкости при отпускании кнопки или выходе курсора за пределы кнопки
  function stopDecreasingVolume() {
    clearInterval(intervalId);
    phonebtnminus.removeEventListener("mouseup", stopDecreasingVolume);
    phonebtnminus.removeEventListener("mouseout", stopDecreasingVolume);
  }

  phonebtnminus.addEventListener("mouseup", stopDecreasingVolume);
  phonebtnminus.addEventListener("mouseout", stopDecreasingVolume);
});

phonebtnvol.style.overflow = "hidden";
const phonebtnvol1 = document.createElement("div");
phonebtnvol1.style.height = "100%";
phonebtnvol1.style.width = "100%";
phonebtnvol1.style.transition = "0.5s";
phonebtnvol1.style.background = "rgba(0, 0, 0, 0)";
phonebtnvol.appendChild(phonebtnvol1);


phonebtnvol.addEventListener("mouseenter", function() {
  phonebtnvol.style.transition = "0.5s";
  phonebtnvol.style.width = "5px";
  phonebtnvol.style.left = "0px";
  phonebtnvol.style.borderRadius = "4px 0px 0px 4px";
  phonebtnvol.style.cursor = "pointer";
});

phonebtnvol.addEventListener("mouseleave", function() {
  phonebtnvol.style.transition = "0.5s";
  phonebtnvol.style.width = "3px";
  phonebtnvol.style.left = "2px";
  phonebtnvol.style.borderRadius = "10px 0px 0px 10px";
  phonebtnvol.style.cursor = "normal";
});

phonebtnvol.addEventListener("click", function() {
if(phonebtnvol1.style.background === "rgba(0, 0, 0, 0)"){
  phonebtnvol1.style.background = "rgba(0, 0, 0, 0.5)";
  
}else{
  phonebtnvol1.style.background = "rgba(0, 0, 0, 0)";
}


});












// phlockscreenaddb.addEventListener("click", function() {
// const phlockscreennew = document.createElement("div");
// phlockscreennew.style.marginLeft = "20px";
// phlockscreennew.style.height = "400px";
// phlockscreennew.style.height = "400px";
// phlockscreennew.style.backgroundSize = "315px";
// phlockscreennew.style.transition = "0.0s";
// phlockscreennew.style.backgroundPosition = "0px -40px";
// phlockscreennew.style.backgroundImage = "url('https://www.idownloadblog.com/wp-content/uploads/2023/06/iOS-17-Light-by-@iSWUpdates.png')";
// // phlockscreennew.style.position = "absolute";
// phlockscreennew.style.zIndex = "99";
// // phlockscreennew.style.top = "3px";
// // phlockscreennew.style.left = "3px";
// phlockscreennew.style.borderRadius = "30px";
//   phlockscreennewcontainer.appendChild(phlockscreennew);

// const phlockscreennew3d = document.createElement("div");
// phlockscreennew3d.style.width = "200px";
// phlockscreennew3d.style.height = "400px";
// phlockscreennew3d.style.backgroundSize = "315px";
// phlockscreennew3d.style.transition = "0.0s";
// phlockscreennew3d.style.backgroundPosition = "0px -40px";
// phlockscreennew3d.style.backgroundImage = "url('https://administrati0n.github.io/data-one/iOS17lw.png')";
// phlockscreennew3d.style.position = "relative";
// phlockscreennew3d.style.zIndex = "99";
// phlockscreennew3d.style.bottom = "0px";
// // phlockscreennew3d.style.left = "3px";
// phlockscreennew3d.style.borderRadius = "30px";
// phlockscreennew.appendChild(phlockscreennew3d);




// phlockscreennew.addEventListener("click", function() {
//     const lockScreens = phlockscreennewcontainer.children;
//   for (let i = 0; i < lockScreens.length; i++) {
//     if (lockScreens[i] !== phlockscreennew) {
//       lockScreens[i].style.display = "none";
//     }
//   }
// phlockscreen.style.display = "none";
// phlockscreennew.style.marginLeft = "0px";
//   phlockscreennew.style.display = "block";
//   phlockscreennew.style.transition = "0.3s";
//   phlockscreennew.style.transition = "0.3s";
//   phlockscreennew.style.width = "274px";
//   phlockscreennew.style.height = "600px";
//   phlockscreennew.style.top = "0px";
//   phlockscreennew.style.left = "0px";
//   phlockscreennew3d.style.width = "274px";
//   phlockscreennew3d.style.height = "600px";
//   phlockscreennew3d.style.top = "0px";
//   phlockscreennew3d.style.left = "0px";
//   phlockscreennew.style.backgroundSize = "315px";
//   phlockscreennew.style.backgroundSize = "315px";
//   phlockscreennew.style.backgroundPosition = "0px -50px";
//   phlockscreennew3d.style.backgroundPosition = "0px -50px";
//   usertimelock1.style.fontSize = "70px";
//   usertimelock1.style.width = "274px";
//   usertimelock1.style.top = "80px";
//   usertimelock.style.fontSize = "70px";
//   usertimelock.style.width = "274px";
//   usertimelock.style.top = "80px";
//   carierLockTitle.style.display = "block";
//   containerView.style.transition = "0.3s";
//   containerView.style.height = "600px";
// containerView.style.width = "274px";
// containerView.style.top = "0px";
// containerView.style.left = "0px";
//   setTimeout(function() {
//     const screenRect = phlockscreennew.getBoundingClientRect();
//     phlockscreennew.addEventListener("mousemove", function(e) {
//       const mouseX = e.clientX - screenRect.left;
//       const mouseY = e.clientY - screenRect.top;

//       const moveX = (mouseX - screenRect.width / 2) / 50 * 2.6;
//       const moveY = (mouseY - screenRect.height / 2) / 50 * 2;

//       const bgPosX = `calc(20% + ${moveX}px)`;
//       const bgPosY = `calc(30% + ${moveY}px)`;
//   phlockscreennew.style.transition = "0s";

//   phlockscreennew3d.style.transition = "0s";

//       phlockscreennew.style.backgroundPosition = `${bgPosX} ${bgPosY}`;
//       phlockscreennew3d.style.backgroundPosition = `${bgPosX} ${bgPosY}`;
//     });
//   }, 1000);
// });







// phlockscreennew.addEventListener("mousedown", function() {
//   timeoutId = setTimeout(function() {
//     const lockScreens = phlockscreennewcontainer.children;

//       for (let i = 0; i < lockScreens.length; i++) {
//     if (lockScreens[i] !== phlockscreennew) {
//       lockScreens[i].style.display = "block";
//     }
//   }
// phlockscreen.style.display = "flex";

//     phlockscreen.style.transition = "0.3s";
//     phlockscreennew.style.transition = "0.3s";
//     phlockscreennew3d.style.transition = "0.3s";
//     phlockscreen3d.style.transition = "0.3s";
//     containerView.style.transition = "0.3s";
//     phlockscreennew.style.marginLeft = "20px";
//     phlockscreen.style.top = "0px";
//     phlockscreen.style.left = "0px";
//     phlockscreen.style.width = "200px";
//     phlockscreen.style.height = "400px";
//         phlockscreennew.style.width = "200px";
//     phlockscreennew.style.height = "400px";
//     carierLockTitle.style.display = "none";
//     phlockscreennew3d.style.width = "200px";
//     phlockscreen3d.style.width = "200px";
//     phlockscreennew3d.style.height = "400px";
//     phlockscreen3d.style.height = "400px";
//     phlockscreen.style.backgroundSize = "220px";
//     phlockscreen3d.style.backgroundSize = "220px";
//         phlockscreennew.style.backgroundSize = "220px";
//     phlockscreennew3d.style.backgroundSize = "220px";
//     usertimelock1.style.transition = "0.3s";
//     usertimelock1.style.fontSize = "50px";
//     usertimelock1.style.width = "200px";
//     usertimelock1.style.top = "50px";
//     usertimelock.style.transition = "0.3s";
//     usertimelock.style.fontSize = "50px";
//     usertimelock.style.width = "200px";
//     usertimelock.style.top = "50px";
//       phlockscreen.style.backgroundPosition = "0px -30px";
// containerView.style.overflowY = "hidden";
// containerView.style.height = "400px";
// containerView.style.width = "240px";
// containerView.style.top = "55px";
// containerView.style.left = "32px";

//       phlockscreen3d.style.backgroundPosition = "0px -30px";
    
//     phlockscreennew.addEventListener('mousemove', (e) => {
//       const bgPosX = "0px -30px";
//       const bgPosY = "0px -30px";
      
//       phlockscreennew.style.backgroundPosition = "0px -30px";
//       phlockscreennew3d.style.backgroundPosition = "0px -30px";
//     });
    
//     phlockscreen.style.pointerEvents = "none"; // Отключаем события клика и наведения
//     setTimeout(function() {
//       phlockscreen.style.pointerEvents = "auto"; // Включаем обратно события клика и наведения после 1 секунды
//     }, 500);
//   }, 2000);
// });
// });