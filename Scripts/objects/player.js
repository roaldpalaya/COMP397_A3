var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    var Player = (function (_super) {
        __extends(Player, _super);
        function Player(imageString) {
            _super.call(this, imageString, "fly");
            this._timeBetweenShots = 1;
            this._timer = 0;
            this._shots = [];
            //this.start();
            this.position = new objects.Vector2(config.Screen.WIDTH - 650, config.Screen.CENTER_Y);
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            window.onkeydown = this._onKeyDown;
            window.onkeyup = this._onKeyUp;
        }
        Object.defineProperty(Player.prototype, "getShots", {
            get: function () {
                return this._shots;
            },
            enumerable: true,
            configurable: true
        });
        Player.prototype.update = function () {
            _super.prototype.update.call(this);
            this._timer += createjs.Ticker.interval;
            if (controls.UP) {
                this.moveUp();
            }
            if (controls.DOWN) {
                this.moveDown();
            }
            for (var _i = 0, _a = this._shots; _i < _a.length; _i++) {
                var laser = _a[_i];
                laser.update();
            }
            console.log(this._timer);
        };
        Player.prototype._onKeyDown = function (event) {
            switch (event.keyCode) {
                case keys.W:
                    console.log("W key pressed");
                    controls.UP = true;
                    break;
                case keys.S:
                    console.log("S key pressed");
                    controls.DOWN = true;
                    break;
            }
        };
        Player.prototype._onKeyUp = function (event) {
            switch (event.keyCode) {
                case keys.W:
                    controls.UP = false;
                    break;
                case keys.S:
                    controls.DOWN = false;
                    break;
            }
        };
        Player.prototype.moveUp = function () {
            this.position.y -= 5;
        };
        Player.prototype.moveDown = function () {
            this.position.y += 5;
        };
        return Player;
    }(objects.GameObject));
    objects.Player = Player;
})(objects || (objects = {}));
//# sourceMappingURL=player.js.map