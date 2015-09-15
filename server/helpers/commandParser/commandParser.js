var EmptyCommand = require('./emptyCommand');
var WeatherCommand = require('./weatherCommand');
var AwsCommand = require('./awsCommand');
var RateQuoteCommand = require('./rateQuoteCommand');

// Constructor
function CommandParser(app) {
  this.app = app;
}

// Methods
CommandParser.prototype.tokenizeCommand = function(message) {
  var commandString = message.text;
  if (!commandString) {
    return [];
  }

  return commandString.split(" ");
};

CommandParser.prototype.commandObjectForMessage = function(message, slack) {
  var tokens = this.tokenizeCommand(message);
  if (tokens.length === 0) {
    return new EmptyCommand(message, slack, []);
  }

  // For now we assume first token is the 'command' and the rest are arguments
  // Likewise assume arguments for each command are in a specific order
  // TODO: Make the parsing and interpretation more modular e.g. natural language processing
  var command = tokens[0];
  var arguments = tokens.slice(1);

  // Construct and return the command object from the message
  if (command === 'weather') {
    return new WeatherCommand(this.app, message, slack, arguments);
  } else if (command === 'ratequote') {
    return new RateQuoteCommand(this.app, message, slack, arguments);
  } else if (command === 'aws') {
    return new AwsCommand(this.app, message, slack, arguments);
  } else {
    return new EmptyCommand(this.app, message, slack, []);
  }
};

CommandParser.prototype.respondToCommand = function(message, slack) {
  var command = this.commandObjectForMessage(message, slack);

  if (command) {
    command.handleCommand(slack);
  }
}

module.exports = CommandParser;
