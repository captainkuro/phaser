
BasicGame.Game = function (game) {

};

BasicGame.Game.prototype = {
  preload: function () {
    this.load.image('sea', 'assets/sea.png');
    this.load.image('bullet', 'assets/bullet.png');
  },

  create: function () {

    this.sea = this.add.tileSprite(0, 0, 800, 600, 'sea');

    this.bullet = this.add.sprite(400, 300, 'bullet');
  },

  update: function () {
    //  Honestly, just about anything could go here. It's YOUR game after all. Eat your heart out!
    this.sea.tilePosition.y += 0.2;
  },

  quitGame: function (pointer) {

    //  Here you should destroy anything you no longer need.
    //  Stop music, delete sprites, purge caches, free resources, all that good stuff.

    //  Then let's go back to the main menu.
    this.state.start('MainMenu');

  }

};
