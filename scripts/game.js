class Game {
	constructor() {
		this.background = new Background()
		this.player = new Player()
		// this.weapon = new Weapon()
		
		this.smallEnemy = []
		this.bigEnemy = []

		this.weaponGreenBulletsLeft = []
		this.weaponGreenBulletsRight = []

		this.weaponOrangeBulletsLeft = []

		this.backgroundImage
		this.playerImage
		this.enemyImage
		this.playerWeaponGreen
		
		// this.explosionImage
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
			{ src: loadImage("./assets/enemys/Ship2b.png") },
			{ src: loadImage("./assets/enemys/Ship6.png") }
		]

		this.playerWeaponGreen = [
			{ src: loadImage("./assets/weapons/green/shot1_4.png") }
		]


		// this.explosionImage = [
		// 	{ src: loadImage("image")}
		// ]
	}

	draw() {
		clear()
		this.background.draw()

		if (frameCount % 90 === 0) {
            this.smallEnemy.push(new Smallenemy(this.enemyImage[0].src))
        }

		this.smallEnemy.forEach(function(enemy) {
            enemy.draw()
        })
		
		this.weaponGreenBulletsLeft.forEach(function(bullet) {
			bullet.draw()
		})

		this.weaponGreenBulletsRight.forEach(function(bullet) {
			bullet.draw()
		})

		this.weaponOrangeBulletsLeft.forEach(function(bullet) {
			bullet.draw()
		})
console.log(this.weaponOrangeBulletsLeft)
		this.weaponOrangeBulletsLeft = this.weaponOrangeBulletsLeft.filter((bullet) => {
            if (frameCount > bullet.startFrame + 50) {
				console.log(bullet.image)
				bullet.image.remove()
                return false
            } else {
                return true
            }
        })
		
		this.player.draw()

	}
}

	