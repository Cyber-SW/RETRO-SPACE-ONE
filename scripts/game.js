class Game {
	constructor() {
		this.background = new Background()
		this.player = new Player()
		this.backgroundImage
		this.playerImage
	}

	preload() {
		this.backgroundImage = [
			{ src: loadImage("./assets/bg/space-bg.png"), y: 0, speed: 1 },
			{ src: loadImage("./assets/bg/space-bg-2.png"), y: 0, speed: 1.5 }
		]

		this.playerImage = [
			{ src: loadImage("./assets/ships/Spaceship_03_GREEN.png") },
			{ src: loadImage("./assets/ships/Spaceship_05_RED.png") },
			{ src: loadImage("./assets/ships/Spaceship_02_ORANGE.png") }
		]
	}

	draw() {
		clear()
		this.background.draw()
		this.player.draw()
	}
}
	