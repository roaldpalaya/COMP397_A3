var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var Game = (function (_super) {
        __extends(Game, _super);
        function Game() {
            _super.call(this);
        }
        Game.prototype.start = function () {
            this._bg = new createjs.Bitmap(assets.getResult("Play_BG"));
            this.addChild(this._bg);
            this._bird = new objects.Player("fly");
            this.addChild(this._bird);
            this._enemy = new objects.Enemy("enemy");
            this.addChild(this._enemy);
            stage.addChild(this);
        };
        Game.prototype.update = function () {
            // Check collisions
            // for(let i of this._ship.getShots) {
            //     collision.check(i, this._enemy);
            // }
            this._bird.update();
            this._enemy.update();
        };
        return Game;
    }(objects.Scene));
    scenes.Game = Game;
})(scenes || (scenes = {}));
//# sourceMappingURL=game.js.map