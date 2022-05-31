import {Ghost} from "./ghost.js"
import {Field, FieldType} from "./field.js";

function generatePlayground():Field[][]{
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

export class Pacman extends Field{
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


function init(mode: string){
    const canvas: any = document.getElementById("playground");
    const context: CanvasRenderingContext2D = canvas.getContext("2d");
    let fields:Field[][] = generatePlayground();
    let pacman = new Pacman(FieldType.BlockWithPacman,14,8);
    let ghost = new Ghost(8,8,FieldType.None);
    let count = 0;
    let playCount = 0;
    let drawagain:boolean = true;

    drawPlayground(context,fields,playCount,count);
    let image = new Image(50,50);
    image.src = "imgs/trophae.png";
    let image2 = new Image(50,50);
    image2.src = "imgs/Blinky.png";
    context.font = "20px Arial";
    context.fillStyle = "white";
    context.fillText(`Count: ${count}`,0, 525);

    document.addEventListener("keyup", event =>{
        if (count%154 == 0 && drawagain){
            fields = generatePlayground();
            pacman.Col = 8;
            pacman.Row = 14;
            ghost.Col = 8;
            ghost.Row = 8;
            ghost.PrevField = FieldType.None;
            drawPlayground(context,fields,playCount,count);
            drawagain = false;
        }
        else if(ghost.Col == pacman.Col && ghost.Row == pacman.Row){
            context.clearRect(0,0,canvas.width,canvas.height);
            context.beginPath();
            context.fillStyle = "white";
            context.rect(0,200, canvas.width, 150);
            context.fill();
            context.font = "50px Arial";
            context.fillStyle = "black";
            context.fillText("You lost!!!",20,270,canvas.width);
            context.font = "12px Arial";
            context.drawImage(image2,300,235,80,80);
            context.fillText("Tap any Key to continue...", 25,315, canvas.width);
            document.addEventListener("keyup", event =>{
                location.reload();
            });
            sendScoreToServer(count);
        }
        else{
            if(mode === "double"){
                context.clearRect(0,500,500,50)
                count += pacman.move(fields,event,context);
                ghost.moveTwoPlayers(fields,pacman);
                context.fillStyle = "white";
                context.fillText(`Count: ${count}`,0, 525);
                playCount++;
                drawPlayground(context,fields,playCount,count);
                drawagain = true;
            }
            else {
                context.clearRect(0,500,500,50)
                count += pacman.move(fields,event,context);
                ghost.moveGhost(fields,pacman);
                context.fillStyle = "white";
                context.fillText(`Count: ${count}`,0, 525);
                playCount++;
                drawPlayground(context,fields,playCount,count);
                drawagain = true;
            }
        }
    });
}

document.addEventListener('DOMContentLoaded', (event) => {
    init("");
});