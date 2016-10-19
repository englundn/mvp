angular.module('sttqz.scorebar', ['sttqz.answers'])

.controller('ScorebarController', function($scope, $http) {

  $scope.currentScore = 0;
  $scope.highScore = 0;

  $scope.signin = function() {
    console.log('scope', $scope.user);
    $http.post('/api/signin', JSON.stringify($scope.user))
      .then(function(response) {
        console.log(response);
      })
      .then(function(error) {
        conosole.error(error);
      });
  };
  // var stateData = allStateData.states;
  // $scope.stateQuiz = function() {
  //   stateData = allStateData.states;
  // };

  // $scope.countryQuiz = function() {
  //   stateData = allStateData.countries;
  // };

  $scope.$on('checkAnswer', function(event, data) {
    if (data) {
      $scope.currentScore++;
      $scope.highScore = Math.max($scope.currentScore, $scope.highScore);
    } else {
      $scope.currentScore = 0;  
    }    
  });
}); 