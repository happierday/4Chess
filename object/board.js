

function draw(id,x,y,size){
	this.id = id;
	this.x = x;
	this.y = y;
	this.size = size;
	//var board= [];
	var posX = x;
	var posY = y;

	var board = [];
	//const canvas = document.getElementById("canvas");
	var ctx = id.getContext("2d");
	//var x = 100,  y= 160;
	//var size = 40;
	//var posX = x, posY = y;
	for(var i = 0; i< 16 ; i++) board[i] = [];
	for(var i = 0; i < 16; i++) {
		for (var j = 0; j < 16; j++) {
			posX = x + size * j;
			posY = y + size * i;
			if ((j < 4 || j > 11) && (i < 4 || i > 11)) {
				board[i][j] = -1;
			} else {
				board[i][j] = 1;
				//var ctx = id.getContext("2d");
				ctx.beginPath();
				ctx.rect(posX, posY, size, size);
				if ((i + j) % 2 != 0) {
					ctx.fillStyle = "#F5F5DC";
				} else {
					ctx.fillStyle = "#A9A9A9";
				}
				ctx.fill();
			}

		}
	}
}


