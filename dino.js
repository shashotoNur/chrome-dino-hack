
// Browse to chrome://dino
// Open the web console
// Paste any code whichever you like and press Enter
// NOTE: Apply the two codes below sequentially

// 1. Make Dino Immortal
[Runner.prototype.gameOver, Runner.prototype.oldGameOver] = [() => {}, Runner.prototype.gameOver];

// 2. Make Dino Mortal Again
Runner.prototype.gameOver = Runner.prototype.oldGameOver;

// 3. Get the Highest possible score
Runner.instance_.distanceRan = (99999 * 30);
Runner.instance_.gameOver();
