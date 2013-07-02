var Hero = function () {
	lattice.zoneChecker.zonify(this);
	this.shape = 'rectangle';
	this.width = 20;
	this.height = 20;

	this.xLeft = canvas.width / 2;
	this.xRight = this.xLeft + this.width;
	this.yBottom = canvas.height / 2;
	this.yTop = this.yBottom - this.height;
	
};

Hero.prototype.draw = function (ctx) {
	ctx.fillStyle = "rgb(0, 0, 0)";
	ctx.beginPath();
	ctx.moveTo(this.xLeft, this.yBottom);
	ctx.lineTo(this.xRight, this.yBottom);
	ctx.lineTo(this.xRight, this.yTop);
	ctx.lineTo(this.xLeft, this.yTop);
	ctx.fill();
};

Hero.prototype.update = function (elapsedTime) {

	// Player holding up
	if (lattice.inputManager.keyIsHeld(38)) { 
		this.yBottom -= 100 * elapsedTime;
		this.yTop -= 100 * elapsedTime;
	}
	
	// Player holding down
	if (lattice.inputManager.keyIsHeld(40)) { 
		this.yBottom += 100 * elapsedTime;
		this.yTop += 100 * elapsedTime;
	}
	
	// Player holding left
	if (lattice.inputManager.keyIsHeld(37)) { 
		this.xLeft -= 100 * elapsedTime;
		this.xRight -= 100 * elapsedTime;
	}
	
	// Player holding right
	if (lattice.inputManager.keyIsHeld(39)) {
		this.xLeft += 100 * elapsedTime;
		this.xRight += 100 * elapsedTime;
	}
};