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

    localStorage.isDarkmode = "true";
    modeImg.onclick = switchToLightmode;
}
function switchToLightmode() {
    let element = document.getElementById("styles");
    element.href = "css/stylesheet.css";
    let modeImg = document.getElementById("mode");
    modeImg.src = "imgs/Dark-LightMode/lightmode.png";

    let loadingScreen = document.getElementById("loadingScreen");
    loadingScreen.style.backgroundColor = "#ffffff";

    localStorage.isDarkmode = "false";
    modeImg.onclick = switchToDarkmode;
}