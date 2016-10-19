angular.module('sttqz.questions', [])

.controller('QuestionsController', function($scope, $location, GetImages) {
  $scope.stateNumber = Math.floor(Math.random() * stateData.length);
  $scope.stateName = stateData[$scope.stateNumber].name;
  $location.path('/').search({state: $scope.stateName});

  GetImages($scope.stateName).then(function(urls) {
    var randomImages = [];
    for (var i = 0; i < 3; i++) {
      randomImages.push(Math.floor(Math.random() * urls.length));
    }
    $scope.imageUrls = randomImages.map(function (i) {
      return urls[i];
    });
  });

  $scope.$on('checkAnswer', function(event, data) {
    $scope.answered = true;
    $scope.correctAnswer = data;
    $scope.rightCapital = stateData[$scope.stateNumber].capital;
    $scope.stateNumber = Math.floor(Math.random() * 50);
    $scope.stateName = stateData[$scope.stateNumber].name;

    $location.path('/').search({state: $scope.stateName});

    GetImages($scope.stateName).then(function(urls) {
      var randomImages = [];
      for (var i = 0; i < 3; i++) {
        randomImages.push(Math.floor(Math.random() * urls.length));
      }
      $scope.imageUrls = randomImages.map(function (i) {
        return urls[i];
      });
    });
  });
}); 