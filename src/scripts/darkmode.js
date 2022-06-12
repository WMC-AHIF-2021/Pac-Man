
if(localStorage.isDarkmode == null) {
    switchToDarkmode();
}
if(localStorage.isDarkmode === "true") {
    switchToDarkmode();
}
else {
    switchToLightmode();
}

function switchToDarkmode() {
    let element = document.getElementById("styles");
    element.href = "css/stylesheet-dark.css";
    let modeImg = document.getElementById("mode");
    modeImg.src = "imgs/Dark-LightMode/darkmode.png";
    try {
        let imgHeaderHistory = document.getElementById("headerImgHistory");
        imgHeaderHistory.src = "imgs/Header/Dark_PacmanHeaderHistory.jpg";
    } catch(e) {}
    try {
        let imgHeaderGame = document.getElementById("headerImgGame");
        imgHeaderGame.src = "imgs/Header/Dark_PacmanHeaderGame.jpg";
    } catch(e) {}
    try {
        let imgHeaderRules = document.getElementById("headerImgRules");
        imgHeaderRules.src = "imgs/Header/Dark_PacmanHeaderRules.jpg";
    } catch(e) {}
    try {
        let imgHeaderIndex = document.getElementById("headerImgIndex");
        imgHeaderIndex.src = "imgs/Header/HeaderTempDark.png";
    } catch(e) {}
    try {
        let imgHeaderCoa = document.getElementById("headerImgCoa");
        imgHeaderCoa.src = "imgs/Header/Dark_PacmanHeaderCOA.jpg";
    } catch(e) {}

    let leondingLogo = document.getElementById("htlLeonding");
    leondingLogo.src = "imgs/HtlLogo/HtlLogo-PacmanLight.png";

    localStorage.isDarkmode = "true";
    modeImg.onclick = switchToLightmode;
}
function switchToLightmode() {
    let element = document.getElementById("styles");
    element.href = "css/stylesheet.css";
    let modeImg = document.getElementById("mode");
    modeImg.src = "imgs/Dark-LightMode/lightmode.png";
    try {
        let imgHeaderHistory = document.getElementById("headerImgHistory");
        imgHeaderHistory.src = "imgs/Header/PacmanHeaderHistory.jpg";
    } catch(e) {}
    try {
        let imgHeaderGame = document.getElementById("headerImgGame");
        imgHeaderGame.src = "imgs/Header/PacmanHeaderGame.jpg";
    } catch(e) {}
    try {
        let imgHeaderRules = document.getElementById("headerImgRules");
        imgHeaderRules.src = "imgs/Header/PacmanHeaderRules.jpg";
    } catch(e) {}
    try {
        let imgHeaderIndex = document.getElementById("headerImgIndex");
        imgHeaderIndex.src = "imgs/Header/HeaderTemp.png";
    } catch(e) {}
    try {
        let imgHeaderCoa = document.getElementById("headerImgCoa");
        imgHeaderCoa.src = "imgs/Header/PacmanHeaderCOA.jpg";
    } catch(e) {}

    let leondingLogo = document.getElementById("htlLeonding");
    leondingLogo.src = "imgs/HtlLogo/HtlLogo-PacmanDark.png";

    let loadingScreen = document.getElementById("loadingScreen");
    loadingScreen.style.backgroundColor = "#ffffff";

    localStorage.isDarkmode = "false";
    modeImg.onclick = switchToDarkmode;
}