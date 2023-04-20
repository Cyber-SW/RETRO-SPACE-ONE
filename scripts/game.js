class Game {
	constructor() {
		this.background = new Background()
		this.player = new Player()
		this.enemys = []

		//PROJECTILE STORAGE
		this.weaponGreenBullets = []
		this.weaponRedBullets = []
		this.weaponOrangeBullets = []
		
		//PROJECTILE IMAGES
		this.playerWeaponGreen
		this.playerWeaponRed
		this.playerWeaponOrange

		//GAME IMAGES
		this.backgroundImage
		this.playerImage
		this.enemyImage
		
		//IMAGES FOR EXPLOSION ANIMATION
		this.explosionImage
		this.playerExplosionImage
		this.playerHealthImage

		this.soundeffects
		
		//OVER TIME INCREASING GAME DIFFICULTY
		this.enemyVelocity = 2
	}
	
	//LOAD GAME ASSETS
	preload() {
		this.backgroundImage = [
			{ src: loadImage("assets/bg/space-bg.png"), y: 0, speed: 1 },
			{ src: loadImage("assets/bg/space-bg-2.png"), y: 0, speed: 1.5 }
		]

		this.playerImage = [
			{ src: loadImage("assets/ships/Spaceship_03_GREEN.png") },
			{ src: loadImage("assets/ships/Spaceship_05_RED.png") },
			{ src: loadImage("assets/ships/Spaceship_02_ORANGE.png") }
		]

		this.enemyImage = [
			{ src: loadImage("assets/enemys/Ship2b.png") },
			{ src: loadImage("assets/enemys/Ship6.png") }
		]

		this.playerWeaponGreen = [
			{ src: loadImage("assets/weapons/green/shot1_4.png") }
		]

		this.playerWeaponRed = [
			{ src: loadImage("assets/weapons/red/shot.png")}
		]

		this.playerWeaponOrange = [
			{ src: loadImage("assets/weapons/orange/shot5_exp2.png") }
		]

		this.explosionImage = [
			{ src: loadImage("assets/explosions/Ship2_Explosion/Ship2_Explosion_000.png") },
			{ src: loadImage("assets/explosions/Ship2_Explosion/Ship2_Explosion_004.png") },
			{ src: loadImage("assets/explosions/Ship2_Explosion/Ship2_Explosion_005.png") },
			{ src: loadImage("assets/explosions/Ship2_Explosion/Ship2_Explosion_008.png") },
			{ src: loadImage("assets/explosions/Ship2_Explosion/Ship2_Explosion_009.png") },
			{ src: loadImage("assets/explosions/Ship2_Explosion/Ship2_Explosion_010.png") },
			{ src: loadImage("assets/explosions/Ship2_Explosion/Ship2_Explosion_013.png") },
			{ src: loadImage("assets/explosions/Ship2_Explosion/Ship2_Explosion_014.png") },
			{ src: loadImage("assets/explosions/Ship2_Explosion/Ship2_Explosion_015.png") },
			{ src: loadImage("assets/explosions/Ship2_Explosion/Ship2_Explosion_016.png") },
			{ src: loadImage("assets/explosions/Ship2_Explosion/Ship2_Explosion_019.png") },
			{ src: loadImage("assets/explosions/Ship2_Explosion/Ship2_Explosion_021.png") }
		]

		this.bigExplosionImage = [
			{ src: loadImage("assets/explosions/Ship6_Explosion/Ship6_Explosion_000.png") },
			{ src: loadImage("assets/explosions/Ship6_Explosion/Ship6_Explosion_004.png") },
			{ src: loadImage("assets/explosions/Ship6_Explosion/Ship6_Explosion_005.png") },
			{ src: loadImage("assets/explosions/Ship6_Explosion/Ship6_Explosion_007.png") },
			{ src: loadImage("assets/explosions/Ship6_Explosion/Ship6_Explosion_009.png") },
			{ src: loadImage("assets/explosions/Ship6_Explosion/Ship6_Explosion_011.png") },
			{ src: loadImage("assets/explosions/Ship6_Explosion/Ship6_Explosion_013.png") },
			{ src: loadImage("assets/explosions/Ship6_Explosion/Ship6_Explosion_016.png") },
			{ src: loadImage("assets/explosions/Ship6_Explosion/Ship6_Explosion_017.png") },
			{ src: loadImage("assets/explosions/Ship6_Explosion/Ship6_Explosion_019.png") },
			{ src: loadImage("assets/explosions/Ship6_Explosion/Ship6_Explosion_021.png") }
		]

		this.playerExplosionImage = [
			{ src: loadImage("assets/explosions/player-explosion/Explosion3_1.png") },
			{ src: loadImage("assets/explosions/player-explosion/Explosion3_2.png") },
			{ src: loadImage("assets/explosions/player-explosion/Explosion3_3.png") },
			{ src: loadImage("assets/explosions/player-explosion/Explosion3_4.png") },
			{ src: loadImage("assets/explosions/player-explosion/Explosion3_5.png") },
			{ src: loadImage("assets/explosions/player-explosion/Explosion3_6.png") },
			{ src: loadImage("assets/explosions/player-explosion/Explosion3_7.png") },
			{ src: loadImage("assets/explosions/player-explosion/Explosion3_8.png") },
			{ src: loadImage("assets/explosions/player-explosion/Explosion3_9.png") },
			{ src: loadImage("assets/explosions/player-explosion/Explosion3_10.png") },
			{ src: loadImage("assets/explosions/player-explosion/Explosion3_11.png") },
			{ src: loadImage("assets/explosions/player-explosion/Explosion3_12.png") }
		]

		this.playerHealthImage = [
			{ src: loadImage("assets/life/heart.png") }
		]

		this.soundeffects = [
			{ src: loadSound("assets/soundeffects/mixkit-short-laser-gun-shot-1670.wav") },
			{ src: loadSound("assets/soundeffects/Hitmarker - Sound Effect.mp3") },
			{ src: loadSound("assets/soundeffects/futuristic-smg-sound-effect-100378.mp3") },
			{ src: loadSound("assets/soundeffects/bfg-laser-89662.mp3") }
		]
	}

	draw() {
		clear()
		this.background.draw()
		this.soundeffects[3].src.setVolume(0.3)

		//ENEMY SPAWN
		if (gameStarted && frameCount % 20 === 0) {
            this.enemys.push(new Smallenemy(this.enemyImage[0].src, this.explosionImage))
        }

		if (gameStarted && frameCount % 100 === 0) {
            this.enemys.push(new Bigenemy(this.enemyImage[1].src, this.bigExplosionImage))
        }

		this.enemys.forEach(function(enemy) {
            enemy.draw()
        })

		if (gameStarted && frameCount % 400 === 0) {
			this.enemyVelocity += 0.5
		}

		// GREEN SHIP WEAPON
		this.weaponGreenBullets.forEach(function(bullet) {
			bullet.draw()
		})

		this.weaponGreenBullets.forEach((bullet, bulletIndex) => {
			this.enemys.forEach((enemy, enemyIndex) => {
				if (bullet.bulletCollision(enemy)) {
					this.weaponGreenBullets.splice(bulletIndex, 1)
					this.enemys[enemyIndex].health -= 1
					if (enemy.health <= 0 && enemy.initialDeadFrameCount < frameCount + 11) {
						this.enemys.splice(enemyIndex, 1)
						game.soundeffects[1].src.play()
						if (enemy.enemyType === "small") { this.player.score += 100 }
						if (enemy.enemyType === "big") { this.player.score += 500 }
					}
				}
			})
			if (bullet.y < -100) {
				this.weaponGreenBullets.splice(bulletIndex, 1)
			}
		})

		// RED SHIP WEAPON
		this.weaponRedBullets.forEach(function(bullet) {
			bullet.draw()
		})

		this.weaponRedBullets.forEach((bullet, bulletIndex) => {
			if (bullet.initialFrameCount +3 < frameCount) {
				this.weaponRedBullets.splice(bulletIndex, 1)
			}
		})

		this.weaponRedBullets.forEach((bullet) => {
			this.enemys.forEach((enemy, enemyIndex) => {
				if (bullet.bulletCollision(enemy)) {
					enemy.health = 0
					if (enemy.health <= 0 && enemy.initialDeadFrameCount < frameCount + 11) {
						this.enemys.splice(enemyIndex, 1)
						if (enemy.enemyType === "small") { this.player.score += 100 }
						if (enemy.enemyType === "big") { this.player.score += 500 }
					}
				}
			})
		})

		// ORANGE SHIP WEAPON
		this.weaponOrangeBullets.forEach(function(bullet) {
			bullet.draw()
		})

		this.weaponOrangeBullets.forEach((bullet, bulletIndex) => {
			this.enemys.forEach((enemy, enemyIndex) => {
				if (bullet.bulletCollision(enemy)) {
					this.weaponOrangeBullets.splice(bulletIndex, 1)
					this.enemys[enemyIndex].health -= 3
					if (enemy.health <= 0 && enemy.initialDeadFrameCount < frameCount + 11) {
						this.enemys.splice(enemyIndex, 1)
						game.soundeffects[1].src.play()
						if (enemy.enemyType === "small") { this.player.score += 100 }
						if (enemy.enemyType === "big") { this.player.score += 500 }
					}
				}
			})
			if (bullet.y < -100) {
				this.weaponOrangeBullets.splice(bulletIndex, 1)
			}
		})

		// PLAYER COLLISION
		this.enemys.forEach((enemy, enemyIndex) => {
			if (this.player.playerCollision(enemy)) {
				this.enemys[enemyIndex].health = 0
				if (enemy.initialDeadFrameCount < frameCount + 11)
				this.enemys.splice(enemyIndex, 1)
			}
		})

		this.player.draw()
		this.player.playerScore()
		this.player.displayPlayerHealth()
	}
}

	