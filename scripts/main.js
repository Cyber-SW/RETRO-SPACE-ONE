let game = new Game()
let gameStarted = false
let music
let music2

// Load game assets
function preload() {
	game.preload()
}

const buttonStart = document.querySelector(".start-btn-show")
buttonStart.addEventListener("click", createGame)
const headlineStart = document.querySelector(".headline-container")

const buttonContainer = document.querySelector(".btn-container-hide")
const chooseShipContainer = document.querySelector(".choose-ship-container-hide")
const container = document.querySelector(".container-hide")
const shipAlign = document.querySelector(".ship-spec-align-hide")

let buttonGreen = document.querySelector(".btn-green")
buttonGreen.addEventListener("click", shipGreen)
let buttonRed = document.querySelector(".btn-red")
buttonRed.addEventListener("click", shipRed)
let buttonOrange = document.querySelector(".btn-orange")
buttonOrange.addEventListener("click", shipOrange)

const buttonLosingsreenContainer = document.querySelector(".losingscreen-container-hide")
const buttonLosingscreen = document.querySelector(".btn-losingscreen")
buttonLosingscreen.addEventListener("click", createNewGame)


// Setup game
function setup() {
	let canvasWidth = windowHeight / 0.94
	let canvasHeight = windowHeight / 0.94

	createCanvas(canvasWidth, canvasHeight)

	orbitronBlack = loadFont("assets/font/Orbitron-Black.ttf")
	music = lobbyMusic = loadSound("assets/music/Synthwave goose - Blade Runner 2049.mp3")
	music2 = lobbyMusic = loadSound("assets/music/Future Club.mp4")
}

function createGame() {
	buttonStart.classList.toggle("start-btn-hide")
	headlineStart.classList.toggle("headline-container-hide")

	buttonContainer.classList.remove("btn-container-hide")
	buttonContainer.classList.toggle("btn-container-show")
	container.classList.remove("container-hide")
	container.classList.toggle("container-show")
	shipAlign.classList.remove("ship-spec-align-hide")
	shipAlign.classList.toggle("ship-spec-align-show")

	chooseShipContainer.classList.remove("choose-ship-container-hide")
	chooseShipContainer.classList.toggle("choose-ship-container-show")

	music2.stop()
	music.play()
	music.jump(40, 180)
}

function createNewGame() {
	buttonLosingsreenContainer.classList.remove("losingscreen-container-show")
	buttonLosingsreenContainer.classList.toggle("losingscreen-container-hide")

	buttonContainer.classList.remove("btn-container-hide")
	buttonContainer.classList.toggle("btn-container-show")
	container.classList.remove("container-hide")
	container.classList.toggle("container-show")
	shipAlign.classList.remove("ship-spec-align-hide")
	shipAlign.classList.toggle("ship-spec-align-show")

	chooseShipContainer.classList.remove("choose-ship-container-hide")
	chooseShipContainer.classList.toggle("choose-ship-container-show")

	music2.stop()
	music.jump(40, 180)
	game.player.score = 0
}

function shipGreen() {
	chooseShipContainer.classList.remove("choose-ship-container-show")
	chooseShipContainer.classList.toggle("choose-ship-container-hide")
	buttonContainer.classList.remove("btn-container-show")
	buttonContainer.classList.toggle("btn-container-hide")
	shipAlign.classList.remove("ship-spec-align-show")
	shipAlign.classList.toggle("ship-spec-align-hide")
	container.classList.remove("container-show")
	container.classList.toggle("container-hide")

	buttonGreen = "on"
	game.player.health = 3

	gameStarted = true
	if (gameStarted) draw()
	music.stop()
	music2.jump(5, 270)
}

function shipRed() {
	chooseShipContainer.classList.remove("choose-ship-container-show")
	chooseShipContainer.classList.toggle("choose-ship-container-hide")
	buttonContainer.classList.remove("btn-container-show")
	buttonContainer.classList.toggle("btn-container-hide")
	shipAlign.classList.remove("ship-spec-align-show")
	shipAlign.classList.toggle("ship-spec-align-hide")
	container.classList.remove("container-show")
	container.classList.toggle("container-hide")

	buttonRed = "on"
	game.player.health = 5

	gameStarted = true
	if (gameStarted) draw()
	music.stop()
	music2.jump(5, 270)
}

function shipOrange() {
	chooseShipContainer.classList.remove("choose-ship-container-show")
	chooseShipContainer.classList.toggle("choose-ship-container-hide")
	buttonContainer.classList.remove("btn-container-show")
	buttonContainer.classList.toggle("btn-container-hide")
	shipAlign.classList.remove("ship-spec-align-show")
	shipAlign.classList.toggle("ship-spec-align-hide")
	container.classList.remove("container-show")
	container.classList.toggle("container-hide")

	buttonOrange = "on"
	game.player.health = 4

	gameStarted = true
	if (gameStarted) draw()
	music.stop()
	music2.jump(5, 270)
}

function displayLosingScreen() {
	buttonLosingsreenContainer.classList.remove("losingscreen-container-hide")
	buttonLosingsreenContainer.classList.toggle("losingscreen-container-show")

	let showFinalScore = document.querySelector(".show-final-score")
	showFinalScore = game.player.score

	document.querySelector(".show-final-score").innerText = `${showFinalScore}`
}

function draw() {
	game.draw()

}
