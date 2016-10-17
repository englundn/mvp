angular.module('sttqz', [
  'sttqz.services',
  'sttqz.questions',
  // 'sttqz.answers',
  // 'sttqz.scorebar',
  'ui.router'])
.config(function($stateProvider, $urlRouterProvider) { //add other dependencies
  //set up routing
  $stateProvider
  //route for scorebar

  //route for question
  .state('question', {
    url: '/',
    templateUrl: 'app/questions/questions.html',
    controller: 'QuestionsController'
  })
  //route for answer
  .state('question.answer', {
    url: 'question/answer',
    templateUrl: 'answers.html',
    controller: 'AnswersController'  
  });

  $urlRouterProvider.otherwise('/question');
})
;

//add .run method if necessary