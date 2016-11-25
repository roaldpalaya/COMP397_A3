var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/*
    Scene module to group all user-defined scenes  under the same "namespace aka module"
    Menu scene that contains all assets and functionality associated with the menu itself
*/
//Roald Palaya 300714999 
//Last updated 11/24/2016
var scenes;
(function (scenes) {
    var Menu = (function (_super) {
        __extends(Menu, _super);
        // Menu Class Contructor
        function Menu() {
            _super.call(this);
        }
        Menu.prototype.start = function () {
            console.log("Menu Scene Started");
            this._playBtn = new objects.Button("PlayBtn", config.Screen.CENTER_X - 100, config.Screen.CENTER_Y + 150);
            this.addChild(this._playBtn);
            this._playBtn.on("click", this._playBtnClick, this);
            this._instBtn = new objects.Button("InstBtn", config.Screen.CENTER_X + 100, config.Screen.CENTER_Y + 150);
            this.addChild(this._instBtn);
            this._instBtn.on("click", this._instBtnClick, this);
            this._menuBG = new createjs.Bitmap(assets.getResult("Menu_BG"));
            // this.addChild(this._menuBG);
            this.addChildAt(this._menuBG, 0);
            // Add menu scene to global stage container
            stage.addChild(this);
        };
        Menu.prototype.update = function () {
        };
        Menu.prototype._playBtnClick = function (event) {
            scene = config.Scene.GAME;
            changeScene();
        };
        Menu.prototype._instBtnClick = function (event) {
            scene = config.Scene.INSTRUCTION;
            changeScene();
        };
        return Menu;
    }(objects.Scene));
    scenes.Menu = Menu;
})(scenes || (scenes = {}));
//# sourceMappingURL=menu.js.map