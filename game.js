var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: {
    preload: preload,
    create: create,
    update: update
  }
};

var game = new Phaser.Game(config);

function preload() {
  this.load.image("background", ""); // put a link to your background here
  this.load.spritesheet("character", "", { frameWidth: 48, frameHeight: 24}); // put a link to your character here
}

function create() {
  this.add.image(400, 300, "background");
}

function update() {

}