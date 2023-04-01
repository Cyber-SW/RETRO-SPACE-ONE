const game = new Game()
let gameStarted = false

// Load game assets
function preload() {
	game.preload()
}

let buttonGreen
let buttonRed
let buttonOrange

// Setup game
function setup() {
	createCanvas(1140, 1140)
	
	buttonGreen = createButton("choose green", "off")
	buttonGreen.position(1000, 570)
	buttonGreen.mousePressed(shipGreen)

	buttonRed = createButton("choose red", "off")
	buttonRed.position(1100, 570)
	buttonRed.mousePressed(shipRed)

	buttonOrange = createButton("choose orange", "off")
	buttonOrange.position(1200, 570)
	buttonOrange.mousePressed(shipOrange)
}

function shipGreen() {
	buttonGreen = buttonGreen.value("on")
	gameStarted = true
	if (gameStarted) draw()
	
}

function shipRed() {
	buttonRed = buttonRed.value("on")
	gameStarted = true
	if (gameStarted) draw()
	
}

function shipOrange() {
	buttonOrange = buttonOrange.value("on")
	gameStarted = true
	if (gameStarted) draw()
	
}

function draw() {	
	if (gameStarted === true) {
		loop()
		buttonGreen.hide()
		buttonRed.hide()
		buttonOrange.hide()
	} else if (gameStarted === false) {
		noLoop()
		buttonGreen.show()
		buttonRed.show()
		buttonOrange.show()
	}

	game.draw()	
}
