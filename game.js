const color = ["red", "blue", "green", "yellow"];
const gamePattern = [];
function nextSequence(){
    var ran = Math.random()*4;
    var randomNumber = Math.floor(ran);
    var randomChosenColour = randomNumber;
    gamePattern.push(color[randomChosenColour]);
    var iid = "#" + color[randomChosenColour];
    $(iid).fadeOut(100).fadeIn(100);
    var aud = new Audio("sounds/"+color[randomChosenColour]+".mp3");
    aud.play();
}
