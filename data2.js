// var products1 = [
//   { название: "Товар 1", описание: "Описание 1", цена: 10, дата: new Date("2023-07-01") },
//   { название: "Товар 2", описание: "Описание 2", цена: 20, дата: new Date("2023-07-02") },
//   { название: "Товар 3", описание: "Описание 3", цена: 30, дата: new Date("2023-07-03") }
// ];

// var products2 = [
//   { название: "Товар 4", описание: "Описание 4", цена: 40, дата: new Date("2023-07-04") },
//   { название: "Товар 5", описание: "Описание 5", цена: 50, дата: new Date("2023-07-05") },
//   { название: "Товар 6", описание: "Описание 6", цена: 60, дата: new Date("2023-07-06") }
// ];

var allProducts = [...products1, ...products2];

function renderCatalog() {
  var sortedProducts = allProducts.slice().sort(function(a, b) {
    return b.data - a.data;
  });

  var catalogElement = document.createElement("div");
  catalogElement.id = "catalog";

  sortedProducts.forEach(function(product) {
    var productElement = document.createElement("div");
    productElement.textContent = product.название;
    productElement.addEventListener("click", function() {
      renderProductMenu(product);
smoothScrollTo('topscroll0');

HomePage1.style.display = "none";
      
    });

    catalogElement.appendChild(productElement);
  });

  noiseOverlay.appendChild(catalogElement);
}

function smoothScrollTo(elementId) {
  var targetElement = document.getElementById(elementId);
  if (targetElement) {
    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: 'smooth'
    });
  }
}

function renderProductMenu(product) {
  var menuElement = document.createElement("div");
  menuElement.id = "productMenu";
  menuElement.style.position = "absolute";
  menuElement.style.left = "120px";
  menuElement.style.right = "0%";
  menuElement.style.minHeight = "100vh";
  menuElement.style.backgroundColor = "black";
  menuElement.style.display = "flex";
menuElement.style.flexDirection = "column";
var gradient = "linear-gradient(to right, rgb(0, 0, 0), rgb(17, 17, 17) 10.92%, rgb(25, 25, 25), rgb(17, 17, 17) 82.35%, rgb(0, 0, 0))";
var newGradient = gradient
  .replace("rgb(17, 17, 17)", product.accentcolor1)
  .replace("rgb(25, 25, 25)", product.accentcolor2)
  .replace("rgb(17, 17, 17)", product.accentcolor1);

menuElement.style.background = newGradient;

menuElement.style.zIndex = "50";
menuElement.style.marginBottom = "0px";
  var menuElement0 = document.createElement("div");
menuElement0.style.width = "0px";
menuElement0.style.height = "0px";
  menuElement0.id = "topscroll0";
menuElement0.style.background = "none";
menuElement.appendChild(menuElement0)

// Создание элемента для шума и его наложение на градиентный фон
const noiseOverlay1 = document.createElement("div");
noiseOverlay1.style.flexDirection = "column";
noiseOverlay1.style.position = "relative";
noiseOverlay1.style.top = "0";
noiseOverlay1.style.left = "0";
noiseOverlay1.style.width = "100%";
noiseOverlay1.style.minHeight = "100vh";
noiseOverlay1.style.height = "100%";
noiseOverlay1.style.background = `url(${generateNoise1(500, 500, 1, 0.2)})`;
menuElement.appendChild(noiseOverlay1);

  var titleElement = document.createElement("h3");
  titleElement.textContent = product.название;

  var descriptionElement = document.createElement("p");
  descriptionElement.textContent = product.описание;

  var priceElement = document.createElement("span");
  priceElement.textContent = "Цена: " + product.cost + " $";

  var closeButton = document.createElement("button");
  closeButton.textContent = "Закрыть";
  // closeButton.style.marginTop = "500vh";
  closeButton.style.position = "relative";
  closeButton.addEventListener("click", function() {
    closeProductMenu();
  });

  noiseOverlay1.appendChild(titleElement);
  noiseOverlay1.appendChild(descriptionElement);
  noiseOverlay1.appendChild(priceElement);
  noiseOverlay1.appendChild(closeButton);

  ContainerForContent1.appendChild(menuElement);
}

function closeProductMenu() {
  var menuElement = document.getElementById("productMenu");
  if (menuElement) {
    ContainerForContent1.removeChild(menuElement);
HomePage1.style.display = "flex";
leftBar.style.border = "2px solid rgba(29, 29, 29, 1)";

  }
        var urlParams = new URLSearchParams(window.location.search);
      urlParams.set('product', ''); // Устанавливаем значение параметра 'product' в пустую строку
      var newURL = window.location.origin + window.location.pathname + '?' + urlParams.toString();
      history.pushState(null, null, newURL);
}

function renderTopNewProducts() {
  var sortedProducts = allProducts.slice().sort(function(a, b) {
    return b.data - a.data;
  });

  var topNewProducts = sortedProducts.slice(0, 3);

//   try {



//   HomePage1ptC0P1title.textContent = "";
//   HomePage1ptC0P2title.textContent = "";
//   HomePage1ptC0P3title.textContent = "";

//   } catch (error) {
//     function restartPage2() {
//   // location.reload();
// }

// Вызываем функцию для перезапуска страницы
// restartPage2();
// }
  

  topNewProducts.forEach(function(product, index) {

    if (index === 0) {
HomePage1ptC0P1cdt0.textContent = product.leftT;
HomePage1ptC0P1cdt1.textContent = product.rightT;
HomePage1ptC0P1title.textContent = product.название;
HomePage1ptC0P1logo.style.background = product.catlogo;
HomePage1ptC0P1logo1.style.background = product.add1;
HomePage1ptC0P1logo2.style.background = product.add2;
HomePage1ptC0P1title.style.color = product.accentcolor;
HomePage1ptC0P1logo3.style.background = product.catlogo1;
HomePage1ptC0P1logoproj.style.background = product.logoproj;

var gradient = "radial-gradient(35vh at 50% 110%, rgb(204, 149, 52), rgba(0, 0, 0, 0))";
HomePage1ptC0P1gr.style.background = gradient.replace("rgb(204, 149, 52)", product.accentcolor);

HomePage1ptC0P1data.textContent = product.data0;



HomePage1ptC0P1logo.style.backgroundSize = "contain";
HomePage1ptC0P1logo.style.backgroundRepeat = "no-repeat";
HomePage1ptC0P1logo1.style.backgroundSize = "contain";
HomePage1ptC0P1logo1.style.backgroundRepeat = "no-repeat";
HomePage1ptC0P1logo2.style.backgroundSize = "contain";
HomePage1ptC0P1logo2.style.backgroundRepeat = "no-repeat";
HomePage1ptC0P1logo3.style.backgroundSize = "contain";
HomePage1ptC0P1logo3.style.backgroundRepeat = "no-repeat";
HomePage1ptC0P1logoproj.style.backgroundSize = "contain";
HomePage1ptC0P1logoproj.style.backgroundRepeat = "no-repeat";



      HomePage1ptC0P1.addEventListener("click", function() {
        renderProductMenu(product);
smoothScrollTo('topscroll0');
leftBar.style.borderColor = product.accentcolor2;

HomePage1.style.display = "none";
      });







      
    } else if (index === 1) {
HomePage1ptC0P2cdt0.textContent = product.leftT;
HomePage1ptC0P2cdt1.textContent = product.rightT;
HomePage1ptC0P2title.textContent = product.название;
HomePage1ptC0P2logo.style.background = product.catlogo;
HomePage1ptC0P2logo1.style.background = product.add1;
HomePage1ptC0P2logo2.style.background = product.add2;
HomePage1ptC0P2title.style.color = product.accentcolor;
HomePage1ptC0P2logo3.style.background = product.catlogo1;
HomePage1ptC0P2logoproj.style.background = product.logoproj;

var gradient = "radial-gradient(35vh at 50% 110%, rgb(204, 149, 52), rgba(0, 0, 0, 0))";
HomePage1ptC0P2gr.style.background = gradient.replace("rgb(204, 149, 52)", product.accentcolor);

HomePage1ptC0P2data.textContent = product.data0;



HomePage1ptC0P2logo.style.backgroundSize = "contain";
HomePage1ptC0P2logo.style.backgroundRepeat = "no-repeat";
HomePage1ptC0P2logo1.style.backgroundSize = "contain";
HomePage1ptC0P2logo1.style.backgroundRepeat = "no-repeat";
HomePage1ptC0P2logo2.style.backgroundSize = "contain";
HomePage1ptC0P2logo2.style.backgroundRepeat = "no-repeat";
HomePage1ptC0P2logo3.style.backgroundSize = "contain";
HomePage1ptC0P2logo3.style.backgroundRepeat = "no-repeat";
HomePage1ptC0P2logoproj.style.backgroundSize = "contain";
HomePage1ptC0P2logoproj.style.backgroundRepeat = "no-repeat";



      HomePage1ptC0P2.addEventListener("click", function() {
        renderProductMenu(product);
        smoothScrollTo('topscroll0');
leftBar.style.borderColor = product.accentcolor2;

HomePage1.style.display = "none";
      });
    } else if (index === 2) {
    HomePage1ptC0P3cdt0.textContent = product.leftT;
HomePage1ptC0P3cdt1.textContent = product.rightT;
HomePage1ptC0P3title.textContent = product.название;
HomePage1ptC0P3logo.style.background = product.catlogo;
HomePage1ptC0P3logo1.style.background = product.add1;
HomePage1ptC0P3logo2.style.background = product.add2;
HomePage1ptC0P3title.style.color = product.accentcolor;
HomePage1ptC0P3logo3.style.background = product.catlogo1;
HomePage1ptC0P3logoproj.style.background = product.logoproj;

var gradient = "radial-gradient(35vh at 50% 110%, rgb(204, 149, 52), rgba(0, 0, 0, 0))";
HomePage1ptC0P3gr.style.background = gradient.replace("rgb(204, 149, 52)", product.accentcolor);

HomePage1ptC0P3data.textContent = product.data0;



HomePage1ptC0P3logo.style.backgroundSize = "contain";
HomePage1ptC0P3logo.style.backgroundRepeat = "no-repeat";
HomePage1ptC0P3logo1.style.backgroundSize = "contain";
HomePage1ptC0P3logo1.style.backgroundRepeat = "no-repeat";
HomePage1ptC0P3logo2.style.backgroundSize = "contain";
HomePage1ptC0P3logo2.style.backgroundRepeat = "no-repeat";
HomePage1ptC0P3logo3.style.backgroundSize = "contain";
HomePage1ptC0P3logo3.style.backgroundRepeat = "no-repeat";
HomePage1ptC0P3logoproj.style.backgroundSize = "contain";
HomePage1ptC0P3logoproj.style.backgroundRepeat = "no-repeat";













      HomePage1ptC0P3.addEventListener("click", function() {
        renderProductMenu(product);
smoothScrollTo('topscroll0');
leftBar.style.borderColor = product.accentcolor2;

HomePage1.style.display = "none";
      });
    }
  });
}

renderCatalog();
renderTopNewProducts();




function generateNoise1(width, height, scale, probability) {
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







