var canvas;
var backgroundImage, spiderMan1_img, spiderMan2_img, track;
var lifeImage;
var database, gameState;
var form, player, playerCount;
var allPlayers, spiderMan1, spiderMan2;
var spiderMen = [];

function preload() {
  backgroundImage = loadImage("./assets/BackgroundImage.png");
  spiderMan1_img = loadImage("./assets/Spider-Man1.png");
  spiderMan2_img = loadImage("./assets/Spider-Man2 copy.png");
//   webshoot1_img = loadImage("./assets/webshoot1.png");
//   webshoot2_img = loadImage("./assets/webshoot2.png")
}

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    database = firebase.database();
    game = new Game()
    game.getState();
    game.start();

    
}


function draw() {
    background(backgroundImage);
    
    if (playerCount === 2) {
        game.update(1)
    }

    if (gameState === 1) {
        game.play();
        
        
        
        
        system = new System()
        security = new Security()
        // code = new Code()
    }

}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

