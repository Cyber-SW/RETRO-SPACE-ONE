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

    bulletCollision(smallEnemyInfo) {
        let smallEnemyX = smallEnemyInfo.x + smallEnemyInfo.width /2
        let smallEnemyY = smallEnemyInfo.y + smallEnemyInfo.height /2
        let bulletX = this.x + this.width / 2
        let bulletY = this.y + this.height / 2

        if (dist(smallEnemyX, smallEnemyY, bulletX, bulletY) > 25) {
            return false
        } else {
            return true
        }
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

    bulletCollision(smallEnemyInfo) { 
        
        let smallEnemyX = smallEnemyInfo.x + smallEnemyInfo.width /2
        let smallEnemyY = smallEnemyInfo.y + smallEnemyInfo.height /2
        let bulletX = this.x + this.width / 2
        let bulletY = this.y + this.height / 2

        if (dist(smallEnemyX, smallEnemyY, bulletX, bulletY) > 40) {
            return false
        } else {
            return true
        }
    }
}

class WeaponOrangeLeft {
    constructor(playerPositionX, playerPositionY, frameCount) {
        this.image = createImg("./assets/weapons/orange/flamethrower.gif", "flamethrower")
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
