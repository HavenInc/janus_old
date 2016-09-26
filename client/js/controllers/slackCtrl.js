angular
  .module('app')
  .controller('SlackController', ['$scope', '$state', 'Slack', function($scope,
      $state, Slack) {

    // This is an example of a method that calls to the API and returns a value
    $scope.callRemoteMethod = function() {

      // The API call / remote method takes an object with parameters
      // Parameters are defined in the Slack.remoteMethod('sendMessage') inside
      // slack.js
      let remoteParams = {
        messagePayload: {
          msg: "Hello, World",
        }
      };

      Slack
        .sendMessage(remoteParams)
        .$promise
        .then(function(response) {

          // Handle the response and update UI here
          alert("Response is:" + response.result.alertMsg);
        });
    };
  }]);
