class Player {
	constructor() {
		this.width = 200
		this.height = 280
		this.x = 570
		this.y = 1040 - this.height 
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
	}
}

