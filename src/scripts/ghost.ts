import{Field,FieldType} from "./field.js"
import{Pacman} from "./pacman.js"

export class Ghost{
    public Row:number;
    public Col:number;
    public PrevField:FieldType;
    constructor(row:number, col:number, prevField:FieldType) {
        this.Row = row;
        this.Col = col;
        this.PrevField = prevField;
    }
    private  moveCol(fields:Field[][], pacman:Pacman):boolean{
        let alreadyMoved:boolean = false;
        if (this.Col - pacman.Col < 0){
            if (fields[this.Row][this.Col + 1].fieldType != FieldType.Wall && fields[this.Row][this.Col + 1].fieldType != FieldType.None){
                fields[this.Row][this.Col].fieldType = this.PrevField;
                this.PrevField = fields[this.Row][this.Col + 1].fieldType;
                fields[this.Row][this.Col + 1].fieldType = FieldType.Ghost;
                this.Col++;
                alreadyMoved = true;
            }
        }
        else{
            if (fields[this.Row][this.Col - 1].fieldType != FieldType.Wall && fields[this.Row][this.Col - 1].fieldType != FieldType.None){
                fields[this.Row][this.Col].fieldType = this.PrevField;
                this.PrevField = fields[this.Row][this.Col - 1].fieldType;
                fields[this.Row][this.Col - 1].fieldType = FieldType.Ghost;
                this.Col--;
                alreadyMoved = true;
            }
        }
        return  alreadyMoved;
    }
    private moveRow(fields:Field[][], pacman:Pacman):boolean{
        let alreadymoved: boolean = false;
        if (this.Row - pacman.Row < 0 && alreadymoved === false){
            if (fields[this.Row + 1][this.Col].fieldType != FieldType.Wall && fields[this.Row + 1][this.Col].fieldType != FieldType.None){
                fields[this.Row][this.Col].fieldType = this.PrevField;
                this.PrevField = fields[this.Row + 1][this.Col].fieldType;
                fields[this.Row + 1][this.Col].fieldType = FieldType.Ghost;
                this.Row++;
                alreadymoved = true;
            }
        }
        else {
            if (fields[this.Row - 1][this.Col].fieldType != FieldType.Wall && fields[this.Row - 1][this.Col].fieldType != FieldType.None){
                fields[this.Row][this.Col].fieldType = this.PrevField;
                this.PrevField = fields[this.Row - 1][this.Col].fieldType;
                fields[this.Row - 1][this.Col].fieldType = FieldType.Ghost;
                this.Row--;
                alreadymoved = true;
            }
        }
        return alreadymoved;
    }
    public moveDefaultCol(fields:Field[][], pacman:Pacman):boolean{
        if (fields[this.Row][this.Col+1].fieldType == FieldType.BlockWithPoint || fields[this.Row][this.Col+1].fieldType == FieldType.BlockWithPoint){
            fields[this.Row][this.Col].fieldType = this.PrevField;
            this.PrevField = fields[this.Row][this.Col + 1].fieldType;
            fields[this.Row][this.Col + 1].fieldType = FieldType.Ghost;
            this.Col++;
            return true;
        }
        else if(fields[this.Row][this.Col-1].fieldType == FieldType.BlockWithPoint || fields[this.Row][this.Col-1].fieldType == FieldType.BlockWithPoint){
            fields[this.Row][this.Col].fieldType = this.PrevField;
            this.PrevField = fields[this.Row][this.Col - 1].fieldType;
            fields[this.Row][this.Col - 1].fieldType = FieldType.Ghost;
            this.Col--;
            return true;
        }
        return false;
    }
    public moveDefaultRow(fields:Field[][], pacman:Pacman):boolean{
         if(fields[this.Row+1][this.Col].fieldType == FieldType.BlockWithPoint || fields[this.Row+1][this.Col].fieldType == FieldType.BlockWithPoint){
            fields[this.Row][this.Col].fieldType = this.PrevField;
            this.PrevField = fields[this.Row + 1][this.Col].fieldType;
            fields[this.Row + 1][this.Col].fieldType = FieldType.Ghost;
            this.Row++;
            return true;
        }
        else if(fields[this.Row-1][this.Col].fieldType == FieldType.BlockWithPoint || fields[this.Row-1][this.Col].fieldType == FieldType.BlockWithPoint){
            fields[this.Row][this.Col].fieldType = this.PrevField;
            this.PrevField = fields[this.Row - 1][this.Col].fieldType;
            fields[this.Row - 1][this.Col].fieldType = FieldType.Ghost;
            this.Row--;
            return true;
        }
        return false;
    }
    public moveGhost(fields:Field[][], pacman:Pacman):void{
        let alreadymoved: boolean = false;
        if (Math.abs(this.Row - pacman.Row) > Math.abs((this.Col - pacman.Col))){
            alreadymoved = this.moveRow(fields,pacman);
            if (!alreadymoved){
                alreadymoved = this.moveCol(fields,pacman);
            }
            if (!alreadymoved){
                alreadymoved = this.moveDefaultCol(fields,pacman);
            }
            if (!alreadymoved){
                alreadymoved = this.moveDefaultRow(fields,pacman);
            }
        }
        else {
            alreadymoved = this.moveCol(fields,pacman);
            if (!alreadymoved){
                alreadymoved = this.moveRow(fields,pacman);
            }
            if (!alreadymoved){
                alreadymoved = this.moveDefaultRow(fields,pacman);
            }
            if (!alreadymoved){
                alreadymoved = this.moveCol(fields,pacman);
            }
        }
    }
}