let page = window.location.pathname.split("/").pop().split(".")[0];
let theme = document.getElementById("styles");
let button = document.getElementById("theme");

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
            let header = document.getElementById("headerImgIndex");
            header.src = headerPath + "index/headerIndex-light.png"
    }
    // TODO otherHTMLFiles

    localStorage.darkMode = "false";
    button.src = "../img/themeButtons/button-dark.png"
    button.onclick = enableDarkMode;
}

function enableDarkMode() {
    theme.href = "css/stylesheet-dark.css";

    let headerPath = "../img/headers/";
    switch (page) {
        case "index":
            let header = document.getElementById("headerImgIndex");
            header.src = headerPath + "index/headerIndex-dark.png"
    }
    // TODO otherHTMLFiles

    localStorage.darkMode = "true";
    button.src = "../img/themeButtons/button-light.png"
    button.onclick = enableLightMode;
}