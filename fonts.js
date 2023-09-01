const fontsRoboto = [
  "Bold", "BoldItalic", "Italic", "Light", "LightItalic", "Medium", "MediumItalic", 
  "Regular", "Thin", "ThinItalic", "Black", "BlackItalic"
];

const fontsNotoSans = [
  "Thin", "Light", "Regular", "Medium", "SemiBold", "Bold", "ExtraBold", "Black", 
  "Italic", "LightItalic", "MediumItalic", "SemiBoldItalic", "BoldItalic", 
  "ExtraBoldItalic", "BlackItalic", "Condensed", "CondensedBold", "CondensedExtraBold"
];

let fontStyles = "<style type='text/css'>";

// Генерация блока для Roboto
fontsRoboto.forEach(font => {
  fontStyles += `
@font-face {
  font-family: "Roboto-${font}";
  src: url('All Fonts/Roboto/Roboto-${font}.ttf');
}
  `;
});

// Генерация блока для Noto Sans
fontsNotoSans.forEach(font => {
  fontStyles += `
@font-face {
  font-family: "Noto Sans ${font}";
  src: url('All Fonts/Noto_Sans/NotoSans-${font}.ttf');
}
  `;
});

fontStyles += "</style>";
document.head.insertAdjacentHTML('beforeend', fontStyles);
