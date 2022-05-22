import { FieldType } from "../../build/field.js";
export class Ghost {
    constructor(row, col, prevField) {
        this.Row = row;
        this.Col = col;
        this.PrevField = prevField;
    }
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