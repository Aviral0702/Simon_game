const color = ["red", "blue", "green", "yellow"];
const gamePattern = [];
function nextSequence(){
    var ran = Math.random()*4;
    var randomNumber = Math.floor(ran);
    return randomNumber;
}
var randomChosenColour = nextSequence();
gamePattern.push(color[randomChosenColour]);

var iid = "#" + color[randomChosenColour];
$(iid).fadeOut(100).fadeIn(100);