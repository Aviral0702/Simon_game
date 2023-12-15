var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

function animatePress(_currentColour){
    $("#"+_currentColour).addClass("pressed");
    setTimeout(function(){
        $("#"+_currentColour).removeClass("pressed");
    },100);
    
}

$(".btn").click(function() {
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  playSound("sounds/" + userChosenColour + ".mp3");
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.length-1);
});
function playSound(_name){

    var audio = new Audio(_name);
    audio.play();
}
var flag = false;
var level =0;
function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound("sounds/" + randomChosenColour + ".mp3"); 
  level++;
  $("#level-title").text("Level "+level);
}

$(document).keypress(function(event){
    if(flag===false){
        nextSequence();
        flag = true;
        
    }
});
function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        console.log("success");

        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function () {
                nextSequence();
            }, 1000);
        }

    } else {
        console.log("wrong");
    }
}

