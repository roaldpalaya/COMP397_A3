module scenes {
    export class GameOver extends objects.Scene {

        private _bg : createjs.Bitmap;
        private _menuBtn : objects.Button;

        constructor() {
            super();
        }

        public start() : void {
            this._bg = new createjs.Bitmap(assets.getResult("Space_BG"));
            this.addChild(this._bg);
            this._menuBtn=new objects.Button("MenuBtn", config.Screen.CENTER_X, config.Screen.CENTER_Y + 150);
            this.addChild(this._menuBtn);
            this._menuBtn.on("click", this._menuBtnClick, this);
          
            stage.addChild(this);
        }

         public update() : void {

        }

        private _menuBtnClick(event : createjs.MouseEvent) {
            scene = config.Scene.MENU;
            changeScene();
        }
    }
}