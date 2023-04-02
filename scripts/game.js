class Game {
	constructor() {
		this.background = new Background()
		this.player = new Player()
		this.smallEnemy = []
		this.bigEnemy = []
		this.backgroundImage
		this.playerImage
		this.enemyImage
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

		this.enemyImage = [
			{ src: loadImage("./assets/enemys/Ship2.png") },
			{ src: loadImage("./assets/enemys/Ship6.png") }
		]
	}

	draw() {
		clear()
		this.background.draw()
		this.player.draw()

		if (frameCount % 90 === 0) {
            this.smallEnemy.push(new Smallenemy(this.enemyImage[0].src))
        }

		this.smallEnemy.forEach(function (enemy) {
            enemy.draw()
        })
	}
}
	