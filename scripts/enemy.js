class Smallenemy {
    constructor(image) {
        this.image = image
        this.width = 130
        this.height = 170
        this.x = (Math.random() * width) / 1.14
        this.y = - this.height
        this.velocity = 1
        this.health = 2
    }

    draw() {
        this.y += this.velocity
        image(this.image, this.x, this.y, this.width, this.height)
    }
}