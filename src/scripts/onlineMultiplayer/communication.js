let socket = io("fos.the-changer.net");

socket.on("youAreGhost", function() {
    console.log("test");
    isGhost = true;
})
socket.on("youArePacman", function() {
    console.log("test2");
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

socket.on("game:end", function(data) {
    let winner = data["winner"];
    alert("winner is " + winner);
})

