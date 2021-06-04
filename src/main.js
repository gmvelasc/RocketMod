/***
* Gabrielle Velasco
* Rocket Modification
* Section A
* Starting: Add your own (copyright-free) background music to the Play scene (5)
* Novice: Create a new title screen (e.g., new artwork, typography, layout) (10)
* Intermediate: Create new artwork for all of the in-game assets (rocket, spaceships, explosion) (20)
***/
let config = {
    type: Phaser.autoCenter,
    //backgroundColor: '#FACADE',
    scale: {
        parent: 'index',
        mode: Phaser.Scale.NONE,
        autoCenter: Phaser.Scale.CEMTER_BOTH,
        width: 640,
        height: 480,
        zoom: Phaser.Scale.MAX_ZOOM
    },
    scene: [Menu, Play]
};

let game = new Phaser.Game(config);

// set UI sizes
let borderUISize = game.config.height / 13;
let borderPadding = borderUISize / 4;

// reserve keyboard variables
let keyF, keyR, keyLEFT, keyRIGHT;
