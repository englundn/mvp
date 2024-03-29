angular.module('sttqz.services', [])

.factory('newState', function() {
  //Add in method for randomly generating state
  return {
    stateName: 'California',
    stateCapital: 'Sacramento',
    stateImage: ''
  };
})
.factory('GetImages', function($http) {
  return function(stateName) {
    return $http.get('/api/' + stateName)
      .then(function(links) {
        return links.data.filter(function(url) {
          return url.indexOf('.png') === -1;
        });
      }, function(err) {
        console.error(err);
      });
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