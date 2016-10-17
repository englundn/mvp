angular.module('sttqz.services', [])

.factory('newState', function() {
  //Add in method for randomly generating state
  return {
    stateName: 'California',
    stateCapital: 'Sacramento',
    stateImage: ''
  };
});