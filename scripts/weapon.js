class WeaponGreen {
    constructor(image, playerPositionX, playerPositionY, weaponPositionX) {
        this.image = image
        this.x = playerPositionX + weaponPositionX
		this.y = playerPositionY + 80
        this.width = 80
        this.height = 80
        this.velocity = 25
    }
    
    draw() {
        this.y -= this.velocity
        image(this.image, this.x, this.y, this.width, this.height)
    }

    bulletCollision(enemyInfo) {
        let enemyX = enemyInfo.x + enemyInfo.width /2
        let enemyY = enemyInfo.y + enemyInfo.height /2
        let bulletX = this.x + this.width / 2
        let bulletY = this.y + this.height / 2

        if (dist(enemyX, enemyY, bulletX, bulletY) > 50) {
            return false
        } else {
            return true
        }
    }
}

class WeaponRed {
    constructor(image, playerPositionX, playerPositionY) {
        this.image = image
        this.x = playerPositionX
		this.y = playerPositionY - 570
        this.width = 52
        this.height = 700
        this.initialFrameCount = frameCount
    }
    
    draw() {
        image(this.image, this.x + 14, this.y, this.width, this.height)
        image(this.image, this.x + 106, this.y, this.width, this.height)
    }

    bulletCollision(enemyInfo) { 
        let enemyX = enemyInfo.x + enemyInfo.width / 2
        let enemyY = enemyInfo.y + enemyInfo.height / 2
        
        if ((enemyX > this.x + 14 && enemyX < this.x + 66 && enemyY > this.y && enemyY < this.y + 700) || 
            (enemyX > this.x + 106 && enemyX < this.x + 158 && enemyY > this.y && enemyY < this.y + 700)) {
            game.soundeffects[1].src.play()
            return true
        } else {
            return false
        }
    }
}

class WeaponOrange {
    constructor(image, playerPositionX, playerPositionY, weaponPositionX, weaponOption) {
        this.image = image
        this.x = playerPositionX + weaponPositionX
		this.y = playerPositionY - 30
        this.width = 150
        this.height = 150
        this.velocity = 10
        this.weaponOption = weaponOption
    }
    
    draw() {
        if (this.weaponOption === "inner") {
            this.y -= this.velocity + 1
            image(this.image, this.x, this.y + 10, this.width, this.height)
        } else if (this.weaponOption === "outer") {
            this.y -= this.velocity
            image(this.image, this.x, this.y + 10, this.width, this.height)
        }
    }

    bulletCollision(enemyInfo) { 
        let enemyX = enemyInfo.x + enemyInfo.width /2
        let enemyY = enemyInfo.y + enemyInfo.height /2
        let bulletX = this.x + this.width / 2
        let bulletY = this.y + this.height / 2

        if (dist(enemyX, enemyY, bulletX, bulletY) > 35) {
            return false
        } else {
            return true
        }
    }
}
