class Game {
	constructor() {
		this.background = new Background()
		// this.player = new Player()
		this.backgroundImage
		// this.playerImage
	}

	preload() {
		this.backgroundImage = [
			{ src: loadImage("./assets/bg/space-bg-tilable.png"), y: 0 },
			{ src: loadImage("./assets/bg/space-bg-tilable.png"), y: 0 }
		]

		// this.playerImage = loadImage(".player-image")
	}

	draw() {
		clear()
		this.background.draw()
		// this.player.draw()
	}
}