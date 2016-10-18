angular.module('sttqz.questions', [])

.controller('QuestionsController', function($scope) {
  $scope.stateNumber = Math.floor(Math.random() * 50);
  $scope.stateName = stateData[$scope.stateNumber].name;
  
  $scope.$on('checkAnswer', function(event, data) {
    $scope.stateNumber = Math.floor(Math.random() * 50);
    $scope.stateName = stateData[$scope.stateNumber].name;
  });
}); 