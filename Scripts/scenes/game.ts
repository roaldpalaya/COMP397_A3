module scenes {
    export class Game extends objects.Scene {

        private _bg : createjs.Bitmap;
        private _bird : objects.Player;
        private _enemy : objects.Enemy;
        private _bread: objects.Bread;
        private _scoreLbl :objects.Label;
        private _lifeLbl : objects.Label;
        private _countLbl :objects.Label;
        private _life : number;
        private _timer : number=0;
        private _score:number;
        private _countdown : number;
        constructor() {
            super();
        }

        public start() : void {

            this._life=5;
            this._countdown=60;
            this._score=0;
            //create and add background
            this._bg = new createjs.Bitmap(assets.getResult("Play_BG"));
            this.addChild(this._bg);
            //create and add player character
            this._bird = new objects.Player("fly");
            this.addChild(this._bird);
            //create and add enemy character
            this._enemy = new objects.Enemy("enemy");
            this.addChild(this._enemy);
            //create and add bread character
            this._bread = new objects.Bread("bread");
            this.addChild(this._bread);
            
            //create and add labels
            this._lifeLbl = new objects.Label("life: " +this._life ,"30px Consolar", "#000000",config.Screen.CENTER_X, config.Screen.CENTER_Y-265);
            this.addChild(this._lifeLbl);
             this._countLbl = new objects.Label("time: " +this._countdown,"30px Consolar", "#000000",config.Screen.CENTER_X-200, config.Screen.CENTER_Y-265);
            this.addChild(this._countLbl);
            this._scoreLbl = new objects.Label("score: " +this._score,"30px Consolar", "#000000",config.Screen.CENTER_X+200, config.Screen.CENTER_Y-265);
            this.addChild(this._scoreLbl);
            //added everything on stage
            stage.addChild(this);
        
           
}

        
        public update() : void {
            // Check collisions
            // for(let i of this._ship.getShots) {
            //     collision.check(i, this._enemy);
            // }
            this._collision(this._bird,this._enemy);
            this.time();
            //scrolls the background and checks if it is at the end to reset position
            this._bg.x-=4;
            if(this._bg.x<-800){
                this._bg.x=0;
                this._bg.x-=4;
            }
            
            
            // this.stage.update();
            this._bird.update();
            this._enemy.update();
            this._bread.update();

        }

        //checks time and ends game after set interval
        public time():void {
            this._timer += createjs.Ticker.interval;
            if(this._timer > 60000.0){
                
            scene = config.Scene.GAMEOVER;
            changeScene();
            
            }
            console.log("time: "+ this._timer);
            this._countdown -=(createjs.Ticker.interval/1000);
        }
        
        //collision check
        public _collision(coll:objects.GameObject, objColliding:objects.GameObject) : void{
            if(coll.tr_corner.x > objColliding.tl_corner.x && 
                coll.tr_corner.y < objColliding.bl_corner.y &&
                coll.br_corner.y > objColliding.tl_corner.y)
                 {
                    this._life -= 1;
                    console.log("Cloud HIT" + this._life);
                    collision.destroy(this._enemy);
                    // this._bird.position=new objects.Vector2(config.Screen.WIDTH-650, config.Screen.CENTER_Y);
                }
            else {}
        }
        
    }
}