var FieldType;
(function (FieldType) {
    FieldType[FieldType["Wall"] = 0] = "Wall";
    FieldType[FieldType["BlockWithPoint"] = 1] = "BlockWithPoint";
    FieldType[FieldType["BlockWithPacman"] = 2] = "BlockWithPacman";
    FieldType[FieldType["BlockNormal"] = 3] = "BlockNormal";
    FieldType[FieldType["None"] = 4] = "None";
    FieldType[FieldType["Header"] = 5] = "Header";
})(FieldType || (FieldType = {}));
var Direction;
(function (Direction) {
    Direction[Direction["Left"] = 0] = "Left";
    Direction[Direction["Right"] = 1] = "Right";
    Direction[Direction["Up"] = 2] = "Up";
    Direction[Direction["Down"] = 3] = "Down";
    Direction[Direction["Front"] = 4] = "Front";
})(Direction || (Direction = {}));
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
        [new Field(FieldType.Wall), new Field(FieldType.Wall), new Field(FieldType.Wall), new Field(FieldType.Wall), new Field(FieldType.BlockWithPoint), new Field(FieldType.Wall), new Field(FieldType.BlockWithPoint), none, none, none, new Field(FieldType.BlockWithPoint), new Field(FieldType.Wall), new Field(FieldType.BlockWithPoint), new Field(FieldType.Wall), new Field(FieldType.Wall), new Field(FieldType.Wall), new Field(FieldType.Wall)],
        [new Field(FieldType.BlockWithPoint), new Field(FieldType.BlockWithPoint), new Field(FieldType.BlockWithPoint), new Field(FieldType.BlockWithPoint), new Field(FieldType.BlockWithPoint), new Field(FieldType.BlockWithPoint), new Field(FieldType.BlockWithPoint), none, none, none, new Field(FieldType.BlockWithPoint), new Field(FieldType.BlockWithPoint), new Field(FieldType.BlockWithPoint), new Field(FieldType.BlockWithPoint), new Field(FieldType.BlockWithPoint), new Field(FieldType.BlockWithPoint), new Field(FieldType.BlockWithPoint)],
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
    drawField(ctx, x, y) {
        ctx.beginPath();
        let color = "black";
        if (this.fieldType == FieldType.Wall) {
            color = "blue";
        }
        else if (this.fieldType == FieldType.None) {
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
        else if (this.fieldType == FieldType.BlockWithPacman) {
            ctx.beginPath();
            color = "yellow";
            ctx.fillStyle = color;
            ctx.arc(x * this.FIELD_SIZE + this.FIELD_SIZE / 2, y * this.FIELD_SIZE + this.FIELD_SIZE / 2, this.FIELD_SIZE / 2 - 3, 0, Math.PI * 2);
            ctx.fill();
        }
    }
}
class Pacman extends Field {
    constructor(type, x, y) {
        super(type);
        this.Row = x;
        this.Col = y;
        this.Direction = Direction.Front;
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
                    fields[this.Row][this.Col + 1].fieldType = FieldType.BlockWithPacman;
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
                    fields[this.Row][this.Col - 1].fieldType = FieldType.BlockWithPacman;
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
                    fields[this.Row - 1][this.Col].fieldType = FieldType.BlockWithPacman;
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
                    fields[this.Row + 1][this.Col].fieldType = FieldType.BlockWithPacman;
                    this.Row++;
                }
                break;
        }
        return n;
    }
}
function drawPlayground(context, fields) {
    for (let i = 0; i < fields.length; i++) {
        let row = fields[i];
        for (let j = 0; j < row.length; j++) {
            row[j].drawField(context, j, i);
        }
    }
}
function init() {
    const canvas = document.getElementById("playground");
    const context = canvas.getContext("2d");
    let fields = generatePlayground();
    let pacman = new Pacman(FieldType.BlockWithPacman, 14, 8);
    let count = 0;
    drawPlayground(context, fields);
    document.addEventListener("keydown", event => {
        count += pacman.move(fields, event, context);
        drawPlayground(context, fields);
        console.log(count);
    });
}
document.addEventListener('DOMContentLoaded', (event) => {
    init();
});
//# sourceMappingURL=pacman.js.map