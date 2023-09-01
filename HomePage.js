const HomePage1 = document.createElement("div");
HomePage1.style.display = "flex";
HomePage1.style.flexDirection = "column";
HomePage1.style.position = "relative";
HomePage1.style.background = "radial-gradient(rgb(67, 67, 67), rgb(71, 71, 71) 11.76%, rgb(39, 39, 39), rgb(0, 0, 0) 82.77%, rgb(0, 0, 0))";
// HomePage1.style.background = "linear-gradient(to right, rgb(0, 0, 0), rgb(17, 17, 17) 10.92%, rgb(25, 25, 25), rgb(18, 18, 18) 82.35%, rgb(0, 0, 0))";
HomePage1.style.margin = "0px 0px 0px 120px";
HomePage1.style.zIndex = "2";
HomePage1.style.transition = "0.4s";
HomePage1.style.opacity = "1";
// HomePage1.style.width = "100%";
HomePage1.style.height = "auto" + 50 + "px";
HomePage1.style.minHeight = "100vh";
HomePage1.style.marginBottom = "0px";
// ContainerForContent1.appendChild(HomePage1);


function generateNoise(width, height, scale, probability) {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  canvas.width = width;
  canvas.height = height;

  const imageData = ctx.createImageData(width, height);
  const data = imageData.data;

  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      const value = Math.random() < probability ? Math.random() * 255 : 0;
      const alpha = value > 0 ? 10 : 0; // Прозрачность только для шумовых точек
      const index = (y * width + x) * 4;
      data[index] = value;
      data[index + 1] = value;
      data[index + 2] = value;
      data[index + 3] = alpha;
    }
  }

  ctx.putImageData(imageData, 0, 0);

  return canvas.toDataURL();
}

// Создание элемента для шума и его наложение на градиентный фон
const noiseOverlay = document.createElement("div");
// noiseOverlay.style.display = "flex";
noiseOverlay.style.flexDirection = "column";
noiseOverlay.style.position = "relative";
noiseOverlay.style.top = "0";
noiseOverlay.style.left = "0";
noiseOverlay.style.width = "100%";
noiseOverlay.style.height = "100%";
noiseOverlay.style.background = `url(${generateNoise(500, 500, 1, 0.2)})`;
HomePage1.appendChild(noiseOverlay);

ContainerForContent1.appendChild(HomePage1);















const HomePageSlides = document.createElement("div");
HomePageSlides.style.display = "flex";
HomePageSlides.style.flexDirection = "column";
HomePageSlides.style.position = "relative";
HomePageSlides.style.background = "white";
HomePageSlides.style.marginLeft = "auto";
HomePageSlides.style.marginRight = "auto";
HomePageSlides.style.marginTop = "40px";
HomePageSlides.style.borderRadius = "12px";
HomePageSlides.style.height = "450px";
HomePageSlides.style.boxShadow = "0px 0px 40px white";
HomePageSlides.style.width = "90%";
HomePageSlides.style.marginBottom = "0px";
noiseOverlay.appendChild(HomePageSlides);


const HomePageSlides1 = document.createElement("div");
HomePageSlides1.style.display = "flex";
HomePageSlides1.style.flexDirection = "row";
HomePageSlides1.style.position = "relative";
// HomePageSlides1.style.background = "black";
loadImage('Slidesbg.png', HomePageSlides1);
HomePageSlides1.style.backgroundSize = "cover";
HomePageSlides1.style.backgroundPosition = "center";
HomePageSlides1.style.margin = "5px 5px 5vh";
HomePageSlides1.style.borderRadius = "9px 9px 0px 0px";
HomePageSlides1.style.height = "400px";
HomePageSlides1.style.overflow = "hidden";
HomePageSlides1.style.marginBottom = "0px";
HomePageSlides.appendChild(HomePageSlides1);

const HomePageSlidesTextC = document.createElement("div");
HomePageSlidesTextC.style.display = "flex";
HomePageSlidesTextC.style.flexDirection = "row";
HomePageSlidesTextC.style.position = "relative";
// HomePageSlidesTextC.textContent = "black";
HomePageSlidesTextC.style.color = "black";
// HomePageSlidesTextC.style.background = "red";
// HomePageSlidesTextC.style.backgroundPosition = "center";
HomePageSlidesTextC.style.margin = "0px 0px";
// HomePageSlidesTextC.style.borderRadius = "9px 9px 0px 0px";
HomePageSlidesTextC.style.height = "45px";
HomePageSlidesTextC.style.overflow = "hidden";
HomePageSlidesTextC.style.marginBottom = "0px";
HomePageSlides.appendChild(HomePageSlidesTextC);

const HomePageSlidesText = document.createElement("div");
HomePageSlidesText.style.display = "flex";
HomePageSlidesText.style.flexDirection = "row";
HomePageSlidesText.style.position = "relative";
const slideText = "● ADMIN STORE";
let repeatedText = slideText;

while (true) {
  repeatedText += " " + slideText;
  if (repeatedText.length > 1000) {
    break;
  }
}

HomePageSlidesText.textContent = repeatedText;
HomePageSlidesText.style.whiteSpace = "nowrap";
HomePageSlidesText.style.background = "linear-gradient(to right, rgb(0, 0, 0), rgba(255, 255, 255, 0.44), rgb(0, 0, 0))";
HomePageSlidesText.style.WebkitBackgroundClip = "text";
HomePageSlidesText.style.backgroundClip = "text";


shimmerEffect(HomePageSlidesText);


HomePageSlidesText.style.color = "rgba(0,0,0,0)";
// HomePageSlidesText.style.backgroundPosition = "center";
HomePageSlidesText.style.marginTop = "7px";
HomePageSlidesText.style.marginLeft = "-50px";
// HomePageSlidesText.style.marginRight = "auto";
// HomePageSlidesText.style.marginBottom = "7px";
HomePageSlidesText.style.fontFamily = Font1;
HomePageSlidesText.style.fontSize = "25px";
HomePageSlidesText.style.width = "150%";
HomePageSlidesText.style.overflow = "hidden";
HomePageSlidesText.style.marginBottom = "0px";
HomePageSlidesTextC.appendChild(HomePageSlidesText);


const HomePageSlidesGR0 = document.createElement("div");
HomePageSlidesGR0.style.display = "flex";
HomePageSlidesGR0.style.flexDirection = "row";
HomePageSlidesGR0.style.position = "absolute";
HomePageSlidesGR0.style.width = "60px";
HomePageSlidesGR0.style.height = "100%";
HomePageSlidesGR0.style.borderRadius = "0px 0px 0px 12px";
HomePageSlidesGR0.style.background = "linear-gradient(90deg, rgba(255,255,255,1) 20%, rgba(255,255,255,0) 100%)";
HomePageSlidesTextC.appendChild(HomePageSlidesGR0);


const HomePageSlidesGR1 = document.createElement("div");
HomePageSlidesGR1.style.display = "flex";
HomePageSlidesGR1.style.flexDirection = "row";
HomePageSlidesGR1.style.position = "absolute";
HomePageSlidesGR1.style.width = "60px";
HomePageSlidesGR1.style.right = "0px";
HomePageSlidesGR1.style.height = "100%";
HomePageSlidesGR1.style.borderRadius = "0px 0px 12px 0px";
HomePageSlidesGR1.style.background = "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 80%)";
HomePageSlidesTextC.appendChild(HomePageSlidesGR1);




const slide1 = document.createElement("div");
// slide1.textContent = "Слайд 1";
// slide1.style.backgroundColor = "red";
// slide1.style.background = "url('MacBook Pro 16_ - 2.png')";
loadImage('MacBook Pro 16_ - 2.png', slide1);
slide1.style.backgroundSize = "contain";
slide1.style.backgroundPosition = "center";
slide1.style.backgroundRepeat = "no-repeat";
slide1.style.width = "100%";
// slide1.style.width = "100%";
slide1.style.height = "100%";
slide1.style.position = "absolute";
slide1.style.left = "0";
slide1.style.transition = "left 0.5s";

const slide2 = document.createElement("div");
// slide2.textContent = "Слайд 2";
// slide2.style.backgroundColor = "green";
// slide2.style.background = "url('MacBook Pro 16_ - 4.png')";
loadImage('MacBook Pro 16_ - 4.png', slide2);
slide2.style.backgroundSize = "contain";
slide2.style.backgroundPosition = "center";
slide2.style.backgroundRepeat = "no-repeat";
slide2.style.width = "100%";
slide2.style.height = "100%";
slide2.style.position = "absolute";
slide2.style.left = "100%";
slide2.style.transition = "left 0.5s";

const slide3 = document.createElement("div");
// slide3.textContent = "Слайд 3";
// slide3.style.backgroundColor = "blue";
// slide3.style.background = "url('MacBook Pro 16_ - 5.png')";
loadImage('MacBook Pro 16_ - 5.png', slide3);
slide3.style.backgroundSize = "contain";
slide3.style.backgroundPosition = "center";
slide3.style.backgroundRepeat = "no-repeat";
slide3.style.width = "100%";
slide3.style.height = "100%";
slide3.style.position = "absolute";
slide3.style.left = "100%";
slide3.style.transition = "left 0.5s";

const slides = [slide1, slide2, slide3];
let currentSlideIndex = 0;

const slideIndicatorContainer = document.createElement("div");
slideIndicatorContainer.style.position = "absolute";
slideIndicatorContainer.style.bottom = "10px";
slideIndicatorContainer.style.left = "0";
slideIndicatorContainer.style.width = "100%";
slideIndicatorContainer.style.display = "flex";
slideIndicatorContainer.style.justifyContent = "center";

const slideIndicators = [];
for (let i = 0; i < slides.length; i++) {
  const indicator = document.createElement("div");
  indicator.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  indicator.style.width = "50px";
  indicator.style.height = "5px";
  indicator.style.margin = "0 2px";
  indicator.style.borderRadius = "999px";
  indicator.style.border = "1px solid white";
  const fillIndicator = document.createElement("div");
  fillIndicator.style.backgroundColor = "white";
  fillIndicator.style.height = "100%";
  fillIndicator.style.width = "0%";
  fillIndicator.style.borderRadius = "999px";
  // fillIndicator.style.transition = "0.5s";
  indicator.appendChild(fillIndicator);
  slideIndicators.push(indicator);
  slideIndicatorContainer.appendChild(indicator);
}

slides[currentSlideIndex].style.left = "0";
slideIndicators[currentSlideIndex].querySelector("div").style.width = "100%";

HomePageSlides1.appendChild(slide1);
HomePageSlides1.appendChild(slide2);
HomePageSlides1.appendChild(slide3);
HomePageSlides1.appendChild(slideIndicatorContainer);

const prevButton = document.createElement("button");
prevButton.style.position = "absolute";
prevButton.style.left = "0px";
prevButton.style.top = "0px";
prevButton.style.bottom = "0px";
prevButton.style.width = "80px";
prevButton.style.border = "none";
prevButton.style.background = "rgba(0, 0, 0, 0.5)";
prevButton.style.borderRight = "1px solid white";
prevButton.style.backgroundSize = "contain";
prevButton.style.backgroundPosition = "center";
prevButton.style.backgroundRepeat = "no-repeat";
prevButton.style.opacity = "0";
prevButton.style.transition = "0.5s";
prevButton.style.backgroundImage = "url('Frame 5.png')";
prevButton.addEventListener("click", showPreviousSlide);
HomePageSlides1.appendChild(prevButton);

const nextButton = document.createElement("button");
nextButton.style.position = "absolute";
nextButton.style.right = "0px";
nextButton.style.top = "0px";
nextButton.style.bottom = "0px";
nextButton.style.width = "80px";
nextButton.style.border = "none";
nextButton.style.borderLeft = "1px solid white";
nextButton.style.opacity = "0";
// nextButton.style.transition = "1s";
nextButton.style.background = "rgba(0, 0, 0, 0.5)";
nextButton.style.backgroundSize = "contain";
nextButton.style.backgroundPosition = "center";
nextButton.style.backgroundRepeat = "no-repeat";
nextButton.style.opacity = "0";
nextButton.style.transition = "0.5s";
nextButton.style.backgroundImage = "url('Frame 6.png')";
nextButton.addEventListener("click", showNextSlide);
HomePageSlides1.appendChild(nextButton);

function showPreviousSlide() {
  const currentSlide = slides[currentSlideIndex];
  const previousSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
  const previousSlide = slides[previousSlideIndex];

  currentSlide.style.left = "100%";
  previousSlide.style.left = "0";

  slideIndicators[currentSlideIndex].querySelector("div").style.width = "0%";
  slideIndicators[previousSlideIndex].querySelector("div").style.width = "100%";

  currentSlideIndex = previousSlideIndex;

  resetProgress();
}

function showNextSlide() {
  const currentSlide = slides[currentSlideIndex];
  const nextSlideIndex = (currentSlideIndex + 1) % slides.length;
  const nextSlide = slides[nextSlideIndex];

  currentSlide.style.left = "-100%";
  nextSlide.style.left = "0";

  slideIndicators[currentSlideIndex].querySelector("div").style.width = "0%";
  slideIndicators[nextSlideIndex].querySelector("div").style.width = "100%";

  currentSlideIndex = nextSlideIndex;

  resetProgress();
}

let progressInterval = null;

function startProgress() {
  const indicator = slideIndicators[currentSlideIndex].querySelector("div");
  indicator.style.width = "0%";
  clearInterval(progressInterval);
  progressInterval = setInterval(increaseProgress, 100);
}

function increaseProgress() {
  const indicator = slideIndicators[currentSlideIndex].querySelector("div");
  const currentWidth = parseFloat(indicator.style.width) || 0;
  const targetWidth = 100;
  const step = 2;
  if (currentWidth < targetWidth) {
    indicator.style.width = `${currentWidth + step}%`;
  } else {
    clearInterval(progressInterval);
    setTimeout(resetProgress, 5000);
  }
}

function resetProgress() {
  const indicator = slideIndicators[currentSlideIndex].querySelector("div");
  indicator.style.width = "0%";
  indicator.style.transition = "0.5s";
}

function autoSwitchSlides() {
  showNextSlide();
  startProgress();
}

let autoSwitchInterval = setInterval(autoSwitchSlides, 5000);

HomePageSlides1.addEventListener("mouseenter", () => {
  clearInterval(autoSwitchInterval);
  clearInterval(progressInterval);
  prevButton.style.opacity = "1";
prevButton.style.transition = "0.5s";
nextButton.style.opacity = "1";
nextButton.style.transition = "0.5s";
});

HomePageSlides1.addEventListener("mouseleave", () => {
  autoSwitchInterval = setInterval(autoSwitchSlides, 5000);
  startProgress();
  prevButton.style.opacity = "0";
prevButton.style.transition = "0.5s";
nextButton.style.opacity = "0";
nextButton.style.transition = "0.5s";
});

  startProgress();

// Массив с данными для каждой кнопки
const buttonData = [
  { text: "Download", link: "#" },
  { text: "Download", link: "#" },
  { text: "Download", link: "#" }
];


// Создаем кнопку для первого слайда
const button1 = document.createElement("button");
button1.textContent = buttonData[0].text;
button1.style.position = "relative";
button1.style.display = "flex";
button1.style.marginLeft = "auto";
button1.style.marginRight = "auto";
button1.style.top = "79%";
button1.style.left = "180px";
button1.style.background = "rgba(27, 39, 60, 1)";
button1.style.border = "3px solid rgba(65, 85, 123, 1)";
button1.style.borderRadius = "999px";
button1.style.color = "white";
button1.style.fontSize = "20px";
button1.style.padding = "10px";
button1.style.fontFamily = Font2;
button1.addEventListener("click", () => {
  window.location.href = buttonData[0].link;
});




button1.addEventListener("mouseenter", function() {
  button1.style.transition = "0.4s";
  button1.style.background = "rgba(65, 85, 123, 1)";
  button1.style.boxShadow = "0px 0px 25px rgba(65, 85, 123, 1)";
});

button1.addEventListener("mouseleave", function() {
  button1.style.transition = "0.4s";
  button1.style.background = "rgba(27, 39, 60, 1)";
  button1.style.boxShadow = "none";
});



// Создаем кнопку для второго слайда
const button2 = document.createElement("button");
button2.textContent = buttonData[1].text;
button2.style.position = "relative";
button2.style.display = "flex";
button2.style.marginLeft = "auto";
button2.style.marginRight = "auto";
button2.style.top = "79%";
button2.style.left = "180px";
button2.style.background = "rgba(133, 114, 39, 1)";
button2.style.border = "3px solid rgba(255, 218, 75, 1)";
button2.style.borderRadius = "999px";
button2.style.color = "white";
button2.style.fontSize = "20px";
button2.style.padding = "10px";
button2.style.fontFamily = Font2;
button2.addEventListener("click", () => {
  window.location.href = buttonData[1].link;
});


button2.addEventListener("mouseenter", function() {
  button2.style.transition = "0.4s";
  button2.style.background = "rgba(255, 218, 75, 1)";
  button2.style.color = "black";
  button2.style.boxShadow = "0px 0px 25px rgba(255, 218, 75, 1)";
});

button2.addEventListener("mouseleave", function() {
  button2.style.transition = "0.4s";
  button2.style.background = "rgba(133, 114, 39, 1)";
  button2.style.color = "white";
  button2.style.boxShadow = "none";
});



// Создаем кнопку для третьего слайда
const button3 = document.createElement("button");
button3.textContent = buttonData[2].text;
button3.style.position = "relative";
button3.style.display = "flex";
button3.style.marginLeft = "auto";
button3.style.marginRight = "auto";
button3.style.top = "79%";
button3.style.left = "180px";
button3.style.background = "rgba(3, 0, 87, 1)";
button3.style.border = "3px solid rgba(109, 100, 255, 1)";
button3.style.borderRadius = "999px";
button3.style.color = "white";
button3.style.fontSize = "20px";
button3.style.padding = "10px";
button3.style.fontFamily = Font2;
button3.addEventListener("click", () => {
  window.location.href = buttonData[2].link;
});

button3.addEventListener("mouseenter", function() {
  button3.style.transition = "0.4s";
  button3.style.background = "rgba(109, 100, 255, 1)";
  button3.style.boxShadow = "0px 0px 25px rgba(109, 100, 255, 1)";
});

button3.addEventListener("mouseleave", function() {
  button3.style.transition = "0.4s";
  button3.style.background = "rgba(3, 0, 87, 1)";
  button3.style.boxShadow = "none";
});

// Добавляем кнопки к каждому слайду
slide1.appendChild(button1);
slide2.appendChild(button2);
slide3.appendChild(button3);


























const HomePage1pt = document.createElement("div");
HomePage1pt.style.display = "flex";
HomePage1pt.style.flexDirection = "column";
HomePage1pt.style.position = "relative";
HomePage1pt.style.background = "none";
HomePage1pt.style.borderTop = "2px solid rgb(75, 75, 75)";
HomePage1pt.style.borderBottom = "2px solid rgb(75, 75, 75)";
HomePage1pt.style.marginLeft = "auto";
HomePage1pt.style.marginRight = "auto";
HomePage1pt.style.marginTop = "40px";
// HomePage1pt.style.marginBottom = "40px";
// HomePage1pt.style.height = "500px";
HomePage1pt.style.width = "90%";
noiseOverlay.appendChild(HomePage1pt);

const HomePage1ptTitle = document.createElement("div");
HomePage1ptTitle.style.display = "flex";
HomePage1ptTitle.style.flexDirection = "row";
HomePage1ptTitle.style.position = "relative";
HomePage1ptTitle.textContent = "Top 3 Latest";
shimmerEffect(HomePage1ptTitle);
HomePage1ptTitle.style.background = "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.43601190476190477) 50%, rgba(255,255,255,1) 100%)";

HomePage1ptTitle.style.WebkitBackgroundClip = "text";

HomePage1ptTitle.style.marginLeft = "0px";
HomePage1ptTitle.style.color = "rgba(0,0,0,0)";
HomePage1ptTitle.style.marginRight = "auto";
HomePage1ptTitle.style.marginTop = "20px";
HomePage1ptTitle.style.fontSize = "50px";
HomePage1ptTitle.style.WebkitBackgroundClip = "text";
HomePage1ptTitle.style.fontFamily = Font1;
HomePage1pt.appendChild(HomePage1ptTitle);

const HomePage1ptC0 = document.createElement("div");
// HomePage1ptC0.style.display = "flex";
// HomePage1ptC0.style.flexDirection = "row";
HomePage1ptC0.style.whiteSpace = "nowrap";
HomePage1ptC0.style.overflowX = "auto";
HomePage1ptC0.style.overflowY = "hidden";
HomePage1ptC0.style.position = "relative";
// HomePage1ptC0.style.background = "red";
HomePage1ptC0.style.width = "100%";
HomePage1ptC0.style.height = "770px";
// HomePage1ptC0.style.marginLeft = "-30px";
// HomePage1ptC0.style.marginRight = "auto";
HomePage1ptC0.style.maskImage = 'linear-gradient(to right, transparent 0%, white 10%, white 90%, transparent 100%)';
// HomePage1ptC0.style.maskImage = 'linear-gradient(transparent 0%, white 10%, white 90%, transparent 100%)';
HomePage1ptC0.style.marginTop = "20px";
HomePage1ptC0.style.fontSize = "40px";
HomePage1ptC0.style.fontFamily = Font2;
HomePage1pt.appendChild(HomePage1ptC0);

const HomePage1ptC0P1 = document.createElement("div");
HomePage1ptC0P1.style.display = "inline-block";
HomePage1ptC0P1.style.borderRadius = "20px";
// HomePage1ptC0P1.style.flexDirection = "row";
HomePage1ptC0P1.style.position = "relative";
HomePage1ptC0P1.style.background = "rgba(0, 0, 0, 0.4)";
HomePage1ptC0P1.style.WebkitBackdropFilter = "blur(70px)";
HomePage1ptC0P1.style.backdropFilter = "blur(70px)";
// HomePage1ptC0P1.style.border = "2px solid rgba(40, 40, 41, 1)";
// HomePage1ptC0P1.style.boxShadow = "black 7px 5px 20px";
HomePage1ptC0P1.style.marginLeft = "0px";
HomePage1ptC0P1.style.width = "416px";
HomePage1ptC0P1.style.height = "700px";
HomePage1ptC0P1.style.marginRight = "auto";
HomePage1ptC0P1.style.marginTop = "20px";
HomePage1ptC0P1.style.marginBottom = "30px";
HomePage1ptC0P1.style.fontSize = "40px";
HomePage1ptC0P1.style.fontFamily = Font2;
HomePage1ptC0P1.style.overflow = "hidden";
HomePage1ptC0.appendChild(HomePage1ptC0P1);

const HomePage1ptC0P2 = document.createElement("div");
HomePage1ptC0P2.style.display = "inline-block";
HomePage1ptC0P2.style.borderRadius = "20px";
// HomePage1ptC0P2.style.flexDirection = "row";
HomePage1ptC0P2.style.position = "relative";
HomePage1ptC0P2.style.background = "rgba(0, 0, 0, 0.4)";
HomePage1ptC0P2.style.WebkitBackdropFilter = "blur(70px)";
HomePage1ptC0P2.style.backdropFilter = "blur(70px)";
// HomePage1ptC0P2.style.border = "2px solid rgba(40, 40, 41, 1)";
// HomePage1ptC0P2.style.boxShadow = "black 7px 5px 20px";
HomePage1ptC0P2.style.marginLeft = "30px";
HomePage1ptC0P2.style.width = "416px";
HomePage1ptC0P2.style.height = "700px";
HomePage1ptC0P2.style.marginRight = "auto";
HomePage1ptC0P2.style.marginTop = "20px";
HomePage1ptC0P2.style.marginBottom = "30px";
HomePage1ptC0P2.style.fontSize = "40px";
HomePage1ptC0P2.style.fontFamily = Font2;
HomePage1ptC0P2.style.overflow = "hidden";
HomePage1ptC0.appendChild(HomePage1ptC0P2);

const HomePage1ptC0P3 = document.createElement("div");
HomePage1ptC0P3.style.display = "inline-block";
HomePage1ptC0P3.style.borderRadius = "20px";
// HomePage1ptC0P3.style.flexDirection = "row";
HomePage1ptC0P3.style.position = "relative";
HomePage1ptC0P3.style.background = "rgba(0, 0, 0, 0.4)";
HomePage1ptC0P3.style.WebkitBackdropFilter = "blur(70px)";
HomePage1ptC0P3.style.backdropFilter = "blur(70px)";
// HomePage1ptC0P3.style.border = "2px solid rgba(40, 40, 41, 1)";
// HomePage1ptC0P3.style.boxShadow = "black 7px 5px 20px";
HomePage1ptC0P3.style.marginLeft = "30px";
HomePage1ptC0P3.style.width = "416px";
HomePage1ptC0P3.style.height = "700px";
HomePage1ptC0P3.style.marginRight = "auto";
HomePage1ptC0P3.style.marginTop = "20px";
HomePage1ptC0P3.style.marginBottom = "30px";
HomePage1ptC0P3.style.fontSize = "40px";
HomePage1ptC0P3.style.fontFamily = Font2;
HomePage1ptC0P3.style.overflow = "hidden";
HomePage1ptC0.appendChild(HomePage1ptC0P3);










const HomePage1ptC0P1gr = document.createElement("div");
HomePage1ptC0P1gr.style.display = "inline-block";
HomePage1ptC0P1gr.style.overflow = "hidden";
HomePage1ptC0P1gr.style.position = "absolute";
HomePage1ptC0P1gr.style.background = "radial-gradient(35vh at 50% 110%, rgb(94, 94, 94), rgba(0, 0, 0, 0))";
HomePage1ptC0P1gr.style.width = "416px";
HomePage1ptC0P1gr.style.height = "700px";
HomePage1ptC0P1gr.style.fontSize = "40px";
HomePage1ptC0P1gr.style.fontFamily = Font2;
HomePage1ptC0P1.appendChild(HomePage1ptC0P1gr);

const HomePage1ptC0P2gr = document.createElement("div");
HomePage1ptC0P2gr.style.display = "inline-block";
HomePage1ptC0P2gr.style.overflow = "hidden";
HomePage1ptC0P2gr.style.position = "absolute";
HomePage1ptC0P2gr.style.background = "radial-gradient(35vh at 50% 110%, rgb(94, 94, 94), rgba(0, 0, 0, 0))";
HomePage1ptC0P2gr.style.width = "416px";
HomePage1ptC0P2gr.style.height = "700px";
HomePage1ptC0P2gr.style.fontSize = "40px";
HomePage1ptC0P2gr.style.fontFamily = Font2;
HomePage1ptC0P2.appendChild(HomePage1ptC0P2gr);

const HomePage1ptC0P3gr = document.createElement("div");
HomePage1ptC0P3gr.style.display = "inline-block";
HomePage1ptC0P3gr.style.overflow = "hidden";
HomePage1ptC0P3gr.style.position = "absolute";
HomePage1ptC0P3gr.style.background = "radial-gradient(35vh at 50% 110%, rgb(94, 94, 94), rgba(0, 0, 0, 0))";
HomePage1ptC0P3gr.style.width = "416px";
HomePage1ptC0P3gr.style.height = "700px";
HomePage1ptC0P3gr.style.fontSize = "40px";
HomePage1ptC0P3gr.style.fontFamily = Font2;
HomePage1ptC0P3.appendChild(HomePage1ptC0P3gr);

const HomePage1ptC0P1forlogo = document.createElement("div");
HomePage1ptC0P1forlogo.style.display = "flex";
HomePage1ptC0P1forlogo.style.position = "relative";
HomePage1ptC0P1forlogo.style.width = "250px";
HomePage1ptC0P1forlogo.style.height = "100px";
HomePage1ptC0P1forlogo.style.justifyContent = "center";
// HomePage1ptC0P1forlogo.style.background = "rgb(204, 149, 52)";
HomePage1ptC0P1forlogo.style.marginLeft = "auto";
HomePage1ptC0P1forlogo.style.marginRight = "auto";
HomePage1ptC0P1forlogo.style.marginTop = "50px";
HomePage1ptC0P1forlogo.style.marginBottom = "25px";
// HomePage1ptC0P1forlogo.style.overflow = "hidden";
HomePage1ptC0P1forlogo.style.borderRadius = "12px";
HomePage1ptC0P1.appendChild(HomePage1ptC0P1forlogo);

const HomePage1ptC0P1logo = document.createElement("div");
HomePage1ptC0P1logo.style.display = "flex";
HomePage1ptC0P1logo.style.position = "relative";
HomePage1ptC0P1logo.style.width = "100px";
HomePage1ptC0P1logo.style.height = "100px";
HomePage1ptC0P1logo.style.justifyContent = "center";
HomePage1ptC0P1logo.style.background = "rgb(94, 94, 94)";
// HomePage1ptC0P1logo.style.marginLeft = "auto";
HomePage1ptC0P1logo.style.marginRight = "auto";
// HomePage1ptC0P1logo.style.marginTop = "50px";
HomePage1ptC0P1logo.style.marginBottom = "25px";
// HomePage1ptC0P1logo.style.overflow = "hidden";
HomePage1ptC0P1logo.style.borderRadius = "12px";
HomePage1ptC0P1forlogo.appendChild(HomePage1ptC0P1logo);

const HomePage1ptC0P1logo1 = document.createElement("div");
HomePage1ptC0P1logo1.style.display = "flex";
HomePage1ptC0P1logo1.style.position = "absolute";
HomePage1ptC0P1logo1.style.width = "50px";
HomePage1ptC0P1logo1.style.height = "50px";
HomePage1ptC0P1logo1.style.justifyContent = "center";
HomePage1ptC0P1logo1.style.background = "rgb(94, 94, 94)";
HomePage1ptC0P1logo1.style.overflow = "hidden";
HomePage1ptC0P1logo1.style.top = "60px";
HomePage1ptC0P1logo1.style.left = "60px";
HomePage1ptC0P1logo.appendChild(HomePage1ptC0P1logo1);

const HomePage1ptC0P1logo2 = document.createElement("div");
HomePage1ptC0P1logo2.style.display = "flex";
HomePage1ptC0P1logo2.style.position = "absolute";
HomePage1ptC0P1logo2.style.width = "50px";
HomePage1ptC0P1logo2.style.height = "50px";
HomePage1ptC0P1logo2.style.justifyContent = "center";
HomePage1ptC0P1logo2.style.background = "rgb(94, 94, 94)";
HomePage1ptC0P1logo2.style.overflow = "hidden";
HomePage1ptC0P1logo2.style.top = "60px";
HomePage1ptC0P1logo2.style.right = "60px";
HomePage1ptC0P1logo.appendChild(HomePage1ptC0P1logo2);

const HomePage1ptC0P1logo3 = document.createElement("div");
HomePage1ptC0P1logo3.style.display = "flex";
HomePage1ptC0P1logo3.style.position = "relative";
HomePage1ptC0P1logo3.style.width = "300px";
HomePage1ptC0P1logo3.style.height = "300px";
HomePage1ptC0P1logo3.style.marginLeft = "auto";
HomePage1ptC0P1logo3.style.marginRight = "auto";
HomePage1ptC0P1logo3.style.marginTop = "380px";
HomePage1ptC0P1logo3.style.background = "rgb(94, 94, 94)";
HomePage1ptC0P1logo3.style.opacity = "0.5";
HomePage1ptC0P1logo3.style.mixBlendMode = "color-dodge";
HomePage1ptC0P1logo3.style.borderRadius = "12px";
HomePage1ptC0P1gr.appendChild(HomePage1ptC0P1logo3);

const HomePage1ptC0P1logoproj = document.createElement("div");
HomePage1ptC0P1logoproj.style.display = "flex";
HomePage1ptC0P1logoproj.style.position = "relative";
HomePage1ptC0P1logoproj.style.width = "100px";
HomePage1ptC0P1logoproj.style.height = "100px";
HomePage1ptC0P1logoproj.style.justifyContent = "center";
HomePage1ptC0P1logoproj.style.background = "rgb(94, 94, 94)";
HomePage1ptC0P1logoproj.style.marginLeft = "auto";
// HomePage1ptC0P1logoproj.style.marginRight = "auto";
// HomePage1ptC0P1logoproj.style.marginTop = "50px";
HomePage1ptC0P1logoproj.style.marginBottom = "25px";
// HomePage1ptC0P1logoproj.style.overflow = "hidden";
HomePage1ptC0P1logoproj.style.borderRadius = "12px";
HomePage1ptC0P1forlogo.appendChild(HomePage1ptC0P1logoproj);

const HomePage1ptC0P1title = document.createElement("div");
HomePage1ptC0P1title.style.display = "flex";
HomePage1ptC0P1title.style.position = "relative";
HomePage1ptC0P1title.style.fontFamily = Font1;
HomePage1ptC0P1title.style.fontSize = "40px";
HomePage1ptC0P1title.style.width = "100%";
HomePage1ptC0P1title.style.justifyContent = "center";
HomePage1ptC0P1title.style.color = "rgb(94, 94, 94)";
HomePage1ptC0P1title.textContent = "Title";
HomePage1ptC0P1title.style.marginBottom = "5px";
HomePage1ptC0P1title.style.overflow = "hidden";
HomePage1ptC0P1.appendChild(HomePage1ptC0P1title);

const HomePage1ptC0P1data = document.createElement("div");
HomePage1ptC0P1data.style.display = "flex";
HomePage1ptC0P1data.style.position = "relative";
HomePage1ptC0P1data.style.fontFamily = Font2;
HomePage1ptC0P1data.style.fontSize = "20px";
HomePage1ptC0P1data.style.width = "100%";
HomePage1ptC0P1data.style.justifyContent = "center";
HomePage1ptC0P1data.style.color = "rgb(80, 80, 80)";
HomePage1ptC0P1data.textContent = "Title";
HomePage1ptC0P1data.style.marginBottom = "15px";
HomePage1ptC0P1data.style.overflow = "hidden";
HomePage1ptC0P1.appendChild(HomePage1ptC0P1data);


const HomePage1ptC0P1cd = document.createElement("div");
HomePage1ptC0P1cd.style.display = "flex";
HomePage1ptC0P1cd.style.position = "relative";
HomePage1ptC0P1cd.style.width = "200px";
HomePage1ptC0P1cd.style.height = "50px";
HomePage1ptC0P1cd.style.justifyContent = "center";
// HomePage1ptC0P1cd.style.background = "rgb(204, 149, 52)";
HomePage1ptC0P1cd.style.marginLeft = "auto";
HomePage1ptC0P1cd.style.marginRight = "auto";
// HomePage1ptC0P1cd.style.marginTop = "50px";
HomePage1ptC0P1cd.style.marginBottom = "25px";
HomePage1ptC0P1cd.style.overflow = "hidden";
HomePage1ptC0P1cd.style.borderRadius = "999px";
HomePage1ptC0P1cd.style.border = "2px solid rgb(40, 40, 41)";
HomePage1ptC0P1.appendChild(HomePage1ptC0P1cd);

const HomePage1ptC0P1cdt0 = document.createElement("div");
HomePage1ptC0P1cdt0.style.display = "flex";
HomePage1ptC0P1cdt0.style.position = "relative";
HomePage1ptC0P1cdt0.style.width = "50%";
HomePage1ptC0P1cdt0.style.height = "50px";
HomePage1ptC0P1cdt0.style.justifyContent = "center";
HomePage1ptC0P1cdt0.textContent = "Title1";
HomePage1ptC0P1cdt0.style.fontSize = "15px";
// HomePage1ptC0P1cdt0.style.background = "green";
// HomePage1ptC0P1cdt0.style.marginTop = "15px";
HomePage1ptC0P1cdt0.style.paddingTop = "15px";
HomePage1ptC0P1cdt0.style.marginBottom = "25px";
HomePage1ptC0P1cdt0.style.overflow = "hidden";
HomePage1ptC0P1cdt0.style.borderRight = "1px solid rgb(40, 40, 41)";
HomePage1ptC0P1cd.appendChild(HomePage1ptC0P1cdt0);

const HomePage1ptC0P1cdt1 = document.createElement("div");
HomePage1ptC0P1cdt1.style.display = "flex";
HomePage1ptC0P1cdt1.style.position = "relative";
HomePage1ptC0P1cdt1.style.width = "50%";
HomePage1ptC0P1cdt1.style.height = "50px";
HomePage1ptC0P1cdt1.style.justifyContent = "center";
HomePage1ptC0P1cdt1.textContent = "Title2";
HomePage1ptC0P1cdt1.style.fontSize = "15px";
// HomePage1ptC0P1cdt1.style.background = "red";
HomePage1ptC0P1cdt1.style.paddingTop = "15px";
HomePage1ptC0P1cdt1.style.marginBottom = "25px";
HomePage1ptC0P1cdt1.style.overflow = "hidden";
HomePage1ptC0P1cdt1.style.borderLeft = "1px solid rgb(40, 40, 41)";
HomePage1ptC0P1cd.appendChild(HomePage1ptC0P1cdt1);


















const HomePage1ptC0P2forlogo = document.createElement("div");
HomePage1ptC0P2forlogo.style.display = "flex";
HomePage1ptC0P2forlogo.style.position = "relative";
HomePage1ptC0P2forlogo.style.width = "250px";
HomePage1ptC0P2forlogo.style.height = "100px";
HomePage1ptC0P2forlogo.style.justifyContent = "center";
// HomePage1ptC0P2forlogo.style.background = "rgb(204, 149, 52)";
HomePage1ptC0P2forlogo.style.marginLeft = "auto";
HomePage1ptC0P2forlogo.style.marginRight = "auto";
HomePage1ptC0P2forlogo.style.marginTop = "50px";
HomePage1ptC0P2forlogo.style.marginBottom = "25px";
// HomePage1ptC0P2forlogo.style.overflow = "hidden";
HomePage1ptC0P2forlogo.style.borderRadius = "12px";
HomePage1ptC0P2.appendChild(HomePage1ptC0P2forlogo);

const HomePage1ptC0P2logo = document.createElement("div");
HomePage1ptC0P2logo.style.display = "flex";
HomePage1ptC0P2logo.style.position = "relative";
HomePage1ptC0P2logo.style.width = "100px";
HomePage1ptC0P2logo.style.height = "100px";
HomePage1ptC0P2logo.style.justifyContent = "center";
HomePage1ptC0P2logo.style.background = "rgb(94, 94, 94)";
// HomePage1ptC0P2logo.style.marginLeft = "auto";
HomePage1ptC0P2logo.style.marginRight = "auto";
// HomePage1ptC0P2logo.style.marginTop = "50px";
HomePage1ptC0P2logo.style.marginBottom = "25px";
// HomePage1ptC0P2logo.style.overflow = "hidden";
HomePage1ptC0P2logo.style.borderRadius = "12px";
HomePage1ptC0P2forlogo.appendChild(HomePage1ptC0P2logo);

const HomePage1ptC0P2logo1 = document.createElement("div");
HomePage1ptC0P2logo1.style.display = "flex";
HomePage1ptC0P2logo1.style.position = "absolute";
HomePage1ptC0P2logo1.style.width = "50px";
HomePage1ptC0P2logo1.style.height = "50px";
HomePage1ptC0P2logo1.style.justifyContent = "center";
HomePage1ptC0P2logo1.style.background = "rgb(94, 94, 94)";
HomePage1ptC0P2logo1.style.overflow = "hidden";
HomePage1ptC0P2logo1.style.top = "60px";
HomePage1ptC0P2logo1.style.left = "60px";
HomePage1ptC0P2logo.appendChild(HomePage1ptC0P2logo1);

const HomePage1ptC0P2logo2 = document.createElement("div");
HomePage1ptC0P2logo2.style.display = "flex";
HomePage1ptC0P2logo2.style.position = "absolute";
HomePage1ptC0P2logo2.style.width = "50px";
HomePage1ptC0P2logo2.style.height = "50px";
HomePage1ptC0P2logo2.style.justifyContent = "center";
HomePage1ptC0P2logo2.style.background = "rgb(94, 94, 94)";
HomePage1ptC0P2logo2.style.overflow = "hidden";
HomePage1ptC0P2logo2.style.top = "60px";
HomePage1ptC0P2logo2.style.right = "60px";
HomePage1ptC0P2logo.appendChild(HomePage1ptC0P2logo2);

const HomePage1ptC0P2logo3 = document.createElement("div");
HomePage1ptC0P2logo3.style.display = "flex";
HomePage1ptC0P2logo3.style.position = "relative";
HomePage1ptC0P2logo3.style.width = "300px";
HomePage1ptC0P2logo3.style.height = "300px";
HomePage1ptC0P2logo3.style.marginLeft = "auto";
HomePage1ptC0P2logo3.style.marginRight = "auto";
HomePage1ptC0P2logo3.style.marginTop = "380px";
HomePage1ptC0P2logo3.style.background = "rgb(94, 94, 94)";
HomePage1ptC0P2logo3.style.opacity = "0.5";
HomePage1ptC0P2logo3.style.mixBlendMode = "color-dodge";
HomePage1ptC0P2logo3.style.borderRadius = "12px";
HomePage1ptC0P2gr.appendChild(HomePage1ptC0P2logo3);

const HomePage1ptC0P2logoproj = document.createElement("div");
HomePage1ptC0P2logoproj.style.display = "flex";
HomePage1ptC0P2logoproj.style.position = "relative";
HomePage1ptC0P2logoproj.style.width = "100px";
HomePage1ptC0P2logoproj.style.height = "100px";
HomePage1ptC0P2logoproj.style.justifyContent = "center";
HomePage1ptC0P2logoproj.style.background = "rgb(94, 94, 94)";
HomePage1ptC0P2logoproj.style.marginLeft = "auto";
// HomePage1ptC0P2logoproj.style.marginRight = "auto";
// HomePage1ptC0P2logoproj.style.marginTop = "50px";
HomePage1ptC0P2logoproj.style.marginBottom = "25px";
// HomePage1ptC0P2logoproj.style.overflow = "hidden";
HomePage1ptC0P2logoproj.style.borderRadius = "12px";
HomePage1ptC0P2forlogo.appendChild(HomePage1ptC0P2logoproj);

const HomePage1ptC0P2title = document.createElement("div");
HomePage1ptC0P2title.style.display = "flex";
HomePage1ptC0P2title.style.position = "relative";
HomePage1ptC0P2title.style.fontFamily = Font1;
HomePage1ptC0P2title.style.fontSize = "40px";
HomePage1ptC0P2title.style.width = "100%";
HomePage1ptC0P2title.style.justifyContent = "center";
HomePage1ptC0P2title.style.color = "rgb(94, 94, 94)";
HomePage1ptC0P2title.textContent = "Title";
HomePage1ptC0P2title.style.marginBottom = "5px";
HomePage1ptC0P2title.style.overflow = "hidden";
HomePage1ptC0P2.appendChild(HomePage1ptC0P2title);

const HomePage1ptC0P2data = document.createElement("div");
HomePage1ptC0P2data.style.display = "flex";
HomePage1ptC0P2data.style.position = "relative";
HomePage1ptC0P2data.style.fontFamily = Font2;
HomePage1ptC0P2data.style.fontSize = "20px";
HomePage1ptC0P2data.style.width = "100%";
HomePage1ptC0P2data.style.justifyContent = "center";
HomePage1ptC0P2data.style.color = "rgb(80, 80, 80)";
HomePage1ptC0P2data.textContent = "Title";
HomePage1ptC0P2data.style.marginBottom = "15px";
HomePage1ptC0P2data.style.overflow = "hidden";
HomePage1ptC0P2.appendChild(HomePage1ptC0P2data);


const HomePage1ptC0P2cd = document.createElement("div");
HomePage1ptC0P2cd.style.display = "flex";
HomePage1ptC0P2cd.style.position = "relative";
HomePage1ptC0P2cd.style.width = "200px";
HomePage1ptC0P2cd.style.height = "50px";
HomePage1ptC0P2cd.style.justifyContent = "center";
// HomePage1ptC0P2cd.style.background = "rgb(204, 149, 52)";
HomePage1ptC0P2cd.style.marginLeft = "auto";
HomePage1ptC0P2cd.style.marginRight = "auto";
// HomePage1ptC0P2cd.style.marginTop = "50px";
HomePage1ptC0P2cd.style.marginBottom = "25px";
HomePage1ptC0P2cd.style.overflow = "hidden";
HomePage1ptC0P2cd.style.borderRadius = "999px";
HomePage1ptC0P2cd.style.border = "2px solid rgb(40, 40, 41)";
HomePage1ptC0P2.appendChild(HomePage1ptC0P2cd);

const HomePage1ptC0P2cdt0 = document.createElement("div");
HomePage1ptC0P2cdt0.style.display = "flex";
HomePage1ptC0P2cdt0.style.position = "relative";
HomePage1ptC0P2cdt0.style.width = "50%";
HomePage1ptC0P2cdt0.style.height = "50px";
HomePage1ptC0P2cdt0.style.justifyContent = "center";
HomePage1ptC0P2cdt0.textContent = "Title1";
HomePage1ptC0P2cdt0.style.fontSize = "15px";
// HomePage1ptC0P2cdt0.style.background = "green";
// HomePage1ptC0P2cdt0.style.marginTop = "15px";
HomePage1ptC0P2cdt0.style.paddingTop = "15px";
HomePage1ptC0P2cdt0.style.marginBottom = "25px";
HomePage1ptC0P2cdt0.style.overflow = "hidden";
HomePage1ptC0P2cdt0.style.borderRight = "1px solid rgb(40, 40, 41)";
HomePage1ptC0P2cd.appendChild(HomePage1ptC0P2cdt0);

const HomePage1ptC0P2cdt1 = document.createElement("div");
HomePage1ptC0P2cdt1.style.display = "flex";
HomePage1ptC0P2cdt1.style.position = "relative";
HomePage1ptC0P2cdt1.style.width = "50%";
HomePage1ptC0P2cdt1.style.height = "50px";
HomePage1ptC0P2cdt1.style.justifyContent = "center";
HomePage1ptC0P2cdt1.textContent = "Title2";
HomePage1ptC0P2cdt1.style.fontSize = "15px";
// HomePage1ptC0P2cdt1.style.background = "red";
HomePage1ptC0P2cdt1.style.paddingTop = "15px";
HomePage1ptC0P2cdt1.style.marginBottom = "25px";
HomePage1ptC0P2cdt1.style.overflow = "hidden";
HomePage1ptC0P2cdt1.style.borderLeft = "1px solid rgb(40, 40, 41)";
HomePage1ptC0P2cd.appendChild(HomePage1ptC0P2cdt1);











const HomePage1ptC0P3forlogo = document.createElement("div");
HomePage1ptC0P3forlogo.style.display = "flex";
HomePage1ptC0P3forlogo.style.position = "relative";
HomePage1ptC0P3forlogo.style.width = "250px";
HomePage1ptC0P3forlogo.style.height = "100px";
HomePage1ptC0P3forlogo.style.justifyContent = "center";
// HomePage1ptC0P3forlogo.style.background = "rgb(204, 149, 52)";
HomePage1ptC0P3forlogo.style.marginLeft = "auto";
HomePage1ptC0P3forlogo.style.marginRight = "auto";
HomePage1ptC0P3forlogo.style.marginTop = "50px";
HomePage1ptC0P3forlogo.style.marginBottom = "25px";
// HomePage1ptC0P3forlogo.style.overflow = "hidden";
HomePage1ptC0P3forlogo.style.borderRadius = "12px";
HomePage1ptC0P3.appendChild(HomePage1ptC0P3forlogo);

const HomePage1ptC0P3logo = document.createElement("div");
HomePage1ptC0P3logo.style.display = "flex";
HomePage1ptC0P3logo.style.position = "relative";
HomePage1ptC0P3logo.style.width = "100px";
HomePage1ptC0P3logo.style.height = "100px";
HomePage1ptC0P3logo.style.justifyContent = "center";
HomePage1ptC0P3logo.style.background = "rgb(94, 94, 94)";
// HomePage1ptC0P3logo.style.marginLeft = "auto";
HomePage1ptC0P3logo.style.marginRight = "auto";
// HomePage1ptC0P3logo.style.marginTop = "50px";
HomePage1ptC0P3logo.style.marginBottom = "25px";
// HomePage1ptC0P3logo.style.overflow = "hidden";
HomePage1ptC0P3logo.style.borderRadius = "12px";
HomePage1ptC0P3forlogo.appendChild(HomePage1ptC0P3logo);

const HomePage1ptC0P3logo1 = document.createElement("div");
HomePage1ptC0P3logo1.style.display = "flex";
HomePage1ptC0P3logo1.style.position = "absolute";
HomePage1ptC0P3logo1.style.width = "50px";
HomePage1ptC0P3logo1.style.height = "50px";
HomePage1ptC0P3logo1.style.justifyContent = "center";
HomePage1ptC0P3logo1.style.background = "rgb(94, 94, 94)";
HomePage1ptC0P3logo1.style.overflow = "hidden";
HomePage1ptC0P3logo1.style.top = "60px";
HomePage1ptC0P3logo1.style.left = "60px";
HomePage1ptC0P3logo.appendChild(HomePage1ptC0P3logo1);

const HomePage1ptC0P3logo2 = document.createElement("div");
HomePage1ptC0P3logo2.style.display = "flex";
HomePage1ptC0P3logo2.style.position = "absolute";
HomePage1ptC0P3logo2.style.width = "50px";
HomePage1ptC0P3logo2.style.height = "50px";
HomePage1ptC0P3logo2.style.justifyContent = "center";
HomePage1ptC0P3logo2.style.background = "rgb(94, 94, 94)";
HomePage1ptC0P3logo2.style.overflow = "hidden";
HomePage1ptC0P3logo2.style.top = "60px";
HomePage1ptC0P3logo2.style.right = "60px";
HomePage1ptC0P3logo.appendChild(HomePage1ptC0P3logo2);

const HomePage1ptC0P3logo3 = document.createElement("div");
HomePage1ptC0P3logo3.style.display = "flex";
HomePage1ptC0P3logo3.style.position = "relative";
HomePage1ptC0P3logo3.style.width = "300px";
HomePage1ptC0P3logo3.style.height = "300px";
HomePage1ptC0P3logo3.style.marginLeft = "auto";
HomePage1ptC0P3logo3.style.marginRight = "auto";
HomePage1ptC0P3logo3.style.marginTop = "380px";
HomePage1ptC0P3logo3.style.background = "rgb(94, 94, 94)";
HomePage1ptC0P3logo3.style.opacity = "0.5";
HomePage1ptC0P3logo3.style.mixBlendMode = "color-dodge";
HomePage1ptC0P3logo3.style.borderRadius = "12px";
HomePage1ptC0P3gr.appendChild(HomePage1ptC0P3logo3);

const HomePage1ptC0P3logoproj = document.createElement("div");
HomePage1ptC0P3logoproj.style.display = "flex";
HomePage1ptC0P3logoproj.style.position = "relative";
HomePage1ptC0P3logoproj.style.width = "100px";
HomePage1ptC0P3logoproj.style.height = "100px";
HomePage1ptC0P3logoproj.style.justifyContent = "center";
HomePage1ptC0P3logoproj.style.background = "rgb(94, 94, 94)";
HomePage1ptC0P3logoproj.style.marginLeft = "auto";
// HomePage1ptC0P3logoproj.style.marginRight = "auto";
// HomePage1ptC0P3logoproj.style.marginTop = "50px";
HomePage1ptC0P3logoproj.style.marginBottom = "25px";
// HomePage1ptC0P3logoproj.style.overflow = "hidden";
HomePage1ptC0P3logoproj.style.borderRadius = "12px";
HomePage1ptC0P3forlogo.appendChild(HomePage1ptC0P3logoproj);

const HomePage1ptC0P3title = document.createElement("div");
HomePage1ptC0P3title.style.display = "flex";
HomePage1ptC0P3title.style.position = "relative";
HomePage1ptC0P3title.style.fontFamily = Font1;
HomePage1ptC0P3title.style.fontSize = "40px";
HomePage1ptC0P3title.style.width = "100%";
HomePage1ptC0P3title.style.justifyContent = "center";
HomePage1ptC0P3title.style.color = "rgb(94, 94, 94)";
HomePage1ptC0P3title.textContent = "Title";
HomePage1ptC0P3title.style.marginBottom = "5px";
HomePage1ptC0P3title.style.overflow = "hidden";
HomePage1ptC0P3.appendChild(HomePage1ptC0P3title);

const HomePage1ptC0P3data = document.createElement("div");
HomePage1ptC0P3data.style.display = "flex";
HomePage1ptC0P3data.style.position = "relative";
HomePage1ptC0P3data.style.fontFamily = Font2;
HomePage1ptC0P3data.style.fontSize = "20px";
HomePage1ptC0P3data.style.width = "100%";
HomePage1ptC0P3data.style.justifyContent = "center";
HomePage1ptC0P3data.style.color = "rgb(80, 80, 80)";
HomePage1ptC0P3data.textContent = "Title";
HomePage1ptC0P3data.style.marginBottom = "15px";
HomePage1ptC0P3data.style.overflow = "hidden";
HomePage1ptC0P3.appendChild(HomePage1ptC0P3data);


const HomePage1ptC0P3cd = document.createElement("div");
HomePage1ptC0P3cd.style.display = "flex";
HomePage1ptC0P3cd.style.position = "relative";
HomePage1ptC0P3cd.style.width = "200px";
HomePage1ptC0P3cd.style.height = "50px";
HomePage1ptC0P3cd.style.justifyContent = "center";
// HomePage1ptC0P3cd.style.background = "rgb(204, 149, 52)";
HomePage1ptC0P3cd.style.marginLeft = "auto";
HomePage1ptC0P3cd.style.marginRight = "auto";
// HomePage1ptC0P3cd.style.marginTop = "50px";
HomePage1ptC0P3cd.style.marginBottom = "25px";
HomePage1ptC0P3cd.style.overflow = "hidden";
HomePage1ptC0P3cd.style.borderRadius = "999px";
HomePage1ptC0P3cd.style.border = "2px solid rgb(40, 40, 41)";
HomePage1ptC0P3.appendChild(HomePage1ptC0P3cd);

const HomePage1ptC0P3cdt0 = document.createElement("div");
HomePage1ptC0P3cdt0.style.display = "flex";
HomePage1ptC0P3cdt0.style.position = "relative";
HomePage1ptC0P3cdt0.style.width = "50%";
HomePage1ptC0P3cdt0.style.height = "50px";
HomePage1ptC0P3cdt0.style.justifyContent = "center";
HomePage1ptC0P3cdt0.textContent = "Title1";
HomePage1ptC0P3cdt0.style.fontSize = "15px";
// HomePage1ptC0P3cdt0.style.background = "green";
// HomePage1ptC0P3cdt0.style.marginTop = "15px";
HomePage1ptC0P3cdt0.style.paddingTop = "15px";
HomePage1ptC0P3cdt0.style.marginBottom = "25px";
HomePage1ptC0P3cdt0.style.overflow = "hidden";
HomePage1ptC0P3cdt0.style.borderRight = "1px solid rgb(40, 40, 41)";
HomePage1ptC0P3cd.appendChild(HomePage1ptC0P3cdt0);

const HomePage1ptC0P3cdt1 = document.createElement("div");
HomePage1ptC0P3cdt1.style.display = "flex";
HomePage1ptC0P3cdt1.style.position = "relative";
HomePage1ptC0P3cdt1.style.width = "50%";
HomePage1ptC0P3cdt1.style.height = "50px";
HomePage1ptC0P3cdt1.style.justifyContent = "center";
HomePage1ptC0P3cdt1.textContent = "Title2";
HomePage1ptC0P3cdt1.style.fontSize = "15px";
// HomePage1ptC0P3cdt1.style.background = "red";
HomePage1ptC0P3cdt1.style.paddingTop = "15px";
HomePage1ptC0P3cdt1.style.marginBottom = "25px";
HomePage1ptC0P3cdt1.style.overflow = "hidden";
HomePage1ptC0P3cdt1.style.borderLeft = "1px solid rgb(40, 40, 41)";
HomePage1ptC0P3cd.appendChild(HomePage1ptC0P3cdt1);






















HomePage1ptC0P1.addEventListener("mouseenter", function() {
  HomePage1ptC0P1.style.transition = "0.4s";
  HomePage1ptC0P1gr.style.transition = "0.4s";
  HomePage1ptC0P2.style.transition = "0.4s";
  HomePage1ptC0P1.style.marginTop = "0px";
  HomePage1ptC0P1.style.width = "436px";
  HomePage1ptC0P1.style.height = "720px";
  HomePage1ptC0P1gr.style.width = "436px";
  HomePage1ptC0P1gr.style.height = "720px";
HomePage1ptC0P2.style.marginLeft = "10px";
HomePage1ptC0P1.style.cursor = "pointer";
});

HomePage1ptC0P1.addEventListener("mouseleave", function() {
  HomePage1ptC0P1.style.transition = "0.4s";
  HomePage1ptC0P1gr.style.transition = "0.4s";
  HomePage1ptC0P2.style.transition = "0.4s";
  HomePage1ptC0P1.style.marginTop = "20px";
  HomePage1ptC0P1.style.width = "416px";
  HomePage1ptC0P1.style.height = "700px";
  HomePage1ptC0P1gr.style.width = "416px";
  HomePage1ptC0P1gr.style.height = "700px";
HomePage1ptC0P2.style.marginLeft = "30px";
HomePage1ptC0P1.style.cursor = "normal";
});

HomePage1ptC0P2.addEventListener("mouseenter", function() {
  HomePage1ptC0P2.style.transition = "0.4s";
  HomePage1ptC0P3.style.transition = "0.4s";
  HomePage1ptC0P2gr.style.transition = "0.4s";
  HomePage1ptC0P2.style.marginTop = "0px";
  HomePage1ptC0P2.style.marginLeft = "20px";
  HomePage1ptC0P3.style.marginLeft = "20px";
  HomePage1ptC0P2.style.width = "436px";
  HomePage1ptC0P2.style.height = "720px";
  HomePage1ptC0P2gr.style.width = "436px";
  HomePage1ptC0P2gr.style.height = "720px";
HomePage1ptC0P2.style.cursor = "pointer";
});

HomePage1ptC0P2.addEventListener("mouseleave", function() {
  HomePage1ptC0P2.style.transition = "0.4s";
  HomePage1ptC0P3.style.transition = "0.4s";
  HomePage1ptC0P2.style.transition = "0.4s";
  HomePage1ptC0P2gr.style.transition = "0.4s";
  HomePage1ptC0P2.style.marginLeft = "30px";
  HomePage1ptC0P3.style.marginLeft = "30px";
  HomePage1ptC0P2.style.marginTop = "20px";
  HomePage1ptC0P2.style.width = "416px";
  HomePage1ptC0P2.style.height = "700px";
  HomePage1ptC0P2gr.style.width = "416px";
  HomePage1ptC0P2gr.style.height = "700px";
HomePage1ptC0P2.style.cursor = "normal";
});

HomePage1ptC0P3.addEventListener("mouseenter", function() {
  HomePage1ptC0P3.style.transition = "0.4s";
  HomePage1ptC0P3gr.style.transition = "0.4s";
  HomePage1ptC0P3.style.marginTop = "0px";
  HomePage1ptC0P3.style.marginLeft = "20px";
  HomePage1ptC0P3.style.width = "436px";
  HomePage1ptC0P3.style.height = "720px";
  HomePage1ptC0P3gr.style.width = "436px";
  HomePage1ptC0P3gr.style.height = "720px";
HomePage1ptC0P3.style.cursor = "pointer";
});

HomePage1ptC0P3.addEventListener("mouseleave", function() {
  HomePage1ptC0P3.style.transition = "0.4s";
  HomePage1ptC0P3gr.style.transition = "0.4s";
  HomePage1ptC0P3.style.marginLeft = "30px";
  HomePage1ptC0P3.style.marginTop = "20px";
  HomePage1ptC0P3.style.width = "416px";
  HomePage1ptC0P3.style.height = "700px";
  HomePage1ptC0P3gr.style.width = "416px";
  HomePage1ptC0P3gr.style.height = "700px";
HomePage1ptC0P3.style.cursor = "normal";
});



















const HomePage2pt = document.createElement("div");
HomePage2pt.style.display = "flex";
HomePage2pt.style.flexDirection = "column";
HomePage2pt.style.position = "relative";
HomePage2pt.style.background = "none";
// HomePage2pt.style.borderTop = "2px solid rgb(75, 75, 75)";
// HomePage2pt.style.borderBottom = "2px solid rgb(75, 75, 75)";
HomePage2pt.style.marginLeft = "auto";
HomePage2pt.style.marginRight = "auto";
HomePage2pt.style.marginTop = "40px";
HomePage2pt.style.marginBottom = "40px";
// HomePage2pt.style.height = "500px";
HomePage2pt.style.width = "90%";
noiseOverlay.appendChild(HomePage2pt);

const HomePage2ptTitle = document.createElement("div");
HomePage2ptTitle.style.display = "flex";
HomePage2ptTitle.style.flexDirection = "row";
HomePage2ptTitle.style.position = "relative";
HomePage2ptTitle.textContent = "Categories For:";
shimmerEffect(HomePage2ptTitle);
HomePage2ptTitle.style.background = "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.43601190476190477) 50%, rgba(255,255,255,1) 100%)";
HomePage2ptTitle.style.color = "rgba(0,0,0,0)";
HomePage2ptTitle.style.marginLeft = "0px";
HomePage2ptTitle.style.WebkitBackgroundClip = "text";
HomePage2ptTitle.style.marginRight = "auto";
HomePage2ptTitle.style.marginTop = "0px";
HomePage2ptTitle.style.fontSize = "50px";
HomePage2ptTitle.style.fontFamily = Font1;
HomePage2pt.appendChild(HomePage2ptTitle);



const HomePage2ptl0 = document.createElement("div");
HomePage2ptl0.style.display = "flex";
HomePage2ptl0.style.flexDirection = "row";
HomePage2ptl0.style.position = "relative";
HomePage2ptl0.style.background = "rgba(21, 21, 21, 1)";
HomePage2ptl0.style.border = "2px solid rgba(40, 40, 41, 1)";
HomePage2ptl0.style.borderRadius = "999px";
HomePage2ptl0.style.marginLeft = "auto";
HomePage2ptl0.style.marginRight = "auto";
HomePage2ptl0.style.marginTop = "40px";
HomePage2ptl0.style.whiteSpace = "nowrap";
HomePage2ptl0.style.height = "70px";
HomePage2ptl0.style.maxWidth = "100%";
HomePage2ptl0.style.overflow = "hidden";
HomePage2ptl0.style.overflowX = "auto";
HomePage2ptl0.style.justifyContent = "start";
HomePage2pt.appendChild(HomePage2ptl0);

const HomePage2ptl0p0 = document.createElement("div");
HomePage2ptl0p0.style.display = "flex";
HomePage2ptl0p0.style.flexDirection = "column";
HomePage2ptl0p0.style.position = "absolute";
HomePage2ptl0p0.style.background = "rgba(47, 45, 47, 1)";
HomePage2ptl0p0.style.borderRadius = "999px";
HomePage2ptl0p0.style.height = "100%";
HomePage2ptl0p0.style.width = "202px";
HomePage2ptl0p0.style.left = "0px";
HomePage2ptl0p0.style.zIndex = "777";
HomePage2ptl0p0.style.transition = "1s";
HomePage2ptl0p0.style.opacity = "1";
HomePage2ptl0.appendChild(HomePage2ptl0p0);


function vibrateElement(element) {
  element.style.transition = "0.1s"; // Применяем продолжительность анимации 0.2 секунды

  const startPosition = parseInt(element.style.left) || 0;
  let step = 10; // Шаг вибрации в пикселях

  function animateVibration() {
    let currentPosition = startPosition;

    function animateLeft() {
      currentPosition -= step;
      element.style.left = currentPosition + "px";

      setTimeout(function () {
        element.style.left = startPosition + "px";
        currentPosition += step * 2;
        element.style.left = currentPosition + "px";
      }, 100); // Задержка в 0.1 секунды между шагами

      setTimeout(function () {
        element.style.left = startPosition + "px";
        element.style.transition = "0.1s"; // Возвращаем продолжительность анимации на 1 секунду после окончания функции
      }, 200); // Задержка в 0.4 секунды перед возвращением в изначальное положение
    }



    animateLeft();

      setTimeout(function () {
        element.style.transition = "1s";
      }, 210); // Задержка в 0.1 секунды между шагами



  }

  animateVibration();
}

function vibrateElement0(element) {
  element.style.transition = "0.1s"; // Применяем продолжительность анимации 0.2 секунды

  const startPosition = parseInt(element.style.left) || 0;
  let step = 10; // Шаг вибрации в пикселях

  function animateVibration() {
    let currentPosition = startPosition;

    function animateLeft() {
        element.style.left = startPosition + "px";
        currentPosition += step * 2;
        element.style.left = currentPosition + "px";

      setTimeout(function () {
        element.style.left = startPosition + "px";
        element.style.transition = "0.1s"; // Возвращаем продолжительность анимации на 1 секунду после окончания функции
      }, 100); // Задержка в 0.4 секунды перед возвращением в изначальное положение
    }



    animateLeft();

      setTimeout(function () {
        element.style.transition = "1s";
      }, 110); // Задержка в 0.1 секунды между шагами



  }

  animateVibration();
}

function vibrateElement1(element) {
  element.style.transition = "0.1s"; // Применяем продолжительность анимации 0.2 секунды

  const startPosition = parseInt(element.style.left) || 0;
  let step = 10; // Шаг вибрации в пикселях

  function animateVibration() {
    let currentPosition = startPosition;

    function animateLeft() {
      currentPosition -= step;
      element.style.left = currentPosition + "px";

      setTimeout(function () {
        element.style.left = startPosition + "px";
        element.style.transition = "0.1s"; // Возвращаем продолжительность анимации на 1 секунду после окончания функции
      }, 100); // Задержка в 0.4 секунды перед возвращением в изначальное положение
    }



    animateLeft();

      setTimeout(function () {
        element.style.transition = "1s";
      }, 110); // Задержка в 0.1 секунды между шагами



  }

  animateVibration();
}

const HomePage2ptl0p1 = document.createElement("div");
HomePage2ptl0p1.style.display = "flex";
HomePage2ptl0p1.style.flexDirection = "column";
HomePage2ptl0p1.style.position = "relative";
HomePage2ptl0p1.style.background = "rgba(47, 45, 47, 0)";
HomePage2ptl0p1.style.paddingLeft = "30px";
HomePage2ptl0p1.style.paddingRight = "30px";
HomePage2ptl0p1.style.borderRadius = "999px";
HomePage2ptl0p1.style.justifyContent = "center";
HomePage2ptl0p1.style.justifyItems = "center";
HomePage2ptl0p1.style.textAlign = "center";
HomePage2ptl0p1.style.fontSize = "20px";
HomePage2ptl0p1.textContent = "iOS Developers";
HomePage2ptl0p1.style.height = "100%";
HomePage2ptl0p1.style.fontFamily = Font2;
HomePage2ptl0p1.style.color = "white";
HomePage2ptl0p1.style.zIndex = "999";
HomePage2ptl0p1.style.transition = "1s";
HomePage2ptl0.appendChild(HomePage2ptl0p1);

HomePage2ptl0p1.addEventListener("mouseenter", function() {
if(HomePage2ptl0p0.style.left === "0px"){
HomePage2ptl0p0.style.opacity = "0.5";
HomePage2ptl0p1.style.color = "white";
HomePage2ptl0p1.style.cursor = "pointer";
} else {
  HomePage2ptl0p1.style.color = "white";
HomePage2ptl0p1.style.cursor = "pointer";
}

});

HomePage2ptl0p1.addEventListener("mouseleave", function() {
    HomePage2ptl0p1.style.cursor = "normal";
HomePage2ptl0p0.style.opacity = "1";

    if (HomePage2ptl0p1.style.background === "rgba(47, 45, 47, 0)") {
        HomePage2ptl0p1.style.color = "white";
    } else if (HomePage2ptl0p1.style.background === "none"){
        HomePage2ptl0p1.style.color = "rgba(134, 134, 139, 1)";
    }
});

const HomePage2ptl0p2 = document.createElement("div");
HomePage2ptl0p2.style.display = "flex";
HomePage2ptl0p2.style.flexDirection = "column";
HomePage2ptl0p2.style.position = "relative";
HomePage2ptl0p2.style.background = "none";
HomePage2ptl0p2.style.paddingLeft = "30px";
HomePage2ptl0p2.style.paddingRight = "30px";
HomePage2ptl0p2.style.borderRadius = "999px";
HomePage2ptl0p2.style.justifyContent = "center";
HomePage2ptl0p2.style.justifyItems = "center";
HomePage2ptl0p2.style.textAlign = "center";
HomePage2ptl0p2.style.fontSize = "20px";
HomePage2ptl0p2.textContent = "WEB Developrs";
HomePage2ptl0p2.style.height = "100%";
HomePage2ptl0p2.style.fontFamily = Font2;
HomePage2ptl0p2.style.color = "rgba(134, 134, 139, 1)";
HomePage2ptl0p2.style.zIndex = "999";
HomePage2ptl0p2.style.transition = "1s";
HomePage2ptl0.appendChild(HomePage2ptl0p2);

HomePage2ptl0p2.addEventListener("mouseenter", function() {
if(HomePage2ptl0p0.style.left === "190px"){
HomePage2ptl0p0.style.opacity = "0.5";
HomePage2ptl0p2.style.color = "white";
HomePage2ptl0p2.style.cursor = "pointer";
} else{
  HomePage2ptl0p2.style.color = "white";
HomePage2ptl0p2.style.cursor = "pointer";
}
});

HomePage2ptl0p2.addEventListener("mouseleave", function() {
    HomePage2ptl0p2.style.cursor = "normal";
HomePage2ptl0p0.style.opacity = "1";

    if (HomePage2ptl0p2.style.background === "rgba(47, 45, 47, 0)") {
        HomePage2ptl0p2.style.color = "white";
    } else if (HomePage2ptl0p2.style.background === "none"){
        HomePage2ptl0p2.style.color = "rgba(134, 134, 139, 1)";
    }
});

const HomePage2ptl0p3 = document.createElement("div");
HomePage2ptl0p3.style.display = "flex";
HomePage2ptl0p3.style.flexDirection = "column";
HomePage2ptl0p3.style.position = "relative";
HomePage2ptl0p3.style.background = "none";
HomePage2ptl0p3.style.paddingLeft = "30px";
HomePage2ptl0p3.style.paddingRight = "30px";
HomePage2ptl0p3.style.borderRadius = "999px";
HomePage2ptl0p3.style.justifyContent = "center";
HomePage2ptl0p3.style.justifyItems = "center";
HomePage2ptl0p3.style.textAlign = "center";
HomePage2ptl0p3.style.fontSize = "20px";
HomePage2ptl0p3.textContent = "Scripters";
HomePage2ptl0p3.style.height = "100%";
HomePage2ptl0p3.style.fontFamily = Font2;
HomePage2ptl0p3.style.color = "rgba(134, 134, 139, 1)";
HomePage2ptl0p3.style.zIndex = "999";
HomePage2ptl0p3.style.transition = "1s";
HomePage2ptl0.appendChild(HomePage2ptl0p3);

HomePage2ptl0p3.addEventListener("mouseenter", function() {
  if(HomePage2ptl0p0.style.left === "390px"){
HomePage2ptl0p0.style.opacity = "0.5";
HomePage2ptl0p3.style.color = "white";
HomePage2ptl0p3.style.cursor = "pointer";
} else {
HomePage2ptl0p3.style.color = "white";
HomePage2ptl0p3.style.cursor = "pointer";
}
});

HomePage2ptl0p3.addEventListener("mouseleave", function() {
    HomePage2ptl0p3.style.cursor = "normal";
HomePage2ptl0p0.style.opacity = "1";

    if (HomePage2ptl0p3.style.background === "rgba(47, 45, 47, 0)") {
        HomePage2ptl0p3.style.color = "white";
    } else if (HomePage2ptl0p3.style.background === "none"){
        HomePage2ptl0p3.style.color = "rgba(134, 134, 139, 1)";
    }
});

const HomePage2ptl0p4 = document.createElement("div");
HomePage2ptl0p4.style.display = "flex";
HomePage2ptl0p4.style.flexDirection = "column";
HomePage2ptl0p4.style.position = "relative";
HomePage2ptl0p4.style.background = "none";
HomePage2ptl0p4.style.paddingLeft = "30px";
HomePage2ptl0p4.style.paddingRight = "30px";
HomePage2ptl0p4.style.borderRadius = "999px";
HomePage2ptl0p4.style.justifyContent = "center";
HomePage2ptl0p4.style.justifyItems = "center";
HomePage2ptl0p4.style.textAlign = "center";
HomePage2ptl0p4.style.fontSize = "20px";
HomePage2ptl0p4.textContent = "Designers";
HomePage2ptl0p4.style.height = "100%";
HomePage2ptl0p4.style.fontFamily = Font2;
HomePage2ptl0p4.style.color = "rgba(134, 134, 139, 1)";
HomePage2ptl0p4.style.zIndex = "999";
HomePage2ptl0p4.style.transition = "1s";
HomePage2ptl0.appendChild(HomePage2ptl0p4);

HomePage2ptl0p4.addEventListener("mouseenter", function() {
    if(HomePage2ptl0p0.style.left === "532px"){
HomePage2ptl0p0.style.opacity = "0.5";
HomePage2ptl0p4.style.color = "white";
HomePage2ptl0p4.style.cursor = "pointer";
} else {
  HomePage2ptl0p4.style.color = "white";
HomePage2ptl0p4.style.cursor = "pointer";
}
});

HomePage2ptl0p4.addEventListener("mouseleave", function() {
    HomePage2ptl0p4.style.cursor = "normal";
HomePage2ptl0p0.style.opacity = "1";

    if (HomePage2ptl0p4.style.background === "rgba(47, 45, 47, 0)") {
        HomePage2ptl0p4.style.color = "white";
    } else if (HomePage2ptl0p4.style.background === "none"){
        HomePage2ptl0p4.style.color = "rgba(134, 134, 139, 1)";
    }
});


const HomePage2ptl0p5 = document.createElement("div");
HomePage2ptl0p5.style.display = "flex";
HomePage2ptl0p5.style.flexDirection = "column";
HomePage2ptl0p5.style.position = "relative";
HomePage2ptl0p5.style.background = "none";
HomePage2ptl0p5.style.paddingLeft = "30px";
HomePage2ptl0p5.style.paddingRight = "30px";
HomePage2ptl0p5.style.borderRadius = "999px";
HomePage2ptl0p5.style.justifyContent = "center";
HomePage2ptl0p5.style.justifyItems = "center";
HomePage2ptl0p5.style.textAlign = "center";
HomePage2ptl0p5.style.fontSize = "20px";
HomePage2ptl0p5.textContent = "3D Specialists";
HomePage2ptl0p5.style.height = "100%";
HomePage2ptl0p5.style.fontFamily = Font2;
HomePage2ptl0p5.style.color = "rgba(134, 134, 139, 1)";
HomePage2ptl0p5.style.zIndex = "999";
HomePage2ptl0p5.style.transition = "1s";
HomePage2ptl0.appendChild(HomePage2ptl0p5);

HomePage2ptl0p5.addEventListener("mouseenter", function() {
      if(HomePage2ptl0p0.style.left ==="684px"){
HomePage2ptl0p0.style.opacity = "0.5";
HomePage2ptl0p5.style.color = "white";
HomePage2ptl0p5.style.cursor = "pointer";
} else {
  HomePage2ptl0p5.style.color = "white";
HomePage2ptl0p5.style.cursor = "pointer";
}
});

HomePage2ptl0p5.addEventListener("mouseleave", function() {
    HomePage2ptl0p5.style.cursor = "normal";
HomePage2ptl0p0.style.opacity = "1";

    if (HomePage2ptl0p5.style.background === "rgba(47, 45, 47, 0)") {
        HomePage2ptl0p5.style.color = "white";
    } else if (HomePage2ptl0p5.style.background === "none"){
        HomePage2ptl0p5.style.color = "rgba(134, 134, 139, 1)";
    }
});

const HomePage2ptl0p6 = document.createElement("div");
HomePage2ptl0p6.style.display = "flex";
HomePage2ptl0p6.style.flexDirection = "column";
HomePage2ptl0p6.style.position = "relative";
HomePage2ptl0p6.style.background = "none";
HomePage2ptl0p6.style.paddingLeft = "30px";
HomePage2ptl0p6.style.paddingRight = "30px";
HomePage2ptl0p6.style.borderRadius = "999px";
HomePage2ptl0p6.style.justifyContent = "center";
HomePage2ptl0p6.style.justifyItems = "center";
HomePage2ptl0p6.style.textAlign = "center";
HomePage2ptl0p6.style.fontSize = "20px";
HomePage2ptl0p6.textContent = "Beginners";
HomePage2ptl0p6.style.height = "100%";
HomePage2ptl0p6.style.fontFamily = Font2;
HomePage2ptl0p6.style.color = "rgba(134, 134, 139, 1)";
HomePage2ptl0p6.style.zIndex = "999";
HomePage2ptl0p6.style.transition = "1s";
HomePage2ptl0.appendChild(HomePage2ptl0p6);

HomePage2ptl0p6.addEventListener("mouseenter", function() {
        if(HomePage2ptl0p0.style.left === "871px"){
HomePage2ptl0p0.style.opacity = "0.5";
HomePage2ptl0p6.style.color = "white";
HomePage2ptl0p6.style.cursor = "pointer";
} else {
  HomePage2ptl0p6.style.color = "white";
HomePage2ptl0p6.style.cursor = "pointer";
}
});

HomePage2ptl0p6.addEventListener("mouseleave", function() {
    HomePage2ptl0p6.style.cursor = "normal";
HomePage2ptl0p0.style.opacity = "1";

    if (HomePage2ptl0p6.style.background === "rgba(47, 45, 47, 0)") {
        HomePage2ptl0p6.style.color = "white";
    } else if (HomePage2ptl0p6.style.background === "none"){
        HomePage2ptl0p6.style.color = "rgba(134, 134, 139, 1)";
    }
});






const HomePage2ptl0С1 = document.createElement("div");
HomePage2ptl0С1.style.display = "flex";
HomePage2ptl0С1.style.flexDirection = "column";
HomePage2ptl0С1.style.transition = "1s";
HomePage2ptl0С1.style.width = "100%";
HomePage2ptl0С1.style.minHeight = "100px";
HomePage2ptl0С1.style.height = "auto";
HomePage2ptl0С1.style.background = "none";
HomePage2ptl0С1.style.marginTop = "0px";
HomePage2ptl0С1.style.opacity = "1";
HomePage2pt.appendChild(HomePage2ptl0С1);

const HomePage2ptl0С1T1 = document.createElement("div");
HomePage2ptl0С1T1.style.display = "flex";
HomePage2ptl0С1T1.style.fontSize = "80px";
HomePage2ptl0С1T1.style.fontFamily = Font1;
HomePage2ptl0С1T1.style.color = "rgba(0, 0, 0, 0)";
HomePage2ptl0С1T1.style.marginTop = "40px";
HomePage2ptl0С1T1.style.marginLeft = "auto";
HomePage2ptl0С1T1.style.marginRight = "auto";
HomePage2ptl0С1T1.textContent = "iOS Developers";
HomePage2ptl0С1T1.style.background = "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.43601190476190477) 50%, rgba(255,255,255,1) 100%)";
HomePage2ptl0С1T1.style.backgroundClip = "text";
HomePage2ptl0С1T1.style.WebkitBackgroundClip = "text";  // Обратите внимание на большую "W"
HomePage2ptl0С1.appendChild(HomePage2ptl0С1T1);


// Функция для анимации фона
function animateBackground(element) {

    // Проверяем, использует ли пользователь Safari и его версию
    const safariMatch = navigator.userAgent.match(/Version\/(\d+).+Safari/);

    if (navigator.userAgent.indexOf("Safari") !== -1 && navigator.userAgent.indexOf("Chrome") === -1 && safariMatch && parseInt(safariMatch[1], 10) >= 16) {

        let hue = 0;

        // Запускаем анимацию
        function animate() {
            hue = (hue + 1) % 360; // Изменяем цветовой тон

            // Применяем анимированный градиентный фон к элементу
            element.style.background = `linear-gradient(45deg, hsl(${hue}, 100%, 50%), hsl(${(hue + 90) % 360}, 100%, 50%), hsl(${(hue + 180) % 360}, 100%, 50%), hsl(${(hue + 270) % 360}, 100%, 50%))`;

            requestAnimationFrame(animate);
        }

        animate();

    } else {
        element.style.background = 'linear-gradient(45deg, red, yellow, green, lightblue)';
        element.style.backgroundClip = "text";
        element.style.WebkitBackgroundClip = "text";  // Обратите внимание на большую "W"
    }

}

// animateBackground(HomePage2ptl0С1T1);
shimmerEffect(HomePage2ptl0С1T1);



const HomePage2ptl0С1T2 = document.createElement("div");
HomePage2ptl0С1T2.style.display = "flex";
HomePage2ptl0С1T2.style.fontSize = "30px";
HomePage2ptl0С1T2.style.fontFamily = Font2;
HomePage2ptl0С1T2.style.color = "rgba(255, 255, 255, 1)";
HomePage2ptl0С1T2.style.marginTop = "40px";
HomePage2ptl0С1T2.style.marginLeft = "auto";
HomePage2ptl0С1T2.style.marginRight = "auto";
HomePage2ptl0С1T2.style.textAlign = "center";
HomePage2ptl0С1T2.textContent = "Here, you will find a comprehensive list of categories that can assist iOS developers in creating and designing apps, among other useful topics.";
HomePage2ptl0С1T2.style.backgroundClip = "text"; // Применяем градиентный фон только к тексту
HomePage2ptl0С1T2.style.webkitBackgroundClip = "text"; // Для поддержки в Safari
HomePage2ptl0С1.appendChild(HomePage2ptl0С1T2);


const HomePage2ptl0С2 = document.createElement("div");
HomePage2ptl0С2.style.display = "none";
HomePage2ptl0С2.style.flexDirection = "column";
HomePage2ptl0С2.style.transition = "1s";
HomePage2ptl0С2.style.width = "100%";
HomePage2ptl0С2.style.minHeight = "100px";
HomePage2ptl0С2.style.height = "auto";
HomePage2ptl0С2.style.background = "none";
HomePage2ptl0С2.style.marginTop = "100px";
HomePage2ptl0С2.style.opacity = "0";
HomePage2pt.appendChild(HomePage2ptl0С2);


const HomePage2ptl0С2T1 = document.createElement("div");
HomePage2ptl0С2T1.style.display = "flex";
HomePage2ptl0С2T1.style.fontSize = "80px";
HomePage2ptl0С2T1.style.fontFamily = Font1;
HomePage2ptl0С2T1.style.color = "rgba(0, 0, 0, 0)";
HomePage2ptl0С2T1.style.marginTop = "40px";
HomePage2ptl0С2T1.style.marginLeft = "auto";
HomePage2ptl0С2T1.style.marginRight = "auto";
HomePage2ptl0С2T1.style.background = "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.43601190476190477) 50%, rgba(255,255,255,1) 100%)";
HomePage2ptl0С2T1.textContent = "WEB Developers";
HomePage2ptl0С2T1.style.backgroundClip = "text"; // Применяем градиентный фон только к тексту
HomePage2ptl0С2T1.style.webkitBackgroundClip = "text"; // Для поддержки в Safari
HomePage2ptl0С2.appendChild(HomePage2ptl0С2T1);


shimmerEffect(HomePage2ptl0С2T1);

const HomePage2ptl0С2T2 = document.createElement("div");
HomePage2ptl0С2T2.style.display = "flex";
HomePage2ptl0С2T2.style.fontSize = "30px";
HomePage2ptl0С2T2.style.fontFamily = Font2;
HomePage2ptl0С2T2.style.color = "rgba(255, 255, 255, 1)";
HomePage2ptl0С2T2.style.marginTop = "40px";
HomePage2ptl0С2T2.style.marginLeft = "auto";
HomePage2ptl0С2T2.style.marginRight = "auto";
HomePage2ptl0С2T2.style.textAlign = "center";
HomePage2ptl0С2T2.textContent = "Here, you will find all the categories that can help WEB Developers in various aspects of web development, from front-end design to back-end technologies and more.";
HomePage2ptl0С2T2.style.backgroundClip = "text"; // Применяем градиентный фон только к тексту
HomePage2ptl0С2T2.style.webkitBackgroundClip = "text"; // Для поддержки в Safari
HomePage2ptl0С2.appendChild(HomePage2ptl0С2T2);

const HomePage2ptl0С3 = document.createElement("div");
HomePage2ptl0С3.style.display = "none";
HomePage2ptl0С3.style.flexDirection = "column";
HomePage2ptl0С3.style.transition = "1s";
HomePage2ptl0С3.style.width = "100%";
HomePage2ptl0С3.style.minHeight = "100px";
HomePage2ptl0С3.style.height = "auto";
HomePage2ptl0С3.style.background = "none";
HomePage2ptl0С3.style.marginTop = "100px";
HomePage2ptl0С3.style.opacity = "0";
HomePage2pt.appendChild(HomePage2ptl0С3);

const HomePage2ptl0С3T1 = document.createElement("div");
HomePage2ptl0С3T1.style.display = "flex";
HomePage2ptl0С3T1.style.fontSize = "80px";
HomePage2ptl0С3T1.style.fontFamily = Font1;
HomePage2ptl0С3T1.style.color = "rgba(0, 0, 0, 0)";
HomePage2ptl0С3T1.style.marginTop = "40px";
HomePage2ptl0С3T1.style.marginLeft = "auto";
HomePage2ptl0С3T1.style.marginRight = "auto";
HomePage2ptl0С3T1.style.background = "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.43601190476190477) 50%, rgba(255,255,255,1) 100%)";
HomePage2ptl0С3T1.textContent = "Scripters";
HomePage2ptl0С3T1.style.backgroundClip = "text"; // Применяем градиентный фон только к тексту
HomePage2ptl0С3T1.style.webkitBackgroundClip = "text"; // Для поддержки в Safari
HomePage2ptl0С3.appendChild(HomePage2ptl0С3T1);


shimmerEffect(HomePage2ptl0С3T1);

const HomePage2ptl0С3T2 = document.createElement("div");
HomePage2ptl0С3T2.style.display = "flex";
HomePage2ptl0С3T2.style.fontSize = "30px";
HomePage2ptl0С3T2.style.fontFamily = Font2;
HomePage2ptl0С3T2.style.color = "rgba(255, 255, 255, 1)";
HomePage2ptl0С3T2.style.marginTop = "40px";
HomePage2ptl0С3T2.style.marginLeft = "auto";
HomePage2ptl0С3T2.style.marginRight = "auto";
HomePage2ptl0С3T2.style.textAlign = "center";
HomePage2ptl0С3T2.textContent = "Here, you will see a diverse range of categories tailored for scripters, encompassing a variety of languages from C to Swift and beyond, to support you in your scripting journey.";
HomePage2ptl0С3T2.style.backgroundClip = "text"; // Применяем градиентный фон только к тексту
HomePage2ptl0С3T2.style.webkitBackgroundClip = "text"; // Для поддержки в Safari
HomePage2ptl0С3.appendChild(HomePage2ptl0С3T2);

const HomePage2ptl0С4 = document.createElement("div");
HomePage2ptl0С4.style.display = "none";
HomePage2ptl0С4.style.flexDirection = "column";
HomePage2ptl0С4.style.transition = "1s";
HomePage2ptl0С4.style.width = "100%";
HomePage2ptl0С4.style.minHeight = "100px";
HomePage2ptl0С4.style.height = "auto";
HomePage2ptl0С4.style.background = "none";
HomePage2ptl0С4.style.marginTop = "100px";
HomePage2ptl0С4.style.opacity = "0";
HomePage2pt.appendChild(HomePage2ptl0С4);

const HomePage2ptl0С4T1 = document.createElement("div");
HomePage2ptl0С4T1.style.display = "flex";
HomePage2ptl0С4T1.style.fontSize = "80px";
HomePage2ptl0С4T1.style.fontFamily = Font1;
HomePage2ptl0С4T1.style.color = "rgba(0, 0, 0, 0)";
HomePage2ptl0С4T1.style.marginTop = "40px";
HomePage2ptl0С4T1.style.marginLeft = "auto";
HomePage2ptl0С4T1.style.marginRight = "auto";
HomePage2ptl0С4T1.style.background = "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.43601190476190477) 50%, rgba(255,255,255,1) 100%)";
HomePage2ptl0С4T1.textContent = "Designers";
HomePage2ptl0С4T1.style.backgroundClip = "text"; // Применяем градиентный фон только к тексту
HomePage2ptl0С4T1.style.webkitBackgroundClip = "text"; // Для поддержки в Safari
HomePage2ptl0С4.appendChild(HomePage2ptl0С4T1);


shimmerEffect(HomePage2ptl0С4T1);

const HomePage2ptl0С4T2 = document.createElement("div");
HomePage2ptl0С4T2.style.display = "flex";
HomePage2ptl0С4T2.style.fontSize = "30px";
HomePage2ptl0С4T2.style.fontFamily = Font2;
HomePage2ptl0С4T2.style.color = "rgba(255, 255, 255, 1)";
HomePage2ptl0С4T2.style.marginTop = "40px";
HomePage2ptl0С4T2.style.marginLeft = "auto";
HomePage2ptl0С4T2.style.marginRight = "auto";
HomePage2ptl0С4T2.style.textAlign = "center";
HomePage2ptl0С4T2.textContent = "Here, you will discover a comprehensive list of categories curated to empower designers with valuable insights, tips, and resources for honing their craft and creating exceptional designs.";
HomePage2ptl0С4T2.style.backgroundClip = "text"; // Применяем градиентный фон только к тексту
HomePage2ptl0С4T2.style.webkitBackgroundClip = "text"; // Для поддержки в Safari
HomePage2ptl0С4.appendChild(HomePage2ptl0С4T2);

const HomePage2ptl0С5 = document.createElement("div");
HomePage2ptl0С5.style.display = "none";
HomePage2ptl0С5.style.flexDirection = "column";
HomePage2ptl0С5.style.transition = "1s";
HomePage2ptl0С5.style.width = "100%";
HomePage2ptl0С5.style.minHeight = "100px";
HomePage2ptl0С5.style.height = "auto";
HomePage2ptl0С5.style.background = "none";
HomePage2ptl0С5.style.marginTop = "100px";
HomePage2ptl0С5.style.opacity = "0";
HomePage2pt.appendChild(HomePage2ptl0С5);

const HomePage2ptl0С5T1 = document.createElement("div");
HomePage2ptl0С5T1.style.display = "flex";
HomePage2ptl0С5T1.style.fontSize = "80px";
HomePage2ptl0С5T1.style.fontFamily = Font1;
HomePage2ptl0С5T1.style.color = "rgba(0, 0, 0, 0)";
HomePage2ptl0С5T1.style.marginTop = "40px";
HomePage2ptl0С5T1.style.marginLeft = "auto";
HomePage2ptl0С5T1.style.marginRight = "auto";
HomePage2ptl0С5T1.style.background = "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.43601190476190477) 50%, rgba(255,255,255,1) 100%)";
HomePage2ptl0С5T1.textContent = "3D Specialists";
HomePage2ptl0С5T1.style.backgroundClip = "text"; // Применяем градиентный фон только к тексту
HomePage2ptl0С5T1.style.webkitBackgroundClip = "text"; // Для поддержки в Safari
HomePage2ptl0С5.appendChild(HomePage2ptl0С5T1);


shimmerEffect(HomePage2ptl0С5T1);

const HomePage2ptl0С5T2 = document.createElement("div");
HomePage2ptl0С5T2.style.display = "flex";
HomePage2ptl0С5T2.style.fontSize = "30px";
HomePage2ptl0С5T2.style.fontFamily = Font2;
HomePage2ptl0С5T2.style.color = "rgba(255, 255, 255, 1)";
HomePage2ptl0С5T2.style.marginTop = "40px";
HomePage2ptl0С5T2.style.marginLeft = "auto";
HomePage2ptl0С5T2.style.marginRight = "auto";
HomePage2ptl0С5T2.style.textAlign = "center";
HomePage2ptl0С5T2.textContent = "Here, you will explore a specialized selection of categories, catering specifically to 3D specialists, providing them with the tools and knowledge to excel in the realm of 3D graphics and modeling.";
HomePage2ptl0С5T2.style.backgroundClip = "text"; // Применяем градиентный фон только к тексту
HomePage2ptl0С5T2.style.webkitBackgroundClip = "text"; // Для поддержки в Safari
HomePage2ptl0С5.appendChild(HomePage2ptl0С5T2);

const HomePage2ptl0С6 = document.createElement("div");
HomePage2ptl0С6.style.display = "none";
HomePage2ptl0С6.style.flexDirection = "column";
HomePage2ptl0С6.style.transition = "1s";
HomePage2ptl0С6.style.width = "100%";
HomePage2ptl0С6.style.minHeight = "100px";
HomePage2ptl0С6.style.height = "auto";
HomePage2ptl0С6.style.background = "none";
HomePage2ptl0С6.style.marginTop = "100px";
HomePage2ptl0С6.style.opacity = "0";
HomePage2pt.appendChild(HomePage2ptl0С6);

const HomePage2ptl0С6T1 = document.createElement("div");
HomePage2ptl0С6T1.style.display = "flex";
HomePage2ptl0С6T1.style.fontSize = "80px";
HomePage2ptl0С6T1.style.fontFamily = Font1;
HomePage2ptl0С6T1.style.color = "rgba(0, 0, 0, 0)";
HomePage2ptl0С6T1.style.marginTop = "40px";
HomePage2ptl0С6T1.style.marginLeft = "auto";
HomePage2ptl0С6T1.style.marginRight = "auto";
HomePage2ptl0С6T1.style.background = "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.43601190476190477) 50%, rgba(255,255,255,1) 100%)";
HomePage2ptl0С6T1.textContent = "Beginners";
HomePage2ptl0С6T1.style.backgroundClip = "text"; // Применяем градиентный фон только к тексту
HomePage2ptl0С6T1.style.webkitBackgroundClip = "text"; // Для поддержки в Safari
HomePage2ptl0С6T1.style.backgroundClip = "text"; // Для поддержки в Safari
HomePage2ptl0С6.appendChild(HomePage2ptl0С6T1);


shimmerEffect(HomePage2ptl0С6T1);

const HomePage2ptl0С6T2 = document.createElement("div");
HomePage2ptl0С6T2.style.display = "flex";
HomePage2ptl0С6T2.style.fontSize = "30px";
HomePage2ptl0С6T2.style.fontFamily = Font2;
HomePage2ptl0С6T2.style.color = "rgba(255, 255, 255, 1)";
HomePage2ptl0С6T2.style.marginTop = "40px";
HomePage2ptl0С6T2.style.marginLeft = "auto";
HomePage2ptl0С6T2.style.marginRight = "auto";
HomePage2ptl0С6T2.style.textAlign = "center";
HomePage2ptl0С6T2.textContent = "Here, you will find a variety of categories which can assist you in acquiring different skills, ranging from iOS Development to Design.";
HomePage2ptl0С6T2.style.backgroundClip = "text"; // Применяем градиентный фон только к тексту
HomePage2ptl0С6T2.style.webkitBackgroundClip = "text"; // Для поддержки в Safari
HomePage2ptl0С6.appendChild(HomePage2ptl0С6T2);




HomePage2ptl0p1.addEventListener("click", function() {

if(HomePage2ptl0С1.style.marginTop === "0px"){
  vibrateElement0(HomePage2ptl0p0);
}else if(HomePage2ptl0С1.style.marginTop === "100px"){
HomePage2ptl0p0.style.opacity = "0.5";

HomePage2ptl0p1.style.background = "rgba(47, 45, 47, 0)";
HomePage2ptl0p2.style.background = "none";
HomePage2ptl0p3.style.background = "none";
HomePage2ptl0p4.style.background = "none";
HomePage2ptl0p5.style.background = "none";
HomePage2ptl0p6.style.background = "none";

HomePage2ptl0p1.style.color = "white";
HomePage2ptl0p2.style.color = "rgba(134, 134, 139, 1)";
HomePage2ptl0p3.style.color = "rgba(134, 134, 139, 1)";
HomePage2ptl0p4.style.color = "rgba(134, 134, 139, 1)";
HomePage2ptl0p5.style.color = "rgba(134, 134, 139, 1)";
HomePage2ptl0p6.style.color = "rgba(134, 134, 139, 1)";

HomePage2ptl0p0.style.width = HomePage2ptl0p1.offsetWidth + "px";
HomePage2ptl0p0.style.left = 0 + "px";

HomePage2ptl0С1.style.display = "flex";
setTimeout(function() {
HomePage2ptl0С1.style.marginTop = "0px";
HomePage2ptl0С1.style.opacity = "1";
}, 100); 

HomePage2ptl0С2.style.display = "none";
setTimeout(function() {
HomePage2ptl0С2.style.marginTop = "100px";
HomePage2ptl0С2.style.opacity = "0";
}, 100); 

HomePage2ptl0С3.style.display = "none";
setTimeout(function() {
HomePage2ptl0С3.style.marginTop = "100px";
HomePage2ptl0С3.style.opacity = "0";
}, 100); 

HomePage2ptl0С4.style.display = "none";
setTimeout(function() {
HomePage2ptl0С4.style.marginTop = "100px";
HomePage2ptl0С4.style.opacity = "0";
}, 100); 

HomePage2ptl0С5.style.display = "none";
setTimeout(function() {
HomePage2ptl0С5.style.marginTop = "100px";
HomePage2ptl0С5.style.opacity = "0";
}, 100); 

HomePage2ptl0С6.style.display = "none";
setTimeout(function() {
HomePage2ptl0С6.style.marginTop = "100px";
HomePage2ptl0С6.style.opacity = "0";
}, 100); 

}

});


HomePage2ptl0p2.addEventListener("click", function() {

if(HomePage2ptl0С2.style.marginTop === "0px"){
  vibrateElement(HomePage2ptl0p0);
}else if(HomePage2ptl0С2.style.marginTop === "100px"){
HomePage2ptl0p0.style.opacity = "0.5";

HomePage2ptl0p1.style.background = "none";
HomePage2ptl0p2.style.background = "rgba(47, 45, 47, 0)";
HomePage2ptl0p3.style.background = "none";
HomePage2ptl0p4.style.background = "none";
HomePage2ptl0p5.style.background = "none";
HomePage2ptl0p6.style.background = "none";

HomePage2ptl0p1.style.color = "rgba(134, 134, 139, 1)";
HomePage2ptl0p2.style.color = "white";
HomePage2ptl0p3.style.color = "rgba(134, 134, 139, 1)";
HomePage2ptl0p4.style.color = "rgba(134, 134, 139, 1)";
HomePage2ptl0p5.style.color = "rgba(134, 134, 139, 1)";
HomePage2ptl0p6.style.color = "rgba(134, 134, 139, 1)";

HomePage2ptl0p0.style.width = HomePage2ptl0p2.offsetWidth + "px";
HomePage2ptl0p0.style.left = HomePage2ptl0p1.offsetWidth + 0 + "px";

HomePage2ptl0С1.style.display = "none";
setTimeout(function() {
HomePage2ptl0С1.style.marginTop = "100px";
HomePage2ptl0С1.style.opacity = "0";
}, 100); 

HomePage2ptl0С2.style.display = "flex";
setTimeout(function() {
HomePage2ptl0С2.style.marginTop = "0px";
HomePage2ptl0С2.style.opacity = "1";
}, 100); 

HomePage2ptl0С3.style.display = "none";
setTimeout(function() {
HomePage2ptl0С3.style.marginTop = "100px";
HomePage2ptl0С3.style.opacity = "0";
}, 100); 

HomePage2ptl0С4.style.display = "none";
setTimeout(function() {
HomePage2ptl0С4.style.marginTop = "100px";
HomePage2ptl0С4.style.opacity = "0";
}, 100); 

HomePage2ptl0С5.style.display = "none";
setTimeout(function() {
HomePage2ptl0С5.style.marginTop = "100px";
HomePage2ptl0С5.style.opacity = "0";
}, 100); 

HomePage2ptl0С6.style.display = "none";
setTimeout(function() {
HomePage2ptl0С6.style.marginTop = "100px";
HomePage2ptl0С6.style.opacity = "0";
}, 100); 

}

});


HomePage2ptl0p3.addEventListener("click", function() {

if(HomePage2ptl0С3.style.marginTop === "0px"){
    vibrateElement(HomePage2ptl0p0);
}else if(HomePage2ptl0С3.style.marginTop === "100px"){
HomePage2ptl0p0.style.opacity = "0.5";

HomePage2ptl0p1.style.background = "none";
HomePage2ptl0p2.style.background = "none";
HomePage2ptl0p3.style.background = "rgba(47, 45, 47, 0)";
HomePage2ptl0p4.style.background = "none";
HomePage2ptl0p5.style.background = "none";
HomePage2ptl0p6.style.background = "none";

HomePage2ptl0p1.style.color = "rgba(134, 134, 139, 1)";
HomePage2ptl0p2.style.color = "rgba(134, 134, 139, 1)";
HomePage2ptl0p3.style.color = "white";
HomePage2ptl0p4.style.color = "rgba(134, 134, 139, 1)";
HomePage2ptl0p5.style.color = "rgba(134, 134, 139, 1)";
HomePage2ptl0p6.style.color = "rgba(134, 134, 139, 1)";

HomePage2ptl0p0.style.width = HomePage2ptl0p3.offsetWidth + "px";
HomePage2ptl0p0.style.left = HomePage2ptl0p1.offsetWidth + HomePage2ptl0p2.offsetWidth + 0 + "px";


HomePage2ptl0С1.style.display = "none";
setTimeout(function() {
HomePage2ptl0С1.style.marginTop = "100px";
HomePage2ptl0С1.style.opacity = "0";
}, 100); 

HomePage2ptl0С2.style.display = "none";
setTimeout(function() {
HomePage2ptl0С2.style.marginTop = "100px";
HomePage2ptl0С2.style.opacity = "0";
}, 100); 

HomePage2ptl0С3.style.display = "flex";
setTimeout(function() {
HomePage2ptl0С3.style.marginTop = "0px";
HomePage2ptl0С3.style.opacity = "1";
}, 100); 

HomePage2ptl0С4.style.display = "none";
setTimeout(function() {
HomePage2ptl0С4.style.marginTop = "100px";
HomePage2ptl0С4.style.opacity = "0";
}, 100); 

HomePage2ptl0С5.style.display = "none";
setTimeout(function() {
HomePage2ptl0С5.style.marginTop = "100px";
HomePage2ptl0С5.style.opacity = "0";
}, 100); 

HomePage2ptl0С6.style.display = "none";
setTimeout(function() {
HomePage2ptl0С6.style.marginTop = "100px";
HomePage2ptl0С6.style.opacity = "0";
}, 100); 

}

});



HomePage2ptl0p4.addEventListener("click", function() {

if(HomePage2ptl0С4.style.marginTop === "0px"){
    vibrateElement(HomePage2ptl0p0);
}else if(HomePage2ptl0С4.style.marginTop === "100px"){
HomePage2ptl0p0.style.opacity = "0.5";

HomePage2ptl0p1.style.background = "none";
HomePage2ptl0p2.style.background = "none";
HomePage2ptl0p3.style.background = "none";
HomePage2ptl0p4.style.background = "rgba(47, 45, 47, 0)";
HomePage2ptl0p5.style.background = "none";
HomePage2ptl0p6.style.background = "none";

HomePage2ptl0p1.style.color = "rgba(134, 134, 139, 1)";
HomePage2ptl0p2.style.color = "rgba(134, 134, 139, 1)";
HomePage2ptl0p3.style.color = "rgba(134, 134, 139, 1)";
HomePage2ptl0p4.style.color = "white";
HomePage2ptl0p5.style.color = "rgba(134, 134, 139, 1)";
HomePage2ptl0p6.style.color = "rgba(134, 134, 139, 1)";

HomePage2ptl0p0.style.width = HomePage2ptl0p4.offsetWidth + "px";
HomePage2ptl0p0.style.left = HomePage2ptl0p1.offsetWidth + HomePage2ptl0p2.offsetWidth + HomePage2ptl0p3.offsetWidth + 1 + "px";


HomePage2ptl0С1.style.display = "none";
setTimeout(function() {
HomePage2ptl0С1.style.marginTop = "100px";
HomePage2ptl0С1.style.opacity = "0";
}, 100); 

HomePage2ptl0С2.style.display = "none";
setTimeout(function() {
HomePage2ptl0С2.style.marginTop = "100px";
HomePage2ptl0С2.style.opacity = "0";
}, 100); 

HomePage2ptl0С3.style.display = "none";
setTimeout(function() {
HomePage2ptl0С3.style.marginTop = "100px";
HomePage2ptl0С3.style.opacity = "0";
}, 100); 

HomePage2ptl0С4.style.display = "flex";
setTimeout(function() {
HomePage2ptl0С4.style.marginTop = "0px";
HomePage2ptl0С4.style.opacity = "1";
}, 100); 

HomePage2ptl0С5.style.display = "none";
setTimeout(function() {
HomePage2ptl0С5.style.marginTop = "100px";
HomePage2ptl0С5.style.opacity = "0";
}, 100); 

HomePage2ptl0С6.style.display = "none";
setTimeout(function() {
HomePage2ptl0С6.style.marginTop = "100px";
HomePage2ptl0С6.style.opacity = "0";
}, 100); 

}

});

HomePage2ptl0p5.addEventListener("click", function() {

if(HomePage2ptl0С5.style.marginTop === "0px"){
  vibrateElement(HomePage2ptl0p0);
  //
}else if(HomePage2ptl0С5.style.marginTop === "100px"){
HomePage2ptl0p0.style.opacity = "0.5";

HomePage2ptl0p1.style.background = "none";
HomePage2ptl0p2.style.background = "none";
HomePage2ptl0p3.style.background = "none";
HomePage2ptl0p4.style.background = "none";
HomePage2ptl0p5.style.background = "rgba(47, 45, 47, 0)";
HomePage2ptl0p6.style.background = "none";

HomePage2ptl0p1.style.color = "rgba(134, 134, 139, 1)";
HomePage2ptl0p2.style.color = "rgba(134, 134, 139, 1)";
HomePage2ptl0p3.style.color = "rgba(134, 134, 139, 1)";
HomePage2ptl0p4.style.color = "rgba(134, 134, 139, 1)";
HomePage2ptl0p5.style.color = "white";
HomePage2ptl0p6.style.color = "rgba(134, 134, 139, 1)";

HomePage2ptl0p0.style.width = HomePage2ptl0p5.offsetWidth + "px";
HomePage2ptl0p0.style.left = HomePage2ptl0p1.offsetWidth + HomePage2ptl0p2.offsetWidth + HomePage2ptl0p3.offsetWidth +  HomePage2ptl0p4.offsetWidth + 1 + "px";


HomePage2ptl0С1.style.display = "none";
setTimeout(function() {
HomePage2ptl0С1.style.marginTop = "100px";
HomePage2ptl0С1.style.opacity = "0";
}, 100); 

HomePage2ptl0С2.style.display = "none";
setTimeout(function() {
HomePage2ptl0С2.style.marginTop = "100px";
HomePage2ptl0С2.style.opacity = "0";
}, 100); 

HomePage2ptl0С3.style.display = "none";
setTimeout(function() {
HomePage2ptl0С3.style.marginTop = "100px";
HomePage2ptl0С3.style.opacity = "0";
}, 100); 

HomePage2ptl0С4.style.display = "none";
setTimeout(function() {
HomePage2ptl0С4.style.marginTop = "100px";
HomePage2ptl0С4.style.opacity = "0";
}, 100); 

HomePage2ptl0С5.style.display = "flex";
setTimeout(function() {
HomePage2ptl0С5.style.marginTop = "0px";
HomePage2ptl0С5.style.opacity = "1";
}, 100); 

HomePage2ptl0С6.style.display = "none";
setTimeout(function() {
HomePage2ptl0С6.style.marginTop = "100px";
HomePage2ptl0С6.style.opacity = "0";
}, 100); 

}

});



HomePage2ptl0p6.addEventListener("click", function() {

if(HomePage2ptl0С6.style.marginTop === "0px"){
  vibrateElement1(HomePage2ptl0p0);
  //
}else if(HomePage2ptl0С6.style.marginTop === "100px"){
HomePage2ptl0p0.style.opacity = "0.5";

HomePage2ptl0p1.style.background = "none";
HomePage2ptl0p2.style.background = "none";
HomePage2ptl0p3.style.background = "none";
HomePage2ptl0p4.style.background = "none";
HomePage2ptl0p5.style.background = "none";
HomePage2ptl0p6.style.background = "rgba(47, 45, 47, 0)";

HomePage2ptl0p1.style.color = "rgba(134, 134, 139, 1)";
HomePage2ptl0p2.style.color = "rgba(134, 134, 139, 1)";
HomePage2ptl0p3.style.color = "rgba(134, 134, 139, 1)";
HomePage2ptl0p4.style.color = "rgba(134, 134, 139, 1)";
HomePage2ptl0p5.style.color = "rgba(134, 134, 139, 1)";
HomePage2ptl0p6.style.color = "white";

// HomePage2ptl0p0.style.width = "152px";
// HomePage2ptl0p0.style.left = "885px";

HomePage2ptl0p0.style.width = HomePage2ptl0p6.offsetWidth + "px";
HomePage2ptl0p0.style.left = HomePage2ptl0p1.offsetWidth + HomePage2ptl0p2.offsetWidth + HomePage2ptl0p3.offsetWidth +  HomePage2ptl0p4.offsetWidth + HomePage2ptl0p5.offsetWidth + 1 + "px";


HomePage2ptl0С1.style.display = "none";
setTimeout(function() {
HomePage2ptl0С1.style.marginTop = "100px";
HomePage2ptl0С1.style.opacity = "0";
}, 100); 

HomePage2ptl0С2.style.display = "none";
setTimeout(function() {
HomePage2ptl0С2.style.marginTop = "100px";
HomePage2ptl0С2.style.opacity = "0";
}, 100); 

HomePage2ptl0С3.style.display = "none";
setTimeout(function() {
HomePage2ptl0С3.style.marginTop = "100px";
HomePage2ptl0С3.style.opacity = "0";
}, 100); 

HomePage2ptl0С4.style.display = "none";
setTimeout(function() {
HomePage2ptl0С4.style.marginTop = "100px";
HomePage2ptl0С4.style.opacity = "0";
}, 100); 

HomePage2ptl0С5.style.display = "none";
setTimeout(function() {
HomePage2ptl0С5.style.marginTop = "100px";
HomePage2ptl0С5.style.opacity = "0";
}, 100); 

HomePage2ptl0С6.style.display = "flex";
setTimeout(function() {
HomePage2ptl0С6.style.marginTop = "0px";
HomePage2ptl0С6.style.opacity = "1";
}, 100); 

}

});

HomePage2ptl0.style.width = HomePage2ptl0p1.offsetWidth + HomePage2ptl0p2.offsetWidth + HomePage2ptl0p3.offsetWidth +  HomePage2ptl0p4.offsetWidth + HomePage2ptl0p5.offsetWidth + HomePage2ptl0p6.offsetWidth + "4px" + "px";
























let typedText = "";
let isCommandOrCtrlPressed = false;
let timer = null;

function handleKeyDown(event) {
  if (event.key === "Meta" || event.key === "Control") {
    isCommandOrCtrlPressed = true;
  }
}

function handleKeyUp(event) {
  if (event.key === "Meta" || event.key === "Control") {
    isCommandOrCtrlPressed = false;
      typedText = "";
  }
}

function handleKeyPress(event) {
  if (!isCommandOrCtrlPressed) {
    return;
  }

  typedText += event.key.toLowerCase();

  if (typedText === "hesoyam") {
    console.log("Вы набрали 'hesoyam'");
    typedText = "";

    // Запускаем таймер для сброса значения typedText через 1 секунду
    clearTimeout(timer);
    timer = setTimeout(() => {
      typedText = "";
    }, 1000);
  }
}

document.addEventListener("keydown", handleKeyDown);
document.addEventListener("keyup", handleKeyUp);
document.addEventListener("keypress", handleKeyPress);




















































const profc = document.createElement("div");
profc.style.display = "none";
profc.style.flexDirection = "column";
profc.style.background = "rgb(33, 33, 33)";
profc.style.border = "3px solid rgb(60, 60, 60)";
profc.style.borderRadius = "20px";
profc.style.position = "fixed";
profc.style.left = "120px";
profc.style.top = "120px";
profc.style.zIndex = "9999999";
profc.style.width = "250px";
profc.style.height = "380px";
profc.style.opacity = "0";
document.body.appendChild(profc);














const formContainer = document.createElement("div");
formContainer.id = "form-container";
formContainer.style.width = "100%";
formContainer.style.height = "401px";
formContainer.style.borderRadius = "0px 0px 9px 9px";
// formContainer.style.background = "color(srgb 0.157 0.157 0.1621)";
// formContainer.style.borderTop = "2px solid color(srgb 0.157 0.157 0.1621)";
profc.appendChild(formContainer);

const registerForm = document.createElement("form");
registerForm.style.display = "flex";
registerForm.style.flexDirection = "column";
registerForm.style.opacity = "1";
registerForm.style.transition = "0.5s";
registerForm.style.position = "absolute";
registerForm.style.top = "90px";
registerForm.style.width = "80%";
registerForm.style.paddingTop = "20px";
registerForm.style.paddingBottom = "20px";
registerForm.style.left = "10%";
// registerForm.style.border = "2px solid rgba(40, 40, 40, 0.38)";
// registerForm.style.borderRadius = "10px";
// registerForm.style.background = "rgba(70, 70, 70, 0.42)";
registerForm.id = "register-form";
registerForm.classList.add("form");
formContainer.appendChild(registerForm);


const registerFormTitleC = document.createElement("div");
registerFormTitleC.style.fontFamily = "Gilroy";
registerFormTitleC.style.fontSize = "30px";
registerFormTitleC.style.opacity = "1";
registerFormTitleC.style.transition = "0.5s";
// registerFormTitleC.style.marginLeft = "90px";
registerFormTitleC.style.top = "30px";
registerFormTitleC.style.position = "absolute";
formContainer.appendChild(registerFormTitleC);

const registerFormTitle0 = document.createElement("div");
registerFormTitle0.textContent = "Register";
registerFormTitle0.style.position = "absolute";
registerFormTitle0.style.color = "white";
registerFormTitle0.style.filter = "blur(5px)";
registerFormTitle0.style.left = "70px";
registerFormTitleC.appendChild(registerFormTitle0);

const registerFormTitle1 = document.createElement("div");
registerFormTitle1.textContent = "Register";
registerFormTitle1.style.color = "white";
registerFormTitle1.style.position = "absolute";
registerFormTitle1.style.filter = "blur(0px)";
registerFormTitle1.style.left = "70px";
registerFormTitleC.appendChild(registerFormTitle1);

// Добавление полей формы для регистрации
const registerNicknameInput = document.createElement("input");
    registerNicknameInput.contentEditable = true;
registerNicknameInput.style.width = "80%";
registerNicknameInput.style.margin = "0 auto";
registerNicknameInput.style.borderRadius = "7px";
registerNicknameInput.style.color = "white";
registerNicknameInput.style.fontFamily = "Gilroy";
registerNicknameInput.style.fontSize = "15px";
registerNicknameInput.style.padding = "5px";
registerNicknameInput.style.border = "2px solid rgba(0, 0, 0, 0.38)";
registerNicknameInput.style.background = "rgba(70, 70, 70, 0.42)";
registerNicknameInput.type = "name";
registerNicknameInput.name = "name";
registerNicknameInput.placeholder = "Nickname";
registerNicknameInput.required = true;
registerForm.appendChild(registerNicknameInput);

const registerEmailInput = document.createElement("input");
    registerEmailInput.contentEditable = true;
registerEmailInput.style.width = "80%";
registerEmailInput.style.borderRadius = "7px";
registerEmailInput.style.color = "white";
registerEmailInput.style.fontFamily = "Gilroy";
registerEmailInput.style.fontSize = "15px";
registerEmailInput.style.padding = "5px";
registerEmailInput.style.border = "2px solid rgba(0, 0, 0, 0.38)";
registerEmailInput.style.background = "rgba(70, 70, 70, 0.42)";
registerEmailInput.style.marginTop = "10px";
registerEmailInput.style.marginLeft = "auto";
registerEmailInput.style.marginRight = "auto";
registerEmailInput.type = "email";
registerEmailInput.name = "email";
registerEmailInput.placeholder = "Email";
registerEmailInput.required = true;
registerForm.appendChild(registerEmailInput);

const registerPasswordInput = document.createElement("input");
registerPasswordInput.style.width = "80%";
registerPasswordInput.style.borderRadius = "7px";
registerPasswordInput.style.color = "white";
registerPasswordInput.style.fontFamily = "Gilroy";
registerPasswordInput.style.fontSize = "15px";
registerPasswordInput.style.padding = "5px";
registerPasswordInput.style.border = "2px solid rgba(0, 0, 0, 0.38)";
registerPasswordInput.style.background = "rgba(70, 70, 70, 0.42)";
registerPasswordInput.style.marginTop = "10px";
registerPasswordInput.style.marginLeft = "auto";
registerPasswordInput.style.marginRight = "auto";
registerPasswordInput.type = "password";
registerPasswordInput.name = "password";
registerPasswordInput.placeholder = "Password";
registerPasswordInput.required = true;
registerForm.appendChild(registerPasswordInput);

const registerButton = document.createElement("button");
registerButton.type = "submit";
registerButton.style.padding = "10px";
registerButton.style.borderRadius = "10px";
registerButton.style.color = "white";
registerButton.style.background = "rgba(70, 70, 70, 0.42)";
registerButton.style.border = "2px solid rgba(0, 0, 0, 0.38)";
registerButton.style.marginTop = "30px";
registerButton.style.marginLeft = "auto";
registerButton.style.marginRight = "auto";
registerButton.style.fontFamily = "Gilroy";
registerButton.style.fontSize = "15px";
registerButton.textContent = "Continue";
registerForm.appendChild(registerButton);

const registerMessage = document.createElement("p");
registerMessage.textContent = "Already registered? ";
registerMessage.style.color = "white";
registerMessage.style.fontFamily = "Gilroy";
registerMessage.style.fontSize = "15px";
registerMessage.style.marginLeft = "auto";
registerMessage.style.marginRight = "auto";
registerMessage.style.marginTop = "30px";
registerMessage.style.marginBottom = "0px";
registerForm.appendChild(registerMessage);

const loginLink = document.createElement("span");
loginLink.id = "toggle-form";
loginLink.style.color = "white";
loginLink.style.textDecoration = "underline";
loginLink.href = "";
loginLink.textContent = "Sign In";
registerMessage.appendChild(loginLink);







 

const loginForm = document.createElement("form");
loginForm.id = "login-form";
loginForm.style.flexDirection = "column";
loginForm.style.display = "none";
loginForm.style.opacity = "0";
loginForm.style.transition = "0.5s";
loginForm.style.position = "absolute";
loginForm.style.top = "90px";
loginForm.style.width = "80%";
loginForm.style.paddingTop = "20px";
loginForm.style.paddingBottom = "20px";
loginForm.style.left = "10%";
// loginForm.style.border = "2px solid rgba(40, 40, 40, 0.38)";
// loginForm.style.borderRadius = "10px";
// loginForm.style.background = "rgba(70, 70, 70, 0.42)";
loginForm.classList.add("form");
formContainer.appendChild(loginForm);


const loginFormTitleC = document.createElement("div");
loginFormTitleC.style.fontFamily = "Gilroy";
loginFormTitleC.style.fontSize = "30px";
loginFormTitleC.style.opacity = "0";
loginFormTitleC.style.transition = "0.5s";
// loginFormTitleC.style.marginLeft = "90px";
loginFormTitleC.style.top = "30px";
loginFormTitleC.style.position = "absolute";
formContainer.appendChild(loginFormTitleC);

const loginFormTitle0 = document.createElement("div");
loginFormTitle0.textContent = "Sign In";
loginFormTitle0.style.position = "absolute";
loginFormTitle0.style.color = "white";
loginFormTitle0.style.filter = "blur(5px)";
loginFormTitle0.style.left = "75px";
loginFormTitle0.style.width = "100px";
loginFormTitleC.appendChild(loginFormTitle0);

const loginFormTitle1 = document.createElement("div");
loginFormTitle1.textContent = "Sign In";
loginFormTitle1.style.color = "white";
loginFormTitle1.style.position = "absolute";
loginFormTitle1.style.filter = "blur(0px)";
loginFormTitle1.style.left = "75px";
loginFormTitle1.style.width = "100px";
loginFormTitleC.appendChild(loginFormTitle1);


// const loginFormTitle = document.createElement("h2");
// loginFormTitle.textContent = "Войти";
// loginForm.appendChild(loginFormTitle);

// Добавление полей формы для входа
const loginEmailInput = document.createElement("input");
loginEmailInput.type = "email";
loginEmailInput.name = "email";
loginEmailInput.placeholder = "Email";
loginEmailInput.required = true;
loginEmailInput.style.width = "80%";
loginEmailInput.style.marginLeft = "auto";
loginEmailInput.style.marginRight = "auto";
loginEmailInput.style.marginTop = "40px";
loginEmailInput.style.borderRadius = "7px";
loginEmailInput.style.color = "white";
loginEmailInput.style.fontFamily = "Gilroy";
loginEmailInput.style.fontSize = "15px";
loginEmailInput.style.padding = "5px";
loginEmailInput.style.border = "2px solid rgba(0, 0, 0, 0.38)";
loginEmailInput.style.background = "rgba(70, 70, 70, 0.42)";
loginForm.appendChild(loginEmailInput);

const loginPasswordInput = document.createElement("input");
loginPasswordInput.type = "password";
loginPasswordInput.name = "password";
loginPasswordInput.placeholder = "Пароль";
loginPasswordInput.required = true;
loginPasswordInput.style.width = "80%";
loginPasswordInput.style.marginTop = "10px";
loginPasswordInput.style.marginLeft = "auto";
loginPasswordInput.style.marginRight = "auto";
loginPasswordInput.style.borderRadius = "7px";
loginPasswordInput.style.color = "white";
loginPasswordInput.style.fontFamily = "Gilroy";
loginPasswordInput.style.fontSize = "15px";
loginPasswordInput.style.padding = "5px";
loginPasswordInput.style.border = "2px solid rgba(0, 0, 0, 0.38)";
loginPasswordInput.style.background = "rgba(70, 70, 70, 0.42)";
loginForm.appendChild(loginPasswordInput);

const loginButton = document.createElement("button");
loginButton.type = "submit";
loginButton.textContent = "Continue";
loginButton.style.padding = "10px";
loginButton.style.borderRadius = "10px";
loginButton.style.color = "white";
loginButton.style.background = "rgba(70, 70, 70, 0.42)";
loginButton.style.border = "2px solid rgba(0, 0, 0, 0.38)";
loginButton.style.marginTop = "32px";
loginButton.style.marginLeft = "auto";
loginButton.style.marginRight = "auto";
loginButton.style.fontSize = "15px";
loginButton.style.fontFamily = "Gilroy";
loginForm.appendChild(loginButton);

const loginMessage = document.createElement("p");
loginMessage.textContent = "Not registered yet? ";
loginMessage.style.fontSize = "15px";
loginMessage.style.fontFamily = "Gilroy";
loginMessage.style.margin = "30px auto 0px";
loginMessage.style.color = "white";
loginForm.appendChild(loginMessage);

const registerLink = document.createElement("span");
registerLink.id = "toggle-form";
registerLink.href = "#";
registerLink.textContent = "Register";
registerLink.style.color = "white";
registerLink.style.textDecoration = "underline";
loginMessage.appendChild(registerLink);

// Элементы для отображения имейла и пароля пользователя
const userInfoContainer = document.createElement("div");
userInfoContainer.classList.add("user-info-container");
userInfoContainer.style.display = "none"; // Изначально скрыты

const userEmail = document.createElement("p");
userEmail.textContent = "Email: ";
userInfoContainer.appendChild(userEmail);

const userPassword = document.createElement("p");
userPassword.textContent = "Пароль: ";
userInfoContainer.appendChild(userPassword);

profc.appendChild(userInfoContainer);

// let email = localStorage.getItem("email") || "";
// let password = localStorage.getItem("password") || "";

// Обработчик события ввода электронной почты в поле регистрации
registerNicknameInput.addEventListener("input", (e) => {
  name = e.target.value;
});

registerEmailInput.addEventListener("input", (e) => {
  email = e.target.value;
});

// Обработчик события ввода пароля в поле регистрации
registerPasswordInput.addEventListener("input", (e) => {
  password = e.target.value;
});

// Обработчик события ввода электронной почты в поле входа
loginEmailInput.addEventListener("input", (e) => {
  email = e.target.value;
});

// Обработчик события ввода пароля в поле входа
loginPasswordInput.addEventListener("input", (e) => {
  password = e.target.value;
});

// Функция сохранения данных авторизации в локальном хранилище
function saveAuthData(name, email, password) {
  localStorage.setItem("name", name);
  localStorage.setItem("email", email);
  localStorage.setItem("password", password);
}

loginFormTitle0.textContent = name;

loginFormTitle1.textContent = name;

// Обработчик события успешной регистрации
registerForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Здесь выполняйте действия при успешной регистрации

registerForm.style.opacity = "0";
loginForm.style.opacity = "0";
registerFormTitleC.style.opacity = "0";
loginFormTitleC.style.opacity = "0";
  setTimeout(function() {
registerForm.style.display = "none";
loginForm.style.display = "none";
registerFormTitleC.style.display = "none";
loginFormTitleC.style.display = "none";
}, 500); 


  // Сохранение данных авторизации
  saveAuthData(email, password);

  // Отображение информации о пользователе
  // userEmail.textContent = `Email: ${email}`;
  // userPassword.textContent = `Пароль: ${password}`;
  // userInfoContainer.style.display = "block";
});

// Обработчик события успешного входа
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Здесь выполняйте действия при успешном входе

  // Сохранение данных авторизации
  saveAuthData(email, password);

  // // Отображение информации о пользователе
  // userEmail.textContent = `Email: ${email}`;
  // userPassword.textContent = `Пароль: ${password}`;
  // userInfoContainer.style.display = "block";
});





loginLink.addEventListener("click", function() {
registerForm.style.opacity = "0";
registerForm.style.transition = "0.5s";
registerFormTitleC.style.opacity = "0";
registerFormTitleC.style.transition = "0.5s";
loginForm.style.display = "flex";
  setTimeout(function() {
loginForm.style.opacity = "1";
loginForm.style.transition = "0.5s";
loginFormTitleC.style.opacity = "1";
loginFormTitleC.style.transition = "0.5s";
}, 600); 
registerForm.style.display = "none";
registerFormTitleC.style.display = "none";
});

registerLink.addEventListener("click", function() {
loginForm.style.opacity = "0";
loginForm.style.transition = "0.5s";
loginFormTitleC.style.opacity = "0";
loginFormTitleC.style.transition = "0.5s";
registerForm.style.display = "flex";
registerFormTitleC.style.display = "flex";
  setTimeout(function() {



registerForm.style.opacity = "1";
registerForm.style.transition = "0.5s";
registerFormTitleC.style.opacity = "1";
registerFormTitleC.style.transition = "0.5s";
}, 600); 
loginForm.style.display = "none";
});



















// var products2 = [
//   { name: "Account Executive" },
//   { name: "Application Developer" },
//   { name: "Account Manager" },
//   // Добавьте остальные объекты с именами
// ];



// Функция для создания тегов из массива products
function createTagsFromProducts(products) {
  var tags = [];
  for (var i = 0; i < products.length; i++) {
    tags.push(products[i].название);
  }
  return tags;
}

var inputc = document.createElement('div');
inputc.style.position = 'fixed';
inputc.style.display = 'flex';
inputc.style.flexDirection = 'column';
inputc.style.top = '-200px';
inputc.style.transition = '0.5s';
inputc.style.left = '0px';
inputc.style.width = '100%';
inputc.style.zIndex = '99999';
document.body.appendChild(inputc);


// Создаем поле ввода для поиска проектов
var input = document.createElement('span');
// input.name = 'tags-outside';
    input.contentEditable = true;
input.classList.add('tagify--outside');
input.placeholder = 'write some tags';
input.style.position = 'relative';
input.style.display = 'flex';
input.style.width = '200px';
input.style.height = '30px';
input.style.background = 'black';
input.style.boxShadow = '0px 0px 20px black';
input.style.border = '3px solid white';
input.style.borderRadius = '10px';
input.style.margin = '0 auto';
input.style.zIndex = '99999';
input.style.justifyContent = 'start';
input.style.paddingBottom = '2px';
input.style.alignItems = 'center';
input.style.paddingTop = '2px';
input.style.paddingLeft = '8px';
input.style.paddingRight = '8px';
input.style.fontSize = '20px';
input.style.fontFamily = 'Gilroy';
input.style.overflow = 'hidden';
input.style.overflowX = 'auto';
inputc.appendChild(input);

// Создаем контейнер для тегов
var tagsContainer = document.createElement('div');
tagsContainer.id = 'tags-container';
tagsContainer.style.position = 'relative';
tagsContainer.style.top = '10px';
tagsContainer.style.right = '20px';
tagsContainer.style.zIndex = '99999';
tagsContainer.style.margin = '0 auto';
tagsContainer.style.flexDirection = 'column';
tagsContainer.style.background = 'black';
tagsContainer.style.color = 'white';
tagsContainer.style.fontSize = '20px';
tagsContainer.style.fontFamily = 'Gilroy';
tagsContainer.style.borderRadius = '20px';
tagsContainer.style.padding = '10px';
tagsContainer.style.width = '50%';
tagsContainer.style.border = '3px solid white';
tagsContainer.style.boxShadow = 'black 0px 0px 20px';
tagsContainer.style.display = 'none'; // Скрыть контейнер по умолчанию
inputc.appendChild(tagsContainer);


// Функция для объединения двух массивов в один
function mergeArrays(array1, array2) {
  return [...array1, ...array2];
}

// Объединяем теги из массивов products1 и products2
var jobTags = mergeArrays(createTagsFromProducts(products1), createTagsFromProducts(products2));

// ... (Ваш предыдущий код)

// Функция для создания div-контейнера с тегами
// ... предыдущий код ...



function createTagContainer(tags, showAll) {
  tagsContainer.innerHTML = '';

  if (!showAll && (tags.length === 0 || input.textContent.trim() === '')) {
    tagsContainer.style.display = 'none';
    return;
  } else {
    tagsContainer.style.display = 'flex';
  }

  var tagsToShow = showAll ? tags : tags.slice(0, 5);

  tagsToShow.forEach(function(tag) {
    var product = findProductByTag(tag);

    var tagDiv = document.createElement('div');
    // tagDiv.textContent = tag;
    // tagDiv.style.width = '100%';
    tagDiv.style.borderRadius = '5px';
    tagDiv.style.padding = '5px';
    tagDiv.style.display = 'flex';
    tagDiv.className = 'tag';
    tagsContainer.appendChild(tagDiv);




    tagDiv.addEventListener("mouseenter", function() {
      tagDiv.style.transition = "0.4s";
      tagDiv.style.background = "white";
      tagDiv.style.color = "black";
      tagDiv.style.cursor = "pointer";
    });

    tagDiv.addEventListener("mouseleave", function() {
      tagDiv.style.transition = "0.4s";
      tagDiv.style.background = "black";
      tagDiv.style.color = "white";
      tagDiv.style.cursor = "normal";
    });

    if (product) {
      var primg = document.createElement('div');
      primg.style.position = 'relative';
      primg.style.height = '90px';
      primg.style.width = '90px';
      primg.style.borderRadius = '10px';
      primg.style.marginLeft = '0px';
      primg.style.marginTop = 'auto';
      primg.style.marginBottom = 'auto';
      primg.style.display = 'flex';
      primg.style.background = product.logoproj;
      primg.style.backgroundSize = 'contain';
      tagDiv.appendChild(primg);

    var tagname = document.createElement('div');
    tagname.textContent = tag;
    tagname.style.marginRight = "auto";
    tagname.style.marginTop = "auto";
    tagname.style.marginBottom = "auto";
    tagname.style.marginLeft = "20px";
    tagname.style.fontSize = "30px";
    tagname.style.lineHeight = "0px";
    tagDiv.appendChild(tagname);

      var prcost = document.createElement('div');
      prcost.textContent = product.cost + "$";
      prcost.style.position = 'relative';
      prcost.style.right = '10px';
      prcost.style.marginLeft = 'auto';
      prcost.style.marginTop = 'auto';
      prcost.style.marginBottom = 'auto';
      prcost.style.display = 'flex';
      prcost.style.fontSize = '20x';
      prcost.style.lineHeight = '0x';
      tagDiv.appendChild(prcost);

      tagDiv.addEventListener('click', function() {
        console.log('Clicked tag:', tag);
        clearInputField();
        if (product) {
          renderProductMenu(product);
          smoothScrollTo('topscroll0');
          leftBar.style.borderColor = product.accentcolor2;
          HomePage1.style.display = 'none';

          // var newURL = window.location.origin + "/admin-store" + '/?product=' + encodeURIComponent(product.название);
          var newURL = window.location.origin + '/?product=' + encodeURIComponent(product.название);
          history.pushState(null, null, newURL);
        }
      });
    }
  });

  if (!showAll && tags.length > 5) {
    var showAllButton = document.createElement('button');
    showAllButton.textContent = 'Show All Products';
    showAllButton.style.margin = 'auto';
    showAllButton.style.marginTop = '10px';
    showAllButton.style.display = 'flex';
    showAllButton.style.borderRadius = '7px';
    showAllButton.style.background = 'black';
    showAllButton.style.border = '3px solid white';
    showAllButton.style.color = 'white';
    showAllButton.style.fontSize = '20px';
    showAllButton.style.fontFamily = 'Gilroy';
    showAllButton.style.padding = '5px';
    showAllButton.addEventListener('click', function() {
      createTagContainer(tags, true);
    });
    tagsContainer.appendChild(showAllButton);


    showAllButton.addEventListener("mouseenter", function() {
      showAllButton.style.transition = "0.4s";
      showAllButton.style.cursor = "pointer";
      showAllButton.style.background = "white";
      showAllButton.style.color = "black";
    });

    showAllButton.addEventListener("mouseleave", function() {
      showAllButton.style.transition = "0.4s";
      showAllButton.style.cursor = "normal";
      showAllButton.style.background = "black";
      showAllButton.style.color = "white";
    });

  }
}






// Функция для поиска продукта по тегу
function findProductByTag(tag) {
  // Здесь вам нужно реализовать логику поиска продукта по тегу в массиве allProducts
  // Например, можно использовать find или filter
  // Верните найденный продукт или null, если ничего не найдено
  return allProducts.find(function(product) {
    return product.название === tag;
  });
}

// ... остальной код ...


function smoothScrollToTop(duration = 500) {
    const targetPosition = 0;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
}









    // Получение значения параметра product из URL
function getURLParameter(product) {
  var urlParams = new URLSearchParams(window.location.search);
  // console.log(window.location.search);
  // console.log(urlParams);
  return urlParams.get(product);
}

// // Функция для отображения продукта по его названию (тегу) из URL
// function showProductFromURL() {
//   console.log("1")
//   var productName = getURLParameter('product');
//   if (productName) {
//     var product = findProductByTag(productName);
//     if (product) {
//       renderProductMenu(product);
//       smoothScrollTo('topscroll0');
//       leftBar.style.borderColor = product.accentcolor2;
//       HomePage1.style.display = 'none';
//       window.scrollTo(0, 0); // Прокручиваем страницу вверх
//     }
//   }
// }
// При загрузке страницы
window.addEventListener('DOMContentLoaded', function() {
  showProductFromURL();
});



// ... (Ваш предыдущий код)


// При загрузке страницы создаем контейнер с тегами из products2
createTagContainer(jobTags, false);

// Обработчик события для ввода в поле поиска тегов
input.addEventListener('input', function(event) {
  var searchValue = event.target.textContent.toLowerCase();
  var filteredTags = jobTags.filter(function(tag) {
    return tag.toLowerCase().includes(searchValue);
  });

  // Показываем контейнер с тегами, если введен текст
  createTagContainer(filteredTags, false);
});

// Обработчик события для очистки поля ввода
input.addEventListener('blur', function(event) {
  if (event.target.textContent.trim() === '') {
    tagsContainer.style.display = 'none'; // Скрываем контейнер, если поле ввода пустое
  }
});

// Обработчик события для проверки поля ввода после потери фокуса
input.addEventListener('input', function(event) {
  if (event.target.textContent.trim() === '') {
    tagsContainer.style.display = 'none'; // Скрываем контейнер, если поле ввода пустое
  } else {
    var searchValue = event.target.textContent.toLowerCase();
    var filteredTags = jobTags.filter(function(tag) {
      return tag.toLowerCase().includes(searchValue);
    });
    // Показываем контейнер с тегами, если введен текст
    createTagContainer(filteredTags, false);
  }


});

// Флаг, указывающий на то, был ли клик на tagsContainer
var clickedOnTagsContainer = false;

// Обработчик события для клика на tagsContainer
tagsContainer.addEventListener('click', function() {
  clickedOnTagsContainer = true;
});


// Обработчик события для потери фокуса с input
input.addEventListener('blur', function() {

  if (!clickedOnTagsContainer === true) {
var clickedOnTagsContainer = false;

  setTimeout(function() {
      clearInputField();

}, 100); 


  }



  // Сбрасываем значение флага
  // clickedOnTagsContainer = false;
});




// Функция для очистки поля ввода
function clearInputField() {
  input.textContent = ""; // Очищаем поле ввода
  tagsContainer.style.display = 'none'; // Скрываем контейнер
}















