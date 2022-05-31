let isPopUpOpen = false;
let popUp = document.getElementById("popUp-Username");
let bgDarkener = document.getElementById("bgDarkener");
function checkUsername() {
    let username = document.getElementById("usernameInput").value;
    if (username == "" && !isPopUpOpen || username[0] == " " && !isPopUpOpen) {
        let html = "<h2>Please enter username!</h2> <button onclick='popUpButtonClicked()'>OK</button>";
        popUp.style.display = "block";
        popUp.innerHTML += html;
        bgDarkener.style.display = "block";
        setTimeout(() => {
            popUp.style.transform = "translateX(-50%)";
        }, 5);
        isPopUpOpen = true;
        return false;
    }
    if (username != "" && !isPopUpOpen || username.length > 8) {
        let html = "<h2>Username too long!</h2> <button onclick='popUpButtonClicked()'>OK</button>";
        popUp.innerHTML += html;
    }
    return true;
}
function popUpButtonClicked() {
    setTimeout(() => {
        popUp.innerHTML = "";
        popUp.style.display = "none";
        bgDarkener.style.display = "none";
    }, 500);
    popUp.style.transform = "translateX(-50%) translateY(-100%)";
    isPopUpOpen = false;
}
//# sourceMappingURL=checkUsername.js.map