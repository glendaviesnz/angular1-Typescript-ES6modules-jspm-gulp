'use strict';

var path = require('path');
var gulp = require('gulp');

var karma = require('karma');

function runTests (done) {
  karma.server.start({
    configFile: path.join(__dirname, '/../../../karma.conf.js'),
  }, function() {
    done();
  });
}

gulp.task('test-develop', function(done) {
  runTests(done);
});
