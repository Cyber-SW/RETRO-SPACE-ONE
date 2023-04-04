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

    // collision(playerInfo, bulletPositionX ,bulletPositionY) {
    //     let smallEnemyX = this.x + this.width / 2
    //     let smallEnemyY = this.y + this.height / 2

    //     let playerX = playerInfo.x + playerInfo.width / 2
    //     let playerY = playerInfo.y + playerInfo.height / 2

    //     if (dist(smallEnemyX, smallEnemyY, bulletPositionX, bulletPositionY) > 50) {
    //         return false
    //     } else {
    //         this.health -= 1
    //         console.log(this.health)
    //         return true
    //     }
    // }
}