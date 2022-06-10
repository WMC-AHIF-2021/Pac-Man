enum FieldType {
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
let isGhost: boolean = false;
function init() {
    let renderer = new Renderer();
    let field: FieldType[][] = renderer.field;

    pacMan = new PacMan(242, 422, 10, 10);
    ghost = new Ghost(242, 242, 10, 10);
    document.addEventListener("keydown", function(e) {
        if (e.key == "ArrowLeft") {
            if (isPacMan) {
                pacMan.currentDirection = Direction.left;
            }
            if (isGhost) {
                ghost.currentDirection = Direction.left;
            }
        }
        if (e.key == "ArrowRight") {
            if (isPacMan) {
                pacMan.currentDirection = Direction.right;
            }
            if (isGhost) {
                ghost.currentDirection = Direction.right;
            }
        }
        if (e.key == "ArrowUp") {
            if (isPacMan) {
                pacMan.currentDirection = Direction.up;
            }
            if (isGhost) {
                ghost.currentDirection = Direction.up;
            }
        }
        if (e.key == "ArrowDown") {
            if (isPacMan) {
                pacMan.currentDirection = Direction.down;
            }
            if (isGhost) {
                ghost.currentDirection = Direction.down;
            }
        }
    })

    setInterval(function() {
        renderer.drawField();
        if (isPacMan) {
            pacMan.move(renderer.width, renderer.height, field);
            pacMan.win();
        }
        if (isGhost) {
            ghost.move(renderer.width, renderer.height, field);
            ghost.win(pacMan.x, pacMan.y);

            ghost.overrideField(field, Math.round(pacMan.x / renderer.width), Math.round(pacMan.y / renderer.height));
        }
        pacMan.draw();
        ghost.draw();
    }, 400)
}

class Renderer {
    public field:FieldType[][] = [
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
        [ 0, 2, 2, 0, 2, 2, 2, 2, 1, 2, 2, 2, 2, 0, 2, 2, 0 ],
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
                    case FieldType.wall:
                        this.drawFieldType("#0431B4", x, y, this.width, this.height);
                        break;
                    case FieldType.ground:
                        this.drawFieldType("black", x, y, this.width, this.height);
                        break;
                    case FieldType.groundPoint:
                        this.drawFieldType("black", x, y, this.width, this.height);
                        this.drawSquare(x, y, this.width, this.height);
                        break;
                    case FieldType.ghostField:
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
    isOverlapping(width: number, height: number, field: FieldType[][]);
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
    public move(width: number, height: number, field: FieldType[][]) { // 10 u // 17 r
        let fieldPositionX = Math.round(this.x / width);
        let fieldPositionY = Math.round(this.y / height);
        if (fieldPositionX == 16 && fieldPositionY == 9 && this.currentDirection == Direction.right) {
            this.x = (0 - width) + 3;
        }
        if (fieldPositionX == 0 && fieldPositionY == 9 && this.currentDirection == Direction.left) {
            this.x = (((16 * width) - this.width) + width) - 3;
        }

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
        this.x = Math.round(this.x);
        // @ts-ignore
        sendGhostPos(this.x, this.y);
    }

    public isOverlapping(width: number, height: number, field: FieldType[][]): boolean {
        let fieldPositionX = Math.round(this.x / width);
        let fieldPositionY = Math.round(this.y / height);

        switch (this.currentDirection) {
            case Direction.up:
                if (field[fieldPositionY - 1][fieldPositionX] == FieldType.groundPoint || field[fieldPositionY - 1][fieldPositionX] == FieldType.ground)
                    return false;
                break;
            case Direction.left:
                if (field[fieldPositionY][fieldPositionX - 1] == FieldType.groundPoint || field[fieldPositionY][fieldPositionX - 1] == FieldType.ground)
                    return false;
                break;
            case Direction.right:
                if (field[fieldPositionY][fieldPositionX + 1] == FieldType.groundPoint || field[fieldPositionY][fieldPositionX + 1] == FieldType.ground)
                    return false;
                break;
            case Direction.down:
                if (field[fieldPositionY + 1][fieldPositionX] == FieldType.groundPoint || field[fieldPositionY + 1][fieldPositionX] == FieldType.ground)
                    return false;
                break;
            default:
                break;
        }
        return true;
    }

    public overrideField(field: FieldType[][], fieldPositionX: number, fieldPositionY: number) {
        if (field[fieldPositionY][fieldPositionX] != FieldType.ground) {
            field[fieldPositionY][fieldPositionX] = 1;
        }
    }

    public win(x: number, y: number) {
        if (this.x == x && this.y == y) {
            // @ts-ignore
            ghostWinner();
        }
    }
}

class PacMan implements Entity {
    public currentDirection: Direction = Direction.none;
    public x: number;
    public y: number;
    public width: number;
    public height: number;

    public score: number = 0;

    constructor(x :number, y:number, width: number, height: number) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    private _pacManCloseImg = <CanvasImageSource>document.getElementById("imgPacManClose");
    private _pacManRightImg = <CanvasImageSource>document.getElementById("imgPacManRight");
    private _pacManLeftImg = <CanvasImageSource>document.getElementById("imgPacManLeft");
    private _pacManUpImg = <CanvasImageSource>document.getElementById("imgPacManUp");
    private _pacManDownImg = <CanvasImageSource>document.getElementById("imgPacManDown");
    private _isOpen: boolean = false;

    public draw() {
        if (this.currentDirection == Direction.none) {
            ctx.drawImage(this._pacManCloseImg, this.x, this.y, 25, 25);
        }
        else if (this._isOpen) {
            ctx.drawImage(this._pacManCloseImg, this.x, this.y, 25, 25);
            this._isOpen = false;
        }
        else if (!this._isOpen && this.currentDirection == Direction.right) {
            ctx.drawImage(this._pacManRightImg, this.x, this.y, 25, 25);
            this._isOpen = true;
        }
        else if (!this._isOpen && this.currentDirection == Direction.left) {
            ctx.drawImage(this._pacManLeftImg, this.x, this.y, 25, 25);
            this._isOpen = true;
        }
        else if (!this._isOpen && this.currentDirection == Direction.up) {
            ctx.drawImage(this._pacManUpImg, this.x, this.y, 25, 25);
            this._isOpen = true;
        }
        else if (!this._isOpen && this.currentDirection == Direction.down) {
            ctx.drawImage(this._pacManDownImg, this.x, this.y, 25, 25);
            this._isOpen = true;
        }
    }

    public move(width: number, height: number, field: FieldType[][]) {
        let fieldPositionX = Math.round(this.x / width);
        let fieldPositionY = Math.round(this.y / height);
        if (fieldPositionX == 16 && fieldPositionY == 9 && this.currentDirection == Direction.right) {
            this.x = (0 - width) + 3;
        }
        if (fieldPositionX == 0 && fieldPositionY == 9 && this.currentDirection == Direction.left) {
            this.x = (((16 * width) - this.width) + width) - 3;
        }

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

            let fieldPositionX = Math.round(this.x / width);
            let fieldPositionY = Math.round(this.y / height);
            this.overrideField(field, fieldPositionX, fieldPositionY);

            this.x = Math.round(this.x);
            // @ts-ignore
            sendPacManPos(this.x, this.y, this.currentDirection);
        }
    }

    public isOverlapping(width: number, height: number, field: FieldType[][]): boolean {
        let fieldPositionX = Math.round(this.x / width);
        let fieldPositionY = Math.round(this.y / height);

        switch (this.currentDirection) {
            case Direction.up:
                if (field[fieldPositionY - 1][fieldPositionX] == FieldType.groundPoint || field[fieldPositionY - 1][fieldPositionX] == FieldType.ground)
                    return false;
                break;
            case Direction.left:
                if (field[fieldPositionY][fieldPositionX - 1] == FieldType.groundPoint || field[fieldPositionY][fieldPositionX - 1] == FieldType.ground)
                    return false;
                break;
            case Direction.right:
                if (field[fieldPositionY][fieldPositionX + 1] == FieldType.groundPoint || field[fieldPositionY][fieldPositionX + 1] == FieldType.ground)
                    return false;
                break;
            case Direction.down:
                if (field[fieldPositionY + 1][fieldPositionX] == FieldType.groundPoint || field[fieldPositionY + 1][fieldPositionX] == FieldType.ground)
                    return false;
                break;
            default:
                break;
        }
        this.currentDirection = Direction.none;
        this.x = Math.round(this.x);
        // @ts-ignore
        sendPacManPos(this.x, this.y, this.currentDirection);
        return true;
    }

    public overrideField(field: FieldType[][], fieldPositionX: number, fieldPositionY: number) {
        if (field[fieldPositionY][fieldPositionX] != FieldType.ground) {
            field[fieldPositionY][fieldPositionX] = 1;
            this.score++;
        }
    }

    public win() {
        if (this.score == 164) {
            // @ts-ignore
            pacManWinner();
        }
    }
}

function setPacManPos(x: number, y: number, currentDirection: Direction) {
    pacMan.x = x;
    pacMan.y = y;
    pacMan.currentDirection = currentDirection;
}

function setGhostPos(x: number, y: number) {
    ghost.x = x;
    ghost.y = y;
}

window.addEventListener("load", function () {
    init();
})