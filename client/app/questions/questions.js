angular.module('sttqz.questions', [])

.controller('QuestionsController', function($scope) {

  $scope.stateName = stateData[$scope.stateNumber].name;
  // add state as a dependency, should contain all state information
}); 