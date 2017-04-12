class Piece{
    constructor(x,y,size,ctx,team){
        this.x = x;
        this.y = y;
        this.posX = x * size + size;
        this.posY = y * size + size;
        this.selected = false;
        this.hasPiece = false;
        this.team = -1;
        this.obj = -1;
    }

    setMoveFrom(x,y){
        this.fromX = x;
        this.fromY = y;
    }

    setMoveTo(x,y){
        this.toX = x;
        this.toY = y;
    }

    updatePiece(piece){
        this.team = piece.team;
        this.obj = piece.obj;
        this.hasPiece = true;
        this.selected = false ;
    }
    resetPiece(){
        this.selected = false;
        this.hasPiece = false;
        this.team = -1;
        this.obj = -1;
    }
    drawImg(obj,team){
        this.obj = obj;
        this.team = team;
        this.hasPiece = true;
        ctx.drawImage(obj,this.posX,this.posY,size,size);
    }

    drawImgUpdate(obj,team,posX,posY) {
        this.obj = obj;
        this.team = team;
        this.hasPiece = true;
        ctx.drawImage(obj,posX,posY,size,size);
    }
}