let ThemeWeb = "dark";
let DevMode = "1";
let InterfaceMode = "Left Bumble";
let Player = "XPhone lite";
let PhoneColor = "White";
let UsedPromo1 = "false";
let UsedPromo2 = "false";
let UsedPromo3 = "false";
let UsedPromo4 = "false";
let UsedPromo5 = "false";
let UsedPromo6 = "false";
let UsedPromo7 = "false";
let CustomTheme = "false";
let BgColor = "black";
let AinLogo = "white";
let SinLogo = "white";
let SinLogoBorder = "black";
let ActiveIconBG = "white";
let ActiveIconColor = "black";
let inActiveIconBG = "black";
let inActiveIconColor = "white";
let Cursor = "Standart"; 
let ActivePage = "Home"; 
let email = localStorage.getItem("email") || "";
let password = localStorage.getItem("password") || "";
let ProfileActive = "n";
let PlayerActive = "n";
let MusicQuality = "High"; 
let Font1 = "Roboto-Bold"; 
let Font2 = "Noto Sans SemiBold"; 
let lscreen = 1;
let sitevers = "Developer Beta V1.3"; 
let isonserver = 1; 
let BASE_URL = "https://administrati0n.github.io/data-one/";
function isonservercheck() {
if(isonserver === 1){
let BASE_URL = "https://administrati0n.github.io/data-one/";
}else if (isonserver === 0) {
let BASE_URL = "";
}
}
isonservercheck()
// let  = ""; 