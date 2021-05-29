/***
* Gabrielle Velasco
* Rocket Modification
* Section A
* S(hrek) tier Game Redesign
* This project is in-progess. So far, I completed 5 hours.
***/
let config = {
    type: Phaser.autoCenter,
    //backgroundColor: '#FACADE',
    scale: {
        parent: 'index',
        mode: Phaser.Scale.NONE,
        autoCenter: Phaser.Scale.CEMTER_BOTH,
        width: 666,
        height: 666,
        zoom: Phaser.Scale.MAX_ZOOM
    },
    scene: [Menu, Play]
};

let game = new Phaser.Game(config);

// set UI sizes
let borderUISize = game.config.height / 100;
let borderPadding = borderUISize / 300;

// reserve keyboard variables
let keyF, keyR, keyLEFT, keyRIGHT;
