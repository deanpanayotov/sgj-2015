/**
 * Created by Dean Panayotov Local on 25.1.2015 г..
 */

var id_counter;
var playerColors = [ CL_RED, CL_BLUE, CL_GREEN, CL_YELLOW];

var Player = function(x, y, avatar, offx, offy, code) {

    this.DEFAULT_DIGIT_COUNT = 4;
    this.MAXYVAR = 30;
    this.SPEED = 2;

    this.id = id_counter++;
    this.name = "Player #" + this.id;
    this.color = playerColors[this.id % 4];
    this.avatar = avatar;

    this.number = code;
    if (typeof this.number == 'undefined') {
        this.number = generateCode(this.DEFAULT_DIGIT_COUNT);
    }
    this.highlighted = false;
    this.highlightDiameterDirection = 0;
    this.highlightAngle = 0;
    this.HIGHLIGHT_DIAMETER_SPEED = 4; //px
    this.HIGHLIGHT_SPIN_SPEED = 0.5; //degree
    this.HIGHLIGHT_DIAMETER_MIN = a_i_selection.width / 2;
    this.HIGHLIGHT_DIAMETER_MAX = a_i_selection.width;
    this.highlightDiameter = this.HIGHLIGHT_DIAMETER_MIN;

    this.x = x;
    this.y = y;
    this.offx = offx;
    this.offy = offy;
    this.newx = x;
    this.newy = y;
    this.yVar = 0;
    this.yDir = this.SPEED;
    this.moving = false;

    this.setNewPos = function (nx, ny) {
        this.newx = nx;
        this.newy = ny;
        this.moving = true;
    }

    this.move = function () {
        this.movingCheck();
        if (this.moving) {
            if (this.x < this.newx) {
                this.x += this.SPEED;
            } else if (this.x > this.newx) {
                this.x -= this.SPEED;
            }
            if (this.y < this.newy) {
                this.y += this.SPEED;
            } else if (this.y > this.newy) {
                this.y -= this.SPEED;
            }
        }
    }

    this.movingCheck = function () {
        if (Math.abs(this.x - this.newx) <= this.SPEED + 1) {
            this.x = this.newx;
        }
        if (Math.abs(this.y - this.newy) <= this.SPEED + 1) {
            this.y = this.newy;
        }
        if (this.x == this.newx && this.y == this.newy) {
            this.moving = false;
        }
    }

    this.update = function () {
        if (this.moving) {
            this.updateYVar();
            this.move();
        }
        if (this.yVar < 0) {
            this.updateYVar();
        }
        if(this.highlighted){
            this.updateHighlight();
        }
    }
    this.updateYVar = function () {
        this.yVar -= this.yDir;
        if (this.yVar <= -30 || this.yVar >= 0) {
            this.yDir *= -1;
        }
    }
    this.updateHighlight = function(){
        if(this.highlightDiameterDirection !=0) {
            this.highlightDiameter += this.HIGHLIGHT_DIAMETER_SPEED * this.highlightDiameterDirection;
            if(this.highlightDiameter >= this.HIGHLIGHT_DIAMETER_MAX){
                this.highlightDiameterDirection = 0;
            }else if(this.highlightDiameter <= this.HIGHLIGHT_DIAMETER_MIN){
                this.highlightDiameterDirection = 0;
                this.highlighted = false;
            }
        }
        this.highlightAngle += this.HIGHLIGHT_SPIN_SPEED;
        if(this.highlightAngle > 360){
            this.highlightAngle -= 360;
        };
    }

    this.highlight = function(){
        this.highlighted = true;
        this.highlightDiameterDirection = 1;
    }

    this.unhighlight = function(){
        this.highlightDiameterDirection = -1;
    }

    this.render = function (ctx) {
        if(this.highlighted){
            ctx.save();
            ctx.translate(this.x, this.y + this.yVar);
            ctx.rotate( 2 * Math.PI * (this.highlightAngle / 360));
            ctx.drawImage(a_i_selection, this.highlightDiameter / -2, this.highlightDiameter / -2, this.highlightDiameter, this.highlightDiameter);
            ctx.restore();
        }
        ctx.drawImage(this.avatar, this.x - this.offx, this.y + this.yVar - this.offy, this.avatar.width, this.avatar.height);
    }
}