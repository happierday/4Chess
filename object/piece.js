class Piece{
    constructor(x,y,value){
        this.x = x;
        this.y = y;
        this.posX = x * size + size;
        this.posY = y * size + size;
        this.selected = false;
        this.hasPiece = false;

    }
    resetSelect(){
        this.selected = false;
    }
    setHasPiece(state){
        this.hasPiece = state;
    }
    drawImg(obj){
        this.hasPiece = true;
        ctx.drawImage(obj,this.posX,this.posY,size,size);
    }
}