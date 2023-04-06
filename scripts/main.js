let game = new Game()
let gameStarted = false
let music

// Load game assets
function preload() {
	game.preload()
}

const buttonStart = document.querySelector(".start-btn-show")
buttonStart.addEventListener("click", createGame)
const headlineStart = document.querySelector(".headline-container")

const buttonContainer = document.querySelector(".btn-container-hide")
const chooseShipContainer = document.querySelector(".choose-ship-container-hide")

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
	createCanvas(1140, 1140)

	orbitronBlack = loadFont("../assets/font/Orbitron-Black.ttf")
	music = lobbyMusic = loadSound("../assets/music/Synthwave goose - Blade Runner 2049.mp3")
}

function createGame() {
	buttonStart.classList.toggle("start-btn-hide")
	headlineStart.classList.toggle("headline-container-hide")

	buttonContainer.classList.remove("btn-container-hide")
	buttonContainer.classList.toggle("btn-container-show")

	chooseShipContainer.classList.remove("choose-ship-container-hide")
	chooseShipContainer.classList.toggle("choose-ship-container-show")

	music.play()
}

function createNewGame() {
	buttonLosingsreenContainer.classList.remove("losingscreen-container-show")
	buttonLosingsreenContainer.classList.toggle("losingscreen-container-hide")

	buttonContainer.classList.remove("btn-container-hide")
	buttonContainer.classList.toggle("btn-container-show")

	chooseShipContainer.classList.remove("choose-ship-container-hide")
	chooseShipContainer.classList.toggle("choose-ship-container-show")

	music.stop()
	music.play()
	game.player.score = 0
}

function shipGreen() {
	chooseShipContainer.classList.remove("choose-ship-container-show")
	chooseShipContainer.classList.toggle("choose-ship-container-hide")
	buttonContainer.classList.remove("btn-container-show")
	buttonContainer.classList.toggle("btn-container-hide")

	buttonGreen = "on"
	game.player.health = 4

	gameStarted = true
	if (gameStarted) draw()
}

function shipRed() {
	chooseShipContainer.classList.remove("choose-ship-container-show")
	chooseShipContainer.classList.toggle("choose-ship-container-hide")
	buttonContainer.classList.remove("btn-container-show")
	buttonContainer.classList.toggle("btn-container-hide")

	buttonRed = "on"
	game.player.health = 7

	gameStarted = true
	if (gameStarted) draw()
}

function shipOrange() {
	chooseShipContainer.classList.remove("choose-ship-container-show")
	chooseShipContainer.classList.toggle("choose-ship-container-hide")
	buttonContainer.classList.remove("btn-container-show")
	buttonContainer.classList.toggle("btn-container-hide")

	buttonOrange = "on"
	game.player.health = 5

	gameStarted = true
	if (gameStarted) draw()
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
