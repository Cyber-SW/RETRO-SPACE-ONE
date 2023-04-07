class Player {
	constructor() {
		this.width = 200
		this.height = 280
		this.x = WIDTH / 2 -this.width
		this.y = HEIGHT / 2 
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
            if (frameCount % 30 === 0) this.useWeaponRed()
            if (frameCount % 30 === 0) game.soundeffects[3].src.play()
        }

        if (keyIsDown(32) && buttonOrange === "on") {
            if (frameCount % 15 === 0) this.useWeaponOrange()
            if (frameCount % 15 === 0) game.soundeffects[2].src.play()
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
		if (buttonGreen === "on") { this.x += 10 }
        if (buttonRed === "on") { this.x += 6 }
        if (buttonOrange === "on") { this.x += 8 }
	}

	moveLeft() {
		if (buttonGreen === "on") { this.x -= 10 }
        if (buttonRed === "on") { this.x -= 6 }
        if (buttonOrange === "on") { this.x -= 8 }
	}

	moveUp() {
		if (buttonGreen === "on") { this.y -= 10 }
        if (buttonRed === "on") { this.y -= 6 }
        if (buttonOrange === "on") { this.y -= 8 }
	}

	moveDown() {
		if (buttonGreen === "on") { this.y += 10 }
        if (buttonRed === "on") { this.y += 6 }
        if (buttonOrange === "on") { this.y += 8 }
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
        let playerPositionX = this.x
        let playerPositionY = this.y

        game.playerWeaponRed.forEach(function(bullet) {
            game.weaponRedBulletsLeft.push(new WeaponRedLeft(bullet.src, playerPositionX, playerPositionY))
        })

        game.playerWeaponRed.forEach(function(bullet) {
            game.weaponRedBulletsRight.push(new WeaponRedRight(bullet.src, playerPositionX, playerPositionY))
        })
    }

    useWeaponOrange() {
        let playerPositionX = this.x
        let playerPositionY = this.y

        game.playerWeaponOrange.forEach(function(bullet) {
            game.weaponOrangeBulletsLeft.push(new WeaponOrangeLeft(bullet.src, playerPositionX, playerPositionY))
        })

        game.playerWeaponOrange.forEach(function(bullet) {
            game.weaponOrangeBulletsLeft2.push(new WeaponOrangeLeft2(bullet.src, playerPositionX, playerPositionY))
        })

        game.playerWeaponOrange.forEach(function(bullet) {
            game.weaponOrangeBulletsRight.push(new WeaponOrangeRight(bullet.src, playerPositionX, playerPositionY))
        })

        game.playerWeaponOrange.forEach(function(bullet) {
            game.weaponOrangeBulletsRight2.push(new WeaponOrangeRight2(bullet.src, playerPositionX, playerPositionY))
        })
    }

    playerCollision(smallEnemyInfo) { 
        let smallEnemyX = smallEnemyInfo.x + smallEnemyInfo.width /2
        let smallEnemyY = smallEnemyInfo.y + smallEnemyInfo.height /2
        let playerX = this.x + this.width / 2
        let playerY = this.y + this.height / 2
        
        if (dist(smallEnemyX, smallEnemyY, playerX, playerY) > 100) {
            return false
        } else {
            this.health -= 0.5
            return true
        }
    }

    playerScore() {
        if (gameStarted) {
            let displayScore = `${this.score}`
            let displayScoreWidth = (WIDTH / 11)
            let displayScoreHeight = (HEIGHT / 11)

            text(displayScore, displayScoreWidth, displayScoreHeight)
            textFont(orbitronBlack)
            fill(255, 255, 255)
            textAlign(LEFT, CENTER)
            textSize(32)
        }
    }

    displayPlayerHealth() {
        if (gameStarted) {
            let displayHealth = `${this.health}x`
            let displayHealthWidth = (WIDTH / 100) * 90
            let displayHealthHeight = (HEIGHT / 11)

            image(game.playerHealthImage[0].src, displayHealthWidth -84, displayHealthHeight -84, 84, 84)

            text(displayHealth, displayHealthWidth, displayHealthHeight)
            textFont(orbitronBlack)
            fill(255, 255, 255)
            textAlign(LEFT, CENTER)
            textSize(32)
        }
    }

    playerDies() {
        gameStarted = false
        buttonGreen = "off"
	    buttonRed = "off"
	    buttonOrange = "off"
        game.enemyVelocity = 2
        displayLosingScreen()
    }
}


