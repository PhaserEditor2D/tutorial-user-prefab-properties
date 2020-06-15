
// You can write more code here

/* START OF COMPILED CODE */

class AnimatedObject extends Phaser.GameObjects.Image {
	
	constructor(scene, x, y, texture, frame) {
		super(scene, x, y, texture || "shipYellow_manned");
	}
	
	/** @type {Phaser.GameObjects.Image} */
	shipYellow_manned;
	
	/** @type {number} */
	deltaX = 0;
	
	/** @type {number} */
	minX = 0;
	
	/** @type {number} */
	maxX = 0;
	
	/** @type {number} */
	deltaY = 0;
	
	/** @type {number} */
	minY = 0;
	
	/** @type {number} */
	maxY = 0;
	
	/** @type {number} */
	deltaAngle = 0;
	
	/** @type {number} */
	minAngle = -360;
	
	/** @type {number} */
	maxAngle = 360;
	
	
	/* START-USER-CODE */

	animateObject() {

		this.x += this.deltaX;

		if (this.x < this.minX) {
			this.deltaX = Math.abs(this.deltaX);
		}

		if (this.x > this.maxX) {
			this.deltaX = -Math.abs(this.deltaX);
		}

		this.y += this.deltaY;

		if (this.y < this.minY) {
			this.deltaY = Math.abs(this.deltaY);
		}

		if (this.y > this.maxY) {
			this.deltaY = -Math.abs(this.deltaY);
		}

		this.angle += this.deltaAngle;

		if (this.angle < this.minAngle) {
			this.deltaAngle = Math.abs(this.deltaAngle);
		}

		if (this.angle > this.maxAngle) {
			this.deltaAngle = -Math.abs(this.deltaAngle);
		}
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
