

const Container0 = document.createElement("div");
Container0.style.display = "none";
Container0.style.flexDirection = "column";
Container0.style.overflow = "scroll";
const containerHeight = window.innerHeight * 1 - 4; // Пример: 50% от высоты окна браузера
Container0.style.height = `${containerHeight}px`;



Container0.style.opacity = "0.5";
Container0.style.marginTop = "0px";
Container0.style.position = "relative";
// Container0.style.maxWidth = "850px";
Container0.style.width = "100%";
Container0.style.border = "0px solid white";
// Container0.style.marginLeft = "auto";
// Container0.style.marginRight = "auto";
document.body.appendChild(Container0);

const Container0menuClose = document.createElement("div");
Container0menuClose.style.display = "flex";
Container0menuClose.style.marginLeft = "auto";
Container0menuClose.style.marginRight = "50px";
Container0menuClose.style.marginTop = "50px";
Container0menuClose.style.position = "relative";
Container0menuClose.style.borderRadius = "12px";
Container0menuClose.style.width = "50px";
Container0menuClose.style.height = "50px";
Container0menuClose.style.border = "3px solid white";
Container0.appendChild(Container0menuClose);

const Container0menuClose01 = document.createElement("div");
Container0menuClose01.style.display = "flex";
Container0menuClose01.style.flexDirection = "column";
Container0menuClose01.style.marginLeft = "20px";
Container0menuClose01.style.marginTop = "5px";
Container0menuClose01.style.position = "absolute";
Container0menuClose01.style.borderRadius = "999px";
Container0menuClose01.style.rotate = "45deg";
Container0menuClose01.style.width = "10px";
Container0menuClose01.style.height = "40px";
Container0menuClose01.style.mixBlendMode = "difference";
Container0menuClose01.style.background = "white";
Container0menuClose.appendChild(Container0menuClose01);

const Container0menuClose02 = document.createElement("div");
Container0menuClose02.style.display = "flex";
Container0menuClose02.style.flexDirection = "column";
Container0menuClose02.style.marginLeft = "20px";
Container0menuClose02.style.marginTop = "5px";
Container0menuClose02.style.position = "absolute";
Container0menuClose02.style.borderRadius = "999px";
Container0menuClose02.style.rotate = "-45deg";
Container0menuClose02.style.width = "10px";
Container0menuClose02.style.height = "40px";
Container0menuClose02.style.background = "white";
Container0menuClose02.style.mixBlendMode = "difference";
Container0menuClose.appendChild(Container0menuClose02);

const Container0menuClose03 = document.createElement("div");
Container0menuClose03.style.display = "flex";
Container0menuClose03.style.flexDirection = "column";
Container0menuClose03.style.marginLeft = "0px";
Container0menuClose03.style.marginTop = "15px";
Container0menuClose03.style.position = "absolute";
Container0menuClose03.style.borderRadius = "0px";
Container0menuClose03.style.rotate = "0deg";
Container0menuClose03.style.width = "10px";
Container0menuClose03.style.height = "10px";
Container0menuClose03.style.background = "white";
Container0menuClose03.style.mixBlendMode = "difference";
Container0menuClose02.appendChild(Container0menuClose03);

Container0menuClose.addEventListener('mouseenter', function() {
  Container0menuClose.style.transition = '0.3s';
  Container0menuClose.style.border = '28px solid white';
  Container0menuClose.style.width = '0px';
  Container0menuClose.style.height = '0px';
  Container0menuClose01.style.marginLeft = "-5px";
Container0menuClose01.style.marginTop = "-20px";
  Container0menuClose02.style.marginLeft = "-5px";
Container0menuClose02.style.marginTop = "-20px";
  Container0menuClose01.style.transition = '0.3s';
  Container0menuClose02.style.transition = '0.3s';
});

Container0menuClose.addEventListener('mouseleave', function() {
  Container0menuClose.style.transition = '0.3s';
  Container0menuClose.style.border = '3px solid white';
  Container0menuClose.style.width = '50px';
  Container0menuClose.style.height = '50px';
  Container0menuClose01.style.marginTop = "5px";
  Container0menuClose02.style.marginLeft = "20px";
  Container0menuClose01.style.marginLeft = "20px";
Container0menuClose02.style.marginTop = "5px";
  Container0menuClose01.style.transition = '0.3s';
  Container0menuClose02.style.transition = '0.3s';
});


const Container0menu = document.createElement("div");
Container0menu.style.display = "flex";
Container0menu.style.flexDirection = "column";
Container0menu.style.marginLeft = "0px";
Container0menu.style.marginRight = "0px";
Container0menu.style.marginTop = "50px";
Container0menu.style.position = "relative";
// Container0menu.style.paddingBottom = "50px";
// Container0menu.style.paddingRight = "50px";
// Container0menu.style.paddingLeft = "20px";
Container0menu.style.width = "100%";
Container0menu.style.minHeight = "50px";
Container0menu.style.borderTop = "3px solid rgba(29, 29, 29, 1)";
// Container0menu.style.marginLeft = "auto";
// Container0menu.style.marginRight = "auto";
Container0.appendChild(Container0menu);



// Создание контейнера
const container = document.createElement('div');
container.style.display = 'flex';
container.style.flexWrap = 'wrap';
container.style.justifyContent = 'flex-start';
container.style.alignItems = 'center';
container.style.position = 'relative';
Container0menu.appendChild(container);


  const contbtn0 = document.createElement('div');
  contbtn0.style.width = '90px';
  contbtn0.style.height = '105px';
  contbtn0.style.borderRadius = '12px';
  contbtn0.style.background = 'linear-gradient(45deg, rgba(33,33,33,1) 12%, rgba(93,93,93,1) 50%, rgba(33,33,33,1) 88%)';
  contbtn0.style.padding = '0px';
  contbtn0.style.border = '2px solid rgba(93,93,93,1)';
  contbtn0.style.marginTop = '20px';
  contbtn0.style.marginLeft = 'auto';
contbtn0.style.marginRight = 'auto';
contbtn0.style.position = 'relative';
  container.appendChild(contbtn0);


const svgCode = `<svg width="75" height="84" viewBox="0 0 75 84" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M23.75 79C23.75 81.7614 21.5114 84 18.75 84H5.5C2.73858 84 0.5 81.7614 0.5 79V37.5336C0.5 35.9138 1.15492 34.3628 2.31587 33.2332L34.0132 2.39254C35.9542 0.504041 39.0458 0.504044 40.9868 2.39254L72.9868 33.5277C73.9542 34.469 74.5 35.7615 74.5 37.1113V79C74.5 81.7614 72.2614 84 69.5 84H56.25C53.4886 84 51.25 81.7614 51.25 79V55.25C51.25 47.9322 45.3178 42 38 42V42V42C30.1299 42 23.75 48.3799 23.75 56.25V79Z" fill="white"/>
</svg>`;

const hcontainer = document.createElement('div');
hcontainer.innerHTML = svgCode;

const svgElement = hcontainer.querySelector('svg');
svgElement.style.marginLeft = '20px';
svgElement.style.marginTop = '0px';
svgElement.style.width = '50px';
svgElement.style.position = 'absolute';

// Добавляем созданный элемент <svg> в контейнер
contbtn0.appendChild(hcontainer);

  const contbtn0h6 = document.createElement('div');
  contbtn0h6.style.color = 'rgb(255, 255, 255)';
  contbtn0h6.style.marginTop = '80px';
  contbtn0h6.style.marginLeft = '25px';
  contbtn0h6.style.fontSize = '15px';
contbtn0h6.style.marginRight = 'auto';
contbtn0h6.textContent = "Home"; 
contbtn0h6.style.fontFamily = "SF Pro Display Medium"; 
contbtn0h6.style.position = 'absolute';
contbtn0.appendChild(contbtn0h6);



  const contbtn1 = document.createElement('div');
  contbtn1.style.width = '90px';
  contbtn1.style.height = '105px';
  contbtn1.style.borderRadius = '12px';
  contbtn1.style.background = 'linear-gradient(45deg, rgba(33,33,33,1) 12%, rgba(93,93,93,1) 50%, rgba(33,33,33,1) 88%)';
  contbtn1.style.padding = '0px';
  contbtn1.style.border = '2px solid rgba(93,93,93,1)';
  contbtn1.style.marginTop = '20px';
  contbtn1.style.marginLeft = 'auto';
contbtn1.style.marginRight = 'auto';
contbtn1.style.position = 'relative';
  container.appendChild(contbtn1);

    const contbtn1h0 = document.createElement('div');
  contbtn1h0.style.color = 'rgb(255, 255, 255)';
  contbtn1h0.style.marginTop = '80px';
  contbtn1h0.style.marginLeft = '21px';
  contbtn1h0.style.fontSize = '15px';
contbtn1h0.style.marginRight = 'auto';
contbtn1h0.textContent = "Projects"; 
contbtn1h0.style.fontFamily = "SF Pro Display Medium"; 
contbtn1h0.style.position = 'absolute';
contbtn1.appendChild(contbtn1h0);

const svgCode1 = `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none">
  <g clip-path="url(#clip0_146_5)">
    <rect y="53" width="47" height="47" rx="7" fill="white"/>
    <rect width="47" height="47" rx="7" fill="white"/>
    <rect x="55.5" y="2.5" width="42" height="42" rx="4.5" stroke="white" stroke-width="5"/>
    <rect x="53" y="53" width="47" height="47" rx="7" fill="white"/>
  </g>
  <defs>
    <clipPath id="clip0_146_5">
      <rect width="100" height="100" fill="white"/>
    </clipPath>
  </defs>
</svg>`;

const hcontainer1 = document.createElement('div');
hcontainer1.innerHTML = svgCode1;

const svgElement1 = hcontainer1.querySelector('svg');
svgElement1.style.marginLeft = '20px';
svgElement1.style.marginTop = '20px';
svgElement1.style.width = '50px';
svgElement1.style.height = '50px';
svgElement1.style.position = 'absolute';

// Добавляем созданный элемент <svg> в контейнер
contbtn1.appendChild(hcontainer1);






  const contbtn2 = document.createElement('div');
  contbtn2.style.width = '90px';
  contbtn2.style.height = '105px';
  contbtn2.style.borderRadius = '12px';
  contbtn2.style.background = 'linear-gradient(45deg, rgba(33,33,33,1) 12%, rgba(93,93,93,1) 50%, rgba(33,33,33,1) 88%)';
  contbtn2.style.padding = '0px';
  contbtn2.style.border = '2px solid rgba(93,93,93,1)';
  contbtn2.style.marginTop = '20px';
  contbtn2.style.marginLeft = 'auto';
contbtn2.style.marginRight = 'auto';
contbtn2.style.position = 'relative';
  container.appendChild(contbtn2);

    const contbtn2h0 = document.createElement('div');
  contbtn2h0.style.color = 'rgb(255, 255, 255)';
  contbtn2h0.style.marginTop = '80px';
  contbtn2h0.style.marginLeft = '25px';
  contbtn2h0.style.fontSize = '15px';
contbtn2h0.style.marginRight = 'auto';
contbtn2h0.textContent = "Profile"; 
contbtn2h0.style.fontFamily = "SF Pro Display Medium"; 
contbtn2h0.style.position = 'absolute';
contbtn2.appendChild(contbtn2h0);

const svgCode2 = `<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="27" y="2" width="46" height="46" rx="23" fill="white"/>
<path d="M1 89.0989C1 69.162 17.162 53 37.0989 53H62.9011C82.838 53 99 69.162 99 89.0989V89.0989C99 94.0148 95.0148 98 90.0989 98H9.9011C4.98516 98 1 94.0148 1 89.0989V89.0989Z" fill="white"/>
</svg>
`;

const hcontainer2 = document.createElement('div');
hcontainer2.innerHTML = svgCode2;

const svgElement2 = hcontainer2.querySelector('svg');
svgElement2.style.marginLeft = '20px';
svgElement2.style.marginTop = '20px';
svgElement2.style.width = '50px';
svgElement2.style.height = '50px';
svgElement2.style.position = 'absolute';

// Добавляем созданный элемент <svg> в контейнер
contbtn2.appendChild(hcontainer2);


  const contbtn3 = document.createElement('div');
  contbtn3.style.width = '90px';
  contbtn3.style.height = '105px';
  contbtn3.style.borderRadius = '12px';
  contbtn3.style.background = 'linear-gradient(45deg, rgba(33,33,33,1) 12%, rgba(93,93,93,1) 50%, rgba(33,33,33,1) 88%)';
  contbtn3.style.padding = '0px';
  contbtn3.style.border = '2px solid rgba(93,93,93,1)';
  contbtn3.style.marginTop = '20px';
  contbtn3.style.marginLeft = 'auto';
contbtn3.style.marginRight = 'auto';
contbtn3.style.position = 'relative';
  container.appendChild(contbtn3);

    const contbtn3h0 = document.createElement('div');
  contbtn3h0.style.color = 'rgb(255, 255, 255)';
  contbtn3h0.style.marginTop = '80px';
  contbtn3h0.style.marginLeft = '28px';
  contbtn3h0.style.fontSize = '15px';
contbtn3h0.style.marginRight = 'auto';
contbtn3h0.textContent = "Liked"; 
contbtn3h0.style.fontFamily = "SF Pro Display Medium"; 
contbtn3h0.style.position = 'absolute';
contbtn3.appendChild(contbtn3h0);

const svgCode3 = `<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_151_27)">
<path d="M50 25C50 38.8071 38.8071 50 25 50C11.1929 50 0 38.8071 0 25C0 11.1929 11.1929 0 25 0C38.8071 0 50 11.1929 50 25Z" fill="white"/>
<path d="M100 25C100 38.8071 88.8071 50 75 50C61.1929 50 50 38.8071 50 25C50 11.1929 61.1929 0 75 0C88.8071 0 100 11.1929 100 25Z" fill="white"/>
<path d="M4.99953 40.0002L50 25L94.9967 40.0021L50.5003 100L4.99953 40.0002Z" fill="white"/>
<path d="M4.99953 40.0002L50 25L94.9967 40.0021L50.5003 100L4.99953 40.0002Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_151_27">
<rect width="100" height="100" fill="white"/>
</clipPath>
</defs>
</svg>

`;

const hcontainer3 = document.createElement('div');
hcontainer3.innerHTML = svgCode3;

const svgElement3 = hcontainer3.querySelector('svg');
svgElement3.style.marginLeft = '20px';
svgElement3.style.marginTop = '20px';
svgElement3.style.width = '50px';
svgElement3.style.height = '50px';
svgElement3.style.position = 'absolute';

// Добавляем созданный элемент <svg> в контейнер
contbtn3.appendChild(hcontainer3);




  const contbtn4 = document.createElement('div');
  contbtn4.style.width = '90px';
  contbtn4.style.height = '105px';
  contbtn4.style.borderRadius = '12px';
  contbtn4.style.background = 'linear-gradient(45deg, rgba(33,33,33,1) 12%, rgba(93,93,93,1) 50%, rgba(33,33,33,1) 88%)';
  contbtn4.style.padding = '0px';
  contbtn4.style.border = '2px solid rgba(93,93,93,1)';
  contbtn4.style.marginTop = '20px';
  contbtn4.style.marginLeft = 'auto';
contbtn4.style.marginRight = 'auto';
contbtn4.style.position = 'relative';
  container.appendChild(contbtn4);

    const contbtn4h0 = document.createElement('div');
  contbtn4h0.style.color = 'rgb(255, 255, 255)';
  contbtn4h0.style.marginTop = '80px';
  contbtn4h0.style.marginLeft = '20px';
  contbtn4h0.style.fontSize = '15px';
contbtn4h0.style.marginRight = 'auto';
contbtn4h0.textContent = "Settings"; 
contbtn4h0.style.fontFamily = "SF Pro Display Medium"; 
contbtn4h0.style.position = 'absolute';
contbtn4.appendChild(contbtn4h0);

const svgCode4 = `<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_153_40)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M60 90.5C60 95.7467 55.7467 100 50.5 100C45.2533 100 41 95.7467 41 90.5V72.935L28.5797 85.3553C24.8697 89.0653 18.8546 89.0653 15.1447 85.3553C11.4347 81.6454 11.4347 75.6303 15.1447 71.9203L28.065 59H9.5C4.25329 59 2.29341e-07 54.7467 0 49.5C-2.29341e-07 44.2533 4.2533 40 9.5 40L27.065 40L15.1447 28.0797C11.4347 24.3697 11.4347 18.3547 15.1447 14.6447C18.8546 10.9347 24.8697 10.9347 28.5797 14.6447L41 27.065V9.5C41 4.25329 45.2533 0 50.5 0C55.7467 0 60 4.2533 60 9.5V27.065L72.4203 14.6447C76.1303 10.9347 82.1454 10.9347 85.8553 14.6447C89.5653 18.3546 89.5653 24.3697 85.8553 28.0797L73.935 40H90.5C95.7467 40 100 44.2533 100 49.5C100 54.7467 95.7467 59 90.5 59L72.935 59L85.8553 71.9203C89.5653 75.6303 89.5653 81.6454 85.8553 85.3553C82.1454 89.0653 76.1303 89.0653 72.4203 85.3553L60 72.935L60 90.5ZM50 69C60.4934 69 69 60.4934 69 50C69 39.5066 60.4934 31 50 31C39.5066 31 31 39.5066 31 50C31 60.4934 39.5066 69 50 69Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_153_40">
<rect width="100" height="100" fill="white"/>
</clipPath>
</defs>
</svg>

`;

const hcontainer4 = document.createElement('div');
hcontainer4.innerHTML = svgCode4;

const svgElement4 = hcontainer4.querySelector('svg');
svgElement4.style.marginLeft = '20px';
svgElement4.style.marginTop = '20px';
svgElement4.style.width = '50px';
svgElement4.style.height = '50px';
svgElement4.style.position = 'absolute';

// Добавляем созданный элемент <svg> в контейнер
contbtn4.appendChild(hcontainer4);



  const contbtn5 = document.createElement('div');
  contbtn5.style.width = '90px';
  contbtn5.style.height = '105px';
  contbtn5.style.borderRadius = '12px';
  contbtn5.style.background = 'linear-gradient(45deg, rgba(33,33,33,1) 12%, rgba(93,93,93,1) 50%, rgba(33,33,33,1) 88%)';
  contbtn5.style.padding = '0px';
  contbtn5.style.border = '2px solid rgba(93,93,93,1)';
  contbtn5.style.marginTop = '20px';
  contbtn5.style.marginLeft = 'auto';
contbtn5.style.marginRight = 'auto';
contbtn5.style.position = 'relative';
  container.appendChild(contbtn5);

    const contbtn5h0 = document.createElement('div');
  contbtn5h0.style.color = 'rgb(255, 255, 255)';
  contbtn5h0.style.marginTop = '80px';
  contbtn5h0.style.marginLeft = '33px';
  contbtn5h0.style.fontSize = '15px';
contbtn5h0.style.marginRight = 'auto';
contbtn5h0.textContent = "Info"; 
contbtn5h0.style.fontFamily = "SF Pro Display Medium"; 
contbtn5h0.style.position = 'absolute';
contbtn5.appendChild(contbtn5h0);

const svgCode5 = `<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_151_16)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M100 50C100 77.6142 77.6142 100 50 100C22.3858 100 0 77.6142 0 50C0 22.3858 22.3858 0 50 0C77.6142 0 100 22.3858 100 50ZM55 23C55 25.7614 52.7614 28 50 28C47.2386 28 45 25.7614 45 23C45 20.2386 47.2386 18 50 18C52.7614 18 55 20.2386 55 23ZM46.4286 39.2392V79.4881C46.4286 81.4277 48.0009 83 49.9405 83C51.88 83 53.4524 81.4277 53.4524 79.4881V39.2392C53.4524 37.2996 51.88 35.7273 49.9405 35.7273C48.0009 35.7273 46.4286 37.2996 46.4286 39.2392Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_151_16">
<rect width="100" height="100" fill="white"/>
</clipPath>
</defs>
</svg>
`;

const hcontainer5 = document.createElement('div');
hcontainer5.innerHTML = svgCode5;

const svgElement5 = hcontainer5.querySelector('svg');
svgElement5.style.marginLeft = '20px';
svgElement5.style.marginTop = '20px';
svgElement5.style.width = '50px';
svgElement5.style.height = '50px';
svgElement5.style.position = 'absolute';

// Добавляем созданный элемент <svg> в контейнер
contbtn5.appendChild(hcontainer5);


  const contbtn6 = document.createElement('div');
  contbtn6.style.width = '90px';
  contbtn6.style.height = '105px';
  contbtn6.style.borderRadius = '12px';
  contbtn6.style.background = 'linear-gradient(45deg, rgba(33,33,33,1) 12%, rgba(93,93,93,1) 50%, rgba(33,33,33,1) 88%)';
  contbtn6.style.padding = '0px';
  contbtn6.style.border = '2px solid rgba(93,93,93,1)';
  contbtn6.style.marginTop = '20px';
  contbtn6.style.marginLeft = 'auto';
contbtn6.style.marginRight = 'auto';
contbtn6.style.position = 'relative';
  container.appendChild(contbtn6);

    const contbtn6h0 = document.createElement('div');
  contbtn6h0.style.color = 'rgb(255, 255, 255)';
  contbtn6h0.style.marginTop = '80px';
  contbtn6h0.style.marginLeft = '25px';
  contbtn6h0.style.fontSize = '15px';
contbtn6h0.style.marginRight = 'auto';
contbtn6h0.textContent = "Phone"; 
contbtn6h0.style.fontFamily = "SF Pro Display Medium"; 
contbtn6h0.style.position = 'absolute';
contbtn6.appendChild(contbtn6h0);

const svgCode6 = `<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g clip-path="url(#clip0_155_60)">
<mask id="path-1-inside-1_155_60" fill="white">
<path d="M0 14C0 6.26801 6.26801 0 14 0H86C93.732 0 100 6.26801 100 14V100H0V14Z"/>
</mask>
<path d="M-6 14C-6 2.95431 2.95431 -6 14 -6H86C97.0457 -6 106 2.95431 106 14H94C94 9.58172 90.4183 6 86 6H14C9.58172 6 6 9.58172 6 14H-6ZM100 100H0H100ZM-6 100V14C-6 2.95431 2.95431 -6 14 -6V6C9.58172 6 6 9.58172 6 14V100H-6ZM86 -6C97.0457 -6 106 2.95431 106 14V100H94V14C94 9.58172 90.4183 6 86 6V-6Z" fill="url(#paint0_linear_155_60)" mask="url(#path-1-inside-1_155_60)"/>
<rect x="32" y="11" width="36" height="8" rx="4" fill="white"/>
<rect x="28" y="27" width="43" height="47" fill="url(#pattern0)"/>
</g>
<defs>
<pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_155_60" transform="scale(0.00487957 0.00446429)"/>
</pattern>
<linearGradient id="paint0_linear_155_60" x1="50" y1="0" x2="50" y2="100" gradientUnits="userSpaceOnUse">
<stop offset="0.286458" stop-color="white"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</linearGradient>
<clipPath id="clip0_155_60">
<rect width="100" height="100" fill="white"/>
</clipPath>
<image id="image0_155_60" width="205" height="224" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAM0AAADgCAYAAACgjuKBAAAACXBIWXMAAAsTAAALEwEAmpwYAAAF0WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNy4yLWMwMDAgNzkuNTY2ZWJjNWI0LCAyMDIyLzA1LzA5LTA4OjI1OjU1ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjMuNCAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjItMTItMjNUMTQ6NTk6NDgrMDI6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIyLTEyLTMwVDIwOjE4OjU4KzAyOjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTEyLTMwVDIwOjE4OjU4KzAyOjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpiMWMyOGM2MC1lMjkwLTRjOWItOWY4ZC1mMjgwMmM0ODhmNjUiIHhtcE1NOkRvY3VtZW50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"/>
</defs>
</svg>
`;

const hcontainer6 = document.createElement('div');
hcontainer6.innerHTML = svgCode6;

const svgElement6 = hcontainer6.querySelector('svg');
svgElement6.style.marginLeft = '20px';
svgElement6.style.marginTop = '20px';
svgElement6.style.width = '50px';
svgElement6.style.height = '50px';
svgElement6.style.position = 'absolute';

// Добавляем созданный элемент <svg> в контейнер
contbtn6.appendChild(hcontainer6);



  const contbtn7 = document.createElement('div');
  contbtn7.style.width = '90px';
  contbtn7.style.height = '105px';
  contbtn7.style.borderRadius = '12px';
  contbtn7.style.background = 'linear-gradient(45deg, rgba(33,33,33,1) 12%, rgba(93,93,93,1) 50%, rgba(33,33,33,1) 88%)';
  contbtn7.style.padding = '0px';
  contbtn7.style.border = '2px solid rgba(93,93,93,1)';
  contbtn7.style.marginTop = '20px';
  contbtn7.style.marginLeft = 'auto';
contbtn7.style.marginRight = 'auto';
contbtn7.style.position = 'relative';
  container.appendChild(contbtn7);

    const contbtn7h0 = document.createElement('div');
  contbtn7h0.style.color = 'rgb(255, 255, 255)';
  contbtn7h0.style.marginTop = '80px';
  contbtn7h0.style.marginLeft = '25px';
  contbtn7h0.style.fontSize = '15px';
contbtn7h0.style.marginRight = 'auto';
contbtn7h0.textContent = "Console"; 
contbtn7h0.style.fontFamily = "SF Pro Display Medium"; 
contbtn7h0.style.position = 'absolute';
contbtn7.appendChild(contbtn7h0);

const svgCode7 = `<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g clip-path="url(#clip0_155_60)">
<mask id="path-1-inside-1_155_60" fill="white">
<path d="M0 14C0 6.26801 6.26801 0 14 0H86C93.732 0 100 6.26801 100 14V100H0V14Z"/>
</mask>
<path d="M-6 14C-6 2.95431 2.95431 -6 14 -6H86C97.0457 -6 106 2.95431 106 14H94C94 9.58172 90.4183 6 86 6H14C9.58172 6 6 9.58172 6 14H-6ZM100 100H0H100ZM-6 100V14C-6 2.95431 2.95431 -6 14 -6V6C9.58172 6 6 9.58172 6 14V100H-6ZM86 -6C97.0457 -6 106 2.95431 106 14V100H94V14C94 9.58172 90.4183 6 86 6V-6Z" fill="url(#paint0_linear_155_60)" mask="url(#path-1-inside-1_155_60)"/>
<rect x="32" y="11" width="36" height="8" rx="4" fill="white"/>
<rect x="28" y="27" width="43" height="47" fill="url(#pattern0)"/>
</g>
<defs>
<pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_155_60" transform="scale(0.00487957 0.00446429)"/>
</pattern>
<linearGradient id="paint0_linear_155_60" x1="50" y1="0" x2="50" y2="100" gradientUnits="userSpaceOnUse">
<stop offset="0.286458" stop-color="white"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</linearGradient>
<clipPath id="clip0_155_60">
<rect width="100" height="100" fill="white"/>
</clipPath>
<image id="image0_155_60" width="205" height="224" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAM0AAADgCAYAAACgjuKBAAAACXBIWXMAAAsTAAALEwEAmpwYAAAF0WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNy4yLWMwMDAgNzkuNTY2ZWJjNWI0LCAyMDIyLzA1LzA5LTA4OjI1OjU1ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjMuNCAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjItMTItMjNUMTQ6NTk6NDgrMDI6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIyLTEyLTMwVDIwOjE4OjU4KzAyOjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTEyLTMwVDIwOjE4OjU4KzAyOjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpiMWMyOGM2MC1lMjkwLTRjOWItOWY4ZC1mMjgwMmM0ODhmNjUiIHhtcE1NOkRvY3VtZW50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"/>
</defs>
</svg>
`;

const hcontainer7 = document.createElement('div');
hcontainer7.innerHTML = svgCode7;

const svgElement7 = hcontainer7.querySelector('svg');
svgElement7.style.marginLeft = '20px';
svgElement7.style.marginTop = '20px';
svgElement7.style.width = '50px';
svgElement7.style.height = '50px';
svgElement7.style.position = 'absolute';

// Добавляем созданный элемент <svg> в контейнер
contbtn7.appendChild(hcontainer7);

contbtn7.addEventListener('click', function() {
  consoleDiv.style.display = 'block';

  







});




// 2 шаг rgba(33, 33, 33, 1) 88% меняется на rgba(33, 33, 33, 1) 200%
// 3 шаг rgba(93, 93, 93, 1) 50%  меняется на rgba(33, 33, 33, 1) 50% и rgba(33, 33, 33, 1) -100% с rgba(33, 33, 33, 1) 200% меняют цвет и выходит rgba(93, 93, 93, 1)  -100% и  rgba(93, 93, 93, 1)  88%
// 4 шаг rgba(93, 93, 93, 1)  -100% меняется на rgba(93, 93, 93, 1)  12%
// 5 шаг rgba(93, 93, 93, 1)  200% меняется на rgba(93, 93, 93, 1)  80%

// Есть какие-то вопросы?

// const contbtn0 = document.getElementById("contbtn0");
const initialGradient = 'linear-gradient(45deg, rgba(33, 33, 33, 1) 12%, rgba(93, 93, 93, 1) 50%, rgba(33, 33, 33, 1) 88%)';
const targetGradient = 'linear-gradient(45deg, rgba(33, 33, 33, 1) -100%, rgba(93, 93, 93, 1) 50%, rgba(33, 33, 33, 1) 200%)';
const gradientSteps = 100;





function interpolateValue(start, end, progress) {
  return start + (end - start) * progress;
}

contbtn0.addEventListener("mouseenter", function() {
  let currentStep = 0;
  const gradientAnimation = setInterval(function() {
    const currentPercentage1 = interpolateValue(12, -100, currentStep / gradientSteps);
    const currentPercentage2 = interpolateValue(50, 50, currentStep / gradientSteps);
    const currentPercentage3 = interpolateValue(88, 200, currentStep / gradientSteps);
    const currentGradient = initialGradient.replace("12%", `${currentPercentage1}%`).replace("50%", `${currentPercentage2}%`).replace("88%", `${currentPercentage3}%`);
    contbtn0.style.background = currentGradient;
    currentStep++;
    if (currentStep > gradientSteps) {
      clearInterval(gradientAnimation);
    }
  }, 10);
});

contbtn0.addEventListener("mouseleave", function() {
  let currentStep = 0;
  const gradientAnimation = setInterval(function() {
    const currentPercentage1 = interpolateValue(-100, 12, currentStep / gradientSteps);
    const currentPercentage2 = interpolateValue(50, 50, currentStep / gradientSteps);
    const currentPercentage3 = interpolateValue(200, 88, currentStep / gradientSteps);
    const currentGradient = targetGradient.replace("-100%", `${currentPercentage1}%`).replace("50%", `${currentPercentage2}%`).replace("200%", `${currentPercentage3}%`);
    contbtn0.style.background = currentGradient;
    currentStep++;
    if (currentStep > gradientSteps) {
      clearInterval(gradientAnimation);
    }
  }, 10);
});












































