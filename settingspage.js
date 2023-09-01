


            // background: linear-gradient(to right, rgb(255, 255, 255), rgba(255, 255, 255, 0.435) 8.4%, rgb(255, 255, 255) 10.5%, rgba(255, 255, 255, 0.59) 16.81%, rgba(255, 255, 255, 1) 16.81%, rgba(255, 255, 255, 0.58) 21.85%);


const settingspage1 = document.createElement("div");
settingspage1.style.display = "flex";
settingspage1.style.flexDirection = "column";
settingspage1.style.width = "auto";
settingspage1.style.height = "100%";
settingspage1.style.minHeight = "100vh";
settingspage1.style.position = "relative";
settingspage1.style.left = "0px";
settingspage1.style.top = "0px";
settingspage1.style.background = "radial-gradient(rgb(67, 67, 67), rgb(71, 71, 71) 11.76%, rgb(39, 39, 39), rgb(0, 0, 0) 82.77%, rgb(0, 0, 0))";
// settingspage1.style.background = "linear-gradient(to right, rgb(0, 0, 0), rgb(17, 17, 17) 10.92%, rgb(25, 25, 25), rgb(18, 18, 18) 82.35%, rgb(0, 0, 0))";
settingspage1.style.zIndex = "99999999999999999";
settingspage1.style.transition = "0.4s";
settingspage1.style.opacity = "0";
settingspage1.style.margin = "0px 0px 0px 120px";
// ContainerForContent1.appendChild(settingspage1);

function generateNoiseset(width, height, scale, probability) {
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
const noiseOverlayset = document.createElement("div");
// noiseOverlayset.style.display = "flex";
noiseOverlayset.style.flexDirection = "column";
noiseOverlayset.style.position = "absolute";
noiseOverlayset.style.top = "0";
noiseOverlayset.style.left = "0";
noiseOverlayset.style.width = "100%";
noiseOverlayset.style.height = "100%";
noiseOverlayset.style.background = `url(${generateNoiseset(500, 500, 1, 0.5)})`;
settingspage1.appendChild(noiseOverlayset);

const shtorac = document.createElement("div");
shtorac.style.display = "flex";
shtorac.style.flexDirection = "row";
shtorac.style.paddingLeft = "10px";
shtorac.style.fontFamily = Font1;
shtorac.style.fontSize = "45px";
shtorac.style.width = "190px";
shtorac.style.marginTop = "70px";
shtorac.textContent = "Design";
shtorac.style.justifyContent = "start";
shtorac.style.justifyItems = "start";
shtorac.style.alignItems = "center";
shtorac.style.alignContent = "center";
// shtorac.style.height = "90px";
shtorac.style.background = "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.43601190476190477) 50%, rgba(255,255,255,1) 100%)";
shtorac.style.color = "rgba(0,0,0,0)";
shtorac.style.backgroundClip = "text";
shtorac.style.WebkitBackgroundClip = "text";  // Обратите внимание на большую "W"
// shtorac.style.width = "100%";
// shtorac.style.borderBottom = "2px solid rgba(255, 255, 255, 0.08)";
noiseOverlayset.appendChild(shtorac);
shimmerEffect(shtorac);

const shtorac1 = document.createElement("div");
shtorac1.style.display = "flex";
shtorac1.style.flexDirection = "row";
shtorac1.style.margin = "10px";
shtorac1.style.fontFamily = Font2;
shtorac1.style.fontSize = "25px";
shtorac1.style.opacity = "0.5";
shtorac1.style.width = "280px";
// shtorac1.style.marginTop = "70px";
shtorac1.textContent = "Website Interface";
shtorac1.style.justifyContent = "start";
shtorac1.style.justifyItems = "start";
shtorac1.style.alignItems = "center";
shtorac1.style.alignContent = "center";
// shtorac1.style.height = "90px";
// shtorac1.style.background = "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.43601190476190477) 50%, rgba(255,255,255,1) 100%)";
shtorac1.style.color = "rgba(255, 255, 255, 0.45)";
shtorac1.style.backgroundClip = "text";
shtorac1.style.WebkitBackgroundClip = "text";  // Обратите внимание на большую "W"
// shtorac1.style.width = "100%";
// shtorac1.style.borderBottom = "2px solid rgba(255, 255, 255, 0.08)";
noiseOverlayset.appendChild(shtorac1);
// shimmerEffect(shtorac1);

const settingst1 = document.createElement("div");
settingst1.style.display = "flex";
settingst1.style.flexDirection = "column";
// settingst1.style.width = "100%";
// settingst1.style.minHeight = "90px";
settingst1.style.position = "relative";
// settingst1.style.marginTop = "10px";
settingst1.style.marginRight = "40px";
settingst1.style.borderRadius = "13px";
settingst1.style.background = "rgba(0, 0, 0, 0.06)";
// settingst1.style.border = "2px solid rgba(255, 255, 255, 0.08)";
settingst1.style.transition = "0.4s";
settingst1.style.justifyContent = "center";
settingst1.style.justifyItems = "center";
settingst1.style.alignItems = "center";
settingst1.style.alignContent = "center";
settingst1.style.overflow = "hidden";
settingst1.style.WebkitBackdropFilter = "blur(5px)";
settingst1.style.backdropFilter = "blur(5px)";
noiseOverlayset.appendChild(settingst1);

const settingst1t0c = document.createElement("div");
settingst1t0c.style.display = "flex";
settingst1t0c.style.flexDirection = "column";
settingst1t0c.style.width = "100%";
settingst1t0c.style.height = "60px";
settingst1t0c.style.position = "relative";
// settingst1.style.marginTop = "10px";
// settingst1.style.marginRight = "40px";
// settingst1.style.borderRadius = "13px";
// settingst1.style.background = "rgba(60, 60, 60, 0.24)";
// settingst1.style.border = "2px solid rgba(255, 255, 255, 0.08)";
settingst1t0c.style.transition = "0.4s";
settingst1t0c.style.justifyContent = "center";
settingst1t0c.style.justifyItems = "center";
settingst1t0c.style.alignItems = "center";
settingst1t0c.style.alignContent = "center";
settingst1t0c.style.overflow = "hidden";
// settingst1.style.WebkitBackdropFilter = "blur(90px)";
// settingst1.style.backdropFilter = "blur(90px)";
settingst1.appendChild(settingst1t0c);

const settingst1t0ct = document.createElement("div");
settingst1t0ct.style.display = "flex";
settingst1t0ct.textContent = "Design Type";
settingst1t0ct.style.fontFamily = Font2;
settingst1t0ct.style.fontSize = "30px";
settingst1t0ct.style.position = "relative";
settingst1.style.color = "white";
// settingst1.style.marginRight = "40px";
// settingst1.style.borderRadius = "13px";
// settingst1.style.background = "rgba(60, 60, 60, 0.24)";
// settingst1.style.border = "2px solid rgba(255, 255, 255, 0.08)";
settingst1t0ct.style.transition = "0.4s";
settingst1t0ct.style.justifyContent = "center";
settingst1t0ct.style.justifyItems = "center";
settingst1t0ct.style.alignItems = "center";
settingst1t0ct.style.alignContent = "center";
settingst1t0ct.style.overflow = "hidden";
// settingst1.style.WebkitBackdropFilter = "blur(90px)";
// settingst1.style.backdropFilter = "blur(90px)";
settingst1t0c.appendChild(settingst1t0ct);

const settingst1cont0c000000000000 = document.createElement("div");
settingst1cont0c000000000000.style.display = "flex";
settingst1cont0c000000000000.style.flexDirection = "column";
settingst1cont0c000000000000.style.width = "80%";
settingst1cont0c000000000000.style.height = "2px";
settingst1cont0c000000000000.style.position = "relative";
// settingst1.style.marginTop = "10px";
settingst1cont0c000000000000.style.marginLeft = "auto";
settingst1cont0c000000000000.style.marginRight = "auto";
settingst1cont0c000000000000.style.borderRadius = "999px";
settingst1cont0c000000000000.style.background = "rgb(62, 62, 62)";
// settingcontt1.style.border = "2px solid rgba(255, 255, 255, 0.08)";
settingst1cont0c000000000000.style.transition = "0.4s";
settingst1cont0c000000000000.style.justifyContent = "center";
settingst1cont0c000000000000.style.justifyItems = "center";
settingst1cont0c000000000000.style.alignItems = "center";
settingst1cont0c000000000000.style.alignContent = "center";
settingst1cont0c000000000000.style.overflow = "hidden";
// settingst1.style.WebkitBackdropFilter = "blur(90px)";
// settingst1.style.backdropFilter = "blur(90px)";
settingst1.appendChild(settingst1cont0c000000000000);

const settingst1cont0c = document.createElement("div");
settingst1cont0c.style.display = "flex";
settingst1cont0c.style.flexDirection = "row";
settingst1cont0c.style.width = "100%";
settingst1cont0c.style.height = "450px";
settingst1cont0c.style.position = "relative";
settingst1cont0c.style.marginTop = "0px";
settingst1cont0c.style.marginBottom = "20px";
// settingst1.style.marginRight = "40px";
// settingst1.style.borderRadius = "13px";
// settingst1.style.background = "rgba(60, 60, 60, 0.24)";
// settingcontt1.style.border = "2px solid rgba(255, 255, 255, 0.08)";
settingst1cont0c.style.transition = "0.4s";
settingst1cont0c.style.justifyContent = "center";
settingst1cont0c.style.justifyItems = "center";
settingst1cont0c.style.alignItems = "center";
settingst1cont0c.style.alignContent = "center";
settingst1cont0c.style.overflow = "hidden";
// settingst1.style.WebkitBackdropFilter = "blur(90px)";
// settingst1.style.backdropFilter = "blur(90px)";
settingst1.appendChild(settingst1cont0c);

const settingst1cont0c1 = document.createElement("div");
settingst1cont0c1.style.display = "flex";
settingst1cont0c1.style.flexDirection = "row";
settingst1cont0c1.style.width = "100%";
settingst1cont0c1.style.height = "450px";
settingst1cont0c1.style.position = "relative";
// settingst1cont0c1.style.marginTop = "10px";
// settingst1cont0c1.style.marginBottom = "10px";
settingst1cont0c1.style.marginRight = "20px";
settingst1cont0c1.style.marginLeft = "20px";
settingst1cont0c1.style.borderRadius = "13px";
settingst1cont0c1.style.background = "rgba(0, 0, 0, 0.43)";
// settingcontt1.style.border = "2px solid rgba(255, 255, 255, 0.08)";
settingst1cont0c1.style.transition = "0.4s";
settingst1cont0c1.style.justifyContent = "center";
settingst1cont0c1.style.justifyItems = "center";
settingst1cont0c1.style.alignItems = "center";
settingst1cont0c1.style.alignContent = "center";
settingst1cont0c1.style.overflow = "hidden";
settingst1cont0c1.style.WebkitBackdropFilter = "blur(90px)";
settingst1cont0c1.style.backdropFilter = "blur(90px)";
settingst1cont0c.appendChild(settingst1cont0c1);

const settingst1cont0c100 = document.createElement("div");
settingst1cont0c100.style.display = "flex";
settingst1cont0c100.style.flexDirection = "column";
settingst1cont0c100.style.width = "50%";
settingst1cont0c100.style.height = "450px";
settingst1cont0c100.style.position = "relative";
// settingst1cont0c100.style.marginTop = "10px";
// settingst1cont0c100.style.marginBottom = "10px";
// settingst1cont0c100.style.marginRight = "20px";
// settingst1cont0c100.style.marginLeft = "20px";
// settingst1cont0c100.style.borderRadius = "13px";
// settingst1cont0c100.style.background = "rgba(0, 255, 0, 0.43)";
// settingcontt100.style.border = "2px solid rgba(255, 255, 255, 0.08)";
settingst1cont0c100.style.transition = "0.4s";
settingst1cont0c100.style.justifyContent = "center";
settingst1cont0c100.style.justifyItems = "center";
settingst1cont0c100.style.alignItems = "center";
settingst1cont0c100.style.alignContent = "center";
settingst1cont0c100.style.overflow = "hidden";
// settingst1cont0c100.style.WebkitBackdropFilter = "blur(90px)";
// settingst1cont0c100.style.backdropFilter = "blur(90px)";
settingst1cont0c1.appendChild(settingst1cont0c100);


const settingst1cont0c1000 = document.createElement("div");
settingst1cont0c1000.style.width = "2px";
settingst1cont0c1000.style.height = "80%";
settingst1cont0c1000.style.borderRadius = "999px";
settingst1cont0c1000.style.transition = "0.4s";
settingst1cont0c1000.style.background = "rgb(62, 62, 62)";
settingst1cont0c1.appendChild(settingst1cont0c1000);

const settingst1cont0c100000 = document.createElement("div");
settingst1cont0c100000.style.display = "flex";
settingst1cont0c100000.style.flexDirection = "column";
settingst1cont0c100000.style.width = "50%";
settingst1cont0c100000.style.height = "450px";
settingst1cont0c100000.style.position = "relative";
// settingst1cont0c100.style.marginTop = "10px";
// settingst1cont0c100.style.marginBottom = "10px";
// settingst1cont0c100.style.marginRight = "20px";
// settingst1cont0c100.style.marginLeft = "20px";
// settingst1cont0c100.style.borderRadius = "13px";
// settingst1cont0c100.style.background = "rgba(0, 255, 0, 0.43)";
// settingcontt100.style.border = "2px solid rgba(255, 255, 255, 0.08)";
settingst1cont0c100000.style.transition = "0.4s";
settingst1cont0c100000.style.justifyContent = "center";
settingst1cont0c100000.style.justifyItems = "center";
settingst1cont0c100000.style.alignItems = "center";
settingst1cont0c100000.style.alignContent = "center";
settingst1cont0c100000.style.overflow = "hidden";
// settingst1cont0c100.style.WebkitBackdropFilter = "blur(90px)";
// settingst1cont0c100.style.backdropFilter = "blur(90px)";
settingst1cont0c1.appendChild(settingst1cont0c100000);
