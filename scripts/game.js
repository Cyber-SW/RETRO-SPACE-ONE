class Game {
	constructor() {
		this.background = new Background()
		this.player = new Player()
		
		this.smallEnemy = []

		this.weaponGreenBulletsLeft = []
		this.weaponGreenBulletsRight = []

		this.weaponRedBulletsLeft = []
		this.weaponRedBulletsRight = []

		this.weaponOrangeBulletsLeft = []
		this.weaponOrangeBulletsLeft2 = []
		this.weaponOrangeBulletsRight = []
		this.weaponOrangeBulletsRight2 = []

		this.backgroundImage
		this.playerImage
		this.enemyImage
		this.playerWeaponGreen
		this.playerWeaponRed
		this.playerWeaponOrange
		
		this.explosionImage
		this.playerExplosionImage
		this.playerHealthImage

		this.soundeffects
		
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

		this.playerWeaponRed = [
			{ src: loadImage("../assets/weapons/red/shot.png")}
		]

		this.playerWeaponOrange = [
			{ src: loadImage("../assets/weapons/orange/shot5_exp2.png") }
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

		this.bigExplosionImage = [
			{ src: loadImage("../assets/explosions/Ship6_Explosion/Ship6_Explosion_000.png") },
			{ src: loadImage("../assets/explosions/Ship6_Explosion/Ship6_Explosion_004.png") },
			{ src: loadImage("../assets/explosions/Ship6_Explosion/Ship6_Explosion_005.png") },
			{ src: loadImage("../assets/explosions/Ship6_Explosion/Ship6_Explosion_007.png") },
			{ src: loadImage("../assets/explosions/Ship6_Explosion/Ship6_Explosion_009.png") },
			{ src: loadImage("../assets/explosions/Ship6_Explosion/Ship6_Explosion_011.png") },
			{ src: loadImage("../assets/explosions/Ship6_Explosion/Ship6_Explosion_013.png") },
			{ src: loadImage("../assets/explosions/Ship6_Explosion/Ship6_Explosion_016.png") },
			{ src: loadImage("../assets/explosions/Ship6_Explosion/Ship6_Explosion_017.png") },
			{ src: loadImage("../assets/explosions/Ship6_Explosion/Ship6_Explosion_019.png") },
			{ src: loadImage("../assets/explosions/Ship6_Explosion/Ship6_Explosion_021.png") }
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
			{ src: loadSound("../assets/soundeffects/Hitmarker - Sound Effect.mp3") },
			{ src: loadSound("../assets/soundeffects/futuristic-smg-sound-effect-100378.mp3") },
			{ src: loadSound("../assets/soundeffects/bfg-laser-89662.mp3") }
		]
	}

	draw() {
		clear()
		this.background.draw()
		this.soundeffects[3].src.setVolume(0.3)

		//SMALLENEMY SPAWN
		if (gameStarted && frameCount % 20 === 0) {
            this.smallEnemy.push(new Smallenemy(this.enemyImage[0].src, this.explosionImage))
        }

		if (gameStarted && frameCount % 100 === 0) {
            this.smallEnemy.push(new Bigenemy(this.enemyImage[1].src, this.bigExplosionImage))
        }

		this.smallEnemy.forEach(function(enemy) {
            enemy.draw()
        })

		this.smallEnemy.forEach(function(enemy) {
            enemy.draw()
        })

		if (gameStarted && frameCount % 400 === 0) {
			this.enemyVelocity += 0.5
		}

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

		// RED SHIP WEAPON
		this.weaponRedBulletsLeft.forEach(function(bullet) {
			bullet.draw()
		})

		this.weaponRedBulletsRight.forEach(function(bullet) {
			bullet.draw()
		})

		this.weaponRedBulletsLeft.forEach((bullet, bulletIndex) => {
			if (bullet.initialFrameCount +3 < frameCount) {
				this.weaponRedBulletsLeft.splice(bulletIndex, 1)
			}
		})

		this.weaponRedBulletsRight.forEach((bullet, bulletIndex) => {
			if (bullet.initialFrameCount +3 < frameCount) {
				this.weaponRedBulletsRight.splice(bulletIndex, 1)
			}
		})

		this.weaponRedBulletsLeft.forEach((bullet) => {
			this.smallEnemy.forEach((smallEnemy, smallEnemyIndex) => {
				if (bullet.bulletCollision(smallEnemy)) {
					smallEnemy.health = 0
					if (smallEnemy.health <= 0 && smallEnemy.initialDeadFrameCount < frameCount + 12) {
						this.smallEnemy.splice(smallEnemyIndex, 1)
						this.player.score += 100
					}
				}
			})
		})

		this.weaponRedBulletsRight.forEach((bullet) => {
			this.smallEnemy.forEach((smallEnemy, smallEnemyIndex) => {
				if (bullet.bulletCollision(smallEnemy)) {
					smallEnemy.health = 0
					if (smallEnemy.health <= 0 && smallEnemy.initialDeadFrameCount < frameCount + 12) {
						this.smallEnemy.splice(smallEnemyIndex, 1)
						this.player.score += 100
					}
				}
			})
		})

		// ORANGE SHIP WEAPON
		this.weaponOrangeBulletsLeft.forEach(function(bullet) {
			bullet.draw()
		})

		this.weaponOrangeBulletsLeft2.forEach(function(bullet) {
			bullet.draw()
		})

		this.weaponOrangeBulletsRight.forEach(function(bullet) {
			bullet.draw()
		})

		this.weaponOrangeBulletsRight2.forEach(function(bullet) {
			bullet.draw()
		})

		this.weaponOrangeBulletsLeft.forEach((bullet, bulletIndex) => {
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

		this.weaponOrangeBulletsLeft2.forEach((bullet, bulletIndex) => {
			this.smallEnemy.forEach((smallEnemy, smallEnemyIndex) => {
				if (bullet.bulletCollision(smallEnemy)) {
					this.weaponOrangeBulletsLeft2.splice(bulletIndex, 1)
					this.smallEnemy[smallEnemyIndex].health -= 1
					if (smallEnemy.health <= 0 && smallEnemy.initialDeadFrameCount < frameCount + 12) {
						this.smallEnemy.splice(smallEnemyIndex, 1)
						game.soundeffects[1].src.play()
						this.player.score += 100
					}
				}
				if (bullet.y < -100) {
					this.weaponOrangeBulletsLeft2.splice(bulletIndex, 1)
				}
			})
		})
		
		this.weaponOrangeBulletsRight.forEach((bullet, bulletIndex) => {
			this.smallEnemy.forEach((smallEnemy, smallEnemyIndex) => {
				if (bullet.bulletCollision(smallEnemy)) {
					this.weaponOrangeBulletsRight.splice(bulletIndex, 1)
					this.smallEnemy[smallEnemyIndex].health -= 1
					if (smallEnemy.health <= 0 && smallEnemy.initialDeadFrameCount < frameCount + 12) {
						this.smallEnemy.splice(smallEnemyIndex, 1)
						game.soundeffects[1].src.play()
						this.player.score += 100
					}
				}
				if (bullet.y < -100) {
					this.weaponOrangeBulletsRight.splice(bulletIndex, 1)
				}
			})
		})

		this.weaponOrangeBulletsRight2.forEach((bullet, bulletIndex) => {
			this.smallEnemy.forEach((smallEnemy, smallEnemyIndex) => {
				if (bullet.bulletCollision(smallEnemy)) {
					this.weaponOrangeBulletsRight2.splice(bulletIndex, 1)
					this.smallEnemy[smallEnemyIndex].health -= 1
					if (smallEnemy.health <= 0 && smallEnemy.initialDeadFrameCount < frameCount + 12) {
						this.smallEnemy.splice(smallEnemyIndex, 1)
						game.soundeffects[1].src.play()
						this.player.score += 100
					}
				}
				if (bullet.y < -100) {
					this.weaponOrangeBulletsRight2.splice(bulletIndex, 1)
				}
			})
		})

		// PLAYER COLLISION
		this.smallEnemy.forEach((smallEnemy, smallEnemyIndex) => {
			if (this.player.playerCollision(smallEnemy)) {
				this.smallEnemy[smallEnemyIndex].health = 0
				console.log(this.player.health)
				if (smallEnemy.initialDeadFrameCount < frameCount + 12)
				this.smallEnemy.splice(smallEnemyIndex, 1)
			}
		})

		this.player.draw()
		this.player.playerScore()
		this.player.displayPlayerHealth()
	}
}

	