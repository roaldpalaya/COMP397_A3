/// <reference path = "_reference.ts" />

// Global Variables
var assets: createjs.LoadQueue;
var canvas: HTMLElement;
var stage: createjs.Stage;

var spriteSheetLoader : createjs.SpriteSheetLoader;
var birdAtlas : createjs.SpriteSheet;

var currentScene : objects.Scene;
var scene: number;

var collision: managers.Collision;

// Preload Assets required
var assetData:objects.Asset[] = [
    {id: "Play_BG", src:"../../Assets/images/bg.png"},
    {id: "Menu_BG", src:"../../Assets/images/menuBG.png"},
    {id: "PlayBtn", src:"../../Assets/images/playBtn.png"},
    {id: "InstBtn", src:"../../Assets/images/instBtn.png"},
    {id: "MenuBtn", src:"../../Assets/images/menuBtn.png"},
    {id: "Player", src:"../../Assets/images/0.png"}
];

function preload() {
    // Create a queue for assets being loaded
    assets = new createjs.LoadQueue(false);
    // assets.installPlugin(createjs.Sound);


    // Register callback function to be run when assets complete loading.
    assets.on("complete", init, this);
    assets.loadManifest(assetData);
}

function init() {
    // Reference to canvas element
    canvas = document.getElementById("canvas");
    stage = new createjs.Stage(canvas);
    stage.enableMouseOver(20);
    createjs.Ticker.setFPS(config.Game.FPS);
    createjs.Ticker.on("tick", this.gameLoop, this);

    collision = new managers.Collision();

    let atlasData = {
            
        "images": [
            "../../Assets/images/atlas.png"
        ],

        "frames": [
            [1, 1, 200, 193, 0, -9, -5],
            [203, 1, 149, 145, 0, -33, 0],
            [203, 148, 183, 90, 0, -5, -59],
            [354, 1, 148, 143, 0, -27, -19],
            [388, 146, 170, 90, 0, -17, -48],
            [504, 1, 149, 132, 0, -32, -27],
            [560, 135, 107, 107, 0, -7, -7],
            [655, 1, 149, 126, 0, -31, -31],
            [669, 129, 149, 112, 0, -38, -39],
            [806, 1, 176, 124, 0, -16, -28],
            [820, 127, 149, 111, 0, -33, -38],
            [971, 127, 143, 110, 0, -37, -53],
            [984, 1, 148, 122, 0, -29, -31],
            [1116, 125, 183, 116, 0, -5, -44],
            [1134, 1, 149, 121, 0, -31, -38],
            [1285, 1, 165, 119, 0, -2, -2],
            [1301, 122, 148, 108, 0, -36, -51]
        ],

        "animations": {
            "fly": {
                        "frames": [1,3,5,9,2,14,7,12,10,8,11,16,4,13], "speed": 0.2, "next": true
                    },
            "star": { "frames": [0] },
            "bread": { "frames": [6] },
            "cloud": { "frames": [15] }
        },

        "texturepacker": [
                "SmartUpdateHash: $TexturePacker:SmartUpdate:3fdfb28ea3e496a5b39668b1246b936d:623e3dbe6f063388ac13cc113a77618e:cbce6b53f0f49e0bf15173c25c41f876$",
                "Created with TexturePacker (https://www.codeandweb.com/texturepacker) for EaselJS"
        ]

    }

    birdAtlas = new createjs.SpriteSheet(atlasData);
    scene = config.Scene.MENU;
    changeScene();
}

function gameLoop(event: createjs.Event): void {
    // Update whatever scene is currently active.
    currentScene.update();
    stage.update();
    
}

function changeScene() : void {
    
    // Simple state machine pattern to define scene swapping.
    switch(scene)
    {
        case config.Scene.MENU :
            stage.removeAllChildren();
            currentScene = new scenes.Menu();;
            console.log("Starting MENU scene");
            break;
        case config.Scene.INSTRUCTION :
            stage.removeAllChildren();
            currentScene = new scenes.Instruction();;
            console.log("Starting Instruction scene");
            break;
        case config.Scene.GAME :
            stage.removeAllChildren();
            currentScene = new scenes.Game();
            console.log("Starting SHOOTER scene");
            break;
        case config.Scene.GAMEOVER :
            stage.removeAllChildren();
            currentScene = new scenes.GameOver();
            console.log("Starting Gameover scene");
            break;
    }
    
}