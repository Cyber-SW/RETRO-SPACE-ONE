class Player {
	constructor() {
		this.width = 200
		this.height = 280
		this.x = 570 - this.width / 2
		this.y = 1100 - this.height 
		this.score = 0
	}

	draw() {
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
}

