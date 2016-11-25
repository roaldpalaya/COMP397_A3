//Roald Palaya 300714999 
//Last updated 11/24/2016

module scenes {
    export class Game extends objects.Scene {

        private _bg : createjs.Bitmap;
        private _bird : objects.Player;
        private _enemy : objects.Enemy;
        private _bread: objects.Bread;
        private _scoreLbl :objects.Label;
        private _lifeLbl : objects.Label;
        private _countLbl :objects.Label;
       
       
        private _life : number=6;
        private _lifenum : number=0;
        private _timer : number=0;
        private _counter : number=60;
        private _score:number=0;
        private _scorenum:number=0;
        private _countdown : number=0;
        private test: boolean;
        private _limit : number = 0;
       
        constructor() {
            super();
        }

        public start() : void {

            
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
             this._countLbl = new objects.Label("time: " +this._counter,"30px Consolar", "#000000",config.Screen.CENTER_X-200, config.Screen.CENTER_Y-265);
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
            
            //scrolls the background and checks if it is at the end to reset position
            this._bg.x-=4;
            if(this._bg.x<-800){
                this._bg.x=0;
                this._bg.x-=4;
            }
            this.time();
            this.test=false;

            //destroy cloud when it reaches the end (not working)
            //   if (this._enemy.x<0){
            //     collision.destroy(this._enemy);
            // }
           console.log("opening test: "+ this.test);
           this._healthpoints( this._collision(this._bird,this._enemy));
           console.log("opening test hp: "+ this.test);
           this._scorepoints(this._collision(this._bird, this._bread));
           // this._collisionBread(this._bird, this._bread);
            
            
            this.stage.update();
            this._bird.update();
            this._enemy.update();
            this._bread.update();

        }

        //checks time and ends game after set interval
        public time():void {
            createjs.Ticker.interval=20;
            this._limit+=createjs.Ticker.interval;
            
            this._timer += createjs.Ticker.interval/1000;
             this._countdown=Math.floor(this._timer);
             this._counter=60.0;
            if(this._timer >61.0){
                
            scene = config.Scene.GAMEOVER;
            changeScene();
                        
            }
            //  //adds other enemies but spawns them and becomes one clutter and doesn't move
            // if (this._countdown % 5==0 && this._limit % 300==0){
            //     
            // this._enemy= new objects.Enemy("enemy");
            // this.addChild(this._enemy);
            // }
            
            
           this._counter-=this._countdown;
           console.log("limit: "+this._limit);
            console.log("time: "+ this._timer + " count: "+ this._countdown);
            this._countLbl.text="time: "+ this._counter;
        }
        
        //collision check
        public _collision(coll:objects.GameObject, objColliding:objects.GameObject) : boolean{
          
            if(coll.x >=objColliding.x+ objColliding.width || coll.x + coll.width <= objColliding.x|| coll.y >= objColliding.y + objColliding.height|| coll.y + coll.height <=objColliding.y)
                 {
                    this.test=false;
                      }
            else {
                    this.test=true;
                   
            }
            console.log("test result : " + this.test);
            return this.test;
            
        }
        //deducts life when hit by cloud
        public _healthpoints(colltest:boolean):void{
            if(colltest==true){
                     this._life -= 0.01;
                     this._lifenum=Math.floor(this._life);
                    console.log("Cloud HIT" + this._life);
                    this._lifeLbl.text="life: "+this._lifenum;
                    
                     
                     
            }
            if(this._lifenum<1){
            scene = config.Scene.GAMEOVER;
            changeScene();
            }
            
        }
        //adds score when bread is hit
        public _scorepoints(colltest:boolean):void{
            if(colltest==true){
                     this._score += 0.2;
                     this._scorenum=Math.floor(this._score);
                    console.log("Bread HIT" + this._score);
                    this._scoreLbl.text="score: "+this._scorenum;
                   // collision.destroy(this._bread);

                }
                     
                    //
        }
        
    }
}