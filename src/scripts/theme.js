let page = window.location.pathname.split("/").pop().split(".")[0];

let theme = document.getElementById("styles");
let button = document.getElementById("theme");
let htlLogo = document.getElementById("htlLogo");
let loadingScreen = document.getElementById("loadingScreen");

if (localStorage.darkMode == null) {
    enableDarkMode();
}
if (localStorage.darkMode === "true") {
    enableDarkMode();
} else {
    enableLightMode();
}

function enableLightMode() {
    theme.href = "css/stylesheet.css";

    console.log(page);

    let headerPath = "../img/headers/";
    switch (page) {
        case "index":
            let headerIndex = document.getElementById("headerImgIndex");
            headerIndex.src = headerPath + "index/headerIndex-light.png"
            break;
        case "rules":
            let headerRules = document.getElementById("headerImgRules");
            headerRules.src = headerPath + "rules/headerRules-light.jpg";
            break;
        case "history":
            let headerHistory = document.getElementById("headerImgHistory");
            headerHistory.src = headerPath + "history/headerHistory-light.jpg";
            break;
        case "changeOfAppearance":
            let headerCOA = document.getElementById("headerImgCoa");
            headerCOA.src = headerPath + "coa/headerCOA-light.jpg";
            break;
        case "game-singlePlayer":
            let headerSinglePlayer = document.getElementById("headerImgGame");
            headerSinglePlayer.src = headerPath + "game/headerGame-light.jpg";
            break;
    }

    localStorage.darkMode = "false";

    htlLogo.src = "../img/htlLogo/htlPacman-dark.png";

    loadingScreen.style.backgroundColor = "white";

    button.src = "../img/themeButtons/button-dark.png";
    button.onclick = enableDarkMode;
}

function enableDarkMode() {
    theme.href = "css/stylesheet-dark.css";

    let headerPath = "../img/headers/";
    switch (page) {
        case "index":
            let header = document.getElementById("headerImgIndex");
            header.src = headerPath + "index/headerIndex-dark.png";
            break;
        case "rules":
            let headerRules = document.getElementById("headerImgRules");
            headerRules.src = headerPath + "rules/headerRules-dark.jpg";
            break;
        case "history":
            let headerHistory = document.getElementById("headerImgHistory");
            headerHistory.src = headerPath + "history/headerHistory-dark.jpg";
            break;
        case "changeOfAppearance":
            let headerCOA = document.getElementById("headerImgCoa");
            headerCOA.src = headerPath + "/coa/headerCOA-dark.jpg";
            break;
        case "game-singlePlayer":
            let headerSinglePlayer = document.getElementById("headerImgGame");
            headerSinglePlayer.src = headerPath + "game/headerGame-dark.jpg";
            break;
    }

    localStorage.darkMode = "true";

    htlLogo.src = "../img/htlLogo/htlPacman-light.png";

    loadingScreen.style.backgroundColor = "black";

    button.src = "../img/themeButtons/button-light.png";
    button.onclick = enableLightMode;
}