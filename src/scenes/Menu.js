class Menu extends Phaser.Scene {
  constructor() {
      super("menuScene");
  }

  preload() {
      // load Bg
      this.load.image('menu', './assets/menu.png');
      // load audio
      this.load.audio('sfx_select', './assets/blip_select12.wav');
      this.load.audio('sfx_explosion', './assets/explosion38.wav');
      this.load.audio('sfx_rocket', './assets/rocket_shot.wav');
  }

  create() {
      this.background = this.add.tileSprite(0, 0, 640, 480, 'menu').setOrigin(0, 0);
      // menu text configuration
      let menuConfig = {
          fontFamily: 'Arial',
          fontSize: '20px',
          backgroundColor: '#FACADE',
          color: '#000',
          align: 'center',
          padding: {
              top: 5,
              bottom: 5,
          },
          fixedWidth: 0
      }

      // show menu text  
      this.add.text(game.config.width/2, game.config.height/2 - borderUISize - borderPadding, 'ROCKET PATROL', menuConfig).setOrigin(0.5);
      this.add.text(game.config.width/2, game.config.height/2, 'Use ←→ arrows to move & (F) to fire', menuConfig).setOrigin(0.5);
      menuConfig.backgroundColor = '#FF00AE';
      menuConfig.color = '#B2B4C0';
      this.add.text(game.config.width/2, game.config.height/2 + borderUISize + borderPadding, 'Press ← for Novice or → for Expert', menuConfig).setOrigin(0.5);

      // define keys
      keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
      keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
  }

  update() {
      if (Phaser.Input.Keyboard.JustDown(keyLEFT)) {
        // Novice mode
        game.settings = {
          spaceshipSpeed: 3,
          gameTimer: 60000    
        }
        this.sound.play('sfx_select');
        this.scene.start("playScene");    
      }
      if (Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
        // Expert mode
        game.settings = {
          spaceshipSpeed: 6,
          gameTimer: 45000    
        }
        this.sound.play('sfx_select');
        this.scene.start("playScene");    
      }
    }
}
