var playingState = function () {
	_lattice_.update(_lattice_.loopTimeElapsed);
	_lattice_.draw(_lattice_.ctx);
}