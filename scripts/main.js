const game = new Game()
let gameStarted = false

// Load game assets
function preload() {
	game.preload()
	// lobbyMusic = loadSound("..loadmusic")
	orbitronBlack = loadFont("../assets/font/Orbitron-Black.ttf")
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
}

function createGame() {
	buttonStart.classList.toggle("start-btn-hide")
	headlineStart.classList.toggle("headline-container-hide")

	buttonContainer.classList.remove("btn-container-hide")
	buttonContainer.classList.toggle("btn-container-show")

	chooseShipContainer.classList.remove("choose-ship-container-hide")
	chooseShipContainer.classList.toggle("choose-ship-container-show")
}

function createNewGame() {

}

function shipGreen() {
	chooseShipContainer.classList.remove("choose-ship-container-show")
	chooseShipContainer.classList.toggle("choose-ship-container-hide")
	buttonContainer.classList.remove("btn-container-show")
	buttonContainer.classList.toggle("btn-container-hide")

	buttonGreen = "on"

	gameStarted = true
	if (gameStarted) draw()
}

function shipRed() {
	chooseShipContainer.classList.remove("choose-ship-container-show")
	chooseShipContainer.classList.toggle("choose-ship-container-hide")
	buttonContainer.classList.remove("btn-container-show")
	buttonContainer.classList.toggle("btn-container-hide")

	buttonRed = "on"

	gameStarted = true
	if (gameStarted) draw()
}

function shipOrange() {
	chooseShipContainer.classList.remove("choose-ship-container-show")
	chooseShipContainer.classList.toggle("choose-ship-container-hide")
	buttonContainer.classList.remove("btn-container-show")
	buttonContainer.classList.toggle("btn-container-hide")

	buttonOrange = "on"

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
