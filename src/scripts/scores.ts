let alreadySent:boolean = false;
function sendScoreToServer(score: number) {
    if (alreadySent) {
        return;
    }
    let username = (<HTMLInputElement>document.getElementById("usernameInput")).value;
    alreadySent = true;

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
}

function getScores() {
    fetch("http://45.81.235.93:5000/scores")
        .then(response => response.json())
        .then(data => {
            data.sort((a, b) => b.score - a.score);
            let html = "";
            let i = 1;
            for (let currentData of data) {
                if (i < 6) {
                    html += "<tr><td>"+ i + "</td><td>" + currentData.username + "</td><td>" + ' ' + currentData.score + "</tr></td>"
                } else {
                    break;
                }
                i++;
            }
            document.getElementById("scoresList").innerHTML += html;
        })
}

window.addEventListener("load", function() {
    getScores();
});