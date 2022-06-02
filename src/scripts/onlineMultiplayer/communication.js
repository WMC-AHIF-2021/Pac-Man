let socket = io("fos.the-changer.net");

socket.on("youAreGhost", function() {
    console.log("test");
    isPacMan = false;
})
socket.on("youArePacman", function() {
    console.log("test2");
    isPacMan = true;
})

function sendPacManPos(x, y) {
    socket.emit("entity:pacman:move", [x, y]);
}
function sendGhostPos(x, y) {
    socket.emit("entity:ghost:move", [x, y]);
}

socket.on("entity:pacman:move:sending", function(data) {
    setPacManPos(data[0], data[1]);
})
socket.on("entity:ghost:move:sending", function(data) {
    setGhostPos(data[0], data[1]);
})