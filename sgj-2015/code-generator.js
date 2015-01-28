/**
 * Created by Dean Panayotov Local on 28.1.2015 г..
 */

var generateCode = function(numDigits) {
    var code = [];
    for(var i=0;i<numDigits;i++){
        code[i]=i;
    }
    return shuffle(code);
}

function shuffle(array) {
    var counter = array.length, temp, index;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
}