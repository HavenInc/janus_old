var loopback = require('loopback');
var boot = require('loopback-boot');

var app = module.exports = loopback();

// Load config settings
var configSettings = require('./config/staging.json'); // Should take into account node_evn but for time just assume we are deploying to staging
app.configSettings = configSettings;

// Start listening for slack API commands
var slackbot = require('./controllers/slack/slackbot')(app);

app.start = function() {
  // start the web server
  return app.listen(function() {
    app.emit('started');
    console.log('Web server listening at: %s', app.get('url'));
  });
};

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname, function(err) {
  if (err) throw err;

  // start the server if `$ node server.js`
  if (require.main === module)
    app.start();
});
