//Roald Palaya 300714999 
//Last updated 11/24/2016
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    var Bread = (function (_super) {
        __extends(Bread, _super);
        function Bread(imageString) {
            _super.call(this, imageString, "bread");
            this.name = "bread";
            this.position = new objects.Vector2(config.Screen.WIDTH, Math.floor(Math.random() * 400));
            this.regX = this.getBounds().width * 0.5;
            this.regY = this.getBounds().height * 0.5;
            this._speed = 5;
            this._counter = 1;
            // while(this._counter<4){
            //     super(imageString, "cloud");
            //     this._counter ++;
            // }
        }
        Bread.prototype._spawn = function () {
        };
        Bread.prototype.update = function () {
            _super.prototype.update.call(this);
            this.position.x -= this._speed;
            if (this.position.x < 0) {
                currentScene.removeChild(this);
            }
        };
        return Bread;
    }(objects.GameObject));
    objects.Bread = Bread;
})(objects || (objects = {}));
//# sourceMappingURL=bread.js.map