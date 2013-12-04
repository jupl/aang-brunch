// Bower related tasks
var execute = require('./lib').execute;
var localBinCommand = require('./lib').localBinCommand;

namespace('bower', function() {
  desc('Download and install Bower components');
  task('install', function() {
    return execute(localBinCommand('bower', 'install'));
  });

  desc('Clear Bower components');
  task('clean', function() {
    jake.rmRf('bower_components');
  });
});
