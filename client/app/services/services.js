angular.module('sttqz.services', [])

.factory('newState', function() {
  //Add in method for randomly generating state
  return {
    stateName: 'California',
    stateCapital: 'Sacramento',
    stateImage: ''
  };
})
// .factory('AnswerResponse', function($scope) {
//   return {
//     correctAnswer: function() {
//       $scope.currentScore++;
//       $scope.highScore = Math.max($scope.currentScore, $scope.highScore);
//     },
//     wrongAnswer: function() {
//       $scope.currentScore = 0;  
//     }
//   };
// })
;