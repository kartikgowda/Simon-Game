let gamePattern = [];
let userClickedPattern = [];
let level = 0;

//? Button Colours
let buttonColours = ['red', 'blue', 'green', 'yellow'];

//* jQuery
$(document).keydown(function () {
  //? Selecting buttonColours array element(colour) with the random number created
  $('h1').text('Level ' + level);
  nextSequence();
  // let randomChosenColour = buttonColours[nextSequence()];
  // gamePattern.push(randomChosenColour);
});

$('.btn').click(function () {
  let userChosenColour = $(this).attr('id');
  userClickedPattern.push(userChosenColour);
  console.log(userClickedPattern);
  playSound(userChosenColour);
  animatePress(userChosenColour);
});

//? Playing Sounds with the randomChosenColour
function playSound(colour) {
  let audio = new Audio('/sounds/' + colour + '.mp3');
  audio.play();
}

// //? Button Press Animation
function animatePress(buttonColour) {
  $('#' + buttonColour).addClass('pressed');
  setTimeout(() => {
    $('#' + buttonColour).removeClass('pressed');
  }, 75);
}

//? Creating random next sequence
function nextSequence() {
  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColour = buttonColours[randomNumber];
  playSound(randomChosenColour);
  gamePattern.push(randomChosenColour);
  //? Fade Out & Fade In Animation after Random Color is Chosen
  $('#' + randomChosenColour)
    .fadeOut(200)
    .fadeIn(200);
  level = gamePattern.length;

  $('h1').text('Level ' + level);
  // return randomNumber;
}
