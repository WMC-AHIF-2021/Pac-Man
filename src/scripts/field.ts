export enum FieldType {
    Wall,
    BlockWithPoint,
    BlockWithPacman,
    BlockWithPacmanLeft,
    BlockWithPacmanRight,
    BlockWithPacmanUp,
    BlockWithPacmanDown,
    BlockNormal,
    None,
    NoneWithGhost,
    Ghost
}

export class Field {
    public readonly FIELD_SIZE:number = 25;
    public fieldType:FieldType;
    constructor(type:FieldType) {
        this.fieldType = type;
    }
    public drawField(ctx:CanvasRenderingContext2D, x:number, y:number,playCount:number){
        let image = new Image(10,10);
        image.src = "imgs/Blinky.png";
        ctx.beginPath();
        let color = "black";
        if(this.fieldType == FieldType.Wall){
            color = "#1919A6";
        }
        else if(this.fieldType == FieldType.None || this.fieldType == FieldType.NoneWithGhost){
            color = "white";
        }
        ctx.fillStyle = color;
        ctx.rect(x*this.FIELD_SIZE,y*this.FIELD_SIZE,this.FIELD_SIZE,this.FIELD_SIZE);
        ctx.fill();
        if (this.fieldType == FieldType.BlockWithPoint){
            ctx.beginPath();
            color = "white";
            ctx.fillStyle = color;
            ctx.rect(x*this.FIELD_SIZE+this.FIELD_SIZE/2-2,y*this.FIELD_SIZE+this.FIELD_SIZE/2-2, 4, 4);
            ctx.fill();
        }
        else if(this.fieldType == FieldType.BlockWithPacman || this.fieldType == FieldType.BlockWithPacmanRight || this.fieldType == FieldType.BlockWithPacmanLeft || this.fieldType == FieldType.BlockWithPacmanUp || this.fieldType == FieldType.BlockWithPacmanDown){
            ctx.beginPath();
            color = "yellow";
            ctx.fillStyle = color;
            ctx.arc(x*this.FIELD_SIZE+this.FIELD_SIZE/2,y*this.FIELD_SIZE+this.FIELD_SIZE/2,this.FIELD_SIZE/2-3,0,Math.PI*2);
            ctx.fill();
            if (this.fieldType == FieldType.BlockWithPacmanRight && playCount%2==1){
                ctx.beginPath();
                ctx.fillStyle = "black";
                ctx.moveTo(x*this.FIELD_SIZE+this.FIELD_SIZE/2,y*this.FIELD_SIZE+this.FIELD_SIZE/2);
                ctx.lineTo(x*this.FIELD_SIZE+this.FIELD_SIZE*7/8, y*this.FIELD_SIZE);
                ctx.lineTo(x*this.FIELD_SIZE+this.FIELD_SIZE*7/8, y*this.FIELD_SIZE+this.FIELD_SIZE);
                ctx.fill();
            }
            else if(this.fieldType == FieldType.BlockWithPacmanLeft && playCount%2==1) {
                ctx.beginPath();
                ctx.fillStyle = "black";
                ctx.moveTo(x * this.FIELD_SIZE + this.FIELD_SIZE / 2, y * this.FIELD_SIZE + this.FIELD_SIZE / 2);
                ctx.lineTo(x * this.FIELD_SIZE, y * this.FIELD_SIZE);
                ctx.lineTo(x * this.FIELD_SIZE, y * this.FIELD_SIZE + this.FIELD_SIZE);
                ctx.fill();
            }
            else if(this.fieldType == FieldType.BlockWithPacmanUp && playCount%2==1){
                ctx.beginPath();
                ctx.fillStyle = "black";
                ctx.moveTo(x * this.FIELD_SIZE + this.FIELD_SIZE / 2, y * this.FIELD_SIZE + this.FIELD_SIZE / 2);
                ctx.lineTo(x * this.FIELD_SIZE, y * this.FIELD_SIZE);
                ctx.lineTo(x * this.FIELD_SIZE+ + this.FIELD_SIZE, y * this.FIELD_SIZE);
                ctx.fill();
            }
            else if(this.fieldType == FieldType.BlockWithPacmanDown && playCount%2==1){
                ctx.beginPath();
                ctx.fillStyle = "black";
                ctx.moveTo(x * this.FIELD_SIZE + this.FIELD_SIZE / 2, y * this.FIELD_SIZE + this.FIELD_SIZE / 2);
                ctx.lineTo(x * this.FIELD_SIZE, y * this.FIELD_SIZE + this.FIELD_SIZE);
                ctx.lineTo(x * this.FIELD_SIZE+ + this.FIELD_SIZE, y * this.FIELD_SIZE + this.FIELD_SIZE);
                ctx.fill();
            }
        }
        if (this.fieldType == FieldType.Ghost || this.fieldType == FieldType.NoneWithGhost){
            ctx.drawImage(image,x*this.FIELD_SIZE,y*this.FIELD_SIZE,20,20);
        }
    }
}
