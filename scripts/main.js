const game = new Game()
let gameStarted = false

// Load game assets
function preload() {
	game.preload()
}

// Setup game
function setup() {
	createCanvas(1140, 1140)
	
	buttonGreen = createButton('choose green');
	buttonGreen.position(1000, 570);
	buttonGreen.mousePressed(draw);

	buttonRed = createButton('choose red');
	buttonRed.position(1100, 570);
	buttonRed.mousePressed(draw);

	buttonOrange = createButton('choose orange');
	buttonOrange.position(1200, 570);
	buttonOrange.mousePressed(draw);
}

function draw(event) {
	if (event) 
	gameStarted = true
	
	if (gameStarted === true) {
		loop()
		buttonGreen.hide()
		buttonRed.hide()
		buttonOrange.hide()
	} else {
		noLoop()
		buttonGreen.show()
		buttonRed.show()
		buttonOrange.show()
	}

	game.draw()	
}

function keyPressed() {
	// if (keyCode === 32) {
	// 	game.player.jump()
	// }
}