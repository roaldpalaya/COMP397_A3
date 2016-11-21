module objects {
    export class Enemy extends objects.GameObject {

        private _move : objects.Vector2;
        private _speed : number;

        // public variables
        public name:string;
        public width:number;
        public height:number;
        public center:objects.Vector2;

        constructor(imageString:string) {
            super(imageString, "cloud");

            this.name = "cloud";
            this.position = new objects.Vector2(config.Screen.WIDTH, Math.floor(Math.random()*450));
            this.regX = this.getBounds().width * 0.5;
            this.regY = this.getBounds().height * 0.5;
            this._speed = 1;

        }

        public update() : void {
            super.update();
            this.position.x -= this._speed;
        }
    }
}