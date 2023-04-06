class Background {
	draw() {
		game.backgroundImage.forEach(function(img) {
			img.y += img.speed
			image(img.src, 0, img.y, width, height)

			image(img.src, 0, img.y -height, width, height)

			if (height <= img.y) img.y = 0
		})
	}
}