function Game() {

}

Game.prototype.init = function() {
    this.gameWorld = new GameWorld(); 
}

Game.prototype.start = function() {
    BillardsGame.init();
    BillardsGame.mainLoop();

}

Game.prototype.mainLoop = function() {

    Canvas.clear();

    BillardsGame.gameWorld.update();
    BillardsGame.gameWorld.draw();
    Mouse.reset(); 

    requestAnimationFrame(BillardsGame.mainLoop)
}

let BillardsGame = new Game();