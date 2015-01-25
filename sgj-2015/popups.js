/**
 * Created by Dean Panayotov Local on 25.1.2015 г..
 */

var fade = document.getElementById('fade');
var sc_welcome = document.getElementById('welcome');


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
