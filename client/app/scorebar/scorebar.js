angular.module('sttqz.scorebar', [])

.controller('ScorebarController', function($scope) {
  $scope.stateNumber = Math.floor(Math.random() * 50);
  $scope.currentScore = 0;
  $scope.highScore = 0;
  // $scope.stateName = state.stateName;
  // add state as a dependency, should contain all state information
}); 