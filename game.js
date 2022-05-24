let gamePattern = [];
let userClickedPattern = [];

//? Button Color Array
let buttonColours = ['red', 'blue', 'green', 'yellow'];

//? Creating random next sequence
function getNextSequence() {
  let randomNumber = Math.floor(Math.random() * 4);
  return randomNumber;
}

//? Selecting buttonColours array element(colour) with the random number created
let randomChosenColour = buttonColours[getNextSequence()];

gamePattern.push(randomChosenColour);

console.log(randomChosenColour);

//* jQuery

//? Fade Out & Fade In after Random Color is Chosen
$('#' + randomChosenColour)
  .fadeOut(200)
  .fadeIn(200);

// $(O).triggerHandler(eventType, { name: value });
$(document).ready(function () {});

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
// $('#' + randomChosenColour).click(function (e) {
//   e.preventDefault();
//   // colour = this.classList[1];
//   // playSound(colour);

// $('#' + randomChosenColour).click(function () {
//   $(this).add('pressed');
//   // setTimeout(() => {
//   //   // console.log(this);
//   //   $(this).remove('pressed');
//   // }, 1000);
// });
// console.log($(randomChosenColour));
// function animatePress(buttonColour) {
//   $('#' + buttonColour).fadeOut(200);
//   $('#' + buttonColour).fadeIn(200);
// }
// $(document).on('click', function () {
// $('input[type="button"]').click(function () {
//   console.log('pressed');
//   let userChosenColour = e.classList[1];
//   userClickedPattern.push(userChosenColour);
//   console.log(userClickedPattern);
// });
// });
