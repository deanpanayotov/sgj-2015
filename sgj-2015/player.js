/**
 * Created by Dean Panayotov Local on 25.1.2015 г..
 */

var id_counter;
var playerColors = [ CL_RED, CL_BLUE, CL_GREEN, CL_YELLOW];

var Player = function(x, y, avatar, offx, offy){

    this.MAXYVAR = 30;
    this.SPEED = 2;

    this.id = id_counter++;
    this.name = "Player #"+this.id;
    this.color = playerColors[this.id%4];
    this.yVar = 0;
    this.x = x;
    this.y = y;
    this.offx = offx;
    this.offy = offy;
    this.avatar = avatar;
    this.newx = x;
    this.newy = y;
    this.yDir = this.SPEED;
    this.moving = false;
    this.setNewPos = function(nx, ny){
        this.newx = nx;
        this.newy = ny;
        this.moving = true;
    }

    this.move = function(){
        this.movingCheck();
        if(this.moving){
            if(this.x < this.newx){
                this.x += this.SPEED;
            }else if(this.x > this.newx){
                this.x -= this.SPEED;
            }
            if(this.y < this.newy){
                this.y += this.SPEED;
            }else if(this.y > this.newy){
                this.y -= this.SPEED;
            }
        }
    }

    this.movingCheck = function() {
        if(Math.abs(this.x-this.newx) <= this.SPEED+1){
            this.x = this.newx;
        }
        if(Math.abs(this.y-this.newy) <= this.SPEED+1){
            this.y = this.newy;
        }
        if(this.x == this.newx && this.y == this.newy){
            this.moving = false;
        }
    }

    this.update = function() {
        if(this.moving){
            this.updateYVar();
            this.move();
        }
        if(this.yVar<0){
            this.updateYVar();
        }
    }
    this.updateYVar = function(){
        this.yVar -= this.yDir;
        if(this.yVar <= -30 || this.yVar >= 0){
            this.yDir *= -1;
        }
    }

    this.render = function(ctx){
        ctx.drawImage(this.avatar,this.x+this.offx,this.y+this.yVar-this.offy,this.avatar.width,this.avatar.height);
    }
}