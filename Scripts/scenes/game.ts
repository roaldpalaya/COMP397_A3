module scenes {
    export class Game extends objects.Scene {

        private _bg : createjs.Bitmap;
        private _bird : objects.Player;
        private _enemy : objects.Enemy;

        constructor() {
            super();
        }

        public start() : void {
            this._bg = new createjs.Bitmap(assets.getResult("Play_BG"));
            this.addChild(this._bg);

            this._bird = new objects.Player("fly");
            this.addChild(this._bird);

            this._enemy = new objects.Enemy("enemy");
            this.addChild(this._enemy);

            stage.addChild(this);
        }

        public update() : void {
            // Check collisions
            // for(let i of this._ship.getShots) {
            //     collision.check(i, this._enemy);
            // }

            this._bird.update();
            this._enemy.update();
        }
    }
}