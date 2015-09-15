var AWS = require('aws-sdk');
AWS.config.update({region: 'us-west-2'});

function AwsCommand(app, message, slack, parameters) {
  this.type = 'AwsCommand';
  this.app = app;
  this.message = message;
  this.slack = slack;
  this.parameters = parameters;

  this.ec2params = {
    ImageId: 'ami-fb415ecb', // Amazon Linux AMI x86_64 EBS
    InstanceType: 't2.micro',
    MinCount: 1, MaxCount: 1
  };
}

AwsCommand.prototype.handleCommand = function () {
  var channel = this.slack.getChannelGroupOrDMByID(this.message.channel);
  var user = this.slack.getUserByID(this.message.user);
  var ec2 = new AWS.EC2();

  // Check that the message format fits what we expect
  // Respond with hint text if it doesn't
  if (this.parameters.length == 0) {
    channel.send('aws requires the following parameters: aws [create <instanceName> | list]');
    return;
  }

  // Parse the arguments and either list or create ec2 instances
  var command = this.parameters[0];
  if (command === 'list') {
    ec2.describeTags(function(error, data) {
      if (error) {
        console.log(error); // an error occurred
      } else {
        console.log(data); // request succeeded
        var tags = data.Tags;
        for(var i = 0; i < tags.length; i++) {
          var instance = tags[i];
          var instanceId = instance.ResourceId;
          var nameValue = instance.Value;

          channel.send(instanceId + ' ' + nameValue);
        }
      }
    });
  } else if (command === 'create') {
    var instanceName = this.parameters[1];

    // Create the instance
    ec2.runInstances(this.ec2params, function(err, data) {
      if (err) { console.log("Could not create instance", err); return; }

      var instanceId = data.Instances[0].InstanceId;
      console.log("Created instance", instanceId);
      channel.send("Created instance " + instanceId + " with name " + instanceName);

      // Add tags to the instance
      params = { Resources: [instanceId],
                      Tags: [ {Key: 'Name', Value: instanceName}]};
      ec2.createTags(params, function(err) {
        console.log("Tagging instance", err ? "failure" : "success");
      });
    });

  }

}


module.exports = AwsCommand;
