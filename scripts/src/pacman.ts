enum FieldType {
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
        [new Field(FieldType.Wall)          ,new Field(FieldType.Wall)          ,new Field(FieldType.Wall)          ,new Field(FieldType.Wall)          ,new Field(FieldType.BlockWithPoint),new Field(FieldType.Wall)          ,new Field(FieldType.BlockWithPoint),new Field(FieldType.None)          ,new Field(FieldType.NoneWithGhost) ,new Field(FieldType.None)         ,new Field(FieldType.BlockWithPoint),new Field(FieldType.Wall)          ,new Field(FieldType.BlockWithPoint),new Field(FieldType.Wall)          ,new Field(FieldType.Wall)          ,new Field(FieldType.Wall)          ,new Field(FieldType.Wall)          ],
        [new Field(FieldType.BlockNormal)   ,new Field(FieldType.BlockNormal)   ,new Field(FieldType.BlockNormal)   ,new Field(FieldType.BlockNormal)   ,new Field(FieldType.BlockWithPoint),new Field(FieldType.BlockNormal)   ,new Field(FieldType.BlockWithPoint),new Field(FieldType.None)          ,new Field(FieldType.None)          ,new Field(FieldType.None)          ,new Field(FieldType.BlockWithPoint),new Field(FieldType.BlockNormal)   ,new Field(FieldType.BlockWithPoint),new Field(FieldType.BlockNormal)   ,new Field(FieldType.BlockNormal)   ,new Field(FieldType.BlockNormal)   ,new Field(FieldType.BlockNormal)   ],
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
    public drawField(ctx:CanvasRenderingContext2D, x:number, y:number,playCount:number){
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
            let image = new Image(10,10);
            image.src = "https://raw.githubusercontent.com/WMC-AHIF-2021/Pac-Man/master/imgs/Blinky.png";
            ctx.drawImage(image,x*this.FIELD_SIZE,y*this.FIELD_SIZE,20,20);
        }
    }
}
class Ghost{
    public Row:number;
    public Col:number;
    public PrevField:FieldType;
    constructor(row:number, col:number, prevField:FieldType) {
        this.Row = row;
        this.Col = col;
        this.PrevField = prevField;
    }
    public moveGhost(fields:Field[][], context:CanvasRenderingContext2D, pacman:Pacman):void{
        let alreadymoved: boolean = false;
        if (this.Col - pacman.Col < 0){
            if (fields[this.Row][this.Col + 1].fieldType != FieldType.Wall && fields[this.Row][this.Col + 1].fieldType != FieldType.None){
                fields[this.Row][this.Col].fieldType = this.PrevField;
                this.PrevField = fields[this.Row][this.Col + 1].fieldType;
                fields[this.Row][this.Col + 1].fieldType = FieldType.Ghost;
                this.Col++;
                alreadymoved = true;
            }
        }
        if (this.Col-pacman.Col > 0 && alreadymoved === false){
            if (fields[this.Row][this.Col - 1].fieldType != FieldType.Wall && fields[this.Row][this.Col - 1].fieldType != FieldType.None){
                fields[this.Row][this.Col].fieldType = this.PrevField;
                this.PrevField = fields[this.Row][this.Col - 1].fieldType;
                fields[this.Row][this.Col - 1].fieldType = FieldType.Ghost;
                this.Col--;
                alreadymoved = true;
            }
        }
        if (this.Row - pacman.Row < 0 && alreadymoved === false){
            if (fields[this.Row + 1][this.Col].fieldType != FieldType.Wall && fields[this.Row + 1][this.Col].fieldType != FieldType.None){
                fields[this.Row][this.Col].fieldType = this.PrevField;
                this.PrevField = fields[this.Row + 1][this.Col].fieldType;
                fields[this.Row + 1][this.Col].fieldType = FieldType.Ghost;
                this.Row++;
                alreadymoved = true;
            }
        }
        if (this.Row - pacman.Row > 0 && alreadymoved === false){
            if (fields[this.Row - 1][this.Col].fieldType != FieldType.Wall && fields[this.Row - 1][this.Col].fieldType != FieldType.None){
                fields[this.Row][this.Col].fieldType = this.PrevField;
                this.PrevField = fields[this.Row - 1][this.Col].fieldType;
                fields[this.Row - 1][this.Col].fieldType = FieldType.Ghost;
                this.Row--;
                alreadymoved = true;
            }
        }
        if (alreadymoved === false){
            if (fields[this.Row][this.Col+1].fieldType == FieldType.BlockWithPoint || fields[this.Row][this.Col+1].fieldType == FieldType.BlockWithPoint){
                fields[this.Row][this.Col].fieldType = this.PrevField;
                this.PrevField = fields[this.Row][this.Col + 1].fieldType;
                fields[this.Row][this.Col + 1].fieldType = FieldType.Ghost;
                this.Col++;
            }
            else if(fields[this.Row][this.Col-1].fieldType == FieldType.BlockWithPoint || fields[this.Row][this.Col-1].fieldType == FieldType.BlockWithPoint){
                fields[this.Row][this.Col].fieldType = this.PrevField;
                this.PrevField = fields[this.Row][this.Col - 1].fieldType;
                fields[this.Row][this.Col - 1].fieldType = FieldType.Ghost;
                this.Col--;
            }
            else if(fields[this.Row+1][this.Col].fieldType == FieldType.BlockWithPoint || fields[this.Row+1][this.Col].fieldType == FieldType.BlockWithPoint){
                fields[this.Row][this.Col].fieldType = this.PrevField;
                this.PrevField = fields[this.Row + 1][this.Col].fieldType;
                fields[this.Row + 1][this.Col].fieldType = FieldType.Ghost;
                this.Row++;
            }
            else if(fields[this.Row-1][this.Col].fieldType == FieldType.BlockWithPoint || fields[this.Row-1][this.Col].fieldType == FieldType.BlockWithPoint){
                fields[this.Row][this.Col].fieldType = this.PrevField;
                this.PrevField = fields[this.Row - 1][this.Col].fieldType;
                fields[this.Row - 1][this.Col].fieldType = FieldType.Ghost;
                this.Row--;
            }
        }
    }
}
class Pacman extends Field{
    public Row:number;
    public Col:number;
    constructor(type:FieldType,x:number,y:number) {
        super(type);
        this.Row = x;
        this.Col = y;
    }
    public move(fields:Field[][], event, context:CanvasRenderingContext2D):number {
        let nextField: Field = null;
        let n = 0
        switch (event.key) {
            case "d":
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
            case "a":
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
            case "w":
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
            case "s":
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
function drawPlayground(context:CanvasRenderingContext2D,fields:Field[][], playCount:number, count:number){
    context.fillStyle = "white";
    context.fillText(`Count: ${count}`,0,100);
    for (let i = 0; i < fields.length; i++){
        let row = fields[i];
        for(let j = 0; j < row.length; j++){
            row[j].drawField(context,j,i,playCount);
        }
    }
}


function init(){
    const canvas: any = document.getElementById("playground");
    const context: CanvasRenderingContext2D = canvas.getContext("2d");
    let fields:Field[][] = generatePlayground();
    let pacman = new Pacman(FieldType.BlockWithPacman,14,8);
    let ghost = new Ghost(8,8,FieldType.None);
    let count = 0;
    let playCount = 0;
    drawPlayground(context,fields,playCount,count);
    document.addEventListener("keyup", event =>{
        count += pacman.move(fields,event,context);
        ghost.moveGhost(fields,context,pacman);
        if (count == 154){
            console.log("You won!!!");
            location.reload();
        }
        else if(ghost.Col == pacman.Col && ghost.Row == pacman.Row){
            console.log(`You lost!!! Score: ${count}`);
            location.reload();
        }
        playCount++;
        drawPlayground(context,fields,playCount,count);
        console.log(`Score: ${count}; Pacman(${pacman.Col}|${pacman.Row}); Ghost(${ghost.Col}|${ghost.Row})`);
    });
}

document.addEventListener('DOMContentLoaded', (event) => {
    init();
});