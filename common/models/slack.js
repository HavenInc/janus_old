module.exports = function(Slack) {

  'use strict';

  // Send a message to a slack channel from here
  //
  Slack.sendMessage = function(messagePayload, cb) {
    console.log(messagePayload.msg);

    let result = {
      alertMsg: "Hello, World!"
    };
    return cb(null, result);
  };

  Slack.remoteMethod('sendMessage', {
    accepts: [
      {
        arg: 'message', 'type': 'string',
        arg: 'messagePayload', type: 'object'
      }
    ],
    returns: [
      { arg: 'result',
        type: 'object'
      }
    ]
  });

  // Receive messages from Slack here, triggered by slack's trigger word setup
  // or bot functionality.
  //
  // Respond using Slack.sendMessage to the same channel
  //
  // HINT: In order for Slack to hit this endpoint, it needs to be available
  //       on the internet *over HTTPS* using a hosting provider.
  //       If that's not feasible, look into Bot libraries that use Socket
  //       connections and add listener code to server.js or in a boot script
  //       that will trigger this method.
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
