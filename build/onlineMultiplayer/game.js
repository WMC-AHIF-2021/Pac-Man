var fieldType;
(function (fieldType) {
    fieldType[fieldType["wall"] = 0] = "wall";
    fieldType[fieldType["ground"] = 1] = "ground";
    fieldType[fieldType["groundPoint"] = 2] = "groundPoint";
    fieldType[fieldType["ghostField"] = 3] = "ghostField";
})(fieldType || (fieldType = {}));
let playground = document.getElementById("playground");
let ctx = playground.getContext("2d");
function init() {
    let renderer = new Renderer();
    let pacMan = new PacMan(242, 422, 10, 10);
    document.addEventListener("keydown", function (e) {
        if (e.key == "ArrowLeft") {
            pacMan.currentDirection = Direction.left;
        }
        if (e.key == "ArrowRight") {
            pacMan.currentDirection = Direction.right;
        }
        if (e.key == "ArrowUp") {
            pacMan.currentDirection = Direction.up;
        }
        if (e.key == "ArrowDown") {
            pacMan.currentDirection = Direction.down;
        }
    });
    setInterval(function () {
        renderer.drawField();
        pacMan.move(renderer.width, renderer.height);
        pacMan.draw();
    }, 400);
}
class Renderer {
    constructor() {
        this.field = [
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
            [0, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 0],
            [0, 0, 2, 0, 2, 0, 2, 0, 0, 0, 2, 0, 2, 0, 2, 0, 0],
            [0, 2, 2, 2, 2, 0, 2, 2, 0, 2, 2, 0, 2, 2, 2, 2, 0],
            [0, 2, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 2, 0],
            [0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ];
    }
    drawField() {
        ctx.clearRect(0, 0, playground.width, playground.height);
        let xLength = this.field[0].length;
        let yLength = this.field.length;
        this.width = playground.width / xLength;
        this.height = playground.height / yLength;
        for (let x = 0; x < this.field[0].length; x++) {
            for (let y = 0; y < this.field.length; y++) {
                switch (this.field[y][x]) {
                    case fieldType.wall:
                        this.drawFieldType("#0431B4", x, y, this.width, this.height);
                        break;
                    case fieldType.ground:
                        this.drawFieldType("black", x, y, this.width, this.height);
                        break;
                    case fieldType.groundPoint:
                        this.drawFieldType("black", x, y, this.width, this.height);
                        this.drawSquare(x, y, this.width, this.height);
                        break;
                    case fieldType.ghostField:
                        this.drawFieldType("white", x, y, this.width, this.height);
                        break;
                }
            }
        }
    }
    drawFieldType(color, x, y, width, height) {
        ctx.fillStyle = color;
        ctx.fillRect(x * (width - 1), y * height, width, height);
    }
    drawSquare(x, y, width, height) {
        const squareWidth = 5;
        let squareX = (x * (width - 1) + (width / 2)) - (squareWidth / 2);
        const squareHeight = 5;
        let squareY = (y * height + (height / 2)) - (squareHeight / 2);
        ctx.fillStyle = "white";
        ctx.fillRect(squareX, squareY, squareWidth, squareHeight);
    }
}
var Direction;
(function (Direction) {
    Direction[Direction["up"] = 0] = "up";
    Direction[Direction["left"] = 1] = "left";
    Direction[Direction["right"] = 2] = "right";
    Direction[Direction["down"] = 3] = "down";
})(Direction || (Direction = {}));
class PacMan {
    constructor(x, y, width, height) {
        this.currentDirection = Direction.up;
        this._pacManCloseImg = document.getElementById("imgPacManClose");
        this._pacManOpenImg = document.getElementById("imgPacManOpen");
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    draw() {
        ctx.drawImage(this._pacManCloseImg, this.x, this.y, 25, 25);
        // ctx.drawImage(this._pacManOpenImg, 100, 4, 25, 25);
    }
    move(width, height) {
        switch (this.currentDirection) {
            case Direction.up:
                this.y -= height;
                break;
            case Direction.left:
                this.x -= width;
                break;
            case Direction.right:
                this.x += width;
                break;
            case Direction.down:
                this.y += height;
                break;
        }
    }
}
window.addEventListener("load", function () {
    init();
});
//# sourceMappingURL=game.js.map