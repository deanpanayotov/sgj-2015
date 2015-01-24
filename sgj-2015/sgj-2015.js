var canvas = document.getElementById("canvas");
canvas.width = WIDTH;
canvas.height = HEIGHT;
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
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(0, 0, WIDTH, HEIGHT);
    ctx.fillStyle = "#000000";
    var num = 10;
    var h = HEIGHT / num;
    for(var i = 0; i < num; i += 2){
        ctx.fillRect(0, h* i, WIDTH, h);
    }
    console.log("kkf");
}

var restart = function(){

}


//window.onResize = function() {
//    onResize();
//}
//
//onResize();
//
//function onResize() {
//
//}
