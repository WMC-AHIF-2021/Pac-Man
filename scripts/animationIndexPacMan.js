setInterval(function() {
    pacManAnimation();
}, 150)

let isIndexPacManOpen = false;
function pacManAnimation() {
    let pacManElement = document.getElementById("animationIndex");

    pacManElement.src = isIndexPacManOpen ? "imgs/Temp.png" : "imgs/PacMan.png";
    isIndexPacManOpen = !isIndexPacManOpen;
}
