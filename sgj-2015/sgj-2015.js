var canvas = document.getElementById("canvas");
canvas.width = WIDTH;
canvas.height = HEIGHT;

var numPlayers = 4;
var playerTurn = 0;


var players = [];
for(var i=0; i<numPlayers; i++){
    players[i] = new Player(PL_X_POS[2][i],FLOOR_HEIGHT[2],a_i_avatars[i], PL_OFFSETS[i][0], PL_OFFSETS[i][1]);
}

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
    //onWelcome();
};

var step = function() {
    update();
    render();
    animate(step);
};

var update = function() {
    for(var i = 0; i<numPlayers; i++){
        players[i].update();
    }
};

var render = function() {
    renderBackground();
    for(var i = 0; i<numPlayers; i++){
        players[i].render(ctx);
    }
    renderPrepare(ctx);
};

var renderBackground = function(){
    ctx.drawImage(a_i_background,0,0,a_i_background.width,a_i_background.height);
    ctx.drawImage(a_i_highlights,0,0,a_i_highlights.width,a_i_highlights.height);
    ctx.drawImage(a_i_house_cut,0,0,a_i_house_cut.width,a_i_house_cut.height);
}

var restart = function(){

}

var onPrepareEnded = function(){
    //TODO
}

var init = function(){
    //TODO
}
