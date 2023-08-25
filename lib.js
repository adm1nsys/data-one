const jqueryScript = document.createElement("script");
jqueryScript.src = BASE_URL + "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js";
document.head.appendChild(jqueryScript);

const prismCSS = document.createElement("link");
prismCSS.rel = "stylesheet";
prismCSS.href = BASE_URL + "https://cdnjs.cloudflare.com/ajax/libs/prism/1.25.0/themes/prism.min.css";
document.head.appendChild(prismCSS);

const prismScript = document.createElement("script");
prismScript.src = BASE_URL + "https://cdnjs.cloudflare.com/ajax/libs/prism/1.25.0/prism.min.js";
document.head.appendChild(prismScript);
