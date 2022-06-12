let socket = io("https://pacman.the-changer.net", {
    secure: true
});

socket.on("youAreGhost", function() {
    openPopUp("<h2>You're the Ghost!</h2><button onClick='popUpButtonClicked()'>OK</button>");
    isGhost = true;
})
socket.on("youArePacman", function() {
    openPopUp("<h2>You're Pac-Man!</h2><button onClick='popUpButtonClicked()'>OK</button>");
    isPacMan = true;
})

function sendPacManPos(x, y, currentDirection) {
    socket.emit("entity:pacman:move", [x, y, currentDirection]);
}
function sendGhostPos(x, y) {
    socket.emit("entity:ghost:move", [x, y]);
}

socket.on("entity:pacman:move:sending", function(data) {
    setPacManPos(data[0], data[1], data[2]);
})
socket.on("entity:ghost:move:sending", function(data) {
    setGhostPos(data[0], data[1]);
})

function ghostWinner() {
    socket.emit("entity:pacman:dead");
}

function pacManWinner() {
    socket.emit("entity:ghost:dead");
}

let popUp = document.getElementById("popUp");
socket.on("game:end", function(data) {
    let winner = data["winner"];

    let html = "";
    if (winner === "Ghost") {
        html = "<h2>Winner is Ghost!</h2> <button onclick='popUpButtonClicked(true)'>OK</button>";
    } else if (winner === "Pacman") {
        html = "<h2>Winner is Pac-Man!</h2> <button onclick='popUpButtonClicked(true)'>OK</button>";
    }
    openPopUp(html);
})

function popUpButtonClicked(redirect = false) {
    setTimeout(() => {
        popUp.innerHTML = "";
        popUp.style.display = "none";
        bgDarkener.style.display = "none";
    }, 500)

    popUp.style.transform = "translateX(-50%) translateY(-100%)"
    if (redirect)
        window.location.href = "pacman-game.html";
}

function openPopUp(text) {
    bgDarkener.style.display = "block";

    popUp.style.display = "block";
    popUp.innerHTML = text;

    setTimeout(() => {
        popUp.style.transform = "translateX(-50%)"
    }, 5)
}