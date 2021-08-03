$(document).ready(function() {
  var clock = $('.lambda-clock').FlipClock({
  	clockFace: 'TwelveHourClock'
  });
  clock.stop();
  // need to provide the value from the lambda here
  // clock.setFaceValue(value);
});
