class Player {
	constructor() {
		this.width = 200
		this.height = 280
		this.x = 570 - this.width / 2
		this.y = 1100 - this.height
        this.health = this.selectedHealth 
		this.score = 0
	}
    
	draw() {
        if (buttonGreen === "on") {
            image(game.playerImage[0].src, this.x, this.y, this.width, this.height)
        } else if (buttonRed === "on") {
            image(game.playerImage[1].src, this.x, this.y, this.width -15, this.height -15)
        } else if (buttonOrange === "on") {
            image(game.playerImage[2].src, this.x, this.y, this.width -15, this.height -15)
        }

        if (keyIsDown(65)) {
			if (this.x > 0) this.moveLeft()
		}

		if (keyIsDown(68)) {
			if (this.x < width - this.width) this.moveRight()
		}

		if (keyIsDown(87)) {
			if (this.y > 0) this.moveUp()
		}

		if (keyIsDown(83)) {
			if (this.y < height - this.height) this.moveDown()
		}

        if (keyIsDown(32) && buttonGreen === "on") {
            if (frameCount % 5 === 0) this.useWeaponGreen()
            if (frameCount % 5 === 0) game.soundeffects[0].src.play()
        }

        if (keyIsDown(32) && buttonRed === "on") {
            // this.useWeaponRed()
        }

        if (keyIsDown(32) && buttonOrange === "on") {
            this.useWeaponOrange()
        }

        if (this.health <= 0 && gameStarted === true) {
            image(game.playerExplosionImage[0].src, this.x, this.y, this.width, this.height)
            if (frameCount % 2 === 0) { image(game.playerExplosionImage[1].src, this.x -10, this.y -10, this.width +10, this.height +10) }
            if (frameCount % 3 === 0) { image(game.playerExplosionImage[2].src, this.x -20, this.y -20, this.width +20, this.height +20) }
            if (frameCount % 4 === 0) { image(game.playerExplosionImage[3].src, this.x -30, this.y -30, this.width +30, this.height +30) }
            if (frameCount % 5 === 0) { image(game.playerExplosionImage[4].src, this.x -40, this.y -40, this.width +40, this.height +40) }
            if (frameCount % 6 === 0) { image(game.playerExplosionImage[5].src, this.x -50, this.y -50, this.width +60, this.height +60) }
            if (frameCount % 7 === 0) { image(game.playerExplosionImage[6].src, this.x -60, this.y -60, this.width +80, this.height +80) }
            if (frameCount % 8 === 0) { image(game.playerExplosionImage[7].src, this.x -70, this.y -70, this.width +100, this.height +100) }
            if (frameCount % 9 === 0) { image(game.playerExplosionImage[8].src, this.x -80, this.y -80, this.width +120, this.height +120) }
            if (frameCount % 10 === 0) { image(game.playerExplosionImage[9].src, this.x -90, this.y -90, this.width +140, this.height +140) }
            if (frameCount % 11 === 0) { image(game.playerExplosionImage[10].src, this.x -100, this.y -100, this.width +160, this.height +160) }
            if (frameCount % 12 === 0) { image(game.playerExplosionImage[11].src, this.x -110, this.y -110, this.width +180, this.height +180); this.playerDies() }
        }
	}

    moveRight() {
		this.x += 10
	}

	moveLeft() {
		this.x -= 10
	}

	moveUp() {
		this.y -= 10
	}

	moveDown() {
		this.y += 10
	}
    
    useWeaponGreen() {
        let playerPositionX = this.x
        let playerPositionY = this.y

        game.playerWeaponGreen.forEach(function(bullet) {
            game.weaponGreenBulletsLeft.push(new WeaponGreenLeft(bullet.src, playerPositionX, playerPositionY))
        })

        game.playerWeaponGreen.forEach(function(bullet) {
            game.weaponGreenBulletsRight.push(new WeaponGreenRight(bullet.src, playerPositionX, playerPositionY))
        })
    }

    useWeaponRed() {
        
    }

    useWeaponOrange() {
        console.log("useweapon")
        let playerPositionX = this.x
        let playerPositionY = this.y

        game.weaponOrangeBulletsLeft.push(new WeaponOrangeLeft(playerPositionX, playerPositionY, frameCount))

        console.log(game.weaponOrangeBulletsLeft)
    }

    playerCollision(smallEnemyInfo) { 
        let smallEnemyX = smallEnemyInfo.x + smallEnemyInfo.width /2
        let smallEnemyY = smallEnemyInfo.y + smallEnemyInfo.height /2
        let playerX = this.x + this.width / 2
        let playerY = this.y + this.height / 2
        
        if (dist(smallEnemyX, smallEnemyY, playerX, playerY) > 100) {
            return false
        } else {
            return true
        }
    }

    playerScore() {
        if (gameStarted) {
            let displayScore = `Score: ${this.score}`

            text(displayScore, 870, 100)
            textFont(orbitronBlack)
            fill(255, 255, 255)
            textAlign(RIGHT, BASELINE)
            textSize(32)
        }
    }

    displayPlayerHealth() {
        if (gameStarted) {
            image(game.playerHealthImage[0].src, 60, 50, 84, 84)
            let displayHealth = `${this.health}x`

            text(displayHealth, 126, 102)
            textFont(orbitronBlack)
            fill(255, 255, 255)
            textAlign(LEFT, BASELINE)
            textSize(32)
        }
    }

    playerDies() {
        gameStarted = false
        buttonGreen = "off"
	    buttonRed = "off"
	    buttonOrange = "off"
        game.enemyVelocity = 2
        game.difficulty = 100
        displayLosingScreen()
    }
}


