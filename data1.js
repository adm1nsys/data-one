var products1 = [
  { 
  название: "Товар 1", 
  описание: "Описание 1", 
  цена: 10, 
  data: new Date("2023-07-01") 
},
  { 
  название: "Товар 2", 
  описание: "Описание 2", 
  цена: 20, 
  data: new Date("2023-07-02") 
},
  { 
  название: "Товар 3", 
  описание: "Описание 3", 
  цена: 30, 
  data: new Date("2023-07-03") 
}
];

var products2 = [
  { 
  catlogo: "url('https://administrati0n.github.io/data-one/xcodel.png')", 
  add1: "url('https://administrati0n.github.io/data-one/firebbasel.png')", 
  add2: "url('https://administrati0n.github.io/data-one/xcodepack.png')", 
  accentcolor: "rgba(33, 172, 222, 1.0)", 
  accentcolor1: "rgb(5, 28, 34)", 
  accentcolor2: "rgb(12, 72, 94)", 
  catlogo1: "url('https://administrati0n.github.io/data-one/appstorel.png')", 
  logoproj: "url('https://administrati0n.github.io/data-one/Starter Pack.png')", 
  название: "Starter Pack", 
  описание: "Описание 6", 
  leftT: "Xcode", 
  rightT: "Pack", 
  cost: 60,
  data: new Date("2023-07-05"),
  data0: "2023-07-05"
},
  { 
  catlogo: "url('https://administrati0n.github.io/data-one/xcodel.png')", 
  add1: "url('https://administrati0n.github.io/data-one/firebbasel.png')", 
  add2: "url('https://administrati0n.github.io/data-one/xcodepack.png')", 
  accentcolor: "rgba(33, 172, 222, 1.0)", 
  accentcolor1: "rgb(5, 28, 34)", 
  accentcolor2: "rgb(12, 72, 94)", 
  catlogo1: "url('https://administrati0n.github.io/data-one/appstorel.png')", 
  logoproj: "url('https://administrati0n.github.io/data-one/Starter Pack.png')", 
  название: "Starter Pack", 
  описание: "Описание 6", 
  leftT: "Xcode", 
  rightT: "Pack", 
  cost: 60,
  data: new Date("2023-07-05"),
  data0: "2023-07-02"
},
  { 
  catlogo: "url('https://administrati0n.github.io/data-one/xcodel.png')", 
  add1: "url('https://administrati0n.github.io/data-one/firebbasel.png')", 
  add2: "url('https://administrati0n.github.io/data-one/xcodepack.png')", 
  accentcolor: "rgba(33, 172, 222, 1.0)", 
  accentcolor1: "rgb(5, 28, 34)", 
  accentcolor2: "rgb(12, 72, 94)", 
  catlogo1: "url('https://administrati0n.github.io/data-one/appstorel.png')", 
  logoproj: "url('https://administrati0n.github.io/data-one/Starter Pack.png')", 
  название: "Starter Pack", 
  описание: "Описание 6", 
  leftT: "Xcode", 
  rightT: "Pack", 
  cost: 60,
  data: new Date("2023-07-05"),
  data0: "2023-07-06"
}
];

// var allProducts = [...products1, ...products2];

// function renderCatalog() {
//   var sortedProducts = allProducts.slice().sort(function(a, b) {
//     return b.дата - a.дата;
//   });

//   var catalogElement = document.createElement("div");
//   catalogElement.id = "catalog";

//   sortedProducts.forEach(function(product) {
//     var productElement = document.createElement("div");
//     productElement.textContent = product.название;
//     productElement.addEventListener("click", function() {
//       renderProductMenu(product);
//     });

//     catalogElement.appendChild(productElement);
//   });

//   noiseOverlay.appendChild(catalogElement);
// }

// function renderProductMenu(product) {
//   var menuElement = document.createElement("div");
//   menuElement.id = "productMenu";
//   menuElement.style.position = "fixed";
//   menuElement.style.top = "50%";
//   menuElement.style.left = "50%";
//   menuElement.style.transform = "translate(-50%, -50%)";
//   menuElement.style.backgroundColor = "black";
//   menuElement.style.padding = "10px";

//   var titleElement = document.createElement("h3");
//   titleElement.textContent = product.название;

//   var descriptionElement = document.createElement("p");
//   descriptionElement.textContent = product.описание;

//   var priceElement = document.createElement("span");
//   priceElement.textContent = "Цена: " + product.цена + " $";

//   var closeButton = document.createElement("button");
//   closeButton.textContent = "Закрыть";
//   closeButton.addEventListener("click", function() {
//     closeProductMenu();
//   });

//   menuElement.appendChild(titleElement);
//   menuElement.appendChild(descriptionElement);
//   menuElement.appendChild(priceElement);
//   menuElement.appendChild(closeButton);

//   noiseOverlay.appendChild(menuElement);
// }

// function closeProductMenu() {
//   var menuElement = document.getElementById("productMenu");
//   if (menuElement) {
//     noiseOverlay.removeChild(menuElement);
//   }
// }

// function renderTopNewProducts() {
//   var sortedProducts = allProducts.slice().sort(function(a, b) {
//     return b.дата - a.дата;
//   });

//   var topNewProducts = sortedProducts.slice(0, 3);

//   var topNewElement = document.createElement("div");
//   topNewElement.id = "topNewProducts";

//   var titleElement = document.createElement("h2");
//   titleElement.textContent = "Топ 3 самых новых товара:";

//   topNewElement.appendChild(titleElement);

//   topNewProducts.forEach(function(product) {
//     var productElement = document.createElement("div");
//     productElement.textContent = product.название;
//     productElement.addEventListener("click", function() {
//       renderProductMenu(product);
//     });

//     topNewElement.appendChild(productElement);
//   });

//   noiseOverlay.appendChild(topNewElement);
// }

// renderCatalog();
// renderTopNewProducts();
