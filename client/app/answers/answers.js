angular.module('sttqz.answers', [])

.controller('AnswersController', function($scope) {
  $scope.answers = ['Answer1', 'Answer2', 'Answer3'];
  // add state as a dependency, should contain all state information
});   