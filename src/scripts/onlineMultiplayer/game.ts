enum fieldType {
    wall,
    ground,
    groundPoint,
    ghostField
}

let playground = (<HTMLCanvasElement>document.getElementById("playground"));
let ctx = playground.getContext("2d")

function init() {
    let renderer = new Renderer();

    let pacMan = new PacMan(242, 422, 10, 10);
    document.addEventListener("keydown", function(e) {
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
    })

    setInterval(function() {
        renderer.drawField();
        pacMan.move(renderer.width, renderer.height);
        pacMan.draw();
    }, 400)
}

class Renderer {
    private field:fieldType[][] = [
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 0 ],
        [ 0, 2, 0, 0, 2, 0, 0, 2, 0, 2, 0, 0, 2, 0, 0, 2, 0 ],
        [ 0, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 0 ],
        [ 0, 2, 2, 2, 2, 0, 2, 0, 0, 0, 2, 0, 2, 2, 2, 2, 0 ],
        [ 0, 2, 0, 0, 2, 0, 2, 2, 0, 2, 2, 0, 2, 0, 0, 2, 0 ],
        [ 0, 2, 2, 2, 2, 0, 0, 2, 0, 2, 0, 0, 2, 2, 2, 2, 0 ],
        [ 0, 0, 0, 0, 2, 0, 2, 2, 2, 2, 2, 0, 2, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 2, 0, 2, 3, 3, 3, 2, 0, 2, 0, 0, 0, 0 ],
        [ 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2 ],
        [ 0, 0, 0, 0, 2, 0, 2, 2, 2, 2, 2, 0, 2, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0 ],
        [ 0, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 0 ],
        [ 0, 2, 0, 0, 2, 0, 0, 2, 0, 2, 0, 0, 2, 0, 0, 2, 0 ],
        [ 0, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 0 ],
        [ 0, 0, 2, 0, 2, 0, 2, 0, 0, 0, 2, 0, 2, 0, 2, 0, 0 ],
        [ 0, 2, 2, 2, 2, 0, 2, 2, 0, 2, 2, 0, 2, 2, 2, 2, 0 ],
        [ 0, 2, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 2, 0 ],
        [ 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
    ]

    // Länge und Höhe eines FieldTypes
    public width: number;
    public height: number;

    public drawField() {
        ctx.clearRect(0, 0, playground.width, playground.height);

        let xLength = this.field[0].length;
        let yLength = this.field.length;

        this.width = playground.width / xLength;
        this.height = playground.height / yLength;

        for (let x = 0; x < this.field[0].length; x++) {
            for (let y = 0; y < this.field.length; y++) {
                switch(this.field[y][x]) {
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

    private drawFieldType(color: string, x: number, y: number, width: number, height: number) {
        ctx.fillStyle = color;
        ctx.fillRect(x * (width - 1), y * height, width, height);
    }

    private drawSquare(x: number, y: number, width: number, height: number) {
        const squareWidth = 5;
        let squareX = (x * (width  - 1) + (width / 2)) - (squareWidth / 2);

        const squareHeight = 5;
        let squareY = (y * height + (height / 2)) - (squareHeight / 2);

        ctx.fillStyle = "white";
        ctx.fillRect(squareX, squareY, squareWidth, squareHeight);
    }
}

enum Direction {
    up,
    left,
    right,
    down
}

interface Entity {
    currentDirection: Direction;
    x: number;
    y: number;
    width: number;
    height: number;

    draw();
    move(width, height);
}

class PacMan implements Entity {
    public currentDirection: Direction = Direction.up;
    public x: number;
    public y: number;
    public width: number;
    public height: number;

    constructor(x :number, y:number, width: number, height: number) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    private _pacManCloseImg = <CanvasImageSource>document.getElementById("imgPacManClose");
    private _pacManOpenImg = <CanvasImageSource>document.getElementById("imgPacManOpen");

    public draw() {
        ctx.drawImage(this._pacManCloseImg, this.x, this.y, 25, 25);
        // ctx.drawImage(this._pacManOpenImg, 100, 4, 25, 25);
    }

    public move(width: number, height: number) {
        switch(this.currentDirection) {
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
})