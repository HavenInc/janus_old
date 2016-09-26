angular
  .module('app', [
    'lbServices',
    'ui.router'
  ])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider,
      $urlRouterProvider) {
    $stateProvider
      .state('slack', {
        url: '',
        templateUrl: 'views/slack.html',
        controller: 'SlackController'
      });

    $urlRouterProvider.otherwise('slack');
  }]);
