export var FieldType;
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
export class Field {
    constructor(type) {
        this.FIELD_SIZE = 25;
        this.fieldType = type;
    }
    drawField(ctx, x, y, playCount) {
        let image = new Image(10, 10);
        image.src = "imgs/Blinky.png";
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
            ctx.drawImage(image, x * this.FIELD_SIZE, y * this.FIELD_SIZE, 20, 20);
        }
    }
}
//# sourceMappingURL=field.js.map