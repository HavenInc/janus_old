module.exports = function(Slack) {

  'use strict';

  // Send a message to a slack channel from here
  //
  Slack.sendMessage = function(messagePayload, cb) {

    let result = {};

    return cb(null, result);
  };

  Slack.remoteMethod('sendMessage', {
    accepts: [
      { arg: 'messagePayload', type: 'object' }
    ],
    returns: [
      { arg: 'result',
        type: 'object'
      }
    ]
  });

  // Receive messages from Slack here, triggered by slack's trigger word setup or bot functionality
  // Respond using Slack.sendMessage to the same channel
  //
  Slack.receiveMessage = function(messagePayload, cb) {

    let result = {};

    return cb(null, result);
  };

  Slack.remoteMethod('receiveMessage', {
    accepts: [
      { arg: 'messagePayload', type: 'object' }
    ],
    returns: [
      { arg: 'result',
        type: 'object'
      }
    ]
  });

};
