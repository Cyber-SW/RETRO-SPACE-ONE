const game = new Game()

const orange = document.querySelector(".orange-ship").addEventListener("click", draw)
const green = document.querySelector(".green-ship").addEventListener("click", draw)
const red = document.querySelector(".red-ship").addEventListener("click", draw)
let gameStarted = false

// Load game assets
function preload() {
	game.preload()
}

// Setup game
function setup() {
	createCanvas(1140, 1140)
}

function draw(event) {
	if (event) gameStarted = true
	
	if (gameStarted === true) loop()
 	else noLoop()

	game.draw()

	

	
	

	
		
	
}

function keyPressed() {
	// if (keyCode === 32) {
	// 	game.player.jump()
	// }
}