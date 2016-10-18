angular.module('sttqz.questions', [])

.controller('QuestionsController', function($scope, $location) {
  $scope.stateNumber = Math.floor(Math.random() * 50);
  $scope.stateName = stateData[$scope.stateNumber].name;
  $location.path('/state/' + $scope.stateName);

  $scope.$on('checkAnswer', function(event, data) {
    $scope.stateNumber = Math.floor(Math.random() * 50);
    $scope.stateName = stateData[$scope.stateNumber].name;
  });
}); 