/**
 * Created by Dean Panayotov Local on 29.1.2015 г..
 */

var CherryBlossom = function(){

    this.RADIUS = 2;
    this.FADE_OUT_SPEED = 1;
    this.GROUND_X = 1530;
    this.BASE_Y_SPEED = 7;
    this.VAR_Y_SPEED = 1;
    this.MAX_X_SPEED = 2;
    this.H = 335;
    this.MAX_S = 35;
    this.L = 100;

    this.dead = false;
    this.onGround = false;


    if((Math.random() > 0.5)){
        this.x = Math.random() * WIDTH;
        this.y = 0;
    }else{
        this.x = WIDTH;
        this.y = Math.random() * HEIGHT;
    }
    this.xspeed = Math.random() * this.MAX_X_SPEED * -1;
    this.yspeed = this.BASE_Y_SPEED + this.VAR_Y_SPEED * Math.random();
    this.s = Math.floor(Math.random()*this.MAX_S);
    this.alpha = 1.0;
    this.color = "hsla("+this.H+","+this.s+"%,"+this.L+"%,+"+this.alpha+")";
    this.update = function(){
        if(!this.dead) {
            if (this.onGround) {
                this.alpha -= this.FADE_OUT_SPEED;
                if (this.alpha <= 0) {
                    this.alpha = 0;
                    this.dead = true;
                }
            } else {
                this.x += this.xspeed;
                this.y += this.yspeed;
                if (this.x >= this.GROUND_X) {
                    this.onGround = true;
                }
            }
        }
    }

    this.render = function(ctx){
        if(this.onGround){
            this.color = "hsla("+this.H+","+this.s+"%,"+this.L+"%,+"+this.alpha+")";
        }
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.RADIUS, 0, 2 * Math.PI, false);
        ctx.fill();
    }
}

var BlossomManager = function(){
    var self = this;
    this.MAX_LEAVES = 100;
    this.FIRE_RATE = 100;
    this.MAX_LEAVES_SPAWN = 5;

    this.leaves = [ new CherryBlossom() ];
    this.spawn = function(){
        console.log(self);
        if(self.leaves.length < self.MAX_LEAVES){
            var count = Math.floor(Math.random() * self.MAX_LEAVES_SPAWN);
            for(var i=0; i<count;i++){
                self.leaves.push(new CherryBlossom());
            }
        }
        setInterval(this.spawn, this.FIRE_RATE);
    }
    this.start = function(){
        this.spawn();
    }

    this.update = function(){
        for(var i=0;i<this.leaves.length;i++){
            this.leaves[i].update();
            if(this.leaves[i].dead){
                this.leaves.splice(i, 1);
            }
        }
    }
    this.render = function(ctx){
        for(var i=0;i<this.leaves.length;i++){
            this.leaves[i].render(ctx);
        }
    }
}