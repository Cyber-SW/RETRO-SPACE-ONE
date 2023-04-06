class Smallenemy {
    constructor(image, explosionImage) {
        this.image = image
        this.explosionImage = explosionImage
        this.width = 130
        this.height = 170
        this.x = (Math.random() * width) / 1.14
        this.y = -this.height
        this.velocity = game.enemyVelocity
        this.health = 3
        this.initialDeadFrameCount = Infinity
        this.deadAnimation = true
    }

    draw() {
        this.y += this.velocity
        image(this.image, this.x, this.y, this.width, this.height)

        if (this.health <= 0 && this.deadAnimation === true) {
            this.initialDeadFrameCount = frameCount
            image(this.explosionImage[0].src, this.x, this.y + 10, this.width, this.height)
            if (frameCount % 2 === 0) { image(this.explosionImage[1].src, this.x, this.y +10, this.width, this.height) }
            if (frameCount % 3 === 0) { image(this.explosionImage[2].src, this.x, this.y +10, this.width, this.height) }
            if (frameCount % 4 === 0) { image(this.explosionImage[3].src, this.x, this.y +10, this.width, this.height) }
            if (frameCount % 5 === 0) { image(this.explosionImage[4].src, this.x, this.y +10, this.width, this.height) }
            if (frameCount % 6 === 0) { image(this.explosionImage[5].src, this.x, this.y +10, this.width, this.height) }
            if (frameCount % 7 === 0) { image(this.explosionImage[6].src, this.x, this.y +10, this.width, this.height) }
            if (frameCount % 8 === 0) { image(this.explosionImage[7].src, this.x, this.y +10, this.width, this.height) }
            if (frameCount % 9 === 0) { image(this.explosionImage[8].src, this.x, this.y +10, this.width, this.height) }
            if (frameCount % 10 === 0) { image(this.explosionImage[9].src, this.x, this.y +10, this.width, this.height) }
            if (frameCount % 11 === 0) { image(this.explosionImage[10].src, this.x, this.y +10, this.width, this.height) }
            if (frameCount % 12 === 0) { image(this.explosionImage[11].src, this.x, this.y +10, this.width, this.height); this.deadAnimation === false }
        }
    }
}

class Bigenemy {
    constructor(image, explosionImage) {
        this.image = image
        this.bigExplosionImage = explosionImage
        this.width = 130
        this.height = 170
        this.x = (Math.random() * width) / 1.14
        this.y = -this.height
        this.velocity = game.enemyVelocity
        this.health = 10
        this.initialDeadFrameCount = Infinity
        this.deadAnimation = true
    }

    draw() {
        this.y += this.velocity
        image(this.image, this.x, this.y, this.width, this.height)

        if (this.health <= 0 && this.deadAnimation === true) {
            this.initialDeadFrameCount = frameCount
            image(this.bigExplosionImage[0].src, this.x, this.y + 10, this.width, this.height)
            if (frameCount % 2 === 0) { image(this.bigExplosionImage[1].src, this.x, this.y +10, this.width, this.height) }
            if (frameCount % 3 === 0) { image(this.bigExplosionImage[2].src, this.x, this.y +10, this.width, this.height) }
            if (frameCount % 4 === 0) { image(this.bigExplosionImage[3].src, this.x, this.y +10, this.width, this.height) }
            if (frameCount % 5 === 0) { image(this.bigExplosionImage[4].src, this.x, this.y +10, this.width, this.height) }
            if (frameCount % 6 === 0) { image(this.bigExplosionImage[5].src, this.x, this.y +10, this.width, this.height) }
            if (frameCount % 7 === 0) { image(this.bigExplosionImage[6].src, this.x, this.y +10, this.width, this.height) }
            if (frameCount % 8 === 0) { image(this.bigExplosionImage[7].src, this.x, this.y +10, this.width, this.height) }
            if (frameCount % 9 === 0) { image(this.bigExplosionImage[8].src, this.x, this.y +10, this.width, this.height) }
            if (frameCount % 10 === 0) { image(this.bigExplosionImage[9].src, this.x, this.y +10, this.width, this.height) }
            if (frameCount % 11 === 0) { image(this.bigExplosionImage[10].src, this.x, this.y +10, this.width, this.height); this.deadAnimation === false }
        }
    }
}