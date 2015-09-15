function RateQuoteCommand(app, message, slack, parameters) {
  this.type = 'RateQuoteCommand';
  this.app = app;
  this.message = message;
  this.slack = slack;
  this.parameters = parameters;
}


RateQuoteCommand.prototype.handleCommand = function () {
  var channel = this.slack.getChannelGroupOrDMByID(this.message.channel);
  var user = this.slack.getUserByID(this.message.user);
 
  if (this.parameters) {
    var carrierName = this.parameters[0];
    this.app.models.rate.find({
      where: {carrier: carrierName},
      order: 'rate ASC'
    }, function(err, rates) {
        if (err) {
          console.log(err);
          return;
        }

        channel.send('The current rate for ' + carrierName + ' is ' + rates[0].rate);
    });
  }
}

module.exports = RateQuoteCommand;
