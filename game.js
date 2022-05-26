let gamePattern = [];
let userClickedPattern = [];
let level = 0;
let started = false;
let wrongSound = 'wrong';

//? Button Colours
let buttonColours = ['red', 'blue', 'green', 'yellow'];

//* jQuery
// function newGame() {
$(document).keydown(function () {
  if (!started) {
    //? Selecting buttonColours array element(colour) with the random number created
    nextSequence();
    $('h1').text('Level ' + level);
    started = true;
  }
});
// }
// if (started) {
$('.btn').click(function () {
  let userChosenColour = $(this).attr('id');
  userClickedPattern.push(userChosenColour);
  console.log(userClickedPattern);
  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.length - 1);
});
// }
//? Creating random next sequence
function nextSequence() {
  userClickedPattern = [];
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

function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] == userClickedPattern[currentLevel]) {
    console.log('Success');

    if (gamePattern.length === userClickedPattern.length) {
      setTimeout(() => {
        nextSequence();
      }, 1000);
    }
  } else {
    // console.log('Failure, useless trash cant even get Simon right');
    playSound(wrongSound);
    $('h1').text('GAME OVER. Press any key to restart game'); // Press any key to restart the game');
    $('body').addClass('game-over');
    setTimeout(() => {
      $('body').removeClass('game-over');
    }, 400);
    restartGame();
  }
}

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

function restartGame() {
  level = 0;
  gamePattern = [];
  userClickedPattern = [];
  started = false;
}
