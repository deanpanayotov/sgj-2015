/**
 * Created by Dean Panayotov Local on 28.1.2015 г..
 */

var PREPARE_TIME = 5000;
var PREPARE_CIRCLE_RADIUS = WIDTH/8;
var PREPARE_PROGRESS_THICKNESS = 32;
var PREPARE_PROGRESS_OFFSET = Math.PI / 2;

var shouldPrepare = false;
var endPrepare;

var prepare = function(){
    shouldPrepare = true;
    endPrepare = PREPARE_TIME + (new Date().getTime());
    setCancelPrepare();
}

var setCancelPrepare = function(){
    setTimeout(cancelPrepare, PREPARE_TIME);
}

var cancelPrepare = function(){
    shouldPrepare = false;
    onPrepareEnded();
}

var renderPrepare = function(){
    if(shouldPrepare){
        renderPrepareOuter();
        renderPrepareInner();
    }
}

var renderPrepareInner = function(){
    ctx.fillStyle = CL_BEIGE;
    ctx.beginPath();
    ctx.arc(WIDTH/2, HEIGHT/3, PREPARE_CIRCLE_RADIUS, 0, 2 * Math.PI, false);
    ctx.fill();
}

var renderPrepareOuter = function(){
    ctx.lineWidth = PREPARE_PROGRESS_THICKNESS;
    ctx.strokeStyle = CL_BLOOD_RED;
    ctx.beginPath();
    ctx.arc(WIDTH/2, HEIGHT/3, PREPARE_CIRCLE_RADIUS + PREPARE_PROGRESS_THICKNESS / 2,
            (2 * Math.PI * calculatePrepareTime())*(-1) + PREPARE_PROGRESS_OFFSET, PREPARE_PROGRESS_OFFSET, false);
    ctx.stroke();
}

var calculatePrepareTime = function(){
    var timeLeft = endPrepare - (new Date());
    if(timeLeft<=0){
        return 0;
    }
    return timeLeft/PREPARE_TIME;
}