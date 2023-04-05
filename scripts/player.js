class Player {
	constructor() {
		this.width = 200
		this.height = 280
		this.x = 570 - this.width / 2
		this.y = 1100 - this.height
        this.health = 1 
		this.score = 0
	}
    
	draw() {
        // console.log(buttonGreen.value())
        // console.log(buttonRed.value())
        // console.log(buttonOrange.value())



        if (buttonGreen === "on") {
            image(game.playerImage[0].src, this.x, this.y, this.width, this.height)
        } else if (buttonRed === "on") {
            image(game.playerImage[1].src, this.x, this.y, this.width, this.height)
        } else if (buttonOrange === "on") {
            image(game.playerImage[2].src, this.x, this.y, this.width, this.height)
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
        }

        if (keyIsDown(32) && buttonRed === "on") {
            // this.useWeaponRed()
        }

        if (keyIsDown(32) && buttonOrange === "on") {
            this.useWeaponOrange()
        }

        if (this.health <= 0) {
            image(game.playerExplosionImage[0].src, this.x, this.y, this.width, this.height)
            if (frameCount % 2 === 0) { image(game.playerExplosionImage[1].src, this.x, this.y, this.width, this.height) }
            if (frameCount % 3 === 0) { image(game.playerExplosionImage[2].src, this.x, this.y, this.width, this.height) }
            if (frameCount % 4 === 0) { image(game.playerExplosionImage[3].src, this.x, this.y, this.width, this.height) }
            if (frameCount % 5 === 0) { image(game.playerExplosionImage[4].src, this.x, this.y, this.width, this.height) }
            if (frameCount % 6 === 0) { image(game.playerExplosionImage[5].src, this.x, this.y, this.width, this.height) }
            if (frameCount % 7 === 0) { image(game.playerExplosionImage[6].src, this.x, this.y, this.width, this.height) }
            if (frameCount % 8 === 0) { image(game.playerExplosionImage[7].src, this.x, this.y, this.width, this.height) }
            if (frameCount % 9 === 0) { image(game.playerExplosionImage[8].src, this.x, this.y, this.width, this.height) }
            if (frameCount % 10 === 0) { image(game.playerExplosionImage[9].src, this.x, this.y, this.width, this.height) }
            if (frameCount % 11 === 0) { image(game.playerExplosionImage[10].src, this.x, this.y, this.width, this.height) }
            if (frameCount % 12 === 0) { image(game.playerExplosionImage[11].src, this.x, this.y, this.width, this.height), this.playerDies(), noLoop() }
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

            text(displayScore, 1080, 60)
            textFont(orbitronBlack)
            fill(255, 255, 255)
            textAlign(RIGHT, BASELINE)
            textSize(32)
        }
    }

    playerDies() {
        if (this.health <= 0) {
            gameStarted = false
            displayLosingScreen()
            loop()
        }
    }
}


