
// You can write more code here

/* START OF COMPILED CODE */

class Level extends Phaser.Scene {
	
	constructor() {
		super("Level");
	}
	
	create() {
		
		// universe
		const universe = this.add.image(338, 332, "universe");
		universe.scaleX = 1.114157029781283;
		universe.scaleY = 1.171495418756293;
		
		// laserGreen2
		const laserGreen2 = new AnimatedObject(this, 683, 510, "laserGreen2");
		this.add.existing(laserGreen2);
		laserGreen2.deltaAngle = -10;
		
		// laserYellow_burst
		const laserYellow_burst = new AnimatedObject(this, 140, 153, "laserYellow_burst");
		this.add.existing(laserYellow_burst);
		laserYellow_burst.deltaAngle = 5;
		
		// laserBlue3
		const laserBlue3 = new AnimatedObject(this, 593, 155, "laserBlue3");
		this.add.existing(laserBlue3);
		laserBlue3.deltaAngle = -10;
		
		// shipYellow_manned
		const shipYellow_manned = new AnimatedObject(this, 149, 429);
		this.add.existing(shipYellow_manned);
		shipYellow_manned.deltaX = 5;
		shipYellow_manned.minX = 50;
		shipYellow_manned.maxX = 300;
		shipYellow_manned.deltaAngle = 4;
		shipYellow_manned.minAngle = -30;
		shipYellow_manned.maxAngle = 30;
		
		// shipGreen_manned
		const shipGreen_manned = new AnimatedObject(this, 529, 495, "shipGreen_manned");
		this.add.existing(shipGreen_manned);
		shipGreen_manned.deltaX = -5;
		shipGreen_manned.minX = 50;
		shipGreen_manned.maxX = 600;
		shipGreen_manned.deltaY = -5;
		shipGreen_manned.minY = 50;
		shipGreen_manned.maxY = 600;
		
		// fields
		this.animatedObjects = [shipGreen_manned, shipYellow_manned, laserBlue3, laserYellow_burst, laserGreen2];
	}
	
	/** @type {AnimatedObject[]} */
	animatedObjects;
	
	
	/* START-USER-CODE */

	update() {

		for(const obj of this.animatedObjects) {
			obj.animateObject();
		}
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
