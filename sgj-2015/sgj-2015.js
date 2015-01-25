var canvas = document.getElementById("canvas");
var wrapper = document.getElementById("wrapper");
var a_i_background = new Image();
a_i_background.src = 'assets/bg_canvas.jpg';

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
    ctx.drawImage(a_i_background,0,0,900,1600);
}

var restart = function(){

}