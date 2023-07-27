// Создаем элементы
const leftBar = document.createElement("div");
leftBar.style.background = "black";
leftBar.style.backgroundPosition = "center";
leftBar.style.backgroundSize = "400px";
leftBar.style.zIndex = "999";
leftBar.style.width = "72px";
leftBar.style.border = "2px solid rgba(29, 29, 29, 1)";
leftBar.style.borderRadius = "10px";
leftBar.style.position = "fixed";
leftBar.style.bottom = "10px";
leftBar.style.transition = "0.4s";
leftBar.style.marginLeft = "10px";
leftBar.style.top = "10px";
leftBar.style.boxShadow = "0 0 100px rgba(0, 0, 0, 1)"; 






const leftBarLogoC = document.createElement("div");
leftBarLogoC.style.height = "22px";
leftBarLogoC.style.width = "20px";
// leftBarLogoC.style.background = "red";
leftBarLogoC.style.position = "relative";
leftBarLogoC.style.marginLeft = "26px";
leftBarLogoC.style.marginTop = "33px";
leftBar.appendChild(leftBarLogoC);

const leftBarLogo1 = document.createElement("div");
leftBarLogo1.style.fontFamily = "Arial Bold";
leftBarLogo1.textContent = "A";
leftBarLogo1.style.fontSize = "20px";
leftBarLogo1.style.color = "white";
leftBarLogo1.style.position = "absolute";
leftBarLogo1.style.left = "0px";
leftBarLogo1.style.top = "-3.5px";

const leftBarLogo2 = document.createElement("div");
leftBarLogo2.style.fontFamily = "Arial Bold";
leftBarLogo2.textContent = "S";
leftBarLogo2.style.fontSize = "20px";
leftBarLogo2.style.color = "white";
leftBarLogo2.style.position = "absolute";
leftBarLogo2.style.left = "7.5px";
leftBarLogo2.style.top = "3.5px";
leftBarLogo2.style.textShadow = " -0.5px 0 black, 0 0.5px black, 0.5px 0 black, 0 -0.5px black";

leftBarLogoC.appendChild(leftBarLogo1);

leftBarLogoC.appendChild(leftBarLogo2);






const leftBarC = document.createElement("div");
leftBarC.style.display = "flex";
leftBarC.style.flexDirection = "column";
leftBarC.style.overflowY = "auto";
leftBarC.style.overflowX = "hidden";
leftBarC.style.height = "50%";
// leftBarC.style.background = "red";
leftBarC.style.position = "relative";
leftBarC.style.marginLeft = "10px";
leftBarC.style.marginRight = "10px";
leftBarC.style.marginTop = "62px";
leftBarC.style.paddingTop = "20px";
// leftBarC.style.paddingBottom = "20px";
leftBar.appendChild(leftBarC);

const leftBarCgr = document.createElement("div");
leftBarCgr.style.height = "20px";
leftBarCgr.style.width = "52px";
leftBarCgr.style.background = "linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)";
leftBarCgr.style.position = "fixed";
leftBarCgr.style.left = "22px";
leftBarCgr.style.top = "128px";
leftBarCgr.style.zIndex = "9999999999";
leftBarC.appendChild(leftBarCgr);






const leftBarC0 = document.createElement("div");
leftBarC0.style.display = "flex";
leftBarC0.style.flexDirection = "column";
leftBarC0.style.height = "22px";
leftBarC0.style.width = "22px";
leftBarC0.style.position = "absolute";
leftBarC0.style.marginLeft = "15px";
leftBarC0.style.marginTop = "0px";
leftBarC0.style.borderRadius = "3px";
leftBarC.appendChild(leftBarC0);



const svglogo = `
<svg width="75" height="84" viewBox="0 0 75 84" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23.75 79C23.75 81.7614 21.5114 84 18.75 84H5.5C2.73858 84 0.5 81.7614 0.5 79V37.5336C0.5 35.9138 1.15492 34.3628 2.31587 33.2332L34.0132 2.39254C35.9542 0.504041 39.0458 0.504044 40.9868 2.39254L72.9868 33.5277C73.9542 34.469 74.5 35.7615 74.5 37.1113V79C74.5 81.7614 72.2614 84 69.5 84H56.25C53.4886 84 51.25 81.7614 51.25 79V55.25C51.25 47.9322 45.3178 42 38 42C30.1299 42 23.75 48.3799 23.75 56.25V79Z" />
</svg>
`;

const svglogoc = document.createElement('div');
svglogoc.innerHTML = svglogo;

const svglogoelement = svglogoc.querySelector('svg');
svglogoelement.style.marginLeft = '0px';
svglogoelement.style.marginTop = '2px';
svglogoelement.style.width = '22px';
svglogoelement.style.height = '17px';
svglogoelement.style.position = 'absolute';
// svglogoelement.style.mixBlendMode = 'difference';

// Добавляем созданный элемент <svg> в контейнер
leftBarC0.appendChild(svglogoc);






const leftBarC1 = document.createElement("div");
leftBarC1.style.display = "flex";
leftBarC1.style.flexDirection = "column";
leftBarC1.style.height = "22px";
leftBarC1.style.width = "22px";
leftBarC1.style.position = "absolute";
leftBarC1.style.marginLeft = "15px";
leftBarC1.style.marginTop = "50px";
leftBarC1.style.borderRadius = "3px";
leftBarC.appendChild(leftBarC1);



const svglogo1 = `
<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect y="53" width="47" height="47" rx="7" />
<rect width="47" height="47" rx="7" />
<rect x="55.5" y="2.5" width="42" height="42" rx="4.5" stroke="white" stroke-width="5" fill="none"/>
<rect x="53" y="53" width="47" height="47" rx="7" />
</svg>
`;

const svglogoc1 = document.createElement('div');
svglogoc1.innerHTML = svglogo1;

const svglogoelement1 = svglogoc1.querySelector('svg');
svglogoelement1.style.marginLeft = '0px';
svglogoelement1.style.marginTop = '4px';
svglogoelement1.style.width = '22px';
svglogoelement1.style.height = '14px';
svglogoelement1.style.position = 'absolute';
// svglogoelement1.style.mixBlendMode = 'difference';

// Добавляем созданный элемент <svg> в контейнер
leftBarC1.appendChild(svglogoc1);





const leftBarC2 = document.createElement("div");
leftBarC2.style.display = "flex";
leftBarC2.style.flexDirection = "column";
leftBarC2.style.height = "22px";
leftBarC2.style.width = "22px";
leftBarC2.style.position = "absolute";
leftBarC2.style.marginLeft = "15px";
leftBarC2.style.marginTop = "100px";
leftBarC2.style.borderRadius = "3px";
leftBarC.appendChild(leftBarC2);



const svglogo2 = `
<svg width="98" height="96" viewBox="0 0 98 96" xmlns="http://www.w3.org/2000/svg">
<path d="M26 23C26 10.2975 36.2975 0 49 0C61.7025 0 72 10.2975 72 23C72 35.7025 61.7025 46 49 46C36.2975 46 26 35.7025 26 23Z"/>
<path d="M0 87.0989C0 67.162 16.162 51 36.0989 51H61.9011C81.838 51 98 67.162 98 87.0989C98 92.0148 94.0148 96 89.0989 96H8.9011C3.98516 96 0 92.0148 0 87.0989Z"/>
</svg>
`;

const svglogoc2 = document.createElement('div');
svglogoc2.innerHTML = svglogo2;

const svglogoelement2 = svglogoc2.querySelector('svg');
svglogoelement2.style.marginLeft = '0px';
svglogoelement2.style.marginTop = '4px';
svglogoelement2.style.width = '22px';
svglogoelement2.style.height = '14px';
svglogoelement2.style.position = 'absolute';
svglogoc2.style.mixBlendMode = 'difference';

// Добавляем созданный элемент <svg> в контейнер
leftBarC2.appendChild(svglogoc2);






const leftBarC3 = document.createElement("div");
leftBarC3.style.display = "flex";
leftBarC3.style.flexDirection = "column";
leftBarC3.style.height = "22px";
leftBarC3.style.width = "22px";
leftBarC3.style.position = "absolute";
leftBarC3.style.marginLeft = "15px";
leftBarC3.style.marginTop = "150px";
leftBarC3.style.borderRadius = "3px";
leftBarC.appendChild(leftBarC3);



const svglogo3 = `
<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M60 90.5C60 95.7467 55.7467 100 50.5 100C45.2533 100 41 95.7467 41 90.5V72.935L28.5797 85.3553C24.8697 89.0653 18.8546 89.0653 15.1447 85.3553C11.4347 81.6454 11.4347 75.6303 15.1447 71.9203L28.065 59H9.5C4.25329 59 2.29341e-07 54.7467 0 49.5C-2.29341e-07 44.2533 4.2533 40 9.5 40L27.065 40L15.1447 28.0797C11.4347 24.3697 11.4347 18.3547 15.1447 14.6447C18.8546 10.9347 24.8697 10.9347 28.5797 14.6447L41 27.065V9.5C41 4.25329 45.2533 0 50.5 0C55.7467 0 60 4.2533 60 9.5V27.065L72.4203 14.6447C76.1303 10.9347 82.1454 10.9347 85.8553 14.6447C89.5653 18.3546 89.5653 24.3697 85.8553 28.0797L73.935 40H90.5C95.7467 40 100 44.2533 100 49.5C100 54.7467 95.7467 59 90.5 59L72.935 59L85.8553 71.9203C89.5653 75.6303 89.5653 81.6454 85.8553 85.3553C82.1454 89.0653 76.1303 89.0653 72.4203 85.3553L60 72.935L60 90.5ZM50 69C60.4934 69 69 60.4934 69 50C69 39.5066 60.4934 31 50 31C39.5066 31 31 39.5066 31 50C31 60.4934 39.5066 69 50 69Z" />
</svg>

`;

const svglogoc3 = document.createElement('div');
svglogoc3.innerHTML = svglogo3;

const svglogoelement3 = svglogoc3.querySelector('svg');
svglogoelement3.style.marginLeft = '0px';
svglogoelement3.style.marginTop = '4px';
svglogoelement3.style.width = '22px';
svglogoelement3.style.height = '14px';
svglogoelement3.style.position = 'absolute';
// svglogoelement3.style.mixBlendMode = 'difference';

// Добавляем созданный элемент <svg> в контейнер
leftBarC3.appendChild(svglogoc3);








const leftBarC4 = document.createElement("div");
leftBarC4.style.display = "flex";
leftBarC4.style.flexDirection = "column";
leftBarC4.style.height = "22px";
leftBarC4.style.width = "22px";
leftBarC4.style.position = "absolute";
leftBarC4.style.marginLeft = "15px";
leftBarC4.style.marginTop = "200px";
leftBarC4.style.borderRadius = "3px";
leftBarC.appendChild(leftBarC4);



const svglogo4 = `
<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M100 50C100 77.6142 77.6142 100 50 100C22.3858 100 0 77.6142 0 50C0 22.3858 22.3858 0 50 0C77.6142 0 100 22.3858 100 50ZM55 23C55 25.7614 52.7614 28 50 28C47.2386 28 45 25.7614 45 23C45 20.2386 47.2386 18 50 18C52.7614 18 55 20.2386 55 23ZM46.4286 39.2392V79.4881C46.4286 81.4277 48.0009 83 49.9405 83C51.88 83 53.4524 81.4277 53.4524 79.4881V39.2392C53.4524 37.2996 51.88 35.7273 49.9405 35.7273C48.0009 35.7273 46.4286 37.2996 46.4286 39.2392Z" />
</svg>


`;

const svglogoc4 = document.createElement('div');
svglogoc4.innerHTML = svglogo4;

const svglogoelement4 = svglogoc4.querySelector('svg');
svglogoelement4.style.marginLeft = '0px';
svglogoelement4.style.marginTop = '4px';
svglogoelement4.style.width = '22px';
svglogoelement4.style.height = '14px';
svglogoelement4.style.position = 'absolute';
// svglogoelement4.style.mixBlendMode = 'difference';

// Добавляем созданный элемент <svg> в контейнер
leftBarC4.appendChild(svglogoc4);


const leftBarC5 = document.createElement("div");
leftBarC5.style.display = "flex";
leftBarC5.style.flexDirection = "column";
leftBarC5.style.height = "22px";
leftBarC5.style.width = "22px";
leftBarC5.style.position = "absolute";
leftBarC5.style.marginLeft = "15px";
leftBarC5.style.marginTop = "250px";
leftBarC5.style.borderRadius = "3px";
leftBarC5.style.transition = "0.5s";

leftBarC.appendChild(leftBarC5);



const svglogo5 = `
<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 100H6V14C6 9.58172 9.58172 6 14 6H86C90.4183 6 94 9.58172 94 14V100H100V14C100 6.26801 93.732 0 86 0H14C6.26801 0 0 6.26801 0 14V100Z"/>
<path d="M32 15C32 12.7909 33.7909 11 36 11H64C66.2091 11 68 12.7909 68 15C68 17.2091 66.2091 19 64 19H36C33.7909 19 32 17.2091 32 15Z"/>
</svg>
`;

const svglogoc5 = document.createElement('div');
svglogoc5.innerHTML = svglogo5;

const svglogoelement5 = svglogoc5.querySelector('svg');
svglogoelement5.style.marginLeft = '0px';
svglogoelement5.style.marginTop = '4px';
svglogoelement5.style.width = '22px';
svglogoelement5.style.height = '14px';
svglogoelement5.style.position = 'absolute';
svglogoelement5.style.transition = '0.5s';
// svglogoelement5.style.mixBlendMode = 'difference';
leftBarC5.style.background = "black";
svglogoelement5.style.fill = 'white';
// Добавляем созданный элемент <svg> в контейнер
leftBarC5.appendChild(svglogoc5);











// if (DevMode === "on"){
// leftBarMNote.style.display = "flex";
// } else {
// leftBarMNote.style.display = "none";
// }












leftBarLogoC.addEventListener("click", function() {
ActivePage = "Home";
});

leftBarC0.addEventListener("click", function() {
ActivePage = "Home";
});


leftBarC2.addEventListener("click", function() {
frame1.style.transition = '1s';

    if (ProfileActive === "y"){
ProfileActive = "n";
frame1.style.opacity = '0';

  setTimeout(function() {
frame1.style.display = 'none';
}, 1000); 



}else {
ProfileActive = "y";
frame1.style.display = 'flex';

  setTimeout(function() {
frame1.style.opacity = '1';
}, 100); 



}

});


leftBarC5.addEventListener("click", function() {

  if (PlayerActive === "y"){
PlayerActive = "n";
// console.log("1")

  if (PlayerActive === "y"){


leftBarC5.style.background = "white";
svglogoelement5.style.fill = 'black';
phone.style.bottom = '10px';
// PlayerActive = "n";



  setTimeout(function() {
phone.style.transform = 'perspective(1000px) rotateY(-360deg) rotateX(0deg)';
  setTimeout(function() {
frame01.style.opacity = '1';

  }, 0); // Задержка выполнения изменений phone в 1 секунду (время может быть изменено по вашему усмотрению)

}, 0); 


}else {
leftBarC5.style.background = "black";
svglogoelement5.style.fill = 'white';

setTimeout(function() {
  frame01.style.opacity = '0';

  setTimeout(function() {
    phone.style.bottom = '-1000px';
    phone.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg)';
  }, 1000); // Задержка выполнения изменений phone в 1 секунду (время может быть изменено по вашему усмотрению)
}, 0); // Задержка выполнения изменений frame01 в 10 секунд (время может быть изменено по вашему усмотрению)




// PlayerActive = "y";
}

}else {
PlayerActive = "y";
// console.log("2")


  if (PlayerActive === "y"){


leftBarC5.style.background = "white";
svglogoelement5.style.fill = 'black';
phone.style.bottom = '10px';
// PlayerActive = "n";



  setTimeout(function() {
phone.style.transform = 'perspective(1000px) rotateY(-360deg) rotateX(0deg)';
// phone.style.transform = 'perspective(1000px) rotateY(-180deg) rotateX(0deg)';
  setTimeout(function() {
frame01.style.opacity = '1';

  }, 1500); // Задержка выполнения изменений phone в 1 секунду (время может быть изменено по вашему усмотрению)

}, 0); 


}else {
leftBarC5.style.background = "black";
svglogoelement5.style.fill = 'white';

setTimeout(function() {
  frame01.style.opacity = '0';

  setTimeout(function() {
    phone.style.bottom = '-1000px';
    phone.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg)';
  }, 1500); // Задержка выполнения изменений phone в 1 секунду (время может быть изменено по вашему усмотрению)
}, 0); // Задержка выполнения изменений frame01 в 10 секунд (время может быть изменено по вашему усмотрению)




// PlayerActive = "y";
}


}

});

// leftBarProfile.addEventListener("click", function() {


// });


// leftBarLoved.addEventListener("click", function() {


// });


// leftBarSettings.addEventListener("click", function() {


// });








// Добавляем элементы в DOM 
// leftBar.appendChild(leftBarMNoteC);
// leftBar.appendChild(leftBarMNote);
// leftBar.appendChild(leftBarHome);
// leftBar.appendChild(leftBarSearch);
// leftBar.appendChild(leftBarProfile);
// leftBar.appendChild(leftBarProfile1);
// leftBar.appendChild(leftBarLoved);
// leftBar.appendChild(leftBarSettings);
// leftBar.appendChild(leftBarProjects);
// leftBarProjects.appendChild(leftBarProjects1);
// leftBarProjects.appendChild(leftBarProjects2);
// leftBarProjects.appendChild(leftBarProjects3);
// leftBarProjects.appendChild(leftBarProjects4);
// leftBarSettings.appendChild(leftBarSettings5);
// leftBarSettings.appendChild(leftBarSettings4);
// leftBarSettings.appendChild(leftBarSettings3);
// leftBarSettings.appendChild(leftBarSettings2);
// leftBarSettings.appendChild(leftBarSettings1);
// leftBarLoved.appendChild(leftBarLoved1);
// leftBarLoved.appendChild(leftBarLoved2);
// leftBarLoved.appendChild(leftBarLoved3);
// leftBarLoved.appendChild(leftBarLoved4);
// leftBarProfile.appendChild(leftBarProfile1);
// leftBarProfile.appendChild(leftBarProfile2);
// leftBarSearch.appendChild(leftBarSearch2);
// leftBarSearch.appendChild(leftBarSearch1);
// leftBarHome.appendChild(leftBarHome1);
// leftBarHome.appendChild(leftBarHome2);
// leftBarHome.appendChild(leftBarHome3);
// leftBarHome.appendChild(leftBarHome4);
// leftBarHome.appendChild(leftBarHome5);
// leftBarHome.appendChild(leftBarHome6);
// leftBar.appendChild(leftBarLogo);























function myFunction() {
  if (ActivePage === "Home"){

leftBarC0.style.transition = "0.5s";
leftBarC0.style.background = "white";
svglogoelement.style.transition = '0.5s';
svglogoelement.style.fill = 'black';

leftBarC1.style.transition = "0.5s";
leftBarC1.style.background = "black";
svglogoelement1.style.transition = '0.5s';
svglogoelement1.style.fill = 'white';


leftBarC2.style.transition = "0.5s";
leftBarC2.style.background = "black";
svglogoelement2.style.transition = '0.5s';
svglogoelement2.style.fill = 'white';

leftBarC3.style.transition = "0.5s";
leftBarC3.style.background = "black";
svglogoelement3.style.transition = '0.5s';
svglogoelement3.style.fill = 'white';

leftBarC4.style.transition = "0.5s";
leftBarC4.style.background = "black";
svglogoelement4.style.transition = '0.5s';
svglogoelement4.style.fill = 'white';

} else {
// leftBarC0.style.transition = "0.5s";

// svglogoelement.style.transition = '0.5s';

// leftBarC0.style.background = "black";
// svglogoelement.style.fill = 'white';

}


  if (ProfileActive === "y"){

leftBarC2.style.background = "white";
svglogoelement2.style.fill = 'black';

}else {
leftBarC2.style.background = "black";
svglogoelement2.style.fill = 'white';
}










}

setInterval(myFunction, 100); // Вызов функции каждую секунду











































