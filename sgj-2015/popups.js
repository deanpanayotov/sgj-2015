/**
 * Created by Dean Panayotov Local on 25.1.2015 г..
 */

var fade = document.getElementById('fade');
var sc_welcome = document.getElementById('welcome');
var btn_new_game = document.getElementById('btn_new_game');
var btn_how_to = document.getElementById('btn_how_to');

var sc_how_to = document.getElementById('how_to');
var btn_back = document.getElementById('btn_back');

var sc_num_players = document.getElementById('num_players');
var btn_num_two = document.getElementById('btn_num_two');
var btn_num_three = document.getElementById('btn_num_three');
var btn_num_four = document.getElementById('btn_num_four');

var sc_code_screen = document.getElementById('code_screen');
var sc_attack_screen = document.getElementById('attack_screen');
var sc_game_end_screen = document.getElementById('game_end_screen');

var btn_red = document.getElementById('fener_red');
var btn_blue = document.getElementById('fener_blue');
var btn_green = document.getElementById('fener_green');
var btn_yellow = document.getElementById('fener_yellow');

var btn_start_game = document.getElementById('btn_start_game')
var sc_start_game = document.getElementById('start_game');


var onWelcome = function (){
    sc_welcome.style.display='block';
    onFade();
};

var offWelcome = function(){
    sc_welcome.style.display='none';
};

var onFade = function(){
    fade.style.display='block'
}

var offFade = function(){
    fade.style.display='none';
}

btn_new_game.onclick = function() { 
    sc_welcome.style.display='none';
    sc_num_players.style.display='block';
}

btn_num_two.onclick = function() { choosePlayers(2); }
btn_num_three.onclick = function() { choosePlayers(3); }
btn_num_four.onclick = function() { choosePlayers(4); }

btn_how_to.onclick = function() {
    sc_welcome.style.display='none';
    sc_how_to.style.display='block';
}

btn_back.onclick = function() {
    sc_how_to.style.display='none';
    sc_welcome.style.display='block';
}

btn_start_game.onclick = function(){
    sc_start_game.style.display='none';
    offFade();
    prepare();
//        players[0].setNewPos(PL_X_POS[1][0],FLOOR_HEIGHT[1]);
//        players[1].setNewPos(PL_X_POS[1][1],FLOOR_HEIGHT[1]);
//        players[2].setNewPos(PL_X_POS[1][2],FLOOR_HEIGHT[1]);
//        players[3].setNewPos(PL_X_POS[1][3],FLOOR_HEIGHT[1]);
}

function choosePlayers(playerCount) {
    if (playerCount >= 2 && playerCount <= 4) {
        numPlayers = playerCount;
        sc_num_players.style.display='none';
        sc_start_game.style.display='block';
    }
}


