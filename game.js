;(function(exports) {
  var Game = function(canvasId, width, height) {
  };

  Game.prototype = {
    init: function() {
      lattice.levelManager.addLevel(1, new FirstLevel(this));
      lattice.stateManager.addState('playing', playingState);
      lattice.stateManager.currentState = 'playing';
    },

    update: function() {
    },

    draw: function(ctx) {
      lattice.ctx.clearRect(0, 0, lattice.canvas.width, lattice.canvas.height);
    },

  };

  exports.Game = Game;
})(this);