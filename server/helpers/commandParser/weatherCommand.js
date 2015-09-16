var weatherjs = require('weather-js');

function WeatherCommand(app, message, slack, parameters) {
  this.type = 'WeatherCommand';
  this.app = app;
  this.message = message;
  this.slack = slack;
  this.parameters = parameters;
}

WeatherCommand.prototype.handleCommand = function () {
  var channel = this.slack.getChannelGroupOrDMByID(this.message.channel);
  var user = this.slack.getUserByID(this.message.user);

  if (this.parameters) {
    var locationName = this.parameters[0];
    weatherjs.find({search: locationName, degreeType:'F'}, function(err, result) {
      if (err) {
         console.log(err);
         return;
      }

      for (var i = 0; i < result.length; i++) {
        var weatherResult = result[i];
        var location = weatherResult.location;
        var current = weatherResult.current;
        var forecast = weatherResult.forecast;
        channel.send(location.name + '\'s current temperature is ' + current.temperature + location.degreetype + '.');
      }

      console.log("Weather data returned");
    });
  }
}

module.exports = WeatherCommand;
