class Player {
	constructor() {
		this.width = 200
		this.height = 280
		this.x = 570 - this.width / 2
		this.y = 1100 - this.height
        this.health = 5 
		this.score = 0
	}

	draw() {

        // console.log(buttonGreen.value())
        // console.log(buttonRed.value())
        // console.log(buttonOrange.value())



        if (buttonGreen.value() === "on") {
            image(game.playerImage[0].src, this.x, this.y, this.width, this.height)
        } else if (buttonRed.value() === "on") {
            image(game.playerImage[1].src, this.x, this.y, this.width, this.height)
        } else if (buttonOrange.value() === "on") {
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

        if (keyIsDown(32) && buttonGreen.value() === "on") {
            if (frameCount % 5 === 0) this.useWeaponGreen()
        }

        if (keyIsDown(32) && buttonRed.value() === "on") {
            // this.useWeaponRed()
        }

        if (keyIsDown(32) && buttonOrange.value() === "on") {
            if (frameCount % 80 === 0 ) this.useWeaponOrange()
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

        const playerWeaponOrange = [
			{ src: createImg("./assets/weapons/orange/flamethrower.gif", "flamethrower") }
		]
        
        playerWeaponOrange.forEach(function(bullet) {
            game.weaponOrangeBulletsLeft.push(new WeaponOrangeLeft(bullet.src, playerPositionX, playerPositionY, frameCount))
        })
        console.log(game.weaponOrangeBulletsLeft)
    }
}

