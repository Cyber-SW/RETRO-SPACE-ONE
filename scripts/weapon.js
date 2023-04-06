class WeaponGreenLeft {
    constructor(image, playerPositionX, playerPositionY) {
        this.image = image
        this.x = playerPositionX + 37
		this.y = playerPositionY + 80
        this.width = 80
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

        if (dist(smallEnemyX, smallEnemyY, bulletX, bulletY) > 50) {
            return false
        } else {
            return true
        }
    }
}

class WeaponGreenRight {
    constructor(image, playerPositionX, playerPositionY) {
        this.image = image
        this.x = playerPositionX + 83
		this.y = playerPositionY + 80
        this.width = 80
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

        if (dist(smallEnemyX, smallEnemyY, bulletX, bulletY) > 50) {
            return false
        } else {
            return true
        }
    }
}

class WeaponRedLeft {
    constructor(image, playerPositionX, playerPositionY) {
        this.image = image
        this.x = playerPositionX + 14
		this.y = playerPositionY - 570
        this.width = 52
        this.height = 700
        this.initialFrameCount = frameCount
    }
    
    draw() {
        image(this.image, this.x, this.y, this.width, this.height)
    }

    bulletCollision(smallEnemyInfo) { 
        let smallEnemyX = smallEnemyInfo.x + smallEnemyInfo.width /2
        let smallEnemyY = smallEnemyInfo.y + smallEnemyInfo.height /2
        let bulletX = this.x + this.width / 2
        let bulletY = this.y + this.height / 2

        if (dist(smallEnemyX, smallEnemyY, bulletX, bulletY) > 110) {
            return false
        } else {
            game.soundeffects[1].src.play()
            return true
        }
    }
}

class WeaponRedRight {
    constructor(image, playerPositionX, playerPositionY) {
        this.image = image
        this.x = playerPositionX + 106
		this.y = playerPositionY - 570
        this.width = 52
        this.height = 700
        this.initialFrameCount = frameCount
    }
    
    draw() {
        image(this.image, this.x, this.y, this.width, this.height) 
    }

    bulletCollision(smallEnemyInfo) { 
        let smallEnemyX = smallEnemyInfo.x + smallEnemyInfo.width /2
        let smallEnemyY = smallEnemyInfo.y + smallEnemyInfo.height /2
        let bulletX = this.x + this.width / 2
        let bulletY = this.y + this.height / 2

        if (dist(smallEnemyX, smallEnemyY, bulletX, bulletY) > 110) {
            return false
        } else {
            game.soundeffects[1].src.play()
            return true
        }
    }
}

class WeaponOrangeLeft {
    constructor(image, playerPositionX, playerPositionY) {
        this.image = image
        this.x = playerPositionX - 30
		this.y = playerPositionY - 30
        this.width = 150
        this.height = 150
        this.velocity = 10
    }
    
    draw() {
        this.y -= this.velocity
        image(this.image, this.x, this.y + 10, this.width, this.height)
    }

    bulletCollision(smallEnemyInfo) { 
        let smallEnemyX = smallEnemyInfo.x + smallEnemyInfo.width /2
        let smallEnemyY = smallEnemyInfo.y + smallEnemyInfo.height /2
        let bulletX = this.x + this.width / 2
        let bulletY = this.y + this.height / 2

        if (dist(smallEnemyX, smallEnemyY, bulletX, bulletY) > 35) {
            return false
        } else {
            return true
        }
    }
}

class WeaponOrangeLeft2 {
    constructor(image, playerPositionX, playerPositionY) {
        this.image = image
        this.x = playerPositionX - 15
		this.y = playerPositionY - 30
        this.width = 150
        this.height = 150
        this.velocity = 11
    }
    
    draw() {
        this.y -= this.velocity
        image(this.image, this.x, this.y + 10, this.width, this.height)
    }

    bulletCollision(smallEnemyInfo) { 
        let smallEnemyX = smallEnemyInfo.x + smallEnemyInfo.width /2
        let smallEnemyY = smallEnemyInfo.y + smallEnemyInfo.height /2
        let bulletX = this.x + this.width / 2
        let bulletY = this.y + this.height / 2

        if (dist(smallEnemyX, smallEnemyY, bulletX, bulletY) > 35) {
            return false
        } else {
            return true
        }
    }
}

class WeaponOrangeRight {
    constructor(image, playerPositionX, playerPositionY) {
        this.image = image
        this.x = playerPositionX + 40
		this.y = playerPositionY - 30
        this.width = 150
        this.height = 150
        this.velocity = 11
    }
    
    draw() {
        this.y -= this.velocity
        image(this.image, this.x, this.y + 10, this.width, this.height)
    }

    bulletCollision(smallEnemyInfo) { 
        let smallEnemyX = smallEnemyInfo.x + smallEnemyInfo.width /2
        let smallEnemyY = smallEnemyInfo.y + smallEnemyInfo.height /2
        let bulletX = this.x + this.width / 2
        let bulletY = this.y + this.height / 2

        if (dist(smallEnemyX, smallEnemyY, bulletX, bulletY) > 35) {
            return false
        } else {
            return true
        }
    }
}

class WeaponOrangeRight2 {
    constructor(image, playerPositionX, playerPositionY) {
        this.image = image
        this.x = playerPositionX + 55
		this.y = playerPositionY - 30
        this.width = 150
        this.height = 150
        this.velocity = 10
    }
    
    draw() {
        this.y -= this.velocity
        image(this.image, this.x, this.y + 10, this.width, this.height)
    }

    bulletCollision(smallEnemyInfo) { 
        let smallEnemyX = smallEnemyInfo.x + smallEnemyInfo.width /2
        let smallEnemyY = smallEnemyInfo.y + smallEnemyInfo.height /2
        let bulletX = this.x + this.width / 2
        let bulletY = this.y + this.height / 2

        if (dist(smallEnemyX, smallEnemyY, bulletX, bulletY) > 35) {
            return false
        } else {
            return true
        }
    }
}
