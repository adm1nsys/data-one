// Создаем элементы
const phone = document.createElement('div');
phone.style.width = '300px';
phone.style.display = 'flex';
phone.style.height = '617px';
phone.style.left = '100px';
phone.style.bottom = '-1000px';
phone.style.position = 'fixed';
phone.style.transition = '1s';
phone.style.zIndex = '9999';
phone.style.transformStyle = 'preserve-3d';
phone.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg)';

document.body.appendChild(phone);


const phc = document.createElement('div');
phc.style.transformStyle = 'preserve-3d';
phc.style.position = 'absolute';
phone.appendChild(phc);

const phr = document.createElement('div');
phr.style.width = "30px";
phr.style.height = "501px";
phr.style.background = "linear-gradient(to right, rgb(64, 64, 64), rgb(12, 12, 12) 16.39%, rgb(11, 11, 11) 50%, rgb(33, 33, 33) 81.93%, rgb(64, 64, 64))";
phr.style.transformStyle = 'preserve-3d';
phr.style.position = 'absolute';

phr.style.transform = 'translateY(57px) translateX(280px) translateZ(-14.5px) rotateY(-90deg) perspective(1000px)';
phone.appendChild(phr);

const phra = document.createElement('div');
phra.style.width = "15px";
phra.style.height = "90px";
phra.style.background = "black";
phra.style.borderRadius = "999px";
phra.style.top = "270px";
phra.style.left = "5px";
phra.style.position = "absolute";
phr.appendChild(phra);



const phr1 = document.createElement('div');
phr1.style.width = "30px";
phr1.style.height = "10px";
phr1.style.background = "linear-gradient(to right, rgb(64, 64, 64), rgb(12, 12, 12) 16.39%, rgb(11, 11, 11) 49.58%, rgb(33, 33, 33) 81.93%, rgb(64, 64, 64))";
phr1.style.transformStyle = 'preserve-3d';
phr1.style.position = 'absolute';

phr1.style.transform = 'translateY(40px) translateX(279.6px) translateZ(-14.5px) rotateY(-90deg) rotateX(-6deg) perspective(1000px)';
phc.appendChild(phr1);

const phr2 = document.createElement('div');
phr2.style.width = "30px";
phr2.style.height = "10px";
phr2.style.background = "linear-gradient(to right, rgb(64, 64, 64), rgb(12, 12, 12) 16.39%, rgb(11, 11, 11) 49.58%, rgb(33, 33, 33) 81.93%, rgb(64, 64, 64))";
phr2.style.transformStyle = 'preserve-3d';
phr2.style.position = 'absolute';

phr2.style.transform = 'translateY(31px) translateX(278px) translateZ(-14.5px) rotateY(-90deg) rotateX(-17deg) perspective(1000px)';
phc.appendChild(phr2);

const phr3 = document.createElement('div');
phr3.style.width = "30px";
phr3.style.height = "10px";
phr3.style.background = "linear-gradient(to right, rgb(64, 64, 64), rgb(12, 12, 12) 16.39%, rgb(11, 11, 11) 49.58%, rgb(33, 33, 33) 81.93%, rgb(64, 64, 64))";
phr3.style.transformStyle = 'preserve-3d';
phr3.style.position = 'absolute';

phr3.style.transform = 'translateY(23px) translateX(274.5px) translateZ(-14.5px) rotateY(-90deg) rotateX(-30deg) perspective(1000px)';
phc.appendChild(phr3);

const phr4 = document.createElement('div');
phr4.style.width = "30px";
phr4.style.height = "10px";
phr4.style.background = "linear-gradient(to right, rgb(64, 64, 64), rgb(12, 12, 12) 16.39%, rgb(11, 11, 11) 49.58%, rgb(33, 33, 33) 81.93%, rgb(64, 64, 64))";
phr4.style.transformStyle = 'preserve-3d';
phr4.style.position = 'absolute';

phr4.style.transform = 'translateY(15px) translateX(269.5px) translateZ(-14.5px) rotateY(-90deg) rotateX(-34deg) perspective(1000px)';
phc.appendChild(phr4);

const phr5 = document.createElement('div');
phr5.style.width = "30px";
phr5.style.height = "10px";
phr5.style.background = "linear-gradient(to right, rgb(64, 64, 64), rgb(12, 12, 12) 16.39%, rgb(11, 11, 11) 49.58%, rgb(33, 33, 33) 81.93%, rgb(64, 64, 64))";
phr5.style.transformStyle = 'preserve-3d';
phr5.style.position = 'absolute';

phr5.style.transform = 'translateY(8px) translateX(263.5px) translateZ(-14.5px) rotateY(-90deg) rotateX(-47deg) perspective(1000px)';
phc.appendChild(phr5);

const phr6 = document.createElement('div');
phr6.style.width = "30px";
phr6.style.height = "10px";
phr6.style.background = "linear-gradient(to right, rgb(64, 64, 64), rgb(12, 12, 12) 16.39%, rgb(11, 11, 11) 49.58%, rgb(33, 33, 33) 81.93%, rgb(64, 64, 64))";
phr6.style.transformStyle = 'preserve-3d';
phr6.style.position = 'absolute';

phr6.style.transform = 'translateY(2.5px) translateX(256.5px) translateZ(-14.5px) rotateY(-90deg) rotateX(-57deg) perspective(1000px)';
phc.appendChild(phr6);

const phr7 = document.createElement('div');
phr7.style.width = "30px";
phr7.style.height = "10px";
phr7.style.background = "linear-gradient(to right, rgb(64, 64, 64), rgb(12, 12, 12) 16.39%, rgb(11, 11, 11) 49.58%, rgb(33, 33, 33) 81.93%, rgb(64, 64, 64))";
phr7.style.transformStyle = 'preserve-3d';
phr7.style.position = 'absolute';

phr7.style.transform = 'translateY(-1.5px) translateX(248.5px) translateZ(-14.5px) rotateY(-90deg) rotateX(-69deg) perspective(1000px)';
phc.appendChild(phr7);

const phr8 = document.createElement('div');
phr8.style.width = "30px";
phr8.style.height = "10px";
phr8.style.background = "linear-gradient(to right, rgb(64, 64, 64), rgb(12, 12, 12) 16.39%, rgb(11, 11, 11) 49.58%, rgb(33, 33, 33) 81.93%, rgb(64, 64, 64))";
phr8.style.transformStyle = 'preserve-3d';
phr8.style.position = 'absolute';

phr8.style.transform = 'translateY(-4px) translateX(240px) translateZ(-14.5px) rotateY(-90deg) rotateX(-79deg) perspective(1000px)';
phc.appendChild(phr8);

const phr9 = document.createElement('div');
phr9.style.width = "30px";
phr9.style.height = "6px";
phr9.style.background = "linear-gradient(to right, rgb(64, 64, 64), rgb(12, 12, 12) 16.39%, rgb(11, 11, 11) 49.58%, rgb(33, 33, 33) 81.93%, rgb(64, 64, 64))";
phr9.style.transformStyle = 'preserve-3d';
phr9.style.position = 'absolute';

phr9.style.transform = 'translateY(-3px) translateX(233px) translateZ(-14.5px) rotateY(-90deg) rotateX(-88deg) perspective(1000px)';
phc.appendChild(phr9);

const phcCopy = phc.cloneNode(true);
phone.appendChild(phcCopy);

// Пример преобразования: вращение по оси Y
phcCopy.style.transform += 'rotateZ(-90deg) translateX(-294.9px) translateY(5px) translateZ(0px)';

const phcCopy2 = phc.cloneNode(true);
const phcCopy3 = phc.cloneNode(true);

phone.appendChild(phcCopy2);
phone.appendChild(phcCopy3);

// Пример преобразования: вращение по оси Y
phcCopy2.style.transform += 'rotateY(180deg) rotateZ(90deg) translateX(320px) translateY(5px) translateZ(29px)';
phcCopy3.style.transform += 'rotateY(0deg) rotateZ(90deg) translateX(320px) translateY(-295px) translateZ(0px)';


const phr10 = document.createElement('div');
phr10.style.width = "30px";
phr10.style.height = "9px";
phr10.style.background = "linear-gradient(to right, rgb(85, 84, 84), rgb(46, 46, 46) 16.39%, rgb(0, 0, 0) 44.96%, rgb(33, 33, 33) 74.37%, rgb(85, 84, 84) 92.93%)";
phr10.style.transformStyle = 'preserve-3d';
phr10.style.position = 'absolute';

phr10.style.transform = 'translateY(49px) translateX(280px) translateZ(-14.5px) rotateY(-90deg) perspective(1000px)';
phone.appendChild(phr10);


const phr11 = document.createElement('div');
phr11.style.width = "30px";
phr11.style.height = "9px";
phr11.style.background = "linear-gradient(to right, rgb(85, 84, 84), rgb(46, 46, 46) 16.39%, rgb(0, 0, 0) 44.96%, rgb(33, 33, 33) 74.37%, rgb(85, 84, 84) 92.93%)";
phr11.style.transformStyle = 'preserve-3d';
phr11.style.position = 'absolute';

phr11.style.transform = 'translateY(557px) translateX(280px) translateZ(-14.5px) rotateY(-90deg) perspective(1000px)';
phone.appendChild(phr11);

const phr12 = document.createElement('div');
phr12.style.width = "30px";
phr12.style.height = "501px";
phr12.style.background = "linear-gradient(to right, rgb(64, 64, 64), rgb(12, 12, 12) 16.39%, rgb(11, 11, 11) 49.58%, rgb(33, 33, 33) 81.93%, rgb(64, 64, 64))";
phr12.style.transformStyle = 'preserve-3d';
phr12.style.position = 'absolute';

phr12.style.transform = 'translateY(57px) translateX(-10px) translateZ(-14.5px) rotateY(-90deg) perspective(1000px)';
phone.appendChild(phr12);

const phr13 = document.createElement('div');
phr13.style.width = "30px";
phr13.style.height = "9px";
phr13.style.background = "linear-gradient(to right, rgb(85, 84, 84), rgb(46, 46, 46) 16.39%, rgb(0, 0, 0) 44.96%, rgb(33, 33, 33) 74.37%, rgb(85, 84, 84) 92.93%)";
phr13.style.transformStyle = 'preserve-3d';
phr13.style.position = 'absolute';

phr13.style.transform = 'translateY(49px) translateX(-10px) translateZ(-14.5px) rotateY(-90deg) perspective(1000px)';
phone.appendChild(phr13);


const phr14 = document.createElement('div');
phr14.style.width = "30px";
phr14.style.height = "9px";
phr14.style.background = "linear-gradient(to right, rgb(85, 84, 84), rgb(46, 46, 46) 16.39%, rgb(0, 0, 0) 44.96%, rgb(33, 33, 33) 74.37%, rgb(85, 84, 84) 92.93%)";
phr14.style.transformStyle = 'preserve-3d';
phr14.style.position = 'absolute';

phr14.style.transform = 'translateY(557px) translateX(-10px) translateZ(-14.5px) rotateY(-90deg) perspective(1000px)';
phone.appendChild(phr14);

const phr15 = document.createElement('div');
phr15.style.width = "30px";
phr15.style.height = "185px";
phr15.style.background = "linear-gradient(to right, rgb(64, 64, 64), rgb(12, 12, 12) 16.39%, rgb(11, 11, 11) 49.58%, rgb(33, 33, 33) 81.93%, rgb(64, 64, 64))";
phr15.style.transformStyle = 'preserve-3d';
phr15.style.position = 'absolute';

phr15.style.transform = 'translateY(-92.5px) translateX(130px) translateZ(-14.5px) rotateY(-90deg) rotateX(90deg) perspective(1000px)';
phone.appendChild(phr15);

const phr16 = document.createElement('div');
phr16.style.width = "30px";
phr16.style.height = "9px";
phr16.style.background = "linear-gradient(to right, rgb(85, 84, 84), rgb(46, 46, 46) 16.39%, rgb(0, 0, 0) 44.96%, rgb(33, 33, 33) 74.37%, rgb(85, 84, 84) 92.93%)";
phr16.style.transformStyle = 'preserve-3d';
phr16.style.position = 'absolute';

phr16.style.transform = 'translateY(-4.5px) translateX(227px) translateZ(-14.5px) rotateY(-90deg) rotateX(-90deg)  perspective(1000px)';
phone.appendChild(phr16);

const phr17 = document.createElement('div');
phr17.style.width = "30px";
phr17.style.height = "9px";
phr17.style.background = "linear-gradient(to right, rgb(85, 84, 84), rgb(46, 46, 46) 16.39%, rgb(0, 0, 0) 44.96%, rgb(33, 33, 33) 74.37%, rgb(85, 84, 84) 92.93%)";
phr17.style.transformStyle = 'preserve-3d';
phr17.style.position = 'absolute';

phr17.style.transform = 'translateY(610px) translateX(43px) translateZ(-14.5px) rotateY(-90deg) rotateX(-90deg) perspective(1000px)';
phone.appendChild(phr17);

const phr18 = document.createElement('div');
phr18.style.width = "30px";
phr18.style.height = "185px";
phr18.style.background = "linear-gradient(to right, rgb(64, 64, 64), rgb(12, 12, 12) 16.39%, rgb(11, 11, 11) 49.58%, rgb(33, 33, 33) 81.93%, rgb(64, 64, 64))";
phr18.style.transformStyle = 'preserve-3d';
phr18.style.position = 'absolute';

phr18.style.transform = 'translateY(521.5px) translateX(138px) translateZ(-14.5px) rotateY(-90deg) rotateX(90deg) perspective(1000px)';
phone.appendChild(phr18);

const phr018 = document.createElement('div');
phr018.style.width = "17px";
phr018.style.height = "50px";
phr018.style.background = "black";
phr018.style.position = 'absolute';
phr018.style.top = '67px';
phr018.style.left = '7px';
phr018.style.borderRadius = '999px';
phr18.appendChild(phr018);

const phr0181 = document.createElement('div');
phr0181.style.width = "13px";
phr0181.style.height = "46px";
phr0181.style.background = "none";
phr0181.style.border = "1px solid rgb(124, 124, 124)";
phr0181.style.position = 'absolute';
phr0181.style.top = '1px';
phr0181.style.left = '1px';
phr0181.style.borderRadius = '999px';
phr018.appendChild(phr0181);

const phr0182 = document.createElement('div');
phr0182.style.width = "7px";
phr0182.style.height = "29px";
phr0182.style.background = "rgb(124, 124, 124)";
phr0182.style.boxShadow = '1px 1px 1px rgb(0, 0, 0) inset, -1px -1px 1px rgb(0, 0, 0) inset, -1px 1px 1px rgb(0, 0, 0) inset, 1px -1px 1px rgb(0, 0, 0) inset, 2px 2px 1px rgb(106, 106, 106) inset, -2px -2px 1px rgb(68, 68, 68) inset, -2px 2px 1px rgb(93, 93, 93) inset, 2px -2px 1px rgb(68, 68, 68) inset';
phr0182.style.position = 'absolute';
phr0182.style.top = '10px';
phr0182.style.left = '5px';
phr0182.style.borderRadius = '999px';
phr018.appendChild(phr0182);


const phr00183 = document.createElement('div');
phr00183.style.position = 'absolute';
phr00183.style.top = '1px';
phr00183.style.left = '0px';
phr18.appendChild(phr00183);

const phr0183 = document.createElement('div');
phr0183.style.width = "5px";
phr0183.style.height = "5px";
phr0183.style.background = "black";
phr0183.style.position = 'absolute';
phr0183.style.top = '5px';
phr0183.style.left = '12px';
phr0183.style.borderRadius = '999px';
phr00183.appendChild(phr0183);

const phr0184 = document.createElement('div');
phr0184.style.width = "5px";
phr0184.style.height = "5px";
phr0184.style.background = "black";
phr0184.style.position = 'absolute';
phr0184.style.top = '13px';
phr0184.style.left = '12px';
phr0184.style.borderRadius = '999px';
phr00183.appendChild(phr0184);

const phr0185 = document.createElement('div');
phr0185.style.width = "5px";
phr0185.style.height = "5px";
phr0185.style.background = "black";
phr0185.style.position = 'absolute';
phr0185.style.top = '21px';
phr0185.style.left = '12px';
phr0185.style.borderRadius = '999px';
phr00183.appendChild(phr0185);

const phr0186 = document.createElement('div');
phr0186.style.width = "5px";
phr0186.style.height = "5px";
phr0186.style.background = "black";
phr0186.style.position = 'absolute';
phr0186.style.top = '17px';
phr0186.style.left = '6px';
phr0186.style.borderRadius = '999px';
phr00183.appendChild(phr0186);

const phr0187 = document.createElement('div');
phr0187.style.width = "5px";
phr0187.style.height = "5px";
phr0187.style.background = "black";
phr0187.style.position = 'absolute';
phr0187.style.top = '17px';
phr0187.style.left = '18px';
phr0187.style.borderRadius = '999px';
phr00183.appendChild(phr0187);

const phr0188 = document.createElement('div');
phr0188.style.width = "5px";
phr0188.style.height = "5px";
phr0188.style.background = "black";
phr0188.style.position = 'absolute';
phr0188.style.top = '9px';
phr0188.style.left = '6px';
phr0188.style.borderRadius = '999px';
phr00183.appendChild(phr0188);

const phr0189 = document.createElement('div');
phr0189.style.width = "5px";
phr0189.style.height = "5px";
phr0189.style.background = "black";
phr0189.style.position = 'absolute';
phr0189.style.top = '9px';
phr0189.style.left = '18px';
phr0189.style.borderRadius = '999px';
phr00183.appendChild(phr0189);

const phr01890 = document.createElement('div');
phr01890.style.width = "5px";
phr01890.style.height = "5px";
phr01890.style.background = "black";
phr01890.style.position = 'absolute';
phr01890.style.top = '25px';
phr01890.style.left = '18px';
phr01890.style.borderRadius = '999px';
phr00183.appendChild(phr01890);

const phr01891 = document.createElement('div');
phr01891.style.width = "5px";
phr01891.style.height = "5px";
phr01891.style.background = "black";
phr01891.style.position = 'absolute';
phr01891.style.top = '33px';
phr01891.style.left = '18px';
phr01891.style.borderRadius = '999px';
phr00183.appendChild(phr01891);

const phr01892 = document.createElement('div');
phr01892.style.width = "5px";
phr01892.style.height = "5px";
phr01892.style.background = "black";
phr01892.style.position = 'absolute';
phr01892.style.top = '41px';
phr01892.style.left = '18px';
phr01892.style.borderRadius = '999px';
phr00183.appendChild(phr01892);

const phr01893 = document.createElement('div');
phr01893.style.width = "5px";
phr01893.style.height = "5px";
phr01893.style.background = "black";
phr01893.style.position = 'absolute';
phr01893.style.top = '29px';
phr01893.style.left = '12px';
phr01893.style.borderRadius = '999px';
phr00183.appendChild(phr01893);

const phr01894 = document.createElement('div');
phr01894.style.width = "5px";
phr01894.style.height = "5px";
phr01894.style.background = "black";
phr01894.style.position = 'absolute';
phr01894.style.top = '37px';
phr01894.style.left = '12px';
phr01894.style.borderRadius = '999px';
phr00183.appendChild(phr01894);

const phr01895 = document.createElement('div');
phr01895.style.width = "5px";
phr01895.style.height = "5px";
phr01895.style.background = "black";
phr01895.style.position = 'absolute';
phr01895.style.top = '45px';
phr01895.style.left = '12px';
phr01895.style.borderRadius = '999px';
phr00183.appendChild(phr01895);

const phr01896 = document.createElement('div');
phr01896.style.width = "5px";
phr01896.style.height = "5px";
phr01896.style.background = "black";
phr01896.style.position = 'absolute';
phr01896.style.top = '25px';
phr01896.style.left = '6px';
phr01896.style.borderRadius = '999px';
phr00183.appendChild(phr01896);

const phr01897 = document.createElement('div');
phr01897.style.width = "5px";
phr01897.style.height = "5px";
phr01897.style.background = "black";
phr01897.style.position = 'absolute';
phr01897.style.top = '33px';
phr01897.style.left = '6px';
phr01897.style.borderRadius = '999px';
phr00183.appendChild(phr01897);

const phr01898 = document.createElement('div');
phr01898.style.width = "5px";
phr01898.style.height = "5px";
phr01898.style.background = "black";
phr01898.style.position = 'absolute';
phr01898.style.top = '41px';
phr01898.style.left = '6px';
phr01898.style.borderRadius = '999px';
phr00183.appendChild(phr01898);

const phcCopy00183 = phr00183.cloneNode(true);
phcCopy00183.style.position = "absolute";
phcCopy00183.style.top = "128px";
phcCopy00183.style.left = "0px";
phr18.appendChild(phcCopy00183);



const phcCopy0018310 = phr00183.cloneNode(true);
phcCopy0018310.style.position = "absolute";
phcCopy0018310.style.top = "120px";
phcCopy0018310.style.left = "0px";
phr15.appendChild(phcCopy0018310);

const phcCopy0018311 = phr00183.cloneNode(true);
phcCopy0018311.style.position = "absolute";
phcCopy0018311.style.top = "88px";
phcCopy0018311.style.left = "0px";
phr15.appendChild(phcCopy0018311);

const phcCopy0018312 = phr00183.cloneNode(true);
phcCopy0018312.style.position = "absolute";
phcCopy0018312.style.top = "48px";
phcCopy0018312.style.left = "0px";
phr15.appendChild(phcCopy0018312);

const phcCopy0018313 = phr00183.cloneNode(true);
phcCopy0018313.style.position = "absolute";
phcCopy0018313.style.top = "7px";
phcCopy0018313.style.left = "0px";
phr15.appendChild(phcCopy0018313);






const phr19 = document.createElement('div');
phr19.style.width = "290px";
phr19.style.height = "615px";
phr19.style.left = "5px";
phr19.style.overflow = "hidden";
phr19.style.boxShadow = "rgb(66, 66, 66) 1px 1px 1px inset, rgb(66, 66, 66) -1px -1px 1px inset, rgb(66, 66, 66) -1px 1px 1px inset, rgb(66, 66, 66) 1px -1px 1px inset, rgb(0, 0, 0) 2px 2px 1px inset, rgb(0, 0, 0) -2px -2px 1px inset, rgb(0, 0, 0) -2px 2px 1px inset, rgb(0, 0, 0) 2px -2px 1px inset";
phr19.style.background = "linear-gradient(0deg, rgba(0, 0, 0, 0.23) 0%, rgba(0, 0, 0, 0.23) 100%), radial-gradient(105.23% 132.62% at 2.57% -2.70%, rgba(192, 192, 192, 0.21) 0%, rgba(172, 172, 172, 0.14) 64.49%, rgba(134, 134, 134, 0.00) 100%), #000";
phr19.style.transformStyle = 'preserve-3d';
phr19.style.position = 'absolute';
phr19.style.borderRadius = '50px';

phr19.style.transform = 'translateZ(-28.5px)';
phone.appendChild(phr19);



const phrasl = document.createElement('div');
phrasl.style.width = "90px";
phrasl.style.height = "90px";
phrasl.style.left = "100px";
phrasl.style.overflow = "hidden";
// phrasl.style.background = "url('asl.png')";
loadImage('asl.png', phrasl);
phrasl.style.transformStyle = 'preserve-3d';
phrasl.style.backgroundSize = 'contain';
phrasl.style.backgroundRepeat = 'no-repeat';
phrasl.style.position = 'absolute';
phrasl.style.top = '262.5px';
phrasl.style.backgroundPosition = 'center';

phrasl.style.mixBlendMode = 'lighten';

phrasl.style.opacity = '0.1';


phrasl.style.transition = '0.5s';

phrasl.style.transform = 'rotateY(180deg)';
phr19.appendChild(phrasl);


phrasl.addEventListener("click", function() {

if(phrasl.style.opacity === '0.1'){
  phrasl.style.opacity = '1';
}else{
  phrasl.style.opacity = '0.1';
}

});


const phrasltitle = document.createElement('div');
phrasltitle.style.width = "100%";
phrasltitle.style.fontSize = "10px";
phrasltitle.style.fontFamily = "Roboto-Bold";
// phrasltitle.style.height = "90px";
phrasltitle.style.textAlign = "center";
phrasltitle.style.overflow = "hidden";
phrasltitle.textContent = "Designed by Admin inc.";
phrasltitle.style.color = "white";
phrasltitle.style.transformStyle = 'preserve-3d';
phrasltitle.style.backgroundSize = 'contain';
phrasltitle.style.backgroundRepeat = 'no-repeat';
phrasltitle.style.position = 'absolute';
phrasltitle.style.bottom = '70px';
phrasltitle.style.backgroundPosition = 'center';

phrasltitle.style.mixBlendMode = 'lighten';

phrasltitle.style.opacity = '0.1';


phrasltitle.style.transition = '0.5s';

phrasltitle.style.transform = 'rotateY(180deg)';
phr19.appendChild(phrasltitle);



const phrasltitle1 = document.createElement('div');
phrasltitle1.style.width = "100%";
phrasltitle1.style.fontSize = "10px";
phrasltitle1.style.fontFamily = "Roboto-Bold";
// phrasltitle1.style.height = "90px";
phrasltitle1.style.textAlign = "center";
phrasltitle1.style.overflow = "hidden";
phrasltitle1.style.color = "white";
phrasltitle1.style.transformStyle = 'preserve-3d';
phrasltitle1.style.backgroundSize = 'contain';
phrasltitle1.style.backgroundRepeat = 'no-repeat';
phrasltitle1.style.position = 'absolute';
phrasltitle1.style.bottom = '60px';
phrasltitle1.style.backgroundPosition = 'center';
phrasltitle1.style.mixBlendMode = 'lighten';
phrasltitle1.style.opacity = '0.1';
phrasltitle1.style.transition = '0.5s';
phrasltitle1.style.transform = 'rotateY(180deg)';

// Функция для получения текущего года
function getCurrentYear() {
  const now = new Date();
  return now.getFullYear();
}

// Обновление текста надписи с текущим годом
function updateYear() {
  const currentYear = getCurrentYear();
  phrasltitle1.textContent = `Exclusive Use License for AS 2020 - ${currentYear}`;
}

// Вызов функции для первоначального обновления надписи
updateYear();

// Обновление года каждую минуту (можно изменить периодичность обновления)
setInterval(updateYear, 60000); // Обновлять каждую минуту (60 000 миллисекунд)

phr19.appendChild(phrasltitle1);


function generateSerialNumber() {
  const characters = '0123456789';
  const serialLength = 15; // Вы можете изменить длину серийного номера, если необходимо
  let serialNumber = '';

  for (let i = 0; i < serialLength; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    serialNumber += characters[randomIndex];
  }

  // Добавим дефисы для более удобного чтения, например, "123-456-789-012-345"
  const formattedSerialNumber = serialNumber.replace(/(.{3})(?=.)/g, '$1-');

  return formattedSerialNumber;
}

// Пример использования
const randomSerialNumber = generateSerialNumber();
// console.log(randomSerialNumber); // Например, "123-456-789-012-345"



const phrasltitle2 = document.createElement('div');
phrasltitle2.style.width = "100%";
phrasltitle2.style.fontSize = "10px";
phrasltitle2.style.fontFamily = "Roboto-Bold";
phrasltitle2.textContent = "Serial Number: " + randomSerialNumber;
phrasltitle2.style.textAlign = "center";
phrasltitle2.style.overflow = "hidden";
phrasltitle2.style.color = "white";
phrasltitle2.style.transformStyle = 'preserve-3d';
phrasltitle2.style.backgroundSize = 'contain';
phrasltitle2.style.backgroundRepeat = 'no-repeat';
phrasltitle2.style.position = 'absolute';
phrasltitle2.style.bottom = '50px';
phrasltitle2.style.backgroundPosition = 'center';
phrasltitle2.style.mixBlendMode = 'lighten';
phrasltitle2.style.opacity = '0.1';
phrasltitle2.style.transition = '0.5s';
phrasltitle2.style.transform = 'rotateY(180deg)';
phr19.appendChild(phrasltitle2);





const phr19000 = document.createElement('div');
phr19000.style.width = "15px";
phr19000.style.height = "70px";
phr19000.style.background = "rgb(157, 157, 157)";
phr19000.style.transformStyle = 'preserve-3d';
phr19000.style.position = 'absolute';
phr19000.style.borderRadius = '0px';

phr19000.style.transform = 'translateZ(-33.7px) translateY(50px) translateX(12.7px) rotateY(90deg)';
phone.appendChild(phr19000);


const phr190001 = document.createElement('div');
phr190001.style.width = "15px";
phr190001.style.height = "70px";
phr190001.style.background = "rgb(157, 157, 157)";
phr190001.style.transformStyle = 'preserve-3d';
phr190001.style.position = 'absolute';
phr190001.style.borderRadius = '0px';

phr190001.style.transform = 'translateZ(-33.7px) translateY(50px) translateX(272.3px) rotateY(-90deg)';
phone.appendChild(phr190001);

const phr190002 = document.createElement('div');
phr190002.style.width = "15px";
phr190002.style.height = "190px";
phr190002.style.background = "rgb(157, 157, 157)";
phr190002.style.transformStyle = 'preserve-3d';
phr190002.style.position = 'absolute';
phr190002.style.borderRadius = '0px';

phr190002.style.transform = 'translateZ(-33.7px) translateY(59.7px) translateX(141px) rotateY(0deg) rotateX(90deg) rotateZ(-90deg)';
phone.appendChild(phr190002);

const phr190003 = document.createElement('div');
phr190003.style.width = "15px";
phr190003.style.height = "190px";
phr190003.style.background = "rgb(157, 157, 157)";
phr190003.style.transformStyle = 'preserve-3d';
phr190003.style.position = 'absolute';
phr190003.style.borderRadius = '0px';

phr190003.style.transform = 'translateZ(-33.7px) translateY(-79.5px) translateX(141px) rotateY(0deg) rotateX(-90deg) rotateZ(-90deg)';
phone.appendChild(phr190003);


const cphr19000x = document.createElement('div');
cphr19000x.style.transformStyle = 'preserve-3d';
cphr19000x.style.transform = 'translateZ(0px) translateY(0px) translateX(0px) rotateY(0deg) rotateX(0deg) rotateZ(0deg)';
phone.appendChild(cphr19000x);


const phr190004 = document.createElement('div');
phr190004.style.width = "15px";
phr190004.style.height = "10px";
phr190004.style.background = "rgb(157, 157, 157)";
phr190004.style.transformStyle = 'preserve-3d';
phr190004.style.position = 'absolute';
phr190004.style.borderRadius = '0px';

phr190004.style.transform = 'translateZ(-32.7px) translateY(119px) translateX(271.2px) rotateY(90deg) rotateX(-13deg) rotateZ(0deg)';
cphr19000x.appendChild(phr190004);

const phr190005 = document.createElement('div');
phr190005.style.width = "15px";
phr190005.style.height = "10px";
phr190005.style.background = "rgb(157, 157, 157)";
phr190005.style.transformStyle = 'preserve-3d';
phr190005.style.position = 'absolute';
phr190005.style.borderRadius = '0px';

phr190005.style.transform = 'translateZ(-32.7px) translateY(127.8px) translateX(268.1px) rotateY(90deg) rotateX(-26deg) rotateZ(0deg)';
cphr19000x.appendChild(phr190005);

const phr190006 = document.createElement('div');
phr190006.style.width = "15px";
phr190006.style.height = "10px";
phr190006.style.background = "rgb(157, 157, 157)";
phr190006.style.transformStyle = 'preserve-3d';
phr190006.style.position = 'absolute';
phr190006.style.borderRadius = '0px';

phr190006.style.transform = 'translateZ(-32.7px) translateY(135.8px) translateX(262.9px) rotateY(90deg) rotateX(-40deg) rotateZ(0deg)';
cphr19000x.appendChild(phr190006);

const phr190007 = document.createElement('div');
phr190007.style.width = "15px";
phr190007.style.height = "10px";
phr190007.style.background = "rgb(157, 157, 157)";
phr190007.style.transformStyle = 'preserve-3d';
phr190007.style.position = 'absolute';
phr190007.style.borderRadius = '0px';

phr190007.style.transform = 'translateZ(-32.7px) translateY(142.2px) translateX(256px) rotateY(90deg) rotateX(-54deg) rotateZ(0deg)';
cphr19000x.appendChild(phr190007);


const phr190008 = document.createElement('div');
phr190008.style.width = "15px";
phr190008.style.height = "10px";
phr190008.style.background = "rgb(157, 157, 157)";
phr190008.style.transformStyle = 'preserve-3d';
phr190008.style.position = 'absolute';
phr190008.style.borderRadius = '0px';

phr190008.style.transform = 'translateZ(-32.7px) translateY(146.5px) translateX(248.5px) rotateY(90deg) rotateX(-66deg) rotateZ(0deg)';
cphr19000x.appendChild(phr190008);


const phr190009 = document.createElement('div');
phr190009.style.width = "15px";
phr190009.style.height = "11px";
phr190009.style.background = "rgb(157, 157, 157)";
phr190009.style.transformStyle = 'preserve-3d';
phr190009.style.position = 'absolute';
phr190009.style.borderRadius = '0px';

phr190009.style.transform = 'translateZ(-32.7px) translateY(148.5px) translateX(239.7px) rotateY(90deg) rotateX(-81deg) rotateZ(0deg)';
cphr19000x.appendChild(phr190009);



const cphr19000x1 = document.createElement('div');
cphr19000x1.style.transformStyle = 'preserve-3d';
cphr19000x1.style.transform = 'translateZ(0px) translateY(-20.5px) translateX(442.3px) rotateY(0deg) rotateX(0deg) rotateZ(-92deg)';
phone.appendChild(cphr19000x1);


const phr1900041 = document.createElement('div');
phr1900041.style.width = "15px";
phr1900041.style.height = "10px";
phr1900041.style.background = "rgb(157, 157, 157)";
phr1900041.style.transformStyle = 'preserve-3d';
phr1900041.style.position = 'absolute';
phr1900041.style.borderRadius = '0px';

phr1900041.style.transform = 'translateZ(-32.7px) translateY(119px) translateX(271.2px) rotateY(90deg) rotateX(-13deg) rotateZ(0deg)';
cphr19000x1.appendChild(phr1900041);

const phr1900051 = document.createElement('div');
phr1900051.style.width = "15px";
phr1900051.style.height = "10px";
phr1900051.style.background = "rgb(157, 157, 157)";
phr1900051.style.transformStyle = 'preserve-3d';
phr1900051.style.position = 'absolute';
phr1900051.style.borderRadius = '0px';

phr1900051.style.transform = 'translateZ(-32.7px) translateY(127.8px) translateX(268.1px) rotateY(90deg) rotateX(-26deg) rotateZ(0deg)';
cphr19000x1.appendChild(phr1900051);

const phr1900061 = document.createElement('div');
phr1900061.style.width = "15px";
phr1900061.style.height = "10px";
phr1900061.style.background = "rgb(157, 157, 157)";
phr1900061.style.transformStyle = 'preserve-3d';
phr1900061.style.position = 'absolute';
phr1900061.style.borderRadius = '0px';

phr1900061.style.transform = 'translateZ(-32.7px) translateY(135.8px) translateX(262.9px) rotateY(90deg) rotateX(-40deg) rotateZ(0deg)';
cphr19000x1.appendChild(phr1900061);

const phr1900071 = document.createElement('div');
phr1900071.style.width = "15px";
phr1900071.style.height = "10px";
phr1900071.style.background = "rgb(157, 157, 157)";
phr1900071.style.transformStyle = 'preserve-3d';
phr1900071.style.position = 'absolute';
phr1900071.style.borderRadius = '0px';

phr1900071.style.transform = 'translateZ(-32.7px) translateY(142.2px) translateX(256px) rotateY(90deg) rotateX(-54deg) rotateZ(0deg)';
cphr19000x1.appendChild(phr1900071);


const phr1900081 = document.createElement('div');
phr1900081.style.width = "15px";
phr1900081.style.height = "10px";
phr1900081.style.background = "rgb(157, 157, 157)";
phr1900081.style.transformStyle = 'preserve-3d';
phr1900081.style.position = 'absolute';
phr1900081.style.borderRadius = '0px';

phr1900081.style.transform = 'translateZ(-32.7px) translateY(146.5px) translateX(248.5px) rotateY(90deg) rotateX(-66deg) rotateZ(0deg)';
cphr19000x1.appendChild(phr1900081);


const phr1900091 = document.createElement('div');
phr1900091.style.width = "15px";
phr1900091.style.height = "11px";
phr1900091.style.background = "rgb(157, 157, 157)";
phr1900091.style.transformStyle = 'preserve-3d';
phr1900091.style.position = 'absolute';
phr1900091.style.borderRadius = '0px';

phr1900091.style.transform = 'translateZ(-32.7px) translateY(148.5px) translateX(239.7px) rotateY(90deg) rotateX(-81deg) rotateZ(0deg)';
cphr19000x1.appendChild(phr1900091);











const cphr19000x2 = document.createElement('div');
cphr19000x2.style.transformStyle = 'preserve-3d';
cphr19000x2.style.transform = 'translateZ(0px) translateY(-459.1px) translateX(289.7px) rotateY(0deg) rotateX(0deg) rotateZ(-183deg)';
phone.appendChild(cphr19000x2);


const phr1900042 = document.createElement('div');
phr1900042.style.width = "15px";
phr1900042.style.height = "10px";
phr1900042.style.background = "rgb(157, 157, 157)";
phr1900042.style.transformStyle = 'preserve-3d';
phr1900042.style.position = 'absolute';
phr1900042.style.borderRadius = '0px';

phr1900042.style.transform = 'translateZ(-32.7px) translateY(119px) translateX(271.2px) rotateY(90deg) rotateX(-13deg) rotateZ(0deg)';
cphr19000x2.appendChild(phr1900042);

const phr1900052 = document.createElement('div');
phr1900052.style.width = "15px";
phr1900052.style.height = "10px";
phr1900052.style.background = "rgb(157, 157, 157)";
phr1900052.style.transformStyle = 'preserve-3d';
phr1900052.style.position = 'absolute';
phr1900052.style.borderRadius = '0px';

phr1900052.style.transform = 'translateZ(-32.7px) translateY(127.8px) translateX(268.1px) rotateY(90deg) rotateX(-26deg) rotateZ(0deg)';
cphr19000x2.appendChild(phr1900052);

const phr1900062 = document.createElement('div');
phr1900062.style.width = "15px";
phr1900062.style.height = "10px";
phr1900062.style.background = "rgb(157, 157, 157)";
phr1900062.style.transformStyle = 'preserve-3d';
phr1900062.style.position = 'absolute';
phr1900062.style.borderRadius = '0px';

phr1900062.style.transform = 'translateZ(-32.7px) translateY(135.8px) translateX(262.9px) rotateY(90deg) rotateX(-40deg) rotateZ(0deg)';
cphr19000x2.appendChild(phr1900062);

const phr1900072 = document.createElement('div');
phr1900072.style.width = "15px";
phr1900072.style.height = "10px";
phr1900072.style.background = "rgb(157, 157, 157)";
phr1900072.style.transformStyle = 'preserve-3d';
phr1900072.style.position = 'absolute';
phr1900072.style.borderRadius = '0px';

phr1900072.style.transform = 'translateZ(-32.7px) translateY(142.2px) translateX(256px) rotateY(90deg) rotateX(-54deg) rotateZ(0deg)';
cphr19000x2.appendChild(phr1900072);


const phr1900082 = document.createElement('div');
phr1900082.style.width = "15px";
phr1900082.style.height = "10px";
phr1900082.style.background = "rgb(157, 157, 157)";
phr1900082.style.transformStyle = 'preserve-3d';
phr1900082.style.position = 'absolute';
phr1900082.style.borderRadius = '0px';

phr1900082.style.transform = 'translateZ(-32.7px) translateY(146.5px) translateX(248.5px) rotateY(90deg) rotateX(-66deg) rotateZ(0deg)';
cphr19000x2.appendChild(phr1900082);


const phr1900092 = document.createElement('div');
phr1900092.style.width = "15px";
phr1900092.style.height = "11px";
phr1900092.style.background = "rgb(157, 157, 157)";
phr1900092.style.transformStyle = 'preserve-3d';
phr1900092.style.position = 'absolute';
phr1900092.style.borderRadius = '0px';

phr1900092.style.transform = 'translateZ(-32.7px) translateY(148.5px) translateX(239.7px) rotateY(90deg) rotateX(-81deg) rotateZ(0deg)';
cphr19000x2.appendChild(phr1900092);













const cphr19000x3 = document.createElement('div');
cphr19000x3.style.transformStyle = 'preserve-3d';
cphr19000x3.style.transform = 'translateZ(-65.7px) translateY(-0.1px) translateX(300px) rotateY(180deg) rotateX(0deg) rotateZ(0deg)';
phone.appendChild(cphr19000x3);


const phr1900043 = document.createElement('div');
phr1900043.style.width = "15px";
phr1900043.style.height = "10px";
phr1900043.style.background = "rgb(157, 157, 157)";
phr1900043.style.transformStyle = 'preserve-3d';
phr1900043.style.position = 'absolute';
phr1900043.style.borderRadius = '0px';

phr1900043.style.transform = 'translateZ(-32.7px) translateY(119px) translateX(271.2px) rotateY(90deg) rotateX(-13deg) rotateZ(0deg)';
cphr19000x3.appendChild(phr1900043);

const phr1900053 = document.createElement('div');
phr1900053.style.width = "15px";
phr1900053.style.height = "10px";
phr1900053.style.background = "rgb(157, 157, 157)";
phr1900053.style.transformStyle = 'preserve-3d';
phr1900053.style.position = 'absolute';
phr1900053.style.borderRadius = '0px';

phr1900053.style.transform = 'translateZ(-32.7px) translateY(127.8px) translateX(268.1px) rotateY(90deg) rotateX(-26deg) rotateZ(0deg)';
cphr19000x3.appendChild(phr1900053);

const phr1900063 = document.createElement('div');
phr1900063.style.width = "15px";
phr1900063.style.height = "10px";
phr1900063.style.background = "rgb(157, 157, 157)";
phr1900063.style.transformStyle = 'preserve-3d';
phr1900063.style.position = 'absolute';
phr1900063.style.borderRadius = '0px';

phr1900063.style.transform = 'translateZ(-32.7px) translateY(135.8px) translateX(262.9px) rotateY(90deg) rotateX(-40deg) rotateZ(0deg)';
cphr19000x3.appendChild(phr1900063);

const phr1900073 = document.createElement('div');
phr1900073.style.width = "15px";
phr1900073.style.height = "10px";
phr1900073.style.background = "rgb(157, 157, 157)";
phr1900073.style.transformStyle = 'preserve-3d';
phr1900073.style.position = 'absolute';
phr1900073.style.borderRadius = '0px';

phr1900073.style.transform = 'translateZ(-32.7px) translateY(142.2px) translateX(256px) rotateY(90deg) rotateX(-54deg) rotateZ(0deg)';
cphr19000x3.appendChild(phr1900073);


const phr1900083 = document.createElement('div');
phr1900083.style.width = "15px";
phr1900083.style.height = "10px";
phr1900083.style.background = "rgb(157, 157, 157)";
phr1900083.style.transformStyle = 'preserve-3d';
phr1900083.style.position = 'absolute';
phr1900083.style.borderRadius = '0px';

phr1900083.style.transform = 'translateZ(-32.7px) translateY(146.5px) translateX(248.5px) rotateY(90deg) rotateX(-66deg) rotateZ(0deg)';
cphr19000x3.appendChild(phr1900083);


const phr1900093 = document.createElement('div');
phr1900093.style.width = "15px";
phr1900093.style.height = "11px";
phr1900093.style.background = "rgb(157, 157, 157)";
phr1900093.style.transformStyle = 'preserve-3d';
phr1900093.style.position = 'absolute';
phr1900093.style.borderRadius = '0px';

phr1900093.style.transform = 'translateZ(-32.7px) translateY(148.5px) translateX(239.7px) rotateY(90deg) rotateX(-81deg) rotateZ(0deg)';
cphr19000x3.appendChild(phr1900093);














const phr0camera = document.createElement('div');
phr0camera.style.transformStyle = 'preserve-3d';
// phr0camera.style.transform = 'translateZ(-45px) translateX(236px) translateY(20.5px) rotateY(90deg) rotateX(90deg)';
phone.appendChild(phr0camera);


const phr20 = document.createElement('div');
phr20.style.width = "10px";
phr20.style.height = "10px";
phr20.style.overflow = "hidden";
phr20.style.background = "linear-gradient(to top, rgba(31, 31, 31, 1), rgba(136, 136, 136, 1)), rgb(255, 255, 255)";
phr20.style.transformStyle = 'preserve-3d';
phr20.style.position = 'absolute';
phr20.style.borderRadius = '0px';

phr20.style.transform = 'translateZ(-45px) translateX(236px) translateY(20.5px) rotateY(90deg) rotateX(90deg)';
phr0camera.appendChild(phr20);


const phr21 = document.createElement('div');
phr21.style.width = "10px";
phr21.style.height = "10px";
phr21.style.overflow = "hidden";
phr21.style.background = "linear-gradient(to top, rgba(126, 126, 126, 1), rgba(178, 178, 178, 1)), rgb(255, 255, 255)";
phr21.style.transformStyle = 'preserve-3d';
phr21.style.position = 'absolute';
phr21.style.borderRadius = '0px';

phr21.style.transform = 'translateZ(-45px) translateX(227.5px) translateY(21.5px) rotateY(90deg) rotateX(105deg)';
phr0camera.appendChild(phr21);

const phr22 = document.createElement('div');
phr22.style.width = "10px";
phr22.style.height = "10px";
phr22.style.overflow = "hidden";
phr22.style.background = "linear-gradient(to top, rgba(180, 180, 180, 1), rgba(218, 218, 218, 1)), rgb(255, 255, 255)";
phr22.style.transformStyle = 'preserve-3d';
phr22.style.position = 'absolute';
phr22.style.borderRadius = '0px';

phr22.style.transform = 'translateZ(-45px) translateX(218.5px) translateY(25.5px) rotateY(90deg) rotateX(123deg)';
phr0camera.appendChild(phr22);

const phr23 = document.createElement('div');
phr23.style.width = "10px";
phr23.style.height = "10px";
phr23.style.overflow = "hidden";
phr23.style.background = "linear-gradient(to top, rgb(218, 218, 218), rgb(233, 233, 233)), rgb(255, 255, 255)";
phr23.style.transformStyle = 'preserve-3d';
phr23.style.position = 'absolute';
phr23.style.borderRadius = '0px';

phr23.style.transform = 'translateZ(-45px) translateX(211.3px) translateY(32px) rotateY(90deg) rotateX(143deg)';
phr0camera.appendChild(phr23);

const phr24 = document.createElement('div');
phr24.style.width = "10px";
phr24.style.height = "10px";
phr24.style.overflow = "hidden";
phr24.style.background = "linear-gradient(to top, rgb(229, 229, 229), rgb(233, 233, 233)), rgb(255, 255, 255)";
phr24.style.transformStyle = 'preserve-3d';
phr24.style.position = 'absolute';
phr24.style.borderRadius = '0px';

phr24.style.transform = 'translateZ(-45px) translateX(207px) translateY(40.5px) rotateY(90deg) rotateX(163deg)';
phr0camera.appendChild(phr24);

const phr25 = document.createElement('div');
phr25.style.width = "10px";
phr25.style.height = "10px";
phr25.style.overflow = "hidden";
phr25.style.background = "linear-gradient(to top, rgb(229, 229, 229), rgb(233, 233, 233)), rgb(255, 255, 255)";
phr25.style.transformStyle = 'preserve-3d';
phr25.style.position = 'absolute';
phr25.style.borderRadius = '0px';

phr25.style.transform = 'translateZ(-45px) translateX(205.5px) translateY(50px) rotateY(90deg) rotateX(180deg)';
phr0camera.appendChild(phr25);



const phr0camera1 = document.createElement('div');
phr0camera1.style.transformStyle = 'preserve-3d';
phr0camera1.style.transform = 'translateZ(0px) translateX(-13.5px) translateY(-493.4px) rotateY(0deg) rotateX(0deg) rotateZ(90deg)';
phone.appendChild(phr0camera1);


const phr200 = document.createElement('div');
phr200.style.width = "10px";
phr200.style.height = "10px";
phr200.style.overflow = "hidden";
phr200.style.background = "linear-gradient(to top, rgb(0, 0, 0), rgb(24, 24, 24)), rgb(255, 255, 255)";
phr200.style.transformStyle = 'preserve-3d';
phr200.style.position = 'absolute';
phr200.style.borderRadius = '0px';

phr200.style.transform = 'translateZ(-45px) translateX(236px) translateY(20.5px) rotateY(90deg) rotateX(88deg)';
phr0camera1.appendChild(phr200);


const phr210 = document.createElement('div');
phr210.style.width = "10px";
phr210.style.height = "10px";
phr210.style.overflow = "hidden";
phr210.style.background = "linear-gradient(to top, rgb(18, 18, 18), rgb(17, 17, 17)), rgb(255, 255, 255)";
phr210.style.transformStyle = 'preserve-3d';
phr210.style.position = 'absolute';
phr210.style.borderRadius = '0px';

phr210.style.transform = 'translateZ(-45px) translateX(227.5px) translateY(21.5px) rotateY(90deg) rotateX(105deg)';
phr0camera1.appendChild(phr210);

const phr220 = document.createElement('div');
phr220.style.width = "10px";
phr220.style.height = "10px";
phr220.style.overflow = "hidden";
phr220.style.background = "linear-gradient(to top, rgb(24, 24, 24), rgb(27, 27, 27)), rgb(255, 255, 255)";
phr220.style.transformStyle = 'preserve-3d';
phr220.style.position = 'absolute';
phr220.style.borderRadius = '0px';

phr220.style.transform = 'translateZ(-45px) translateX(218.5px) translateY(25.5px) rotateY(90deg) rotateX(123deg)';
phr0camera1.appendChild(phr220);

const phr230 = document.createElement('div');
phr230.style.width = "10px";
phr230.style.height = "10px";
phr230.style.overflow = "hidden";
phr230.style.background = "linear-gradient(to top, rgb(30, 30, 30), rgb(38, 38, 38)), rgb(255, 255, 255)";
phr230.style.transformStyle = 'preserve-3d';
phr230.style.position = 'absolute';
phr230.style.borderRadius = '0px';

phr230.style.transform = 'translateZ(-45px) translateX(211.3px) translateY(32px) rotateY(90deg) rotateX(143deg)';
phr0camera1.appendChild(phr230);

const phr240 = document.createElement('div');
phr240.style.width = "10px";
phr240.style.height = "10px";
phr240.style.overflow = "hidden";
phr240.style.background = "linear-gradient(to top, rgb(43, 43, 43), rgb(37, 37, 37)), rgb(255, 255, 255)";
phr240.style.transformStyle = 'preserve-3d';
phr240.style.position = 'absolute';
phr240.style.borderRadius = '0px';

phr240.style.transform = 'translateZ(-45px) translateX(207px) translateY(40.5px) rotateY(90deg) rotateX(163deg)';
phr0camera1.appendChild(phr240);


const phr2camera3 = document.createElement('div');
phr2camera3.style.transformStyle = 'preserve-3d';
phr2camera3.style.transform = 'translateZ(-90px) translateX(0px) translateY(-507px) rotateY(0deg) rotateX(180deg) rotateZ(0deg)';
phone.appendChild(phr2camera3);

const phr202 = document.createElement('div');
phr202.style.width = "10px";
phr202.style.height = "10px";
phr202.style.overflow = "hidden";
phr202.style.background = "linear-gradient(to top, rgb(35, 35, 35), rgb(46, 46, 46)), rgb(255, 255, 255)";
phr202.style.transformStyle = 'preserve-3d';
phr202.style.position = 'absolute';
phr202.style.borderRadius = '0px';

phr202.style.transform = 'translateZ(-45px) translateX(236px) translateY(20.5px) rotateY(90deg) rotateX(90deg)';
phr2camera3.appendChild(phr202);

const phr212 = document.createElement('div');
phr212.style.width = "10px";
phr212.style.height = "10px";
phr212.style.overflow = "hidden";
phr212.style.background = "linear-gradient(to top, rgb(38, 38, 38), rgb(129, 129, 129)), rgb(255, 255, 255)";
phr212.style.transformStyle = 'preserve-3d';
phr212.style.position = 'absolute';
phr212.style.borderRadius = '0px';

phr212.style.transform = 'translateZ(-45px) translateX(227.5px) translateY(21.5px) rotateY(90deg) rotateX(105deg)';
phr2camera3.appendChild(phr212);

const phr222 = document.createElement('div');
phr222.style.width = "10px";
phr222.style.height = "10px";
phr222.style.overflow = "hidden";
phr222.style.background = "linear-gradient(to top, rgb(136, 136, 136), rgb(182, 182, 182)), rgb(255, 255, 255)";
phr222.style.transformStyle = 'preserve-3d';
phr222.style.position = 'absolute';
phr222.style.borderRadius = '0px';

phr222.style.transform = 'translateZ(-45px) translateX(218.5px) translateY(25.5px) rotateY(90deg) rotateX(123deg)';
phr2camera3.appendChild(phr222);

const phr232 = document.createElement('div');
phr232.style.width = "10px";
phr232.style.height = "10px";
phr232.style.overflow = "hidden";
phr232.style.background = "linear-gradient(to top, rgb(175, 175, 175), rgb(218, 218, 218)), rgb(255, 255, 255)";
phr232.style.transformStyle = 'preserve-3d';
phr232.style.position = 'absolute';
phr232.style.borderRadius = '0px';

phr232.style.transform = 'translateZ(-45px) translateX(211.3px) translateY(32px) rotateY(90deg) rotateX(143deg)';
phr2camera3.appendChild(phr232);

const phr242 = document.createElement('div');
phr242.style.width = "10px";
phr242.style.height = "10px";
phr242.style.overflow = "hidden";
phr242.style.background = "linear-gradient(to top, rgb(214, 214, 214), rgb(235, 235, 235)), rgb(255, 255, 255)";
phr242.style.transformStyle = 'preserve-3d';
phr242.style.position = 'absolute';
phr242.style.borderRadius = '0px';

phr242.style.transform = 'translateZ(-45px) translateX(207px) translateY(40.5px) rotateY(90deg) rotateX(163deg)';
phr2camera3.appendChild(phr242);




const phr2camera4 = document.createElement('div');
phr2camera4.style.transformStyle = 'preserve-3d';
phr2camera4.style.transform = 'translateZ(-90px) translateX(-13px) translateY(-13.7px) rotateY(0deg) rotateX(180deg) rotateZ(90deg)';
phone.appendChild(phr2camera4);

const phr203 = document.createElement('div');
phr203.style.width = "10px";
phr203.style.height = "8px";
phr203.style.overflow = "hidden";
phr203.style.background = "linear-gradient(to top, rgb(16, 16, 16), rgb(13, 13, 13)), rgb(255, 255, 255)";
phr203.style.transformStyle = 'preserve-3d';
phr203.style.position = 'absolute';
phr203.style.borderRadius = '0px';

phr203.style.transform = 'translateZ(-45px) translateX(225px) translateY(23px) rotateY(90deg) rotateX(109deg)';
phr2camera4.appendChild(phr203);

const phr213 = document.createElement('div');
phr213.style.width = "10px";
phr213.style.height = "10px";
phr213.style.overflow = "hidden";
phr213.style.background = "linear-gradient(to top, rgb(18, 18, 18), rgb(0, 0, 0)), rgb(255, 255, 255)";
phr213.style.transformStyle = 'preserve-3d';
phr213.style.position = 'absolute';
phr213.style.borderRadius = '0px';

phr213.style.transform = 'translateZ(-45px) translateX(227.5px) translateY(21.5px) rotateY(90deg) rotateX(105deg)';
phr2camera4.appendChild(phr213);

const phr223 = document.createElement('div');
phr223.style.width = "10px";
phr223.style.height = "10px";
phr223.style.overflow = "hidden";
phr223.style.background = "linear-gradient(to top, rgb(12, 12, 12), rgb(13, 13, 13)), rgb(255, 255, 255)";
phr223.style.transformStyle = 'preserve-3d';
phr223.style.position = 'absolute';
phr223.style.borderRadius = '0px';

phr223.style.transform = 'translateZ(-45px) translateX(218.5px) translateY(25.5px) rotateY(90deg) rotateX(123deg)';
phr2camera4.appendChild(phr223);

const phr233 = document.createElement('div');
phr233.style.width = "10px";
phr233.style.height = "10px";
phr233.style.overflow = "hidden";
phr233.style.background = "linear-gradient(to top, rgb(14, 14, 14), rgb(22, 22, 22)), rgb(255, 255, 255)";
phr233.style.transformStyle = 'preserve-3d';
phr233.style.position = 'absolute';
phr233.style.borderRadius = '0px';

phr233.style.transform = 'translateZ(-45px) translateX(211.3px) translateY(32px) rotateY(90deg) rotateX(143deg)';
phr2camera4.appendChild(phr233);

const phr243 = document.createElement('div');
phr243.style.width = "10px";
phr243.style.height = "10px";
phr243.style.overflow = "hidden";
phr243.style.background = "linear-gradient(to top, rgb(29, 29, 29), rgb(31, 31, 31)), rgb(255, 255, 255)";
phr243.style.transformStyle = 'preserve-3d';
phr243.style.position = 'absolute';
phr243.style.borderRadius = '0px';

phr243.style.transform = 'translateZ(-45px) translateX(207px) translateY(40.5px) rotateY(90deg) rotateX(163deg)';
phr2camera4.appendChild(phr243);






























const phr0111111camera = document.createElement('div');
phr0111111camera.style.transformStyle = 'preserve-3d';
phr0111111camera.style.transform = 'translateY(65px)';
phone.appendChild(phr0111111camera);


const phr211111 = document.createElement('div');
phr211111.style.width = "10px";
phr211111.style.height = "10px";
phr211111.style.overflow = "hidden";
phr211111.style.background = "linear-gradient(to top, rgb(97, 97, 97), rgb(146, 146, 146)), rgb(255, 255, 255)";
phr211111.style.transformStyle = 'preserve-3d';
phr211111.style.position = 'absolute';
phr211111.style.borderRadius = '0px';

phr211111.style.transform = 'translateZ(-45px) translateX(236px) translateY(20.5px) rotateY(90deg) rotateX(90deg)';
phr0111111camera.appendChild(phr211111);


const phr211121 = document.createElement('div');
phr211121.style.width = "10px";
phr211121.style.height = "10px";
phr211121.style.overflow = "hidden";
phr211121.style.background = "linear-gradient(to top, rgb(137, 137, 137), rgb(186, 186, 186)), rgb(255, 255, 255)";
phr211121.style.transformStyle = 'preserve-3d';
phr211121.style.position = 'absolute';
phr211121.style.borderRadius = '0px';

phr211121.style.transform = 'translateZ(-45px) translateX(227.5px) translateY(21.5px) rotateY(90deg) rotateX(105deg)';
phr0111111camera.appendChild(phr211121);

const phr211221 = document.createElement('div');
phr211221.style.width = "10px";
phr211221.style.height = "10px";
phr211221.style.overflow = "hidden";
phr211221.style.background = "linear-gradient(to top, rgb(190, 190, 190), rgb(194, 194, 194)), rgb(255, 255, 255)";
phr211221.style.transformStyle = 'preserve-3d';
phr211221.style.position = 'absolute';
phr211221.style.borderRadius = '0px';

phr211221.style.transform = 'translateZ(-45px) translateX(218.5px) translateY(25.5px) rotateY(90deg) rotateX(123deg)';
phr0111111camera.appendChild(phr211221);

const phr211231 = document.createElement('div');
phr211231.style.width = "10px";
phr211231.style.height = "10px";
phr211231.style.overflow = "hidden";
phr211231.style.background = "linear-gradient(to top, rgb(200, 200, 200), rgb(201, 201, 201)), rgb(255, 255, 255)";
phr211231.style.transformStyle = 'preserve-3d';
phr211231.style.position = 'absolute';
phr211231.style.borderRadius = '0px';

phr211231.style.transform = 'translateZ(-45px) translateX(211.3px) translateY(32px) rotateY(90deg) rotateX(143deg)';
phr0111111camera.appendChild(phr211231);

const phr211241 = document.createElement('div');
phr211241.style.width = "10px";
phr211241.style.height = "10px";
phr211241.style.overflow = "hidden";
phr211241.style.background = "linear-gradient(to top, rgb(204, 204, 204), rgb(191, 191, 191)), rgb(255, 255, 255)";
phr211241.style.transformStyle = 'preserve-3d';
phr211241.style.position = 'absolute';
phr211241.style.borderRadius = '0px';

phr211241.style.transform = 'translateZ(-45px) translateX(207px) translateY(40.5px) rotateY(90deg) rotateX(163deg)';
phr0111111camera.appendChild(phr211241);

const phr211251 = document.createElement('div');
phr211251.style.width = "10px";
phr211251.style.height = "10px";
phr211251.style.overflow = "hidden";
phr211251.style.background = "linear-gradient(to top, rgb(190, 190, 190), rgb(167, 167, 167)), rgb(255, 255, 255)";
phr211251.style.transformStyle = 'preserve-3d';
phr211251.style.position = 'absolute';
phr211251.style.borderRadius = '0px';

phr211251.style.transform = 'translateZ(-45px) translateX(205.5px) translateY(50px) rotateY(90deg) rotateX(180deg)';
phr0111111camera.appendChild(phr211251);



const phr01111111camera1 = document.createElement('div');
phr01111111camera1.style.transformStyle = 'preserve-3d';
phr01111111camera1.style.transform = 'translateZ(0px) translateX(-13.5px) translateY(-428.8px) rotateY(0deg) rotateX(0deg) rotateZ(90deg)';
phone.appendChild(phr01111111camera1);


const phr20111 = document.createElement('div');
phr20111.style.width = "10px";
phr20111.style.height = "10px";
phr20111.style.overflow = "hidden";
phr20111.style.background = "linear-gradient(to top, rgb(18, 18, 18), rgb(21, 21, 21)), rgb(255, 255, 255)";
phr20111.style.transformStyle = 'preserve-3d';
phr20111.style.position = 'absolute';
phr20111.style.borderRadius = '0px';

phr20111.style.transform = 'translateZ(-45px) translateX(236px) translateY(20.5px) rotateY(90deg) rotateX(88deg)';
phr01111111camera1.appendChild(phr20111);


const phr21111 = document.createElement('div');
phr21111.style.width = "10px";
phr21111.style.height = "10px";
phr21111.style.overflow = "hidden";
phr21111.style.background = "linear-gradient(to top, rgb(29, 29, 29), rgb(25, 25, 25)), rgb(255, 255, 255)";
phr21111.style.transformStyle = 'preserve-3d';
phr21111.style.position = 'absolute';
phr21111.style.borderRadius = '0px';

phr21111.style.transform = 'translateZ(-45px) translateX(227.5px) translateY(21.5px) rotateY(90deg) rotateX(105deg)';
phr01111111camera1.appendChild(phr21111);

const phr22111 = document.createElement('div');
phr22111.style.width = "10px";
phr22111.style.height = "10px";
phr22111.style.overflow = "hidden";
phr22111.style.background = "linear-gradient(to top, rgb(25, 25, 25), rgb(33, 33, 33)), rgb(255, 255, 255)";
phr22111.style.transformStyle = 'preserve-3d';
phr22111.style.position = 'absolute';
phr22111.style.borderRadius = '0px';

phr22111.style.transform = 'translateZ(-45px) translateX(218.5px) translateY(25.5px) rotateY(90deg) rotateX(123deg)';
phr01111111camera1.appendChild(phr22111);

const phr23111 = document.createElement('div');
phr23111.style.width = "10px";
phr23111.style.height = "10px";
phr23111.style.overflow = "hidden";
phr23111.style.background = "linear-gradient(to top, rgb(34, 34, 34), rgb(44, 44, 44)), rgb(255, 255, 255)";
phr23111.style.transformStyle = 'preserve-3d';
phr23111.style.position = 'absolute';
phr23111.style.borderRadius = '0px';

phr23111.style.transform = 'translateZ(-45px) translateX(211.3px) translateY(32px) rotateY(90deg) rotateX(143deg)';
phr01111111camera1.appendChild(phr23111);

const phr24111 = document.createElement('div');
phr24111.style.width = "10px";
phr24111.style.height = "10px";
phr24111.style.overflow = "hidden";
phr24111.style.background = "linear-gradient(to top, rgb(44, 44, 44), rgb(106, 106, 106)), rgb(255, 255, 255)";
phr24111.style.transformStyle = 'preserve-3d';
phr24111.style.position = 'absolute';
phr24111.style.borderRadius = '0px';

phr24111.style.transform = 'translateZ(-45px) translateX(207px) translateY(40.5px) rotateY(90deg) rotateX(163deg)';
phr01111111camera1.appendChild(phr24111);


const phr2camera3111 = document.createElement('div');
phr2camera3111.style.transformStyle = 'preserve-3d';
phr2camera3111.style.transform = 'translateZ(-90px) translateX(0px) translateY(-442px) rotateY(0deg) rotateX(180deg) rotateZ(0deg)';
phone.appendChild(phr2camera3111);

const phr201111 = document.createElement('div');
phr201111.style.width = "10px";
phr201111.style.height = "10px";
phr201111.style.overflow = "hidden";
phr201111.style.background = "linear-gradient(to top, rgb(35, 35, 35), rgb(46, 46, 46)), rgb(255, 255, 255)";
phr201111.style.transformStyle = 'preserve-3d';
phr201111.style.position = 'absolute';
phr201111.style.borderRadius = '0px';

phr201111.style.transform = 'translateZ(-45px) translateX(236px) translateY(20.5px) rotateY(90deg) rotateX(90deg)';
phr2camera3111.appendChild(phr201111);

const phr211311 = document.createElement('div');
phr211311.style.width = "10px";
phr211311.style.height = "10px";
phr211311.style.overflow = "hidden";
phr211311.style.background = "linear-gradient(to top, rgb(43, 43, 43), rgb(55, 55, 55)), rgb(255, 255, 255)";
phr211311.style.transformStyle = 'preserve-3d';
phr211311.style.position = 'absolute';
phr211311.style.borderRadius = '0px';

phr211311.style.transform = 'translateZ(-45px) translateX(227.5px) translateY(21.5px) rotateY(90deg) rotateX(105deg)';
phr2camera3111.appendChild(phr211311);

const phr221311 = document.createElement('div');
phr221311.style.width = "10px";
phr221311.style.height = "10px";
phr221311.style.overflow = "hidden";
phr221311.style.background = "linear-gradient(to top, rgb(55, 55, 55), rgb(110, 110, 110)), rgb(255, 255, 255)";
phr221311.style.transformStyle = 'preserve-3d';
phr221311.style.position = 'absolute';
phr221311.style.borderRadius = '0px';

phr221311.style.transform = 'translateZ(-45px) translateX(218.5px) translateY(25.5px) rotateY(90deg) rotateX(123deg)';
phr2camera3111.appendChild(phr221311);

const phr231311 = document.createElement('div');
phr231311.style.width = "10px";
phr231311.style.height = "10px";
phr231311.style.overflow = "hidden";
phr231311.style.background = "linear-gradient(to top, rgb(112, 112, 112), rgb(149, 149, 149)), rgb(255, 255, 255)";
phr231311.style.transformStyle = 'preserve-3d';
phr231311.style.position = 'absolute';
phr231311.style.borderRadius = '0px';

phr231311.style.transform = 'translateZ(-45px) translateX(211.3px) translateY(32px) rotateY(90deg) rotateX(143deg)';
phr2camera3111.appendChild(phr231311);

const phr241311 = document.createElement('div');
phr241311.style.width = "10px";
phr241311.style.height = "10px";
phr241311.style.overflow = "hidden";
phr241311.style.background = "linear-gradient(to top, rgb(149, 149, 149), rgb(171, 171, 171)), rgb(255, 255, 255)";
phr241311.style.transformStyle = 'preserve-3d';
phr241311.style.position = 'absolute';
phr241311.style.borderRadius = '0px';

phr241311.style.transform = 'translateZ(-45px) translateX(207px) translateY(40.5px) rotateY(90deg) rotateX(163deg)';
phr2camera3111.appendChild(phr241311);




const phr2camera4111 = document.createElement('div');
phr2camera4111.style.transformStyle = 'preserve-3d';
phr2camera4111.style.transform = 'translateZ(-90px) translateX(-13px) translateY(51.3px) rotateY(0deg) rotateX(180deg) rotateZ(90deg)';
phone.appendChild(phr2camera4111);

const phr201311 = document.createElement('div');
phr201311.style.width = "10px";
phr201311.style.height = "8px";
phr201311.style.overflow = "hidden";
phr201311.style.background = "linear-gradient(to top, rgb(16, 16, 16), rgb(13, 13, 13)), rgb(255, 255, 255)";
phr201311.style.transformStyle = 'preserve-3d';
phr201311.style.position = 'absolute';
phr201311.style.borderRadius = '0px';

phr201311.style.transform = 'translateZ(-45px) translateX(225px) translateY(23px) rotateY(90deg) rotateX(109deg)';
phr2camera4111.appendChild(phr201311);

const phr211411 = document.createElement('div');
phr211411.style.width = "10px";
phr211411.style.height = "10px";
phr211411.style.overflow = "hidden";
phr211411.style.background = "linear-gradient(to top, rgb(18, 18, 18), rgb(0, 0, 0)), rgb(255, 255, 255)";
phr211411.style.transformStyle = 'preserve-3d';
phr211411.style.position = 'absolute';
phr211411.style.borderRadius = '0px';

phr211411.style.transform = 'translateZ(-45px) translateX(227.5px) translateY(21.5px) rotateY(90deg) rotateX(105deg)';
phr2camera4111.appendChild(phr211411);

const phr221411 = document.createElement('div');
phr221411.style.width = "10px";
phr221411.style.height = "10px";
phr221411.style.overflow = "hidden";
phr221411.style.background = "linear-gradient(to top, rgb(12, 12, 12), rgb(13, 13, 13)), rgb(255, 255, 255)";
phr221411.style.transformStyle = 'preserve-3d';
phr221411.style.position = 'absolute';
phr221411.style.borderRadius = '0px';

phr221411.style.transform = 'translateZ(-45px) translateX(218.5px) translateY(25.5px) rotateY(90deg) rotateX(123deg)';
phr2camera4111.appendChild(phr221411);

const phr231411 = document.createElement('div');
phr231411.style.width = "10px";
phr231411.style.height = "10px";
phr231411.style.overflow = "hidden";
phr231411.style.background = "linear-gradient(to top, rgb(14, 14, 14), rgb(22, 22, 22)), rgb(255, 255, 255)";
phr231411.style.transformStyle = 'preserve-3d';
phr231411.style.position = 'absolute';
phr231411.style.borderRadius = '0px';

phr231411.style.transform = 'translateZ(-45px) translateX(211.3px) translateY(32px) rotateY(90deg) rotateX(143deg)';
phr2camera4111.appendChild(phr231411);

const phr241411 = document.createElement('div');
phr241411.style.width = "10px";
phr241411.style.height = "10px";
phr241411.style.overflow = "hidden";
phr241411.style.background = "linear-gradient(to top, rgb(29, 29, 29), rgb(31, 31, 31)), rgb(255, 255, 255)";
phr241411.style.transformStyle = 'preserve-3d';
phr241411.style.position = 'absolute';
phr241411.style.borderRadius = '0px';

phr241411.style.transform = 'translateZ(-45px) translateX(207px) translateY(40.5px) rotateY(90deg) rotateX(163deg)';
phr2camera4111.appendChild(phr241411);










const p333hr0111111camera = document.createElement('div');
p333hr0111111camera.style.transformStyle = 'preserve-3d';
p333hr0111111camera.style.transform = 'translateY(32px) translateX(-57px)';
phone.appendChild(p333hr0111111camera);


const p333hr211111 = document.createElement('div');
p333hr211111.style.width = "10px";
p333hr211111.style.height = "10px";
p333hr211111.style.overflow = "hidden";
p333hr211111.style.background = "linear-gradient(to top, rgb(233, 233, 233), rgb(218, 218, 218)), rgb(255, 255, 255)";
p333hr211111.style.transformStyle = 'preserve-3d';
p333hr211111.style.position = 'absolute';
p333hr211111.style.borderRadius = '0px';

p333hr211111.style.transform = 'translateZ(-45px) translateX(236px) translateY(20.5px) rotateY(90deg) rotateX(90deg)';
p333hr0111111camera.appendChild(p333hr211111);


const p333hr211121 = document.createElement('div');
p333hr211121.style.width = "10px";
p333hr211121.style.height = "10px";
p333hr211121.style.overflow = "hidden";
p333hr211121.style.background = "linear-gradient(to top, rgb(225, 225, 225), rgb(254, 254, 254)), rgb(255, 255, 255)";
p333hr211121.style.transformStyle = 'preserve-3d';
p333hr211121.style.position = 'absolute';
p333hr211121.style.borderRadius = '0px';

p333hr211121.style.transform = 'translateZ(-45px) translateX(227.5px) translateY(21.5px) rotateY(90deg) rotateX(105deg)';
p333hr0111111camera.appendChild(p333hr211121);

const p333hr211221 = document.createElement('div');
p333hr211221.style.width = "10px";
p333hr211221.style.height = "10px";
p333hr211221.style.overflow = "hidden";
p333hr211221.style.background = "linear-gradient(to top, rgb(255, 255, 255), rgb(255, 255, 255)), rgb(255, 255, 255)";
p333hr211221.style.transformStyle = 'preserve-3d';
p333hr211221.style.position = 'absolute';
p333hr211221.style.borderRadius = '0px';

p333hr211221.style.transform = 'translateZ(-45px) translateX(218.5px) translateY(25.5px) rotateY(90deg) rotateX(123deg)';
p333hr0111111camera.appendChild(p333hr211221);

const p333hr211231 = document.createElement('div');
p333hr211231.style.width = "10px";
p333hr211231.style.height = "10px";
p333hr211231.style.overflow = "hidden";
p333hr211231.style.background = "linear-gradient(to top, rgb(255, 255, 255), rgb(255, 255, 255)), rgb(255, 255, 255)";
p333hr211231.style.transformStyle = 'preserve-3d';
p333hr211231.style.position = 'absolute';
p333hr211231.style.borderRadius = '0px';

p333hr211231.style.transform = 'translateZ(-45px) translateX(211.3px) translateY(32px) rotateY(90deg) rotateX(143deg)';
p333hr0111111camera.appendChild(p333hr211231);

const p333hr211241 = document.createElement('div');
p333hr211241.style.width = "10px";
p333hr211241.style.height = "10px";
p333hr211241.style.overflow = "hidden";
p333hr211241.style.background = "linear-gradient(to top, rgb(255, 255, 255), rgb(255, 255, 255)), rgb(255, 255, 255)";
p333hr211241.style.transformStyle = 'preserve-3d';
p333hr211241.style.position = 'absolute';
p333hr211241.style.borderRadius = '0px';

p333hr211241.style.transform = 'translateZ(-45px) translateX(207px) translateY(40.5px) rotateY(90deg) rotateX(163deg)';
p333hr0111111camera.appendChild(p333hr211241);

const p333hr211251 = document.createElement('div');
p333hr211251.style.width = "10px";
p333hr211251.style.height = "10px";
p333hr211251.style.overflow = "hidden";
p333hr211251.style.background = "linear-gradient(to top, rgb(255, 255, 255), rgb(255, 255, 255)), rgb(255, 255, 255)";
p333hr211251.style.transformStyle = 'preserve-3d';
p333hr211251.style.position = 'absolute';
p333hr211251.style.borderRadius = '0px';

p333hr211251.style.transform = 'translateZ(-45px) translateX(205.5px) translateY(50px) rotateY(90deg) rotateX(180deg)';
p333hr0111111camera.appendChild(p333hr211251);



const p333hr01111111camera1 = document.createElement('div');
p333hr01111111camera1.style.transformStyle = 'preserve-3d';
p333hr01111111camera1.style.transform = 'translateZ(0px) translateX(-70.5px) translateY(-461.8px) rotateY(0deg) rotateX(0deg) rotateZ(90deg)';
phone.appendChild(p333hr01111111camera1);


const p333hr20111 = document.createElement('div');
p333hr20111.style.width = "10px";
p333hr20111.style.height = "10px";
p333hr20111.style.overflow = "hidden";
p333hr20111.style.background = "linear-gradient(to top, rgb(12, 12, 12), rgb(67, 67, 67)), rgb(255, 255, 255)";
p333hr20111.style.transformStyle = 'preserve-3d';
p333hr20111.style.position = 'absolute';
p333hr20111.style.borderRadius = '0px';

p333hr20111.style.transform = 'translateZ(-45px) translateX(236px) translateY(20.5px) rotateY(90deg) rotateX(88deg)';
p333hr01111111camera1.appendChild(p333hr20111);


const p333hr21111 = document.createElement('div');
p333hr21111.style.width = "10px";
p333hr21111.style.height = "10px";
p333hr21111.style.overflow = "hidden";
p333hr21111.style.background = "linear-gradient(to top, rgb(63, 63, 63), rgb(80, 80, 80)), rgb(255, 255, 255)";
p333hr21111.style.transformStyle = 'preserve-3d';
p333hr21111.style.position = 'absolute';
p333hr21111.style.borderRadius = '0px';

p333hr21111.style.transform = 'translateZ(-45px) translateX(227.5px) translateY(21.5px) rotateY(90deg) rotateX(105deg)';
p333hr01111111camera1.appendChild(p333hr21111);

const p333hr22111 = document.createElement('div');
p333hr22111.style.width = "10px";
p333hr22111.style.height = "10px";
p333hr22111.style.overflow = "hidden";
p333hr22111.style.background = "linear-gradient(to top, rgb(84, 84, 84), rgb(135, 135, 135)), rgb(255, 255, 255)";
p333hr22111.style.transformStyle = 'preserve-3d';
p333hr22111.style.position = 'absolute';
p333hr22111.style.borderRadius = '0px';

p333hr22111.style.transform = 'translateZ(-45px) translateX(218.5px) translateY(25.5px) rotateY(90deg) rotateX(123deg)';
p333hr01111111camera1.appendChild(p333hr22111);

const p333hr23111 = document.createElement('div');
p333hr23111.style.width = "10px";
p333hr23111.style.height = "10px";
p333hr23111.style.overflow = "hidden";
p333hr23111.style.background = "linear-gradient(to top, rgb(135, 135, 135), rgb(217, 217, 217)), rgb(255, 255, 255)";
p333hr23111.style.transformStyle = 'preserve-3d';
p333hr23111.style.position = 'absolute';
p333hr23111.style.borderRadius = '0px';

p333hr23111.style.transform = 'translateZ(-45px) translateX(211.3px) translateY(32px) rotateY(90deg) rotateX(143deg)';
p333hr01111111camera1.appendChild(p333hr23111);

const p333hr24111 = document.createElement('div');
p333hr24111.style.width = "10px";
p333hr24111.style.height = "10px";
p333hr24111.style.overflow = "hidden";
p333hr24111.style.background = "linear-gradient(to top, rgb(214, 214, 214), rgb(234, 234, 234)), rgb(255, 255, 255)";
p333hr24111.style.transformStyle = 'preserve-3d';
p333hr24111.style.position = 'absolute';
p333hr24111.style.borderRadius = '0px';

p333hr24111.style.transform = 'translateZ(-45px) translateX(207px) translateY(40.5px) rotateY(90deg) rotateX(163deg)';
p333hr01111111camera1.appendChild(p333hr24111);


const p333hr2camera3111 = document.createElement('div');
p333hr2camera3111.style.transformStyle = 'preserve-3d';
p333hr2camera3111.style.transform = 'translateZ(-90px) translateX(-57px) translateY(-474.6px) rotateY(0deg) rotateX(180deg) rotateZ(0deg)';
phone.appendChild(p333hr2camera3111);

const p333hr201111 = document.createElement('div');
p333hr201111.style.width = "10px";
p333hr201111.style.height = "10px";
p333hr201111.style.overflow = "hidden";
p333hr201111.style.background = "linear-gradient(to top, rgb(46, 46, 46), rgb(81, 81, 81)), rgb(255, 255, 255)";
p333hr201111.style.transformStyle = 'preserve-3d';
p333hr201111.style.position = 'absolute';
p333hr201111.style.borderRadius = '0px';

p333hr201111.style.transform = 'translateZ(-45px) translateX(236px) translateY(20.5px) rotateY(90deg) rotateX(90deg)';
p333hr2camera3111.appendChild(p333hr201111);

const p333hr211311 = document.createElement('div');
p333hr211311.style.width = "10px";
p333hr211311.style.height = "10px";
p333hr211311.style.overflow = "hidden";
p333hr211311.style.background = "linear-gradient(to top, rgb(76, 76, 76), rgb(148, 148, 148)), rgb(255, 255, 255)";
p333hr211311.style.transformStyle = 'preserve-3d';
p333hr211311.style.position = 'absolute';
p333hr211311.style.borderRadius = '0px';

p333hr211311.style.transform = 'translateZ(-45px) translateX(227.5px) translateY(21.5px) rotateY(90deg) rotateX(105deg)';
p333hr2camera3111.appendChild(p333hr211311);

const p333hr221311 = document.createElement('div');
p333hr221311.style.width = "10px";
p333hr221311.style.height = "10px";
p333hr221311.style.overflow = "hidden";
p333hr221311.style.background = "linear-gradient(to top, rgb(149, 149, 149), rgb(171, 171, 171)), rgb(255, 255, 255)";
p333hr221311.style.transformStyle = 'preserve-3d';
p333hr221311.style.position = 'absolute';
p333hr221311.style.borderRadius = '0px';

p333hr221311.style.transform = 'translateZ(-45px) translateX(218.5px) translateY(25.5px) rotateY(90deg) rotateX(123deg)';
p333hr2camera3111.appendChild(p333hr221311);

const p333hr231311 = document.createElement('div');
p333hr231311.style.width = "10px";
p333hr231311.style.height = "10px";
p333hr231311.style.overflow = "hidden";
p333hr231311.style.background = "linear-gradient(to top, rgb(170, 170, 170), rgb(220, 220, 220)), rgb(255, 255, 255)";
p333hr231311.style.transformStyle = 'preserve-3d';
p333hr231311.style.position = 'absolute';
p333hr231311.style.borderRadius = '0px';

p333hr231311.style.transform = 'translateZ(-45px) translateX(211.3px) translateY(32px) rotateY(90deg) rotateX(143deg)';
p333hr2camera3111.appendChild(p333hr231311);

const p333hr241311 = document.createElement('div');
p333hr241311.style.width = "10px";
p333hr241311.style.height = "10px";
p333hr241311.style.overflow = "hidden";
p333hr241311.style.background = "linear-gradient(to top, rgb(220, 220, 220), rgb(255, 255, 255)), rgb(255, 255, 255)";
p333hr241311.style.transformStyle = 'preserve-3d';
p333hr241311.style.position = 'absolute';
p333hr241311.style.borderRadius = '0px';

p333hr241311.style.transform = 'translateZ(-45px) translateX(207px) translateY(40.5px) rotateY(90deg) rotateX(163deg)';
p333hr2camera3111.appendChild(p333hr241311);




const p333hr2camera4111 = document.createElement('div');
p333hr2camera4111.style.transformStyle = 'preserve-3d';
p333hr2camera4111.style.transform = 'translateZ(-90px) translateX(-72px) translateY(19.3px) rotateY(0deg) rotateX(180deg) rotateZ(90deg)';
phone.appendChild(p333hr2camera4111);

const p333hr201311 = document.createElement('div');
p333hr201311.style.width = "10px";
p333hr201311.style.height = "8px";
p333hr201311.style.overflow = "hidden";
p333hr201311.style.background = "linear-gradient(to top, rgb(22, 22, 22), rgb(5, 5, 5)), rgb(255, 255, 255)";
p333hr201311.style.transformStyle = 'preserve-3d';
p333hr201311.style.position = 'absolute';
p333hr201311.style.borderRadius = '0px';

p333hr201311.style.transform = 'translateZ(-45px) translateX(225px) translateY(23px) rotateY(90deg) rotateX(109deg)';
p333hr2camera4111.appendChild(p333hr201311);

const p333hr211411 = document.createElement('div');
p333hr211411.style.width = "10px";
p333hr211411.style.height = "10px";
p333hr211411.style.overflow = "hidden";
p333hr211411.style.background = "linear-gradient(to top, rgb(18, 18, 18), rgb(16, 16, 16)), rgb(255, 255, 255)";
p333hr211411.style.transformStyle = 'preserve-3d';
p333hr211411.style.position = 'absolute';
p333hr211411.style.borderRadius = '0px';

p333hr211411.style.transform = 'translateZ(-45px) translateX(227.5px) translateY(21.5px) rotateY(90deg) rotateX(105deg)';
p333hr2camera4111.appendChild(p333hr211411);

const p333hr221411 = document.createElement('div');
p333hr221411.style.width = "10px";
p333hr221411.style.height = "10px";
p333hr221411.style.overflow = "hidden";
p333hr221411.style.background = "linear-gradient(to top, rgb(12, 12, 12), rgb(18, 18, 18)), rgb(255, 255, 255)";
p333hr221411.style.transformStyle = 'preserve-3d';
p333hr221411.style.position = 'absolute';
p333hr221411.style.borderRadius = '0px';

p333hr221411.style.transform = 'translateZ(-45px) translateX(218.5px) translateY(25.5px) rotateY(90deg) rotateX(123deg)';
p333hr2camera4111.appendChild(p333hr221411);

const p333hr231411 = document.createElement('div');
p333hr231411.style.width = "10px";
p333hr231411.style.height = "10px";
p333hr231411.style.overflow = "hidden";
p333hr231411.style.background = "linear-gradient(to top, rgb(14, 14, 14), rgb(38, 38, 38)), rgb(255, 255, 255)";
p333hr231411.style.transformStyle = 'preserve-3d';
p333hr231411.style.position = 'absolute';
p333hr231411.style.borderRadius = '0px';

p333hr231411.style.transform = 'translateZ(-45px) translateX(211.3px) translateY(32px) rotateY(90deg) rotateX(143deg)';
p333hr2camera4111.appendChild(p333hr231411);

const p333hr241411 = document.createElement('div');
p333hr241411.style.width = "10px";
p333hr241411.style.height = "10px";
p333hr241411.style.overflow = "hidden";
p333hr241411.style.background = "linear-gradient(to top, rgb(42, 42, 42), rgb(54, 54, 54)), rgb(255, 255, 255)";
p333hr241411.style.transformStyle = 'preserve-3d';
p333hr241411.style.position = 'absolute';
p333hr241411.style.borderRadius = '0px';

p333hr241411.style.transform = 'translateZ(-45px) translateX(207px) translateY(40.5px) rotateY(90deg) rotateX(163deg)';
p333hr2camera4111.appendChild(p333hr241411);









const pha7 = document.createElement('div');
pha7.style.position = "absolute";
pha7.style.transition = "0.3s";
pha7.style.top = "0px";
pha7.style.right = "50px";
pha7.style.width = "8px";
pha7.style.height = "3px";
pha7.style.background = "linear-gradient(rgb(85, 84, 84), rgb(67, 67, 67) 26.05%, rgb(34, 34, 34) 51.26%)";

const pha8 = document.createElement('div');
pha8.style.position = "absolute";
pha8.style.top = "50px";
pha8.style.transition = "0.3s";


pha8.style.left = "0px";
pha8.style.width = "3px";
pha8.style.height = "8px";
// pha8.style.background = "linear-gradient(90deg, #9B9B9B 0%, #E9E9E9 26.19%, #9B9B9B 51.07%)";
pha8.style.background = "linear-gradient(to right, rgb(85, 84, 84), rgb(67, 67, 67) 26.05%, rgb(34, 34, 34) 51.26%)";

const pha9 = document.createElement('div');
pha9.style.position = "absolute";
pha9.style.bottom = "50px";
pha9.style.transition = "0.3s";


pha9.style.left = "0px";
pha9.style.width = "3px";
pha9.style.height = "8px";
pha9.style.background = "linear-gradient(to right, rgb(85, 84, 84), rgb(67, 67, 67) 26.05%, rgb(34, 34, 34) 51.26%)";

const pha10 = document.createElement('div');
pha10.style.position = "absolute";
pha10.style.top = "50px";
pha10.style.transition = "0.3s";


pha10.style.right = "0px";
pha10.style.width = "3px";
pha10.style.height = "8px";
pha10.style.background = "linear-gradient(to left, rgb(85, 84, 84), rgb(67, 67, 67) 26.05%, rgb(34, 34, 34) 51.26%)";

const pha11 = document.createElement('div');
pha11.style.position = "absolute";
pha11.style.bottom = "50px";
pha11.style.transition = "0.3s";

pha11.style.right = "0px";
pha11.style.width = "3px";
pha11.style.height = "8px";
pha11.style.background = "linear-gradient(to left, rgb(85, 84, 84), rgb(67, 67, 67) 26.05%, rgb(34, 34, 34) 51.26%)";

const pha12 = document.createElement('div');
pha12.style.position = "absolute";
pha12.style.bottom = "0px";
pha12.style.transition = "0.3s";
pha12.style.left = "50px";
pha12.style.width = "8px";
pha12.style.height = "3px";
pha12.style.background = "linear-gradient(to top, rgb(85, 84, 84), rgb(67, 67, 67) 26.05%, rgb(34, 34, 34) 51.26%)";



phr19.appendChild(pha7);
phr19.appendChild(pha8);
phr19.appendChild(pha9);
phr19.appendChild(pha10);
phr19.appendChild(pha11);
phr19.appendChild(pha12);



const phrcamera = document.createElement('div');
phrcamera.style.width = "260px";
phrcamera.style.height = "140px";
phrcamera.style.transformStyle = 'preserve-3d';
phrcamera.style.transform = 'translateZ(-40px) translateY(15px) translateX(20px)';
phrcamera.style.position = 'absolute';
phrcamera.style.background = 'linear-gradient(180deg, #000 29.69%, #1E1E1E 100%)';
phrcamera.style.borderRadius = '40px';
phrcamera.style.overflow = 'hidden';
phone.appendChild(phrcamera);

const phrcamerar0 = document.createElement('div');
phrcamerar0.style.width = "260px";
phrcamerar0.style.height = "140px";
phrcamerar0.style.transformStyle = 'preserve-3d';
phrcamerar0.style.transform = 'translateZ(-40px) translateY(15px) translateX(20px)';
phrcamerar0.style.position = 'absolute';
phrcamerar0.style.background = 'none';
phrcamerar0.style.boxShadow = '1px 1px 1px rgb(150, 150, 150) inset, -1px -1px 1px rgb(173, 173, 173) inset, rgb(66, 66, 66) -1px 1px 1px inset, 1px -1px 1px rgb(144, 144, 144) inset, 2px 2px 1px rgb(0, 0, 0) inset, rgb(0, 0, 0) -2px -2px 1px inset, rgb(0, 0, 0) -2px 2px 1px inset, rgb(0, 0, 0) 2px -2px 1px inset';
phrcamerar0.style.borderRadius = '40px';
phrcamerar0.style.overflow = 'hidden';
phone.appendChild(phrcamerar0);

const phrcameraobj1 = document.createElement('div');
phrcameraobj1.style.width = "60px";
phrcameraobj1.style.height = "60px";
phrcameraobj1.style.transformStyle = 'preserve-3d';
phrcameraobj1.style.transform = 'translateZ(-50px) translateY(25px) translateX(210px) rotateZ(0deg)';
phrcameraobj1.style.position = 'absolute';
phrcameraobj1.style.background = 'linear-gradient(282deg, rgb(1, 1, 1), rgb(31, 31, 31), rgb(47, 47, 47), rgb(187, 187, 187) 75.21%, rgb(253, 253, 253))';
phrcameraobj1.style.borderRadius = '999px';
phone.appendChild(phrcameraobj1);

const p0hrcameraobj1 = document.createElement('div');
p0hrcameraobj1.style.width = "60px";
p0hrcameraobj1.style.height = "60px";
p0hrcameraobj1.style.transformStyle = 'preserve-3d';
p0hrcameraobj1.style.transform = 'translateZ(-40px) translateY(25px) translateX(210px) rotateZ(0deg)';
p0hrcameraobj1.style.position = 'absolute';
p0hrcameraobj1.style.background = 'linear-gradient(282deg, rgb(1, 1, 1), rgb(31, 31, 31), rgb(47, 47, 47), rgb(187, 187, 187) 75.21%, rgb(253, 253, 253))';
p0hrcameraobj1.style.borderRadius = '999px';
phone.appendChild(p0hrcameraobj1);

const phrcameraobj01 = document.createElement('div');
phrcameraobj01.style.width = "50px";
phrcameraobj01.style.height = "50px";
phrcameraobj01.style.transformStyle = 'preserve-3d';
phrcameraobj01.style.transform = 'translateZ(0px) translateY(4px) translateX(4px) rotateZ(0deg)';
phrcameraobj01.style.position = 'absolute';
phrcameraobj01.style.background = 'linear-gradient(320deg, rgb(16, 13, 16), rgb(16, 13, 16) 50.67%, rgb(100, 98, 99) 61.61%, rgb(93, 91, 92))';
// phrcameraobj01.style.strokeWidth = '1.585px';
phrcameraobj01.style.border = '1px solid rgb(102, 102, 102)';
phrcameraobj01.style.borderRadius = '999px';
phrcameraobj1.appendChild(phrcameraobj01);

const phrcameraobj02 = document.createElement('div');
phrcameraobj02.style.width = "46px";
phrcameraobj02.style.height = "46px";
phrcameraobj02.style.transformStyle = 'preserve-3d';
phrcameraobj02.style.transform = 'translateZ(0px) translateY(2px) translateX(2px) rotateZ(0deg)';
phrcameraobj02.style.position = 'absolute';
phrcameraobj02.style.background = '#100D10';
phrcameraobj02.style.boxShadow = '0px 0px 4.755000591278076px 1.5850000381469727px rgba(0, 0, 0, 0.25) inset';
phrcameraobj02.style.borderRadius = '999px';
phrcameraobj02.style.overflow = 'hidden';
phrcameraobj01.appendChild(phrcameraobj02);

const phrcameraobj03 = document.createElement('div');
phrcameraobj03.style.width = "34px";
phrcameraobj03.style.height = "54px";
phrcameraobj03.style.transformStyle = 'preserve-3d';
phrcameraobj03.style.transform = 'translateZ(0px) translateY(-5px) translateX(-25px) rotateZ(15deg)';
phrcameraobj03.style.position = 'absolute';
phrcameraobj03.style.background = 'linear-gradient(180deg, #6B6A70 0%, #3E3E3E 100%)';
phrcameraobj03.style.boxShadow = '0px 0px 4.755000591278076px 0px rgba(0, 0, 0, 0.25) inset';
// phrcameraobj03.style.borderRadius = '999px';
phrcameraobj02.appendChild(phrcameraobj03);

const phrcameraobj04 = document.createElement('div');
phrcameraobj04.style.width = "20px";
phrcameraobj04.style.height = "20px";
phrcameraobj04.style.transformStyle = 'preserve-3d';
phrcameraobj04.style.transform = 'translateZ(0px) translateY(13px) translateX(13px) rotateZ(0deg)';
phrcameraobj04.style.position = 'absolute';
phrcameraobj04.style.background = 'rgb(21, 21, 21)';
// phrcameraobj04.style.boxShadow = '0px 0px 4.755000591278076px 1.5850000381469727px rgba(0, 0, 0, 0.25) inset';
phrcameraobj04.style.borderRadius = '999px';
// phrcameraobj04.style.overflow = 'hidden';
phrcameraobj02.appendChild(phrcameraobj04);

const phrcameraobj05 = document.createElement('div');
phrcameraobj05.style.width = "16px";
phrcameraobj05.style.height = "16px";
phrcameraobj05.style.transformStyle = 'preserve-3d';
phrcameraobj05.style.transform = 'translateZ(0px) translateY(2px) translateX(2px) rotateZ(0deg)';
phrcameraobj05.style.position = 'absolute';
phrcameraobj05.style.background = 'rgb(16, 16, 16)';
// phrcameraobj05.style.boxShadow = '0px 0px 4.755000591278076px 1.5850000381469727px rgba(0, 0, 0, 0.25) inset';
phrcameraobj05.style.borderRadius = '999px';
// phrcameraobj05.style.overflow = 'hidden';
phrcameraobj04.appendChild(phrcameraobj05);



const phrcameraobj06 = document.createElement('div');
phrcameraobj06.style.width = "10px";
phrcameraobj06.style.height = "10px";
phrcameraobj06.style.transformStyle = 'preserve-3d';
phrcameraobj06.style.transform = 'translateZ(0px) translateY(3px) translateX(3px) rotateZ(0deg)';
phrcameraobj06.style.position = 'absolute';
phrcameraobj06.style.background = '#00021A';
// phrcameraobj06.style.boxShadow = '0px 0px 4.755000591278076px 1.5850000381469727px rgba(0, 0, 0, 0.25) inset';
phrcameraobj06.style.borderRadius = '999px';
phrcameraobj06.style.overflow = 'hidden';
phrcameraobj05.appendChild(phrcameraobj06);

const phrcameraobj07 = document.createElement('div');
phrcameraobj07.style.width = "2px";
phrcameraobj07.style.height = "6px";
phrcameraobj07.style.transformStyle = 'preserve-3d';
phrcameraobj07.style.transform = 'translateZ(0px) translateY(2px) translateX(7px) rotateZ(0deg)';
phrcameraobj07.style.position = 'absolute';
phrcameraobj07.style.background = 'radial-gradient(222.08% 209.07% at 61.46% 29.37%, rgb(204, 175, 240), rgba(26, 41, 43, 0.1) 47.06%, rgba(45, 81, 77, 0.3))';
// phrcameraobj07.style.boxShadow = '0px 0px 4.755000591278076px 1.5850000381469727px rgba(0, 0, 0, 0.25) inset';
phrcameraobj07.style.borderRadius = '999px';
phrcameraobj07.style.filter = 'blur(1px)';
// phrcameraobj07.style.overflow = 'hidden';
phrcameraobj06.appendChild(phrcameraobj07);

const phrcameraobj08 = document.createElement('div');
phrcameraobj08.style.width = "2px";
phrcameraobj08.style.height = "6px";
phrcameraobj08.style.transformStyle = 'preserve-3d';
phrcameraobj08.style.transform = 'translateZ(0px) translateY(1px) translateX(1px) rotateZ(0deg)';
phrcameraobj08.style.position = 'absolute';
phrcameraobj08.style.background = 'radial-gradient(153.44% 186.85% at 53.33% 79.86%, #5E87A3 0%, rgba(65, 71, 115, 0.30) 49.90%, rgba(35, 35, 63, 0.10) 100%)';
// phrcameraobj08.style.boxShadow = '0px 0px 4.755000591278076px 1.5850000381469727px rgba(0, 0, 0, 0.25) inset';
phrcameraobj08.style.borderRadius = '999px';
phrcameraobj08.style.filter = 'blur(1px)';
// phrcameraobj08.style.overflow = 'hidden';
phrcameraobj06.appendChild(phrcameraobj08);


const phrcameraobj09 = document.createElement('div');
phrcameraobj09.style.width = "2px";
phrcameraobj09.style.height = "2px";
phrcameraobj09.style.transformStyle = 'preserve-3d';
phrcameraobj09.style.transform = 'translateZ(0px) translateY(2px) translateX(6px) rotateZ(0deg)';
phrcameraobj09.style.position = 'absolute';
phrcameraobj09.style.background = '#C4BFD3';
// phrcameraobj09.style.boxShadow = '0px 0px 4.755000591278076px 1.5850000381469727px rgba(0, 0, 0, 0.25) inset';
phrcameraobj09.style.borderRadius = '999px';
phrcameraobj09.style.filter = 'blur(1px)';
// phrcameraobj09.style.overflow = 'hidden';
phrcameraobj06.appendChild(phrcameraobj09);

const phrcameraobj090 = document.createElement('div');
phrcameraobj090.style.width = "2px";
phrcameraobj090.style.height = "2px";
phrcameraobj090.style.transformStyle = 'preserve-3d';
phrcameraobj090.style.transform = 'translateZ(0px) translateY(3px) translateX(5px) rotateZ(0deg)';
phrcameraobj090.style.position = 'absolute';
phrcameraobj090.style.background = '#C4BFD3';
// phrcameraobj090.style.boxShadow = '0px 0px 4.755000591278076px 1.5850000381469727px rgba(0, 0, 0, 0.25) inset';
phrcameraobj090.style.borderRadius = '999px';
phrcameraobj090.style.filter = 'blur(0.5px)';
// phrcameraobj090.style.overflow = 'hidden';
phrcameraobj06.appendChild(phrcameraobj090);

const phrcameraobj010 = document.createElement('div');
phrcameraobj010.style.width = "2px";
phrcameraobj010.style.height = "2px";
phrcameraobj010.style.transformStyle = 'preserve-3d';
phrcameraobj010.style.transform = 'translateZ(0px) translateY(5px) translateX(2px) rotateZ(0deg)';
phrcameraobj010.style.position = 'absolute';
phrcameraobj010.style.background = 'rgba(204, 238, 255, 0.90)';
// phrcameraobj010.style.boxShadow = '0px 0px 4.755000591278076px 1.5850000381469727px rgba(0, 0, 0, 0.25) inset';
phrcameraobj010.style.borderRadius = '999px';
phrcameraobj010.style.filter = 'blur(1px)';
// phrcameraobj010.style.overflow = 'hidden';
phrcameraobj06.appendChild(phrcameraobj010);

const phrcameraobj0100 = document.createElement('div');
phrcameraobj0100.style.width = "3px";
phrcameraobj0100.style.height = "2px";
phrcameraobj0100.style.transformStyle = 'preserve-3d';
phrcameraobj0100.style.transform = 'translateZ(0px) translateY(6px) translateX(3px) rotateZ(0deg)';
phrcameraobj0100.style.position = 'absolute';
phrcameraobj0100.style.background = 'rgba(204, 238, 255, 0.90)';
// phrcameraobj0100.style.boxShadow = '0px 0px 4.755000591278076px 1.5850000381469727px rgba(0, 0, 0, 0.25) inset';
phrcameraobj0100.style.borderRadius = '999px';
phrcameraobj0100.style.filter = 'blur(0.5px)';
// phrcameraobj0100.style.overflow = 'hidden';
phrcameraobj06.appendChild(phrcameraobj0100);








const phrcameraobj001 = document.createElement('div');
phrcameraobj001.style.width = "60px";
phrcameraobj001.style.height = "60px";
phrcameraobj001.style.transformStyle = 'preserve-3d';
phrcameraobj001.style.transform = 'translateZ(-50px) translateY(90px) translateX(210px) rotateZ(0deg)';
phrcameraobj001.style.position = 'absolute';

phrcameraobj001.style.background = 'linear-gradient(300deg, rgb(0, 0, 0), rgb(63, 63, 63) 48.74%, rgb(229, 229, 229))';
phrcameraobj001.style.borderRadius = '999px';
phone.appendChild(phrcameraobj001);

const p0hrcameraobj001 = document.createElement('div');
p0hrcameraobj001.style.width = "60px";
p0hrcameraobj001.style.height = "60px";
p0hrcameraobj001.style.transformStyle = 'preserve-3d';
p0hrcameraobj001.style.transform = 'translateZ(-40px) translateY(90px) translateX(210px) rotateZ(0deg)';
p0hrcameraobj001.style.position = 'absolute';

p0hrcameraobj001.style.background = 'linear-gradient(300deg, rgb(0, 0, 0), rgb(63, 63, 63) 48.74%, rgb(229, 229, 229))';
p0hrcameraobj001.style.borderRadius = '999px';
phone.appendChild(p0hrcameraobj001);

const phrcameraobj002 = document.createElement('div');
phrcameraobj002.style.width = "50px";
phrcameraobj002.style.height = "50px";
phrcameraobj002.style.transformStyle = 'preserve-3d';
phrcameraobj002.style.transform = 'translateZ(0px) translateY(4px) translateX(4px) rotateZ(0deg)';
phrcameraobj002.style.position = 'absolute';
// phrcameraobj002.style.strokeWidth = '1px';
phrcameraobj002.style.border = '1px solid rgb(134, 134, 134)';
phrcameraobj002.style.background = 'linear-gradient(300deg, rgb(0, 0, 0), rgb(39, 39, 39) 55.04%, rgb(0, 0, 0))';
phrcameraobj002.style.borderRadius = '999px';
phrcameraobj001.appendChild(phrcameraobj002);

const phrcameraobj003 = document.createElement('div');
phrcameraobj003.style.width = "40px";
phrcameraobj003.style.height = "40px";
phrcameraobj003.style.transformStyle = 'preserve-3d';
phrcameraobj003.style.transform = 'translateZ(0px) translateY(9px) translateX(9px) rotateZ(0deg)';
phrcameraobj003.style.position = 'absolute';
// phrcameraobj003.style.strokeWidth = '1px';
phrcameraobj003.style.border = '1px solid rgba(108, 108, 108, 0.19)';
phrcameraobj003.style.background = 'rgb(15, 15, 15)';
phrcameraobj003.style.borderRadius = '999px';
phrcameraobj001.appendChild(phrcameraobj003);

const phrcameraobj004 = document.createElement('div');
phrcameraobj004.style.width = "30px";
phrcameraobj004.style.height = "30px";
phrcameraobj004.style.transformStyle = 'preserve-3d';
phrcameraobj004.style.transform = 'translateZ(0px) translateY(5px) translateX(5px) rotateZ(0deg)';
phrcameraobj004.style.position = 'absolute';
// phrcameraobj004.style.strokeWidth = '1px';
phrcameraobj004.style.boxShadow = '0px 0px 6.340000152587891px 0px rgba(0, 0, 0, 0.25) inset';
phrcameraobj004.style.background = '#060608';
phrcameraobj004.style.borderRadius = '999px';
phrcameraobj003.appendChild(phrcameraobj004);

const phrcameraobj005 = document.createElement('div');
phrcameraobj005.style.width = "15px";
phrcameraobj005.style.height = "15px";
phrcameraobj005.style.transformStyle = 'preserve-3d';
phrcameraobj005.style.transform = 'translateZ(0px) translateY(8px) translateX(8px) rotateZ(0deg)';
phrcameraobj005.style.position = 'absolute';
// phrcameraobj005.style.strokeWidth = '1px';
// phrcameraobj005.style.boxShadow = '0px 0px 6.340000152587891px 0px rgba(0, 0, 0, 0.25) inset';
phrcameraobj005.style.background = '#131217';
phrcameraobj005.style.borderRadius = '999px';
phrcameraobj004.appendChild(phrcameraobj005);

const phrcameraobj006 = document.createElement('div');
phrcameraobj006.style.width = "9px";
phrcameraobj006.style.height = "9px";
phrcameraobj006.style.transformStyle = 'preserve-3d';
phrcameraobj006.style.transform = 'translateZ(0px) translateY(3px) translateX(3px) rotateZ(0deg)';
phrcameraobj006.style.position = 'absolute';
phrcameraobj006.style.overflow = 'hidden';
// phrcameraobj006.style.boxShadow = '0px 0px 6.340000152587891px 0px rgba(0, 0, 0, 0.25) inset';
phrcameraobj006.style.background = '#00021A';
phrcameraobj006.style.borderRadius = '999px';
phrcameraobj005.appendChild(phrcameraobj006);

const phrcameraobj007 = document.createElement('div');
phrcameraobj007.style.width = "6px";
phrcameraobj007.style.height = "13px";
phrcameraobj007.style.transformStyle = 'preserve-3d';
phrcameraobj007.style.transform = 'translateZ(0px) translateY(2px) translateX(10px) rotateZ(0deg)';
phrcameraobj007.style.position = 'absolute';
phrcameraobj007.style.mixBlendMode = 'lighten';
phrcameraobj007.style.filter = 'blur(1px)';
// phrcameraobj007.style.boxShadow = '0px 0px 6.340000152587891px 0px rgba(0, 0, 0, 0.25) inset';
phrcameraobj007.style.background = 'radial-gradient(89.35% 109.08% at 29.68% 37.33%, #C7ECF6 0%, rgba(45, 81, 77, 0.30) 43.87%, rgba(26, 41, 43, 0.10) 77.56%)';
// phrcameraobj007.style.borderRadius = '999px';
phrcameraobj005.appendChild(phrcameraobj007);

const phrcameraobj008 = document.createElement('div');
phrcameraobj008.style.width = "7px";
phrcameraobj008.style.height = "10px";
phrcameraobj008.style.transformStyle = 'preserve-3d';
phrcameraobj008.style.transform = 'translateZ(0px) translateY(2px) translateX(-2px) rotateZ(0deg)';
phrcameraobj008.style.position = 'absolute';
phrcameraobj008.style.mixBlendMode = 'lighten';
phrcameraobj008.style.filter = 'blur(1px)';
// phrcameraobj008.style.boxShadow = '0px 0px 6.340000152587891px 0px rgba(0, 0, 0, 0.25) inset';
phrcameraobj008.style.background = 'radial-gradient(61.53% 73.53% at 64.06% 49.14%, #314A9B 0%, rgba(65, 71, 115, 0.30) 80.36%, rgba(35, 35, 63, 0.10) 100%)';
// phrcameraobj008.style.borderRadius = '999px';
phrcameraobj005.appendChild(phrcameraobj008);

const phrcameraobj009 = document.createElement('div');
phrcameraobj009.style.width = "4px";
phrcameraobj009.style.height = "4px";
phrcameraobj009.style.transformStyle = 'preserve-3d';
phrcameraobj009.style.transform = 'translateZ(0px) translateY(3px) translateX(7px) rotateZ(0deg)';
phrcameraobj009.style.position = 'absolute';
phrcameraobj009.style.mixBlendMode = 'lighten';
phrcameraobj009.style.filter = 'blur(1px)';
// phrcameraobj009.style.boxShadow = '0px 0px 6.340000152587891px 0px rgba(0, 0, 0, 0.25) inset';
phrcameraobj009.style.background = 'rgba(145, 204, 200, 0.90)';
phrcameraobj009.style.borderRadius = '999px';
phrcameraobj005.appendChild(phrcameraobj009);

const phrcameraobj0010 = document.createElement('div');
phrcameraobj0010.style.width = "4px";
phrcameraobj0010.style.height = "4px";
phrcameraobj0010.style.transformStyle = 'preserve-3d';
phrcameraobj0010.style.transform = 'translateZ(0px) translateY(6px) translateX(3px) rotateZ(0deg)';
phrcameraobj0010.style.position = 'absolute';
phrcameraobj0010.style.mixBlendMode = 'lighten';
phrcameraobj0010.style.filter = 'blur(1px)';
// phrcameraobj0010.style.boxShadow = '0px 0px 6.340000152587891px 0px rgba(0, 0, 0, 0.25) inset';
phrcameraobj0010.style.background = 'rgba(179, 181, 219, 0.90)';
phrcameraobj0010.style.borderRadius = '999px';
phrcameraobj005.appendChild(phrcameraobj0010);







const phrcameraobj0001 = document.createElement('div');
phrcameraobj0001.style.width = "60px";
phrcameraobj0001.style.height = "60px";
phrcameraobj0001.style.transformStyle = 'preserve-3d';
phrcameraobj0001.style.transform = 'translateZ(-50px) translateY(57px) translateX(153px) rotateZ(0deg)';
phrcameraobj0001.style.position = 'absolute';
phrcameraobj0001.style.background = 'linear-gradient(300deg, rgb(0, 0, 0), rgb(0, 0, 0) 10.92%, rgb(195, 195, 195) 53.78%, rgb(255, 255, 255) 83.19%, rgb(255, 255, 255))';
phrcameraobj0001.style.borderRadius = '999px';
phone.appendChild(phrcameraobj0001);

const p0hrcameraobj0001 = document.createElement('div');
p0hrcameraobj0001.style.width = "60px";
p0hrcameraobj0001.style.height = "60px";
p0hrcameraobj0001.style.transformStyle = 'preserve-3d';
p0hrcameraobj0001.style.transform = 'translateZ(-40px) translateY(57px) translateX(153px) rotateZ(0deg)';
p0hrcameraobj0001.style.position = 'absolute';
p0hrcameraobj0001.style.background = 'linear-gradient(300deg, rgb(0, 0, 0), rgb(0, 0, 0) 10.92%, rgb(195, 195, 195) 53.78%, rgb(255, 255, 255) 83.19%, rgb(255, 255, 255))';
p0hrcameraobj0001.style.borderRadius = '999px';
phone.appendChild(p0hrcameraobj0001);

const phrcameraobj0002 = document.createElement('div');
phrcameraobj0002.style.width = "48px";
phrcameraobj0002.style.height = "48px";
phrcameraobj0002.style.transformStyle = 'preserve-3d';
phrcameraobj0002.style.transform = 'translateZ(0px) translateY(5px) translateX(5px) rotateZ(0deg)';
phrcameraobj0002.style.position = 'absolute';
phrcameraobj0002.style.background = 'linear-gradient(337deg, rgb(16, 13, 16), rgb(16, 13, 16) 50.67%, rgb(100, 98, 99) 61.61%, rgb(93, 91, 92))';
phrcameraobj0002.style.borderRadius = '999px';
phrcameraobj0002.style.border = '1px solid rgb(213, 205, 205)';
phrcameraobj0001.appendChild(phrcameraobj0002);

const phrcameraobj0003 = document.createElement('div');
phrcameraobj0003.style.width = "46px";
phrcameraobj0003.style.height = "46px";
phrcameraobj0003.style.transformStyle = 'preserve-3d';
phrcameraobj0003.style.transform = 'translateZ(0px) translateY(1px) translateX(1px) rotateZ(0deg)';
phrcameraobj0003.style.position = 'absolute';
phrcameraobj0003.style.background = 'linear-gradient(330deg, rgb(16, 13, 16), rgb(16, 13, 16) 43.59%, rgb(93, 91, 92))';
phrcameraobj0003.style.borderRadius = '999px';
phrcameraobj0003.style.boxShadow = '0px 0px 4.755000591278076px 1.5850000381469727px rgba(0, 0, 0, 0.25) inset';
// phrcameraobj0003.style.border = '1px solid rgb(49, 49, 49)';
phrcameraobj0002.appendChild(phrcameraobj0003);

const phrcameraobj0004 = document.createElement('div');
phrcameraobj0004.style.width = "35px";
phrcameraobj0004.style.height = "35px";
phrcameraobj0004.style.transformStyle = 'preserve-3d';
phrcameraobj0004.style.transform = 'translateZ(0px) translateY(5px) translateX(5px) rotateZ(0deg)';
phrcameraobj0004.style.position = 'absolute';
phrcameraobj0004.style.background = 'linear-gradient(91deg, rgb(72, 72, 72), rgb(35, 35, 35))';
phrcameraobj0004.style.borderRadius = '999px';
phrcameraobj0004.style.boxShadow = '0px 0px 6.340000152587891px 0px rgba(0, 0, 0, 0.25) inset';
// phrcameraobj0004.style.border = '1px solid rgb(49, 49, 49)';
phrcameraobj0003.appendChild(phrcameraobj0004);

const phrcameraobj0005 = document.createElement('div');
phrcameraobj0005.style.width = "20px";
phrcameraobj0005.style.height = "20px";
phrcameraobj0005.style.transformStyle = 'preserve-3d';
phrcameraobj0005.style.transform = 'translateZ(0px) translateY(8px) translateX(8px) rotateZ(0deg)';
phrcameraobj0005.style.position = 'absolute';
phrcameraobj0005.style.background = 'radial-gradient(94.91% 94.91% at 19.13% 24.87%, rgba(35, 40, 36, 0) 47.4%, #232824 56.77%, #232824 82.8%, #819bc0 90.76%, #637583)';
// phrcameraobj0005.style.background = 'linear-gradient(-45deg, rgb(129, 155, 192) 12.18%, rgba(80, 80, 80, 1) 30.67%, rgb(20, 20, 20) 40.76%, rgb(41, 44, 42) 57.14%, rgb(35, 40, 36) 60.08%, rgb(0, 68, 105) 70.66%, rgb(99, 117, 131) 80.67%)';
phrcameraobj0005.style.borderRadius = '999px';
// phrcameraobj0005.style.boxShadow = '0px 0px 6.340000152587891px 0px rgba(0, 0, 0, 0.25) inset';
// phrcameraobj0005.style.border = '1px solid rgb(49, 49, 49)';
phrcameraobj0004.appendChild(phrcameraobj0005);

const phrcameraobj0006 = document.createElement('div');
phrcameraobj0006.style.width = "20px";
phrcameraobj0006.style.height = "20px";
phrcameraobj0006.style.transformStyle = 'preserve-3d';
phrcameraobj0006.style.transform = 'translateZ(0px) translateY(8px) translateX(8px) rotateZ(0deg)';
phrcameraobj0006.style.position = 'absolute';
phrcameraobj0006.style.background = 'radial-gradient(122.44% 122.44% at 108.70% 76.09%, rgba(35, 40, 36, 0.00) 47.40%, #232824 61.27%, #283A44 75.66%, #0C4475 84.75%, #839DC2 92.70%)';
// phrcameraobj0006.style.background = 'linear-gradient(-45deg, rgb(129, 155, 192) 12.18%, rgba(80, 80, 80, 1) 30.67%, rgb(20, 20, 20) 40.76%, rgb(41, 44, 42) 57.14%, rgb(35, 40, 36) 60.08%, rgb(0, 68, 105) 70.66%, rgb(99, 117, 131) 80.67%)';
phrcameraobj0006.style.borderRadius = '999px';
// phrcameraobj0006.style.boxShadow = '0px 0px 6.340000152587891px 0px rgba(0, 0, 0, 0.25) inset';
// phrcameraobj0006.style.border = '1px solid rgb(49, 49, 49)';
phrcameraobj0004.appendChild(phrcameraobj0006);

const phrcameraobj0007 = document.createElement('div');
phrcameraobj0007.style.width = "10px";
phrcameraobj0007.style.height = "10px";
phrcameraobj0007.style.transformStyle = 'preserve-3d';
phrcameraobj0007.style.transform = 'translateZ(0px) translateY(5px) translateX(5px) rotateZ(0deg)';
phrcameraobj0007.style.position = 'absolute';
phrcameraobj0007.style.background = 'rgb(2, 2, 2)';
phrcameraobj0007.style.borderRadius = '999px';
// phrcameraobj0007.style.boxShadow = '0px 0px 6.340000152587891px 0px rgba(0, 0, 0, 0.25) inset';
// phrcameraobj0004.style.border = '1px solid rgb(49, 49, 49)';
phrcameraobj0006.appendChild(phrcameraobj0007);

const phrcameraobj0008 = document.createElement('div');
phrcameraobj0008.style.width = "10px";
phrcameraobj0008.style.height = "10px";
phrcameraobj0008.style.transformStyle = 'preserve-3d';
phrcameraobj0008.style.transform = 'translateZ(0px) translateY(4px) translateX(4px) rotateZ(0deg)';
phrcameraobj0008.style.position = 'absolute';
phrcameraobj0008.style.background = 'rgba(26, 26, 26, 1)';
phrcameraobj0008.style.border = '1px solid rgba(71, 71, 71, 1)';
phrcameraobj0008.style.borderRadius = '999px';
// phrcameraobj0008.style.boxShadow = '0px 0px 6.340000152587891px 0px rgba(0, 0, 0, 0.25) inset';
// phrcameraobj0008.style.border = '1px solid rgb(49, 49, 49)';
phrcameraobj0006.appendChild(phrcameraobj0008);

const phrcameraobj00010 = document.createElement('div');
phrcameraobj00010.style.width = "4px";
phrcameraobj00010.style.height = "3px";
phrcameraobj00010.style.transformStyle = 'preserve-3d';
phrcameraobj00010.style.transform = 'translateZ(0px) translateY(3px) translateX(2px) rotateZ(0deg)';
phrcameraobj00010.style.position = 'absolute';
phrcameraobj00010.style.background = 'radial-gradient(92.79% 92.23% at 55.85% 25.54%, rgba(199, 236, 246, 0.80) 0%, rgba(45, 81, 77, 0.24) 43.87%, rgba(26, 41, 43, 0.08) 77.56%)';
phrcameraobj00010.style.mixBlendMode = 'lighten';
phrcameraobj00010.style.borderRadius = '999px';
phrcameraobj00010.style.filter = 'blur(1px)';
phrcameraobj0008.appendChild(phrcameraobj00010);

const phrcameraobj00011 = document.createElement('div');
phrcameraobj00011.style.width = "3px";
phrcameraobj00011.style.height = "3px";
phrcameraobj00011.style.transformStyle = 'preserve-3d';
phrcameraobj00011.style.transform = 'translateZ(0px) translateY(6px) translateX(2px) rotateZ(0deg)';
phrcameraobj00011.style.position = 'absolute';
phrcameraobj00011.style.background = 'radial-gradient(92.79% 92.23% at 55.85% 25.54%, #FFF 0%, rgba(45, 81, 77, 0.30) 43.87%, rgba(26, 41, 43, 0.10) 77.56%)';
phrcameraobj00011.style.mixBlendMode = 'lighten';
phrcameraobj00011.style.borderRadius = '999px';
phrcameraobj00011.style.filter = 'blur(1px)';
phrcameraobj0008.appendChild(phrcameraobj00011);

const phrcameraobj00012 = document.createElement('div');
phrcameraobj00012.style.width = "3px";
phrcameraobj00012.style.height = "5px";
phrcameraobj00012.style.transformStyle = 'preserve-3d';
phrcameraobj00012.style.transform = 'translateZ(0px) translateY(3.5px) translateX(5px) rotateZ(0deg)';
phrcameraobj00012.style.position = 'absolute';
phrcameraobj00012.style.background = 'radial-gradient(74.14% 85.85% at 38.82% 62.21%, #D8D4F1 0%, rgba(65, 71, 115, 0.30) 49.90%, rgba(35, 35, 63, 0.10) 100%)';
phrcameraobj00012.style.mixBlendMode = 'lighten';
phrcameraobj00012.style.borderRadius = '999px';
phrcameraobj00012.style.filter = 'blur(1px)';
phrcameraobj0008.appendChild(phrcameraobj00012);










const phrcamera01 = document.createElement('div');
phrcamera01.style.width = "120px";
phrcamera01.style.height = "150px";
phrcamera01.style.transformStyle = 'preserve-3d';
phrcamera01.style.transform = 'translateZ(-40px) translateY(8px) translateX(196px) rotateZ(15deg)';
phrcamera01.style.position = 'absolute';
phrcamera01.style.background = 'linear-gradient(180deg, #000 31.58%, #212121 100%)';
// phrcamera01.style.borderRadius = '30px';
phrcamera.appendChild(phrcamera01);

const phrcamera02 = document.createElement('div');
phrcamera02.style.width = "40px";
phrcamera02.style.height = "40px";
phrcamera02.style.transformStyle = 'preserve-3d';
phrcamera02.style.transform = 'translateZ(-40px) translateY(102px) translateX(219px) rotateZ(-90deg)';
phrcamera02.style.position = 'absolute';
phrcamera02.style.background = 'linear-gradient(46deg, #000 32.22%, rgba(0, 0, 0, 0.00) 47.86%)';
// phrcamera02.style.borderRadius = '30px';
phrcamera.appendChild(phrcamera02);


const phrcamera1 = document.createElement('div');
phrcamera1.style.width = "110px";
phrcamera1.style.height = "120px";
phrcamera1.style.transformStyle = 'preserve-3d';
phrcamera1.style.transform = 'translateZ(-40px) translateY(25px) translateX(30px)';
phrcamera1.style.position = 'absolute';
phrcamera1.style.background = 'black';
phrcamera1.style.borderRadius = '30px';
phone.appendChild(phrcamera1);





const phrcamera1trimg = document.createElement('div');
phrcamera1trimg.style.width = "60px";
phrcamera1trimg.style.height = "60px";
phrcamera1trimg.style.transformStyle = 'preserve-3d';
phrcamera1trimg.style.transform = 'rotateY(0deg)';
phrcamera1trimg.style.position = 'absolute';
phrcamera1trimg.style.background = 'white';
phrcamera1trimg.style.top = '30px';
phrcamera1trimg.style.right = '25px';
phrcamera1trimg.style.textAlign = 'center';
phrcamera1trimg.style.filter = 'blur(10px)';
phrcamera1trimg.style.zIndex = '1';
phrcamera1.appendChild(phrcamera1trimg);

const phrcamera1title = document.createElement('div');
phrcamera1title.style.width = "100%";
phrcamera1title.style.height = "10px";
phrcamera1title.style.transformStyle = 'preserve-3d';
phrcamera1title.style.transform = 'rotateY(180deg)';
phrcamera1title.style.position = 'absolute';
phrcamera1title.textContent = 'Name Music';
phrcamera1title.style.fontSize = '10px';
phrcamera1title.style.fontFamily = 'Roboto-Bold';
phrcamera1title.style.top = '20px';
phrcamera1title.style.textAlign = 'center';
phrcamera1title.style.whiteSpace = 'normal';
phrcamera1title.style.overflow = 'hidden';
phrcamera1title.style.textOverflow = 'ellipsis';
phrcamera1title.style.zIndex = '2';
phrcamera1.appendChild(phrcamera1title);

const phrcamera2title = document.createElement('div');
phrcamera2title.style.width = "100%";
phrcamera2title.style.height = "10px";
phrcamera2title.style.transformStyle = 'preserve-3d';
phrcamera2title.style.transform = 'rotateY(180deg)';
phrcamera2title.style.position = 'absolute';
phrcamera2title.textContent = 'Name Artist';
phrcamera2title.style.fontSize = '10px';
phrcamera2title.style.fontFamily = 'Roboto-Bold';
phrcamera2title.style.top = '40px';
phrcamera2title.style.textAlign = 'center';
phrcamera2title.style.whiteSpace = 'normal';
phrcamera2title.style.overflow = 'hidden';
phrcamera2title.style.textOverflow = 'ellipsis';
phrcamera2title.style.opacity = '0.5';
phrcamera2title.style.zIndex = '2';
phrcamera1.appendChild(phrcamera2title);



















// const playerBack0 = document.createElement("button");
// playerBack0.style.backgroundRepeat = "no-repeat";
// // playerBack0.style.opacity = "0.5";
// playerBack0.style.position = "absolute";
// playerBack0.style.left = "40px";
// playerBack0.style.top = "415px";
// playerBack0.style.transition = "0.2s";
// playerBack0.style.backgroundColor = "rgba(255, 255, 255, 0)";
// // playerBack0.style.backgroundImage = "url('https://administrati0n.github.io/data-one/player/img/controls/back/back.png')";
// playerBack0.style.backgroundSize = "36px";
// playerBack0.style.borderRadius = "999px";
// playerBack0.style.backgroundPosition = "center";
// playerBack0.style.width = "45px";
// playerBack0.style.height = "45px";
// playerBack0.style.borderRadius = "999px";
// // playerBack0.style.boxShadow = "0px 5px 10px rgba(255, 255, 255, 0.25)";
// playerBack0.style.border = "none";


// const playerBack01 = document.createElement("div");
// playerBack01.style.position = "absolute";
// playerBack01.style.left = "33px";
// playerBack01.style.backgroundRepeat = "no-repeat";
// playerBack01.style.margin = "0 auto";
// playerBack01.style.top = "13px";
// playerBack01.style.right = "30px";
// playerBack01.style.transition = "0.3s";
// playerBack01.style.backgroundColor = "rgba(255, 255, 255, 1)";
// playerBack01.style.backgroundSize = "45px";
// playerBack01.style.backgroundPosition = "center";
// playerBack01.style.width = "5px";
// playerBack01.style.height = "20px";
// playerBack01.style.border = "none";
// playerBack01.style.borderRadius = "999px";


// const playerBack02 = document.createElement("div");
// playerBack02.style.position = "absolute";
// playerBack02.style.right = "14px";
// playerBack02.style.backgroundRepeat = "no-repeat";
// playerBack02.style.margin = "0 auto";
// playerBack02.style.top = "17px";
// playerBack02.style.transition = "0.3s";
// playerBack02.style.backgroundColor = "rgba(255, 255, 255, 1)";
// playerBack02.style.backgroundSize = "45px";
// playerBack02.style.backgroundPosition = "center";
// playerBack02.style.width = "5px";
// playerBack02.style.height = "20px";
// playerBack02.style.border = "none";
// playerBack02.style.borderRadius = "999px";
// playerBack02.style.rotate = "-60deg";

// const playerBack03 = document.createElement("div");
// playerBack03.style.position = "absolute";
// playerBack03.style.right = "14px";
// playerBack03.style.backgroundRepeat = "no-repeat";
// playerBack03.style.margin = "0 auto";
// playerBack03.style.top = "9px";
// playerBack03.style.transition = "0.3s";
// playerBack03.style.backgroundColor = "rgba(255, 255, 255, 1)";
// playerBack03.style.backgroundSize = "45px";
// playerBack03.style.backgroundPosition = "center";
// playerBack03.style.width = "5px";
// playerBack03.style.height = "20px";
// playerBack03.style.border = "none";
// playerBack03.style.borderRadius = "999px";
// playerBack03.style.rotate = "60deg";



// const playerBack04 = document.createElement("div");
// playerBack04.style.position = "absolute";
// playerBack04.style.left = "18px";
// playerBack04.style.backgroundRepeat = "no-repeat";
// playerBack04.style.margin = "0 auto";
// playerBack04.style.top = "13px";
// playerBack04.style.right = "30px";
// playerBack04.style.transition = "0.3s";
// playerBack04.style.backgroundColor = "rgba(255, 255, 255, 1)";
// playerBack04.style.backgroundSize = "45px";
// playerBack04.style.backgroundPosition = "center";
// playerBack04.style.width = "5px";
// playerBack04.style.height = "20px";
// playerBack04.style.border = "none";
// playerBack04.style.borderRadius = "999px";


// const playerBack05 = document.createElement("div");
// playerBack05.style.position = "absolute";
// playerBack05.style.right = "29px";
// playerBack05.style.backgroundRepeat = "no-repeat";
// playerBack05.style.margin = "0 auto";
// playerBack05.style.top = "17px";
// playerBack05.style.transition = "0.3s";
// playerBack05.style.backgroundColor = "rgba(255, 255, 255, 1)";
// playerBack05.style.backgroundSize = "45px";
// playerBack05.style.backgroundPosition = "center";
// playerBack05.style.width = "5px";
// playerBack05.style.height = "20px";
// playerBack05.style.border = "none";
// playerBack05.style.borderRadius = "999px";
// playerBack05.style.rotate = "-60deg";

// const playerBack06 = document.createElement("div");
// playerBack06.style.position = "absolute";
// playerBack06.style.right = "29px";
// playerBack06.style.backgroundRepeat = "no-repeat";
// playerBack06.style.margin = "0 auto";
// playerBack06.style.top = "9px";
// playerBack06.style.transition = "0.3s";
// playerBack06.style.backgroundColor = "rgba(255, 255, 255, 1)";
// playerBack06.style.backgroundSize = "45px";
// playerBack06.style.backgroundPosition = "center";
// playerBack06.style.width = "5px";
// playerBack06.style.height = "20px";
// playerBack06.style.border = "none";
// playerBack06.style.borderRadius = "999px";
// playerBack06.style.rotate = "60deg";

// const playerBack07 = document.createElement("div");
// playerBack07.style.position = "absolute";
// playerBack07.style.left = "26px";
// playerBack07.style.backgroundRepeat = "no-repeat";
// playerBack07.style.margin = "0 auto";
// playerBack07.style.top = "17px";
// playerBack07.style.right = "30px";
// playerBack07.style.transition = "0.3s";
// playerBack07.style.backgroundColor = "rgba(255, 255, 255, 1)";
// playerBack07.style.backgroundSize = "45px";
// playerBack07.style.backgroundPosition = "center";
// playerBack07.style.width = "8px";
// playerBack07.style.height = "13px";
// playerBack07.style.border = "none";
// playerBack07.style.borderRadius = "999px";


// const playerBack08 = document.createElement("div");
// playerBack08.style.position = "absolute";
// playerBack08.style.left = "11px";
// playerBack08.style.backgroundRepeat = "no-repeat";
// playerBack08.style.margin = "0 auto";
// playerBack08.style.top = "17px";
// playerBack08.style.right = "30px";
// playerBack08.style.transition = "0.3s";
// playerBack08.style.backgroundColor = "rgba(255, 255, 255, 1)";
// playerBack08.style.backgroundSize = "45px";
// playerBack08.style.backgroundPosition = "center";
// playerBack08.style.width = "8px";
// playerBack08.style.height = "13px";
// playerBack08.style.border = "none";
// playerBack08.style.borderRadius = "999px";

// playerBack0.appendChild(playerBack01)
// playerBack0.appendChild(playerBack02)
// playerBack0.appendChild(playerBack03)
// playerBack0.appendChild(playerBack04)
// playerBack0.appendChild(playerBack05)
// playerBack0.appendChild(playerBack06)
// playerBack0.appendChild(playerBack07)
// playerBack0.appendChild(playerBack08)

const playerPlay0 = document.createElement("button");
playerPlay0.style.position = "absolute";
playerPlay0.style.right = "150px";
playerPlay0.style.backgroundRepeat = "no-repeat";
playerPlay0.style.margin = "0 auto";
playerPlay0.style.top = "55px";
playerPlay0.style.left = "30px";
playerPlay0.style.transition = "0.3s";
playerPlay0.style.backgroundColor = "rgba(255, 255, 255, 0)";
// playerPlay0.style.backgroundImage = "url('https://administrati0n.github.io/data-one/player/img/controls/play/play.png')";
playerPlay0.style.backgroundSize = "45px";
playerPlay0.style.backgroundPosition = "center";
playerPlay0.style.width = "45px";
playerPlay0.style.height = "45px";
playerPlay0.style.border = "none";
playerPlay0.style.borderRadius = "999px";
playerPlay0.style.zIndex = "2";
playerPlay0.style.transform = "rotateY(180deg)";

const playerPlay01 = document.createElement("div");
playerPlay01.style.position = "absolute";
playerPlay01.style.left = "11px";
playerPlay01.style.backgroundRepeat = "no-repeat";
playerPlay01.style.margin = "0 auto";
playerPlay01.style.top = "10px";
playerPlay01.style.right = "30px";
playerPlay01.style.transition = "0.3s";
playerPlay01.style.backgroundColor = "rgba(255, 255, 255, 1)";
playerPlay01.style.backgroundSize = "45px";
playerPlay01.style.backgroundPosition = "center";
playerPlay01.style.width = "10px";
playerPlay01.style.height = "26px";
playerPlay01.style.border = "none";
playerPlay01.style.borderRadius = "999px";


const playerPlay02 = document.createElement("div");
playerPlay02.style.position = "absolute";
playerPlay02.style.right = "17px";
playerPlay02.style.backgroundRepeat = "no-repeat";
playerPlay02.style.margin = "0 auto";
playerPlay02.style.top = "14px";
playerPlay02.style.right = "17px";
playerPlay02.style.transition = "0.3s";
playerPlay02.style.backgroundColor = "rgba(255, 255, 255, 1)";
playerPlay02.style.backgroundSize = "45px";
playerPlay02.style.backgroundPosition = "center";
playerPlay02.style.width = "10px";
playerPlay02.style.height = "26px";
playerPlay02.style.border = "none";
playerPlay02.style.borderRadius = "999px";
playerPlay02.style.rotate = "60deg";

const playerPlay03 = document.createElement("div");
playerPlay03.style.position = "absolute";
playerPlay03.style.right = "17px";
playerPlay03.style.backgroundRepeat = "no-repeat";
playerPlay03.style.margin = "0 auto";
playerPlay03.style.top = "6px";
playerPlay03.style.right = "17px";
playerPlay03.style.transition = "0.3s";
playerPlay03.style.backgroundColor = "rgba(255, 255, 255, 1)";
playerPlay03.style.backgroundSize = "45px";
playerPlay03.style.backgroundPosition = "center";
playerPlay03.style.width = "10px";
playerPlay03.style.height = "26px";
playerPlay03.style.border = "none";
playerPlay03.style.borderRadius = "999px";
playerPlay03.style.rotate = "-60deg";

const playerPlay04 = document.createElement("div");
playerPlay04.style.position = "absolute";
playerPlay04.style.left = "20px";
playerPlay04.style.backgroundRepeat = "no-repeat";
playerPlay04.style.margin = "0 auto";
playerPlay04.style.top = "16px";
playerPlay04.style.right = "15px";
playerPlay04.style.transition = "0.3s";
playerPlay04.style.backgroundColor = "rgba(255, 255, 255, 1)";
playerPlay04.style.backgroundSize = "45px";
playerPlay04.style.backgroundPosition = "center";
playerPlay04.style.width = "10px";
playerPlay04.style.height = "14px";
playerPlay04.style.border = "none";
playerPlay04.style.borderRadius = "999px";


const playerPlay05 = document.createElement("div");
playerPlay05.style.position = "absolute";
playerPlay05.style.left = "25px";
playerPlay05.style.backgroundRepeat = "no-repeat";
playerPlay05.style.margin = "0 auto";
playerPlay05.style.top = "22px";
playerPlay05.style.right = "30px";
playerPlay05.style.transition = "0.3s";
playerPlay05.style.backgroundColor = "rgba(255, 255, 255, 1)";
playerPlay05.style.backgroundSize = "45px";
playerPlay05.style.backgroundPosition = "center";
playerPlay05.style.width = "10px";
playerPlay05.style.height = "0px";
playerPlay05.style.border = "none";
playerPlay05.style.borderRadius = "999px";



playerPlay0.appendChild(playerPlay01)
playerPlay0.appendChild(playerPlay02)
playerPlay0.appendChild(playerPlay03)
playerPlay0.appendChild(playerPlay04)
playerPlay0.appendChild(playerPlay05)
// playerPlay0.appendChild(playerPlay06)
// playerPlay0.appendChild(playerPlay07)
// playerPlay0.appendChild(playerPlay08)



// const playerNex0t = document.createElement("button");
// playerNex0t.style.backgroundRepeat = "no-repeat";
// playerNex0t.style.position = "absolute";
// playerNex0t.style.right = "40px";
// playerNex0t.style.top = "415px";
// playerNex0t.style.transition = "0.2s";
// playerNex0t.style.backgroundColor = "rgba(255, 255, 255, 0)";
// // playerNex0t.style.backgroundImage = "url('https://administrati0n.github.io/data-one/player/img/controls/next/next.png')";
// playerNex0t.style.backgroundSize = "36px";
// playerNex0t.style.backgroundPosition = "center";
// playerNex0t.style.width = "45px";
// playerNex0t.style.height = "45px";
// playerNex0t.style.borderRadius = "999px";
// // playerNext0.style.boxShadow = "0px 5px 10px rgba(255, 255, 255, 0.25)";
// playerNex0t.style.border = "none";




// const playerNext01 = document.createElement("div");
// playerNext01.style.position = "absolute";
// playerNext01.style.left = "2px";
// playerNext01.style.backgroundRepeat = "no-repeat";
// playerNext01.style.margin = "0 auto";
// playerNext01.style.top = "13px";
// playerNext01.style.right = "30px";
// playerNext01.style.transition = "0.3s";
// playerNext01.style.backgroundColor = "rgba(255, 255, 255, 1)";
// playerNext01.style.backgroundSize = "45px";
// playerNext01.style.backgroundPosition = "center";
// playerNext01.style.width = "5px";
// playerNext01.style.height = "20px";
// playerNext01.style.border = "none";
// playerNext01.style.borderRadius = "999px";


// const playerNext02 = document.createElement("div");
// playerNext02.style.position = "absolute";
// playerNext02.style.right = "12px";
// playerNext02.style.backgroundRepeat = "no-repeat";
// playerNext02.style.margin = "0 auto";
// playerNext02.style.top = "17px";
// playerNext02.style.transition = "0.3s";
// playerNext02.style.backgroundColor = "rgba(255, 255, 255, 1)";
// playerNext02.style.backgroundSize = "45px";
// playerNext02.style.backgroundPosition = "center";
// playerNext02.style.width = "5px";
// playerNext02.style.height = "20px";
// playerNext02.style.border = "none";
// playerNext02.style.borderRadius = "999px";
// playerNext02.style.rotate = "60deg";

// const playerNext03 = document.createElement("div");
// playerNext03.style.position = "absolute";
// playerNext03.style.right = "12px";
// playerNext03.style.backgroundRepeat = "no-repeat";
// playerNext03.style.margin = "0 auto";
// playerNext03.style.top = "9px";
// playerNext03.style.transition = "0.3s";
// playerNext03.style.backgroundColor = "rgba(255, 255, 255, 1)";
// playerNext03.style.backgroundSize = "45px";
// playerNext03.style.backgroundPosition = "center";
// playerNext03.style.width = "5px";
// playerNext03.style.height = "20px";
// playerNext03.style.border = "none";
// playerNext03.style.borderRadius = "999px";
// playerNext03.style.rotate = "-60deg";



// const playerNext04 = document.createElement("div");
// playerNext04.style.position = "absolute";
// playerNext04.style.left = "21px";
// playerNext04.style.backgroundRepeat = "no-repeat";
// playerNext04.style.margin = "0 auto";
// playerNext04.style.top = "13px";
// playerNext04.style.right = "30px";
// playerNext04.style.transition = "0.3s";
// playerNext04.style.backgroundColor = "rgba(255, 255, 255, 1)";
// playerNext04.style.backgroundSize = "45px";
// playerNext04.style.backgroundPosition = "center";
// playerNext04.style.width = "5px";
// playerNext04.style.height = "20px";
// playerNext04.style.border = "none";
// playerNext04.style.borderRadius = "999px";


// const playerNext05 = document.createElement("div");
// playerNext05.style.position = "absolute";
// playerNext05.style.right = "27px";
// playerNext05.style.backgroundRepeat = "no-repeat";
// playerNext05.style.margin = "0 auto";
// playerNext05.style.top = "17px";
// playerNext05.style.transition = "0.3s";
// playerNext05.style.backgroundColor = "rgba(255, 255, 255, 1)";
// playerNext05.style.backgroundSize = "45px";
// playerNext05.style.backgroundPosition = "center";
// playerNext05.style.width = "5px";
// playerNext05.style.height = "20px";
// playerNext05.style.border = "none";
// playerNext05.style.borderRadius = "999px";
// playerNext05.style.rotate = "60deg";

// const playerNext06 = document.createElement("div");
// playerNext06.style.position = "absolute";
// playerNext06.style.right = "27px";
// playerNext06.style.backgroundRepeat = "no-repeat";
// playerNext06.style.margin = "0 auto";
// playerNext06.style.top = "9px";
// playerNext06.style.transition = "0.3s";
// playerNext06.style.backgroundColor = "rgba(255, 255, 255, 1)";
// playerNext06.style.backgroundSize = "45px";
// playerNext06.style.backgroundPosition = "center";
// playerNext06.style.width = "5px";
// playerNext06.style.height = "20px";
// playerNext06.style.border = "none";
// playerNext06.style.borderRadius = "999px";
// playerNext06.style.rotate = "-60deg";

// const playerNext07 = document.createElement("div");
// playerNext07.style.position = "absolute";
// playerNext07.style.left = "25px";
// playerNext07.style.backgroundRepeat = "no-repeat";
// playerNext07.style.margin = "0 auto";
// playerNext07.style.top = "17px";
// playerNext07.style.right = "30px";
// playerNext07.style.transition = "0.3s";
// playerNext07.style.backgroundColor = "rgba(255, 255, 255, 1)";
// playerNext07.style.backgroundSize = "45px";
// playerNext07.style.backgroundPosition = "center";
// playerNext07.style.width = "8px";
// playerNext07.style.height = "13px";
// playerNext07.style.border = "none";
// playerNext07.style.borderRadius = "999px";


// const playerNext08 = document.createElement("div");
// playerNext08.style.position = "absolute";
// playerNext08.style.left = "9px";
// playerNext08.style.backgroundRepeat = "no-repeat";
// playerNext08.style.margin = "0 auto";
// playerNext08.style.top = "17px";
// playerNext08.style.right = "30px";
// playerNext08.style.transition = "0.3s";
// playerNext08.style.backgroundColor = "rgba(255, 255, 255, 1)";
// playerNext08.style.backgroundSize = "45px";
// playerNext08.style.backgroundPosition = "center";
// playerNext08.style.width = "9px";
// playerNext08.style.height = "13px";
// playerNext08.style.border = "none";
// playerNext08.style.borderRadius = "999px";

// playerNex0t.appendChild(playerNext01)
// playerNex0t.appendChild(playerNext02)
// playerNex0t.appendChild(playerNext03)
// playerNex0t.appendChild(playerNext04)
// playerNex0t.appendChild(playerNext05)
// playerNex0t.appendChild(playerNext06)
// playerNex0t.appendChild(playerNext07)
// playerNex0t.appendChild(playerNext08)






phrcamera1.appendChild(playerPlay0)

// phrcamera1.appendChild(playerBack0)

// phrcamera1.appendChild(playerNex0t)
































const phrcamera2 = document.createElement('div');
phrcamera2.style.width = "20px";
phrcamera2.style.height = "20px";
phrcamera2.style.transformStyle = 'preserve-3d';
phrcamera2.style.transform = 'translateZ(-40px) translateY(125px) translateX(170px)';
phrcamera2.style.position = 'absolute';
phrcamera2.style.background = 'black';
phrcamera2.style.borderRadius = '999px';
phone.appendChild(phrcamera2);

const phrcamera3s = document.createElement('div');
phrcamera3s.style.width = "20px";
phrcamera3s.style.height = "20px";
phrcamera3s.style.transformStyle = 'preserve-3d';
phrcamera3s.style.transform = 'translateZ(-40px) translateY(25px) translateX(170px)';
phrcamera3s.style.position = 'absolute';
phrcamera3s.style.background = 'radial-gradient(50% 50.00% at 50% 50.00%, #F9EBD0 26.04%, #F9D9CA 79.69%, #FFF 100%)';
phrcamera3s.style.borderRadius = '30px';
phone.appendChild(phrcamera3s);


const phrcamera4 = document.createElement('div');
phrcamera4.style.width = "5px";
phrcamera4.style.height = "5px";
phrcamera4.style.transformStyle = 'preserve-3d';
phrcamera4.style.transform = 'translateZ(-40px) translateY(83px) translateX(219px)';
phrcamera4.style.position = 'absolute';
phrcamera4.style.background = 'radial-gradient(50% 50.00% at 50% 50.00%, #00FF47 0%, #00A12D 100%)';
phrcamera4.style.borderRadius = '30px';
phone.appendChild(phrcamera4);



// const phr20 = document.createElement('div');
// phr20.style.width = "10px";
// phr20.style.height = "8px";
// phr20.style.left = "5px";
// phr20.style.overflow = "hidden";
// phr20.style.boxShadow = "rgb(0, 0, 0) -0.6px 0px 0.4px 0px inset, rgba(0, 0, 0, 0.6) 0.4px 0px 0.4px 0px inset";
// phr20.style.background = "linear-gradient(to right, rgb(64, 64, 64), rgb(12, 12, 12) 16.39%, rgb(11, 11, 11) 49.58%, rgb(33, 33, 33) 81.93%, rgb(64, 64, 64))";
// phr20.style.transformStyle = 'preserve-3d';
// phr20.style.position = 'absolute';
// phr20.style.borderRadius = '50px';

// phr20.style.transform = 'translateZ(5px) translateY(-161.5px) translateX(3px) rotateY(90deg) rotateX(45deg)';
// phone.appendChild(phr20);

const phonebtnpower = document.createElement('div');
phonebtnpower.style.width = '5px';
phonebtnpower.style.display = 'flex';
phonebtnpower.style.height = '90px';
phonebtnpower.style.right = '0px';
phonebtnpower.style.top = '160px';
phonebtnpower.style.zIndex = '11';
phonebtnpower.style.position = 'absolute';
// phonebtnpower.style.borderRadius = '0px 10px 10px 0px';
// phonebtnpower.style.boxShadow = 'rgb(0, 0, 0) -0.6px 0px 0.4px 0px inset, rgba(0, 0, 0, 0.6) 0.4px 0px 0.4px 0px inset';
// phonebtnpower.style.background = 'linear-gradient(rgb(0, 0, 0), rgba(24, 24, 24, 0.65) 3.86%, rgba(0, 0, 0, 0) 40.76%, rgba(0, 0, 0, 0) 60.5%, rgba(18, 18, 18, 0.65) 96.16%, rgb(0, 0, 0)), rgb(42, 42, 42)';
phone.appendChild(phonebtnpower);



const phonebtnpower1 = document.createElement('div');
phonebtnpower1.style.transition = '0.5s';
phonebtnpower1.style.width = '15px';
phonebtnpower1.style.display = 'flex';
phonebtnpower1.style.height = '90px';
// phonebtnpower1.style.right = '0px';
// phonebtnpower1.style.top = '160px';
phonebtnpower1.style.zIndex = '11';
phonebtnpower1.style.position = 'absolute';
phonebtnpower1.style.transformStyle = 'preserve-3d';
phonebtnpower1.style.transform = 'translateZ(-15px) translateY(160px) translateX(285px) rotateY(90deg)';
phonebtnpower1.style.borderRadius = '999px';
// phonebtnpower1.style.boxShadow = 'rgb(0, 0, 0) -0.6px 0px 0.4px 0px inset, rgba(0, 0, 0, 0.6) 0.4px 0px 0.4px 0px inset';
phonebtnpower1.style.background = 'none';
phone.appendChild(phonebtnpower1);

const phonebtnpower2 = document.createElement('div');
phonebtnpower2.style.transition = '0.5s';
phonebtnpower2.style.width = '15px';
phonebtnpower2.style.display = 'flex';
phonebtnpower2.style.height = '90px';
// phonebtnpower2.style.right = '0px';
// phonebtnpower2.style.top = '160px';
phonebtnpower2.style.zIndex = '11';
phonebtnpower2.style.position = 'absolute';
phonebtnpower2.style.transformStyle = 'preserve-3d';
phonebtnpower2.style.transform = 'translateZ(6px) translateY(0px) translateX(0px) rotateY(0deg)';
phonebtnpower2.style.borderRadius = '999px';
// phonebtnpower2.style.boxShadow = 'rgb(0, 0, 0) -0.6px 0px 0.4px 0px inset, rgba(0, 0, 0, 0.6) 0.4px 0px 0.4px 0px inset';
phonebtnpower2.style.background = 'repeating-radial-gradient(rgb(38, 38, 38), rgb(24, 24, 24))';
phonebtnpower1.appendChild(phonebtnpower2);

const phonebtnpower4 = document.createElement('div');
phonebtnpower4.style.transition = '0.5s';
phonebtnpower4.style.width = '6px';
phonebtnpower4.style.display = 'flex';
phonebtnpower4.style.height = '77px';
// phonebtnpower4.style.right = '0px';
// phonebtnpower4.style.top = '160px';
phonebtnpower4.style.zIndex = '11';
phonebtnpower4.style.position = 'absolute';
phonebtnpower4.style.transformStyle = 'preserve-3d';
phonebtnpower4.style.transform = 'translateZ(3px) translateY(6px) translateX(-3px) rotateY(90deg)';
// phonebtnpower4.style.borderRadius = '999px';
phonebtnpower4.style.boxShadow = 'rgb(25, 25, 25) 0.6px 0px 0.4px 0px inset, rgba(46, 46, 46, 0.6) -0.4px 0px 0.4px 0px inset';
phonebtnpower4.style.background = 'rgb(24, 24, 24)';
phonebtnpower1.appendChild(phonebtnpower4);

const phonebtnpower5 = document.createElement('div');
phonebtnpower5.style.transition = '0.5s';
phonebtnpower5.style.width = '6px';
phonebtnpower5.style.display = 'flex';
phonebtnpower5.style.height = '77px';
// phonebtnpower5.style.right = '0px';
// phonebtnpower5.style.top = '160px';
phonebtnpower5.style.zIndex = '11';
phonebtnpower5.style.position = 'absolute';
phonebtnpower5.style.transformStyle = 'preserve-3d';
phonebtnpower5.style.transform = 'translateZ(3px) translateY(6px) translateX(12px) rotateY(90deg)';
// phonebtnpower5.style.borderRadius = '999px';
phonebtnpower5.style.boxShadow = 'rgb(25, 25, 25) 0.6px 0px 0.4px 0px inset, rgba(46, 46, 46, 0.6) -0.4px 0px 0.4px 0px inset';
phonebtnpower5.style.background = 'rgb(24, 24, 24)';
phonebtnpower1.appendChild(phonebtnpower5);

const phonebtnpower6 = document.createElement('div');
phonebtnpower6.style.transition = '0.5s';
phonebtnpower6.style.width = '6px';
phonebtnpower6.style.display = 'flex';
phonebtnpower6.style.height = '11px';
// phonebtnpower6.style.right = '0px';
// phonebtnpower6.style.top = '160px';
phonebtnpower6.style.zIndex = '11';
phonebtnpower6.style.position = 'absolute';
phonebtnpower6.style.transformStyle = 'preserve-3d';
phonebtnpower6.style.transform = 'translateZ(3px) translateY(81px) translateX(8px) rotateY(90deg) rotateX(-43deg)';
// phonebtnpower6.style.borderRadius = '999px';
phonebtnpower6.style.boxShadow = 'rgb(25, 25, 25) 0.6px 0px 0.4px 0px inset, rgba(46, 46, 46, 0.6) -0.4px 0px 0.4px 0px inset';
phonebtnpower6.style.background = 'rgb(24, 24, 24)';
phonebtnpower1.appendChild(phonebtnpower6);

const phonebtnpower7 = document.createElement('div');
phonebtnpower7.style.transition = '0.5s';
phonebtnpower7.style.width = '6px';
phonebtnpower7.style.display = 'flex';
phonebtnpower7.style.height = '11px';
// phonebtnpower7.style.right = '0px';
// phonebtnpower7.style.top = '160px';
phonebtnpower7.style.zIndex = '11';
phonebtnpower7.style.position = 'absolute';
phonebtnpower7.style.transformStyle = 'preserve-3d';
phonebtnpower7.style.transform = 'translateZ(3px) translateY(81px) translateX(1px) rotateY(90deg) rotateX(43deg)';
// phonebtnpower7.style.borderRadius = '999px';
phonebtnpower7.style.boxShadow = 'rgb(25, 25, 25) 0.6px 0px 0.4px 0px inset, rgba(46, 46, 46, 0.6) -0.4px 0px 0.4px 0px inset';
phonebtnpower7.style.background = 'rgb(24, 24, 24)';
phonebtnpower1.appendChild(phonebtnpower7);

const phonebtnpower8 = document.createElement('div');
phonebtnpower8.style.transition = '0.5s';
phonebtnpower8.style.width = '6px';
phonebtnpower8.style.display = 'flex';
phonebtnpower8.style.height = '11px';
// phonebtnpower8.style.right = '0px';
// phonebtnpower8.style.top = '160px';
phonebtnpower8.style.zIndex = '11';
phonebtnpower8.style.position = 'absolute';
phonebtnpower8.style.transformStyle = 'preserve-3d';
phonebtnpower8.style.transform = 'translateZ(3px) translateY(-2px) translateX(1px) rotateY(90deg) rotateX(-43deg)';
// phonebtnpower8.style.borderRadius = '999px';
phonebtnpower8.style.boxShadow = 'rgb(25, 25, 25) 0.6px 0px 0.4px 0px inset, rgba(46, 46, 46, 0.6) -0.4px 0px 0.4px 0px inset';
phonebtnpower8.style.background = 'rgb(24, 24, 24)';
phonebtnpower1.appendChild(phonebtnpower8);

const phonebtnpower9 = document.createElement('div');
phonebtnpower9.style.transition = '0.5s';
phonebtnpower9.style.width = '6px';
phonebtnpower9.style.display = 'flex';
phonebtnpower9.style.height = '11px';
// phonebtnpower9.style.right = '0px';
// phonebtnpower9.style.top = '160px';
phonebtnpower9.style.zIndex = '11';
phonebtnpower9.style.position = 'absolute';
phonebtnpower9.style.transformStyle = 'preserve-3d';
phonebtnpower9.style.transform = 'translateZ(3px) translateY(-2px) translateX(8px) rotateY(90deg) rotateX(43deg)';
// phonebtnpower9.style.borderRadius = '999px';
phonebtnpower9.style.boxShadow = 'rgb(25, 25, 25) 0.6px 0px 0.4px 0px inset, rgba(46, 46, 46, 0.6) -0.4px 0px 0.4px 0px inset';
phonebtnpower9.style.background = 'rgb(24, 24, 24)';
phonebtnpower1.appendChild(phonebtnpower9);



const phonebtnpower3 = document.createElement('div');
phonebtnpower3.style.transition = '0.5s';
phonebtnpower3.style.width = '5px';
phonebtnpower3.style.display = 'flex';
phonebtnpower3.style.height = '90px';
phonebtnpower3.style.right = '0px';
phonebtnpower3.style.top = '160px';
phonebtnpower3.style.zIndex = '11';
phonebtnpower3.style.position = 'absolute';
phonebtnpower3.style.transformStyle = 'preserve-3d';
phonebtnpower3.style.transform = 'translateZ(-30px)';
// phonebtnpower3.style.borderRadius = '0px 10px 10px 0px';
// phonebtnpower3.style.boxShadow = 'rgb(0, 0, 0) -0.6px 0px 0.4px 0px inset, rgba(0, 0, 0, 0.6) 0.4px 0px 0.4px 0px inset';
// phonebtnpower3.style.background = 'linear-gradient(rgb(0, 0, 0), rgba(24, 24, 24, 0.65) 3.86%, rgba(0, 0, 0, 0) 40.76%, rgba(0, 0, 0, 0) 60.5%, rgba(18, 18, 18, 0.65) 96.16%, rgb(0, 0, 0)), rgb(42, 42, 42)';
phone.appendChild(phonebtnpower3);





const phonebtnplus = document.createElement('div');
phonebtnplus.style.width = '5px';
phonebtnplus.style.display = 'flex';
phonebtnplus.style.height = '60px';
phonebtnplus.style.left = '0px';
phonebtnplus.style.top = '130px';
phonebtnplus.style.zIndex = '11';
phonebtnplus.style.position = 'absolute';
// phonebtnplus.style.borderRadius = '10px 0px 0px 10px';
// phonebtnplus.style.boxShadow = 'rgb(0, 0, 0) 0.6px 0px 0.4px 0px inset, rgba(0, 0, 0, 0.6) -0.4px 0px 0.4px 0px inset';
// phonebtnplus.style.background = 'linear-gradient(rgb(0, 0, 0), rgba(24, 24, 24, 0.65) 3.86%, rgba(0, 0, 0, 0) 40.76%, rgba(0, 0, 0, 0) 60.5%, rgba(18, 18, 18, 0.65) 96.16%, rgb(0, 0, 0)), rgb(42, 42, 42)';
phone.appendChild(phonebtnplus);




const phonebtnplus1 = document.createElement('div');
phonebtnplus1.style.transition = '0.5s';
phonebtnplus1.style.width = '15px';
phonebtnplus1.style.display = 'flex';
phonebtnplus1.style.height = '60px';
// phonebtnplus1.style.right = '0px';
// phonebtnplus1.style.top = '160px';
phonebtnplus1.style.zIndex = '11';
phonebtnplus1.style.position = 'absolute';
phonebtnplus1.style.transformStyle = 'preserve-3d';
phonebtnplus1.style.transform = 'translateZ(-15px) translateY(130px) translateX(0px) rotateY(-90deg)';
phonebtnplus1.style.borderRadius = '999px';
// phonebtnplus1.style.boxShadow = 'rgb(0, 0, 0) -0.6px 0px 0.4px 0px inset, rgba(0, 0, 0, 0.6) 0.4px 0px 0.4px 0px inset';
phonebtnplus1.style.background = 'none';
phone.appendChild(phonebtnplus1);

const phonebtnplus2 = document.createElement('div');
phonebtnplus2.style.transition = '0.5s';
phonebtnplus2.style.width = '15px';
phonebtnplus2.style.display = 'flex';
phonebtnplus2.style.height = '60px';
// phonebtnplus2.style.right = '0px';
// phonebtnplus2.style.top = '160px';
phonebtnplus2.style.zIndex = '11';
phonebtnplus2.style.position = 'absolute';
phonebtnplus2.style.transformStyle = 'preserve-3d';
phonebtnplus2.style.transform = 'translateZ(6px) translateY(0px) translateX(0px) rotateY(0deg)';
phonebtnplus2.style.borderRadius = '999px';
// phonebtnplus2.style.boxShadow = 'rgb(0, 0, 0) -0.6px 0px 0.4px 0px inset, rgba(0, 0, 0, 0.6) 0.4px 0px 0.4px 0px inset';
phonebtnplus2.style.background = 'repeating-radial-gradient(rgb(38, 38, 38), rgb(24, 24, 24))';
phonebtnplus1.appendChild(phonebtnplus2);

const phonebtnplus4 = document.createElement('div');
phonebtnplus4.style.transition = '0.5s';
phonebtnplus4.style.width = '6px';
phonebtnplus4.style.display = 'flex';
phonebtnplus4.style.height = '47px';
// phonebtnplus4.style.right = '0px';
// phonebtnplus4.style.top = '160px';
phonebtnplus4.style.zIndex = '11';
phonebtnplus4.style.position = 'absolute';
phonebtnplus4.style.transformStyle = 'preserve-3d';
phonebtnplus4.style.transform = 'translateZ(3px) translateY(6px) translateX(-3px) rotateY(90deg)';
// phonebtnplus4.style.borderRadius = '999px';
phonebtnplus4.style.boxShadow = 'rgb(25, 25, 25) 0.6px 0px 0.4px 0px inset, rgba(46, 46, 46, 0.6) -0.4px 0px 0.4px 0px inset';
phonebtnplus4.style.background = 'rgb(24, 24, 24)';
phonebtnplus1.appendChild(phonebtnplus4);

const phonebtnplus5 = document.createElement('div');
phonebtnplus5.style.transition = '0.5s';
phonebtnplus5.style.width = '6px';
phonebtnplus5.style.display = 'flex';
phonebtnplus5.style.height = '47px';
// phonebtnplus5.style.right = '0px';
// phonebtnplus5.style.top = '160px';
phonebtnplus5.style.zIndex = '11';
phonebtnplus5.style.position = 'absolute';
phonebtnplus5.style.transformStyle = 'preserve-3d';
phonebtnplus5.style.transform = 'translateZ(3px) translateY(6px) translateX(12px) rotateY(90deg)';
// phonebtnplus5.style.borderRadius = '999px';
phonebtnplus5.style.boxShadow = 'rgb(25, 25, 25) 0.6px 0px 0.4px 0px inset, rgba(46, 46, 46, 0.6) -0.4px 0px 0.4px 0px inset';
phonebtnplus5.style.background = 'rgb(24, 24, 24)';
phonebtnplus1.appendChild(phonebtnplus5);

const phonebtnplus6 = document.createElement('div');
phonebtnplus6.style.transition = '0.5s';
phonebtnplus6.style.width = '6px';
phonebtnplus6.style.display = 'flex';
phonebtnplus6.style.height = '11px';
// phonebtnplus6.style.right = '0px';
// phonebtnplus6.style.top = '160px';
phonebtnplus6.style.zIndex = '11';
phonebtnplus6.style.position = 'absolute';
phonebtnplus6.style.transformStyle = 'preserve-3d';
phonebtnplus6.style.transform = 'translateZ(3px) translateY(51px) translateX(8px) rotateY(90deg) rotateX(-43deg)';
// phonebtnplus6.style.borderRadius = '999px';
phonebtnplus6.style.boxShadow = 'rgb(25, 25, 25) 0.6px 0px 0.4px 0px inset, rgba(46, 46, 46, 0.6) -0.4px 0px 0.4px 0px inset';
phonebtnplus6.style.background = 'rgb(24, 24, 24)';
phonebtnplus1.appendChild(phonebtnplus6);

const phonebtnplus7 = document.createElement('div');
phonebtnplus7.style.transition = '0.5s';
phonebtnplus7.style.width = '6px';
phonebtnplus7.style.display = 'flex';
phonebtnplus7.style.height = '11px';
// phonebtnplus7.style.right = '0px';
// phonebtnplus7.style.top = '160px';
phonebtnplus7.style.zIndex = '11';
phonebtnplus7.style.position = 'absolute';
phonebtnplus7.style.transformStyle = 'preserve-3d';
phonebtnplus7.style.transform = 'translateZ(3px) translateY(51px) translateX(1px) rotateY(90deg) rotateX(43deg)';
// phonebtnplus7.style.borderRadius = '999px';
phonebtnplus7.style.boxShadow = 'rgb(25, 25, 25) 0.6px 0px 0.4px 0px inset, rgba(46, 46, 46, 0.6) -0.4px 0px 0.4px 0px inset';
phonebtnplus7.style.background = 'rgb(24, 24, 24)';
phonebtnplus1.appendChild(phonebtnplus7);

const phonebtnplus8 = document.createElement('div');
phonebtnplus8.style.transition = '0.5s';
phonebtnplus8.style.width = '6px';
phonebtnplus8.style.display = 'flex';
phonebtnplus8.style.height = '11px';
// phonebtnplus8.style.right = '0px';
// phonebtnplus8.style.top = '160px';
phonebtnplus8.style.zIndex = '11';
phonebtnplus8.style.position = 'absolute';
phonebtnplus8.style.transformStyle = 'preserve-3d';
phonebtnplus8.style.transform = 'translateZ(3px) translateY(-2px) translateX(1px) rotateY(90deg) rotateX(-43deg)';
// phonebtnplus8.style.borderRadius = '999px';
phonebtnplus8.style.boxShadow = 'rgb(25, 25, 25) 0.6px 0px 0.4px 0px inset, rgba(46, 46, 46, 0.6) -0.4px 0px 0.4px 0px inset';
phonebtnplus8.style.background = 'rgb(24, 24, 24)';
phonebtnplus1.appendChild(phonebtnplus8);

const phonebtnplus9 = document.createElement('div');
phonebtnplus9.style.transition = '0.5s';
phonebtnplus9.style.width = '6px';
phonebtnplus9.style.display = 'flex';
phonebtnplus9.style.height = '11px';
// phonebtnplus9.style.right = '0px';
// phonebtnplus9.style.top = '160px';
phonebtnplus9.style.zIndex = '11';
phonebtnplus9.style.position = 'absolute';
phonebtnplus9.style.transformStyle = 'preserve-3d';
phonebtnplus9.style.transform = 'translateZ(3px) translateY(-2px) translateX(8px) rotateY(90deg) rotateX(43deg)';
// phonebtnplus9.style.borderRadius = '999px';
phonebtnplus9.style.boxShadow = 'rgb(25, 25, 25) 0.6px 0px 0.4px 0px inset, rgba(46, 46, 46, 0.6) -0.4px 0px 0.4px 0px inset';
phonebtnplus9.style.background = 'rgb(24, 24, 24)';
phonebtnplus1.appendChild(phonebtnplus9);

const phonebtnplus3 = document.createElement('div');
phonebtnplus3.style.width = '5px';
phonebtnplus3.style.display = 'flex';
phonebtnplus3.style.height = '60px';
phonebtnplus3.style.left = '0px';
phonebtnplus3.style.top = '130px';
phonebtnplus3.style.zIndex = '11';
phonebtnplus3.style.position = 'absolute';
// phonebtnplus3.style.borderRadius = '10px 0px 0px 10px';
phonebtnplus3.style.transform = 'translateZ(-30px)';
// phonebtnplus3.style.boxShadow = 'rgb(0, 0, 0) 0.6px 0px 0.4px 0px inset, rgba(0, 0, 0, 0.6) -0.4px 0px 0.4px 0px inset';
// phonebtnplus3.style.background = 'linear-gradient(rgb(0, 0, 0), rgba(24, 24, 24, 0.65) 3.86%, rgba(0, 0, 0, 0) 40.76%, rgba(0, 0, 0, 0) 60.5%, rgba(18, 18, 18, 0.65) 96.16%, rgb(0, 0, 0)), rgb(42, 42, 42)';
phone.appendChild(phonebtnplus3);










const phonebtnvol = document.createElement('div');
phonebtnvol.style.width = '3px';
phonebtnvol.style.display = 'flex';
phonebtnvol.style.height = '30px';
phonebtnvol.style.left = '2px';
phonebtnvol.style.top = '80px';
phonebtnvol.style.zIndex = '11';
phonebtnvol.style.position = 'absolute';
// phonebtnvol.style.borderRadius = '10px 0px 0px 10px';
// phonebtnvol.style.boxShadow = 'rgb(0, 0, 0) 0.6px 0px 0.4px 0px inset, rgba(0, 0, 0, 0.6) -0.4px 0px 0.4px 0px inset';
// phonebtnvol.style.background = 'linear-gradient(rgb(0, 0, 0), rgba(24, 24, 24, 0.65) 3.86%, rgba(0, 0, 0, 0) 40.76%, rgba(0, 0, 0, 0) 60.5%, rgba(18, 18, 18, 0.65) 96.16%, rgb(0, 0, 0)), rgb(42, 42, 42)';
phone.appendChild(phonebtnvol);

const phonebtnvolb = document.createElement('div');
phonebtnvolb.style.width = '3px';
phonebtnvolb.style.display = 'flex';
phonebtnvolb.style.height = '30px';
phonebtnvolb.style.left = '2px';
phonebtnvolb.style.top = '80px';
phonebtnvolb.style.transform = 'translateZ(-30px)';
// phonebtnvolb.style.zIndex = '11';
phonebtnvolb.style.position = 'absolute';
// phonebtnvolb.style.borderRadius = '10px 0px 0px 10px';
// phonebtnvolb.style.boxShadow = 'rgb(0, 0, 0) 0.6px 0px 0.4px 0px inset, rgba(0, 0, 0, 0.6) -0.4px 0px 0.4px 0px inset';
// phonebtnvolb.style.background = 'linear-gradient(rgb(0, 0, 0), rgba(24, 24, 24, 0.65) 3.86%, rgba(0, 0, 0, 0) 40.76%, rgba(0, 0, 0, 0) 60.5%, rgba(18, 18, 18, 0.65) 96.16%, rgb(0, 0, 0)), rgb(42, 42, 42)';
phone.appendChild(phonebtnvolb);

const phonebtnvol01 = document.createElement('div');
phonebtnvol01.style.width = '20px';
phonebtnvol01.style.display = 'flex';
phonebtnvol01.style.height = '30px';
phonebtnvol01.style.left = '2px';
phonebtnvol01.style.top = '80px';
phonebtnvol01.style.zIndex = '11';
phonebtnvol01.style.position = 'absolute';
phonebtnvol01.style.transformStyle = 'preserve-3d';
phonebtnvol01.style.transform = 'translateZ(-15px) translateX(-7.5px) rotateY(270deg)';
phonebtnvol01.style.borderRadius = '4px 4px 4px 4px';
phonebtnvol01.style.background = 'black';
phone.appendChild(phonebtnvol01);

const phonebtnvol001 = document.createElement('div');
phonebtnvol001.style.width = '8px';
phonebtnvol001.style.display = 'flex';
phonebtnvol001.style.height = '25px';
phonebtnvol001.style.left = '2px';
phonebtnvol001.style.top = '2px';
phonebtnvol001.style.zIndex = '11';
phonebtnvol001.style.position = 'absolute';
phonebtnvol001.style.transformStyle = 'preserve-3d';
phonebtnvol001.style.transform = 'translateZ(0px) translateX(9px) rotateY(0deg)';
phonebtnvol001.style.borderRadius = '2px 2px 2px 2px';
phonebtnvol001.style.background = 'none';
phonebtnvol001.style.transition = '0.5s';
phonebtnvol01.appendChild(phonebtnvol001);

const phonebtnvol02 = document.createElement('div');
phonebtnvol02.style.width = '8px';
phonebtnvol02.style.display = 'flex';
phonebtnvol02.style.height = '25px';
phonebtnvol02.style.left = '2px';
phonebtnvol02.style.top = '2px';
phonebtnvol02.style.zIndex = '11';
phonebtnvol02.style.position = 'absolute';
phonebtnvol02.style.transformStyle = 'preserve-3d';
phonebtnvol02.style.transform = 'translateZ(1px) translateX(0px) rotateY(0deg)';
phonebtnvol02.style.borderRadius = '2px 2px 2px 2px';
phonebtnvol02.style.background = 'rgba(71, 1, 1, 1)';
phonebtnvol01.appendChild(phonebtnvol02);

const phonebtnvol03 = document.createElement('div');
phonebtnvol03.style.width = '8px';
phonebtnvol03.style.display = 'flex';
phonebtnvol03.style.height = '25px';
// phonebtnvol03.style.left = '2px';
// phonebtnvol03.style.top = '2px';
phonebtnvol03.style.zIndex = '11';
phonebtnvol03.style.position = 'absolute';
phonebtnvol03.style.transformStyle = 'preserve-3d';
phonebtnvol03.style.transform = 'translateZ(3px) translateX(0px) rotateY(0deg)';
phonebtnvol03.style.borderRadius = '2px 2px 2px 2px';
phonebtnvol03.style.background = 'repeating-radial-gradient(rgb(38, 38, 38), rgb(24, 24, 24))';
phonebtnvol001.appendChild(phonebtnvol03);

const phonebtnvol04 = document.createElement('div');
phonebtnvol04.style.width = '6px';
phonebtnvol04.style.display = 'flex';
phonebtnvol04.style.height = '21px';
// phonebtnvol04.style.left = '2px';
// phonebtnvol04.style.top = '2px';
phonebtnvol04.style.zIndex = '11';
phonebtnvol04.style.position = 'absolute';
phonebtnvol04.style.transformStyle = 'preserve-3d';
phonebtnvol04.style.transform = 'translateZ(0px) translateX(-3px) rotateY(90deg) translateY(2px)';
phonebtnvol04.style.boxShadow = '0.6px 0 0.4px 0 rgb(25, 25, 25) inset, -0.4px 0 0.4px 0 rgba(46, 46, 46, 0.6) inset';

phonebtnvol04.style.background = 'linear-gradient(rgb(0, 0, 0), rgba(24, 24, 24, 0.65) 3.86%, rgba(0, 0, 0, 0) 40.76%, rgba(0, 0, 0, 0) 60.5%, rgba(18, 18, 18, 0.65) 96.16%, rgb(0, 0, 0)), rgb(42, 42, 42)';

// phonebtnvol04.style.borderRadius = '2px 2px 2px 2px';
phonebtnvol04.style.background = 'rgba(24, 24, 24, 1)';
phonebtnvol001.appendChild(phonebtnvol04);

const phonebtnvol05 = document.createElement('div');
phonebtnvol05.style.width = '6px';
phonebtnvol05.style.display = 'flex';
phonebtnvol05.style.height = '4px';
// phonebtnvol05.style.left = '2px';
// phonebtnvol05.style.top = '2px';
phonebtnvol05.style.zIndex = '11';
phonebtnvol05.style.position = 'absolute';
phonebtnvol05.style.transformStyle = 'preserve-3d';
phonebtnvol05.style.transform = 'translateZ(0px) translateX(1px) rotateY(90deg) translateY(23px) rotateX(90deg)';
// phonebtnvol05.style.borderRadius = '2px 2px 2px 2px';
phonebtnvol05.style.background = 'rgba(24, 24, 24, 1)';
phonebtnvol001.appendChild(phonebtnvol05);

const phonebtnvol06 = document.createElement('div');
phonebtnvol06.style.width = '6px';
phonebtnvol06.style.display = 'flex';
phonebtnvol06.style.height = '4px';
// phonebtnvol06.style.left = '2px';
// phonebtnvol06.style.top = '2px';
phonebtnvol06.style.zIndex = '11';
phonebtnvol06.style.position = 'absolute';
phonebtnvol06.style.transformStyle = 'preserve-3d';
phonebtnvol06.style.transform = 'translateZ(0px) translateX(1px) rotateY(90deg) translateY(-2px) rotateX(90deg)';
// phonebtnvol06.style.borderRadius = '2px 2px 2px 2px';
phonebtnvol06.style.background = 'rgba(24, 24, 24, 1)';
phonebtnvol001.appendChild(phonebtnvol06);

const phonebtnvol07 = document.createElement('div');
phonebtnvol07.style.width = '6px';
phonebtnvol07.style.display = 'flex';
phonebtnvol07.style.height = '3.5px';
// phonebtnvol07.style.left = '2px';
// phonebtnvol07.style.top = '2px';
phonebtnvol07.style.zIndex = '11';
phonebtnvol07.style.position = 'absolute';
phonebtnvol07.style.transformStyle = 'preserve-3d';
phonebtnvol07.style.transform = 'translateZ(0px) translateX(4px) rotateY(90deg) translateY(22px) rotateX(-229deg)';
// phonebtnvol07.style.borderRadius = '2px 2px 2px 2px';
phonebtnvol07.style.background = 'rgba(24, 24, 24, 1)';
phonebtnvol001.appendChild(phonebtnvol07);

const phonebtnvol08 = document.createElement('div');
phonebtnvol08.style.width = '6px';
phonebtnvol08.style.display = 'flex';
phonebtnvol08.style.height = '3.5px';
// phonebtnvol08.style.left = '2px';
// phonebtnvol08.style.top = '2px';
phonebtnvol08.style.zIndex = '11';
phonebtnvol08.style.position = 'absolute';
phonebtnvol08.style.transformStyle = 'preserve-3d';
phonebtnvol08.style.transform = 'translateZ(0px) translateX(-2px) rotateY(90deg) translateY(22px) rotateX(229deg)';
// phonebtnvol08.style.borderRadius = '2px 2px 2px 2px';
phonebtnvol08.style.background = 'rgba(24, 24, 24, 1)';
phonebtnvol001.appendChild(phonebtnvol08);

const phonebtnvol09 = document.createElement('div');
phonebtnvol09.style.width = '6px';
phonebtnvol09.style.display = 'flex';
phonebtnvol09.style.height = '21px';
// phonebtnvol09.style.left = '2px';
// phonebtnvol09.style.top = '2px';
phonebtnvol09.style.boxShadow = '0.6px 0 0.4px 0 rgb(25, 25, 25) inset, -0.4px 0 0.4px 0 rgba(46, 46, 46, 0.6) inset';

phonebtnvol09.style.background = 'linear-gradient(rgb(0, 0, 0), rgba(24, 24, 24, 0.65) 3.86%, rgba(0, 0, 0, 0) 40.76%, rgba(0, 0, 0, 0) 60.5%, rgba(18, 18, 18, 0.65) 96.16%, rgb(0, 0, 0)), rgb(42, 42, 42)';

phonebtnvol09.style.zIndex = '11';
phonebtnvol09.style.position = 'absolute';
phonebtnvol09.style.transformStyle = 'preserve-3d';
phonebtnvol09.style.transform = 'translateZ(0px) translateX(5px) rotateY(90deg) translateY(2px)';
// phonebtnvol09.style.borderRadius = '2px 2px 2px 2px';
phonebtnvol09.style.background = 'rgba(24, 24, 24, 1)';
phonebtnvol001.appendChild(phonebtnvol09);

const phonebtnvol010 = document.createElement('div');
phonebtnvol010.style.width = '6px';
phonebtnvol010.style.display = 'flex';
phonebtnvol010.style.height = '3.5px';
// phonebtnvol010.style.left = '2px';
// phonebtnvol010.style.top = '2px';
phonebtnvol010.style.zIndex = '11';
phonebtnvol010.style.position = 'absolute';
phonebtnvol010.style.transformStyle = 'preserve-3d';
phonebtnvol010.style.transform = 'translateZ(0px) translateX(4px) rotateY(90deg) translateY(-1px) rotateX(229deg)';
// phonebtnvol010.style.borderRadius = '2px 2px 2px 2px';
phonebtnvol010.style.background = 'rgba(24, 24, 24, 1)';
phonebtnvol001.appendChild(phonebtnvol010);

const phonebtnvol011 = document.createElement('div');
phonebtnvol011.style.width = '6px';
phonebtnvol011.style.display = 'flex';
phonebtnvol011.style.height = '3.5px';
// phonebtnvol011.style.left = '2px';
// phonebtnvol011.style.top = '2px';
phonebtnvol011.style.zIndex = '11';
phonebtnvol011.style.position = 'absolute';
phonebtnvol011.style.transformStyle = 'preserve-3d';
phonebtnvol011.style.transform = 'translateZ(0px) translateX(-2px) rotateY(90deg) translateY(-1px) rotateX(-218deg)';
// phonebtnvol011.style.borderRadius = '2px 2px 2px 2px';
phonebtnvol011.style.background = 'rgba(24, 24, 24, 1)';
phonebtnvol001.appendChild(phonebtnvol011);

const phonebtnminus = document.createElement('div');
phonebtnminus.style.width = '5px';
phonebtnminus.style.display = 'flex';
phonebtnminus.style.height = '60px';
phonebtnminus.style.left = '0px';
phonebtnminus.style.top = '210px';
phonebtnminus.style.zIndex = '11';
phonebtnminus.style.position = 'absolute';
phonebtnminus.style.borderRadius = '10px 0px 0px 10px';
// phonebtnminus.style.boxShadow = '0.6px 0 0.4px 0 rgb(0, 0, 0) inset, -0.4px 0 0.4px 0 rgba(0, 0, 0, 0.6) inset';
// phonebtnminus.style.background = 'linear-gradient(rgb(0, 0, 0), rgba(24, 24, 24, 0.65) 3.86%, rgba(0, 0, 0, 0) 40.76%, rgba(0, 0, 0, 0) 60.5%, rgba(18, 18, 18, 0.65) 96.16%, rgb(0, 0, 0)), rgb(42, 42, 42)';
phone.appendChild(phonebtnminus);




const phonebtnminus1 = document.createElement('div');
phonebtnminus1.style.transition = '0.5s';
phonebtnminus1.style.width = '15px';
phonebtnminus1.style.display = 'flex';
phonebtnminus1.style.height = '60px';
// phonebtnminus1.style.right = '0px';
// phonebtnminus1.style.top = '160px';
phonebtnminus1.style.zIndex = '11';
phonebtnminus1.style.position = 'absolute';
phonebtnminus1.style.transformStyle = 'preserve-3d';
phonebtnminus1.style.transform = 'translateZ(-15px) translateY(210px) translateX(0px) rotateY(-90deg)';
phonebtnminus1.style.borderRadius = '999px';
// phonebtnminus1.style.boxShadow = 'rgb(0, 0, 0) -0.6px 0px 0.4px 0px inset, rgba(0, 0, 0, 0.6) 0.4px 0px 0.4px 0px inset';
phonebtnminus1.style.background = 'none';
phone.appendChild(phonebtnminus1);

const phonebtnminus2 = document.createElement('div');
phonebtnminus2.style.transition = '0.5s';
phonebtnminus2.style.width = '15px';
phonebtnminus2.style.display = 'flex';
phonebtnminus2.style.height = '60px';
// phonebtnminus2.style.right = '0px';
// phonebtnminus2.style.top = '160px';
phonebtnminus2.style.zIndex = '11';
phonebtnminus2.style.position = 'absolute';
phonebtnminus2.style.transformStyle = 'preserve-3d';
phonebtnminus2.style.transform = 'translateZ(6px) translateY(0px) translateX(0px) rotateY(0deg)';
phonebtnminus2.style.borderRadius = '999px';
// phonebtnminus2.style.boxShadow = 'rgb(0, 0, 0) -0.6px 0px 0.4px 0px inset, rgba(0, 0, 0, 0.6) 0.4px 0px 0.4px 0px inset';
phonebtnminus2.style.background = 'repeating-radial-gradient(rgb(38, 38, 38), rgb(24, 24, 24))';
phonebtnminus1.appendChild(phonebtnminus2);

const phonebtnminus4 = document.createElement('div');
phonebtnminus4.style.transition = '0.5s';
phonebtnminus4.style.width = '6px';
phonebtnminus4.style.display = 'flex';
phonebtnminus4.style.height = '47px';
// phonebtnminus4.style.right = '0px';
// phonebtnminus4.style.top = '160px';
phonebtnminus4.style.zIndex = '11';
phonebtnminus4.style.position = 'absolute';
phonebtnminus4.style.transformStyle = 'preserve-3d';
phonebtnminus4.style.transform = 'translateZ(3px) translateY(6px) translateX(-3px) rotateY(90deg)';
// phonebtnminus4.style.borderRadius = '999px';
phonebtnminus4.style.boxShadow = 'rgb(25, 25, 25) 0.6px 0px 0.4px 0px inset, rgba(46, 46, 46, 0.6) -0.4px 0px 0.4px 0px inset';
phonebtnminus4.style.background = 'rgb(24, 24, 24)';
phonebtnminus1.appendChild(phonebtnminus4);

const phonebtnminus5 = document.createElement('div');
phonebtnminus5.style.transition = '0.5s';
phonebtnminus5.style.width = '6px';
phonebtnminus5.style.display = 'flex';
phonebtnminus5.style.height = '47px';
// phonebtnminus5.style.right = '0px';
// phonebtnminus5.style.top = '160px';
phonebtnminus5.style.zIndex = '11';
phonebtnminus5.style.position = 'absolute';
phonebtnminus5.style.transformStyle = 'preserve-3d';
phonebtnminus5.style.transform = 'translateZ(3px) translateY(6px) translateX(12px) rotateY(90deg)';
// phonebtnminus5.style.borderRadius = '999px';
phonebtnminus5.style.boxShadow = 'rgb(25, 25, 25) 0.6px 0px 0.4px 0px inset, rgba(46, 46, 46, 0.6) -0.4px 0px 0.4px 0px inset';
phonebtnminus5.style.background = 'rgb(24, 24, 24)';
phonebtnminus1.appendChild(phonebtnminus5);

const phonebtnminus6 = document.createElement('div');
phonebtnminus6.style.transition = '0.5s';
phonebtnminus6.style.width = '6px';
phonebtnminus6.style.display = 'flex';
phonebtnminus6.style.height = '11px';
// phonebtnminus6.style.right = '0px';
// phonebtnminus6.style.top = '160px';
phonebtnminus6.style.zIndex = '11';
phonebtnminus6.style.position = 'absolute';
phonebtnminus6.style.transformStyle = 'preserve-3d';
phonebtnminus6.style.transform = 'translateZ(3px) translateY(51px) translateX(8px) rotateY(90deg) rotateX(-43deg)';
// phonebtnminus6.style.borderRadius = '999px';
phonebtnminus6.style.boxShadow = 'rgb(25, 25, 25) 0.6px 0px 0.4px 0px inset, rgba(46, 46, 46, 0.6) -0.4px 0px 0.4px 0px inset';
phonebtnminus6.style.background = 'rgb(24, 24, 24)';
phonebtnminus1.appendChild(phonebtnminus6);

const phonebtnminus7 = document.createElement('div');
phonebtnminus7.style.transition = '0.5s';
phonebtnminus7.style.width = '6px';
phonebtnminus7.style.display = 'flex';
phonebtnminus7.style.height = '11px';
// phonebtnminus7.style.right = '0px';
// phonebtnminus7.style.top = '160px';
phonebtnminus7.style.zIndex = '11';
phonebtnminus7.style.position = 'absolute';
phonebtnminus7.style.transformStyle = 'preserve-3d';
phonebtnminus7.style.transform = 'translateZ(3px) translateY(51px) translateX(1px) rotateY(90deg) rotateX(43deg)';
// phonebtnminus7.style.borderRadius = '999px';
phonebtnminus7.style.boxShadow = 'rgb(25, 25, 25) 0.6px 0px 0.4px 0px inset, rgba(46, 46, 46, 0.6) -0.4px 0px 0.4px 0px inset';
phonebtnminus7.style.background = 'rgb(24, 24, 24)';
phonebtnminus1.appendChild(phonebtnminus7);

const phonebtnminus8 = document.createElement('div');
phonebtnminus8.style.transition = '0.5s';
phonebtnminus8.style.width = '6px';
phonebtnminus8.style.display = 'flex';
phonebtnminus8.style.height = '11px';
// phonebtnminus8.style.right = '0px';
// phonebtnminus8.style.top = '160px';
phonebtnminus8.style.zIndex = '11';
phonebtnminus8.style.position = 'absolute';
phonebtnminus8.style.transformStyle = 'preserve-3d';
phonebtnminus8.style.transform = 'translateZ(3px) translateY(-2px) translateX(1px) rotateY(90deg) rotateX(-43deg)';
// phonebtnminus8.style.borderRadius = '999px';
phonebtnminus8.style.boxShadow = 'rgb(25, 25, 25) 0.6px 0px 0.4px 0px inset, rgba(46, 46, 46, 0.6) -0.4px 0px 0.4px 0px inset';
phonebtnminus8.style.background = 'rgb(24, 24, 24)';
phonebtnminus1.appendChild(phonebtnminus8);

const phonebtnminus9 = document.createElement('div');
phonebtnminus9.style.transition = '0.5s';
phonebtnminus9.style.width = '6px';
phonebtnminus9.style.display = 'flex';
phonebtnminus9.style.height = '11px';
// phonebtnminus9.style.right = '0px';
// phonebtnminus9.style.top = '160px';
phonebtnminus9.style.zIndex = '11';
phonebtnminus9.style.position = 'absolute';
phonebtnminus9.style.transformStyle = 'preserve-3d';
phonebtnminus9.style.transform = 'translateZ(3px) translateY(-2px) translateX(8px) rotateY(90deg) rotateX(43deg)';
// phonebtnminus9.style.borderRadius = '999px';
phonebtnminus9.style.boxShadow = 'rgb(25, 25, 25) 0.6px 0px 0.4px 0px inset, rgba(46, 46, 46, 0.6) -0.4px 0px 0.4px 0px inset';
phonebtnminus9.style.background = 'rgb(24, 24, 24)';
phonebtnminus1.appendChild(phonebtnminus9);

const phonebtnminus3 = document.createElement('div');
phonebtnminus3.style.width = '5px';
phonebtnminus3.style.display = 'flex';
phonebtnminus3.style.height = '60px';
phonebtnminus3.style.left = '0px';
phonebtnminus3.style.top = '130px';
phonebtnminus3.style.zIndex = '11';
phonebtnminus3.style.position = 'absolute';
// phonebtnminus3.style.borderRadius = '10px 0px 0px 10px';
phonebtnminus3.style.transform = 'translateZ(-30px) translatey(80px)';
// phonebtnminus3.style.boxShadow = 'rgb(0, 0, 0) 0.6px 0px 0.4px 0px inset, rgba(0, 0, 0, 0.6) -0.4px 0px 0.4px 0px inset';
// phonebtnminus3.style.background = 'linear-gradient(rgb(0, 0, 0), rgba(24, 24, 24, 0.65) 3.86%, rgba(0, 0, 0, 0) 40.76%, rgba(0, 0, 0, 0) 60.5%, rgba(18, 18, 18, 0.65) 96.16%, rgb(0, 0, 0)), rgb(42, 42, 42)';
phone.appendChild(phonebtnminus3);



const frame0 = document.createElement('div');
frame0.style.display = 'flex';
frame0.style.flexDirection = 'column';
frame0.style.width = '290px';
frame0.style.height = '615px';
frame0.style.left = '5px';
frame0.style.overflow = 'hidden';
frame0.style.position = 'absolute';
frame0.style.boxShadow = "1px 1px 1px rgb(66, 66, 66) inset, -1px -1px 1px rgb(66, 66, 66) inset, -1px 1px 1px rgb(66, 66, 66) inset, 1px -1px 1px rgb(66, 66, 66) inset, 2px 2px 1px rgb(0, 0, 0) inset, -2px -2px 1px rgb(0, 0, 0) inset, -2px 2px 1px rgb(0, 0, 0) inset, 2px -2px 1px rgb(0, 0, 0) inset";
// frame0.style.boxShadow = "rgb(118, 118, 118) 1px 1px 1px inset, rgb(118, 118, 118) -1px -1px 1px inset, rgb(118, 118, 118) -1px 1px 1px inset, rgb(118, 118, 118) 1px -1px 1px inset, rgb(236, 236, 236) 2px 2px 1px inset, rgb(236, 236, 236) -2px -2px 1px inset, rgb(236, 236, 236) -2px 2px 1px inset, rgb(236, 236, 236) 2px -2px 1px inset";
// frame0.style.boxShadow = "rgb(118, 118, 118) 1px 1px 1px inset, rgb(118, 118, 118) -1px -1px 1px inset, rgb(118, 118, 118) -1px 1px 1px inset, rgb(118, 118, 118) 1px -1px 1px inset, rgb(236, 236, 236) 2px 2px 1px inset, rgb(236, 236, 236) -2px -2px 1px inset, rgb(236, 236, 236) -2px 2px 1px inset, rgb(236, 236, 236) 2px -2px 1px inset, 0 4px 10px rgba(0, 0, 0, 0.75), 0 8px 30px rgba(0, 0, 0, 0.5)";
frame0.style.color = 'white';


// for correct 3d view (fix screen)
// frame0.style.transformStyle = "preserve-3d";
// frame0.style.transform = "translateZ(0px)";



// frame0.style.margin = '30px';
// frame0.style.background = 'rgb(190, 190, 190)';
frame0.style.background = 'rgb(52, 52, 52)';
// frame0.style.paddingTop = '50px';
// frame0.style.paddingBottom = '20px';
frame0.style.borderRadius = '50px';
// frame0.style.border = '3px solid rgb(190, 190, 190)';
// frame0.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.75), 0 8px 30px rgba(0, 0, 0, 0.5)';

phone.appendChild(frame0);

const pha1 = document.createElement('div');
pha1.style.position = "absolute";
pha1.style.transition = "0.3s";
pha1.style.top = "0px";
pha1.style.right = "50px";
pha1.style.width = "8px";
pha1.style.height = "3px";
pha1.style.background = "linear-gradient(rgb(85, 84, 84), rgb(67, 67, 67) 26.05%, rgb(34, 34, 34) 51.26%)";

const pha2 = document.createElement('div');
pha2.style.position = "absolute";
pha2.style.top = "50px";
pha2.style.transition = "0.3s";


pha2.style.left = "0px";
pha2.style.width = "3px";
pha2.style.height = "8px";
// pha2.style.background = "linear-gradient(90deg, #9B9B9B 0%, #E9E9E9 26.19%, #9B9B9B 51.07%)";
pha2.style.background = "linear-gradient(to right, rgb(85, 84, 84), rgb(67, 67, 67) 26.05%, rgb(34, 34, 34) 51.26%)";

const pha3 = document.createElement('div');
pha3.style.position = "absolute";
pha3.style.bottom = "50px";
pha3.style.transition = "0.3s";


pha3.style.left = "0px";
pha3.style.width = "3px";
pha3.style.height = "8px";
pha3.style.background = "linear-gradient(to right, rgb(85, 84, 84), rgb(67, 67, 67) 26.05%, rgb(34, 34, 34) 51.26%)";

const pha4 = document.createElement('div');
pha4.style.position = "absolute";
pha4.style.top = "50px";
pha4.style.transition = "0.3s";


pha4.style.right = "0px";
pha4.style.width = "3px";
pha4.style.height = "8px";
pha4.style.background = "linear-gradient(to left, rgb(85, 84, 84), rgb(67, 67, 67) 26.05%, rgb(34, 34, 34) 51.26%)";

const pha5 = document.createElement('div');
pha5.style.position = "absolute";
pha5.style.bottom = "50px";
pha5.style.transition = "0.3s";

pha5.style.right = "0px";
pha5.style.width = "3px";
pha5.style.height = "8px";
pha5.style.background = "linear-gradient(to left, rgb(85, 84, 84), rgb(67, 67, 67) 26.05%, rgb(34, 34, 34) 51.26%)";

const pha6 = document.createElement('div');
pha6.style.position = "absolute";
pha6.style.bottom = "0px";
pha6.style.transition = "0.3s";
pha6.style.left = "50px";
pha6.style.width = "8px";
pha6.style.height = "3px";
pha6.style.background = "linear-gradient(to top, rgb(85, 84, 84), rgb(67, 67, 67) 26.05%, rgb(34, 34, 34) 51.26%)";



frame0.appendChild(pha1);
frame0.appendChild(pha2);
frame0.appendChild(pha3);
frame0.appendChild(pha4);
frame0.appendChild(pha5);
frame0.appendChild(pha6);

const frame001 = document.createElement('div');
frame001.style.display = 'flex';
frame001.style.flexDirection = 'column';
// frame001.style.width = '290px';
// frame001.style.height = '615px';
frame001.style.left = '3px';
frame001.style.right = '3px';
frame001.style.top = '3px';
frame001.style.bottom = '3px';
frame001.style.overflow = 'hidden';
frame001.style.position = 'absolute';

frame001.style.color = 'white';
// frame001.style.margin = '30px';
frame001.style.backgroundColor = 'black';
// frame001.style.background = 'red';

frame001.style.backgroundSize = 'cover';
// frame01.style.paddingBottom = '20px';
frame001.style.borderRadius = '48px';
// frame01.style.border = '3px solid rgb(190, 190, 190)';
// frame01.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.75), 0 8px 30px rgba(0, 0, 0, 0.5)';

frame0.appendChild(frame001);







const svspeaker = `
<svg xmlns="http://www.w3.org/2000/svg" width="104" height="4" viewBox="0 0 104 4" fill="none">
  <path d="M2.95179 1.67941L2.95179 1.67941C2.73497 1.28732 2.45016 0.866383 2.09852 0.5H101.901C101.55 0.866383 101.265 1.28732 101.048 1.67941C100.448 2.76423 99.286 3.5 97.9491 3.5H6.05084C4.71403 3.5 3.55167 2.76423 2.95179 1.67941Z" fill="url(#paint0_linear_241_178)" stroke="black"/>
  <defs>
    <linearGradient id="paint0_linear_241_178" x1="51.9961" y1="0" x2="51.9961" y2="4.0078" gradientUnits="userSpaceOnUse">
      <stop offset="0.119792"/>
      <stop offset="1" stop-color="#595959"/>
    </linearGradient>
  </defs>
</svg>
`;

const svgspeaker = document.createElement('div');
svgspeaker.innerHTML = svspeaker;

const svglogoelspeaker = svgspeaker.querySelector('svg');
svglogoelspeaker.style.marginLeft = '112px';
svglogoelspeaker.style.marginTop = '-2.6px';
svglogoelspeaker.style.width = '58px';
svglogoelspeaker.style.height = '12px';
svglogoelspeaker.style.position = 'absolute';
svglogoelspeaker.style.transition = '0.5s';
// svglogoelement5.style.mixBlendMode = 'difference';

// Добавляем созданный элемент <svg> в контейнер
frame001.appendChild(svgspeaker);

const svscreen = `
<svg xmlns="http://www.w3.org/2000/svg" width="495" height="1067" viewBox="0 0 495 1067" fill="none">
  <path d="M82 1066.2C36.7127 1066.2 0 1029.49 0 984.2V124.8V82C0 36.7126 36.7126 0 82 0H126.8H194C195.105 0 195.959 0.949251 196.49 1.91763C197.168 3.15405 198.482 3.99221 199.992 3.99221H292.008C293.518 3.99221 294.832 3.15405 295.51 1.91763C296.041 0.949252 296.895 0 298 0H366.2H413C458.287 0 495 36.7126 495 82V124.8V984.2C495 1029.49 458.287 1066.2 413 1066.2H82Z" fill="black"/>
  <path d="M0.5 984.2V124.8V82C0.5 36.9888 36.9888 0.5 82 0.5H126.8H194C194.4 0.5 194.779 0.670219 195.134 0.97526C195.493 1.28248 195.804 1.70778 196.052 2.15815C196.814 3.54813 198.293 4.49221 199.992 4.49221H292.008C293.707 4.49221 295.186 3.54813 295.948 2.15815C296.196 1.70778 296.507 1.28248 296.866 0.975259C297.221 0.670218 297.6 0.5 298 0.5H366.2H413C458.011 0.5 494.5 36.9888 494.5 82V124.8V984.2C494.5 1029.21 458.011 1065.7 413 1065.7H82C36.9888 1065.7 0.5 1029.21 0.5 984.2Z" stroke="white" stroke-opacity="0.16"/>
</svg>
`;

const svgscreen = document.createElement('div');
svgscreen.innerHTML = svscreen;

const svglogoelscreen = svgscreen.querySelector('svg');
svglogoelscreen.style.marginLeft = '1px';
svglogoelscreen.style.marginTop = '2px';
svglogoelscreen.style.width = '282px';
svglogoelscreen.style.height = '606px';
svglogoelscreen.style.position = 'absolute';
svglogoelscreen.style.transition = '0.5s';
// svglogoelscreen.style.stroke = '#595959';
// svglogoelscreen.style.background = 'rgb(193, 255, 0)';
svglogoelscreen.style.strokeWidth = '1px';

// Добавляем созданный элемент <svg> в контейнер
frame001.appendChild(svgscreen);






const frame01 = document.createElement('div');
frame01.style.display = 'flex';
frame01.style.flexDirection = 'column';
frame01.style.opacity = '0';
frame01.style.transition = '1s';
frame01.style.left = '3px';
frame01.style.right = '3px';
frame01.style.top = '3px';
frame01.style.bottom = '3px';
frame01.style.overflow = 'hidden';
frame01.style.position = 'absolute';

frame01.style.color = 'white';
frame01.style.inset = '9px';
// frame01.style.backgroundColor = 'black';
// frame01.style.background = 'url("Bitmap.png")';
loadImage('Bitmap.png', frame01);

frame01.style.backgroundSize = 'cover';
frame01.style.backgroundPosition = 'center';
// frame01.style.paddingBottom = '20px';
frame01.style.borderRadius = '40px';


// frame01.style.transformStyle = 'preserve-3d';
// frame01.style.transform = 'translateZ(0px)';


// frame01.style.border = '3px solid rgb(190, 190, 190)';
// frame01.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.75), 0 8px 30px rgba(0, 0, 0, 0.5)';

svgscreen.appendChild(frame01);

const frame02 = document.createElement('div');
frame02.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
frame02.style.backgroundImage = 'url("asl0.png")';
loadImage('asl0.png', frame02);
frame02.style.height = '100%';
frame02.style.width = '100%';
frame02.style.position = 'absolute';
frame02.style.backgroundSize = '84px';
frame02.style.backgroundRepeat = 'no-repeat';
frame02.style.webkitBackdropFilter = 'blur(5px)';
// frame02.style.right = '100px';
frame02.style.backgroundPosition = 'center';
// frame02.style.bottom = '30px';
frame01.appendChild(frame02);

const frame = document.createElement('div');
const frameBg = document.createElement('div');
const bgColor = document.createElement('div');
const bgBlack = document.createElement('div');

frame.className = 'frame';
frameBg.className = 'frame-bg';
bgColor.className = 'bg-color album-artwork';
bgBlack.className = 'bg-black album-artwork';

bgColor.style.backgroundSize = 'cover'; // Или другой вариант: 'contain', 'auto', '100%', '50%', и т.д.
bgBlack.style.backgroundSize = 'cover';
bgColor.style.width = '600px';
bgColor.style.height = '600px';
bgBlack.style.width = '600px';
bgBlack.style.height = '600px';

bgColor.src = 'https://administrati0n.github.io/data-one/player/img/logo/Pure Imagination.jpeg';
bgBlack.src = 'https://administrati0n.github.io/data-one/player/img/logo/Pure Imagination.jpeg';

// frameBg.style.background = "black";
frameBg.style.display = "flex";

frameBg.appendChild(bgColor);
frameBg.appendChild(bgBlack);

frame.appendChild(frameBg);

frame.style.display = 'flex';
frame.style.flexDirection = 'column';
frame.style.width = '100%';
frame.style.height = '539px';
frame.style.transformStyle = 'preserve-3d';
// frame.style.left = '5px';
// frame.style.right = '5px';
// frame.style.top = '5px';
// frame.style.bottom = '5px';
frame.style.overflow = 'hidden';
frame.style.position = 'absolute';

frame.style.color = 'white';
// frame.style.margin = '30px';
frame.style.background = 'black';
frame.style.paddingTop = '50px';
frame.style.paddingBottom = '20px';
// frame.style.borderRadius = '37px';
// frame.style.border = '3px solid rgb(190, 190, 190)';
// frame.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.75), 0 8px 30px rgba(0, 0, 0, 0.5)';





const frameBefore = document.createElement('div');
frameBefore.style.content = '""';
// frameBefore.style.display = 'block';
frameBefore.style.opacity = '1';
frameBefore.style.display = 'block';
frameBefore.style.width = '4em';
frameBefore.style.height = '0.6em';
frameBefore.style.background = 'white';
frameBefore.style.margin = '0 auto';
frameBefore.style.marginTop = '20px';
frameBefore.style.transition = "0.8s";
frameBefore.style.zIndex = '10';
frameBefore.style.borderRadius = '10em';
frameBefore.style.mixBlendMode = 'overlay';
frame.insertBefore(frameBefore, frame.firstChild);

const frameHeader = document.createElement('div');
frameHeader.className = 'frame-header';
frameHeader.style.position = 'relative';
frameHeader.style.zIndex = '10';
frameHeader.style.display = 'flex';
frameHeader.style.flexShrink = '0';
frameHeader.style.alignItems = 'center';
frameHeader.style.padding = '2rem';
// frame.insertBefore(frameHeader, frame.firstChild);

const imageContainer = document.createElement('div');
imageContainer.className = 'image';
frameHeader.appendChild(imageContainer);

const image = document.createElement('img');
// image.src = 'https://administrati0n.github.io/data-one/player/img/logo/Experience.jpg';
image.style.width = '50px';
image.style.borderRadius = '0.5em';
image.style.boxShadow = '0 3px 30px rgba(0, 0, 0, 0.2), 0 3px 10px rgba(0, 0, 0, 0.4)';
// imageContainer.appendChild(image);

const infoContainer = document.createElement('div');
infoContainer.className = 'info';
frameHeader.appendChild(infoContainer);

const title = document.createElement('div');
title.className = 'title';
title.innerText = 'Title';
title.style.fontSize = '1.8rem';
infoContainer.appendChild(title);

const subtitle = document.createElement('div');
subtitle.className = 'subtitle';
subtitle.innerText = 'Subtitle';
subtitle.style.fontSize = '1.2rem';
subtitle.style.marginTop = '0.25em';
// infoContainer.appendChild(subtitle);

const lyrics = document.createElement('div');
lyrics.className = 'frame-lyrics';
lyrics.style.position = 'absolute';
lyrics.style.width = '100%';
lyrics.style.height = '550px';
// lyrics.style.display = 'none';
lyrics.style.zIndex = '10';
lyrics.style.flexGrow = '1';
lyrics.style.transition = "0.8s"
// lyrics.style.padding = '2rem';
lyrics.style.paddingTop = '0';
lyrics.style.fontSize = '2rem';
lyrics.style.overflowY = 'auto';

const lyricsText1 = document.createElement('div');
lyricsText1.innerText = 'Lyrics Text 1';
lyricsText1.style.color = 'rgba(255, 255, 255, 0.75)';
// lyrics.appendChild(lyricsText1);

const lyricsText2 = document.createElement('div');
lyricsText2.innerText = 'Lyrics Text 2';
lyricsText2.style.color = 'rgba(255, 255, 255, 0.75)';
lyricsText2.style.marginTop = '1.4em';
// lyrics.appendChild(lyricsText2);

const lyricsText3 = document.createElement('div');
lyricsText3.innerText = 'Lyrics Text 3';
lyricsText3.className = 'active';
lyricsText3.style.color = 'white';
lyricsText3.style.fontSize = '3rem';
lyricsText3.style.marginTop = '0.8em';
// lyrics.appendChild(lyricsText3);

const lyricsText4 = document.createElement('div');
lyricsText4.innerText = 'Lyrics Text 4';
lyricsText4.style.color = 'rgba(255, 255, 255, 0.75)';
lyricsText4.style.filter = 'blur(0.05px)';
// lyrics.appendChild(lyricsText4);

const frameBgStyle = {
  position: 'absolute',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
  pointerEvents: 'none',
  zIndex: '0',
  overflow: 'hidden',
  borderRadius: '40px'
};

for (const prop in frameBgStyle) {
  frameBg.style[prop] = frameBgStyle[prop];
}

const bgColorStyle = {
  width: '200%',
  left: '-250px',
  position: 'absolute',
  filter: 'blur(40px)',
  // borderRadius: '100em',
  animation: 'rotate 35s linear infinite'
};

for (const prop in bgColorStyle) {
  bgColor.style[prop] = bgColorStyle[prop];
}

const bgBlackStyle = {
  width: '200%',
  left: '0',
  bottom: '0',
  filter: 'blur(40px)',
  position: 'absolute',
  zIndex: '1',
  animation: 'rotate1 35s linear infinite'
  // animationDirection: 'reverse',
  // animationDelay: '10s'
};

for (const prop in bgBlackStyle) {
  bgBlack.style[prop] = bgBlackStyle[prop];
}

const rotateKeyframes = `
@-webkit-keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@-webkit-keyframes rotate1 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-360deg);
  }
}

@keyframes rotate1 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-360deg);
  }
}
`;

const rotateKeyframes1 = `

`;



const style = document.createElement('style');
style.appendChild(document.createTextNode(rotateKeyframes));
document.head.appendChild(style);

// Добавьте созданный фрейм в DOM, куда вам нужно.

















// frameBefore.addEventListener("click", function() {
// if(lyrics.style.top = "1000px"){
// frame.style.transition = "0.8s";
// frameBg.style.transition = "0.8s";
// lyrics.style.transition = "0.8s";
// leftBarMNoteC.style.display = "flex";
// frameBg.style.top = "1000px";
// lyrics.style.top = "1000px";
// mptb.style.transition = "0.8s";
// mptb.style.opacity = "1";
// mpt.style.opacity = "1";
// mpt.style.transition = "0.8s";

// }else{
// frameBg.style.top = "0px";
// lyrics.style.top = "0px";

// }
// });




frame.appendChild(lyrics);







































































const playerImage = document.createElement("div");
// playerImage.style.background = "url('https://i1.sndcdn.com/artworks-000120546175-l4xtt4-t500x500.jpg')";
playerImage.style.backgroundColor = 'rgba(0, 0, 0, 1)';
playerImage.style.backgroundPosition = "center";
playerImage.style.backgroundSize = "400px";
playerImage.style.width = "400px";
playerImage.style.height = "264px";
// playerImage.style.opacity = "0.2";
// playerImage.style.borderRadius = "9px 0px 0px 9px";
playerImage.style.borderRadius = "24px 24px 0px 0px";



const playerImage2 = document.createElement("div");
// playerImage2.style.background = "url('https://i1.sndcdn.com/artworks-000120546175-l4xtt4-t500x500.jpg')";
playerImage2.style.backgroundColor = 'rgba(0, 0, 0, 1)';
playerImage2.style.backgroundPosition = "center";
playerImage2.style.marginTop = "50px";
playerImage2.style.left = "20px";
playerImage2.style.top = "0px";
playerImage2.style.position = "absolute";
playerImage2.style.backgroundSize = "280px";
playerImage2.style.width = "226px";
playerImage2.style.height = "226px";
playerImage2.style.boxShadow = "0px 5px 10px rgba(0, 0, 0, 0.5)";
// playerImage2.style.opacity = "0.5";
// playerImage2.style.borderRadius = "9px 0px 0px 9px";
playerImage2.style.borderRadius = "15px";

const playerContainerV = document.createElement("div");
playerContainerV.style.display = "flex";
playerContainerV.style.position = "absolute";
playerContainerV.style.flexDirection = "column";
playerContainerV.style.top = "300px";
playerContainerV.style.left = "0px";
playerContainerV.style.width = "220px";
playerContainerV.style.height = "100px";

const playerTrackTitle = document.createElement("div");
playerTrackTitle.style.fontFamily = "Roboto-Bold";
playerTrackTitle.style.fontSize = "15px";
playerTrackTitle.style.marginTop = "6px";
playerTrackTitle.style.marginLeft = "22px";
playerTrackTitle.style.marginBottom = "0px";
playerTrackTitle.style.whiteSpace = "nowrap";
playerTrackTitle.style.overflow = "hidden";
playerTrackTitle.style.textOverflow = "ellipsis";
playerTrackTitle.textContent = "The Beach";


const playerArtistTitle = document.createElement("div");
playerArtistTitle.style.fontFamily = "Roboto-Bold";
playerArtistTitle.style.fontSize = "15px";
playerArtistTitle.style.marginBottom = "5px";
playerArtistTitle.style.marginLeft = "22px";
playerArtistTitle.style.opacity = "0.5";
playerArtistTitle.style.whiteSpace = "nowrap";
playerArtistTitle.style.overflow = "hidden";
playerArtistTitle.style.textOverflow = "ellipsis";
playerArtistTitle.textContent = "The Neighbourhood";


const playerContainerH = document.createElement("div");
playerContainerH.style.display = "flex";
playerContainerH.style.flexDirection = "row";
playerContainerH.style.marginBottom = "auto";
playerContainerH.style.width = "100%";
playerContainerH.style.position = "absolute";
// playerContainerH.style.right = "15px";
// playerContainerH.style.bottom = "115px";

// Инициализация переменной timeLabel
// let timeLabel = 0; // или другой тип данных, кроме строки

const currentTimeLabel = document.createElement("div");
let timeLabel = document.createElement("div");
timeLabel.style.fontSize = "15px";
timeLabel.style.fontFamily = "Roboto-Bold";
timeLabel.textContent = "0:00";
timeLabel.style.position = "absolute";
timeLabel.style.top = "380px";
timeLabel.style.left = "25px";
timeLabel.style.opacity = "0.5";
// timeLabel = String(timeLabel); // Преобразование в строку
let timeLabelText = timeLabel.textContent; // или timeLabel.innerText

const durationLabel = document.createElement("span");
durationLabel.style.fontSize = "15px";
durationLabel.style.fontFamily = "Roboto-Bold";
durationLabel.textContent = "";
durationLabel.style.position = "absolute";
durationLabel.style.top = "380px";
durationLabel.style.opacity = "0.5";
durationLabel.style.right = "25px";

const controlsContainer = document.createElement("div");
controlsContainer.style.display = "flex";
controlsContainer.style.marginTop = "20px";



const playerBack = document.createElement("button");
playerBack.style.backgroundRepeat = "no-repeat";
// playerBack.style.opacity = "0.5";
playerBack.style.position = "absolute";
playerBack.style.left = "40px";
playerBack.style.top = "415px";
playerBack.style.transition = "0.2s";
playerBack.style.backgroundColor = "rgba(255, 255, 255, 0)";
// playerBack.style.backgroundImage = "url('https://administrati0n.github.io/data-one/player/img/controls/back/back.png')";
playerBack.style.backgroundSize = "36px";
playerBack.style.borderRadius = "999px";
playerBack.style.backgroundPosition = "center";
playerBack.style.width = "45px";
playerBack.style.height = "45px";
playerBack.style.borderRadius = "999px";
// playerBack.style.boxShadow = "0px 5px 10px rgba(255, 255, 255, 0.25)";
playerBack.style.border = "none";


const playerBack1 = document.createElement("div");
playerBack1.style.position = "absolute";
playerBack1.style.left = "33px";
playerBack1.style.backgroundRepeat = "no-repeat";
playerBack1.style.margin = "0 auto";
playerBack1.style.top = "13px";
playerBack1.style.right = "30px";
playerBack1.style.transition = "0.3s";
playerBack1.style.backgroundColor = "rgba(255, 255, 255, 1)";
playerBack1.style.backgroundSize = "45px";
playerBack1.style.backgroundPosition = "center";
playerBack1.style.width = "5px";
playerBack1.style.height = "20px";
playerBack1.style.border = "none";
playerBack1.style.borderRadius = "999px";


const playerBack2 = document.createElement("div");
playerBack2.style.position = "absolute";
playerBack2.style.right = "14px";
playerBack2.style.backgroundRepeat = "no-repeat";
playerBack2.style.margin = "0 auto";
playerBack2.style.top = "17px";
playerBack2.style.transition = "0.3s";
playerBack2.style.backgroundColor = "rgba(255, 255, 255, 1)";
playerBack2.style.backgroundSize = "45px";
playerBack2.style.backgroundPosition = "center";
playerBack2.style.width = "5px";
playerBack2.style.height = "20px";
playerBack2.style.border = "none";
playerBack2.style.borderRadius = "999px";
playerBack2.style.rotate = "-60deg";

const playerBack3 = document.createElement("div");
playerBack3.style.position = "absolute";
playerBack3.style.right = "14px";
playerBack3.style.backgroundRepeat = "no-repeat";
playerBack3.style.margin = "0 auto";
playerBack3.style.top = "9px";
playerBack3.style.transition = "0.3s";
playerBack3.style.backgroundColor = "rgba(255, 255, 255, 1)";
playerBack3.style.backgroundSize = "45px";
playerBack3.style.backgroundPosition = "center";
playerBack3.style.width = "5px";
playerBack3.style.height = "20px";
playerBack3.style.border = "none";
playerBack3.style.borderRadius = "999px";
playerBack3.style.rotate = "60deg";



const playerBack4 = document.createElement("div");
playerBack4.style.position = "absolute";
playerBack4.style.left = "18px";
playerBack4.style.backgroundRepeat = "no-repeat";
playerBack4.style.margin = "0 auto";
playerBack4.style.top = "13px";
playerBack4.style.right = "30px";
playerBack4.style.transition = "0.3s";
playerBack4.style.backgroundColor = "rgba(255, 255, 255, 1)";
playerBack4.style.backgroundSize = "45px";
playerBack4.style.backgroundPosition = "center";
playerBack4.style.width = "5px";
playerBack4.style.height = "20px";
playerBack4.style.border = "none";
playerBack4.style.borderRadius = "999px";


const playerBack5 = document.createElement("div");
playerBack5.style.position = "absolute";
playerBack5.style.right = "29px";
playerBack5.style.backgroundRepeat = "no-repeat";
playerBack5.style.margin = "0 auto";
playerBack5.style.top = "17px";
playerBack5.style.transition = "0.3s";
playerBack5.style.backgroundColor = "rgba(255, 255, 255, 1)";
playerBack5.style.backgroundSize = "45px";
playerBack5.style.backgroundPosition = "center";
playerBack5.style.width = "5px";
playerBack5.style.height = "20px";
playerBack5.style.border = "none";
playerBack5.style.borderRadius = "999px";
playerBack5.style.rotate = "-60deg";

const playerBack6 = document.createElement("div");
playerBack6.style.position = "absolute";
playerBack6.style.right = "29px";
playerBack6.style.backgroundRepeat = "no-repeat";
playerBack6.style.margin = "0 auto";
playerBack6.style.top = "9px";
playerBack6.style.transition = "0.3s";
playerBack6.style.backgroundColor = "rgba(255, 255, 255, 1)";
playerBack6.style.backgroundSize = "45px";
playerBack6.style.backgroundPosition = "center";
playerBack6.style.width = "5px";
playerBack6.style.height = "20px";
playerBack6.style.border = "none";
playerBack6.style.borderRadius = "999px";
playerBack6.style.rotate = "60deg";

const playerBack7 = document.createElement("div");
playerBack7.style.position = "absolute";
playerBack7.style.left = "26px";
playerBack7.style.backgroundRepeat = "no-repeat";
playerBack7.style.margin = "0 auto";
playerBack7.style.top = "17px";
playerBack7.style.right = "30px";
playerBack7.style.transition = "0.3s";
playerBack7.style.backgroundColor = "rgba(255, 255, 255, 1)";
playerBack7.style.backgroundSize = "45px";
playerBack7.style.backgroundPosition = "center";
playerBack7.style.width = "8px";
playerBack7.style.height = "13px";
playerBack7.style.border = "none";
playerBack7.style.borderRadius = "999px";


const playerBack8 = document.createElement("div");
playerBack8.style.position = "absolute";
playerBack8.style.left = "11px";
playerBack8.style.backgroundRepeat = "no-repeat";
playerBack8.style.margin = "0 auto";
playerBack8.style.top = "17px";
playerBack8.style.right = "30px";
playerBack8.style.transition = "0.3s";
playerBack8.style.backgroundColor = "rgba(255, 255, 255, 1)";
playerBack8.style.backgroundSize = "45px";
playerBack8.style.backgroundPosition = "center";
playerBack8.style.width = "8px";
playerBack8.style.height = "13px";
playerBack8.style.border = "none";
playerBack8.style.borderRadius = "999px";

playerBack.appendChild(playerBack1)
playerBack.appendChild(playerBack2)
playerBack.appendChild(playerBack3)
playerBack.appendChild(playerBack4)
playerBack.appendChild(playerBack5)
playerBack.appendChild(playerBack6)
playerBack.appendChild(playerBack7)
playerBack.appendChild(playerBack8)

const playerPlay = document.createElement("button");
playerPlay.style.position = "absolute";
playerPlay.style.right = "150px";
playerPlay.style.backgroundRepeat = "no-repeat";
playerPlay.style.margin = "0 auto";
playerPlay.style.top = "415px";
playerPlay.style.left = "110px";
playerPlay.style.transition = "0.3s";
playerPlay.style.backgroundColor = "rgba(255, 255, 255, 0)";
// playerPlay.style.backgroundImage = "url('https://administrati0n.github.io/data-one/player/img/controls/play/play.png')";
playerPlay.style.backgroundSize = "45px";
playerPlay.style.backgroundPosition = "center";
playerPlay.style.width = "45px";
playerPlay.style.height = "45px";
playerPlay.style.border = "none";
playerPlay.style.borderRadius = "999px";
// playerPlay.style.boxShadow = "0px 5px 10px rgba(255, 255, 255, 0.25)";

const playerPlay1 = document.createElement("div");
playerPlay1.style.position = "absolute";
playerPlay1.style.left = "11px";
playerPlay1.style.backgroundRepeat = "no-repeat";
playerPlay1.style.margin = "0 auto";
playerPlay1.style.top = "10px";
playerPlay1.style.right = "30px";
playerPlay1.style.transition = "0.3s";
playerPlay1.style.backgroundColor = "rgba(255, 255, 255, 1)";
playerPlay1.style.backgroundSize = "45px";
playerPlay1.style.backgroundPosition = "center";
playerPlay1.style.width = "10px";
playerPlay1.style.height = "26px";
playerPlay1.style.border = "none";
playerPlay1.style.borderRadius = "999px";


const playerPlay2 = document.createElement("div");
playerPlay2.style.position = "absolute";
playerPlay2.style.right = "17px";
playerPlay2.style.backgroundRepeat = "no-repeat";
playerPlay2.style.margin = "0 auto";
playerPlay2.style.top = "14px";
playerPlay2.style.right = "17px";
playerPlay2.style.transition = "0.3s";
playerPlay2.style.backgroundColor = "rgba(255, 255, 255, 1)";
playerPlay2.style.backgroundSize = "45px";
playerPlay2.style.backgroundPosition = "center";
playerPlay2.style.width = "10px";
playerPlay2.style.height = "26px";
playerPlay2.style.border = "none";
playerPlay2.style.borderRadius = "999px";
playerPlay2.style.rotate = "60deg";

const playerPlay3 = document.createElement("div");
playerPlay3.style.position = "absolute";
playerPlay3.style.right = "17px";
playerPlay3.style.backgroundRepeat = "no-repeat";
playerPlay3.style.margin = "0 auto";
playerPlay3.style.top = "6px";
playerPlay3.style.right = "17px";
playerPlay3.style.transition = "0.3s";
playerPlay3.style.backgroundColor = "rgba(255, 255, 255, 1)";
playerPlay3.style.backgroundSize = "45px";
playerPlay3.style.backgroundPosition = "center";
playerPlay3.style.width = "10px";
playerPlay3.style.height = "26px";
playerPlay3.style.border = "none";
playerPlay3.style.borderRadius = "999px";
playerPlay3.style.rotate = "-60deg";

const playerPlay4 = document.createElement("div");
playerPlay4.style.position = "absolute";
playerPlay4.style.left = "20px";
playerPlay4.style.backgroundRepeat = "no-repeat";
playerPlay4.style.margin = "0 auto";
playerPlay4.style.top = "13px";
playerPlay4.style.right = "15px";
playerPlay4.style.transition = "0.3s";
playerPlay4.style.backgroundColor = "rgba(255, 255, 255, 1)";
playerPlay4.style.backgroundSize = "45px";
playerPlay4.style.backgroundPosition = "center";
playerPlay4.style.width = "10px";
playerPlay4.style.height = "19px";
playerPlay4.style.border = "none";
playerPlay4.style.borderRadius = "999px";


const playerPlay5 = document.createElement("div");
playerPlay5.style.position = "absolute";
playerPlay5.style.left = "25px";
playerPlay5.style.backgroundRepeat = "no-repeat";
playerPlay5.style.margin = "0 auto";
playerPlay5.style.top = "22px";
playerPlay5.style.right = "30px";
playerPlay5.style.transition = "0.3s";
playerPlay5.style.backgroundColor = "rgba(255, 255, 255, 1)";
playerPlay5.style.backgroundSize = "45px";
playerPlay5.style.backgroundPosition = "center";
playerPlay5.style.width = "10px";
playerPlay5.style.height = "0px";
playerPlay5.style.border = "none";
playerPlay5.style.borderRadius = "999px";



const playerNext = document.createElement("button");
playerNext.style.backgroundRepeat = "no-repeat";
playerNext.style.position = "absolute";
playerNext.style.right = "40px";
playerNext.style.top = "415px";
playerNext.style.transition = "0.2s";
playerNext.style.backgroundColor = "rgba(255, 255, 255, 0)";
// playerNext.style.backgroundImage = "url('https://administrati0n.github.io/data-one/player/img/controls/next/next.png')";
playerNext.style.backgroundSize = "36px";
playerNext.style.backgroundPosition = "center";
playerNext.style.width = "45px";
playerNext.style.height = "45px";
playerNext.style.borderRadius = "999px";
// playerNext.style.boxShadow = "0px 5px 10px rgba(255, 255, 255, 0.25)";
playerNext.style.border = "none";




const playerNext1 = document.createElement("div");
playerNext1.style.position = "absolute";
playerNext1.style.left = "2px";
playerNext1.style.backgroundRepeat = "no-repeat";
playerNext1.style.margin = "0 auto";
playerNext1.style.top = "13px";
playerNext1.style.right = "30px";
playerNext1.style.transition = "0.3s";
playerNext1.style.backgroundColor = "rgba(255, 255, 255, 1)";
playerNext1.style.backgroundSize = "45px";
playerNext1.style.backgroundPosition = "center";
playerNext1.style.width = "5px";
playerNext1.style.height = "20px";
playerNext1.style.border = "none";
playerNext1.style.borderRadius = "999px";


const playerNext2 = document.createElement("div");
playerNext2.style.position = "absolute";
playerNext2.style.right = "12px";
playerNext2.style.backgroundRepeat = "no-repeat";
playerNext2.style.margin = "0 auto";
playerNext2.style.top = "17px";
playerNext2.style.transition = "0.3s";
playerNext2.style.backgroundColor = "rgba(255, 255, 255, 1)";
playerNext2.style.backgroundSize = "45px";
playerNext2.style.backgroundPosition = "center";
playerNext2.style.width = "5px";
playerNext2.style.height = "20px";
playerNext2.style.border = "none";
playerNext2.style.borderRadius = "999px";
playerNext2.style.rotate = "60deg";

const playerNext3 = document.createElement("div");
playerNext3.style.position = "absolute";
playerNext3.style.right = "12px";
playerNext3.style.backgroundRepeat = "no-repeat";
playerNext3.style.margin = "0 auto";
playerNext3.style.top = "9px";
playerNext3.style.transition = "0.3s";
playerNext3.style.backgroundColor = "rgba(255, 255, 255, 1)";
playerNext3.style.backgroundSize = "45px";
playerNext3.style.backgroundPosition = "center";
playerNext3.style.width = "5px";
playerNext3.style.height = "20px";
playerNext3.style.border = "none";
playerNext3.style.borderRadius = "999px";
playerNext3.style.rotate = "-60deg";



const playerNext4 = document.createElement("div");
playerNext4.style.position = "absolute";
playerNext4.style.left = "21px";
playerNext4.style.backgroundRepeat = "no-repeat";
playerNext4.style.margin = "0 auto";
playerNext4.style.top = "13px";
playerNext4.style.right = "30px";
playerNext4.style.transition = "0.3s";
playerNext4.style.backgroundColor = "rgba(255, 255, 255, 1)";
playerNext4.style.backgroundSize = "45px";
playerNext4.style.backgroundPosition = "center";
playerNext4.style.width = "5px";
playerNext4.style.height = "20px";
playerNext4.style.border = "none";
playerNext4.style.borderRadius = "999px";


const playerNext5 = document.createElement("div");
playerNext5.style.position = "absolute";
playerNext5.style.right = "27px";
playerNext5.style.backgroundRepeat = "no-repeat";
playerNext5.style.margin = "0 auto";
playerNext5.style.top = "17px";
playerNext5.style.transition = "0.3s";
playerNext5.style.backgroundColor = "rgba(255, 255, 255, 1)";
playerNext5.style.backgroundSize = "45px";
playerNext5.style.backgroundPosition = "center";
playerNext5.style.width = "5px";
playerNext5.style.height = "20px";
playerNext5.style.border = "none";
playerNext5.style.borderRadius = "999px";
playerNext5.style.rotate = "60deg";

const playerNext6 = document.createElement("div");
playerNext6.style.position = "absolute";
playerNext6.style.right = "27px";
playerNext6.style.backgroundRepeat = "no-repeat";
playerNext6.style.margin = "0 auto";
playerNext6.style.top = "9px";
playerNext6.style.transition = "0.3s";
playerNext6.style.backgroundColor = "rgba(255, 255, 255, 1)";
playerNext6.style.backgroundSize = "45px";
playerNext6.style.backgroundPosition = "center";
playerNext6.style.width = "5px";
playerNext6.style.height = "20px";
playerNext6.style.border = "none";
playerNext6.style.borderRadius = "999px";
playerNext6.style.rotate = "-60deg";

const playerNext7 = document.createElement("div");
playerNext7.style.position = "absolute";
playerNext7.style.left = "25px";
playerNext7.style.backgroundRepeat = "no-repeat";
playerNext7.style.margin = "0 auto";
playerNext7.style.top = "17px";
playerNext7.style.right = "30px";
playerNext7.style.transition = "0.3s";
playerNext7.style.backgroundColor = "rgba(255, 255, 255, 1)";
playerNext7.style.backgroundSize = "45px";
playerNext7.style.backgroundPosition = "center";
playerNext7.style.width = "8px";
playerNext7.style.height = "13px";
playerNext7.style.border = "none";
playerNext7.style.borderRadius = "999px";


const playerNext8 = document.createElement("div");
playerNext8.style.position = "absolute";
playerNext8.style.left = "9px";
playerNext8.style.backgroundRepeat = "no-repeat";
playerNext8.style.margin = "0 auto";
playerNext8.style.top = "17px";
playerNext8.style.right = "30px";
playerNext8.style.transition = "0.3s";
playerNext8.style.backgroundColor = "rgba(255, 255, 255, 1)";
playerNext8.style.backgroundSize = "45px";
playerNext8.style.backgroundPosition = "center";
playerNext8.style.width = "9px";
playerNext8.style.height = "13px";
playerNext8.style.border = "none";
playerNext8.style.borderRadius = "999px";

playerNext.appendChild(playerNext1)
playerNext.appendChild(playerNext2)
playerNext.appendChild(playerNext3)
playerNext.appendChild(playerNext4)
playerNext.appendChild(playerNext5)
playerNext.appendChild(playerNext6)
playerNext.appendChild(playerNext7)
playerNext.appendChild(playerNext8)




// 

const volumeSeekBar = document.createElement("div");
volumeSeekBar.type = "range";
volumeSeekBar.min = "0";
volumeSeekBar.max = "100";
volumeSeekBar.value = "0";
// volumeSeekBar.style.width = "260px";
volumeSeekBar.style.bottom = "60px"; // Измененная позиция на 100 пикселей ниже
volumeSeekBar.style.left = "20px";
volumeSeekBar.style.right = "20px";
volumeSeekBar.style.appearance = "none";
volumeSeekBar.style.height = "5px";
volumeSeekBar.style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 0.25)";
volumeSeekBar.style.background = "rgba(255, 255, 255, 0.3)";
volumeSeekBar.style.outline = "none";
volumeSeekBar.style.borderRadius = "999px";
volumeSeekBar.style.cursor = "pointer";
volumeSeekBar.style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 0.25)";
volumeSeekBar.style.position = "absolute";
volumeSeekBar.style.display = "flex";

// Добавляем обработчик события клика на полосе громкости
volumeSeekBar.addEventListener("click", function(event) {
  const clickX = event.clientX - volumeSeekBar.getBoundingClientRect().left;
  const seekPosition = clickX / volumeSeekBar.clientWidth;
  const currentTrack = tracks.find(track => track.playing);
  if (currentTrack) {
    const volume = seekPosition;
    currentTrack.audio.volume = volume;
    // Обновляем ширину индикатора
    updateVolumeIndicatorWidth(volume * 100);
  }
});


const volumeIndicator = document.createElement("div");
volumeIndicator.style.width = "100%"; // Изначально установленная ширина индикатора (0%)
volumeIndicator.style.height = "100%";
volumeIndicator.style.background = "rgba(255, 255, 255, 0.5)";
volumeIndicator.style.borderRadius = "999px";


// Функция для обновления ширины индикатора громкости
function updateVolumeIndicatorWidth(volumePercentage) {
  indicator.style.transition = '5s';
  volumeIndicator.style.width = volumePercentage + "%";
}

// Добавляем индикатор громкости в ползунок громкости
volumeSeekBar.appendChild(volumeIndicator);



// Создаем полосу промотки
const playerSeekBar = document.createElement("div");
playerSeekBar.type = "range";
playerSeekBar.min = "0";
playerSeekBar.max = "100";
playerSeekBar.value = "0";
// playerSeekBar.style.width = "260px";
playerSeekBar.style.bottom = "190px";
playerSeekBar.style.left = "20px";
playerSeekBar.style.right = "20px";
playerSeekBar.style.appearance = "none";
playerSeekBar.style.height = "5px";
playerSeekBar.style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 0.25)";
playerSeekBar.style.background = "rgba(255, 255, 255, 0.3)";
playerSeekBar.style.outline = "none";
playerSeekBar.style.borderRadius = "999px";
playerSeekBar.style.cursor = "pointer";
playerSeekBar.style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 0.25)";
playerSeekBar.style.position = "absolute";
playerSeekBar.style.display = "flex";

// Пример использования функции обновления положения индикатора
let duration = 1000; // Общая продолжительность (в секундах)
let currentTime = 0; // Текущее время воспроизведения (в секундах)

// Создаем элемент индикатора
const indicator = document.createElement("div");
indicator.style.width = parseInt(currentTime) + "px";
indicator.style.height = "100%";
indicator.style.background = "rgba(255, 255, 255, 0.5)";
indicator.style.borderRadius = "999px";

// Добавляем обработчики событий для изменения высоты слайдера при наведении мыши
playerSeekBar.addEventListener('mouseenter', function() {
  playerSeekBar.style.height = '10px';
  playerSeekBar.style.transition = '0.2s';
  indicator.style.transition = '0.2s';
  indicator.style.height = '10px';
});

playerSeekBar.addEventListener('mouseleave', function() {
  playerSeekBar.style.height = '5px';
  playerSeekBar.style.transition = '0.2s';
  indicator.style.transition = '0.2s';
  indicator.style.height = '5px';
});





volumeSeekBar.addEventListener('mouseenter', function() {
  volumeSeekBar.style.height = '10px';
  volumeSeekBar.style.transition = '0.2s';
  volumeIndicator.style.transition = '0.2s';
  volumeIndicator.style.height = '10px';
});

volumeSeekBar.addEventListener('mouseleave', function() {
  volumeSeekBar.style.height = '5px';
  volumeSeekBar.style.transition = '0.2s';
  volumeIndicator.style.transition = '0.2s';
  volumeIndicator.style.height = '5px';
});





// Добавляем обработчик события изменения значения полосы промотки
playerSeekBar.addEventListener("input", function(event) {
  const seekValue = event.target.value;
  const currentTrack = tracks.find(track => track.playing);

  if (currentTrack) {
    let seekTime = (currentTrack.audio.duration * seekValue) / 100;
    currentTrack.audio.currentTime = seekTime;
    // currentTime = seekValue;
    updateIndicatorWidth(seekValue); // Обновляем ширину индикатора
  }
});


updateIndicatorPosition(currentTime, duration);



// Добавляем индикатор в полосу промотки
playerSeekBar.appendChild(indicator);

// Добавляем полосу промотки в контейнер слайдера
// playerContainer.appendChild(playerSeekBar);

let currentTrack;


// Обработчик события клика на полосе промотки
playerSeekBar.addEventListener("mousedown", function(event) {
 const seekPosition = event.offsetX / playerSeekBar.clientWidth;
  const currentTrack = tracks.find(track => track.playing);
  if (currentTrack) {
    const seekTime = currentTrack.audio.duration * seekPosition;
    currentTrack.audio.currentTime = seekTime;
    currentTrack.audio.addEventListener('timeupdate', function() {
  currentTime = currentTrack.audio.currentTime;
  updateIndicatorWidth((currentTime / currentTrack.audio.duration) * 100);
});
    indicator.style.width = parseInt(currentTime) + "px";
    updateIndicatorWidth(seekPosition * 100); // Обновляем ширину индикатора
  }
});



let seekBarPosition;

// Функция для обновления положения индикатора на основе текущего времени воспроизведения
function updateIndicatorPosition(currentTime, duration) {
  const percent = (currentTime / duration) * 100;
  // playerSeekBar.value = percent;
  playerSeekBar.value = parseInt(percent);
  currentTime = (duration / 100) * percent;
  updateIndicatorWidth(percent);
  updateTimeLabel(timeLabel, currentTime);
}



// Функция для обновления ширины индикатора
function updateIndicatorWidth(percent) {
  indicator.style.width = parseInt(percent) + "%";
}




// 
// Добавляем стили для hover состояния кнопок
playerBack.addEventListener("mouseenter", function() {
  playerBack.style.transition = "0.4s";
  playerBack.style.background = "rgba(255, 255, 255, 0.25";
});

playerBack.addEventListener("mouseleave", function() {
  playerBack.style.transition = "0.4s";
  playerBack.style.background = "rgba(255, 255, 255, 0";
});

playerPlay.addEventListener("mouseenter", function() {
  playerPlay.style.transition = "0.4s";
  playerPlay.style.background = "rgba(255, 255, 255, 0.25";
  // playerPlay.style.backgroundImage = "url('https://administrati0n.github.io/data-one/player/img/controls/play/play_hover.png')";
});

playerPlay.addEventListener("mouseleave", function() {
  playerPlay.style.transition = "0.4s";
  playerPlay.style.background = "rgba(255, 255, 255, 0";
  // playerPlay.style.backgroundImage = "url('https://administrati0n.github.io/data-one/player/img/controls/play/play.png')";
});

playerPlay0.addEventListener("mouseenter", function() {
  playerPlay0.style.transition = "0.4s";
  playerPlay0.style.background = "rgba(255, 255, 255, 0.25";
  // playerPlay.style.backgroundImage = "url('https://administrati0n.github.io/data-one/player/img/controls/play/play_hover.png')";
});

playerPlay0.addEventListener("mouseleave", function() {
  playerPlay0.style.transition = "0.4s";
  playerPlay0.style.background = "rgba(255, 255, 255, 0";
  // playerPlay.style.backgroundImage = "url('https://administrati0n.github.io/data-one/player/img/controls/play/play.png')";
});



playerNext.addEventListener("mouseenter", function() {
  playerNext.style.transition = "0.4s";
  playerNext.style.background = "rgba(255, 255, 255, 0.25";
});

playerNext.addEventListener("mouseleave", function() {
  playerNext.style.transition = "0.4s";
  playerNext.style.background = "rgba(255, 255, 255, 0";
});

// Добавляем стили для active состояния кнопок
playerBack.addEventListener("mousedown", function() {
    playerBack.style.transition = "0.4s";
  playerBack.style.background = "rgba(255, 255, 255, 0.35";
});

playerBack.addEventListener("mouseup", function() {
    playerBack.style.transition = "0.4s";
  playerBack.style.background = "rgba(255, 255, 255, 0";
});

playerPlay.addEventListener("mousedown", function() {
    playerPlay.style.transition = "0.4s";
  playerPlay.style.background = "rgba(255, 255, 255, 0.35";
});

playerPlay.addEventListener("mouseup", function() {
  playerPlay.style.transition = "0.4s";
  playerPlay.style.background = "rgba(255, 255, 255, 0";
});

playerPlay0.addEventListener("mousedown", function() {
    playerPlay0.style.transition = "0.4s";
  playerPlay0.style.background = "rgba(255, 255, 255, 0.35";
});

playerPlay0.addEventListener("mouseup", function() {
  playerPlay0.style.transition = "0.4s";
  playerPlay0.style.background = "rgba(255, 255, 255, 0";
});



playerNext.addEventListener("mousedown", function() {
    playerNext.style.transition = "0.4s";
  playerNext.style.background = "rgba(255, 255, 255, 0.35";
});

playerNext.addEventListener("mouseup", function() {
    playerNext.style.transition = "0.4s";
  playerNext.style.background = "rgba(255, 255, 255, 0";
});

// Создаем массив треков
const tracks = [
  {
    title: "Experience",
    duration1: "-5:15",
    duration2: "17",
    artist: "Ludovico Einaudi, Daniel Hope & I Virtuosi Italiani",
    image: "https://administrati0n.github.io/data-one/player/Experience.jpg",
    image2: "https://administrati0n.github.io/data-one/player/Experience.jpg",
    audio: "https://administrati0n.github.io/data-one/player/Experience.mp3",
    playing: false
  },
  {
    title: "Where Is My Mind",
    duration1: "-2:45",
    duration2: "45",
    artist: "Maxence Cyrin",
    image: "https://administrati0n.github.io/data-one/player/Where Is My Mind.jpeg",
    image2: "https://administrati0n.github.io/data-one/player/Where Is My Mind.jpeg",
    audio: "https://administrati0n.github.io/data-one/player/Where Is My Mind.mp3",
    playing: false
  },
  {
    title: "Pure Imagination",
    duration1: "-1:04",
    duration2: "04",
    artist: "Shiloh",
    image: "https://administrati0n.github.io/data-one/player/Pure Imagination.jpeg",
    image2: "https://administrati0n.github.io/data-one/player/Pure Imagination.jpeg",
    audio: "https://administrati0n.github.io/data-one/player/Pure Imagination.mp3",
    playing: false
  },
  {
    title: "The Beach (Instrumental + Slowed + Muffled)",
    duration1: "-4:24",
    duration2: "24",
    artist: "mxpheebz",
    image: "https://administrati0n.github.io/data-one/player/The Beach.jpg",
    image2: "https://administrati0n.github.io/data-one/player/The Beach.jpg",
    audio: "https://administrati0n.github.io/data-one/player/The Beach.mp3",
    playing: false
  }
];

// Функция для форматирования времени в минуты:секунды
function formatTime(time) {
  const minutes = Math.floor(Math.abs(time) / 60);
  const seconds = Math.floor(Math.abs(time) % 60);
  const sign = time < 0 ? "-" : ""; // Добавляем минус только для отрицательного времени
  return `${sign}${minutes}:${seconds.toString().padStart(2, '0')}`;
}

// Обновление метки durationLabel
function updateDurationLabel(duration) {
  const currentTrack = tracks.find(track => track.playing);
  if (currentTrack && !isNaN(duration)) {
    const remainingTime = duration - currentTrack.audio.currentTime;
    const formattedTime = formatTime(remainingTime);
    durationLabel.textContent = `-${formattedTime}`;
    durationLabel.style.display = "block"; // Показываем метку, когда есть запущенный трек и длительность определена
  } else {
    durationLabel.style.display = "none"; // Скрываем метку, когда нет запущенного трека или длительность не определена
  }
}

// Получение длительности трека и обновление метки каждую секунду
setInterval(function() {
  const currentTrack = tracks.find(track => track.playing);
  if (currentTrack) {
    const duration = currentTrack.audio.duration;
    updateDurationLabel(duration);
  }
}, 1000);






// // Функция для обновления времени воспроизведения на метке
// function updateTimeLabel(label, time) {
//   const minutes = Math.floor(time / 60);
//   const seconds = Math.floor(time % 60);
//   const formattedTime = `${minutes}:${seconds.toString().padStart(2, "0")}`;
// }

function formatTime(timeInSeconds) {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = Math.floor(timeInSeconds % 60);
  const formattedTime = `${minutes}:${seconds.toString().padStart(2, "0")}`;
  return formattedTime; // Возвращаем отформатированное время
}

function updateTimeLabel(label, time) {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  const formattedTime = `${minutes}:${seconds.toString().padStart(2, "0")}`;
  label.textContent = formattedTime;
   return { minutes, seconds, formattedTime };

}

// Пример использования функции обновления времени
// const currentTime = 30; // Текущее время воспроизведения в секундах
// const duration = 120; // Общая продолжительность трека в секундах
// updateTimeLabel(currentTimeLabel, currentTime);
// updateTimeLabel(durationLabel, duration);

// playerContainer.appendChild(currentTimeLabel);
frame.appendChild(playerSeekBar);
// playerContainer.appendChild(durationLabel);
// playerContainer.appendChild(controlsContainer);


// const { minutes } = updateTimeLabel(minutes);

// Функция изменения трека
function changeTrack(index) {
// if (typeof timeLabel !== 'string') {
//   timeLabel = timeLabel.toString();
// }
  const track = tracks[index];


durationLabel.textContent = track.duration1;



// console.log(currentTimeLabel);



  playerTrackTitle.textContent = track.title;
  playerArtistTitle.textContent = track.artist;
phrcamera1title.textContent = track.title;
phrcamera2title.textContent = track.artist;
  // durationLabel.textContent = track.duration1;
bgColor.style.backgroundImage = `url('${track.image}')`;
bgBlack.style.backgroundImage = `url('${track.image}')`;
phrcamera1trimg.style.background = `url('${track.image2}')`;
phrcamera1trimg.style.backgroundSize = 'contain';
phrcamera1trimg.style.backgroundPosition = 'center';
phrcamera1trimg.style.backgroundRepeat = 'no-repeat';
// console.log(timeLabel);

  // bgColor.src = `url('${track.image}')`;
// bgBlack.src = `url('${track.image}')`;
  playerImage2.style.backgroundImage = `url('${track.image2}')`;
  if (!track.playing) {

    return; // Если трек не должен быть воспроизведен, прекращаем выполнение функции
  }
  // Проверяем состояние воспроизведения трека
  if (track.playing) {
    // playerPlay.style.display = "none";
playerPlay5.style.top = "10px";
playerPlay5.style.height = "26px";
playerPlay05.style.top = "10px";
playerPlay05.style.height = "26px";
    // playerPause.style.display = "block";
  } else {
    playerPlay5.style.top = "18px";
playerPlay5.style.height = "9px";
playerPlay3.style.opacity = "0";
playerPlay2.style.top = "10";
playerPlay2.style.opacity = "0";

    playerPlay05.style.top = "18px";
playerPlay05.style.height = "9px";
playerPlay03.style.opacity = "0";
playerPlay02.style.top = "10";
playerPlay02.style.opacity = "0";
    // playerPlay.style.display = "block";
    // playerPause.style.display = "none";
  }

  // Приостанавливаем и сбрасываем в начало предыдущий трек
  const currentTrack = tracks.find(track => track.playing);
  if (currentTrack && currentTrack !== track) {
    currentTrack.playing = false;
    currentTrack.audio.pause();
    currentTrack.audio.currentTime = 0;
  }

  // Воспроизводим текущий трек
  track.playing = true;
  track.audio.play().catch(error => {
    // Обрабатываем ошибку воспроизведения
    console.error("Failed to play audio:", error);
  });
}


let playm = "n";



// Обработчик события для кнопки playerPlay
playerPlay.addEventListener("click", function() {
  const currentTrack = tracks.find(track => track.playing);

  const newTrack = tracks.find(track => track.title === playerTrackTitle.textContent);

  if (playm === "n") {
    playm = "y";
  newTrack.playing = true;
  newTrack.audio.play();
  playerPlay5.style.top = "10px";
playerPlay5.style.height = "26px";

  playerPlay05.style.top = "10px";
playerPlay05.style.height = "26px";

playerPlay3.style.height = "10px";
playerPlay3.style.right = "24px";
playerPlay3.style.top = "11px";

playerPlay03.style.height = "10px";
playerPlay03.style.right = "24px";
playerPlay03.style.top = "11px";

playerPlay2.style.height = "10px";
playerPlay2.style.right = "24px";
playerPlay2.style.top = "26px";

playerPlay02.style.height = "10px";
playerPlay02.style.right = "24px";
playerPlay02.style.top = "26px";
playerPlay04.style.left = "2px";
  }else{
playm = "n";
currentTrack.playing = false;
currentTrack.audio.pause(); // Приостанавливаем текущий трек

playerPlay5.style.top = "22px";
playerPlay5.style.height = "0px";

playerPlay05.style.top = "22px";
playerPlay05.style.height = "0px";

playerPlay3.style.top = "6px";
playerPlay3.style.right = "17px";
playerPlay3.style.height = "26px";

playerPlay03.style.top = "6px";
playerPlay03.style.right = "17px";
playerPlay03.style.height = "26px";

playerPlay2.style.top = "14px";
playerPlay2.style.right = "17px";
playerPlay2.style.height = "26px";

playerPlay02.style.top = "14px";
playerPlay02.style.right = "17px";
playerPlay02.style.height = "26px";
playerPlay04.style.left = "20px";
  }


});

playerPlay0.addEventListener("click", function() {
  const currentTrack = tracks.find(track => track.playing);

  const newTrack = tracks.find(track => track.title === playerTrackTitle.textContent);

  if (playm === "n") {
    playm = "y";
  newTrack.playing = true;
  newTrack.audio.play();
  playerPlay5.style.top = "10px";
playerPlay5.style.height = "26px";

  playerPlay05.style.top = "10px";
playerPlay05.style.height = "26px";

playerPlay3.style.height = "10px";
playerPlay3.style.right = "24px";
playerPlay3.style.top = "11px";

playerPlay03.style.height = "10px";
playerPlay03.style.right = "24px";
playerPlay03.style.top = "11px";

playerPlay2.style.height = "10px";
playerPlay2.style.right = "24px";
playerPlay2.style.top = "26px";

playerPlay02.style.height = "10px";
playerPlay02.style.right = "24px";
playerPlay02.style.top = "26px";
playerPlay04.style.left = "2px";


  }else{
playm = "n";
currentTrack.playing = false;
currentTrack.audio.pause(); // Приостанавливаем текущий трек

playerPlay5.style.top = "22px";
playerPlay5.style.height = "0px";

playerPlay05.style.top = "22px";
playerPlay05.style.height = "0px";

playerPlay3.style.top = "6px";
playerPlay3.style.right = "17px";
playerPlay3.style.height = "26px";

playerPlay03.style.top = "6px";
playerPlay03.style.right = "17px";
playerPlay03.style.height = "26px";

playerPlay2.style.top = "14px";
playerPlay2.style.right = "17px";
playerPlay2.style.height = "26px";

playerPlay02.style.top = "14px";
playerPlay02.style.right = "17px";
playerPlay02.style.height = "26px";
playerPlay04.style.left = "20px";

  }


});





// Создаем объекты аудио для каждого трека
tracks.forEach(track => {
  track.audio = new Audio(track.audio); // Создаем объект аудио
  track.audio.addEventListener("ended", function() {
  const currentTrack = tracks.find(track => track.playing); // Получаем текущий трек
if (currentTrack) {
  resetAndPlayTrack(currentTrack);
}

// Получаем индекс текущего трека
const currentIndex = tracks.findIndex(track => track.title === playerTrackTitle.textContent);
// Вычисляем индекс следующего трека
const nextIndex = (currentIndex + 1) % tracks.length;
// Получаем текущий трек
// const currentTrack = tracks[currentIndex];
// Получаем следующий трек
const nextTrack = tracks[nextIndex];

if (currentTrack) {
  // Останавливаем текущий трек
  currentTrack.audio.pause();
  currentTrack.audio.currentTime = 0;
  // Помечаем текущий трек как не играющий
  currentTrack.playing = false;
}

// Изменяем трек и изображение
changeTrack(nextIndex);

// Проверяем, что следующий трек определен и воспроизводим его
if (nextTrack) {
  nextTrack.playing = true;
  nextTrack.audio.play();
      playm = "y";
  playerPlay5.style.top = "10px";
playerPlay5.style.height = "26px";

playerPlay3.style.height = "10px";
playerPlay3.style.right = "24px";
playerPlay3.style.top = "11px";

playerPlay2.style.height = "10px";
playerPlay2.style.right = "24px";
playerPlay2.style.top = "26px";
  playerPlay05.style.top = "10px";
playerPlay05.style.height = "26px";
playerPlay03.style.height = "10px";
playerPlay03.style.right = "24px";
playerPlay03.style.top = "11px";
playerPlay02.style.height = "10px";
playerPlay02.style.right = "24px";
playerPlay02.style.top = "26px";
playerPlay04.style.left = "2px";
}




volumeIndicator.style.width = "100%"; // Изначально установленная ширина индикатора (0%)

  });

  // Добавляем обработчик события timeupdate
  track.audio.addEventListener('timeupdate', function() {
    currentTime = track.audio.currentTime;
    updateIndicatorPosition(currentTime, track.audio.duration);
  });
});




// Изначально скрываем кнопку playerPause
// playerPause.style.display = "none";



function resetAndPlayTrack(track) {
  track.audio.currentTime = 0; // Сбрасываем время трека на 0
  track.audio.play(); // Воспроизводим трек

  // Здесь вы можете добавить любой другой код, который должен выполняться после сброса и воспроизведения трека
}


// Обработчик события для кнопки playerBack
playerBack.addEventListener("click", function() {
    const currentTrack = tracks.find(track => track.playing); // Получаем текущий трек
if (currentTrack) {
  resetAndPlayTrack(currentTrack);
}
  // Получаем индекс текущего трека

  // Вычисляем индекс предыдущего трека
  // Изменяем трек и изображение
  // changeTrack(prevIndex);


// Получаем индекс текущего трека
  const currentIndex = tracks.findIndex(track => track.title === playerTrackTitle.textContent);
// Вычисляем индекс следующего трека
  const prevIndex = (currentIndex - 1 + tracks.length) % tracks.length;
// Получаем текущий трек
// const currentTrack = tracks[currentIndex];
// Получаем следующий трек
const backTrack = tracks[prevIndex];

if (currentTrack) {
  // Останавливаем текущий трек
  currentTrack.audio.pause();
  currentTrack.audio.currentTime = 0;
  // Помечаем текущий трек как не играющий
  currentTrack.playing = false;
}

// Изменяем трек и изображение
changeTrack(prevIndex);

// Проверяем, что следующий трек определен и воспроизводим его
if (backTrack) {
  backTrack.playing = true;
  backTrack.audio.play();
      playm = "y";
  playerPlay5.style.top = "10px";
playerPlay5.style.height = "26px";

playerPlay3.style.height = "10px";
playerPlay3.style.right = "24px";
playerPlay3.style.top = "11px";

playerPlay2.style.height = "10px";
playerPlay2.style.right = "24px";
playerPlay2.style.top = "26px";

  playerPlay05.style.top = "10px";
playerPlay05.style.height = "26px";
playerPlay03.style.height = "10px";
playerPlay03.style.right = "24px";
playerPlay03.style.top = "11px";
playerPlay02.style.height = "10px";
playerPlay02.style.right = "24px";
playerPlay02.style.top = "26px";
playerPlay04.style.left = "2px";
}

volumeIndicator.style.width = "100%"; // Изначально установленная ширина индикатора (0%)






});

// Обработчик события для кнопки playerNext
playerNext.addEventListener("click", function() {
  const currentTrack = tracks.find(track => track.playing); // Получаем текущий трек
if (currentTrack) {
  resetAndPlayTrack(currentTrack);
}

// Получаем индекс текущего трека
const currentIndex = tracks.findIndex(track => track.title === playerTrackTitle.textContent);
// Вычисляем индекс следующего трека
const nextIndex = (currentIndex + 1) % tracks.length;
// Получаем текущий трек
// const currentTrack = tracks[currentIndex];
// Получаем следующий трек
const nextTrack = tracks[nextIndex];

if (currentTrack) {
  // Останавливаем текущий трек
  currentTrack.audio.pause();
  currentTrack.audio.currentTime = 0;
  // Помечаем текущий трек как не играющий
  currentTrack.playing = false;
}

// Изменяем трек и изображение
changeTrack(nextIndex);

// Проверяем, что следующий трек определен и воспроизводим его
if (nextTrack) {
  nextTrack.playing = true;
  nextTrack.audio.play();
      playm = "y";
  playerPlay5.style.top = "10px";
playerPlay5.style.height = "26px";

playerPlay3.style.height = "10px";
playerPlay3.style.right = "24px";
playerPlay3.style.top = "11px";

playerPlay2.style.height = "10px";
playerPlay2.style.right = "24px";
playerPlay2.style.top = "26px";

  playerPlay05.style.top = "10px";
playerPlay05.style.height = "26px";
playerPlay03.style.height = "10px";
playerPlay03.style.right = "24px";
playerPlay03.style.top = "11px";
playerPlay02.style.height = "10px";
playerPlay02.style.right = "24px";
playerPlay02.style.top = "26px";
playerPlay04.style.left = "2px";
}




volumeIndicator.style.width = "100%"; // Изначально установленная ширина индикатора (0%)

});

const playerLossLessC = document.createElement("div");
// playerLossLessC.style.width = "111px";
// playerLossLessC.style.height = "24px";
playerLossLessC.style.display = "flex";
// playerLossLessC.style.position = "absolute";
playerLossLessC.style.borderRadius = "4px";
// playerLossLessC.style.top = "379px";
// playerLossLessC.style.left = "72px";
// playerLossLessC.style.background = "rgba(255, 255, 255, 0.25)";

const playerLossLessCT0 = document.createElement("div");
playerLossLessCT0.style.width = "100%";
playerLossLessCT0.style.background = "none";
playerLossLessCT0.style.height = "15px";
playerLossLessCT0.style.position = "absolute";
playerLossLessCT0.style.top = "379px";
playerLossLessCT0.style.display = "flex";
playerLossLessCT0.style.opacity = "1";
playerLossLessC.appendChild(playerLossLessCT0);

const playerLossLessCT = document.createElement("span");
playerLossLessCT.style.fontSize = "15px";
playerLossLessCT.style.fontFamily = "Arial Bold";
playerLossLessCT.textContent = MusicQuality;
playerLossLessCT.style.position = "relative";
playerLossLessCT.style.display = "flex";
playerLossLessCT.style.marginLeft = "auto";
playerLossLessCT.style.marginRight = "2.5px";
playerLossLessCT.style.opacity = "0.5";

const playerLossLessCT1 = document.createElement("span");
playerLossLessCT1.style.fontSize = "15px";
playerLossLessCT1.style.fontFamily = "Arial";
playerLossLessCT1.textContent = "Quality";
playerLossLessCT1.style.position = "relative";
playerLossLessCT1.style.display = "flex";
playerLossLessCT1.style.marginRight = "auto";
playerLossLessCT1.style.marginLeft = "2.5px";
playerLossLessCT1.style.opacity = "0.25";


playerLossLessCT0.appendChild(playerLossLessCT);
playerLossLessCT0.appendChild(playerLossLessCT1);
// const playerLossLessCL = document.createElement("div");
// playerLossLessCL.style.background = "white";
// playerLossLessCL.style.backgroundSize = "24px";
// playerLossLessCL.style.backgroundRepeat = "no-repeat";
// playerLossLessCL.style.width = "7px";
// playerLossLessCL.style.height = "11px";
// playerLossLessCL.style.position = "absolute";
// playerLossLessCL.style.top = "4px";
// playerLossLessCL.style.left = "7px";
// playerLossLessCL.style.borderRadius = "0px 15px 15px 0px";
// playerLossLessCL.style.opacity = "0.5";

// const playerLossLessCL1 = document.createElement("div");
// playerLossLessCL1.style.background = "white";
// playerLossLessCL1.style.backgroundSize = "24px";
// playerLossLessCL1.style.backgroundRepeat = "no-repeat";
// playerLossLessCL1.style.width = "7px";
// playerLossLessCL1.style.height = "11px";
// playerLossLessCL1.style.position = "absolute";
// playerLossLessCL1.style.top = "4px";
// playerLossLessCL1.style.left = "16px";
// playerLossLessCL1.style.borderRadius = "15px 0px 0px 15px";
// playerLossLessCL1.style.opacity = "0.5";




const homeBar = document.createElement("div");
homeBar.style.position = "absolute";
homeBar.style.bottom = "10px";
homeBar.style.left = "90px";
homeBar.style.width = "110px";
homeBar.style.borderRadius = "999px";
homeBar.style.height = "5px";
homeBar.style.mixBlendMode = "difference";
homeBar.style.backgroundColor = "rgba(255, 255, 255, 1";


const mdnpc = document.createElement("div");
mdnpc.style.position = "absolute";
mdnpc.style.top = "10px";
mdnpc.style.left = "85px";
mdnpc.style.width = "100px";
mdnpc.style.borderRadius = "999px";
mdnpc.style.zIndex = "999";
mdnpc.style.height = "30px";
mdnpc.style.transition = "0.3s";
mdnpc.style.opacity = "1";
mdnpc.style.backgroundColor = "rgba(0, 0, 0, 1)";

mdnpc.addEventListener("mouseenter", function() {
  mdnpc.style.width = "114px";
  mdnpc.style.height = "34px";
  mdnpc.style.top = "8px";
mdnpc.style.transition = "0.3s";
  mdnpc.style.left = "79px";
});

mdnpc.addEventListener("mouseleave", function() {
  mdnpc.style.width = "100px";
  mdnpc.style.height = "30px";
  mdnpc.style.top = "10px";
mdnpc.style.transition = "0.3s";
  mdnpc.style.left = "85px";
});


const mpt = document.createElement("div");
mpt.style.opacity = "0";
mpt.style.transition = "0.8s";
mpt.style.position = "absolute";
mpt.style.fontFamily = "Roboto-Bold";
mpt.style.fontSize = "25px";
mpt.textContent = "This Function in Beta";
mpt.style.top = "60px";
mpt.style.mixBlendMode = "difference";
mpt.style.left = "20px";

const mptb = document.createElement("button");
mptb.style.opacity = "0";
mptb.style.transition = "0.8s";
mptb.style.position = "absolute";
mptb.style.fontFamily = "Roboto-Bold";
mptb.style.fontSize = "15px";
mptb.textContent = "Open Player";
mptb.style.top = "320px";
mptb.style.mixBlendMode = "difference";
mptb.style.left = "95px";

mptb.addEventListener("click", function() {
frameBg.style.top = "0px";
lyrics.style.top = "0px";
mptb.style.opacity = "0.5";
mpt.style.opacity = "0";
});

const frcamera = document.createElement("div");
frcamera.style.width = "20px";
frcamera.style.height = "20px";
frcamera.style.borderRadius = "999px";
frcamera.style.position = "absolute";
frcamera.style.left = "175px";
frcamera.style.opacity = "0.3";
frcamera.style.top = "25px";
frcamera.style.zIndex = "99999999999999999999999";
frcamera.style.background = "linear-gradient(121deg, #222 0%, #0B0B0B 100%)";

const frcameragr = document.createElement("div");
frcameragr.style.width = "10px";
frcameragr.style.height = "10px";
frcameragr.style.borderRadius = "999px";
frcameragr.style.position = "absolute";
frcameragr.style.left = "5px";
frcameragr.style.top = "5px";
frcameragr.style.zIndex = "9999";
frcameragr.style.background = "black";
frcameragr.style.overflow = "hidden";

const frcamera1 = document.createElement("div");
frcamera1.style.width = "5px";
frcamera1.style.height = "8px";
frcamera1.style.borderRadius = "0 50% 50% 0";
// frcamera1.style.borderRadius = "999px";
frcamera1.style.position = "absolute";
frcamera1.style.right = "1px";
frcamera1.style.top = "1px";
frcamera1.style.zIndex = "9999";
frcamera1.style.filter = "blur(0.5077852010726929px)";
frcamera1.style.background = "linear-gradient(251deg, #3D6495 0%, #061127 71.88%)";
frcameragr.appendChild(frcamera1);

const frcamera0 = document.createElement("div");
frcamera0.style.width = "4px";
frcamera0.style.height = "4px";
frcamera0.style.borderRadius = "999px";
frcamera0.style.position = "absolute";
frcamera0.style.left = "4px";
frcamera0.style.top = "4px";
frcamera0.style.zIndex = "9999";
frcamera0.style.filter = "blur(0.5937578678131104px)";
frcamera0.style.background = "linear-gradient(321deg, #3291AF 0%, rgba(50, 145, 175, 0.00) 100%)";
frcameragr.appendChild(frcamera0);

const frcamera2 = document.createElement("div");
frcamera2.style.width = "4px";
frcamera2.style.height = "4px";
frcamera2.style.borderRadius = "999px";
frcamera2.style.position = "absolute";
frcamera2.style.right = "4px";
frcamera2.style.bottom = "4px";
frcamera2.style.zIndex = "9999";
frcamera2.style.filter = "blur(1.7812734842300415px)";
frcamera2.style.background = "rgba(80, 50, 109, 1)";
frcameragr.appendChild(frcamera2);

const frcamera3 = document.createElement("div");
frcamera3.style.width = "5px";
frcamera3.style.height = "8px";
frcamera3.style.borderRadius = "50% 0 0 50%";
// frcamera3.style.borderRadius = "999px";
frcamera3.style.position = "absolute";
frcamera3.style.left = "1px";
frcamera3.style.top = "1px";
frcamera3.style.zIndex = "9999";
frcamera3.style.filter = "blur(0.5077852010726929px)";
frcamera3.style.background = "linear-gradient(251deg, #20569B 0%, #061127 67.71%)";
frcameragr.appendChild(frcamera3);


// Создаем элемент div
const usertime = document.createElement("div");
usertime.style.position = "absolute";
usertime.style.fontFamily = "Roboto-Bold";
usertime.style.fontSize = "15px";
usertime.style.top = "15px";
usertime.style.mixBlendMode = "difference";
usertime.style.left = "25px";
usertime.style.zIndex = "99";
usertime.style.transformStyle = "preserve-3d";

// Функция для обновления времени каждую секунду
function updateTime() {
  // Получаем текущее время пользователя
  const currentTime = new Date();

  // Получаем текущее время в 12-часовом формате без AM/PM
  const formattedTime = currentTime.toLocaleTimeString(undefined, {
    hour: "numeric",
    hour12: true,
    minute: "numeric"
    // second: "numeric"
  }).replace(/(am|pm|AM|PM)/, ''); // Удаляем AM/PM из строки форматированного времени

  // Обновляем текст элемента с новым временем
  usertime.textContent = formattedTime;
  // usertime.textContent = "formattedTime";
}

// Обновляем время сразу после создания элемента
updateTime();

// Обновляем время каждую секунду
setInterval(updateTime, 100);



const usertime000 = document.createElement("div");
usertime000.style.position = "absolute";
usertime000.style.fontFamily = "Roboto-Bold";
usertime000.style.fontSize = "15px";
usertime000.style.top = "35px";
usertime000.style.transition = "0.5s";
usertime000.style.mixBlendMode = "difference";
usertime000.style.left = "0px";
usertime000.style.width = "100%";
usertime000.style.textAlign = "center";
usertime000.style.zIndex = "99";
usertime000.style.opacity = "0";
usertime000.style.lineHeight = "0px";
usertime000.style.transformStyle = "preserve-3d";

// Функция для обновления времени каждую секунду
function updateTime000() {
  // Получаем текущее время пользователя
  const currentTime000 = new Date();

  // Получаем текущее время в 12-часовом формате без AM/PM
  const formattedTime000 = currentTime000.toLocaleTimeString(undefined, {
    hour: "numeric",
    hour12: true,
    minute: "numeric"
    // second: "numeric"
  }).replace(/(am|pm|AM|PM)/, ''); // Удаляем AM/PM из строки форматированного времени

  // Обновляем текст элемента с новым временем
  usertime000.textContent = formattedTime000;
  // usertime.textContent = "formattedTime";
}

// Обновляем время сразу после создания элемента
updateTime000();

// Обновляем время каждую секунду
setInterval(updateTime000, 100);

// Задаем свойства элемента
// usertime.textContent = "formattedTime";

// Добавляем элемент в контейнер




// Добавляем элементы в DOM 
// frame.appendChild(mpt);
// frame.appendChild(mptb);
lyrics.appendChild(timeLabel);
// frame.appendChild(homeBar);
frame.appendChild(mdnpc);
frame.appendChild(usertime);
frame02.appendChild(usertime000);
// phone.appendChild(frcamera);
frcamera.appendChild(frcameragr);
// Добавляем ползунок громкости на страницу
lyrics.appendChild(volumeSeekBar);
playerSeekBar.appendChild(indicator);
// playerContainer.appendChild(playerImage);
lyrics.appendChild(currentTimeLabel);
lyrics.appendChild(durationLabel);
lyrics.appendChild(playerImage2);
lyrics.appendChild(playerContainerV);
lyrics.appendChild(playerSeekBar);
lyrics.appendChild(playerLossLessC);

// playerLossLessC.appendChild(playerLossLessCL);
// playerLossLessC.appendChild(playerLossLessCL1);
// playerImageContainer.appendChild(playerImage2);
// playerImageContainer.appendChild(playerContainerV);
playerContainerV.appendChild(playerTrackTitle);
playerContainerV.appendChild(playerArtistTitle);
lyrics.appendChild(playerContainerH);
// playerContainerH.appendChild(playerPause);
playerContainerH.appendChild(playerPlay);
playerPlay.appendChild(playerPlay1);
playerPlay.appendChild(playerPlay2);
playerPlay.appendChild(playerPlay3);
playerPlay.appendChild(playerPlay5);
// playerPlay.appendChild(playerPlay4);
playerContainerH.appendChild(playerBack);
playerContainerH.appendChild(playerNext);
// document.body.appendChild(playerContainer);
frame01.appendChild(frame);
// Добавляем frame в DOM дерево (например, внутрь элемента с id="container")
// const container = document.getElementById('div');
// container.appendChild(frame);

// Изначально отображаем первый трек
changeTrack(0);







const svglogoisland = `
<svg width="109" height="57" viewBox="0 0 109 57" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.283203" y="0.313232" width="108" height="56" rx="28" fill="#FF3B30"/>
<path d="M54.25 10.8621C51.793 10.8621 50.083 12.572 49.4521 14.7468C48.5723 15.0457 47.8086 15.4607 47.1611 15.9919L69.4902 38.3542C69.7725 38.0388 69.9053 37.6238 69.9053 37.1423C69.9053 35.4822 68.2285 33.988 66.7842 32.5105C65.6885 31.365 65.3896 29.0076 65.2734 27.0984C65.1406 20.7234 63.4639 16.3406 59.0479 14.7468C58.417 12.572 56.6904 10.8621 54.25 10.8621ZM38.9434 14.2322L68.7764 44.0154C69.2744 44.53 70.0879 44.53 70.5859 44.0154C71.0674 43.5173 71.084 42.7205 70.5859 42.2058L40.7695 12.4226C40.2715 11.9246 39.458 11.9246 38.9434 12.4226C38.4619 12.9041 38.4619 13.7507 38.9434 14.2322ZM41.085 39.1511H61.123L43.8076 21.8191C43.4424 23.3962 43.2598 25.1394 43.2266 27.0984C43.0938 29.0076 42.8115 31.365 41.7158 32.5105C40.2715 33.988 38.5781 35.4822 38.5781 37.1423C38.5781 38.3542 39.5244 39.1511 41.085 39.1511ZM54.25 45.8083C57.0557 45.8083 59.1143 43.7498 59.3467 41.4255H49.1533C49.3691 43.7498 51.4277 45.8083 54.25 45.8083Z" fill="white"/>
</svg>

`;

const svglogocisland = document.createElement('div');
svglogocisland.innerHTML = svglogoisland;

const svglogoelementisland = svglogocisland.querySelector('svg');
svglogoelementisland.style.marginLeft = '4px';
svglogoelementisland.style.marginTop = '4px';
svglogoelementisland.style.width = '46px';
svglogoelementisland.style.height = '23px';
svglogoelementisland.style.position = 'absolute';
svglogoelementisland.style.transition = '0.5s';
svglogoelementisland.style.opacity = '0';
// svglogoelement5.style.mixBlendMode = 'difference';

// Добавляем созданный элемент <svg> в контейнер
mdnpc.appendChild(svglogocisland);

const svglogoisland1 = `
<svg width="108" height="56" viewBox="0 0 108 56" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="108" height="56" rx="28" fill="none"/>
<path d="M43 27C42.8687 28.8575 43.1843 31.1511 42.1013 32.2656C40.6737 33.7031 39 35.1568 39 36.772C39 37.9511 39.9575 38.5 41.5 38.5H54V32.033V29.3495V27H52.0994H49.382H43Z" fill="white"/>
<path d="M49 41C49.2133 43.2613 51.2104 45 54 45V41H49Z" fill="white"/>
<path d="M65.5 27C65.6356 28.8367 65.678 31.1047 66.7966 32.2067C68.2712 33.6282 70 35.0657 70 36.6628C70 37.8287 69.0339 38.5954 67.4407 38.5954L54 38.4884V31.9768V29.3232V27H56.4696H59.2763H65.5Z" fill="white"/>
<path d="M59 41C58.7797 43.236 56.8814 45 54 45V41H59Z" fill="white"/>
<path d="M65.5 27C65.3675 20.7178 63.5752 16.3988 59.1686 14.8282C58.5391 12.6851 56.3161 11 53.8809 11C51.4456 11 49.7227 12.6851 49.0932 14.8282C44.6866 16.3988 43.1325 20.7178 43 27H49.8883H53.1719H54.381H55.5901H58.3736H65.5Z" fill="white"/>
</svg>


`;

const svglogocisland1 = document.createElement('div');
svglogocisland1.innerHTML = svglogoisland1;

const svglogoelementisland1 = svglogocisland1.querySelector('svg');
svglogoelementisland1.style.marginLeft = '4px';
svglogoelementisland1.style.marginTop = '4px';
svglogoelementisland1.style.width = '46px';
svglogoelementisland1.style.height = '23px';
svglogoelementisland1.style.position = 'absolute';
svglogoelementisland1.style.transition = '0.5s';
svglogoelementisland1.style.opacity = '0';
// svglogoelement5.style.mixBlendMode = 'difference';

// Добавляем созданный элемент <svg> в контейнер
mdnpc.appendChild(svglogocisland1);

const silentT = document.createElement('div');
silentT.textContent = "Silent";
silentT.style.position = "absolute";
silentT.style.fontFamily = "Arial";
silentT.style.fontSize = "15px";
silentT.style.top = "6px";
silentT.style.right = "10px";
silentT.style.color = "red";
silentT.style.opacity = "0";
mdnpc.appendChild(silentT);



phonebtnplus.addEventListener("mouseenter", function() {
  phonebtnplus.style.transition = "0.5s";
  phonebtnplus.style.width = "10px";
  phonebtnplus.style.left = "-5px";
  // phonebtnplus.style.borderRadius = "4px 0px 0px 4px";
  phonebtnplus.style.cursor = "pointer";
phonebtnplus1.style.transform = 'translateZ(-15px) translateY(130px) translateX(-3px) rotateY(-90deg)';

});

phonebtnplus.addEventListener("mouseleave", function() {
  phonebtnplus.style.transition = "0.5s";
  phonebtnplus.style.width = "5px";
  phonebtnplus.style.left = "0px";
  // phonebtnplus.style.borderRadius = "10px 0px 0px 10px";
  phonebtnplus.style.cursor = "normal";
phonebtnplus1.style.transform = 'translateZ(-15px) translateY(130px) translateX(0px) rotateY(-90deg)';

});

phonebtnplus3.addEventListener("mouseenter", function() {
  phonebtnplus3.style.transition = "0.5s";
  phonebtnplus3.style.width = "10px";
  phonebtnplus3.style.left = "-5px";
  // phonebtnplus3.style.borderRadius = "4px 0px 0px 4px";
  phonebtnplus3.style.cursor = "pointer";
phonebtnplus1.style.transform = 'translateZ(-15px) translateY(130px) translateX(-3px) rotateY(-90deg)';

});

phonebtnplus3.addEventListener("mouseleave", function() {
  phonebtnplus3.style.transition = "0.5s";
  phonebtnplus3.style.width = "5px";
  phonebtnplus3.style.left = "0px";
  // phonebtnplus3.style.borderRadius = "10px 0px 0px 10px";
  phonebtnplus3.style.cursor = "normal";
phonebtnplus1.style.transform = 'translateZ(-15px) translateY(130px) translateX(0px) rotateY(-90deg)';

});

phonebtnminus.addEventListener("mouseenter", function() {
  phonebtnminus.style.transition = "0.5s";
  phonebtnminus.style.width = "10px";
  phonebtnminus.style.left = "-5px";
  // phonebtnminus.style.borderRadius = "4px 0px 0px 4px";
  phonebtnminus.style.cursor = "pointer";
phonebtnminus1.style.transform = 'translateZ(-15px) translateY(210px) translateX(-3px) rotateY(-90deg)';

});

phonebtnminus.addEventListener("mouseleave", function() {
  phonebtnminus.style.transition = "0.5s";
  phonebtnminus.style.width = "5px";
  phonebtnminus.style.left = "0px";
  // phonebtnminus.style.borderRadius = "10px 0px 0px 10px";
  phonebtnminus.style.cursor = "normal";
phonebtnminus1.style.transform = 'translateZ(-15px) translateY(210px) translateX(0px) rotateY(-90deg)';

});

phonebtnminus3.addEventListener("mouseenter", function() {
  phonebtnminus3.style.transition = "0.5s";
  phonebtnminus3.style.width = "10px";
  phonebtnminus3.style.left = "-5px";
  // phonebtnminus3.style.borderRadius = "4px 0px 0px 4px";
  phonebtnminus3.style.cursor = "pointer";
phonebtnminus1.style.transform = 'translateZ(-15px) translateY(210px) translateX(-3px) rotateY(-90deg)';
});

phonebtnminus3.addEventListener("mouseleave", function() {
  phonebtnminus3.style.transition = "0.5s";
  phonebtnminus3.style.width = "5px";
  phonebtnminus3.style.left = "0px";
  // phonebtnminus3.style.borderRadius = "10px 0px 0px 10px";
  phonebtnminus3.style.cursor = "normal";
phonebtnminus1.style.transform = 'translateZ(-15px) translateY(210px) translateX(0px) rotateY(-90deg)';

});


phonebtnplus.addEventListener("mousedown", function() {
  let intervalId;

  // Функция для увеличения громкости
  function increaseVolume() {
    const currentTrack = tracks.find(track => track.playing);
    if (currentTrack) {
      let volume = currentTrack.audio.volume;
      volume += 0.05; // Увеличиваем громкость на 5%
      if (volume > 1) {
        volume = 1; // Гарантируем, что громкость не превысит 1
      }
      // console.log(volume);
      currentTrack.audio.volume = volume;
      // Обновляем ширину индикатора
      const indicatorWidth = volume * 100;
      updateVolumeIndicatorWidth(indicatorWidth);
    }
  }

  // Запускаем увеличение громкости каждые 100 миллисекунд
  intervalId = setInterval(increaseVolume, 100);

  // Останавливаем увеличение громкости при отпускании кнопки или выходе курсора за пределы кнопки
  function stopIncreasingVolume() {
    clearInterval(intervalId);
    phonebtnplus.removeEventListener("mouseup", stopIncreasingVolume);
    phonebtnplus.removeEventListener("mouseout", stopIncreasingVolume);
  }

  phonebtnplus.addEventListener("mouseup", stopIncreasingVolume);
  phonebtnplus.addEventListener("mouseout", stopIncreasingVolume);
});




phonebtnplus3.addEventListener("mousedown", function() {
  let intervalId;

  // Функция для увеличения громкости
  function increaseVolume() {
    const currentTrack = tracks.find(track => track.playing);
    if (currentTrack) {
      let volume = currentTrack.audio.volume;
      volume += 0.05; // Увеличиваем громкость на 5%
      if (volume > 1) {
        volume = 1; // Гарантируем, что громкость не превысит 1
      }
      // console.log(volume);
      currentTrack.audio.volume = volume;
      // Обновляем ширину индикатора
      const indicatorWidth = volume * 100;
      updateVolumeIndicatorWidth(indicatorWidth);
    }
  }

  // Запускаем увеличение громкости каждые 100 миллисекунд
  intervalId = setInterval(increaseVolume, 100);

  // Останавливаем увеличение громкости при отпускании кнопки или выходе курсора за пределы кнопки
  function stopIncreasingVolume() {
    clearInterval(intervalId);
    phonebtnplus3.removeEventListener("mouseup", stopIncreasingVolume);
    phonebtnplus3.removeEventListener("mouseout", stopIncreasingVolume);
  }

  phonebtnplus3.addEventListener("mouseup", stopIncreasingVolume);
  phonebtnplus3.addEventListener("mouseout", stopIncreasingVolume);
});




phonebtnminus.addEventListener("mousedown", function() {
  let intervalId;

  // Функция для уменьшения громкости
  function decreaseVolume() {
    const currentTrack = tracks.find(track => track.playing);
    if (currentTrack) {
      let volume = currentTrack.audio.volume;
      volume -= 0.05; // Уменьшаем громкость на 5%
      if (volume < 0) {
        volume = 0; // Гарантируем, что громкость не будет отрицательной
      }
      // console.log(volume);
      currentTrack.audio.volume = volume;
      // Обновляем ширину индикатора

      const indicatorWidth = volume * 100;
      updateVolumeIndicatorWidth(indicatorWidth);
    }
  }

  // Запускаем уменьшение громкости каждые 100 миллисекунд
  intervalId = setInterval(decreaseVolume, 100);

  // Останавливаем уменьшение громкости при отпускании кнопки или выходе курсора за пределы кнопки
  function stopDecreasingVolume() {
    clearInterval(intervalId);
    phonebtnminus.removeEventListener("mouseup", stopDecreasingVolume);
    phonebtnminus.removeEventListener("mouseout", stopDecreasingVolume);
  }

  phonebtnminus.addEventListener("mouseup", stopDecreasingVolume);
  phonebtnminus.addEventListener("mouseout", stopDecreasingVolume);
});

phonebtnminus3.addEventListener("mousedown", function() {
  let intervalId;

  // Функция для уменьшения громкости
  function decreaseVolume() {
    const currentTrack = tracks.find(track => track.playing);
    if (currentTrack) {
      let volume = currentTrack.audio.volume;
      volume -= 0.05; // Уменьшаем громкость на 5%
      if (volume < 0) {
        volume = 0; // Гарантируем, что громкость не будет отрицательной
      }
      // console.log(volume);
      currentTrack.audio.volume = volume;
      // Обновляем ширину индикатора

      const indicatorWidth = volume * 100;
      updateVolumeIndicatorWidth(indicatorWidth);
    }
  }

  // Запускаем уменьшение громкости каждые 100 миллисекунд
  intervalId = setInterval(decreaseVolume, 100);

  // Останавливаем уменьшение громкости при отпускании кнопки или выходе курсора за пределы кнопки
  function stopDecreasingVolume() {
    clearInterval(intervalId);
    phonebtnminus3.removeEventListener("mouseup", stopDecreasingVolume);
    phonebtnminus3.removeEventListener("mouseout", stopDecreasingVolume);
  }

  phonebtnminus3.addEventListener("mouseup", stopDecreasingVolume);
  phonebtnminus3.addEventListener("mouseout", stopDecreasingVolume);
});

phonebtnvol.style.overflow = "hidden";
const phonebtnvol1 = document.createElement("div");
phonebtnvol1.style.height = "100%";
phonebtnvol1.style.width = "100%";
phonebtnvol1.style.transition = "0.5s";
phonebtnvol1.style.background = "rgba(0, 0, 0, 0)";
phonebtnvol.appendChild(phonebtnvol1);


let silent = "1";

phonebtnvol.addEventListener("mouseenter", function() {
  phonebtnvol.style.transition = "0.5s";
  phonebtnvol.style.width = "5px";
  phonebtnvol.style.left = "0px";
  // phonebtnvol.style.borderRadius = "4px 0px 0px 4px";
  phonebtnvol.style.cursor = "pointer";

  if(silent === "1"){
phonebtnvol001.style.transform = 'translateZ(2.5px) translateX(9px) rotateY(0deg)';
// console.log("1")
} else{
phonebtnvol001.style.transform = 'translateZ(2.5px) translateX(0px) rotateY(0deg)';
// console.log("0")
}


});

phonebtnvol.addEventListener("mouseleave", function() {
  phonebtnvol.style.transition = "0.5s";
  phonebtnvol.style.width = "3px";
  phonebtnvol.style.left = "2px";
  // phonebtnvol.style.borderRadius = "10px 0px 0px 10px";
  phonebtnvol.style.cursor = "normal";
  if(silent === "1"){
phonebtnvol001.style.transform = 'translateZ(0px) translateX(9px) rotateY(0deg)';
// console.log("1")
} else{
phonebtnvol001.style.transform = 'translateZ(0px) translateX(0px) rotateY(0deg)';
// console.log("0")
}
});


phonebtnvolb.addEventListener("mouseenter", function() {
  phonebtnvolb.style.transition = "0.5s";
  phonebtnvolb.style.width = "5px";
  phonebtnvolb.style.left = "0px";
  // phonebtnvolb.style.borderRadius = "4px 0px 0px 4px";
  phonebtnvolb.style.cursor = "pointer";

  if(silent === "1"){
phonebtnvol001.style.transform = 'translateZ(2.5px) translateX(9px) rotateY(0deg)';
// console.log("1")
} else{
phonebtnvol001.style.transform = 'translateZ(2.5px) translateX(0px) rotateY(0deg)';
// console.log("0")
}


});

phonebtnvolb.addEventListener("mouseleave", function() {
  phonebtnvolb.style.transition = "0.5s";
  phonebtnvolb.style.width = "3px";
  phonebtnvolb.style.left = "2px";
  // phonebtnvolb.style.borderRadius = "10px 0px 0px 10px";
  phonebtnvolb.style.cursor = "normal";
  if(silent === "1"){
phonebtnvol001.style.transform = 'translateZ(0px) translateX(9px) rotateY(0deg)';
// console.log("1")
} else{
phonebtnvol001.style.transform = 'translateZ(0px) translateX(0px) rotateY(0deg)';
// console.log("0")
}
});

phonebtnvol.addEventListener("click", function() {
    if(silent === "1"){
silent = "0"
phonebtnvol001.style.transform = 'translateZ(2.5px) translateX(0px) rotateY(0deg)';
// console.log("0")


  // phonebtnvol1.style.background = "rgba(255, 255, 255, 0.08)";
usertime.style.transition = "0.3s";
svglogoelementisland.style.opacity = '1';
svglogoelementisland1.style.opacity = '0';
silentT.textContent = "Silent";
silentT.style.color = "red";

silentT.style.opacity = "1";




usertime.style.left = "10px";
  mdnpc.style.left = "40px";
  mdnpc.style.width = "200px";
  setTimeout(function() {
usertime.style.left = "25px";
  mdnpc.style.left = "85px";
  mdnpc.style.width = "100px";
svglogoelementisland.style.opacity = '0';
svglogoelementisland1.style.opacity = '0';
silentT.textContent = "Silent";
silentT.style.color = "red";
silentT.style.opacity = "0";
}, 700);  



} else{
silent = "1"
// console.log(silent)
phonebtnvol001.style.transform = 'translateZ(2.5px) translateX(9px) rotateY(0deg)';

  // phonebtnvol1.style.background = "rgba(0, 0, 0, 0)";
  usertime.style.transition = "0.3s";
usertime.style.left = "10px";
  mdnpc.style.left = "40px";
  mdnpc.style.width = "200px";
silentT.textContent = "Ring";
silentT.style.color = "white";
phonebtnvol001.style.transform = 'translateZ(0px) translateX(9px) rotateY(0deg)';

silentT.style.opacity = "1";
svglogoelementisland1.style.opacity = '1';
svglogoelementisland.style.opacity = '0';
  setTimeout(function() {
usertime.style.left = "25px";
  mdnpc.style.left = "85px";
  mdnpc.style.width = "100px";
silentT.textContent = "Ring";
silentT.style.color = "white";

silentT.style.opacity = "0";
svglogoelementisland1.style.opacity = '0';
svglogoelementisland.style.opacity = '0';

}, 700);  



}



});

phonebtnvolb.addEventListener("click", function() {
    if(silent === "1"){
silent = "0"
phonebtnvol001.style.transform = 'translateZ(2.5px) translateX(0px) rotateY(0deg)';
// console.log("0")


  // phonebtnvol1.style.background = "rgba(255, 255, 255, 0.08)";
usertime.style.transition = "0.3s";
svglogoelementisland.style.opacity = '1';
svglogoelementisland1.style.opacity = '0';
silentT.textContent = "Silent";
silentT.style.color = "red";

silentT.style.opacity = "1";




usertime.style.left = "10px";
  mdnpc.style.left = "40px";
  mdnpc.style.width = "200px";
  setTimeout(function() {
usertime.style.left = "25px";
  mdnpc.style.left = "85px";
  mdnpc.style.width = "100px";
svglogoelementisland.style.opacity = '0';
svglogoelementisland1.style.opacity = '0';
silentT.textContent = "Silent";
silentT.style.color = "red";
silentT.style.opacity = "0";
}, 700);  



} else{
silent = "1"
// console.log(silent)
phonebtnvol001.style.transform = 'translateZ(2.5px) translateX(9px) rotateY(0deg)';

  // phonebtnvol1.style.background = "rgba(0, 0, 0, 0)";
  usertime.style.transition = "0.3s";
usertime.style.left = "10px";
  mdnpc.style.left = "40px";
  mdnpc.style.width = "200px";
silentT.textContent = "Ring";
silentT.style.color = "white";
phonebtnvol001.style.transform = 'translateZ(0px) translateX(9px) rotateY(0deg)';

silentT.style.opacity = "1";
svglogoelementisland1.style.opacity = '1';
svglogoelementisland.style.opacity = '0';
  setTimeout(function() {
usertime.style.left = "25px";
  mdnpc.style.left = "85px";
  mdnpc.style.width = "100px";
silentT.textContent = "Ring";
silentT.style.color = "white";

silentT.style.opacity = "0";
svglogoelementisland1.style.opacity = '0';
svglogoelementisland.style.opacity = '0';

}, 700);  



}



});






frame.style.transition = "0.5s";


phonebtnpower.addEventListener("click", function() {
usertime.style.transition = "0.5s";

if(frame.style.display === "none"){
frame.style.display = "flex";
  setTimeout(function() {
frame.style.opacity = "1";
usertime.style.opacity = "1";
mdnpc.style.opacity = "1";
usertime000.style.opacity = "0";
usertime000.style.fontSize = "15px";

usertime000.style.top = "35px";

}, 100);  


}else{
  frame.style.opacity = "0";
usertime.style.opacity = "0";
mdnpc.style.opacity = "0";
usertime000.style.fontSize = "100px";
usertime000.style.opacity = "1";

usertime000.style.top = "140px";

  setTimeout(function() {
frame.style.display = "none";
}, 500);  
}

});

phonebtnpower3.addEventListener("click", function() {
usertime.style.transition = "0.5s";

if(frame.style.display === "none"){
frame.style.display = "flex";
  setTimeout(function() {
frame.style.opacity = "1";
usertime.style.opacity = "1";
mdnpc.style.opacity = "1";
usertime000.style.opacity = "0";
usertime000.style.fontSize = "15px";

usertime000.style.top = "35px";

}, 100);  


}else{
  frame.style.opacity = "0";
usertime.style.opacity = "0";
mdnpc.style.opacity = "0";
usertime000.style.fontSize = "100px";
usertime000.style.opacity = "1";

usertime000.style.top = "140px";

  setTimeout(function() {
frame.style.display = "none";
}, 500);  
}

});


phonebtnpower.addEventListener("mouseenter", function() {
  phonebtnpower.style.transition = "0.5s";
  phonebtnpower.style.width = "10px";
  // phonebtnpower1.style.width = "10px";
  // phonebtnpower2.style.width = "10px";
  phonebtnpower3.style.width = "10px";
  phonebtnpower.style.right = "-5px";
phonebtnpower1.style.transform = 'translateZ(-15px) translateY(160px) translateX(288px) rotateY(90deg)';

  phonebtnpower.style.cursor = "pointer";
});

phonebtnpower.addEventListener("mouseleave", function() {
  phonebtnpower.style.transition = "0.5s";
  phonebtnpower.style.width = "5px";

  phonebtnpower3.style.width = "5px";
  phonebtnpower.style.right = "0px";
phonebtnpower1.style.transform = 'translateZ(-15px) translateY(160px) translateX(285px) rotateY(90deg)';

  // phonebtnpower.style.borderRadius = "0px 4px 4px 0px";
  phonebtnpower.style.cursor = "normal";
});

phonebtnpower3.addEventListener("mouseenter", function() {
  phonebtnpower.style.transition = "0.5s";
  phonebtnpower.style.width = "10px";
  // phonebtnpower1.style.width = "10px";
  // phonebtnpower2.style.width = "10px";
  phonebtnpower3.style.width = "10px";
  phonebtnpower.style.right = "-5px";
phonebtnpower1.style.transform = 'translateZ(-15px) translateY(160px) translateX(288px) rotateY(90deg)';

  phonebtnpower3.style.cursor = "pointer";
});

phonebtnpower3.addEventListener("mouseleave", function() {
  phonebtnpower.style.transition = "0.5s";
  phonebtnpower.style.width = "5px";

  phonebtnpower3.style.width = "5px";
  phonebtnpower.style.right = "0px";
phonebtnpower1.style.transform = 'translateZ(-15px) translateY(160px) translateX(285px) rotateY(90deg)';

  // phonebtnpower.style.borderRadius = "0px 4px 4px 0px";
  phonebtnpower3.style.cursor = "normal";
});











// phlockscreenaddb.addEventListener("click", function() {
// const phlockscreennew = document.createElement("div");
// phlockscreennew.style.marginLeft = "20px";
// phlockscreennew.style.height = "400px";
// phlockscreennew.style.height = "400px";
// phlockscreennew.style.backgroundSize = "315px";
// phlockscreennew.style.transition = "0.0s";
// phlockscreennew.style.backgroundPosition = "0px -40px";
// phlockscreennew.style.backgroundImage = "url('https://www.idownloadblog.com/wp-content/uploads/2023/06/iOS-17-Light-by-@iSWUpdates.png')";
// // phlockscreennew.style.position = "absolute";
// phlockscreennew.style.zIndex = "99";
// // phlockscreennew.style.top = "3px";
// // phlockscreennew.style.left = "3px";
// phlockscreennew.style.borderRadius = "30px";
//   phlockscreennewcontainer.appendChild(phlockscreennew);

// const phlockscreennew3d = document.createElement("div");
// phlockscreennew3d.style.width = "200px";
// phlockscreennew3d.style.height = "400px";
// phlockscreennew3d.style.backgroundSize = "315px";
// phlockscreennew3d.style.transition = "0.0s";
// phlockscreennew3d.style.backgroundPosition = "0px -40px";
// phlockscreennew3d.style.backgroundImage = "url('https://administrati0n.github.io/data-one/iOS17lw.png')";
// phlockscreennew3d.style.position = "relative";
// phlockscreennew3d.style.zIndex = "99";
// phlockscreennew3d.style.bottom = "0px";
// // phlockscreennew3d.style.left = "3px";
// phlockscreennew3d.style.borderRadius = "30px";
// phlockscreennew.appendChild(phlockscreennew3d);




// phlockscreennew.addEventListener("click", function() {
//     const lockScreens = phlockscreennewcontainer.children;
//   for (let i = 0; i < lockScreens.length; i++) {
//     if (lockScreens[i] !== phlockscreennew) {
//       lockScreens[i].style.display = "none";
//     }
//   }
// phlockscreen.style.display = "none";
// phlockscreennew.style.marginLeft = "0px";
//   phlockscreennew.style.display = "block";
//   phlockscreennew.style.transition = "0.3s";
//   phlockscreennew.style.transition = "0.3s";
//   phlockscreennew.style.width = "274px";
//   phlockscreennew.style.height = "600px";
//   phlockscreennew.style.top = "0px";
//   phlockscreennew.style.left = "0px";
//   phlockscreennew3d.style.width = "274px";
//   phlockscreennew3d.style.height = "600px";
//   phlockscreennew3d.style.top = "0px";
//   phlockscreennew3d.style.left = "0px";
//   phlockscreennew.style.backgroundSize = "315px";
//   phlockscreennew.style.backgroundSize = "315px";
//   phlockscreennew.style.backgroundPosition = "0px -50px";
//   phlockscreennew3d.style.backgroundPosition = "0px -50px";
//   usertimelock1.style.fontSize = "70px";
//   usertimelock1.style.width = "274px";
//   usertimelock1.style.top = "80px";
//   usertimelock.style.fontSize = "70px";
//   usertimelock.style.width = "274px";
//   usertimelock.style.top = "80px";
//   carierLockTitle.style.display = "block";
//   containerView.style.transition = "0.3s";
//   containerView.style.height = "600px";
// containerView.style.width = "274px";
// containerView.style.top = "0px";
// containerView.style.left = "0px";
//   setTimeout(function() {
//     const screenRect = phlockscreennew.getBoundingClientRect();
//     phlockscreennew.addEventListener("mousemove", function(e) {
//       const mouseX = e.clientX - screenRect.left;
//       const mouseY = e.clientY - screenRect.top;

//       const moveX = (mouseX - screenRect.width / 2) / 50 * 2.6;
//       const moveY = (mouseY - screenRect.height / 2) / 50 * 2;

//       const bgPosX = `calc(20% + ${moveX}px)`;
//       const bgPosY = `calc(30% + ${moveY}px)`;
//   phlockscreennew.style.transition = "0s";

//   phlockscreennew3d.style.transition = "0s";

//       phlockscreennew.style.backgroundPosition = `${bgPosX} ${bgPosY}`;
//       phlockscreennew3d.style.backgroundPosition = `${bgPosX} ${bgPosY}`;
//     });
//   }, 1000);
// });







// phlockscreennew.addEventListener("mousedown", function() {
//   timeoutId = setTimeout(function() {
//     const lockScreens = phlockscreennewcontainer.children;

//       for (let i = 0; i < lockScreens.length; i++) {
//     if (lockScreens[i] !== phlockscreennew) {
//       lockScreens[i].style.display = "block";
//     }
//   }
// phlockscreen.style.display = "flex";

//     phlockscreen.style.transition = "0.3s";
//     phlockscreennew.style.transition = "0.3s";
//     phlockscreennew3d.style.transition = "0.3s";
//     phlockscreen3d.style.transition = "0.3s";
//     containerView.style.transition = "0.3s";
//     phlockscreennew.style.marginLeft = "20px";
//     phlockscreen.style.top = "0px";
//     phlockscreen.style.left = "0px";
//     phlockscreen.style.width = "200px";
//     phlockscreen.style.height = "400px";
//         phlockscreennew.style.width = "200px";
//     phlockscreennew.style.height = "400px";
//     carierLockTitle.style.display = "none";
//     phlockscreennew3d.style.width = "200px";
//     phlockscreen3d.style.width = "200px";
//     phlockscreennew3d.style.height = "400px";
//     phlockscreen3d.style.height = "400px";
//     phlockscreen.style.backgroundSize = "220px";
//     phlockscreen3d.style.backgroundSize = "220px";
//         phlockscreennew.style.backgroundSize = "220px";
//     phlockscreennew3d.style.backgroundSize = "220px";
//     usertimelock1.style.transition = "0.3s";
//     usertimelock1.style.fontSize = "50px";
//     usertimelock1.style.width = "200px";
//     usertimelock1.style.top = "50px";
//     usertimelock.style.transition = "0.3s";
//     usertimelock.style.fontSize = "50px";
//     usertimelock.style.width = "200px";
//     usertimelock.style.top = "50px";
//       phlockscreen.style.backgroundPosition = "0px -30px";
// containerView.style.overflowY = "hidden";
// containerView.style.height = "400px";
// containerView.style.width = "240px";
// containerView.style.top = "55px";
// containerView.style.left = "32px";

//       phlockscreen3d.style.backgroundPosition = "0px -30px";
    
//     phlockscreennew.addEventListener('mousemove', (e) => {
//       const bgPosX = "0px -30px";
//       const bgPosY = "0px -30px";
      
//       phlockscreennew.style.backgroundPosition = "0px -30px";
//       phlockscreennew3d.style.backgroundPosition = "0px -30px";
//     });
    
//     phlockscreen.style.pointerEvents = "none"; // Отключаем события клика и наведения
//     setTimeout(function() {
//       phlockscreen.style.pointerEvents = "auto"; // Включаем обратно события клика и наведения после 1 секунды
//     }, 500);
//   }, 2000);
// });
// });