function adjustLayout() {
//   const width = window.innerWidth;

//   // if (width >= 1200) {
//   // if (width >= 0) {
//   if (width >= 999999999999999999) {
// // Container0.style.display = "flex";

// // Container2.style.display = "flex";
// // leftBar.style.marginLeft = "10.001px";


//     // body.style.maxWidth = "1000px";
//     // leftBar.style.left = "50px";
//   } else {
//     // body.style.maxWidth = "999999999px";
//     // leftBar.style.left = "10px";
// // Container0.style.display = "none";
// // Container2.style.display = "none";
// // leftBar.style.marginLeft = "10.01px";

//   }
//   Container0.addEventListener("click", function() {
// // Container0.style.border = "2px solid white";
// // Container1.style.border = "0px solid white";
// // Container2.style.border = "0px solid white";

// // Container0.style.opacity = "1";
// // Container1.style.opacity = "0.5";
// // Container2.style.opacity = "0.5";
// });
//   Container1.addEventListener("click", function() {
// // Container0.style.border = "0px solid white";
// // Container1.style.border = "2px solid white";
// // Container2.style.border = "0px solid white";
// // Container0.style.opacity = "0.5";
// // Container1.style.opacity = "1";
// // Container2.style.opacity = "0.5";
// });
//     Container2.addEventListener("click", function() {
// // Container0.style.border = "0px solid white";
// // Container1.style.border = "0px solid white";
// // Container2.style.border = "2px solid white";
// // Container2.style.opacity = "1";
// // Container1.style.opacity = "0.5";
// // Container0.style.opacity = "0.5";
// });

//     const cheatCodes = {
//   hesoyam: {
//     reward: 'Бесплатный проект',
//     action: function() {
//       console.log('Вы активировали чит-код "hesoyam" и получили бесплатный проект.');
//     }
//   },
//   gta: {
//     reward: 'Особая функция',
//     action: function() {
//       console.log('Вы активировали чит-код "gta" и получили особую функцию.');
//     }
//   },
//   secretcode: {
//     reward: 'Секретная награда',
//     action: function() {
//       console.log('Вы активировали чит-код "secretcode" и получили секретную награду.');
//     }
//   }
// };

// document.addEventListener('keydown', function(event) {
//   const input = event.key.toLowerCase();

//   if (cheatCodes.hasOwnProperty(input)) {
//     const cheat = cheatCodes[input];
//     cheat.action();
//   }
// });






}

// Вызывать функцию каждую секунду
setInterval(adjustLayout, 1000);

onload = function () {
//
changepage()
profshow()
smoothScrollToTop(500);




    // console.log("1")
  var productName = getURLParameter('product');
  if (productName) {
    var product = findProductByTag(productName);
    if (product) {
      renderProductMenu(product);
      smoothScrollTo('topscroll0');
      leftBar.style.borderColor = product.accentcolor2;
      HomePage1.style.display = 'none';
      window.scrollTo(0, 0); // Прокручиваем страницу вверх
    }
  }
if(lscreen === 1){
    setTimeout(function() {
lscrenclose()
}, 2000); 
} else if (lscreen === 0){

    //

}



    
};



