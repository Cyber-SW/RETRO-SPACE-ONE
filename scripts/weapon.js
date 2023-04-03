class WeaponGreenLeft {
    constructor(image, playerPositionX, playerPositionY) {
        this.image = image
        this.x = playerPositionX + 41
		this.y = playerPositionY + 80
        this.width = 70
        this.height = 80
        this.velocity = 25
    }
    
    draw() {
        this.y -= this.velocity
        image(this.image, this.x, this.y, this.width, this.height)
    }
}

class WeaponGreenRight {
    constructor(image, playerPositionX, playerPositionY) {
        this.image = image
        this.x = playerPositionX + 88
		this.y = playerPositionY + 80
        this.width = 70
        this.height = 80
        this.velocity = 25
    }
    
    draw() {
        this.y -= this.velocity
        image(this.image, this.x, this.y, this.width, this.height)
    }
}

class WeaponOrangeLeft {
    constructor(image, playerPositionX, playerPositionY, frameCount) {
        this.image = image
        this.x = playerPositionX + 205
		this.y = playerPositionY - 50
        this.width = 350
        this.height = 350
        this.startFrame = frameCount
        // this.velocity = 2
    }
    
    draw() {
        // this.y -= this.velocity

        this.image.position(this.x, this.y)
        this.image.size(this.width, this.height)
    }
}
