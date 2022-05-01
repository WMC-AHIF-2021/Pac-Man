enum FieldType {
    Wall,
    BlockWithPoint,
    BlockWithPacman,
    BlockNormal,
    None,
    Header
}

enum Direction {
    Left,
    Right,
    Up,
    Down,
    Front
}

function generatePlayground():Field[][]{
    let none:Field = new Field(FieldType.None);
    let playground: Field[][] = [
        [new Field(FieldType.Wall)          ,new Field(FieldType.Wall)          ,new Field(FieldType.Wall)          ,new Field(FieldType.Wall)          ,new Field(FieldType.Wall)          ,new Field(FieldType.Wall)          ,new Field(FieldType.Wall)          ,new Field(FieldType.Wall)          ,new Field(FieldType.Wall)          ,new Field(FieldType.Wall)          ,new Field(FieldType.Wall)          ,new Field(FieldType.Wall)          ,new Field(FieldType.Wall)          ,new Field(FieldType.Wall)          ,new Field(FieldType.Wall)          ,new Field(FieldType.Wall)          ,new Field(FieldType.Wall)          ],
        [new Field(FieldType.Wall)          ,new Field(FieldType.BlockWithPoint),new Field(FieldType.BlockWithPoint),new Field(FieldType.BlockWithPoint),new Field(FieldType.BlockWithPoint),new Field(FieldType.BlockWithPoint),new Field(FieldType.BlockWithPoint),new Field(FieldType.BlockWithPoint),new Field(FieldType.Wall)          ,new Field(FieldType.BlockWithPoint),new Field(FieldType.BlockWithPoint),new Field(FieldType.BlockWithPoint),new Field(FieldType.BlockWithPoint),new Field(FieldType.BlockWithPoint),new Field(FieldType.BlockWithPoint),new Field(FieldType.BlockWithPoint),new Field(FieldType.Wall)          ],
        [new Field(FieldType.Wall)          ,new Field(FieldType.BlockWithPoint),new Field(FieldType.Wall)          ,new Field(FieldType.Wall)          ,new Field(FieldType.BlockWithPoint),new Field(FieldType.Wall)          ,new Field(FieldType.Wall)          ,new Field(FieldType.BlockWithPoint),new Field(FieldType.Wall)          ,new Field(FieldType.BlockWithPoint),new Field(FieldType.Wall)          ,new Field(FieldType.Wall)          ,new Field(FieldType.BlockWithPoint),new Field(FieldType.Wall)          ,new Field(FieldType.Wall)          ,new Field(FieldType.BlockWithPoint),new Field(FieldType.Wall)          ],
        [new Field(FieldType.Wall)          ,new Field(FieldType.BlockWithPoint),new Field(FieldType.Wall)          ,new Field(FieldType.Wall)          ,new Field(FieldType.BlockWithPoint),new Field(FieldType.BlockWithPoint),new Field(FieldType.BlockWithPoint),new Field(FieldType.BlockWithPoint),new Field(FieldType.BlockWithPoint),new Field(FieldType.BlockWithPoint),new Field(FieldType.BlockWithPoint),new Field(FieldType.BlockWithPoint),new Field(FieldType.BlockWithPoint),new Field(FieldType.Wall)          ,new Field(FieldType.Wall)          ,new Field(FieldType.BlockWithPoint),new Field(FieldType.Wall)          ],
        [new Field(FieldType.Wall)          ,new Field(FieldType.BlockWithPoint),new Field(FieldType.BlockWithPoint),new Field(FieldType.BlockWithPoint),new Field(FieldType.BlockWithPoint),new Field(FieldType.Wall)          ,new Field(FieldType.BlockWithPoint),new Field(FieldType.Wall)          ,new Field(FieldType.Wall)          ,new Field(FieldType.Wall)          ,new Field(FieldType.BlockWithPoint),new Field(FieldType.Wall)          ,new Field(FieldType.BlockWithPoint),new Field(FieldType.BlockWithPoint),new Field(FieldType.BlockWithPoint),new Field(FieldType.BlockWithPoint),new Field(FieldType.Wall)          ],
        [new Field(FieldType.Wall)          ,new Field(FieldType.BlockWithPoint),new Field(FieldType.Wall)          ,new Field(FieldType.Wall)          ,new Field(FieldType.BlockWithPoint),new Field(FieldType.Wall)          ,new Field(FieldType.BlockWithPoint),new Field(FieldType.BlockWithPoint),new Field(FieldType.Wall)          ,new Field(FieldType.BlockWithPoint),new Field(FieldType.BlockWithPoint),new Field(FieldType.Wall)          ,new Field(FieldType.BlockWithPoint),new Field(FieldType.Wall)          ,new Field(FieldType.Wall)          ,new Field(FieldType.BlockWithPoint),new Field(FieldType.Wall)          ],
        [new Field(FieldType.Wall)          ,new Field(FieldType.BlockWithPoint),new Field(FieldType.BlockWithPoint),new Field(FieldType.BlockWithPoint),new Field(FieldType.BlockWithPoint),new Field(FieldType.Wall)          ,new Field(FieldType.Wall)          ,new Field(FieldType.BlockWithPoint),new Field(FieldType.Wall)          ,new Field(FieldType.BlockWithPoint),new Field(FieldType.Wall)          ,new Field(FieldType.Wall)          ,new Field(FieldType.BlockWithPoint),new Field(FieldType.BlockWithPoint),new Field(FieldType.BlockWithPoint),new Field(FieldType.BlockWithPoint),new Field(FieldType.Wall)          ],
        [new Field(FieldType.Wall)          ,new Field(FieldType.Wall)          ,new Field(FieldType.Wall)          ,new Field(FieldType.Wall)          ,new Field(FieldType.BlockWithPoint),new Field(FieldType.Wall)          ,new Field(FieldType.BlockWithPoint),new Field(FieldType.BlockWithPoint),new Field(FieldType.BlockWithPoint),new Field(FieldType.BlockWithPoint),new Field(FieldType.BlockWithPoint),new Field(FieldType.Wall)          ,new Field(FieldType.BlockWithPoint),new Field(FieldType.Wall)          ,new Field(FieldType.Wall)          ,new Field(FieldType.Wall)          ,new Field(FieldType.Wall)          ],
        [new Field(FieldType.Wall)          ,new Field(FieldType.Wall)          ,new Field(FieldType.Wall)          ,new Field(FieldType.Wall)          ,new Field(FieldType.BlockWithPoint),new Field(FieldType.Wall)          ,new Field(FieldType.BlockWithPoint),none          ,none          ,none          ,new Field(FieldType.BlockWithPoint),new Field(FieldType.Wall)          ,new Field(FieldType.BlockWithPoint),new Field(FieldType.Wall)          ,new Field(FieldType.Wall)          ,new Field(FieldType.Wall)          ,new Field(FieldType.Wall)          ],
        [new Field(FieldType.BlockWithPoint),new Field(FieldType.BlockWithPoint),new Field(FieldType.BlockWithPoint),new Field(FieldType.BlockWithPoint),new Field(FieldType.BlockWithPoint),new Field(FieldType.BlockWithPoint),new Field(FieldType.BlockWithPoint),none          ,none          ,none          ,new Field(FieldType.BlockWithPoint),new Field(FieldType.BlockWithPoint),new Field(FieldType.BlockWithPoint),new Field(FieldType.BlockWithPoint),new Field(FieldType.BlockWithPoint),new Field(FieldType.BlockWithPoint),new Field(FieldType.BlockWithPoint)],
        [new Field(FieldType.Wall)          ,new Field(FieldType.Wall)          ,new Field(FieldType.Wall)          ,new Field(FieldType.Wall)          ,new Field(FieldType.BlockWithPoint),new Field(FieldType.Wall)          ,new Field(FieldType.BlockWithPoint),new Field(FieldType.BlockWithPoint),new Field(FieldType.BlockWithPoint),new Field(FieldType.BlockWithPoint),new Field(FieldType.BlockWithPoint),new Field(FieldType.Wall)          ,new Field(FieldType.BlockWithPoint),new Field(FieldType.Wall)          ,new Field(FieldType.Wall)          ,new Field(FieldType.Wall)          ,new Field(FieldType.Wall)          ],
        [new Field(FieldType.Wall)          ,new Field(FieldType.Wall)          ,new Field(FieldType.Wall)          ,new Field(FieldType.Wall)          ,new Field(FieldType.BlockWithPoint),new Field(FieldType.Wall)          ,new Field(FieldType.BlockWithPoint),new Field(FieldType.Wall)          ,new Field(FieldType.Wall)          ,new Field(FieldType.Wall)          ,new Field(FieldType.BlockWithPoint),new Field(FieldType.Wall)          ,new Field(FieldType.BlockWithPoint),new Field(FieldType.Wall)          ,new Field(FieldType.Wall)          ,new Field(FieldType.Wall)          ,new Field(FieldType.Wall)          ],
        [new Field(FieldType.Wall)          ,new Field(FieldType.BlockWithPoint),new Field(FieldType.BlockWithPoint),new Field(FieldType.BlockWithPoint),new Field(FieldType.BlockWithPoint),new Field(FieldType.BlockWithPoint),new Field(FieldType.BlockWithPoint),new Field(FieldType.BlockWithPoint),new Field(FieldType.Wall)          ,new Field(FieldType.BlockWithPoint),new Field(FieldType.BlockWithPoint),new Field(FieldType.BlockWithPoint),new Field(FieldType.BlockWithPoint),new Field(FieldType.BlockWithPoint),new Field(FieldType.BlockWithPoint),new Field(FieldType.BlockWithPoint),new Field(FieldType.Wall)          ],
        [new Field(FieldType.Wall)          ,new Field(FieldType.BlockWithPoint),new Field(FieldType.Wall)          ,new Field(FieldType.Wall)          ,new Field(FieldType.BlockWithPoint),new Field(FieldType.Wall)          ,new Field(FieldType.Wall)          ,new Field(FieldType.BlockWithPoint),new Field(FieldType.Wall)          ,new Field(FieldType.BlockWithPoint),new Field(FieldType.Wall)          ,new Field(FieldType.Wall)          ,new Field(FieldType.BlockWithPoint),new Field(FieldType.Wall)          ,new Field(FieldType.Wall)          ,new Field(FieldType.BlockWithPoint),new Field(FieldType.Wall)          ],
        [new Field(FieldType.Wall)          ,new Field(FieldType.BlockWithPoint),new Field(FieldType.BlockWithPoint),new Field(FieldType.Wall)          ,new Field(FieldType.BlockWithPoint),new Field(FieldType.BlockWithPoint),new Field(FieldType.BlockWithPoint),new Field(FieldType.BlockWithPoint),new Field(FieldType.BlockWithPacman),new Field(FieldType.BlockWithPoint),new Field(FieldType.BlockWithPoint),new Field(FieldType.BlockWithPoint),new Field(FieldType.BlockWithPoint),new Field(FieldType.Wall)          ,new Field(FieldType.BlockWithPoint),new Field(FieldType.BlockWithPoint),new Field(FieldType.Wall)          ],
        [new Field(FieldType.Wall)          ,new Field(FieldType.Wall)          ,new Field(FieldType.BlockWithPoint),new Field(FieldType.Wall)          ,new Field(FieldType.BlockWithPoint),new Field(FieldType.Wall)          ,new Field(FieldType.BlockWithPoint),new Field(FieldType.Wall)          ,new Field(FieldType.Wall)          ,new Field(FieldType.Wall)          ,new Field(FieldType.BlockWithPoint),new Field(FieldType.Wall)          ,new Field(FieldType.BlockWithPoint),new Field(FieldType.Wall)          ,new Field(FieldType.BlockWithPoint),new Field(FieldType.Wall)          ,new Field(FieldType.Wall)          ],
        [new Field(FieldType.Wall)          ,new Field(FieldType.BlockWithPoint),new Field(FieldType.BlockWithPoint),new Field(FieldType.BlockWithPoint),new Field(FieldType.BlockWithPoint),new Field(FieldType.Wall)          ,new Field(FieldType.BlockWithPoint),new Field(FieldType.BlockWithPoint),new Field(FieldType.Wall)          ,new Field(FieldType.BlockWithPoint),new Field(FieldType.BlockWithPoint),new Field(FieldType.Wall)          ,new Field(FieldType.BlockWithPoint),new Field(FieldType.BlockWithPoint),new Field(FieldType.BlockWithPoint),new Field(FieldType.BlockWithPoint),new Field(FieldType.Wall)          ],
        [new Field(FieldType.Wall)          ,new Field(FieldType.BlockWithPoint),new Field(FieldType.Wall)          ,new Field(FieldType.Wall)          ,new Field(FieldType.Wall)          ,new Field(FieldType.Wall)          ,new Field(FieldType.Wall)          ,new Field(FieldType.BlockWithPoint),new Field(FieldType.Wall)          ,new Field(FieldType.BlockWithPoint),new Field(FieldType.Wall)          ,new Field(FieldType.Wall)          ,new Field(FieldType.Wall)          ,new Field(FieldType.Wall)          ,new Field(FieldType.Wall)          ,new Field(FieldType.BlockWithPoint),new Field(FieldType.Wall)          ],
        [new Field(FieldType.Wall)          ,new Field(FieldType.BlockWithPoint),new Field(FieldType.BlockWithPoint),new Field(FieldType.BlockWithPoint),new Field(FieldType.BlockWithPoint),new Field(FieldType.BlockWithPoint),new Field(FieldType.BlockWithPoint),new Field(FieldType.BlockWithPoint),new Field(FieldType.BlockWithPoint),new Field(FieldType.BlockWithPoint),new Field(FieldType.BlockWithPoint),new Field(FieldType.BlockWithPoint),new Field(FieldType.BlockWithPoint),new Field(FieldType.BlockWithPoint),new Field(FieldType.BlockWithPoint),new Field(FieldType.BlockWithPoint),new Field(FieldType.Wall)          ],
        [new Field(FieldType.Wall)          ,new Field(FieldType.Wall)          ,new Field(FieldType.Wall)          ,new Field(FieldType.Wall)          ,new Field(FieldType.Wall)          ,new Field(FieldType.Wall)          ,new Field(FieldType.Wall)          ,new Field(FieldType.Wall)          ,new Field(FieldType.Wall)          ,new Field(FieldType.Wall)          ,new Field(FieldType.Wall)          ,new Field(FieldType.Wall)          ,new Field(FieldType.Wall)          ,new Field(FieldType.Wall)          ,new Field(FieldType.Wall)          ,new Field(FieldType.Wall)          ,new Field(FieldType.Wall)          ],
    ];
    return playground;
}

class Field {
    public readonly FIELD_SIZE:number = 25;
    public fieldType:FieldType;
    constructor(type:FieldType) {
        this.fieldType = type;
    }
    public drawField(ctx:CanvasRenderingContext2D, x:number, y:number){
        ctx.beginPath();
        let color = "black";
        if(this.fieldType == FieldType.Wall){
            color = "blue";
        }
        else if(this.fieldType == FieldType.None){
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
        else if(this.fieldType == FieldType.BlockWithPacman){
            ctx.beginPath();
            color = "yellow";
            ctx.fillStyle = color;
            ctx.arc(x*this.FIELD_SIZE+this.FIELD_SIZE/2,y*this.FIELD_SIZE+this.FIELD_SIZE/2,this.FIELD_SIZE/2-3,0,Math.PI*2);
            ctx.fill();
        }
    }
}
class Pacman extends Field{
    public Row:number;
    public Col:number;
    public Direction:Direction;
    constructor(type:FieldType,x:number,y:number) {
        super(type);
        this.Row = x;
        this.Col = y;
        this.Direction = Direction.Front;
    }
    public move(fields:Field[][], event,context:CanvasRenderingContext2D):number {
        let nextField: Field = null;
        let n = 0
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
function drawPlayground(context:CanvasRenderingContext2D,fields:Field[][]){

    for (let i = 0; i < fields.length; i++){
        let row = fields[i];
        for(let j = 0; j < row.length; j++){
            row[j].drawField(context,j,i);
        }
    }
}


function init(){
    const canvas: any = document.getElementById("playground");
    const context: CanvasRenderingContext2D = canvas.getContext("2d");
    let fields:Field[][] = generatePlayground();
    let pacman = new Pacman(FieldType.BlockWithPacman,14,8);
    let count = 0;
    drawPlayground(context,fields);
    document.addEventListener("keydown", event =>{
        count += pacman.move(fields,event,context);
        drawPlayground(context,fields);
        console.log(count);
    });
}

document.addEventListener('DOMContentLoaded', (event) => {
    init();
});