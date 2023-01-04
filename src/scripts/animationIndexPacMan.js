setInterval(function() {
    pacManAnimation();
}, 150)

let isIndexPacManOpen = false;
function pacManAnimation() {
    let pacManElement = document.getElementById("animationIndex");

    pacManElement.src = isIndexPacManOpen ? "img/Temp.png" : "img/PacMan.png";
    isIndexPacManOpen = !isIndexPacManOpen;
}
