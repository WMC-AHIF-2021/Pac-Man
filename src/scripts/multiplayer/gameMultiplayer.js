var FieldType2;
(function (FieldType2) {
    FieldType2[FieldType2["wall2"] = 0] = "wall2";
    FieldType2[FieldType2["ground2"] = 1] = "ground2";
    FieldType2[FieldType2["groundWithPoint2"] = 2] = "groundWithPoint2";
    FieldType2[FieldType2["ghostField2"] = 3] = "ghostField2";
})(FieldType2 || (FieldType2 = {}));
let gameField = document.getElementById("gameField");
let context = gameField.getContext("2d");
let pacMan2;
let ghost2;
let myInterval;
let isWonPopUpOpen = false;
let wonPopUp = document.getElementById("popUp-Won");
function init2() {
    let renderer2 = new Renderer2();
    let field2 = renderer2.field2;
    pacMan2 = new PacMan2(242, 422, 10, 10);
    ghost2 = new Ghost2(242, 242, 10, 10);
    //let isPacMan2: boolean = false;
    //let isGhost2: boolean = false;
    document.addEventListener("keydown", function (e) {
        if (e.key == "a") {
            pacMan2.currentDirection = Direction2.left;
        }
        if (e.key == "s") {
            pacMan2.currentDirection = Direction2.down;
        }
        if (e.key == "d") {
            pacMan2.currentDirection = Direction2.right;
        }
        if (e.key == "w") {
            pacMan2.currentDirection = Direction2.up;
        }
        if (e.key == "k") {
            ghost2.currentDirection = Direction2.down;
        }
        if (e.key == "l") {
            ghost2.currentDirection = Direction2.right;
        }
        if (e.key == "j") {
            ghost2.currentDirection = Direction2.left;
        }
        if (e.key == "i") {
            ghost2.currentDirection = Direction2.up;
        }
    });
    myInterval = setInterval(function () {
        renderer2.drawField();
        //if (isPacMan2) {
        pacMan2.move2(renderer2.width, renderer2.height, field2);
        pacMan2.win();
        ghost2.win(pacMan2.x, pacMan2.y);
        //}
        //if (isGhost2) {
        ghost2.move2(renderer2.width, renderer2.height, field2);
        ghost2.win(pacMan2.x, pacMan2.y);
        //ghost2.overrideField(field2, Math.round(pacMan2.x / renderer2.width), Math.round(pacMan2.y / renderer2.height));
        //}
        pacMan2.draw2();
        ghost2.draw2();
    }, 400);
}
class Renderer2 {
    constructor() {
        this.field2 = [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 0],
            [0, 2, 0, 0, 2, 0, 0, 2, 0, 2, 0, 0, 2, 0, 0, 2, 0],
            [0, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 0],
            [0, 2, 2, 2, 2, 0, 2, 0, 0, 0, 2, 0, 2, 2, 2, 2, 0],
            [0, 2, 0, 0, 2, 0, 2, 2, 0, 2, 2, 0, 2, 0, 0, 2, 0],
            [0, 2, 2, 2, 2, 0, 0, 2, 0, 2, 0, 0, 2, 2, 2, 2, 0],
            [0, 0, 0, 0, 2, 0, 2, 2, 2, 2, 2, 0, 2, 0, 0, 0, 0],
            [0, 0, 0, 0, 2, 0, 2, 3, 3, 3, 2, 0, 2, 0, 0, 0, 0],
            [2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2],
            [0, 0, 0, 0, 2, 0, 2, 2, 2, 2, 2, 0, 2, 0, 0, 0, 0],
            [0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0],
            [0, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 0],
            [0, 2, 0, 0, 2, 0, 0, 2, 0, 2, 0, 0, 2, 0, 0, 2, 0],
            [0, 2, 2, 0, 2, 2, 2, 2, 1, 2, 2, 2, 2, 0, 2, 2, 0],
            [0, 0, 2, 0, 2, 0, 2, 0, 0, 0, 2, 0, 2, 0, 2, 0, 0],
            [0, 2, 2, 2, 2, 0, 2, 2, 0, 2, 2, 0, 2, 2, 2, 2, 0],
            [0, 2, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 2, 0],
            [0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ];
    }
    drawField() {
        //context.clearRect(0, 0, gameField.width, gameField.height);
        let xLength = this.field2[0].length;
        let yLength = this.field2.length;
        this.width = gameField.width / xLength;
        this.height = gameField.height / yLength;
        for (let x = 0; x < this.field2[0].length; x++) {
            for (let y = 0; y < this.field2.length; y++) {
                switch (this.field2[y][x]) {
                    case FieldType2.wall2:
                        this.drawFieldType("#0431B4", x, y, this.width, this.height);
                        break;
                    case FieldType2.ground2:
                        this.drawFieldType("black", x, y, this.width, this.height);
                        break;
                    case FieldType2.groundWithPoint2:
                        this.drawFieldType("black", x, y, this.width, this.height);
                        this.drawSquare(x, y, this.width, this.height);
                        break;
                    case FieldType2.ghostField2:
                        this.drawFieldType("white", x, y, this.width, this.height);
                        break;
                }
            }
        }
    }
    drawFieldType(color, x, y, width, height) {
        context.fillStyle = color;
        context.fillRect(x * (width - 1), y * height, width, height);
    }
    drawSquare(x, y, width, height) {
        const squareWidth = 5;
        let squareX = (x * (width - 1) + (width / 2)) - (squareWidth / 2);
        const squareHeight = 5;
        let squareY = (y * height + (height / 2)) - (squareHeight / 2);
        context.fillStyle = "white";
        context.fillRect(squareX, squareY, squareWidth, squareHeight);
    }
}
var Direction2;
(function (Direction2) {
    Direction2[Direction2["up"] = 0] = "up";
    Direction2[Direction2["left"] = 1] = "left";
    Direction2[Direction2["right"] = 2] = "right";
    Direction2[Direction2["down"] = 3] = "down";
    Direction2[Direction2["none"] = 4] = "none";
})(Direction2 || (Direction2 = {}));
class Ghost2 {
    constructor(x, y, width, height) {
        this.currentDirection = Direction2.none;
        this.ghostImg = document.getElementById("imgGhost");
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    draw2() {
        context.drawImage(this.ghostImg, this.x, this.y, 25, 25);
    }
    // noinspection TypeScriptUnresolvedFunction
    move2(width, height, field2) {
        let fieldPositionX = Math.round(this.x / width);
        let fieldPositionY = Math.round(this.y / height);
        if (fieldPositionX == 16 && fieldPositionY == 9 && this.currentDirection == Direction2.right) {
            this.x = (0 - width) + 3;
        }
        if (fieldPositionX == 0 && fieldPositionY == 9 && this.currentDirection == Direction2.left) {
            this.x = (((16 * width) - this.width) + width) - 3;
        }
        if (!this.isOverlapping2(width, height, field2)) {
            switch (this.currentDirection) {
                case Direction2.up:
                    this.y -= height;
                    break;
                case Direction2.left:
                    this.x -= width - 1;
                    break;
                case Direction2.right:
                    this.x += width - 1;
                    break;
                case Direction2.down:
                    this.y += height;
                    break;
                default:
                    break;
            }
        }
        this.x = Math.round(this.x);
    }
    isOverlapping2(width, height, field2) {
        let fieldPositionX = Math.round(this.x / width);
        let fieldPositionY = Math.round(this.y / height);
        switch (this.currentDirection) {
            case Direction2.up:
                if (field2[fieldPositionY - 1][fieldPositionX] == FieldType2.groundWithPoint2 || field2[fieldPositionY - 1][fieldPositionX] == FieldType2.ground2)
                    return false;
                break;
            case Direction2.left:
                if (field2[fieldPositionY][fieldPositionX - 1] == FieldType2.groundWithPoint2 || field2[fieldPositionY][fieldPositionX - 1] == FieldType2.ground2)
                    return false;
                break;
            case Direction2.right:
                if (field2[fieldPositionY][fieldPositionX + 1] == FieldType2.groundWithPoint2 || field2[fieldPositionY][fieldPositionX + 1] == FieldType2.ground2)
                    return false;
                break;
            case Direction2.down:
                if (field2[fieldPositionY + 1][fieldPositionX] == FieldType2.groundWithPoint2 || field2[fieldPositionY + 1][fieldPositionX] == FieldType2.ground2)
                    return false;
                break;
            default:
                break;
        }
        return true;
    }
    overrideField(field2, fieldPositionX, fieldPositionY) {
        if (field2[fieldPositionY][fieldPositionX] != FieldType2.ground2) {
            field2[fieldPositionY][fieldPositionX] = 1;
        }
    }
    win(x, y) {
        if (this.x == x && this.y == y) {
            ghostWinner();
            clearInterval(myInterval);
        }
    }
}
class PacMan2 {
    constructor(x, y, width, height) {
        this.currentDirection = Direction2.none;
        this.score = 0;
        this._pacManCloseImg = document.getElementById("imgPacManClose");
        this._pacManRightImg = document.getElementById("imgPacManRight");
        this._pacManLeftImg = document.getElementById("imgPacManLeft");
        this._pacManUpImg = document.getElementById("imgPacManUp");
        this._pacManDownImg = document.getElementById("imgPacManDown");
        this._isOpen = false;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    draw2() {
        if (this.currentDirection == Direction2.none) {
            context.drawImage(this._pacManCloseImg, this.x, this.y, 25, 25);
        }
        else if (this._isOpen) {
            context.drawImage(this._pacManCloseImg, this.x, this.y, 25, 25);
            this._isOpen = false;
        }
        else if (!this._isOpen && this.currentDirection == Direction2.right) {
            context.drawImage(this._pacManRightImg, this.x, this.y, 25, 25);
            this._isOpen = true;
        }
        else if (!this._isOpen && this.currentDirection == Direction2.left) {
            context.drawImage(this._pacManLeftImg, this.x, this.y, 25, 25);
            this._isOpen = true;
        }
        else if (!this._isOpen && this.currentDirection == Direction2.up) {
            context.drawImage(this._pacManUpImg, this.x, this.y, 25, 25);
            this._isOpen = true;
        }
        else if (!this._isOpen && this.currentDirection == Direction2.down) {
            context.drawImage(this._pacManDownImg, this.x, this.y, 25, 25);
            this._isOpen = true;
        }
    }
    move2(width, height, field2) {
        let fieldPositionX = Math.round(this.x / width);
        let fieldPositionY = Math.round(this.y / height);
        if (fieldPositionX == 16 && fieldPositionY == 9 && this.currentDirection == Direction2.right) {
            this.x = (0 - width) + 3;
        }
        if (fieldPositionX == 0 && fieldPositionY == 9 && this.currentDirection == Direction2.left) {
            this.x = (((16 * width) - this.width) + width) - 3;
        }
        if (!this.isOverlapping2(width, height, field2)) {
            switch (this.currentDirection) {
                case Direction2.up:
                    this.y -= height;
                    break;
                case Direction2.left:
                    this.x -= width - 1;
                    break;
                case Direction2.right:
                    this.x += width - 1;
                    break;
                case Direction2.down:
                    this.y += height;
                    break;
                default:
                    break;
            }
            let newfieldPositionX = Math.round(this.x / width);
            let newfieldPositionY = Math.round(this.y / height);
            this.overrideField(field2, newfieldPositionX, newfieldPositionY);
            this.x = Math.round(this.x);
        }
    }
    isOverlapping2(width, height, field2) {
        let fieldPositionX = Math.round(this.x / width);
        let fieldPositionY = Math.round(this.y / height);
        switch (this.currentDirection) {
            case Direction2.up:
                if (field2[fieldPositionY - 1][fieldPositionX] == FieldType2.groundWithPoint2 || field2[fieldPositionY - 1][fieldPositionX] == FieldType2.ground2)
                    return false;
                break;
            case Direction2.left:
                if (field2[fieldPositionY][fieldPositionX - 1] == FieldType2.groundWithPoint2 || field2[fieldPositionY][fieldPositionX - 1] == FieldType2.ground2)
                    return false;
                break;
            case Direction2.right:
                if (field2[fieldPositionY][fieldPositionX + 1] == FieldType2.groundWithPoint2 || field2[fieldPositionY][fieldPositionX + 1] == FieldType2.ground2)
                    return false;
                break;
            case Direction2.down:
                if (field2[fieldPositionY + 1][fieldPositionX] == FieldType2.groundWithPoint2 || field2[fieldPositionY + 1][fieldPositionX] == FieldType2.ground2)
                    return false;
                break;
            default:
                break;
        }
        this.currentDirection = Direction2.none;
        this.x = Math.round(this.x);
        return true;
    }
    overrideField(field2, fieldPositionX, fieldPositionY) {
        if (field2[fieldPositionY][fieldPositionX] != FieldType2.ground2) {
            field2[fieldPositionY][fieldPositionX] = 1;
            this.score++;
        }
    }
    win() {
        if (this.score == 164) {
            pacManWinner();
            clearInterval(myInterval);
        }
    }
}
window.addEventListener("load", function () {
    init2();
});
function pacManWinner() {
    ShowWonMessage("Congratulations, Pacman have won!");
}
function ghostWinner() {
    ShowWonMessage("Sorry, Ghost have won!");
}
function ShowWonMessage(wonMessage) {
    if (!isWonPopUpOpen) {
        let html = "<h2>" + wonMessage + "</h2> <button onclick='popUpButtonClickedTryAgain()'>Try Again</button> <button onclick='popUpButtonClickedEndGame()'>End Game</button>";
        wonPopUp.style.display = "block";
        wonPopUp.innerHTML += html;
        setTimeout(() => {
            wonPopUp.style.transform = "translateX(-50%)";
        }, 5);
        isWonPopUpOpen = true;
        return false;
    }
}
function popUpButtonClickedTryAgain() {
    setTimeout(() => {
        wonPopUp.innerHTML = "";
        wonPopUp.style.display = "none";
    }, 500);
    init2();
    wonPopUp.style.transform = "translateX(-50%) translateY(-100%)";
    isWonPopUpOpen = false;
}
function popUpButtonClickedEndGame() {
    setTimeout(() => {
        wonPopUp.innerHTML = "";
        wonPopUp.style.display = "none";
    }, 500);
    wonPopUp.style.transform = "translateX(-50%) translateY(-100%)";
    isWonPopUpOpen = false;
}
//# sourceMappingURL=gameMultiplayer.js.map