module objects {
    export class Bread extends objects.GameObject {

        private _move : objects.Vector2;
        private _speed : number;
        private _counter : number;
        // public variables
        public name:string;
        public width:number;
        public height:number;
        public center:objects.Vector2;

        private _spawn() :void{
               
        }
               
         constructor(imageString:string) {
           
            super(imageString, "bread");

            this.name = "bread";
            this.position = new objects.Vector2(config.Screen.WIDTH, Math.floor(Math.random()*400));
            this.regX = this.getBounds().width * 0.5;
            this.regY = this.getBounds().height * 0.5;
            this._speed = 4;
            this._counter=1;

            // while(this._counter<4){
            //     super(imageString, "cloud");
            //     this._counter ++;
            // }
        }
        public update() : void {
            super.update();
            this.position.x -= this._speed;
            if (this.position.x<0){
                currentScene.removeChild(this);
               // this._counter-=1;
            }
        }
        
    }
}