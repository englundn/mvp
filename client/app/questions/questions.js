angular.module('sttqz.questions', [])

.controller('QuestionsController', function($scope) {

  $scope.stateName = stateData[$scope.stateNumber].name;
}); 