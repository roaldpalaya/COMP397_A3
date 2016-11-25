var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
//Roald Palaya 300714999 
//Last updated 11/24/2016
var scenes;
(function (scenes) {
    var GameOver = (function (_super) {
        __extends(GameOver, _super);
        function GameOver() {
            _super.call(this);
        }
        GameOver.prototype.start = function () {
            this._bg = new createjs.Bitmap(assets.getResult("Go_BG"));
            this.addChild(this._bg);
            this._menuBtn = new objects.Button("MenuBtn", config.Screen.CENTER_X, config.Screen.CENTER_Y + 100);
            this.addChild(this._menuBtn);
            this._menuBtn.on("click", this._menuBtnClick, this);
            stage.addChild(this);
        };
        GameOver.prototype.update = function () {
        };
        GameOver.prototype._menuBtnClick = function (event) {
            scene = config.Scene.MENU;
            changeScene();
        };
        return GameOver;
    }(objects.Scene));
    scenes.GameOver = GameOver;
})(scenes || (scenes = {}));
//# sourceMappingURL=gameOver.js.map