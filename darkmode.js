if(localStorage.isDarkmode == "true") {
    switchToDarkmode();
}

function switchToDarkmode() {
    let element = document.getElementById("styles");
    element.href = "css/stylesheet-dark.css";
    let modeImg = document.getElementById("mode");
    modeImg.src = "Images/darkmode.png";

    localStorage.isDarkmode = "true";
    modeImg.onclick = swtichToLightmode;
}
function swtichToLightmode() {
    let element = document.getElementById("styles");
    element.href = "css/stylesheet.css";
    let modeImg = document.getElementById("mode");
    modeImg.src = "Images/lightmode.png";

    localStorage.isDarkmode = "false";
    modeImg.onclick = switchToDarkmode;
}