var canvas = document.getElementById("canvas");
var wrapper = document.getElementById("wrapper");

canvas.width = WIDTH;
canvas.height = HEIGHT;

//canvas.width = wrapper.clientWidth;
//canvas.height = wrapper.clientHeight;

var ctx = canvas.getContext("2d");

var keysDown = {};

window.addEventListener("keydown", function(event) {
    keysDown[event.keyCode] = true;
});

window.addEventListener("keyup", function(event) {
    delete keysDown[event.keyCode];
});

var animate = window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    function(callback) { window.setTimeout(callback, 1000/60) };


window.onload = function() {
    animate(step);
};

var step = function() {
    update();
    render();
    animate(step);
};

var update = function() {

};

var render = function() {
    renderBackground();
};

var renderBackground = function(){
    ctx.fillStyle = "#008800";
    ctx.fillRect(0, 0, WIDTH, HEIGHT);
    ctx.fillStyle = "#660066";
    var num = 10;
    var h = HEIGHT / num;
    for(var i = 0; i < num; i += 2){
        ctx.fillRect(0, h* i, WIDTH, h);
    }
}

var restart = function(){

}
