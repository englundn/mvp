angular.module('sttqz.scorebar', ['sttqz.answers'])

.controller('ScorebarController', function($scope) {

  $scope.currentScore = 0;
  $scope.highScore = 0;

  $scope.$on('checkAnswer', function(event, data) {
    if (data) {
      $scope.currentScore++;
      $scope.highScore = Math.max($scope.currentScore, $scope.highScore);
    } else {
      $scope.currentScore = 0;  
    }    
  });


  // $scope.stateName = state.stateName;
  // add state as a dependency, should contain all state information
}); 