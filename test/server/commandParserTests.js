var app = require('../../server/server');
var assert = require('chai').assert;
var CommandParser = require('../../server/helpers/commandParser/commandParser');

var AwsCommand = require('../../server/helpers/commandParser/awsCommand');
var RateQuoteCommand = require('../../server/helpers/commandParser/rateQuoteCommand');
var WeatherCommand = require('../../server/helpers/commandParser/weatherCommand');
var EmptyCommand = require('../../server/helpers/commandParser/emptyCommand');

describe('Command Parser', function() {
  describe('#tokenizeCommand', function () {
    it('should split sentence into tokens/array of words', function () {
      var message = {"text" : "weather 90210"}
      var commandParser = new CommandParser(app);
      var tokens = commandParser.tokenizeCommand(message);

      assert.equal(2, tokens.length);
    });
  });

  describe('#commandObjectForString', function () {
    it('should return the correct command object for the string', function () {
      var message = {"text" : "weather 90210"}
      var slack = {};
      var commandParser = new CommandParser(app);
      var commandObject = commandParser.commandObjectForMessage(message, slack);
      assert.instanceOf(commandObject, WeatherCommand, 'Check that returned command object is a WeatherCommand');
      assert.notInstanceOf(commandObject, EmptyCommand, 'Check that returned command object isnt EmptyCommand');
    })
  });

  describe('#commandObjectForString', function () {
    it('should return the empty command object if no command given or unknown command given', function () {
      var commandParser = new CommandParser(app);

      // No command given
      var emptyMessage = {"text" : ""}
      var slack = {};
      var commandObject = commandParser.commandObjectForMessage(emptyMessage, slack);
      assert.instanceOf(commandObject, EmptyCommand, 'Check that returned command object is a EmptyCommand');
      assert.notInstanceOf(commandObject, WeatherCommand, 'Check that returned command object isnt WeatherCommand');

      // Unknown command given
      var unknownMessage = {"text" : "unknown 90210"}
      var slack = {};
      var commandObject = commandParser.commandObjectForMessage(unknownMessage, slack);
      assert.instanceOf(commandObject, EmptyCommand, 'Check that returned command object is a EmptyCommand');
      assert.notInstanceOf(commandObject, WeatherCommand, 'Check that returned command object isnt WeatherCommand');
    })
  });
})
