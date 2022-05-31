let alreadySent = false;
function sendScoreToServer(score) {
    if (alreadySent)
        return;
    let username = document.getElementById("usernameInput").value;
    const data = {
        username: username,
        score: score
    };
    fetch("http://45.81.235.93:5000/scores", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(response => {
        console.log(response);
    });
    alreadySent = true;
}
function deleteScore(data) {
    fetch("http://45.81.235.93:5000/scores" + "/" + data.id, {
        method: "DELETE"
    }).then(response => {
        console.log(response);
    });
}
function getScores() {
    fetch("http://45.81.235.93:5000/scores")
        .then(response => response.json())
        .then(data => {
        data.sort((a, b) => b.score - a.score);
        let html = "";
        let i = 1;
        for (let currentData of data) {
            if (i < 11) {
                currentData.username = currentData.username.replace(/</g, "&lt;").replace(/>/g, "&gt;");
                html += "<tr><td>" + i + "</td><td>" + currentData.username + "</td><td>" + ' ' + currentData.score + "</tr></td>";
            }
            else {
                deleteScore(currentData);
            }
            i++;
        }
        document.getElementById("scoresList").innerHTML += html;
    });
}
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
window.addEventListener("load", function () {
    getScores();
});
//# sourceMappingURL=scores_checkUsername.js.map