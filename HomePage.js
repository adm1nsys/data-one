const HomePage1 = document.createElement("div");
HomePage1.style.display = "flex";
HomePage1.style.flexDirection = "column";
HomePage1.style.position = "relative";
HomePage1.style.background = "linear-gradient(to right, rgb(0, 0, 0), rgb(17, 17, 17) 10.92%, rgb(25, 25, 25), rgb(18, 18, 18) 82.35%, rgb(0, 0, 0))";
HomePage1.style.margin = "0px 0px 0px 120px";
HomePage1.style.zIndex = "2";
// HomePage1.style.width = "100%";
HomePage1.style.height = "100%";
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
HomePageSlides1.style.background = "url('https://administrati0n.github.io/data-one/Slidesbg.png')";
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




HomePageSlidesText.style.color = "black";
// HomePageSlidesText.style.background = "blue";
// HomePageSlidesText.style.backgroundPosition = "center";
HomePageSlidesText.style.marginTop = "7px";
HomePageSlidesText.style.marginLeft = "-50px";
// HomePageSlidesText.style.marginRight = "auto";
// HomePageSlidesText.style.marginBottom = "7px";
HomePageSlidesText.style.fontFamily = "Gilroy";
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
slide1.style.background = "url('https://administrati0n.github.io/data-one/MacBook Pro 16_ - 2.png')";
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
slide2.style.background = "url('https://administrati0n.github.io/data-one/MacBook Pro 16_ - 4.png')";
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
slide3.style.background = "url('https://administrati0n.github.io/data-one/MacBook Pro 16_ - 5.png')";
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
prevButton.style.backgroundImage = "url('https://administrati0n.github.io/data-one/Frame 5.png')";
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
nextButton.style.backgroundImage = "url('https://administrati0n.github.io/data-one/Frame 6.png')";
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
button1.style.fontFamily = "Gilroy";
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
button2.style.fontFamily = "Gilroy";
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
button3.style.fontFamily = "Gilroy";
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
HomePage1ptTitle.style.background = "none";
HomePage1ptTitle.style.marginLeft = "0px";
HomePage1ptTitle.style.marginRight = "auto";
HomePage1ptTitle.style.marginTop = "20px";
HomePage1ptTitle.style.fontSize = "50px";
HomePage1ptTitle.style.fontFamily = "Gilroy";
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
HomePage1ptC0.style.marginTop = "20px";
HomePage1ptC0.style.fontSize = "40px";
HomePage1ptC0.style.fontFamily = "Gilroy";
HomePage1pt.appendChild(HomePage1ptC0);

const HomePage1ptC0P1 = document.createElement("div");
HomePage1ptC0P1.style.display = "inline-block";
HomePage1ptC0P1.style.borderRadius = "20px";
// HomePage1ptC0P1.style.flexDirection = "row";
HomePage1ptC0P1.style.position = "relative";
HomePage1ptC0P1.style.background = "rgba(21, 21, 21, 1)";
HomePage1ptC0P1.style.border = "2px solid rgba(40, 40, 41, 1)";
HomePage1ptC0P1.style.marginLeft = "0px";
HomePage1ptC0P1.style.width = "416px";
HomePage1ptC0P1.style.height = "700px";
HomePage1ptC0P1.style.marginRight = "auto";
HomePage1ptC0P1.style.marginTop = "20px";
HomePage1ptC0P1.style.marginBottom = "30px";
HomePage1ptC0P1.style.fontSize = "40px";
HomePage1ptC0P1.style.fontFamily = "Gilroy";
HomePage1ptC0P1.style.overflow = "hidden";
HomePage1ptC0.appendChild(HomePage1ptC0P1);

const HomePage1ptC0P2 = document.createElement("div");
HomePage1ptC0P2.style.display = "inline-block";
HomePage1ptC0P2.style.borderRadius = "20px";
// HomePage1ptC0P2.style.flexDirection = "row";
HomePage1ptC0P2.style.position = "relative";
HomePage1ptC0P2.style.background = "rgba(21, 21, 21, 1)";
HomePage1ptC0P2.style.border = "2px solid rgba(40, 40, 41, 1)";
HomePage1ptC0P2.style.marginLeft = "30px";
HomePage1ptC0P2.style.width = "416px";
HomePage1ptC0P2.style.height = "700px";
HomePage1ptC0P2.style.marginRight = "auto";
HomePage1ptC0P2.style.marginTop = "20px";
HomePage1ptC0P2.style.marginBottom = "30px";
HomePage1ptC0P2.style.fontSize = "40px";
HomePage1ptC0P2.style.fontFamily = "Gilroy";
HomePage1ptC0P2.style.overflow = "hidden";
HomePage1ptC0.appendChild(HomePage1ptC0P2);

const HomePage1ptC0P3 = document.createElement("div");
HomePage1ptC0P3.style.display = "inline-block";
HomePage1ptC0P3.style.borderRadius = "20px";
// HomePage1ptC0P3.style.flexDirection = "row";
HomePage1ptC0P3.style.position = "relative";
HomePage1ptC0P3.style.background = "rgba(21, 21, 21, 1)";
HomePage1ptC0P3.style.border = "2px solid rgba(40, 40, 41, 1)";
HomePage1ptC0P3.style.marginLeft = "30px";
HomePage1ptC0P3.style.width = "416px";
HomePage1ptC0P3.style.height = "700px";
HomePage1ptC0P3.style.marginRight = "auto";
HomePage1ptC0P3.style.marginTop = "20px";
HomePage1ptC0P3.style.marginBottom = "30px";
HomePage1ptC0P3.style.fontSize = "40px";
HomePage1ptC0P3.style.fontFamily = "Gilroy";
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
HomePage1ptC0P1gr.style.fontFamily = "Gilroy";
HomePage1ptC0P1.appendChild(HomePage1ptC0P1gr);

const HomePage1ptC0P2gr = document.createElement("div");
HomePage1ptC0P2gr.style.display = "inline-block";
HomePage1ptC0P2gr.style.overflow = "hidden";
HomePage1ptC0P2gr.style.position = "absolute";
HomePage1ptC0P2gr.style.background = "radial-gradient(35vh at 50% 110%, rgb(94, 94, 94), rgba(0, 0, 0, 0))";
HomePage1ptC0P2gr.style.width = "416px";
HomePage1ptC0P2gr.style.height = "700px";
HomePage1ptC0P2gr.style.fontSize = "40px";
HomePage1ptC0P2gr.style.fontFamily = "Gilroy";
HomePage1ptC0P2.appendChild(HomePage1ptC0P2gr);

const HomePage1ptC0P3gr = document.createElement("div");
HomePage1ptC0P3gr.style.display = "inline-block";
HomePage1ptC0P3gr.style.overflow = "hidden";
HomePage1ptC0P3gr.style.position = "absolute";
HomePage1ptC0P3gr.style.background = "radial-gradient(35vh at 50% 110%, rgb(94, 94, 94), rgba(0, 0, 0, 0))";
HomePage1ptC0P3gr.style.width = "416px";
HomePage1ptC0P3gr.style.height = "700px";
HomePage1ptC0P3gr.style.fontSize = "40px";
HomePage1ptC0P3gr.style.fontFamily = "Gilroy";
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
HomePage1ptC0P1title.style.fontFamily = "Gilroy";
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
HomePage1ptC0P1data.style.fontFamily = "Gilroy";
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
HomePage1ptC0P2title.style.fontFamily = "Gilroy";
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
HomePage1ptC0P2data.style.fontFamily = "Gilroy";
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
HomePage1ptC0P3title.style.fontFamily = "Gilroy";
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
HomePage1ptC0P3data.style.fontFamily = "Gilroy";
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
HomePage2ptTitle.textContent = "Links/Social";
HomePage2ptTitle.style.background = "none";
HomePage2ptTitle.style.marginLeft = "0px";
HomePage2ptTitle.style.marginRight = "auto";
HomePage2ptTitle.style.marginTop = "20px";
HomePage2ptTitle.style.fontSize = "40px";
HomePage2ptTitle.style.fontFamily = "Gilroy";
HomePage2pt.appendChild(HomePage2ptTitle);



const HomePage2ptl0 = document.createElement("div");
HomePage2ptl0.style.display = "flex";
HomePage2ptl0.style.flexDirection = "column";
HomePage2ptl0.style.position = "relative";
HomePage2ptl0.style.background = "none";
HomePage2ptl0.style.borderTop = "2px solid rgb(75, 75, 75)";
HomePage2ptl0.style.borderBottom = "2px solid rgb(75, 75, 75)";
// HomePage2ptl0.style.marginLeft = "auto";
// HomePage2ptl0.style.marginRight = "auto";
HomePage2ptl0.style.marginTop = "40px";
// HomePage2ptl0.style.marginBottom = "40px";
HomePage2ptl0.style.height = "70px";
HomePage2ptl0.style.width = "100%";
HomePage2pt.appendChild(HomePage2ptl0);


























































const frame1 = document.createElement('div');
const frameBg1 = document.createElement('div');
const bgColor1 = document.createElement('div');
const bgBlack1 = document.createElement('div');

frame1.className = 'frame1';
frameBg1.className = 'frame-bg';
bgColor1.className = 'bg-color album-artwork';
bgBlack1.className = 'bg-black album-artwork';

bgColor1.style.backgroundSize = 'cover'; 
bgBlack1.style.backgroundSize = 'cover';
bgColor1.style.width = '600px';
bgColor1.style.height = '600px';
bgBlack1.style.width = '600px';
bgBlack1.style.height = '600px';
bgColor1.style.backgroundImage = 'url("https://administrati0n.github.io/data-one/IMG_3052.JPG")';

bgBlack1.style.backgroundImage = 'url("https://administrati0n.github.io/data-one/IMG_3052.JPG")';

bgColor1.src = 'url("https://administrati0n.github.io/data-one/Starter Pack.png")';
bgBlack1.src = 'url("https://administrati0n.github.io/data-one/Starter Pack.png")';


frameBg1.style.filter = "blur(10px)";
frameBg1.style.display = "flex";

frameBg1.appendChild(bgColor1);
frameBg1.appendChild(bgBlack1);

frame1.appendChild(frameBg1);

frame1.style.display = 'none';
frame1.style.opacity = '0';
frame1.style.flexDirection = 'column';
frame1.style.width = '290px';
frame1.style.height = '547px';
frame1.style.left = '120px';
frame1.style.zIndex = '150';

frame1.style.position = 'fixed';

frame1.style.color = 'white';
frame1.style.top = '30px';

frame1.style.paddingTop = '50px';
frame1.style.paddingBottom = '20px';
frame1.style.borderRadius = '27px';


const frameHeader1 = document.createElement('div');
frameHeader1.className = 'frame1-header';
frameHeader1.style.position = 'absolute';
frameHeader1.style.zIndex = '10';
frameHeader1.style.display = 'flex';
frameHeader1.style.flexShrink = '0';
frameHeader1.style.alignItems = 'center';
frameHeader1.style.padding = '2rem';
// frame1.insertBefore(frameHeader1, frame1.firstChild);

const imageContainer1 = document.createElement('div');
imageContainer1.className = 'image1';
frameHeader1.appendChild(imageContainer1);

const image1 = document.createElement('img');
image1.src = 'url("https://administrati0n.github.io/data-one/Starter Pack.png")';
image1.style.width = '50px';
image1.style.borderRadius = '0.5em';
image1.style.boxShadow = '0 3px 30px rgba(0, 0, 0, 0.2), 0 3px 10px rgba(0, 0, 0, 0.4)';
// imageContainer.appendChild(image1);

// const infoContainer = document.createElement('div');
// infoContainer.className = 'info';
// frameHeader1.appendChild(infoContainer);


const lyrics1 = document.createElement('div');
lyrics1.className = 'frame1-lyrics1';
lyrics1.style.position = 'relative';
// lyrics1.style.display = 'flex';
lyrics1.style.zIndex = '10';
lyrics1.style.flexGrow = '1';
lyrics1.style.transition = "0.8s"
// lyrics1.style.padding = '2rem';
lyrics1.style.paddingTop = '0';
lyrics1.style.fontSize = '2rem';
lyrics1.style.overflowY = 'auto';



const frameBgStyle1 = {
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

for (const prop in frameBgStyle1) {
  frameBg1.style[prop] = frameBgStyle1[prop];
}

const bgColorStyle1 = {
  width: '200%',
  left: '-300px',
  position: 'absolute',
  filter: 'blur(40px)',
  // borderRadius: '100em',
  animation: 'rotate 35s linear infinite'
};

for (const prop in bgColorStyle1) {
  bgColor1.style[prop] = bgColorStyle1[prop];
}

const bgBlackStyle1 = {
  position: 'absolute',
  width: '200%',
  left: '0',
  bottom: '0',
  filter: 'blur(40px)',
  zIndex: '1',
  animation: 'rotate1 35s linear infinite'
  // animationDirection: 'reverse',
  // animationDelay: '10s'
};

for (const prop in bgBlackStyle1) {
  bgBlack1.style[prop] = bgBlackStyle1[prop];
}

const rotateKeyframes3 = `
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

const rotateKeyframes2 = `

`;



const style1 = document.createElement('style');
style1.appendChild(document.createTextNode(rotateKeyframes3));
document.head.appendChild(style1);

const homeBar1 = document.createElement("div");
homeBar1.style.position = "absolute";
homeBar1.style.bottom = "10px";
homeBar1.style.left = "90px";
homeBar1.style.width = "110px";
homeBar1.style.borderRadius = "999px";
homeBar1.style.height = "5px";
// homeBar1.style.mixBlendMode = "difference";
// homeBar1.style.backgroundColor = "rgba(255, 255, 255, 1";



const mdnpc1 = document.createElement("div");
mdnpc1.style.position = "absolute";
mdnpc1.style.top = "15px";
mdnpc1.style.left = "100px";
mdnpc1.style.width = "100px";
mdnpc1.style.borderRadius = "999px";
mdnpc1.style.zIndex = "999";
mdnpc1.style.height = "30px";
mdnpc1.style.transition = "0.3s";
mdnpc1.style.backgroundColor = "rgba(0, 0, 0, 1)";

const alert0 = document.createElement("div");
alert0.style.position = "absolute";
alert0.style.top = "15px";
alert0.style.right = "40px";
alert0.textContent = "!";
alert0.style.borderRadius = "999px";
alert0.style.zIndex = "999";
alert0.style.background = "orange";
alert0.style.transition = "0.3s";
alert0.style.color = "rgba(0, 0, 0, 1)";
alert0.style.paddingTop = "5px";
alert0.style.paddingBottom = "5px";
alert0.style.paddingLeft = "12px";
alert0.style.paddingRight = "12px";
alert0.style.fontSize = "15px";
alert0.style.fontFamily = "Gilroy";

mdnpc1.addEventListener("mouseenter", function() {
  mdnpc1.style.width = "114px";
  mdnpc1.style.height = "34px";
  mdnpc1.style.top = "13px";
mdnpc1.style.transition = "0.3s";
  mdnpc1.style.left = "94px";
});

mdnpc1.addEventListener("mouseleave", function() {
  mdnpc1.style.width = "100px";
  mdnpc1.style.height = "30px";
  mdnpc1.style.top = "15px";
mdnpc1.style.transition = "0.3s";
  mdnpc1.style.left = "100px";
});

document.body.appendChild(frame1);
frame1.appendChild(lyrics1);
frame1.appendChild(homeBar1);
// frame1.appendChild(usertime);
frame1.appendChild(mdnpc1);
frame1.appendChild(alert0);


















const formContainer = document.createElement("div");
formContainer.id = "form-container";
formContainer.style.width = "100%";
formContainer.style.height = "401px";
formContainer.style.borderRadius = "0px 0px 9px 9px";
// formContainer.style.background = "color(srgb 0.157 0.157 0.1621)";
// formContainer.style.borderTop = "2px solid color(srgb 0.157 0.157 0.1621)";
lyrics1.appendChild(formContainer);

const registerForm = document.createElement("form");
registerForm.style.display = "flex";
registerForm.style.flexDirection = "column";
registerForm.style.opacity = "1";
registerForm.style.transition = "0.5s";
registerForm.style.position = "absolute";
registerForm.style.top = "150px";
registerForm.style.width = "80%";
registerForm.style.paddingTop = "20px";
registerForm.style.paddingBottom = "20px";
registerForm.style.left = "30px";
registerForm.style.border = "2px solid rgba(40, 40, 40, 0.38)";
registerForm.style.borderRadius = "10px";
registerForm.style.background = "rgba(70, 70, 70, 0.42)";
registerForm.id = "register-form";
registerForm.classList.add("form");
formContainer.appendChild(registerForm);


const registerFormTitleC = document.createElement("div");
registerFormTitleC.style.fontFamily = "Gilroy";
registerFormTitleC.style.fontSize = "30px";
registerFormTitleC.style.opacity = "1";
registerFormTitleC.style.transition = "0.5s";
registerFormTitleC.style.marginLeft = "90px";
registerFormTitleC.style.marginTop = "60px";
registerFormTitleC.style.position = "absolute";
formContainer.appendChild(registerFormTitleC);

const registerFormTitle0 = document.createElement("div");
registerFormTitle0.textContent = "Register";
registerFormTitle0.style.position = "absolute";
registerFormTitle0.style.color = "white";
registerFormTitle0.style.filter = "blur(5px)";
registerFormTitleC.appendChild(registerFormTitle0);

const registerFormTitle1 = document.createElement("div");
registerFormTitle1.textContent = "Register";
registerFormTitle1.style.color = "white";
registerFormTitle1.style.position = "absolute";
registerFormTitle1.style.filter = "blur(0px)";
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
registerEmailInput.style.marginTop = "30px";
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
registerPasswordInput.style.marginTop = "30px";
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
loginForm.style.top = "150px";
loginForm.style.width = "80%";
loginForm.style.paddingTop = "20px";
loginForm.style.paddingBottom = "20px";
loginForm.style.left = "30px";
loginForm.style.border = "2px solid rgba(40, 40, 40, 0.38)";
loginForm.style.borderRadius = "10px";
loginForm.style.background = "rgba(70, 70, 70, 0.42)";
loginForm.classList.add("form");
formContainer.appendChild(loginForm);


const loginFormTitleC = document.createElement("div");
loginFormTitleC.style.fontFamily = "Gilroy";
loginFormTitleC.style.fontSize = "30px";
loginFormTitleC.style.opacity = "0";
loginFormTitleC.style.transition = "0.5s";
loginFormTitleC.style.width = "200px";
loginFormTitleC.style.left = "90px";
loginFormTitleC.style.top = "60px";
loginFormTitleC.style.position = "absolute";
formContainer.appendChild(loginFormTitleC);

const loginFormTitle0 = document.createElement("div");
loginFormTitle0.textContent = "Sign In";
loginFormTitle0.style.position = "absolute";
loginFormTitle0.style.color = "white";
loginFormTitle0.style.filter = "blur(5px)";
loginFormTitleC.appendChild(loginFormTitle0);

const loginFormTitle1 = document.createElement("div");
loginFormTitle1.textContent = "Sign In";
loginFormTitle1.style.color = "white";
loginFormTitle1.style.position = "absolute";
loginFormTitle1.style.filter = "blur(0px)";
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
loginEmailInput.style.margin = "0 auto";
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
loginPasswordInput.style.marginTop = "30px";
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
loginButton.style.marginTop = "30px";
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

lyrics1.appendChild(userInfoContainer);

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
registerForm.style.transition = "1s";
registerFormTitleC.style.opacity = "0";
registerFormTitleC.style.transition = "1s";
loginForm.style.display = "flex";
  setTimeout(function() {
loginForm.style.opacity = "1";
loginForm.style.transition = "1s";
loginFormTitleC.style.opacity = "1";
loginFormTitleC.style.transition = "1s";
}, 500); 
registerForm.style.display = "none";
registerFormTitleC.style.display = "none";
});

registerLink.addEventListener("click", function() {
loginForm.style.opacity = "0";
loginForm.style.transition = "1s";
loginFormTitleC.style.opacity = "0";
loginFormTitleC.style.transition = "1s";
registerForm.style.display = "flex";
registerFormTitleC.style.display = "flex";
  setTimeout(function() {
registerForm.style.opacity = "1";
registerForm.style.transition = "1s";
registerFormTitleC.style.opacity = "1";
registerFormTitleC.style.transition = "1s";
}, 500); 
loginForm.style.display = "none";
});









