class Game {
	constructor() {
		this.background = new Background()
		// this.player = new Player()
		this.backgroundImage
		// this.playerImage
	}

	preload() {
		this.backgroundImage = [
			{ src: loadImage("../assets/bg/space-bg.png"), y: 0 }
		]

		this.shipOrange = loadImage("../assets/ships/Spaceship_02_ORANGE.png")
		this.shipGreen = loadImage("../assets/ships/Spaceship_03_GREEN.png")
		this.shipRed = loadImage("../assets/ships/Spaceship_05_RED.png")
	}

	draw(event) {
		clear()
		// let target = event.currentTarget
		
		this.background.draw()
		// this.player.draw()
	}
}
	