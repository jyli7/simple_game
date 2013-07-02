var Hero = function () {
	this.x = canvas.width / 2;
	this.y = canvas.height / 2;
	this.width = 20;
	this.height = 20;
};

Hero.prototype.draw = function (ctx) {
	ctx.fillStyle = "rgb(0, 0, 0)";
	ctx.beginPath();
	ctx.moveTo(this.x, this.y);
	ctx.lineTo(this.x + this.width, this.y);
	ctx.lineTo(this.x + this.width, this.y + this.height);
	ctx.lineTo(this.x, this.y + this.height);
	ctx.fill();
};

Hero.prototype.update = function (elapsedTime) {
	if (lattice.inputManager.keyIsHeld)
	// Player holding up
	if (lattice.inputManager.keyIsHeld(38)) { this.y -= this.extraSpeed * elapsedTime; }
	
	// Player holding down
	if (lattice.inputManager.keyIsHeld(40)) { this.y += this.extraSpeed * elapsedTime; }
	
	// Player holding left
	if (lattice.inputManager.keyIsHeld(37)) { this.x -= this.extraSpeed * elapsedTime; }
	
	// Player holding right
	if (lattice.inputManager.keyIsHeld(39)) { this.x += this.extraSpeed * elapsedTime; }
};