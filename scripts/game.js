class Game {
	constructor() {
		this.background = new Background()
		this.player = new Player()
		
		this.smallEnemy = []
		this.bigEnemy = []

		this.weaponGreenBulletsLeft = []
		this.weaponGreenBulletsRight = []

		this.weaponOrangeBulletsLeft = []

		this.backgroundImage
		this.playerImage
		this.enemyImage
		this.playerWeaponGreen
		
		this.explosionImage
		this.playerExplosionImage
		this.playerHealthImage

		this.soundeffects
		
		this.difficulty = 100
		this.enemyVelocity = 2
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

		this.playerWeaponOrange = [
			{ src: loadImage("../assets") }
		]

		this.explosionImage = [
			{ src: loadImage("../assets/explosions/Ship2_Explosion/Ship2_Explosion_000.png") },
			{ src: loadImage("../assets/explosions/Ship2_Explosion/Ship2_Explosion_004.png") },
			{ src: loadImage("../assets/explosions/Ship2_Explosion/Ship2_Explosion_005.png") },
			{ src: loadImage("../assets/explosions/Ship2_Explosion/Ship2_Explosion_008.png") },
			{ src: loadImage("../assets/explosions/Ship2_Explosion/Ship2_Explosion_009.png") },
			{ src: loadImage("../assets/explosions/Ship2_Explosion/Ship2_Explosion_010.png") },
			{ src: loadImage("../assets/explosions/Ship2_Explosion/Ship2_Explosion_013.png") },
			{ src: loadImage("../assets/explosions/Ship2_Explosion/Ship2_Explosion_014.png") },
			{ src: loadImage("../assets/explosions/Ship2_Explosion/Ship2_Explosion_015.png") },
			{ src: loadImage("../assets/explosions/Ship2_Explosion/Ship2_Explosion_016.png") },
			{ src: loadImage("../assets/explosions/Ship2_Explosion/Ship2_Explosion_019.png") },
			{ src: loadImage("../assets/explosions/Ship2_Explosion/Ship2_Explosion_021.png") }
		]

		this.playerExplosionImage = [
			{ src: loadImage("../assets/explosions/player-explosion/Explosion3_1.png") },
			{ src: loadImage("../assets/explosions/player-explosion/Explosion3_2.png") },
			{ src: loadImage("../assets/explosions/player-explosion/Explosion3_3.png") },
			{ src: loadImage("../assets/explosions/player-explosion/Explosion3_4.png") },
			{ src: loadImage("../assets/explosions/player-explosion/Explosion3_5.png") },
			{ src: loadImage("../assets/explosions/player-explosion/Explosion3_6.png") },
			{ src: loadImage("../assets/explosions/player-explosion/Explosion3_7.png") },
			{ src: loadImage("../assets/explosions/player-explosion/Explosion3_8.png") },
			{ src: loadImage("../assets/explosions/player-explosion/Explosion3_9.png") },
			{ src: loadImage("../assets/explosions/player-explosion/Explosion3_10.png") },
			{ src: loadImage("../assets/explosions/player-explosion/Explosion3_11.png") },
			{ src: loadImage("../assets/explosions/player-explosion/Explosion3_12.png") }
		]

		this.playerHealthImage = [
			{ src: loadImage("../assets/life/heart.png") }
		]

		this.soundeffects = [
			{ src: loadSound("../assets/soundeffects/mixkit-short-laser-gun-shot-1670.wav") },
			{ src: loadSound("../assets/soundeffects/Hitmarker - Sound Effect.mp3") }
		]
	}

	draw() {
		clear()
		this.background.draw()

		if (gameStarted && frameCount % this.difficulty === 0) {
            this.smallEnemy.push(new Smallenemy(this.enemyImage[0].src, this.explosionImage))
        }

		this.smallEnemy.forEach(function(enemy) {
            enemy.draw()
        })

		if (gameStarted && frameCount % 400 === 0) {
			this.difficulty /= 2
			this.enemyVelocity += 0.5
		}

		if (this.difficulty <= 10) {
			this.difficulty = 10
		}
		console.log(this.difficulty)
		console.log(this.enemyVelocity)

		// GREEN SHIP WEAPON

		this.weaponGreenBulletsLeft.forEach(function(bullet) {
			bullet.draw()
		})

		this.weaponGreenBulletsRight.forEach(function(bullet) {
			bullet.draw()
		})

		this.weaponGreenBulletsLeft.forEach((bullet, bulletIndex) => {
			this.smallEnemy.forEach((smallEnemy, smallEnemyIndex) => {
				if (bullet.bulletCollision(smallEnemy)) {
					this.weaponGreenBulletsLeft.splice(bulletIndex, 1)
					this.smallEnemy[smallEnemyIndex].health -= 1
					if (smallEnemy.health <= 0 && smallEnemy.initialDeadFrameCount < frameCount + 12) {
						this.smallEnemy.splice(smallEnemyIndex, 1)
						game.soundeffects[1].src.play()
						this.player.score += 100
					}
				}
				if (bullet.y < -100) {
					this.weaponGreenBulletsLeft.splice(bulletIndex, 1)
				}
			})
		})

		this.weaponGreenBulletsRight.forEach((bullet, bulletIndex) => {
			this.smallEnemy.forEach((smallEnemy, smallEnemyIndex) => {
				if (bullet.bulletCollision(smallEnemy)) {
					this.weaponGreenBulletsRight.splice(bulletIndex, 1)
					this.smallEnemy[smallEnemyIndex].health -= 1
					if (smallEnemy.health <= 0 && smallEnemy.initialDeadFrameCount < frameCount + 12) {
						this.smallEnemy.splice(smallEnemyIndex, 1)
						game.soundeffects[1].src.play()
						this.player.score += 100
					}
				}
				if (bullet.y < -100) {
					this.weaponGreenBulletsRight.splice(bulletIndex, 1)
				}
			})
		})

		// ORANGE SHIP WEAPON

		this.weaponOrangeBulletsLeft.forEach(function(bullet) {
			bullet.draw()
		})

		this.weaponOrangeBulletsLeft = this.weaponOrangeBulletsLeft.filter((bullet) => {
            if (frameCount > bullet.startFrame + 70) {
				bullet.image.remove()
                return false
            } else {
                return true
            }
        })
		
		// PLAYER COLLISION
		
		this.smallEnemy.forEach((smallEnemy, smallEnemyIndex) => {
			if (this.player.playerCollision(smallEnemy)) {
				this.smallEnemy[smallEnemyIndex].health = 0
				this.player.health -= 1
				console.log(this.player.health)
				if (smallEnemy.initialDeadFrameCount < frameCount + 12)
				this.smallEnemy.splice(smallEnemyIndex, 1)
			}
		})

		this.player.draw()
		this.player.playerScore()
		this.player.displayPlayerHealth()
	}

	play() {
		this.soundeffects.src.setVolume(0.2)
	}
}

	