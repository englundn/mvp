angular.module('sttqz.answers', [])

.controller('AnswersController', function($scope) {

  var answerNums = [$scope.stateNumber];
  while (answerNums.length < 3) {
    var num = Math.floor(Math.random() * 50);
    if (answerNums.indexOf(num) === -1) {
      answerNums.push(num);
    }
  }

  $scope.answers = answerNums.map(function(num) {
    return stateData[num].capital;
  });

  // add state as a dependency, should contain all state information
});   