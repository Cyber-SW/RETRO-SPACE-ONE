class Background {
	draw() {
    // Instead of loading each image separate, we use a loop
		// image(game.backgroundImages[0].src, 0, 0, width, height)
		// image(game.backgroundImages[1].src, 0, 0, width, height)
		// image(game.backgroundImages[2].src, 0, 0, width, height)
		// image(game.backgroundImages[3].src, 0, 0, width, height)
		// image(game.backgroundImages[4].src, 0, 0, width, height)

		game.backgroundImage.forEach(function (img) {
			img.y += img.speed
			image(img.src, 0, img.y, width, height)
			// Here we add a second image
			image(img.src, 0, img.y -height, width, height)

			// When the image leaves the screen we set it to the starting position
			if (height <= img.y) img.y = 0
		})
		console.log(game.backgroundImage)
	}
}