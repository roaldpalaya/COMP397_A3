/*
    Scene module to group all user-defined scenes  under the same "namespace aka module"
    Menu scene that contains all assets and functionality associated with the menu itself
*/
//Roald Palaya 300714999 
//Last updated 11/24/2016
module scenes {
    export class Menu extends objects.Scene {

        // Private instance variables
        // Label or bitmap
        // Button 
        private _playBtn : objects.Button;
        private _instBtn : objects.Button;
        private _menuBG : createjs.Bitmap;
        // Menu Class Contructor
        constructor() {
            super();
        }

        public start() : void {
            console.log("Menu Scene Started");

            this._playBtn = new objects.Button("PlayBtn", config.Screen.CENTER_X-100, config.Screen.CENTER_Y + 150);
            this.addChild(this._playBtn);
            this._playBtn.on("click", this._playBtnClick, this);

            this._instBtn = new objects.Button("InstBtn", config.Screen.CENTER_X+100, config.Screen.CENTER_Y + 150);
            this.addChild(this._instBtn);
            this._instBtn.on("click", this._instBtnClick, this);

            this._menuBG = new createjs.Bitmap(assets.getResult("Menu_BG"));
            // this.addChild(this._menuBG);

            this.addChildAt(this._menuBG, 0);

            // Add menu scene to global stage container
            stage.addChild(this);
        }

        public update() : void {

        }

        private _playBtnClick(event : createjs.MouseEvent) {
            scene = config.Scene.GAME;
            changeScene();
        }
        private _instBtnClick(event : createjs.MouseEvent) {
            scene = config.Scene.INSTRUCTION;
            changeScene();
        }
    }
}