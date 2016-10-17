angular.module('sttqz', [
  'sttqz.services',
  'sttqz.questions',
  'sttqz.answers',
  'sttqz.scorebar',
  'ui.router'])
.config(function($stateProvider, $urlRouterProvider) { //add other dependencies
  //set up routing
  $stateProvider
  //route for scorebar
  .state('scorebar', {
    templateUrl: 'app/scorebar/scorebar.html',
    controller: 'ScorebarController'
  })
  //route for question
  .state('scorebar.question', {
    templateUrl: 'app/questions/questions.html',
    controller: 'QuestionsController'
  })
  //route for answer
  .state('scorebar.question.answer', {
    url: '/',  
    templateUrl: 'app/answers/answers.html',
    controller: 'AnswersController'  
  });

  $urlRouterProvider.otherwise('/');
})
;

//add .run method if necessary