import { FieldType } from "./field.js";
export class Ghost {
    constructor(row, col, prevField) {
        this.Row = row;
        this.Col = col;
        this.PrevField = prevField;
    }
    /*public moveTwoPlayers(fields:Field[][], event){
        let nextField: Field = null;
        let n = 0
        switch (event.key) {
            case "ö":
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
            case "k":
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
            case "o":
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
            case "l":
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
    }*/
    moveCol(fields, pacman) {
        let alreadyMoved = false;
        if (this.Col - pacman.Col < 0) {
            if (fields[this.Row][this.Col + 1].fieldType != FieldType.Wall && fields[this.Row][this.Col + 1].fieldType != FieldType.None) {
                fields[this.Row][this.Col].fieldType = this.PrevField;
                this.PrevField = fields[this.Row][this.Col + 1].fieldType;
                fields[this.Row][this.Col + 1].fieldType = FieldType.Ghost;
                this.Col++;
                alreadyMoved = true;
            }
        }
        else {
            if (fields[this.Row][this.Col - 1].fieldType != FieldType.Wall && fields[this.Row][this.Col - 1].fieldType != FieldType.None) {
                fields[this.Row][this.Col].fieldType = this.PrevField;
                this.PrevField = fields[this.Row][this.Col - 1].fieldType;
                fields[this.Row][this.Col - 1].fieldType = FieldType.Ghost;
                this.Col--;
                alreadyMoved = true;
            }
        }
        return alreadyMoved;
    }
    moveRow(fields, pacman) {
        let alreadymoved = false;
        if (this.Row - pacman.Row < 0 && alreadymoved === false) {
            if (fields[this.Row + 1][this.Col].fieldType != FieldType.Wall && fields[this.Row + 1][this.Col].fieldType != FieldType.None) {
                fields[this.Row][this.Col].fieldType = this.PrevField;
                this.PrevField = fields[this.Row + 1][this.Col].fieldType;
                fields[this.Row + 1][this.Col].fieldType = FieldType.Ghost;
                this.Row++;
                alreadymoved = true;
            }
        }
        else {
            if (fields[this.Row - 1][this.Col].fieldType != FieldType.Wall && fields[this.Row - 1][this.Col].fieldType != FieldType.None) {
                fields[this.Row][this.Col].fieldType = this.PrevField;
                this.PrevField = fields[this.Row - 1][this.Col].fieldType;
                fields[this.Row - 1][this.Col].fieldType = FieldType.Ghost;
                this.Row--;
                alreadymoved = true;
            }
        }
        return alreadymoved;
    }
    moveDefaultCol(fields, pacman) {
        if (fields[this.Row][this.Col + 1].fieldType == FieldType.BlockWithPoint || fields[this.Row][this.Col + 1].fieldType == FieldType.BlockWithPoint) {
            fields[this.Row][this.Col].fieldType = this.PrevField;
            this.PrevField = fields[this.Row][this.Col + 1].fieldType;
            fields[this.Row][this.Col + 1].fieldType = FieldType.Ghost;
            this.Col++;
            return true;
        }
        else if (fields[this.Row][this.Col - 1].fieldType == FieldType.BlockWithPoint || fields[this.Row][this.Col - 1].fieldType == FieldType.BlockWithPoint) {
            fields[this.Row][this.Col].fieldType = this.PrevField;
            this.PrevField = fields[this.Row][this.Col - 1].fieldType;
            fields[this.Row][this.Col - 1].fieldType = FieldType.Ghost;
            this.Col--;
            return true;
        }
        return false;
    }
    moveDefaultRow(fields, pacman) {
        if (fields[this.Row + 1][this.Col].fieldType == FieldType.BlockWithPoint || fields[this.Row + 1][this.Col].fieldType == FieldType.BlockWithPoint) {
            fields[this.Row][this.Col].fieldType = this.PrevField;
            this.PrevField = fields[this.Row + 1][this.Col].fieldType;
            fields[this.Row + 1][this.Col].fieldType = FieldType.Ghost;
            this.Row++;
            return true;
        }
        else if (fields[this.Row - 1][this.Col].fieldType == FieldType.BlockWithPoint || fields[this.Row - 1][this.Col].fieldType == FieldType.BlockWithPoint) {
            fields[this.Row][this.Col].fieldType = this.PrevField;
            this.PrevField = fields[this.Row - 1][this.Col].fieldType;
            fields[this.Row - 1][this.Col].fieldType = FieldType.Ghost;
            this.Row--;
            return true;
        }
        return false;
    }
    moveGhost(fields, pacman) {
        let alreadymoved = false;
        if (Math.abs(this.Row - pacman.Row) > Math.abs((this.Col - pacman.Col))) {
            alreadymoved = this.moveRow(fields, pacman);
            if (!alreadymoved) {
                alreadymoved = this.moveCol(fields, pacman);
            }
            if (!alreadymoved) {
                alreadymoved = this.moveDefaultCol(fields, pacman);
            }
            if (!alreadymoved) {
                alreadymoved = this.moveDefaultRow(fields, pacman);
            }
        }
        else {
            alreadymoved = this.moveCol(fields, pacman);
            if (!alreadymoved) {
                alreadymoved = this.moveRow(fields, pacman);
            }
            if (!alreadymoved) {
                alreadymoved = this.moveDefaultRow(fields, pacman);
            }
            if (!alreadymoved) {
                alreadymoved = this.moveCol(fields, pacman);
            }
        }
    }
}
//# sourceMappingURL=ghost.js.map