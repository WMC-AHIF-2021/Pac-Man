var FieldType;
(function (FieldType) {
    FieldType[FieldType["Wall"] = 0] = "Wall";
    FieldType[FieldType["BlockWithPoint"] = 1] = "BlockWithPoint";
    FieldType[FieldType["BlockWithPacman"] = 2] = "BlockWithPacman";
    FieldType[FieldType["BlockWithPacmanLeft"] = 3] = "BlockWithPacmanLeft";
    FieldType[FieldType["BlockWithPacmanRight"] = 4] = "BlockWithPacmanRight";
    FieldType[FieldType["BlockWithPacmanUp"] = 5] = "BlockWithPacmanUp";
    FieldType[FieldType["BlockWithPacmanDown"] = 6] = "BlockWithPacmanDown";
    FieldType[FieldType["BlockNormal"] = 7] = "BlockNormal";
    FieldType[FieldType["None"] = 8] = "None";
    FieldType[FieldType["NoneWithGhost"] = 9] = "NoneWithGhost";
    FieldType[FieldType["Ghost"] = 10] = "Ghost";
})(FieldType || (FieldType = {}));
function generatePlayground() {
    let none = new Field(FieldType.None);
    let playground = [
        [new Field(FieldType.Wall), new Field(FieldType.Wall), new Field(FieldType.Wall), new Field(FieldType.Wall), new Field(FieldType.Wall), new Field(FieldType.Wall), new Field(FieldType.Wall), new Field(FieldType.Wall), new Field(FieldType.Wall), new Field(FieldType.Wall), new Field(FieldType.Wall), new Field(FieldType.Wall), new Field(FieldType.Wall), new Field(FieldType.Wall), new Field(FieldType.Wall), new Field(FieldType.Wall), new Field(FieldType.Wall)],
        [new Field(FieldType.Wall), new Field(FieldType.BlockWithPoint), new Field(FieldType.BlockWithPoint), new Field(FieldType.BlockWithPoint), new Field(FieldType.BlockWithPoint), new Field(FieldType.BlockWithPoint), new Field(FieldType.BlockWithPoint), new Field(FieldType.BlockWithPoint), new Field(FieldType.Wall), new Field(FieldType.BlockWithPoint), new Field(FieldType.BlockWithPoint), new Field(FieldType.BlockWithPoint), new Field(FieldType.BlockWithPoint), new Field(FieldType.BlockWithPoint), new Field(FieldType.BlockWithPoint), new Field(FieldType.BlockWithPoint), new Field(FieldType.Wall)],
        [new Field(FieldType.Wall), new Field(FieldType.BlockWithPoint), new Field(FieldType.Wall), new Field(FieldType.Wall), new Field(FieldType.BlockWithPoint), new Field(FieldType.Wall), new Field(FieldType.Wall), new Field(FieldType.BlockWithPoint), new Field(FieldType.Wall), new Field(FieldType.BlockWithPoint), new Field(FieldType.Wall), new Field(FieldType.Wall), new Field(FieldType.BlockWithPoint), new Field(FieldType.Wall), new Field(FieldType.Wall), new Field(FieldType.BlockWithPoint), new Field(FieldType.Wall)],
        [new Field(FieldType.Wall), new Field(FieldType.BlockWithPoint), new Field(FieldType.Wall), new Field(FieldType.Wall), new Field(FieldType.BlockWithPoint), new Field(FieldType.BlockWithPoint), new Field(FieldType.BlockWithPoint), new Field(FieldType.BlockWithPoint), new Field(FieldType.BlockWithPoint), new Field(FieldType.BlockWithPoint), new Field(FieldType.BlockWithPoint), new Field(FieldType.BlockWithPoint), new Field(FieldType.BlockWithPoint), new Field(FieldType.Wall), new Field(FieldType.Wall), new Field(FieldType.BlockWithPoint), new Field(FieldType.Wall)],
        [new Field(FieldType.Wall), new Field(FieldType.BlockWithPoint), new Field(FieldType.BlockWithPoint), new Field(FieldType.BlockWithPoint), new Field(FieldType.BlockWithPoint), new Field(FieldType.Wall), new Field(FieldType.BlockWithPoint), new Field(FieldType.Wall), new Field(FieldType.Wall), new Field(FieldType.Wall), new Field(FieldType.BlockWithPoint), new Field(FieldType.Wall), new Field(FieldType.BlockWithPoint), new Field(FieldType.BlockWithPoint), new Field(FieldType.BlockWithPoint), new Field(FieldType.BlockWithPoint), new Field(FieldType.Wall)],
        [new Field(FieldType.Wall), new Field(FieldType.BlockWithPoint), new Field(FieldType.Wall), new Field(FieldType.Wall), new Field(FieldType.BlockWithPoint), new Field(FieldType.Wall), new Field(FieldType.BlockWithPoint), new Field(FieldType.BlockWithPoint), new Field(FieldType.Wall), new Field(FieldType.BlockWithPoint), new Field(FieldType.BlockWithPoint), new Field(FieldType.Wall), new Field(FieldType.BlockWithPoint), new Field(FieldType.Wall), new Field(FieldType.Wall), new Field(FieldType.BlockWithPoint), new Field(FieldType.Wall)],
        [new Field(FieldType.Wall), new Field(FieldType.BlockWithPoint), new Field(FieldType.BlockWithPoint), new Field(FieldType.BlockWithPoint), new Field(FieldType.BlockWithPoint), new Field(FieldType.Wall), new Field(FieldType.Wall), new Field(FieldType.BlockWithPoint), new Field(FieldType.Wall), new Field(FieldType.BlockWithPoint), new Field(FieldType.Wall), new Field(FieldType.Wall), new Field(FieldType.BlockWithPoint), new Field(FieldType.BlockWithPoint), new Field(FieldType.BlockWithPoint), new Field(FieldType.BlockWithPoint), new Field(FieldType.Wall)],
        [new Field(FieldType.Wall), new Field(FieldType.Wall), new Field(FieldType.Wall), new Field(FieldType.Wall), new Field(FieldType.BlockWithPoint), new Field(FieldType.Wall), new Field(FieldType.BlockWithPoint), new Field(FieldType.BlockWithPoint), new Field(FieldType.BlockWithPoint), new Field(FieldType.BlockWithPoint), new Field(FieldType.BlockWithPoint), new Field(FieldType.Wall), new Field(FieldType.BlockWithPoint), new Field(FieldType.Wall), new Field(FieldType.Wall), new Field(FieldType.Wall), new Field(FieldType.Wall)],
        [new Field(FieldType.Wall), new Field(FieldType.Wall), new Field(FieldType.Wall), new Field(FieldType.Wall), new Field(FieldType.BlockWithPoint), new Field(FieldType.Wall), new Field(FieldType.BlockWithPoint), new Field(FieldType.None), new Field(FieldType.NoneWithGhost), new Field(FieldType.None), new Field(FieldType.BlockWithPoint), new Field(FieldType.Wall), new Field(FieldType.BlockWithPoint), new Field(FieldType.Wall), new Field(FieldType.Wall), new Field(FieldType.Wall), new Field(FieldType.Wall)],
        [new Field(FieldType.BlockNormal), new Field(FieldType.BlockNormal), new Field(FieldType.BlockNormal), new Field(FieldType.BlockNormal), new Field(FieldType.BlockWithPoint), new Field(FieldType.BlockNormal), new Field(FieldType.BlockWithPoint), new Field(FieldType.None), new Field(FieldType.None), new Field(FieldType.None), new Field(FieldType.BlockWithPoint), new Field(FieldType.BlockNormal), new Field(FieldType.BlockWithPoint), new Field(FieldType.BlockNormal), new Field(FieldType.BlockNormal), new Field(FieldType.BlockNormal), new Field(FieldType.BlockNormal)],
        [new Field(FieldType.Wall), new Field(FieldType.Wall), new Field(FieldType.Wall), new Field(FieldType.Wall), new Field(FieldType.BlockWithPoint), new Field(FieldType.Wall), new Field(FieldType.BlockWithPoint), new Field(FieldType.BlockWithPoint), new Field(FieldType.BlockWithPoint), new Field(FieldType.BlockWithPoint), new Field(FieldType.BlockWithPoint), new Field(FieldType.Wall), new Field(FieldType.BlockWithPoint), new Field(FieldType.Wall), new Field(FieldType.Wall), new Field(FieldType.Wall), new Field(FieldType.Wall)],
        [new Field(FieldType.Wall), new Field(FieldType.Wall), new Field(FieldType.Wall), new Field(FieldType.Wall), new Field(FieldType.BlockWithPoint), new Field(FieldType.Wall), new Field(FieldType.BlockWithPoint), new Field(FieldType.Wall), new Field(FieldType.Wall), new Field(FieldType.Wall), new Field(FieldType.BlockWithPoint), new Field(FieldType.Wall), new Field(FieldType.BlockWithPoint), new Field(FieldType.Wall), new Field(FieldType.Wall), new Field(FieldType.Wall), new Field(FieldType.Wall)],
        [new Field(FieldType.Wall), new Field(FieldType.BlockWithPoint), new Field(FieldType.BlockWithPoint), new Field(FieldType.BlockWithPoint), new Field(FieldType.BlockWithPoint), new Field(FieldType.BlockWithPoint), new Field(FieldType.BlockWithPoint), new Field(FieldType.BlockWithPoint), new Field(FieldType.Wall), new Field(FieldType.BlockWithPoint), new Field(FieldType.BlockWithPoint), new Field(FieldType.BlockWithPoint), new Field(FieldType.BlockWithPoint), new Field(FieldType.BlockWithPoint), new Field(FieldType.BlockWithPoint), new Field(FieldType.BlockWithPoint), new Field(FieldType.Wall)],
        [new Field(FieldType.Wall), new Field(FieldType.BlockWithPoint), new Field(FieldType.Wall), new Field(FieldType.Wall), new Field(FieldType.BlockWithPoint), new Field(FieldType.Wall), new Field(FieldType.Wall), new Field(FieldType.BlockWithPoint), new Field(FieldType.Wall), new Field(FieldType.BlockWithPoint), new Field(FieldType.Wall), new Field(FieldType.Wall), new Field(FieldType.BlockWithPoint), new Field(FieldType.Wall), new Field(FieldType.Wall), new Field(FieldType.BlockWithPoint), new Field(FieldType.Wall)],
        [new Field(FieldType.Wall), new Field(FieldType.BlockWithPoint), new Field(FieldType.BlockWithPoint), new Field(FieldType.Wall), new Field(FieldType.BlockWithPoint), new Field(FieldType.BlockWithPoint), new Field(FieldType.BlockWithPoint), new Field(FieldType.BlockWithPoint), new Field(FieldType.BlockWithPacman), new Field(FieldType.BlockWithPoint), new Field(FieldType.BlockWithPoint), new Field(FieldType.BlockWithPoint), new Field(FieldType.BlockWithPoint), new Field(FieldType.Wall), new Field(FieldType.BlockWithPoint), new Field(FieldType.BlockWithPoint), new Field(FieldType.Wall)],
        [new Field(FieldType.Wall), new Field(FieldType.Wall), new Field(FieldType.BlockWithPoint), new Field(FieldType.Wall), new Field(FieldType.BlockWithPoint), new Field(FieldType.Wall), new Field(FieldType.BlockWithPoint), new Field(FieldType.Wall), new Field(FieldType.Wall), new Field(FieldType.Wall), new Field(FieldType.BlockWithPoint), new Field(FieldType.Wall), new Field(FieldType.BlockWithPoint), new Field(FieldType.Wall), new Field(FieldType.BlockWithPoint), new Field(FieldType.Wall), new Field(FieldType.Wall)],
        [new Field(FieldType.Wall), new Field(FieldType.BlockWithPoint), new Field(FieldType.BlockWithPoint), new Field(FieldType.BlockWithPoint), new Field(FieldType.BlockWithPoint), new Field(FieldType.Wall), new Field(FieldType.BlockWithPoint), new Field(FieldType.BlockWithPoint), new Field(FieldType.Wall), new Field(FieldType.BlockWithPoint), new Field(FieldType.BlockWithPoint), new Field(FieldType.Wall), new Field(FieldType.BlockWithPoint), new Field(FieldType.BlockWithPoint), new Field(FieldType.BlockWithPoint), new Field(FieldType.BlockWithPoint), new Field(FieldType.Wall)],
        [new Field(FieldType.Wall), new Field(FieldType.BlockWithPoint), new Field(FieldType.Wall), new Field(FieldType.Wall), new Field(FieldType.Wall), new Field(FieldType.Wall), new Field(FieldType.Wall), new Field(FieldType.BlockWithPoint), new Field(FieldType.Wall), new Field(FieldType.BlockWithPoint), new Field(FieldType.Wall), new Field(FieldType.Wall), new Field(FieldType.Wall), new Field(FieldType.Wall), new Field(FieldType.Wall), new Field(FieldType.BlockWithPoint), new Field(FieldType.Wall)],
        [new Field(FieldType.Wall), new Field(FieldType.BlockWithPoint), new Field(FieldType.BlockWithPoint), new Field(FieldType.BlockWithPoint), new Field(FieldType.BlockWithPoint), new Field(FieldType.BlockWithPoint), new Field(FieldType.BlockWithPoint), new Field(FieldType.BlockWithPoint), new Field(FieldType.BlockWithPoint), new Field(FieldType.BlockWithPoint), new Field(FieldType.BlockWithPoint), new Field(FieldType.BlockWithPoint), new Field(FieldType.BlockWithPoint), new Field(FieldType.BlockWithPoint), new Field(FieldType.BlockWithPoint), new Field(FieldType.BlockWithPoint), new Field(FieldType.Wall)],
        [new Field(FieldType.Wall), new Field(FieldType.Wall), new Field(FieldType.Wall), new Field(FieldType.Wall), new Field(FieldType.Wall), new Field(FieldType.Wall), new Field(FieldType.Wall), new Field(FieldType.Wall), new Field(FieldType.Wall), new Field(FieldType.Wall), new Field(FieldType.Wall), new Field(FieldType.Wall), new Field(FieldType.Wall), new Field(FieldType.Wall), new Field(FieldType.Wall), new Field(FieldType.Wall), new Field(FieldType.Wall)],
    ];
    return playground;
}
class Field {
    constructor(type) {
        this.FIELD_SIZE = 25;
        this.fieldType = type;
    }
    drawField(ctx, x, y, playCount) {
        ctx.beginPath();
        let color = "black";
        if (this.fieldType == FieldType.Wall) {
            color = "#1919A6";
        }
        else if (this.fieldType == FieldType.None || this.fieldType == FieldType.NoneWithGhost) {
            color = "white";
        }
        ctx.fillStyle = color;
        ctx.rect(x * this.FIELD_SIZE, y * this.FIELD_SIZE, this.FIELD_SIZE, this.FIELD_SIZE);
        ctx.fill();
        if (this.fieldType == FieldType.BlockWithPoint) {
            ctx.beginPath();
            color = "white";
            ctx.fillStyle = color;
            ctx.rect(x * this.FIELD_SIZE + this.FIELD_SIZE / 2 - 2, y * this.FIELD_SIZE + this.FIELD_SIZE / 2 - 2, 4, 4);
            ctx.fill();
        }
        else if (this.fieldType == FieldType.BlockWithPacman || this.fieldType == FieldType.BlockWithPacmanRight || this.fieldType == FieldType.BlockWithPacmanLeft || this.fieldType == FieldType.BlockWithPacmanUp || this.fieldType == FieldType.BlockWithPacmanDown) {
            ctx.beginPath();
            color = "yellow";
            ctx.fillStyle = color;
            ctx.arc(x * this.FIELD_SIZE + this.FIELD_SIZE / 2, y * this.FIELD_SIZE + this.FIELD_SIZE / 2, this.FIELD_SIZE / 2 - 3, 0, Math.PI * 2);
            ctx.fill();
            if (this.fieldType == FieldType.BlockWithPacmanRight && playCount % 2 == 1) {
                ctx.beginPath();
                ctx.fillStyle = "black";
                ctx.moveTo(x * this.FIELD_SIZE + this.FIELD_SIZE / 2, y * this.FIELD_SIZE + this.FIELD_SIZE / 2);
                ctx.lineTo(x * this.FIELD_SIZE + this.FIELD_SIZE * 7 / 8, y * this.FIELD_SIZE);
                ctx.lineTo(x * this.FIELD_SIZE + this.FIELD_SIZE * 7 / 8, y * this.FIELD_SIZE + this.FIELD_SIZE);
                ctx.fill();
            }
            else if (this.fieldType == FieldType.BlockWithPacmanLeft && playCount % 2 == 1) {
                ctx.beginPath();
                ctx.fillStyle = "black";
                ctx.moveTo(x * this.FIELD_SIZE + this.FIELD_SIZE / 2, y * this.FIELD_SIZE + this.FIELD_SIZE / 2);
                ctx.lineTo(x * this.FIELD_SIZE, y * this.FIELD_SIZE);
                ctx.lineTo(x * this.FIELD_SIZE, y * this.FIELD_SIZE + this.FIELD_SIZE);
                ctx.fill();
            }
            else if (this.fieldType == FieldType.BlockWithPacmanUp && playCount % 2 == 1) {
                ctx.beginPath();
                ctx.fillStyle = "black";
                ctx.moveTo(x * this.FIELD_SIZE + this.FIELD_SIZE / 2, y * this.FIELD_SIZE + this.FIELD_SIZE / 2);
                ctx.lineTo(x * this.FIELD_SIZE, y * this.FIELD_SIZE);
                ctx.lineTo(x * this.FIELD_SIZE + +this.FIELD_SIZE, y * this.FIELD_SIZE);
                ctx.fill();
            }
            else if (this.fieldType == FieldType.BlockWithPacmanDown && playCount % 2 == 1) {
                ctx.beginPath();
                ctx.fillStyle = "black";
                ctx.moveTo(x * this.FIELD_SIZE + this.FIELD_SIZE / 2, y * this.FIELD_SIZE + this.FIELD_SIZE / 2);
                ctx.lineTo(x * this.FIELD_SIZE, y * this.FIELD_SIZE + this.FIELD_SIZE);
                ctx.lineTo(x * this.FIELD_SIZE + +this.FIELD_SIZE, y * this.FIELD_SIZE + this.FIELD_SIZE);
                ctx.fill();
            }
        }
        if (this.fieldType == FieldType.Ghost || this.fieldType == FieldType.NoneWithGhost) {
            let image = new Image(10, 10);
            image.src = "../../imgs/Blinky.png";
            ctx.drawImage(image, x * this.FIELD_SIZE, y * this.FIELD_SIZE, 20, 20);
        }
    }
}
class Ghost {
    constructor(row, col, prevField) {
        this.Row = row;
        this.Col = col;
        this.PrevField = prevField;
    }
    moveGhost(fields, context, pacman) {
        let alreadymoved = false;
        if (this.Col - pacman.Col < 0) {
            if (fields[this.Row][this.Col + 1].fieldType != FieldType.Wall && fields[this.Row][this.Col + 1].fieldType != FieldType.None) {
                fields[this.Row][this.Col].fieldType = this.PrevField;
                this.PrevField = fields[this.Row][this.Col + 1].fieldType;
                fields[this.Row][this.Col + 1].fieldType = FieldType.Ghost;
                this.Col++;
                alreadymoved = true;
            }
        }
        if (this.Col - pacman.Col > 0 && alreadymoved === false) {
            if (fields[this.Row][this.Col - 1].fieldType != FieldType.Wall && fields[this.Row][this.Col - 1].fieldType != FieldType.None) {
                fields[this.Row][this.Col].fieldType = this.PrevField;
                this.PrevField = fields[this.Row][this.Col - 1].fieldType;
                fields[this.Row][this.Col - 1].fieldType = FieldType.Ghost;
                this.Col--;
                alreadymoved = true;
            }
        }
        if (this.Row - pacman.Row < 0 && alreadymoved === false) {
            if (fields[this.Row + 1][this.Col].fieldType != FieldType.Wall && fields[this.Row + 1][this.Col].fieldType != FieldType.None) {
                fields[this.Row][this.Col].fieldType = this.PrevField;
                this.PrevField = fields[this.Row + 1][this.Col].fieldType;
                fields[this.Row + 1][this.Col].fieldType = FieldType.Ghost;
                this.Row++;
                alreadymoved = true;
            }
        }
        if (this.Row - pacman.Row > 0 && alreadymoved === false) {
            if (fields[this.Row - 1][this.Col].fieldType != FieldType.Wall && fields[this.Row - 1][this.Col].fieldType != FieldType.None) {
                fields[this.Row][this.Col].fieldType = this.PrevField;
                this.PrevField = fields[this.Row - 1][this.Col].fieldType;
                fields[this.Row - 1][this.Col].fieldType = FieldType.Ghost;
                this.Row--;
                alreadymoved = true;
            }
        }
        if (alreadymoved === false) {
            if (fields[this.Row][this.Col + 1].fieldType == FieldType.BlockWithPoint || fields[this.Row][this.Col + 1].fieldType == FieldType.BlockWithPoint) {
                fields[this.Row][this.Col].fieldType = this.PrevField;
                this.PrevField = fields[this.Row][this.Col + 1].fieldType;
                fields[this.Row][this.Col + 1].fieldType = FieldType.Ghost;
                this.Col++;
            }
            else if (fields[this.Row][this.Col - 1].fieldType == FieldType.BlockWithPoint || fields[this.Row][this.Col - 1].fieldType == FieldType.BlockWithPoint) {
                fields[this.Row][this.Col].fieldType = this.PrevField;
                this.PrevField = fields[this.Row][this.Col - 1].fieldType;
                fields[this.Row][this.Col - 1].fieldType = FieldType.Ghost;
                this.Col--;
            }
            else if (fields[this.Row + 1][this.Col].fieldType == FieldType.BlockWithPoint || fields[this.Row + 1][this.Col].fieldType == FieldType.BlockWithPoint) {
                fields[this.Row][this.Col].fieldType = this.PrevField;
                this.PrevField = fields[this.Row + 1][this.Col].fieldType;
                fields[this.Row + 1][this.Col].fieldType = FieldType.Ghost;
                this.Row++;
            }
            else if (fields[this.Row - 1][this.Col].fieldType == FieldType.BlockWithPoint || fields[this.Row - 1][this.Col].fieldType == FieldType.BlockWithPoint) {
                fields[this.Row][this.Col].fieldType = this.PrevField;
                this.PrevField = fields[this.Row - 1][this.Col].fieldType;
                fields[this.Row - 1][this.Col].fieldType = FieldType.Ghost;
                this.Row--;
            }
        }
    }
}
class Pacman extends Field {
    constructor(type, x, y) {
        super(type);
        this.Row = x;
        this.Col = y;
    }
    move(fields, event, context) {
        let nextField = null;
        let n = 0;
        switch (event.key) {
            case "ArrowRight":
                nextField = fields[this.Row][this.Col + 1];
                if (nextField.fieldType == FieldType.BlockWithPoint) {
                    n++;
                }
                if (nextField.fieldType != FieldType.Wall && nextField.fieldType != FieldType.None) {
                    fields[this.Row][this.Col].fieldType = FieldType.BlockNormal;
                    fields[this.Row][this.Col + 1].fieldType = FieldType.BlockWithPacmanRight;
                    this.Col++;
                }
                break;
            case "ArrowLeft":
                nextField = fields[this.Row][this.Col - 1];
                if (nextField.fieldType == FieldType.BlockWithPoint) {
                    n++;
                }
                if (nextField.fieldType != FieldType.Wall && nextField.fieldType != FieldType.None) {
                    fields[this.Row][this.Col].fieldType = FieldType.BlockNormal;
                    fields[this.Row][this.Col - 1].fieldType = FieldType.BlockWithPacmanLeft;
                    this.Col--;
                }
                break;
            case "ArrowUp":
                nextField = fields[this.Row - 1][this.Col];
                if (nextField.fieldType == FieldType.BlockWithPoint) {
                    n++;
                }
                if (nextField.fieldType != FieldType.Wall && nextField.fieldType != FieldType.None) {
                    fields[this.Row][this.Col].fieldType = FieldType.BlockNormal;
                    fields[this.Row - 1][this.Col].fieldType = FieldType.BlockWithPacmanUp;
                    this.Row--;
                }
                break;
            case "ArrowDown":
                nextField = fields[this.Row + 1][this.Col];
                if (nextField.fieldType == FieldType.BlockWithPoint) {
                    n++;
                }
                if (nextField.fieldType != FieldType.Wall && nextField.fieldType != FieldType.None) {
                    fields[this.Row][this.Col].fieldType = FieldType.BlockNormal;
                    fields[this.Row + 1][this.Col].fieldType = FieldType.BlockWithPacmanDown;
                    this.Row++;
                }
                break;
        }
        return n;
    }
}
function drawPlayground(context, fields, playCount, count) {
    context.fillStyle = "white";
    context.fillText(`Count: ${count}`, 0, 100);
    for (let i = 0; i < fields.length; i++) {
        let row = fields[i];
        for (let j = 0; j < row.length; j++) {
            row[j].drawField(context, j, i, playCount);
        }
    }
}
function init() {
    const canvas = document.getElementById("playground");
    const context = canvas.getContext("2d");
    let fields = generatePlayground();
    let pacman = new Pacman(FieldType.BlockWithPacman, 14, 8);
    let ghost = new Ghost(8, 8, FieldType.None);
    let count = 0;
    let playCount = 0;
    drawPlayground(context, fields, playCount, count);
    document.addEventListener("keydown", event => {
        count += pacman.move(fields, event, context);
        ghost.moveGhost(fields, context, pacman);
        if (count == 164) {
            console.log("You won!!!");
        }
        else if (ghost.Col == pacman.Col && ghost.Row == pacman.Row) {
            console.log(`You lost!!! Score: ${count}`);
        }
        playCount++;
        drawPlayground(context, fields, playCount, count);
        console.log(`Score: ${count}; Pacman(${pacman.Col}|${pacman.Row}); Ghost(${ghost.Col}|${ghost.Row})`);
        event.preventDefault();
    });
}
document.addEventListener('DOMContentLoaded', (event) => {
    init();
});
//# sourceMappingURL=pacman.js.map