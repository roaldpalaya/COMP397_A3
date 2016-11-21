module objects {
    export class Player extends objects.GameObject {

        private _keyPressed : number;
        private _shots : objects.Laser[];

        private _timeBetweenShots : number = 1;
        private _timer : number = 0;

        // PUBLIC VARIABLES
        public name:string;
        public width:number;
        public height:number;
        public centerX:number;
        public centerY:number;

        constructor(imageString:string) {
            super(imageString, "fly");

            this._shots = [];

            //this.start();
            this.position = new objects.Vector2(config.Screen.WIDTH-650, config.Screen.CENTER_Y);
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;

            window.onkeydown = this._onKeyDown;
            window.onkeyup = this._onKeyUp;
        }

        get getShots() : objects.Laser[] {
            return this._shots;
        }

        public update() : void {
            super.update();

            this._timer += createjs.Ticker.interval;
            

            if(controls.UP) {
                this.moveUp();
            }
            
            if(controls.DOWN) {
                this.moveDown();
            }

            

            for (let laser of this._shots) {
                laser.update();
            }

            console.log(this._timer);
        }

        private _onKeyDown(event : KeyboardEvent) {
            switch(event.keyCode) {
                case keys.W:
                    console.log("W key pressed");
                    controls.UP = true;
                    break;
                case keys.S:
                    console.log("S key pressed");
                    controls.DOWN = true;
                    break;
               
            }
        }

        private _onKeyUp(event : KeyboardEvent) {
             switch(event.keyCode) {
                case keys.W:
                    controls.UP = false;
                    break;
                case keys.S:
                    controls.DOWN = false;
                    break;
               
            }
        }

        public moveUp() {
            this.position.y -= 5;
        }

        public moveDown() {
            this.position.y += 5;
        }

       
    }
}