/***
* Gabrielle Velasco
* Rocket Modification
* Section A
* Implemented Canvas UI, Changed green border to alpha
* Altered Starfield.png
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
    scene: [Play]
};

let game = new Phaser.Game(config);

// set UI sizes
let borderUISize = game.config.height / 13;
let borderPadding = borderUISize / 4;

// reserve keyboard variables
let keyF, keyR, keyLEFT, keyRIGHT;
