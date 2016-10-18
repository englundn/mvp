angular.module('sttqz.answers', [])

.controller('AnswersController', function($scope) {

  //Generate random numbers that correspond to states
  var answerNums = [$scope.stateNumber];
  while (answerNums.length < 3) {
    var num = Math.floor(Math.random() * 50);
    if (answerNums.indexOf(num) === -1) {
      answerNums.push(num);
    }
  }

  //Generate an array of state capitals corresponding to random numbers
  $scope.answers = answerNums.map(function(num) {
    return stateData[num].capital;
  }).sort();

  $scope.checkAnswer = function(answer) {
    if (answer === stateData[$scope.stateNumber].capital) {
      $scope.$emit('checkAnswer', true);
    } else {
      $scope.$emit('checkAnswer', false);
    }
    var answerNums = [$scope.stateNumber];
    while (answerNums.length < 3) {
      var num = Math.floor(Math.random() * 50);
      if (answerNums.indexOf(num) === -1) {
        answerNums.push(num);
      }
    }
    $scope.answers = answerNums.map(function(num) {
      return stateData[num].capital;
    }).sort();
  };

});
