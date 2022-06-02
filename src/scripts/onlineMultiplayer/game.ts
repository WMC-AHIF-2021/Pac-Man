enum fieldType {
    wall,
    ground,
    groundPoint,
    ghostField
}

let playground = (<HTMLCanvasElement>document.getElementById("playground"));
let ctx = playground.getContext("2d")

let pacMan: PacMan;
let ghost: Ghost;
let isPacMan: boolean = false;
function init() {
    let renderer = new Renderer();
    let field: fieldType[][] = renderer.field;

    pacMan = new PacMan(242, 422, 10, 10);
    ghost = new Ghost(242, 240, 10, 10);
    document.addEventListener("keydown", function(e) {
        if (e.key == "ArrowLeft") {
            if (isPacMan) {
                pacMan.currentDirection = Direction.left;
            } else {
                ghost.currentDirection = Direction.left;
            }
        }
        if (e.key == "ArrowRight") {
            if (isPacMan) {
                pacMan.currentDirection = Direction.right;
            } else {
                ghost.currentDirection = Direction.right;
            }
        }
        if (e.key == "ArrowUp") {
            if (isPacMan) {
                pacMan.currentDirection = Direction.up;
            } else {
                ghost.currentDirection = Direction.up;
            }
        }
        if (e.key == "ArrowDown") {
            if (isPacMan) {
                pacMan.currentDirection = Direction.down;
            } else {
                ghost.currentDirection = Direction.down;
            }
        }
    })

    setInterval(function() {
        renderer.drawField();
        if (isPacMan) {
            pacMan.move(renderer.width, renderer.height, field);
        }
        else {
            ghost.move(renderer.width, renderer.height, field);
        }
        pacMan.draw();
        ghost.draw();
    }, 400)
}

class Renderer {
    public field:fieldType[][] = [
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
    down,
    none
}

interface Entity {
    currentDirection: Direction;
    x: number;
    y: number;
    width: number;
    height: number;

    draw();
    move(width, height, field);
}

class Ghost implements Entity {
    public currentDirection: Direction = Direction.none;
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

    private ghostImg = <CanvasImageSource>document.getElementById("imgGhost");

    public draw() {
        ctx.drawImage(this.ghostImg, this.x, this.y, 25, 25);
    }

    // noinspection TypeScriptUnresolvedFunction
    public move(width: number, height: number, field: fieldType[][]) {
        if (!this.isOverlapping(width, height, field)) {
            switch (this.currentDirection) {
                case Direction.up:
                    this.y -= height;
                    break;
                case Direction.left:
                    this.x -= width - 1;
                    break;
                case Direction.right:
                    this.x += width - 1;
                    break;
                case Direction.down:
                    this.y += height;
                    break;
                default:
                    break;
            }
        }
        // @ts-ignore
        sendGhostPos(this.x, this.y);
    }

    public isOverlapping(width: number, height: number, field: fieldType[][]): boolean {
        let fieldPositionX = this.x / width;
        fieldPositionX = Math.round(fieldPositionX);

        let fieldPositionY = this.y / height;
        fieldPositionY = Math.round(fieldPositionY);

        switch (this.currentDirection) {
            case Direction.up:
                if (field[fieldPositionY - 1][fieldPositionX] == fieldType.groundPoint || field[fieldPositionY - 1][fieldPositionX] == fieldType.ground)
                    return false;
                break;
            case Direction.left:
                if (field[fieldPositionY][fieldPositionX - 1] == fieldType.groundPoint || field[fieldPositionY][fieldPositionX - 1] == fieldType.ground)
                    return false;
                break;
            case Direction.right:
                if (field[fieldPositionY][fieldPositionX + 1] == fieldType.groundPoint || field[fieldPositionY][fieldPositionX + 1] == fieldType.ground)
                    return false;
                break;
            case Direction.down:
                if (field[fieldPositionY + 1][fieldPositionX] == fieldType.groundPoint || field[fieldPositionY + 1][fieldPositionX] == fieldType.ground)
                    return false;
                break;
            default:
                break;
        }
        return true;
    }
}

class PacMan implements Entity {
    public currentDirection: Direction = Direction.none;
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

    public move(width: number, height: number, field: fieldType[][]) {
        if (!this.isOverlapping(width, height, field)) {
            switch (this.currentDirection) {
                case Direction.up:
                    this.y -= height;
                    break;
                case Direction.left:
                    this.x -= width - 1;
                    break;
                case Direction.right:
                    this.x += width - 1;
                    break;
                case Direction.down:
                    this.y += height;
                    break;
                default:
                    break;
            }

            let fieldPositionX = this.x / width;
            fieldPositionX = Math.round(fieldPositionX);

            let fieldPositionY = this.y / height;
            fieldPositionY = Math.round(fieldPositionY);
            this.overrideField(field, fieldPositionX, fieldPositionY);

            // @ts-ignore
            sendPacManPos(this.x, this.y);
        }
    }

    public isOverlapping(width: number, height: number, field: fieldType[][]): boolean {
        let fieldPositionX = this.x / width;
        fieldPositionX = Math.round(fieldPositionX);

        let fieldPositionY = this.y / height;
        fieldPositionY = Math.round(fieldPositionY);

        switch (this.currentDirection) {
            case Direction.up:
                if (field[fieldPositionY - 1][fieldPositionX] == fieldType.groundPoint || field[fieldPositionY - 1][fieldPositionX] == fieldType.ground)
                    return false;
                break;
            case Direction.left:
                if (field[fieldPositionY][fieldPositionX - 1] == fieldType.groundPoint || field[fieldPositionY][fieldPositionX - 1] == fieldType.ground)
                    return false;
                break;
            case Direction.right:
                if (field[fieldPositionY][fieldPositionX + 1] == fieldType.groundPoint || field[fieldPositionY][fieldPositionX + 1] == fieldType.ground)
                    return false;
                break;
            case Direction.down:
                if (field[fieldPositionY + 1][fieldPositionX] == fieldType.groundPoint || field[fieldPositionY + 1][fieldPositionX] == fieldType.ground)
                    return false;
                break;
            default:
                break;
        }
        return true;
    }

    public overrideField(field: fieldType[][], fieldPositionX: number, fieldPositionY: number) {
        field[fieldPositionY][fieldPositionX] = 1;
    }
}

function setPacManPos(x: number, y: number) {
    pacMan.x = x;
    pacMan.y = y;
}

function setGhostPos(x: number, y: number) {
    ghost.x = x;
    ghost.y = y;
}

window.addEventListener("load", function () {
    init();
})