var app = require('../../server/server');
var assert = require('chai').assert;
var CommandParser = require('../../server/helpers/commandParser/commandParser');

var AwsCommand = require('../../server/helpers/commandParser/awsCommand');
var RateQuoteCommand = require('../../server/helpers/commandParser/rateQuoteCommand');
var WeatherCommand = require('../../server/helpers/commandParser/weatherCommand');
var EmptyCommand = require('../../server/helpers/commandParser/emptyCommand');
