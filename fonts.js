const fontStyles = `
  <style type="text/css">
    @font-face {
      font-family: Gilroy;
      src: url('All Fonts/Font2.ttf');
    }
    @font-face {
      font-family: "SF Pro Semibold Rails";
      src: url('SF Pro - Semibold Rails.otf');
    }
    @font-face {
      font-family: "SF Pro Display Medium";
      src: url('SF-Pro-Display-Medium.otf');
    }
    -webkit-touch-callout: none;
-webkit-user-select: none;
-khtml-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
  </style>
`;



document.head.insertAdjacentHTML('beforeend', fontStyles);
