class Player {
	constructor() {
		this.width = 100
		this.height = 140
		this.x = 570
		this.y = 1040 - this.height 
		this.score = 0
	}

	draw() {
        if (setup.buttonGreen) {
		    image(game.playerImage[0], this.x, this.y, this.width, this.height)
        } else if (setup.buttonRed) {
            image(game.playerImage[1], this.x, this.y, this.width, this.height)
        } else if (setup.buttonOrange) {
            image(game.playerImage[2], this.x, this.y, this.width, this.height)
        }  
	}
}

