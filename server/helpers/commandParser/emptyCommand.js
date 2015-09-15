function EmptyCommand(app, message, slack, parameters) {
  this.type = 'EmptyCommand';
  this.app = app;
  this.message = message;
  this.slack = slack;
  this.parameters = parameters;
}

EmptyCommand.prototype.handleCommand = function() {
}

module.exports = EmptyCommand;
