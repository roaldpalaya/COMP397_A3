var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var Instruction = (function (_super) {
        __extends(Instruction, _super);
        function Instruction() {
            _super.call(this);
        }
        Instruction.prototype.start = function () {
            this._bg = new createjs.Bitmap(assets.getResult("Menu_BG"));
            this.addChild(this._bg);
            this._menuBtn = new objects.Button("MenuBtn", config.Screen.CENTER_X, config.Screen.CENTER_Y + 150);
            this.addChild(this._menuBtn);
            this._menuBtn.on("click", this._menuBtnClick, this);
            stage.addChild(this);
        };
        Instruction.prototype.update = function () {
        };
        Instruction.prototype._menuBtnClick = function (event) {
            scene = config.Scene.MENU;
            changeScene();
        };
        return Instruction;
    }(objects.Scene));
    scenes.Instruction = Instruction;
})(scenes || (scenes = {}));
//# sourceMappingURL=instruction.js.map